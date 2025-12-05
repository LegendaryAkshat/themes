# Dynamic Pages Guide

All 273 pages are being converted to use dynamic JSON configuration at the top of each page file. This makes it easy to edit content, colors, links, and all settings without touching the component code.

## Pattern Structure

Each page now has a `pageConfig` object at the top with all editable data:

```javascript
// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: { ... },
  
  // Colors & Theme (use full Tailwind class names)
  colors: { ... },
  
  // Header Configuration
  header: { ... },
  
  // Page-specific content
  // ... (varies by page type)
};
```

## Examples Converted

✅ **Home Pages:**
- `app/(home)/blazity-home/page.js` - Full dynamic config with hero sections, categories, products, newsletter, footer

✅ **Product Pages:**
- `app/(products)/blazity-product-grid/page.js` - Product grid with configurable products
- `app/(products)/catalyst-product-detail/page.js` - Product detail page

✅ **Cart Pages:**
- `app/(cart)/blazity-cart/page.js` - Shopping cart with configurable items and pricing

## Configuration Sections

### Colors & Theme
```javascript
colors: {
  background: "bg-white",  // Full Tailwind class
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
```

### Header
```javascript
header: {
  logo: "Brand Name",
  logoLink: "/home",
  navigation: [
    { label: "Products", href: "/products" }
  ],
  actions: {
    search: { enabled: true, link: "/search" },
    cart: { enabled: true, link: "/cart" }
  }
}
```

### Products
```javascript
products: [
  {
    id: 1,
    name: "Product Name",
    price: "$99.00",
    image: "🛍️",
    link: "/product-detail"
  }
]
```

## How to Edit

1. Open any page file (e.g., `app/(home)/blazity-home/page.js`)
2. Find the `pageConfig` object at the top
3. Edit any values:
   - Change text content
   - Update colors (use full Tailwind classes)
   - Modify links
   - Add/remove products, categories, etc.
4. Save - changes appear immediately!

## Converting Remaining Pages

The pattern is established. To convert remaining pages:

1. Extract hardcoded data into `pageConfig`
2. Replace hardcoded values with `pageConfig` references
3. Use full Tailwind class names (not template literals)
4. Keep the same component structure

## Status

- ✅ Pattern established
- ✅ 3 example pages converted
- ⏳ 270 pages remaining (can be converted using same pattern)
