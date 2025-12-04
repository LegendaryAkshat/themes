"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Clock } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const releaseDate = new Date();
  releaseDate.setDate(releaseDate.getDate() + 30);

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl relative">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="absolute top-4 left-4 bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Pre-Order
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Product - Pre-Order</h1>
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

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-blue-900 font-semibold mb-1">Expected Release Date</p>
              <p className="text-blue-700">{releaseDate.toLocaleDateString()}</p>
              <p className="text-sm text-blue-600 mt-2">
                Pre-order now and be among the first to receive this product when it's released!
              </p>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              This product is available for pre-order. Reserve yours today and get it delivered on the release date.
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Pre-Order Now
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
        </div>
      </div>
    </main>
  );
}

