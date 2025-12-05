"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, X } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Planted",
    homeLink: "/catalyst-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-500",
      accent: "text-gray-400"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      icon: "hover:bg-gray-100",
      focus: "focus:ring-2 focus:ring-gray-900"
    }
  },
  
  // Search Configuration
  search: {
    placeholder: "Search products...",
    initialQuery: "plant"
  },
  
  // Search Results (Edit results here!)
  results: [
    { name: "ZZ Plant", price: "$80.00", image: "🌿", category: "Plants", link: "/catalyst-product-detail" },
    { name: "Snake Plant", price: "$109.99", image: "🌵", category: "Plants", link: "/catalyst-product-detail" },
    { name: "Spray Bottle", price: "$15.00", image: "💧", category: "Accessories", link: "/catalyst-product-detail" }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-2",
      tablet: "sm:grid-cols-3",
      desktop: "lg:grid-cols-4"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const [searchQuery, setSearchQuery] = useState(pageConfig.search.initialQuery);
  const { brand, colors, search, results, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${colors.text.accent}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={search.placeholder}
              className={`w-full pl-12 pr-12 py-4 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus} text-lg`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className={`absolute right-4 top-1/2 -translate-y-1/2 p-1 ${colors.buttons.icon} rounded-full`}
              >
                <X className={`w-4 h-4 ${colors.text.accent}`} />
              </button>
            )}
          </div>
        </div>

        <div>
          <p className={`${colors.text.secondary} mb-6`}>
            Found {results.length} results for "{searchQuery}"
          </p>
          <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
            {results.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={product.link}>
                  <div className={`aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform`}>
                    {product.image}
                  </div>
                  <p className={`text-xs ${colors.text.light} mb-1`}>{product.category}</p>
                  <h3 className={`text-sm font-semibold ${colors.text.primary} mb-1`}>{product.name}</h3>
                  <p className={`text-base font-bold ${colors.text.primary}`}>{product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
