"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const variants = [
    { name: "Black", images: ["🖤", "🖤", "🖤"] },
    { name: "White", images: ["🤍", "🤍", "🤍"] },
    { name: "Blue", images: ["💙", "💙", "💙"] }
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-9xl">{variants[selectedVariant].images[0]}</div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {variants[selectedVariant].images.map((img, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-4xl">
                  {img}
                </div>
              ))}
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

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Variant: <span className="text-gray-600">{variants[selectedVariant].name}</span>
              </label>
              <div className="flex gap-3">
                {variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    className={`px-6 py-3 rounded-lg border-2 transition-all ${
                      selectedVariant === index
                        ? "border-blue-600 bg-blue-50 text-blue-600"
                        : "border-gray-300 text-gray-700 hover:border-gray-400"
                    }`}
                  >
                    {variant.name}
                  </button>
                ))}
              </div>
            </div>

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
        </div>
      </div>
    </main>
  );
}

