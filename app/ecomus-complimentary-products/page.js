"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Gift } from "lucide-react";

export default function Page() {
  const complimentaryProducts = [
    { id: 1, name: "Matching Case", price: 19.99, rating: 4.5 },
    { id: 2, name: "Screen Protector", price: 9.99, rating: 4.7 },
    { id: 3, name: "Charging Cable", price: 14.99, rating: 4.6 }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Complimentary Products
        </motion.h1>

        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Gift className="w-8 h-8 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900">Perfect Complements</h2>
          </div>
          <p className="text-gray-700">
            These products work great together and are often purchased with your selected item.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {complimentaryProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-6"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-300 rounded"></div>
                </div>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <ShoppingBag className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

