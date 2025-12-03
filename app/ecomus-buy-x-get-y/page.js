"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Gift } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Special Offer: Buy 2 Get 1 Free!</h2>
          </div>
          <p className="text-gray-700">
            Purchase 2 items and get the 3rd one absolutely free. Limited time offer!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-md p-6 ${
                index === 2 ? "ring-2 ring-purple-500 border-2 border-purple-500" : ""
              }`}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Product {item}</h3>
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-bold text-gray-900">$99.99</span>
                {index === 2 && (
                  <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-semibold">
                    FREE
                  </span>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                {index === 2 ? "Free Item" : "Add to Cart"}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-900 mb-4">How it works:</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            <li>Add 2 products to your cart</li>
            <li>The 3rd product will be automatically added for free</li>
            <li>Complete your purchase and enjoy your savings!</li>
          </ol>
        </div>
      </div>
    </main>
  );
}

