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
    name: "Acme",
    homeLink: "/blazity-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-500"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    }
  },
  
  // Header Configuration
  header: {
    logo: "Acme",
    logoLink: "/blazity-home"
  },
  
  // Search Configuration
  search: {
    placeholder: "Search products...",
    initialQuery: "product"
  },
  
  // Search Results (Edit products here!)
  results: [
    { 
      name: "Product 1", 
      price: "$99.00", 
      image: "👔", 
      category: "Fashion",
      link: "/blazity-product-detail"
    },
    { 
      name: "Product 2", 
      price: "$149.00", 
      image: "📱", 
      category: "Electronics",
      link: "/blazity-product-detail"
    },
    { 
      name: "Product 3", 
      price: "$79.00", 
      image: "⚽", 
      category: "Sports & Outdoors",
      link: "/blazity-product-detail"
    }
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
  const { brand, colors, header, search, results, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      {/* Header */}
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={header.logoLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {header.logo}
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${colors.text.light}`} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={search.placeholder}
              className={`w-full pl-12 pr-12 py-4 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-lg`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
              >
                <X className={`w-4 h-4 ${colors.text.light}`} />
              </button>
            )}
          </div>
        </div>

        {/* Results */}
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
