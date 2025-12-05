// Batch conversion script for making all pages dynamic
// This script helps convert pages to use pageConfig pattern

const fs = require('fs');
const path = require('path');

// Page type templates
const pageTemplates = {
  home: {
    config: {
      brand: { name: "", homeLink: "" },
      colors: {
        background: "bg-white",
        text: { primary: "text-gray-900", secondary: "text-gray-600" },
        borders: { default: "border-gray-200" }
      },
      header: { logo: "", logoLink: "", navigation: [], actions: {} },
      heroSections: [],
      categories: [],
      products: [],
      newsletter: { enabled: true, title: "", description: "" },
      footer: { sections: [], copyright: "" }
    }
  },
  productGrid: {
    config: {
      brand: { name: "", homeLink: "" },
      colors: {
        background: "bg-white",
        text: { primary: "text-gray-900", secondary: "text-gray-600" },
        borders: { default: "border-gray-200" }
      },
      header: { logo: "", logoLink: "", cartLink: "" },
      page: { title: "", subtitle: "" },
      products: [],
      grid: { columns: { mobile: "grid-cols-1", tablet: "sm:grid-cols-2", desktop: "lg:grid-cols-3" }, gap: "gap-6" }
    }
  },
  productDetail: {
    config: {
      brand: { name: "", homeLink: "", productsLink: "" },
      colors: {
        background: "bg-white",
        text: { primary: "text-gray-900", secondary: "text-gray-600" },
        borders: { default: "border-gray-200" },
        buttons: { primary: "bg-gray-900 text-white hover:bg-gray-800" }
      },
      header: { logo: "", logoLink: "", cartLink: "" },
      product: {
        name: "",
        price: "",
        images: [],
        description: "",
        features: [],
        inStock: true
      },
      navigation: { backText: "", backLink: "" },
      actions: { addToCart: { enabled: true, text: "Add to Cart" } }
    }
  },
  cart: {
    config: {
      brand: { name: "", homeLink: "" },
      colors: {
        background: "bg-white",
        text: { primary: "text-gray-900", secondary: "text-gray-600" },
        borders: { default: "border-gray-200" },
        buttons: { primary: "bg-gray-900 text-white hover:bg-gray-800" }
      },
      header: { logo: "", logoLink: "", cartLink: "" },
      page: { title: "Shopping Cart", continueShoppingText: "", continueShoppingLink: "" },
      cartItems: [],
      pricing: { freeShippingThreshold: 100, shippingCost: 10.00, taxRate: 0.08 },
      checkout: { buttonText: "", link: "" }
    }
  }
};

// Function to detect page type
function detectPageType(filePath) {
  if (filePath.includes('home')) return 'home';
  if (filePath.includes('product-grid') || filePath.includes('product-list')) return 'productGrid';
  if (filePath.includes('product-detail')) return 'productDetail';
  if (filePath.includes('cart')) return 'cart';
  if (filePath.includes('checkout')) return 'checkout';
  if (filePath.includes('account')) return 'account';
  if (filePath.includes('login') || filePath.includes('register')) return 'auth';
  if (filePath.includes('blog')) return 'blog';
  if (filePath.includes('contact')) return 'contact';
  if (filePath.includes('about')) return 'about';
  if (filePath.includes('faq')) return 'faq';
  return 'generic';
}

// Generate config comment block
function generateConfigBlock(config, pageType) {
  return `// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = ${JSON.stringify(config, null, 2)};
`;
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
    } else if (item === 'page.js' && !fullPath.includes('app/page.js')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
const appDir = path.join(__dirname, '..', 'app');
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files`);
console.log('\nPage type distribution:');

const typeCounts = {};
pageFiles.forEach(file => {
  const type = detectPageType(file);
  typeCounts[type] = (typeCounts[type] || 0) + 1;
});

Object.entries(typeCounts).forEach(([type, count]) => {
  console.log(`  ${type}: ${count} pages`);
});

console.log('\n✅ Pattern established in:');
console.log('  - app/(home)/blazity-home/page.js');
console.log('  - app/(products)/blazity-product-grid/page.js');
console.log('  - app/(products)/catalyst-product-detail/page.js');
console.log('  - app/(cart)/blazity-cart/page.js');
console.log('\n📝 See DYNAMIC_PAGES_GUIDE.md for conversion instructions');
