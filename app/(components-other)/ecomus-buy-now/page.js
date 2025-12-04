"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Zap } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [quantity, setQuantity] = useState(1);

  const product = {
    name: "Premium Product",
    price: 99.99,
    originalPrice: 149.99
  };

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
            </div>
          </div>

          <div>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 flex items-center gap-3">
              <Zap className="w-6 h-6 text-yellow-600" />
              <div>
                <p className="font-semibold text-yellow-900">Quick Buy Available</p>
                <p className="text-sm text-yellow-700">Skip the cart and checkout directly</p>
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
              <span className="text-2xl text-gray-500 line-through ml-3">${product.originalPrice.toFixed(2)}</span>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  -
                </button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-5 rounded-lg font-bold text-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-lg"
            >
              <Zap className="w-6 h-6" />
              Buy Now - ${(product.price * quantity).toFixed(2)}
            </motion.button>

            <p className="text-center text-sm text-gray-500 mt-4">
              You'll be redirected to secure checkout
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

