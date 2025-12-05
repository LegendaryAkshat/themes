// Simple script: Add pageConfig to ALL pages that don't have it
const fs = require('fs');
const path = require('path');

function findPages(dir) {
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
        files.push(...findPages(fullPath));
      } else if (item === 'page.js' && !fullPath.includes('packages')) {
        files.push(fullPath);
      }
    }
  } catch (e) {}
  return files;
}

function addConfig(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('PAGE CONFIGURATION')) return 'skipped';
    
    const config = `// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  colors: {
    background: "bg-white",
    text: { primary: "text-gray-900", secondary: "text-gray-600" },
    borders: { default: "border-gray-200" },
    buttons: { primary: "bg-gray-900 text-white hover:bg-gray-800" }
  }
};

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
    
    lines.splice(insertAt, 0, config);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    return 'added';
  } catch (e) {
    return 'error';
  }
}

const pages = findPages('./app');
console.log(`\nProcessing ${pages.length} pages...\n`);

let added = 0, skipped = 0, errors = 0;
pages.forEach((file, i) => {
  const result = addConfig(file);
  if (result === 'added') {
    added++;
    if (added % 50 === 0) console.log(`Added config to ${added} pages...`);
  } else if (result === 'skipped') skipped++;
  else errors++;
});

console.log(`\n✅ Complete!`);
console.log(`   Added: ${added}`);
console.log(`   Skipped: ${skipped}`);
console.log(`   Errors: ${errors}\n`);
