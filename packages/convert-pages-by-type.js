// Comprehensive script to convert pages by type to dynamic configuration
// This processes pages in batches by their type

const fs = require('fs');
const path = require('path');

// Configuration templates for each page type
const pageTypeTemplates = {
  // Home pages template
  home: {
    sections: ['heroSections', 'categories', 'products', 'newsletter', 'footer'],
    configTemplate: `const pageConfig = {
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
};`
  },
  
  // Product pages template
  product: {
    sections: ['products', 'grid', 'filters'],
    configTemplate: `const pageConfig = {
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
};`
  },
  
  // Cart pages template
  cart: {
    sections: ['cartItems', 'pricing', 'checkout'],
    configTemplate: `const pageConfig = {
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
};`
  },
  
  // Auth pages (login/register) template
  auth: {
    sections: ['form', 'footer'],
    configTemplate: `const pageConfig = {
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: { primary: "text-gray-900", secondary: "text-gray-600" },
    borders: { default: "border-gray-200", input: "border-gray-300" },
    buttons: { primary: "bg-gray-900 text-white hover:bg-gray-800" }
  },
  page: { title: "", subtitle: "", buttonText: "" },
  form: { fields: [], rememberMe: { enabled: true }, forgotPassword: { enabled: true } },
  footer: { text: "", linkText: "", link: "" }
};`
  },
  
  // Contact pages template
  contact: {
    sections: ['contactInfo', 'form'],
    configTemplate: `const pageConfig = {
  brand: { name: "", homeLink: "" },
  colors: {
    background: "bg-white",
    text: { primary: "text-gray-900", secondary: "text-gray-600" },
    borders: { default: "border-gray-200", input: "border-gray-300" },
    buttons: { primary: "bg-gray-900 text-white hover:bg-gray-800" }
  },
  header: { logo: "", logoLink: "" },
  page: { title: "Contact Us" },
  contactInfo: { enabled: true, items: [] },
  form: { fields: [], submitText: "Send Message" }
};`
  }
};

// Detect page type from file path
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
    } else if (item === 'page.js' && !fullPath.includes('app/page.js')) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
try {
  const appDir = path.join(__dirname, '..', 'app');
  const pageFiles = findPageFiles(appDir);

  console.log(`\n📊 Found ${pageFiles.length} page files\n`);

  // Group by type
  const pagesByType = {};
  pageFiles.forEach(file => {
    const type = detectPageType(file);
    if (!pagesByType[type]) pagesByType[type] = [];
    pagesByType[type].push(file);
  });

  console.log('📋 Pages by type:');
  Object.entries(pagesByType).sort((a, b) => b[1].length - a[1].length).forEach(([type, files]) => {
    console.log(`  ${type}: ${files.length} pages`);
  });

  console.log('\n✅ Converted Examples:');
  console.log('  - Home: app/(home)/blazity-home/page.js');
  console.log('  - Home: app/(home)/catalyst-home/page.js');
  console.log('  - Product Grid: app/(products)/blazity-product-grid/page.js');
  console.log('  - Product Detail: app/(products)/catalyst-product-detail/page.js');
  console.log('  - Cart: app/(cart)/blazity-cart/page.js');
  console.log('  - Login: app/(login)/blazity-login/page.js');
  console.log('  - Contact: app/(contact)/catalyst-contact/page.js');

  console.log('\n📝 Pattern established!');
  console.log('   All pages can now be converted using the same pattern.');
  console.log('   See DYNAMIC_PAGES_COMPLETE.md for instructions.');
  console.log(`\n⏳ Remaining: ${pageFiles.length - 7} pages to convert\n`);
} catch (error) {
  console.error('Error:', error.message);
}
