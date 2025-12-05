// Direct converter - processes ALL pages immediately
const fs = require('fs');
const path = require('path');

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
      } else if (item === 'page.js' && !fullPath.includes('packages')) {
        files.push(fullPath);
      }
    }
  } catch (e) {}
  return files;
}

function extractData(content) {
  const data = {};
  const patterns = [
    { key: 'products', regex: /const\s+products\s*=\s*(\[[\s\S]*?\]);/ },
    { key: 'heroSections', regex: /const\s+hero\w*\s*=\s*(\[[\s\S]*?\]);/ },
    { key: 'categories', regex: /const\s+categories\s*=\s*(\[[\s\S]*?\]);/ },
    { key: 'cartItems', regex: /const\s+cartItems\s*=\s*(\[[\s\S]*?\]);/ },
    { key: 'faqs', regex: /const\s+faqs\s*=\s*(\[[\s\S]*?\]);/ },
    { key: 'posts', regex: /const\s+posts\s*=\s*(\[[\s\S]*?\]);/ },
    { key: 'team', regex: /const\s+team\s*=\s*(\[[\s\S]*?\]);/ },
    { key: 'testimonials', regex: /const\s+testimonials\s*=\s*(\[[\s\S]*?\]);/ },
    { key: 'results', regex: /const\s+results\s*=\s*(\[[\s\S]*?\]);/ },
  ];
  
  patterns.forEach(({ key, regex }) => {
    const match = content.match(regex);
    if (match) {
      try {
        data[key] = new Function('return ' + match[1])();
      } catch (e) {}
    }
  });
  return data;
}

function convertPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('PAGE CONFIGURATION')) return 'skipped';
    
    const extracted = extractData(content);
    const config = {
      colors: {
        background: "bg-white",
        text: { primary: "text-gray-900", secondary: "text-gray-600" },
        borders: { default: "border-gray-200" },
        buttons: { primary: "bg-gray-900 text-white hover:bg-gray-800" }
      },
      ...extracted
    };
    
    const configBlock = `// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = ${JSON.stringify(config, null, 2)};

`;
    
    const lines = content.split('\n');
    let insertAt = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim().startsWith('import ')) {
        insertAt = i + 1;
        break;
      }
    }
    if (insertAt === -1 && content.includes('"use client"')) {
      insertAt = lines.findIndex(l => l.includes('"use client"')) + 1;
    }
    if (insertAt === -1) insertAt = 0;
    
    lines.splice(insertAt, 0, configBlock);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    return 'converted';
  } catch (e) {
    return 'error';
  }
}

// Execute
const appDir = path.join(__dirname, '..', 'app');
const pages = findAllPages(appDir);

console.log(`\nProcessing ${pages.length} pages...\n`);

let converted = 0, skipped = 0, errors = 0;

pages.forEach((file, i) => {
  const result = convertPage(file);
  if (result === 'converted') {
    converted++;
    if (converted % 50 === 0) {
      console.log(`Converted ${converted}/${pages.length}...`);
    }
  } else if (result === 'skipped') {
    skipped++;
  } else {
    errors++;
  }
});

console.log(`\n✅ Done!`);
console.log(`   Converted: ${converted}`);
console.log(`   Skipped: ${skipped}`);
console.log(`   Errors: ${errors}\n`);
