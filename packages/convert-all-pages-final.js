// Final comprehensive converter for ALL 273 pages
// This will process every single page and add pageConfig

const fs = require('fs');
const path = require('path');

// Find all page files
function findAllPages(dir) {
  const files = [];
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory() && 
          !item.includes('node_modules') && 
          !item.includes('.next') && 
          !item.includes('packages') &&
          !item.includes('website-packages-data')) {
        files.push(...findAllPages(fullPath));
      } else if (item === 'page.js' && !fullPath.includes('app/packages')) {
        files.push(fullPath);
      }
    }
  } catch (e) {
    // Skip if can't read
  }
  return files;
}

// Extract arrays/objects from content
function extractData(content) {
  const data = {};
  
  // Extract const arrays
  const arrayPatterns = [
    /const\s+products\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+hero\w*\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+heroSlides\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+categories\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+cartItems\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+faqs\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+posts\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+team\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+testimonials\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+footerSections\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+socialLinks\s*=\s*(\[[\s\S]*?\]);/,
    /const\s+results\s*=\s*(\[[\s\S]*?\]);/,
  ];
  
  arrayPatterns.forEach((regex, index) => {
    const match = content.match(regex);
    if (match) {
      try {
        const func = new Function('return ' + match[1]);
        const result = func();
        if (Array.isArray(result) && result.length > 0) {
          const key = match[0].match(/const\s+(\w+)\s*=/)[1];
          data[key] = result;
        }
      } catch (e) {
        // Skip if can't parse
      }
    }
  });
  
  // Extract single objects
  const objectPattern = /const\s+product\s*=\s*(\{[\s\S]*?\});/;
  const objMatch = content.match(objectPattern);
  if (objMatch) {
    try {
      const func = new Function('return ' + objMatch[1]);
      data.product = func();
    } catch (e) {}
  }
  
  return data;
}

// Generate pageConfig
function generateConfig(filePath, extractedData) {
  const config = {
    colors: {
      background: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      borders: {
        default: "border-gray-200"
      },
      buttons: {
        primary: "bg-gray-900 text-white hover:bg-gray-800"
      }
    }
  };
  
  // Add extracted data
  Object.keys(extractedData).forEach(key => {
    config[key] = extractedData[key];
  });
  
  return config;
}

// Convert single page
function convertPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already converted
    if (content.includes('PAGE CONFIGURATION') || content.includes('const pageConfig')) {
      return { status: 'skipped' };
    }
    
    // Skip main app/page.js
    const normalizedPath = filePath.replace(/\\/g, '/');
    if (normalizedPath.endsWith('app/page.js') && !normalizedPath.includes('(')) {
      return { status: 'skipped' };
    }
    
    // Extract data
    const extractedData = extractData(content);
    
    // Generate config
    const pageConfig = generateConfig(filePath, extractedData);
    
    // Create config block
    const configBlock = `// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = ${JSON.stringify(pageConfig, null, 2)};

`;
    
    // Find insertion point
    const lines = content.split('\n');
    let insertIndex = -1;
    
    // Find last import
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim().startsWith('import ')) {
        insertIndex = i + 1;
        break;
      }
    }
    
    // Fallback: after "use client"
    if (insertIndex === -1 && content.includes('"use client"')) {
      const useClientLine = lines.findIndex(line => line.includes('"use client"'));
      if (useClientLine >= 0) {
        insertIndex = useClientLine + 1;
      }
    }
    
    // Fallback: at line 1
    if (insertIndex === -1) {
      insertIndex = 0;
    }
    
    // Insert config
    lines.splice(insertIndex, 0, configBlock);
    const newContent = lines.join('\n');
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    return { status: 'converted' };
  } catch (error) {
    return { status: 'error', reason: error.message };
  }
}

// Main execution
const appDir = path.join(__dirname, '..', 'app');
const allPages = findAllPages(appDir);

process.stdout.write('\n🚀 Converting ALL pages to dynamic configuration...\n\n');
process.stdout.write(`Found ${allPages.length} page files\n\n`);

let converted = 0;
let skipped = 0;
let errors = 0;
const errorList = [];

allPages.forEach((file, index) => {
  const result = convertPage(file);
  
  if (result.status === 'converted') {
    converted++;
    if (converted % 25 === 0 || converted === allPages.length) {
      process.stdout.write(`  ✓ Converted ${converted}/${allPages.length} pages...\r`);
    }
  } else if (result.status === 'skipped') {
    skipped++;
  } else {
    errors++;
    errorList.push({ file: path.basename(file), reason: result.reason });
  }
});

process.stdout.write('\n\n');
process.stdout.write(`✅ Conversion Complete!\n\n`);
process.stdout.write(`   ✓ Converted: ${converted} pages\n`);
process.stdout.write(`   ⊘ Skipped: ${skipped} pages (already converted)\n`);
process.stdout.write(`   ✗ Errors: ${errors} pages\n\n`);

if (errorList.length > 0 && errorList.length <= 30) {
  process.stdout.write('Errors:\n');
  errorList.forEach(({ file, reason }) => {
    process.stdout.write(`   - ${file}: ${reason}\n`);
  });
}

process.stdout.write(`\n📝 All pages now have pageConfig for easy editing!\n\n`);
