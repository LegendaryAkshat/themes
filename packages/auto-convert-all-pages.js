// Automated script to convert ALL 273 pages to dynamic configuration
// This script processes each page and extracts data into pageConfig

const fs = require('fs');
const path = require('path');

// Helper to extract data from JSX/React code
function extractPageData(content, filePath) {
  const config = {
    // Will be populated by parsing the file
  };
  
  // Extract brand name
  const brandMatch = content.match(/<Link[^>]*>([^<]+)<\/Link>/);
  if (brandMatch) {
    config.brand = { name: brandMatch[1].trim(), homeLink: "" };
  }
  
  // Extract colors from className
  const colorMatches = {
    background: content.match(/bg-(\w+-\d+)/g) || [],
    text: content.match(/text-(\w+-\d+)/g) || [],
    border: content.match(/border-(\w+-\d+)/g) || []
  };
  
  // Extract products array
  const productsMatch = content.match(/const products = (\[[\s\S]*?\]);/);
  if (productsMatch) {
    try {
      config.products = eval(productsMatch[1]);
    } catch (e) {
      // If eval fails, keep as string to parse later
    }
  }
  
  // Extract hero sections
  const heroMatch = content.match(/const hero\w* = (\[[\s\S]*?\]);/);
  if (heroMatch) {
    try {
      config.heroSections = eval(heroMatch[1]);
    } catch (e) {}
  }
  
  // Extract categories
  const categoriesMatch = content.match(/const categories = (\[[\s\S]*?\]);/);
  if (categoriesMatch) {
    try {
      config.categories = eval(categoriesMatch[1]);
    } catch (e) {}
  }
  
  return config;
}

// Generate pageConfig object from extracted data
function generatePageConfig(pageData, pageType, filePath) {
  const baseConfig = {
    // Colors - extract from common patterns
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
  
  // Add page-specific config
  if (pageData.brand) baseConfig.brand = pageData.brand;
  if (pageData.products) baseConfig.products = pageData.products;
  if (pageData.heroSections) baseConfig.heroSections = pageData.heroSections;
  if (pageData.categories) baseConfig.categories = pageData.categories;
  
  // Add header config
  baseConfig.header = {
    logo: pageData.brand?.name || "Brand",
    logoLink: pageData.brand?.homeLink || "/",
    navigation: [],
    actions: {
      search: { enabled: true, link: "/search" },
      account: { enabled: true, link: "/account" },
      cart: { enabled: true, link: "/cart" }
    }
  };
  
  return baseConfig;
}

// Convert a single page file
function convertPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already converted
    if (content.includes('PAGE CONFIGURATION') || content.includes('pageConfig')) {
      return { converted: false, reason: 'already converted' };
    }
    
    // Detect page type
    const pageType = detectPageType(filePath);
    
    // Extract data
    const pageData = extractPageData(content, filePath);
    
    // Generate config
    const pageConfig = generatePageConfig(pageData, pageType, filePath);
    
    // Create new content with config at top
    const configBlock = `// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = ${JSON.stringify(pageConfig, null, 2)};

`;
    
    // Find where to insert (after imports, before component)
    const importEnd = content.lastIndexOf('import');
    const importEndLine = content.indexOf('\n', importEnd) + 1;
    const componentStart = content.indexOf('export default');
    
    if (importEndLine > 0 && componentStart > importEndLine) {
      const beforeConfig = content.substring(0, importEndLine);
      const afterImports = content.substring(importEndLine, componentStart);
      const componentCode = content.substring(componentStart);
      
      // Insert config block
      const newContent = beforeConfig + configBlock + componentCode;
      
      // Write back
      fs.writeFileSync(filePath, newContent, 'utf8');
      return { converted: true, filePath };
    }
    
    return { converted: false, reason: 'could not find insertion point' };
  } catch (error) {
    return { converted: false, reason: error.message };
  }
}

// Detect page type
function detectPageType(filePath) {
  const lowerPath = filePath.toLowerCase();
  if (lowerPath.includes('home')) return 'home';
  if (lowerPath.includes('product-grid') || lowerPath.includes('product-list')) return 'product';
  if (lowerPath.includes('product-detail')) return 'productDetail';
  if (lowerPath.includes('cart')) return 'cart';
  if (lowerPath.includes('checkout')) return 'checkout';
  if (lowerPath.includes('login') || lowerPath.includes('register') || lowerPath.includes('signup')) return 'auth';
  if (lowerPath.includes('contact')) return 'contact';
  if (lowerPath.includes('blog')) return 'blog';
  if (lowerPath.includes('about')) return 'about';
  if (lowerPath.includes('faq')) return 'faq';
  if (lowerPath.includes('account')) return 'account';
  if (lowerPath.includes('category') || lowerPath.includes('categories')) return 'category';
  if (lowerPath.includes('search')) return 'search';
  if (lowerPath.includes('error') || lowerPath.includes('404') || lowerPath.includes('500')) return 'error';
  if (lowerPath.includes('component')) return 'component';
  return 'generic';
}

// Find all page files
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
    } else if (item === 'page.js' && !fullPath.includes('app/page.js') && !fullPath.includes('app/packages')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
const appDir = path.join(__dirname, '..', 'app');
const pageFiles = findPageFiles(appDir);

console.log(`\n🚀 Starting conversion of ${pageFiles.length} pages...\n`);

let converted = 0;
let skipped = 0;
let errors = 0;

pageFiles.forEach((file, index) => {
  const result = convertPageFile(file);
  if (result.converted) {
    converted++;
    if (converted % 10 === 0) {
      console.log(`  ✓ Converted ${converted} pages...`);
    }
  } else if (result.reason === 'already converted') {
    skipped++;
  } else {
    errors++;
    console.log(`  ✗ Error converting ${file}: ${result.reason}`);
  }
});

console.log(`\n✅ Conversion complete!`);
console.log(`   Converted: ${converted} pages`);
console.log(`   Skipped (already converted): ${skipped} pages`);
console.log(`   Errors: ${errors} pages`);
console.log(`   Total processed: ${pageFiles.length} pages\n`);
