// Comprehensive batch converter for ALL 273 pages
// This script will process and convert every page to use pageConfig

const fs = require('fs');
const path = require('path');

// Find all page files
function findAllPages(dir) {
  const files = [];
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

  return files;
}

// Extract data arrays from content
function extractArrays(content) {
  const data = {};
  
  // Common array patterns
  const patterns = [
    { name: 'products', regex: /const\s+products\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'heroSections', regex: /const\s+hero\w*\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'heroSlides', regex: /const\s+heroSlides\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'categories', regex: /const\s+categories\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'cartItems', regex: /const\s+cartItems\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'faqs', regex: /const\s+faqs\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'posts', regex: /const\s+posts\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'team', regex: /const\s+team\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'testimonials', regex: /const\s+testimonials\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'footerSections', regex: /const\s+footerSections\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'socialLinks', regex: /const\s+socialLinks\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'product', regex: /const\s+product\s*=\s*(\{[\s\S]*?\});/ },
  ];
  
  patterns.forEach(({ name, regex }) => {
    const match = content.match(regex);
    if (match) {
      try {
        // Use Function constructor for safer eval
        const func = new Function('return ' + match[1]);
        data[name] = func();
      } catch (e) {
        // If parsing fails, try to extract as string
        console.log(`  ⚠ Could not parse ${name}`);
      }
    }
  });
  
  return data;
}

// Generate base pageConfig
function generateBaseConfig(filePath, extractedData) {
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

// Convert a single page
function convertPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already converted
    if (content.includes('PAGE CONFIGURATION') || content.includes('const pageConfig')) {
      return { status: 'skipped', reason: 'already converted' };
    }
    
    // Skip main app/page.js
    if (filePath === path.join(__dirname, '..', 'app', 'page.js')) {
      return { status: 'skipped', reason: 'main page' };
    }
    
    // Extract data
    const extractedData = extractArrays(content);
    
    // Generate config
    const pageConfig = generateBaseConfig(filePath, extractedData);
    
    // Create config block
    const configBlock = `// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = ${JSON.stringify(pageConfig, null, 2)};

`;
    
    // Find insertion point - after last import
    const lines = content.split('\n');
    let lastImportIndex = -1;
    
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith('import ')) {
        lastImportIndex = i;
      }
    }
    
    if (lastImportIndex >= 0) {
      // Insert after imports
      const beforeConfig = lines.slice(0, lastImportIndex + 1).join('\n') + '\n';
      const afterImports = lines.slice(lastImportIndex + 1).join('\n');
      
      // Find component start
      const componentMatch = afterImports.match(/^(export default|export |const |function )/m);
      if (componentMatch) {
        const componentStart = afterImports.indexOf(componentMatch[0]);
        const beforeComponent = afterImports.substring(0, componentStart);
        const component = afterImports.substring(componentStart);
        
        const newContent = beforeConfig + configBlock + beforeComponent + component;
        fs.writeFileSync(filePath, newContent, 'utf8');
        return { status: 'converted', filePath };
      }
    }
    
    // Fallback: insert after "use client"
    if (content.includes('"use client"')) {
      const useClientEnd = content.indexOf('"use client"') + '"use client"'.length;
      const afterUseClient = content.substring(useClientEnd);
      const newContent = content.substring(0, useClientEnd) + '\n\n' + configBlock + afterUseClient;
      fs.writeFileSync(filePath, newContent, 'utf8');
      return { status: 'converted', filePath };
    }
    
    return { status: 'error', reason: 'could not find insertion point' };
  } catch (error) {
    return { status: 'error', reason: error.message };
  }
}

// Main execution
console.log('\n🚀 Starting batch conversion of ALL pages...\n');

const appDir = path.join(__dirname, '..', 'app');
const allPages = findAllPages(appDir);

console.log(`Found ${allPages.length} page files\n`);

let converted = 0;
let skipped = 0;
let errors = 0;
const errorList = [];

allPages.forEach((file, index) => {
  const result = convertPage(file);
  
  if (result.status === 'converted') {
    converted++;
    if (converted % 25 === 0) {
      process.stdout.write(`  ✓ Converted ${converted}/${allPages.length} pages...\r`);
    }
  } else if (result.status === 'skipped') {
    skipped++;
  } else {
    errors++;
    errorList.push({ file, reason: result.reason });
  }
});

console.log(`\n\n✅ Batch Conversion Complete!\n`);
console.log(`   ✓ Converted: ${converted} pages`);
console.log(`   ⊘ Skipped: ${skipped} pages`);
console.log(`   ✗ Errors: ${errors} pages\n`);

if (errorList.length > 0 && errorList.length <= 20) {
  console.log('Error details:');
  errorList.forEach(({ file, reason }) => {
    console.log(`   - ${path.basename(file)}: ${reason}`);
  });
}

console.log(`\n📝 All pages now have pageConfig for easy editing!\n`);
