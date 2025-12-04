"use client";

import { motion } from "framer-motion";
import { Grid, List, Filter } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);

  const products = Array.from({ length: 24 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    originalPrice: Math.random() > 0.5 ? (Math.random() * 150 + 50).toFixed(2) : null,
    rating: (Math.random() * 1 + 4).toFixed(1)
  }));

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop - Fullwidth</h1>
          <p className="text-gray-600">Browse our full collection in fullwidth layout</p>
        </motion.div>

        {/* Toolbar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
            </button>
            <span className="text-gray-600 text-sm">
              {products.length} products
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Products Grid - Fullwidth */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
              : "space-y-4"
          }
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03 }}
              className={`bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden ${
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
                <h3 className="font-semibold text-gray-900 mb-1 text-sm line-clamp-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-base font-bold text-gray-900">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-xs text-gray-500 line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 text-xs">★</span>
                  <span className="text-xs text-gray-600">{product.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center gap-2">
          {[1, 2, 3, 4, 5, 6].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-lg transition-colors ${
                page === 1
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}

