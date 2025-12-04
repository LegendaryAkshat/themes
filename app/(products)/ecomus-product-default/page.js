"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [isWishlisted, setIsWishlisted] = useState(false);

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
              Premium quality product with exceptional features. Designed for comfort and style.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Size: {selectedSize}</label>
                <div className="flex gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? "border-blue-600 bg-blue-50 text-blue-600"
                          : "border-gray-300 text-gray-700"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Color: {selectedColor}</label>
                <div className="flex gap-3">
                  {["Black", "White", "Blue"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-12 h-12 rounded-full border-2 ${
                        selectedColor === color ? "border-blue-600 ring-2 ring-blue-200" : "border-gray-300"
                      }`}
                      style={{ backgroundColor: color === "Black" ? "#000" : color === "White" ? "#fff" : "#3b82f6" }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-3">Quantity</label>
                <div className="flex items-center gap-2 border border-gray-300 rounded-lg w-fit">
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

