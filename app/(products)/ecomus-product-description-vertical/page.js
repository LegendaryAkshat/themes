"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-96 h-64 bg-gray-300 rounded-xl"></div>
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
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Description</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Premium quality product with exceptional features. Designed for comfort and style, this product
                combines modern aesthetics with practical functionality.
              </p>
              <p>
                Made from the finest materials and crafted with attention to detail, this product is built to last.
                Perfect for everyday use while maintaining a sophisticated appearance.
              </p>
              <p>
                With advanced technology and innovative design, this product sets new standards in quality and
                performance. Experience the difference that premium craftsmanship makes.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`px-8 py-4 rounded-lg border-2 ${
                isWishlisted ? "border-red-500 bg-red-50 text-red-600" : "border-gray-300 text-gray-700"
              }`}
            >
              <Heart className="w-6 h-6" fill={isWishlisted ? "currentColor" : "none"} />
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}

