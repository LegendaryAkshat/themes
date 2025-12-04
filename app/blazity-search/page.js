"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, X } from "lucide-react";

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("product");
  const results = [
    { name: "Product 1", price: "$99.00", image: "👔", category: "Fashion" },
    { name: "Product 2", price: "$149.00", image: "📱", category: "Electronics" },
    { name: "Product 3", price: "$79.00", image: "⚽", category: "Sports & Outdoors" },
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Acme
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-12 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900 text-lg"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-4 h-4 text-gray-400" />
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div>
          <p className="text-gray-600 mb-6">
            Found {results.length} results for "{searchQuery}"
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href="/product/item">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                    {product.image}
                  </div>
                  <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-base font-bold text-gray-900">{product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

