"use client";

import { motion } from "framer-motion";
import { Grid, List, Filter, X } from "lucide-react";
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
      filter: "bg-gray-100 hover:bg-gray-200",
      viewActive: "bg-blue-600 text-white",
      viewInactive: "bg-gray-100 text-gray-600",
      close: "hover:bg-gray-100"
    }
  },
  
  // Page Header
  header: {
    title: "Shop - Filter Hidden"
  },
  
  // Products (Edit products here!)
  products: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    rating: (Math.random() * 1 + 4).toFixed(1)
  })),
  
  // Filters
  filters: {
    priceRanges: ["$0 - $50", "$50 - $100", "$100+"],
    categories: ["Clothing", "Accessories", "Shoes"],
    ratings: [5, 4, 3]
  },
  
  // Grid Configuration
  grid: {
    products: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3 xl:grid-cols-4"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const { colors, header, products, filters, grid } = pageConfig;

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
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-bold ${colors.text.primary}`}>${product.price}</span>
                  <span className={`text-sm ${colors.text.secondary}`}>★ {product.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
