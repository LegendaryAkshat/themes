"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
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
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Product Style 06
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden"
            >
              <div className="relative aspect-square bg-gradient-to-br from-teal-50 to-cyan-50 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-teal-200 to-cyan-200 rounded-2xl"></div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Quick Add
                  </motion.button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const newSet = new Set(wishlist);
                      if (newSet.has(product.id)) newSet.delete(product.id);
                      else newSet.add(product.id);
                      setWishlist(newSet);
                    }}
                    className={`p-1 rounded-full ${
                      wishlist.has(product.id) ? "text-red-500" : "text-gray-400"
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={wishlist.has(product.id) ? "currentColor" : "none"} />
                  </motion.button>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-teal-600">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
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

