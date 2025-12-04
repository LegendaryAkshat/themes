"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Heart, Package, Check } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedBundle, setSelectedBundle] = useState("complete");

  const bundles = [
    {
      id: "complete",
      name: "Complete Bundle",
      price: 299.99,
      originalPrice: 399.99,
      savings: 100,
      items: [
        { name: "Wireless Headphones", included: true },
        { name: "Carrying Case", included: true },
        { name: "USB-C Cable", included: true },
        { name: "Wireless Charger", included: true },
        { name: "Extended Warranty", included: true }
      ]
    },
    {
      id: "essential",
      name: "Essential Bundle",
      price: 199.99,
      originalPrice: 249.99,
      savings: 50,
      items: [
        { name: "Wireless Headphones", included: true },
        { name: "Carrying Case", included: true },
        { name: "USB-C Cable", included: true },
        { name: "Wireless Charger", included: false },
        { name: "Extended Warranty", included: false }
      ]
    },
    {
      id: "starter",
      name: "Starter Bundle",
      price: 149.99,
      originalPrice: 179.99,
      savings: 30,
      items: [
        { name: "Wireless Headphones", included: true },
        { name: "Carrying Case", included: true },
        { name: "USB-C Cable", included: false },
        { name: "Wireless Charger", included: false },
        { name: "Extended Warranty", included: false }
      ]
    }
  ];

  const currentBundle = bundles.find(b => b.id === selectedBundle) || bundles[0];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Product Bundles
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect bundle for your needs. Save more when you buy together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bundle Selection */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Your Bundle</h2>
              <div className="space-y-4">
                {bundles.map((bundle) => (
                  <motion.button
                    key={bundle.id}
                    onClick={() => setSelectedBundle(bundle.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-6 rounded-xl border-2 transition-all text-left ${
                      selectedBundle === bundle.id
                        ? "border-blue-600 bg-blue-50 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className={`text-xl font-bold ${selectedBundle === bundle.id ? "text-blue-600" : "text-gray-900"}`}>
                        {bundle.name}
                      </h3>
                      <div className="text-right">
                        <div className={`text-2xl font-bold ${selectedBundle === bundle.id ? "text-blue-600" : "text-gray-900"}`}>
                          ${bundle.price}
                        </div>
                        <div className="text-sm text-gray-500 line-through">
                          ${bundle.originalPrice}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-green-600 font-semibold">
                      <Package className="w-4 h-4" />
                      Save ${bundle.savings}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Bundle Details */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">What's Included</h3>
              <ul className="space-y-3">
                {currentBundle.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {item.included ? (
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    ) : (
                      <div className="w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0" />
                    )}
                    <span className={item.included ? "text-gray-900" : "text-gray-400 line-through"}>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Product Display */}
          <div>
            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-6 flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <span className="text-gray-600">4.8 (128 reviews)</span>
              </div>

              <div className="mb-6">
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  ${currentBundle.price}
                </div>
                <div className="text-xl text-gray-500 line-through">
                  ${currentBundle.originalPrice}
                </div>
                <div className="text-green-600 font-semibold mt-2">
                  You save ${currentBundle.savings}
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add Bundle to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`p-4 rounded-lg transition-colors ${
                    isWishlisted ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  <Heart className="w-6 h-6" fill={isWishlisted ? "currentColor" : "none"} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

