"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Star, X } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDrawerOpen(true)}
          className="mb-8 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
        >
          Open Product Drawer
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Product</h1>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-gray-600">4.8 (128 reviews)</span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$99.99</span>
              <span className="text-2xl text-gray-500 line-through ml-3">$149.99</span>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Premium quality product with exceptional features.
            </p>
          </div>
        </div>

        <AnimatePresence>
          {isDrawerOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDrawerOpen(false)}
                className="fixed inset-0 bg-black/50 z-40"
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Product Details</h2>
                    <button
                      onClick={() => setIsDrawerOpen(false)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-6">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-48 h-48 bg-gray-300 rounded-lg"></div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Premium Product</h3>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-gray-900">$99.99</span>
                    <span className="text-xl text-gray-500 line-through ml-3">$149.99</span>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Premium quality product with exceptional features. Designed for comfort and style.
                  </p>
                  <div className="flex gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="w-5 h-5" />
                      Add to Cart
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setIsWishlisted(!isWishlisted)}
                      className={`p-4 rounded-lg ${
                        isWishlisted ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
                      }`}
                    >
                      <Heart className="w-6 h-6" fill={isWishlisted ? "currentColor" : "none"} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

