// Script to convert all pages to use dynamic JSON configuration
// This extracts hardcoded data and makes it easily editable

const fs = require('fs');
const path = require('path');

// Helper function to create page config structure
function createPageConfig(pageContent, pagePath) {
  // This is a template - actual implementation would parse the page
  // and extract all hardcoded values into a config object
  
  const config = {
    // Colors will be extracted from className strings
    // Text content will be extracted from JSX
    // Links will be extracted from href attributes
    // Images will be extracted from src or content
  };
  
  return config;
}

// Function to convert a page to use dynamic config
function convertPageToDynamic(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // This is a simplified version - in reality, we'd need a proper AST parser
  // For now, we'll create a pattern that can be manually applied
  
  console.log(`Processing: ${filePath}`);
  
  // The actual conversion would be complex and require AST parsing
  // For now, we'll create example templates
  
  return content;
}

// Find all page.js files
function findPageFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.next') && !item.includes('packages')) {
      files.push(...findPageFiles(fullPath));
    } else if (item === 'page.js') {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
const appDir = path.join(__dirname, '..', 'app');
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files`);
console.log('Note: This script provides the pattern. Manual conversion recommended for complex pages.');
