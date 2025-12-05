"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Minus, Plus } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-300",
      selected: "border-blue-600"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-gray-200 text-gray-700"
      },
      quantity: "hover:bg-gray-100"
    },
    stars: {
      active: "fill-yellow-400 text-yellow-400"
    }
  },
  
  // Product Information (Edit product details here!)
  product: {
    name: "Premium Product",
    price: "$99.99",
    originalPrice: "$149.99",
    rating: 4.8,
    reviews: 128,
    description: "Premium quality product with exceptional features. Designed for comfort and style."
  },
  
  // Product Options
  options: {
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#000" },
      { name: "White", value: "#fff" },
      { name: "Blue", value: "#3b82f6" }
    ],
    defaultSize: "M",
    defaultColor: "Black"
  }
};

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(pageConfig.options.defaultSize);
  const [selectedColor, setSelectedColor] = useState(pageConfig.options.defaultColor);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { colors, product, options } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
            </div>
          </div>

          <div>
            <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${colors.stars.active}`} />
              ))}
              <span className={colors.text.secondary}>{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="mb-6">
              <span className={`text-4xl font-bold ${colors.text.primary}`}>{product.price}</span>
              <span className={`text-2xl ${colors.text.secondary} line-through ml-3`}>{product.originalPrice}</span>
            </div>
            <p className={`${colors.text.secondary} mb-8 leading-relaxed`}>
              {product.description}
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>Size: {selectedSize}</label>
                <div className="flex gap-2">
                  {options.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 rounded-lg border-2 transition-all ${
                        selectedSize === size
                          ? `${colors.borders.selected} bg-blue-50 text-blue-600`
                          : `${colors.borders.default} ${colors.text.secondary}`
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>Color: {selectedColor}</label>
                <div className="flex gap-3">
                  {options.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`w-12 h-12 rounded-full border-2 ${
                        selectedColor === color.name ? `${colors.borders.selected} ring-2 ring-blue-200` : colors.borders.default
                      }`}
                      style={{ backgroundColor: color.value }}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>Quantity</label>
                <div className={`flex items-center gap-2 border ${colors.borders.default} rounded-lg w-fit`}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={`p-2 ${colors.buttons.quantity}`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={`p-2 ${colors.buttons.quantity}`}
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
                className={`flex-1 ${colors.buttons.primary} text-white py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2`}
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 rounded-lg ${
                  isWishlisted ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive
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
