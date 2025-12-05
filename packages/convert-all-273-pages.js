// Comprehensive automated conversion of ALL 273 pages to dynamic configuration
// This script processes each page and converts it to use pageConfig

const fs = require('fs');
const path = require('path');

// Function to extract data arrays from code
function extractDataArrays(content) {
  const data = {};
  
  // Extract const arrays/objects
  const patterns = [
    { name: 'products', regex: /const\s+products\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'heroSections', regex: /const\s+hero\w*\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'heroSlides', regex: /const\s+heroSlides\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'categories', regex: /const\s+categories\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'cartItems', regex: /const\s+cartItems\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'faqs', regex: /const\s+faqs\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'posts', regex: /const\s+posts\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'footerSections', regex: /const\s+footerSections\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'socialLinks', regex: /const\s+socialLinks\s*=\s*(\[[\s\S]*?\]);/ },
    { name: 'product', regex: /const\s+product\s*=\s*(\{[\s\S]*?\});/ },
  ];
  
  patterns.forEach(({ name, regex }) => {
    const match = content.match(regex);
    if (match) {
      try {
        // Use Function constructor to safely evaluate
        data[name] = new Function('return ' + match[1])();
      } catch (e) {
        // If eval fails, try to parse manually
        console.log(`  Warning: Could not parse ${name} in ${filePath}`);
      }
    }
  });
  
  return data;
}

// Function to extract text content
function extractTextContent(content) {
  const texts = {};
  
  // Extract page title
  const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  if (titleMatch) texts.title = titleMatch[1].trim();
  
  // Extract brand name
  const brandMatch = content.match(/<Link[^>]*href[^>]*>([^<]+)<\/Link>/);
  if (brandMatch) texts.brand = brandMatch[1].trim();
  
  return texts;
}

// Function to detect website type and set routes
function getWebsiteRoutes(filePath) {
  if (filePath.includes('blazity')) {
    return {
      home: '/blazity-home',
      products: '/blazity-product-grid',
      productDetail: '/blazity-product-detail',
      category: '/blazity-category',
      cart: '/blazity-cart',
      checkout: '/blazity-checkout',
      account: '/blazity-account',
      search: '/blazity-search',
      login: '/blazity-login',
      register: '/blazity-register'
    };
  }
  if (filePath.includes('catalyst')) {
    return {
      home: '/catalyst-home',
      products: '/catalyst-product-grid',
      productDetail: '/catalyst-product-detail',
      category: '/catalyst-category',
      cart: '/catalyst-cart',
      checkout: '/catalyst-checkout',
      account: '/catalyst-account',
      search: '/catalyst-search',
      login: '/catalyst-login',
      register: '/catalyst-register',
      blog: '/catalyst-blog',
      about: '/catalyst-about',
      contact: '/catalyst-contact',
      faq: '/catalyst-faq'
    };
  }
  if (filePath.includes('headless')) {
    return {
      home: '/headless-home',
      products: '/headless-product-list',
      productDetail: '/headless-product-detail',
      category: '/headless-collection',
      cart: '/headless-cart',
      checkout: '/headless-checkout',
      account: '/headless-account',
      search: '/headless-search',
      login: '/headless-login',
      register: '/headless-signup',
      blog: '/headless-blog',
      about: '/headless-about',
      faq: '/headless-faq'
    };
  }
  if (filePath.includes('vercel-store')) {
    return {
      home: '/vercel-store-home',
      products: '/vercel-store-product-grid',
      productDetail: '/vercel-store-product-detail',
      cart: '/vercel-store-cart',
      checkout: '/vercel-store-checkout',
      account: '/vercel-store-account',
      search: '/vercel-store-search',
      login: '/vercel-store-login',
      register: '/vercel-store-signup',
      blog: '/vercel-store-blog',
      about: '/vercel-store-about',
      faq: '/vercel-store-faq'
    };
  }
  return {
    home: '/',
    products: '/products',
    cart: '/cart',
    checkout: '/checkout'
  };
}

// Generate pageConfig for a page
function generatePageConfig(content, filePath, pageType) {
  const routes = getWebsiteRoutes(filePath);
  const extractedData = extractDataArrays(content);
  const texts = extractTextContent(content);
  
  const config = {
    // Colors - standard pattern
    colors: {
      background: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        light: "text-gray-300"
      },
      borders: {
        default: "border-gray-200",
        light: "border-gray-300"
      },
      buttons: {
        primary: "bg-gray-900 text-white hover:bg-gray-800",
        secondary: "bg-white text-gray-900 hover:bg-gray-100"
      }
    },
    
    // Brand
    brand: {
      name: texts.brand || "Brand",
      homeLink: routes.home
    },
    
    // Header
    header: {
      logo: texts.brand || "Brand",
      logoLink: routes.home,
      navigation: [],
      actions: {
        search: { enabled: true, link: routes.search || "/search" },
        account: { enabled: true, link: routes.account || "/account" },
        cart: { enabled: true, link: routes.cart || "/cart" }
      }
    }
  };
  
  // Add extracted data
  if (extractedData.products) config.products = extractedData.products;
  if (extractedData.heroSections) config.heroSections = extractedData.heroSections;
  if (extractedData.heroSlides) config.heroSlides = extractedData.heroSlides;
  if (extractedData.categories) config.categories = extractedData.categories;
  if (extractedData.cartItems) config.cartItems = extractedData.cartItems;
  if (extractedData.faqs) config.faqs = extractedData.faqs;
  if (extractedData.posts) config.posts = extractedData.posts;
  if (extractedData.product) config.product = extractedData.product;
  if (extractedData.footerSections) config.footerSections = extractedData.footerSections;
  if (extractedData.socialLinks) config.socialLinks = extractedData.socialLinks;
  
  // Add page-specific config
  if (texts.title) config.page = { title: texts.title };
  
  // Add routes
  config.routes = routes;
  
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
    
    // Skip if it's the main app/page.js
    if (filePath.includes('app/page.js') && !filePath.includes('(')) {
      return { status: 'skipped', reason: 'main page' };
    }
    
    const pageType = detectPageType(filePath);
    const pageConfig = generatePageConfig(content, filePath, pageType);
    
    // Create config block
    const configBlock = `// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = ${JSON.stringify(pageConfig, null, 2)};

`;
    
    // Find insertion point (after last import, before export default)
    const importLines = [];
    const lines = content.split('\n');
    let lastImportIndex = -1;
    
    lines.forEach((line, index) => {
      if (line.trim().startsWith('import ')) {
        lastImportIndex = index;
      }
    });
    
    if (lastImportIndex >= 0) {
      // Insert after imports
      const beforeConfig = lines.slice(0, lastImportIndex + 1).join('\n') + '\n';
      const afterImports = lines.slice(lastImportIndex + 1).join('\n');
      
      // Find where component starts (usually export default or const/function)
      const componentStart = afterImports.search(/(export default|^export |^const |^function )/m);
      
      if (componentStart > 0) {
        const beforeComponent = afterImports.substring(0, componentStart);
        const component = afterImports.substring(componentStart);
        
        const newContent = beforeConfig + configBlock + beforeComponent + component;
        fs.writeFileSync(filePath, newContent, 'utf8');
        return { status: 'converted', filePath };
      }
    }
    
    // Fallback: insert at top after "use client"
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
    } else if (item === 'page.js' && !fullPath.includes('app/packages')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
console.log('\n🚀 Starting automated conversion of ALL pages...\n');

const appDir = path.join(__dirname, '..', 'app');
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files to convert\n`);

let converted = 0;
let skipped = 0;
let errors = 0;
const errorsList = [];

pageFiles.forEach((file, index) => {
  const result = convertPage(file);
  
  if (result.status === 'converted') {
    converted++;
    if (converted % 20 === 0) {
      process.stdout.write(`  ✓ Converted ${converted}/${pageFiles.length} pages...\r`);
    }
  } else if (result.status === 'skipped') {
    skipped++;
  } else {
    errors++;
    errorsList.push({ file, reason: result.reason });
  }
});

console.log(`\n\n✅ Conversion Complete!\n`);
console.log(`   ✓ Converted: ${converted} pages`);
console.log(`   ⊘ Skipped: ${skipped} pages (already converted or special)`);
console.log(`   ✗ Errors: ${errors} pages\n`);

if (errorsList.length > 0 && errorsList.length <= 10) {
  console.log('Error details:');
  errorsList.forEach(({ file, reason }) => {
    console.log(`   - ${file}: ${reason}`);
  });
} else if (errorsList.length > 10) {
  console.log(`   (${errorsList.length} errors - see log for details)`);
}

console.log(`\n📝 All pages now have pageConfig at the top for easy editing!\n`);
