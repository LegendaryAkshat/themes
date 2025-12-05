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
    background: "bg-gray-50",
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
      variant: {
        selected: "border-blue-600 ring-2 ring-blue-200",
        unselected: "border-gray-300 hover:border-gray-400"
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
  
  // Variant Options
  variants: [
    { name: "Black", image: "🖤" },
    { name: "White", image: "🤍" },
    { name: "Blue", image: "💙" },
    { name: "Red", image: "❤️" }
  ],
  
  // UI Text
  ui: {
    variantLabel: "Variant",
    addToCart: "Add to Cart"
  }
};

export default function Page() {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { colors, product, variants, ui } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`aspect-square ${colors.gradients.image} rounded-2xl`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-9xl">{variants[selectedVariant].image}</div>
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

            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>
                {ui.variantLabel}: <span className={colors.text.secondary}>{variants[selectedVariant].name}</span>
              </label>
              <div className="flex gap-3">
                {variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    className={`w-16 h-16 rounded-lg border-2 transition-all flex items-center justify-center text-2xl ${
                      selectedVariant === index ? colors.buttons.variant.selected : colors.buttons.variant.unselected
                    }`}
                  >
                    {variant.image}
                  </button>
                ))}
              </div>
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
