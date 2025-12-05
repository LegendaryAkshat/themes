"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Star, ChevronDown } from "lucide-react";
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
      addToCart: "bg-blue-600 text-white",
      dropdown: {
        button: "border border-gray-300 hover:border-gray-400",
        menu: "bg-white border border-gray-300",
        item: "hover:bg-gray-50"
      }
    },
    borders: {
      swatch: "border border-gray-300"
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
  
  // UI Text
  ui: {
    colorLabel: "Color",
    addToCart: "Add to Cart"
  }
};

export default function Page() {
  const [selectedColor, setSelectedColor] = useState(pageConfig.colorOptions[0].name);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { colors, product, colorOptions, ui } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`aspect-square ${colors.gradients.image} rounded-2xl`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
            </div>
          </div>

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

            <div className="mb-6 relative">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>{ui.colorLabel}</label>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className={`w-full px-4 py-3 ${colors.buttons.dropdown.button} rounded-lg flex items-center justify-between transition-colors`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-6 h-6 rounded-full ${colors.borders.swatch}`}
                    style={{ backgroundColor: colorOptions.find(c => c.name === selectedColor)?.value }}
                  />
                  <span>{selectedColor}</span>
                </div>
                <motion.div
                  animate={{ rotate: showDropdown ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className={`w-5 h-5 ${colors.text.secondary}`} />
                </motion.div>
              </button>
              <AnimatePresence>
                {showDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className={`absolute z-10 w-full mt-2 ${colors.buttons.dropdown.menu} rounded-lg shadow-lg`}
                  >
                    {colorOptions.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => {
                          setSelectedColor(color.name);
                          setShowDropdown(false);
                        }}
                        className={`w-full px-4 py-3 flex items-center gap-3 ${colors.buttons.dropdown.item} transition-colors`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full ${colors.borders.swatch}`}
                          style={{ backgroundColor: color.value }}
                        />
                        <span>{color.name}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 ${colors.buttons.addToCart} py-4 rounded-lg font-semibold flex items-center justify-center gap-2`}
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
