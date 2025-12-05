"use client";

import { motion } from "framer-motion";
import { Grid, List } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
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
  
  // Page Header
  header: {
    title: "Shop - Right Sidebar",
    description: "Browse our collection with filters on the right"
  },
  
  // Products (Edit products here!)
  products: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    originalPrice: Math.random() > 0.5 ? (Math.random() * 150 + 50).toFixed(2) : null,
    rating: (Math.random() * 1 + 4).toFixed(1)
  })),
  
  // Filters
  filters: {
    priceRanges: ["$0 - $50", "$50 - $100", "$100+"],
    categories: ["Clothing", "Accessories", "Shoes"],
    brands: ["Brand A", "Brand B", "Brand C"],
    ratings: [5, 4, 3]
  },
  
  // Grid Configuration
  grid: {
    products: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const [viewMode, setViewMode] = useState("grid");
  const { colors, header, products, filters, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{header.title}</h1>
          <p className={colors.text.secondary}>{header.description}</p>
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
                  key={product.id}
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
                    <div className="flex items-center gap-1">
                      <span className={`text-sm ${colors.text.secondary}`}>★ {product.rating}</span>
                    </div>
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
            </div>
          </motion.aside>
        </div>
      </div>
    </main>
  );
}
