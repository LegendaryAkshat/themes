"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Check, Star } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [selectedItems, setSelectedItems] = useState(new Set([1]));

  const products = [
    { id: 1, name: "Main Product", price: 99.99, required: true, rating: 4.5 },
    { id: 2, name: "Accessory Pack", price: 49.99, required: false, rating: 4.7 },
    { id: 3, name: "Protection Plan", price: 29.99, required: false, rating: 4.6 },
    { id: 4, name: "Extended Warranty", price: 39.99, required: false, rating: 4.8 }
  ];

  const toggleItem = (id) => {
    if (products.find(p => p.id === id)?.required) return;
    const newSet = new Set(selectedItems);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedItems(newSet);
  };

  const total = products
    .filter(p => selectedItems.has(p.id))
    .reduce((sum, p) => sum + p.price, 0);

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Frequently Bought Together 2
        </motion.h1>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Complete Your Purchase</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative border-2 rounded-xl p-4 cursor-pointer transition-all ${
                  selectedItems.has(product.id)
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                } ${product.required ? "opacity-100" : ""}`}
                onClick={() => toggleItem(product.id)}
              >
                {index < products.length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 text-2xl text-gray-400 bg-white rounded-full w-8 h-8 flex items-center justify-center">
                    +
                  </div>
                )}
                {selectedItems.has(product.id) && (
                  <div className="absolute top-2 right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-3">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</p>
                {product.required && (
                  <p className="text-xs text-gray-500 mt-1">Required</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-gray-600">Total Price:</p>
                <p className="text-3xl font-bold text-gray-900">${total.toFixed(2)}</p>
                <p className="text-sm text-gray-500 line-through mt-1">
                  ${(total * 1.15).toFixed(2)}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Add All to Cart
              </motion.button>
            </div>
            <p className="text-sm text-green-600 font-semibold">
              Save ${((total * 1.15) - total).toFixed(2)} when you buy together!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

