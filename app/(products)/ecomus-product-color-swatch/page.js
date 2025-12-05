"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
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
    buttons: {
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-gray-200 text-gray-700"
      },
      addToCart: "bg-blue-600 text-white hover:bg-blue-700",
      color: {
        selected: "border-blue-600 ring-2 ring-blue-200 scale-110",
        unselected: "border-gray-300 hover:border-gray-400"
      },
      size: {
        selected: "border-blue-600 bg-blue-50 text-blue-600",
        unselected: "border-gray-300 text-gray-700 hover:border-gray-400"
      }
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    stars: "fill-yellow-400 text-yellow-400"
  },
  
  // Product Information
  product: {
    name: "Premium Product",
    price: "$99.99",
    originalPrice: "$149.99",
    rating: 4.8,
    reviews: 128
  },
  
  // Color Options
  colorOptions: [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#ffffff" },
    { name: "Blue", value: "#3b82f6" },
    { name: "Red", value: "#ef4444" },
    { name: "Green", value: "#10b981" }
  ],
  
  // Size Options
  sizes: ["S", "M", "L", "XL", "XXL"],
  
  // UI Text
  ui: {
    colorLabel: "Color",
    sizeLabel: "Size",
    addToCart: "Add to Cart"
  }
};

export default function Page() {
  const [selectedColor, setSelectedColor] = useState(pageConfig.colorOptions[0].name);
  const [selectedSize, setSelectedSize] = useState(pageConfig.sizes[1]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { colors, product, colorOptions, sizes, ui } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div>
            <div className={`aspect-square ${colors.gradients.image} rounded-2xl mb-4 overflow-hidden`}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${colors.stars}`} />
              ))}
              <span className={colors.text.secondary}>{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="mb-6">
              <span className={`text-4xl font-bold ${colors.text.primary}`}>{product.price}</span>
              <span className={`text-2xl ${colors.text.secondary} line-through ml-3`}>{product.originalPrice}</span>
            </div>

            {/* Color Swatch */}
            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>
                {ui.colorLabel}: <span className={colors.text.secondary}>{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {colorOptions.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color.name ? colors.buttons.color.selected : colors.buttons.color.unselected
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>
                {ui.sizeLabel}: <span className={colors.text.secondary}>{selectedSize}</span>
              </label>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 rounded-lg border-2 transition-all ${
                      selectedSize === size ? colors.buttons.size.selected : colors.buttons.size.unselected
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 ${colors.buttons.addToCart} py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2`}
              >
                <ShoppingBag className="w-5 h-5" />
                {ui.addToCart}
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
