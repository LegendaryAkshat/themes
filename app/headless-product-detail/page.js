"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">About us</Link>
              <Link href="/spring" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Spring</Link>
              <Link href="/faq" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">FAQ</Link>
            </div>
            <Link href="/" className="text-2xl font-semibold text-gray-900">Headless</Link>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                <ShoppingBag className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-gray-100"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded"></div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className="text-4xl font-light text-gray-900 mb-4">Black Jacket</h1>
              <p className="text-2xl text-gray-600 mb-6">$8,068.72</p>
              <p className="text-gray-700 mb-8">Hello world</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">Color</label>
                <div className="flex gap-3">
                  {["black", "blue", "brown"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 ${
                        selectedColor === color
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      } transition-colors capitalize`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">Size</label>
                <div className="flex flex-wrap gap-3">
                  {["4XL", "XXXL", "M", "L", "XXL", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 ${
                        selectedSize === size
                          ? "border-gray-900 bg-gray-900 text-white"
                          : "border-gray-300 text-gray-700 hover:border-gray-400"
                      } transition-colors`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 border border-gray-300 hover:bg-gray-100 transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 border border-gray-300 hover:bg-gray-100 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button className="w-full bg-gray-900 text-white py-4 font-medium hover:bg-gray-800 transition-colors">
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

