// Script to convert all 273 pages to use dynamic JSON configuration
// This makes all content, colors, and settings easily editable

const fs = require('fs');
const path = require('path');

// Template for page configuration structure
const createPageConfigTemplate = (pageType, pageData) => {
  return `// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = ${JSON.stringify(pageData, null, 2)};
`;
};

// Common configuration patterns
const commonConfigs = {
  header: {
    logo: "Brand Name",
    logoLink: "/",
    navigation: [],
    actions: {
      search: { enabled: true, link: "/search" },
      account: { enabled: true, link: "/account" },
      cart: { enabled: true, link: "/cart" }
    }
  },
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-300"
    },
    borders: {
      default: "border-gray-200"
    }
  },
  footer: {
    backgroundColor: "bg-white",
    borderColor: "border-gray-200",
    sections: [],
    copyright: "© 2025 Company Name."
  }
};

// Function to extract data from a page file
function extractPageData(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // This is a simplified extraction - in production, you'd use AST parsing
  const config = {
    // Extract colors from className strings
    // Extract text content
    // Extract links
    // Extract images
    // etc.
  };
  
  return config;
}

// Function to convert a page to dynamic format
function convertPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already converted
    if (content.includes('PAGE CONFIGURATION')) {
      console.log(`Skipping (already converted): ${filePath}`);
      return false;
    }
    
    // This would require complex AST parsing to fully automate
    // For now, we'll create the pattern and let manual conversion happen
    // or use a more sophisticated approach
    
    console.log(`Would convert: ${filePath}`);
    return false; // Don't auto-convert, just log
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Find all page.js files
function findPageFiles(dir) {
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
console.log('\nNote: Full automation requires AST parsing.');
console.log('For now, pages are being converted manually with the established pattern.');
console.log('\nPattern established in:');
console.log('- app/(home)/blazity-home/page.js');
console.log('- app/(products)/blazity-product-grid/page.js');
console.log('\nYou can now apply this pattern to other pages.');
