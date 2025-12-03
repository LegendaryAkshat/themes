"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [quantity, setQuantity] = useState(1);

  const basePrice = 99.99;
  const discountTiers = [
    { min: 1, max: 2, discount: 0, price: basePrice },
    { min: 3, max: 5, discount: 10, price: basePrice * 0.9 },
    { min: 6, max: 10, discount: 15, price: basePrice * 0.85 },
    { min: 11, max: Infinity, discount: 20, price: basePrice * 0.8 }
  ];

  const currentTier = discountTiers.find(t => quantity >= t.min && quantity <= t.max) || discountTiers[0];
  const totalPrice = currentTier.price * quantity;

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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Product</h1>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">${currentTier.price.toFixed(2)}</span>
              <span className="text-2xl text-gray-500 line-through ml-3">${basePrice.toFixed(2)}</span>
              {currentTier.discount > 0 && (
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold ml-3">
                  {currentTier.discount}% OFF
                </span>
              )}
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
              <h3 className="font-semibold text-blue-900 mb-4">Volume Discount Grid</h3>
              <div className="grid grid-cols-2 gap-3">
                {discountTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border-2 ${
                      quantity >= tier.min && quantity <= tier.max
                        ? "border-blue-600 bg-blue-100"
                        : "border-gray-200 bg-white"
                    }`}
                  >
                    <p className="text-sm font-semibold text-gray-900">
                      {tier.min === tier.max ? tier.min : tier.max === Infinity ? `${tier.min}+` : `${tier.min}-${tier.max}`} units
                    </p>
                    <p className="text-lg font-bold text-gray-900">${tier.price.toFixed(2)}</p>
                    {tier.discount > 0 && (
                      <p className="text-xs text-green-600 font-semibold">{tier.discount}% off</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total: <span className="text-xl font-bold text-gray-900">${totalPrice.toFixed(2)}</span></p>
                </div>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}

