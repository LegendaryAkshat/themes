"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());

  const products = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    originalPrice: Math.random() > 0.5 ? (Math.random() * 150 + 50).toFixed(2) : null,
    rating: (Math.random() * 1 + 4).toFixed(1)
  }));

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Product Style 05
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden transform perspective-1000"
            >
              <div className="relative aspect-square bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl transform group-hover:scale-110 transition-transform"></div>
                </div>
                <div className="absolute top-4 right-4">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const newSet = new Set(wishlist);
                      if (newSet.has(product.id)) newSet.delete(product.id);
                      else newSet.add(product.id);
                      setWishlist(newSet);
                    }}
                    className={`p-2 rounded-full shadow-lg ${
                      wishlist.has(product.id) ? "bg-red-500 text-white" : "bg-white text-gray-700"
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={wishlist.has(product.id) ? "currentColor" : "none"} />
                  </motion.button>
                </div>
              </div>
              <div className="p-6 bg-gradient-to-b from-white to-gray-50">
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">${product.originalPrice}</span>
                    )}
                  </div>
                  <span className="text-sm text-gray-600">★ {product.rating}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

