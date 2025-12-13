"use client";

import { motion } from "framer-motion";
import { Grid, List, Filter, X, SlidersHorizontal, ArrowRight, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

/**
 * Deep merge utility function
 */
const deepMerge = (target, source) => {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

// Default configuration for each shop type
const defaultConfigs = {
  shop1: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      buttons: {
        filter: "bg-gray-100 hover:bg-gray-200",
        viewActive: "bg-blue-600 text-white",
        viewInactive: "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }
    },
    header: {
      title: "Shop",
      description: "Browse our collection"
    },
    products: [
      { id: 1, name: "Product 1", price: "29.99", originalPrice: "39.99", rating: "4.5" },
      { id: 2, name: "Product 2", price: "49.99", rating: "4.8" }
    ],
    filters: {
      priceRanges: ["$0 - $50", "$50 - $100", "$100+"],
      categories: ["Clothing", "Accessories", "Shoes", "Bags", "Watches"],
      brands: ["Brand A", "Brand B", "Brand C", "Brand D"],
      ratings: [5, 4, 3, 2, 1]
    },
    grid: {
      products: {
        mobile: "grid-cols-1",
        tablet: "sm:grid-cols-2",
        desktop: "lg:grid-cols-3"
      },
      gap: "gap-6"
    }
  },
  shop2: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      buttons: {
        viewActive: "bg-blue-600 text-white",
        viewInactive: "bg-gray-100 text-gray-600 hover:bg-gray-200",
        close: "hover:bg-gray-100"
      }
    },
    header: {
      title: "Shop - Left Sidebar",
      description: "Browse our collection with filters on the left"
    },
    products: [
      { id: 1, name: "Product 1", price: "29.99", originalPrice: "39.99", rating: "4.5" }
    ],
    filters: {
      priceRanges: ["$0 - $50", "$50 - $100", "$100 - $200", "$200+"],
      categories: ["Clothing", "Accessories", "Shoes", "Bags", "Watches"],
      brands: ["Brand A", "Brand B", "Brand C", "Brand D"],
      ratings: [5, 4, 3, 2, 1]
    },
    grid: {
      products: {
        mobile: "grid-cols-1",
        tablet: "sm:grid-cols-2",
        desktop: "lg:grid-cols-3 xl:grid-cols-4"
      },
      gap: "gap-6"
    }
  },
  shop3: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      buttons: {
        viewActive: "bg-blue-600 text-white",
        viewInactive: "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }
    },
    header: {
      title: "Shop - Right Sidebar",
      description: "Browse our collection with filters on the right"
    },
    products: [
      { id: 1, name: "Product 1", price: "29.99", rating: "4.5" }
    ],
    filters: {
      priceRanges: ["$0 - $50", "$50 - $100", "$100+"],
      categories: ["Clothing", "Accessories", "Shoes"],
      brands: ["Brand A", "Brand B", "Brand C"],
      ratings: [5, 4, 3]
    },
    grid: {
      products: {
        mobile: "grid-cols-1",
        tablet: "sm:grid-cols-2",
        desktop: "lg:grid-cols-3"
      },
      gap: "gap-6"
    }
  },
  shop4: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      buttons: {
        filter: "bg-gray-100 hover:bg-gray-200",
        viewActive: "bg-blue-600 text-white",
        viewInactive: "bg-gray-100 text-gray-600 hover:bg-gray-200"
      }
    },
    header: {
      title: "Shop - Fullwidth",
      description: "Browse our full collection in fullwidth layout"
    },
    products: [
      { id: 1, name: "Product 1", price: "29.99", rating: "4.5" }
    ],
    filters: {
      priceRanges: ["$0 - $50", "$50 - $100", "$100+"],
      categories: ["Clothing", "Accessories", "Shoes"],
      ratings: [5, 4, 3]
    },
    grid: {
      products: {
        mobile: "grid-cols-2",
        tablet: "sm:grid-cols-3",
        desktop: "md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      },
      gap: "gap-4"
    }
  },
  shop5: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      buttons: {
        viewActive: "bg-blue-600 text-white",
        viewInactive: "bg-gray-100 text-gray-600"
      }
    },
    header: {
      title: "Shop - Sub Collection"
    },
    collections: [
      { name: "Men's Collection", count: 45, link: "#" },
      { name: "Women's Collection", count: 62, link: "#" },
      { name: "Accessories", count: 28, link: "#" },
      { name: "Shoes", count: 34, link: "#" }
    ],
    products: [
      { id: 1, name: "Product 1", price: "29.99", rating: "4.5" }
    ],
    grid: {
      collections: {
        mobile: "grid-cols-2",
        desktop: "md:grid-cols-4"
      },
      products: {
        mobile: "grid-cols-1",
        tablet: "sm:grid-cols-2",
        desktop: "lg:grid-cols-3 xl:grid-cols-4"
      },
      gap: "gap-6"
    }
  },
  shop6: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        link: "text-blue-600"
      },
      gradients: {
        hover: "group-hover:text-blue-600"
      }
    },
    header: {
      title: "Collections List"
    },
    collections: [
      { name: "Men's Fashion", count: 45, image: "👔", link: "#" },
      { name: "Women's Fashion", count: 62, image: "👗", link: "#" },
      { name: "Accessories", count: 28, image: "👜", link: "#" },
      { name: "Shoes", count: 34, image: "👠", link: "#" }
    ],
    grid: {
      columns: {
        mobile: "grid-cols-1",
        tablet: "md:grid-cols-2",
        desktop: "lg:grid-cols-4"
      },
      gap: "gap-6"
    }
  },
  shop7: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      buttons: {
        filter: "bg-gray-100 hover:bg-gray-200",
        viewActive: "bg-blue-600 text-white",
        viewInactive: "bg-gray-100 text-gray-600",
        close: "hover:bg-gray-100"
      }
    },
    header: {
      title: "Shop - Filter Hidden"
    },
    products: [
      { id: 1, name: "Product 1", price: "29.99", rating: "4.5" }
    ],
    filters: {
      priceRanges: ["$0 - $50", "$50 - $100", "$100+"],
      categories: ["Clothing", "Accessories", "Shoes"],
      ratings: [5, 4, 3]
    },
    grid: {
      products: {
        mobile: "grid-cols-1",
        tablet: "sm:grid-cols-2",
        desktop: "lg:grid-cols-3 xl:grid-cols-4"
      },
      gap: "gap-6"
    }
  },
  shop8: {
    colors: {
      background: "bg-white",
      card: "bg-white/90 backdrop-blur-sm",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      gradients: {
        image: "bg-gradient-to-br from-gray-100 to-gray-200",
        price: "text-blue-600"
      }
    },
    header: {
      title: "Shop the look",
      description: "Inspire and let yourself be inspired, from one unique fashion to another."
    },
    looks: [
      {
        id: 1,
        items: [
          { name: "Jersey thong body", price: 112.00, link: "#" },
          { name: "Ribbed modal T-shirt", price: 20.00, link: "#" }
        ],
        image: "👗"
      }
    ]
  }
};

/**
 * Shop Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "shop")
 * @param {string} props.type - Shop type: "shop1" | "shop2" | "shop3" | "shop4" | "shop5" | "shop6" | "shop7" | "shop8" (default: "shop1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function Shop({
  component = "shop",
  type = "shop1",
  content = {}
}) {
  // Validate shop type
  const validTypes = ["shop1", "shop2", "shop3", "shop4", "shop5", "shop6", "shop7", "shop8"];
  const shopType = validTypes.includes(type) ? type : "shop1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[shopType] || defaultConfigs.shop1;
  
  // Get custom config from content prop
  const customConfig = content[shopType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`Shop: Invalid config for type "${shopType}", using defaults`);
    return <Shop1 config={defaultConfigs.shop1} />;
  }
  
  // Route to appropriate shop component
  if (shopType === "shop1") {
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Shop1: No products provided, using default");
      config.products = defaultConfigs.shop1.products;
    }
    return <Shop1 config={config} />;
  }
  
  if (shopType === "shop2") {
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Shop2: No products provided, using default");
      config.products = defaultConfigs.shop2.products;
    }
    return <Shop2 config={config} />;
  }
  
  if (shopType === "shop3") {
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Shop3: No products provided, using default");
      config.products = defaultConfigs.shop3.products;
    }
    return <Shop3 config={config} />;
  }
  
  if (shopType === "shop4") {
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Shop4: No products provided, using default");
      config.products = defaultConfigs.shop4.products;
    }
    return <Shop4 config={config} />;
  }
  
  if (shopType === "shop5") {
    if (!config.collections || !Array.isArray(config.collections) || config.collections.length === 0) {
      console.warn("Shop5: No collections provided, using default");
      config.collections = defaultConfigs.shop5.collections;
    }
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Shop5: No products provided, using default");
      config.products = defaultConfigs.shop5.products;
    }
    return <Shop5 config={config} />;
  }
  
  if (shopType === "shop6") {
    if (!config.collections || !Array.isArray(config.collections) || config.collections.length === 0) {
      console.warn("Shop6: No collections provided, using default");
      config.collections = defaultConfigs.shop6.collections;
    }
    return <Shop6 config={config} />;
  }
  
  if (shopType === "shop7") {
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Shop7: No products provided, using default");
      config.products = defaultConfigs.shop7.products;
    }
    return <Shop7 config={config} />;
  }
  
  if (shopType === "shop8") {
    if (!config.looks || !Array.isArray(config.looks) || config.looks.length === 0) {
      console.warn("Shop8: No looks provided, using default");
      config.looks = defaultConfigs.shop8.looks;
    }
    return <Shop8 config={config} />;
  }
  
  // Default fallback
  return null;
}

// Shop 1 Component - Default with toggleable filters
function Shop1({ config }) {
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  
  const colors = config?.colors || defaultConfigs.shop1.colors;
  const header = config?.header || defaultConfigs.shop1.header;
  const products = config?.products || defaultConfigs.shop1.products;
  const filters = config?.filters || defaultConfigs.shop1.filters;
  const grid = config?.grid || defaultConfigs.shop1.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{header.title}</h1>
          {header.description && (
            <p className={colors.text.secondary}>{header.description}</p>
          )}
        </motion.div>

        <div className={`${colors.card} rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 ${colors.buttons.filter} rounded-lg transition-colors`}
            >
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
            </button>
            <span className={`${colors.text.secondary} text-sm`}>
              {products.length} products
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? colors.buttons.viewActive
                  : colors.buttons.viewInactive
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? colors.buttons.viewActive
                  : colors.buttons.viewInactive
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {showFilters && (
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="hidden md:block w-64 bg-white rounded-lg shadow-sm p-6 h-fit"
            >
              <h3 className={`font-semibold ${colors.text.primary} mb-4`}>Filters</h3>
              <div className="space-y-6">
                {filters.priceRanges && (
                  <div>
                    <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Price Range</h4>
                    <div className="space-y-2">
                      {filters.priceRanges.map((range, index) => (
                        <label key={index} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className={`text-sm ${colors.text.secondary}`}>{range}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                {filters.categories && (
                  <div>
                    <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Category</h4>
                    <div className="space-y-2">
                      {filters.categories.map((category, index) => (
                        <label key={index} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className={`text-sm ${colors.text.secondary}`}>{category}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                {filters.brands && (
                  <div>
                    <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Brand</h4>
                    <div className="space-y-2">
                      {filters.brands.map((brand, index) => (
                        <label key={index} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className={`text-sm ${colors.text.secondary}`}>{brand}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
                {filters.ratings && (
                  <div>
                    <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Rating</h4>
                    <div className="space-y-2">
                      {filters.ratings.map((rating, index) => (
                        <label key={index} className="flex items-center gap-2">
                          <input type="checkbox" className="rounded" />
                          <span className={`text-sm ${colors.text.secondary}`}>
                            {rating}★ & above
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.aside>
          )}

          <div className={`flex-1 grid ${grid.products.mobile} ${grid.products.tablet} ${grid.products.desktop} ${grid.gap}`}>
            {products.map((product, index) => (
              <motion.div
                key={product.id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`${colors.card} rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden ${
                  viewMode === "list" ? "flex gap-4" : ""
                }`}
              >
                <div
                  className={`bg-gradient-to-br from-gray-100 to-gray-200 ${
                    viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "aspect-square"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                  </div>
                </div>
                <div className="p-4 flex-1">
                  <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{product.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-lg font-bold ${colors.text.primary}`}>
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className={`text-sm ${colors.text.secondary} line-through`}>
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {product.rating && (
                    <div className="flex items-center gap-1">
                      <span className={`text-sm ${colors.text.secondary}`}>★ {product.rating}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

// Shop 2 Component - Left Sidebar
function Shop2({ config }) {
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(true);
  
  const colors = config?.colors || defaultConfigs.shop2.colors;
  const header = config?.header || defaultConfigs.shop2.header;
  const products = config?.products || defaultConfigs.shop2.products;
  const filters = config?.filters || defaultConfigs.shop2.filters;
  const grid = config?.grid || defaultConfigs.shop2.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{header.title}</h1>
          {header.description && (
            <p className={colors.text.secondary}>{header.description}</p>
          )}
        </motion.div>

        <div className="flex gap-6">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-64 bg-white rounded-lg shadow-sm p-6 h-fit sticky top-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className={`font-semibold ${colors.text.primary}`}>Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className={`lg:hidden p-1 ${colors.buttons.close} rounded`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              {filters.priceRanges && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Price Range</h4>
                  <div className="space-y-2">
                    {filters.priceRanges.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>{range}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {filters.categories && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Category</h4>
                  <div className="space-y-2">
                    {filters.categories.map((category, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {filters.brands && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Brand</h4>
                  <div className="space-y-2">
                    {filters.brands.map((brand, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {filters.ratings && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Rating</h4>
                  <div className="space-y-2">
                    {filters.ratings.map((rating, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>
                          {rating}★ & above
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Apply Filters
            </motion.button>
          </motion.aside>

          <div className="flex-1">
            <div className={`${colors.card} rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between`}>
              <span className={`${colors.text.secondary} text-sm`}>{products.length} products</span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" ? colors.buttons.viewActive : colors.buttons.viewInactive
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" ? colors.buttons.viewActive : colors.buttons.viewInactive
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              className={
                viewMode === "grid"
                  ? `grid ${grid.products.mobile} ${grid.products.tablet} ${grid.products.desktop} ${grid.gap}`
                  : "space-y-4"
              }
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`${colors.card} rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden ${
                    viewMode === "list" ? "flex gap-4" : ""
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br from-gray-100 to-gray-200 ${
                      viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "aspect-square"
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-lg font-bold ${colors.text.primary}`}>
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className={`text-sm ${colors.text.secondary} line-through`}>
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.rating && (
                      <div className="flex items-center gap-1">
                        <span className={`text-sm ${colors.text.secondary}`}>★ {product.rating}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// Shop 3 Component - Right Sidebar
function Shop3({ config }) {
  const [viewMode, setViewMode] = useState("grid");
  
  const colors = config?.colors || defaultConfigs.shop3.colors;
  const header = config?.header || defaultConfigs.shop3.header;
  const products = config?.products || defaultConfigs.shop3.products;
  const filters = config?.filters || defaultConfigs.shop3.filters;
  const grid = config?.grid || defaultConfigs.shop3.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{header.title}</h1>
          {header.description && (
            <p className={colors.text.secondary}>{header.description}</p>
          )}
        </motion.div>

        <div className="flex gap-6">
          <div className="flex-1">
            <div className={`${colors.card} rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between`}>
              <span className={`${colors.text.secondary} text-sm`}>
                {products.length} products
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "grid" ? colors.buttons.viewActive : colors.buttons.viewInactive
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === "list" ? colors.buttons.viewActive : colors.buttons.viewInactive
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div
              className={
                viewMode === "grid"
                  ? `grid ${grid.products.mobile} ${grid.products.tablet} ${grid.products.desktop} ${grid.gap}`
                  : "space-y-4"
              }
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className={`${colors.card} rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden ${
                    viewMode === "list" ? "flex gap-4" : ""
                  }`}
                >
                  <div
                    className={`bg-gradient-to-br from-gray-100 to-gray-200 ${
                      viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "aspect-square"
                    }`}
                  >
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{product.name}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-lg font-bold ${colors.text.primary}`}>
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className={`text-sm ${colors.text.secondary} line-through`}>
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    {product.rating && (
                      <div className="flex items-center gap-1">
                        <span className={`text-sm ${colors.text.secondary}`}>★ {product.rating}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-64 bg-white rounded-lg shadow-sm p-6 h-fit sticky top-8"
          >
            <h3 className={`font-semibold ${colors.text.primary} mb-6`}>Filters</h3>

            <div className="space-y-6">
              {filters.priceRanges && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Price Range</h4>
                  <div className="space-y-2">
                    {filters.priceRanges.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>{range}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {filters.categories && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Category</h4>
                  <div className="space-y-2">
                    {filters.categories.map((category, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {filters.brands && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Brand</h4>
                  <div className="space-y-2">
                    {filters.brands.map((brand, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>{brand}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {filters.ratings && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Rating</h4>
                  <div className="space-y-2">
                    {filters.ratings.map((rating, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>
                          {rating}★ & above
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}

// Shop 4 Component - Fullwidth
function Shop4({ config }) {
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  
  const colors = config?.colors || defaultConfigs.shop4.colors;
  const header = config?.header || defaultConfigs.shop4.header;
  const products = config?.products || defaultConfigs.shop4.products;
  const filters = config?.filters || defaultConfigs.shop4.filters;
  const grid = config?.grid || defaultConfigs.shop4.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{header.title}</h1>
          {header.description && (
            <p className={colors.text.secondary}>{header.description}</p>
          )}
        </motion.div>

        <div className={`${colors.card} rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4`}>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2 ${colors.buttons.filter} rounded-lg transition-colors`}
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <span className={`${colors.text.secondary} text-sm`}>
              {products.length} products
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid" ? colors.buttons.viewActive : colors.buttons.viewInactive
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list" ? colors.buttons.viewActive : colors.buttons.viewInactive
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`${colors.card} rounded-lg shadow-sm p-6 mb-6`}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filters.priceRanges && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Price Range</h4>
                  <div className="space-y-2">
                    {filters.priceRanges.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>{range}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {filters.categories && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Category</h4>
                  <div className="space-y-2">
                    {filters.categories.map((category, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {filters.ratings && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Rating</h4>
                  <div className="space-y-2">
                    {filters.ratings.map((rating, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>
                          {rating}★ & above
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        <div
          className={
            viewMode === "grid"
              ? `grid ${grid.products.mobile} ${grid.products.tablet} ${grid.products.desktop} ${grid.gap}`
              : "space-y-4"
          }
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className={`${colors.card} rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden ${
                viewMode === "list" ? "flex gap-4" : ""
              }`}
            >
              <div
                className={`bg-gradient-to-br from-gray-100 to-gray-200 ${
                  viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "aspect-square"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
              <div className="p-3 flex-1">
                <h3 className={`font-semibold ${colors.text.primary} mb-1 text-sm line-clamp-2`}>{product.name}</h3>
                <div className="flex items-center gap-1 mb-1">
                  <span className={`text-lg font-bold ${colors.text.primary}`}>
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className={`text-sm ${colors.text.secondary} line-through`}>
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                {product.rating && (
                  <div className="flex items-center gap-1">
                    <span className={`text-sm ${colors.text.secondary}`}>★ {product.rating}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Shop 5 Component - Sub Collection
function Shop5({ config }) {
  const [viewMode, setViewMode] = useState("grid");
  
  const colors = config?.colors || defaultConfigs.shop5.colors;
  const header = config?.header || defaultConfigs.shop5.header;
  const collections = config?.collections || defaultConfigs.shop5.collections;
  const products = config?.products || defaultConfigs.shop5.products;
  const grid = config?.grid || defaultConfigs.shop5.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          {header.title}
        </motion.h1>

        <div className={`grid ${grid.collections.mobile} ${grid.collections.desktop} gap-4 mb-8`}>
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card} rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all cursor-pointer`}
            >
              <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{collection.name}</h3>
              <p className={`text-sm ${colors.text.secondary}`}>{collection.count} items</p>
            </motion.div>
          ))}
        </div>

        <div className={`${colors.card} rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between`}>
          <span className={`${colors.text.secondary} text-sm`}>{products.length} products</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid" ? colors.buttons.viewActive : colors.buttons.viewInactive
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list" ? colors.buttons.viewActive : colors.buttons.viewInactive
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className={
            viewMode === "grid"
              ? `grid ${grid.products.mobile} ${grid.products.tablet} ${grid.products.desktop} ${grid.gap}`
              : "space-y-4"
          }
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${colors.card} rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden ${
                viewMode === "list" ? "flex gap-4" : ""
              }`}
            >
              <div
                className={`bg-gradient-to-br from-gray-100 to-gray-200 ${
                  viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "aspect-square"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
              <div className="p-4 flex-1">
                <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-bold ${colors.text.primary}`}>${product.price}</span>
                  {product.rating && (
                    <span className={`text-sm ${colors.text.secondary}`}>★ {product.rating}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Shop 6 Component - Collections List
function Shop6({ config }) {
  const colors = config?.colors || defaultConfigs.shop6.colors;
  const header = config?.header || defaultConfigs.shop6.header;
  const collections = config?.collections || defaultConfigs.shop6.collections;
  const grid = config?.grid || defaultConfigs.shop6.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.text.primary} text-center mb-12`}
        >
          {header.title}
        </motion.h1>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group ${colors.card} rounded-xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer`}
            >
              <div className="text-6xl mb-4 text-center">{collection.image}</div>
              <h3 className={`text-xl font-bold ${colors.text.primary} mb-2 text-center ${colors.gradients.hover} transition-colors`}>
                {collection.name}
              </h3>
              <p className={`${colors.text.secondary} text-center mb-4`}>{collection.count} items</p>
              <div className={`flex items-center justify-center ${colors.text.link} opacity-0 group-hover:opacity-100 transition-opacity`}>
                <span className="text-sm font-medium">View Collection</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Shop 7 Component - Filter Hidden
function Shop7({ config }) {
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  
  const colors = config?.colors || defaultConfigs.shop7.colors;
  const header = config?.header || defaultConfigs.shop7.header;
  const products = config?.products || defaultConfigs.shop7.products;
  const filters = config?.filters || defaultConfigs.shop7.filters;
  const grid = config?.grid || defaultConfigs.shop7.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          {header.title}
        </motion.h1>

        <div className={`${colors.card} rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between`}>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 ${colors.buttons.filter} rounded-lg transition-colors`}
          >
            <Filter className="w-5 h-5" />
            <span>Show Filters</span>
          </button>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid" ? colors.buttons.viewActive : colors.buttons.viewInactive
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list" ? colors.buttons.viewActive : colors.buttons.viewInactive
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={`${colors.card} rounded-lg shadow-sm p-6 mb-6`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className={`font-semibold ${colors.text.primary}`}>Filters</h3>
              <button
                onClick={() => setShowFilters(false)}
                className={`p-1 ${colors.buttons.close} rounded`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filters.priceRanges && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Price Range</h4>
                  <div className="space-y-2">
                    {filters.priceRanges.map((range, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>{range}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {filters.categories && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Category</h4>
                  <div className="space-y-2">
                    {filters.categories.map((category, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>{category}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
              {filters.ratings && (
                <div>
                  <h4 className={`text-sm font-medium ${colors.text.secondary} mb-3`}>Rating</h4>
                  <div className="space-y-2">
                    {filters.ratings.map((rating, index) => (
                      <label key={index} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className={`text-sm ${colors.text.secondary}`}>
                          {rating}★ & above
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}

        <div
          className={
            viewMode === "grid"
              ? `grid ${grid.products.mobile} ${grid.products.tablet} ${grid.products.desktop} ${grid.gap}`
              : "space-y-4"
          }
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${colors.card} rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden ${
                viewMode === "list" ? "flex gap-4" : ""
              }`}
            >
              <div
                className={`bg-gradient-to-br from-gray-100 to-gray-200 ${
                  viewMode === "list" ? "w-32 h-32 flex-shrink-0" : "aspect-square"
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
              <div className="p-4 flex-1">
                <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-bold ${colors.text.primary}`}>${product.price}</span>
                  {product.rating && (
                    <span className={`text-sm ${colors.text.secondary}`}>★ {product.rating}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Shop 8 Component - Shop the Look
function Shop8({ config }) {
  const colors = config?.colors || defaultConfigs.shop8.colors;
  const header = config?.header || defaultConfigs.shop8.header;
  const looks = config?.looks || defaultConfigs.shop8.looks;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-4`}>
            {header.title}
          </h2>
          {header.description && (
            <p className={`${colors.text.secondary} text-lg`}>
              {header.description}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {looks.map((look, index) => (
            <motion.div
              key={look.id || index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className={`relative aspect-[4/5] ${colors.gradients.image} rounded-2xl overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">{look.image}</div>
                </div>

                <div className="absolute inset-0 p-6">
                  {look.items && look.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="absolute"
                      style={{
                        top: `${20 + itemIndex * 30}%`,
                        left: "10%"
                      }}
                    >
                      <motion.a
                        href={item.link || "#"}
                        whileHover={{ scale: 1.05 }}
                        className={`${colors.card} rounded-lg p-3 shadow-lg cursor-pointer group/item`}
                      >
                        <p className={`text-sm font-semibold ${colors.text.primary} mb-1`}>
                          {item.name}
                        </p>
                        <p className={`text-lg font-bold ${colors.gradients.price}`}>
                          ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                        </p>
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

