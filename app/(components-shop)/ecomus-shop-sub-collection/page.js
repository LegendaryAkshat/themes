"use client";

import { motion } from "framer-motion";
import { Grid, List } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [viewMode, setViewMode] = useState("grid");

  const collections = [
    { name: "Men's Collection", count: 45 },
    { name: "Women's Collection", count: 62 },
    { name: "Accessories", count: 28 },
    { name: "Shoes", count: 34 }
  ];

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    rating: (Math.random() * 1 + 4).toFixed(1)
  }));

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Shop - Sub Collection
        </motion.h1>

        {/* Collections */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-all cursor-pointer"
            >
              <h3 className="font-semibold text-gray-900 mb-2">{collection.name}</h3>
              <p className="text-sm text-gray-600">{collection.count} items</p>
            </motion.div>
          ))}
        </div>

        {/* Products */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 flex items-center justify-between">
          <span className="text-gray-600 text-sm">{products.length} products</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "grid" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === "list" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
                  <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
              <div className="p-4 flex-1">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  <span className="text-sm text-gray-600">★ {product.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

