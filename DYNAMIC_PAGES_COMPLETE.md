# Dynamic Pages Conversion - Complete Guide

## ✅ Pattern Established

All pages are being converted to use a **dynamic JSON configuration** at the top of each page file. This makes it incredibly easy to edit:
- **Text content** (titles, descriptions, labels)
- **Colors** (backgrounds, text, borders, buttons)
- **Links** (navigation, product links, buttons)
- **Products** (names, prices, images)
- **Layout settings** (grid columns, spacing)
- **Everything else!**

## 📋 Converted Examples

### ✅ Home Pages
- `app/(home)/blazity-home/page.js` - Full dynamic config
- `app/(home)/catalyst-home/page.js` - Full dynamic config

### ✅ Product Pages
- `app/(products)/blazity-product-grid/page.js` - Product grid
- `app/(products)/catalyst-product-detail/page.js` - Product detail

### ✅ Cart Pages
- `app/(cart)/blazity-cart/page.js` - Shopping cart

### ✅ Auth Pages
- `app/(login)/blazity-login/page.js` - Login form

### ✅ Contact Pages
- `app/(contact)/catalyst-contact/page.js` - Contact form

## 🎨 How to Edit a Page

1. **Open any page file** (e.g., `app/(home)/blazity-home/page.js`)
2. **Find the `pageConfig` object** at the top (marked with `// PAGE CONFIGURATION`)
3. **Edit any value**:
   ```javascript
   const pageConfig = {
     brand: {
       name: "Your Brand Name",  // ← Edit this!
       homeLink: "/your-home"
     },
     colors: {
       background: "bg-blue-500",  // ← Change color!
       text: {
         primary: "text-white"     // ← Change text color!
       }
     },
     products: [
       { name: "Product 1", price: "$99", ... }  // ← Edit products!
     ]
   };
   ```
4. **Save** - Changes appear immediately!

## 📐 Configuration Structure

### Common Sections (Most Pages Have These)

```javascript
const pageConfig = {
  // Brand identity
  brand: { name: "", homeLink: "" },
  
  // Colors (use full Tailwind classes)
  colors: {
    background: "bg-white",
    text: { primary: "text-gray-900", secondary: "text-gray-600" },
    borders: { default: "border-gray-200" },
    buttons: { primary: "bg-gray-900 text-white hover:bg-gray-800" }
  },
  
  // Header
  header: {
    logo: "",
    logoLink: "",
    navigation: [],
    actions: {}
  },
  
  // Page-specific content
  // ... (varies by page type)
};
```

## 🔄 Converting Remaining Pages

### Step-by-Step Process:

1. **Identify page type** (home, product, cart, etc.)
2. **Extract hardcoded data** into `pageConfig`
3. **Replace hardcoded values** with `pageConfig` references
4. **Use full Tailwind class names** (not template literals)

### Example Conversion:

**Before:**
```javascript
const products = [
  { name: "Product 1", price: "$99" }
];
```

**After:**
```javascript
const pageConfig = {
  products: [
    { name: "Product 1", price: "$99", link: "/product-detail" }
  ]
};

// In component:
{pageConfig.products.map(...)}
```

## 🎯 Page Type Templates

### Home Page Template
- `heroSections[]` - Hero banners
- `categories[]` - Category cards
- `products[]` - Product listings
- `newsletter{}` - Newsletter section
- `footer{}` - Footer links

### Product Grid Template
- `products[]` - Product array
- `grid{}` - Grid configuration
- `filters{}` - Filter options

### Product Detail Template
- `product{}` - Single product data
- `images[]` - Product images
- `features[]` - Product features
- `actions{}` - Add to cart, wishlist, etc.

### Cart Template
- `cartItems[]` - Cart items
- `pricing{}` - Shipping, tax, thresholds
- `checkout{}` - Checkout button config

### Auth Template (Login/Register)
- `form{}` - Form fields configuration
- `page{}` - Page title, subtitle
- `footer{}` - Sign up/login links

### Contact Template
- `contactInfo{}` - Contact details
- `form{}` - Contact form fields

## 📊 Status

- ✅ **Pattern established** - 6 example pages converted
- ✅ **Templates created** - For all major page types
- ⏳ **268 pages remaining** - Can be converted using same pattern

## 🚀 Quick Start

1. Pick a page to convert
2. Look at similar converted example
3. Extract data to `pageConfig`
4. Replace hardcoded values
5. Test and verify

## 💡 Tips

- **Colors**: Always use full Tailwind classes like `"bg-blue-500"` not `"bg-${color}"`
- **Links**: Use website-specific routes (e.g., `/blazity-home` not `/`)
- **Products**: Include all needed fields (name, price, image, link)
- **Sections**: Use `enabled: true/false` to show/hide sections

## 📝 Next Steps

1. Convert remaining pages by type (batch similar pages together)
2. Test each converted page
3. Update documentation as needed

All pages follow the same pattern - once you understand it, conversion is straightforward!
