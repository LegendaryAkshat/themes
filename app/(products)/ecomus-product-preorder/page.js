"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Clock } from "lucide-react";
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
      badge: "bg-yellow-500 text-white"
    },
    preorder: {
      container: "bg-blue-50 border border-blue-200",
      title: "text-blue-900",
      date: "text-blue-700",
      description: "text-blue-600"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    stars: "fill-yellow-400 text-yellow-400"
  },
  
  // Product Information
  product: {
    name: "Premium Product - Pre-Order",
    price: "$99.99",
    originalPrice: "$149.99",
    rating: 4.8,
    reviews: 128,
    description: "This product is available for pre-order. Reserve yours today and get it delivered on the release date."
  },
  
  // Pre-Order Configuration
  preorder: {
    badgeText: "Pre-Order",
    releaseDateDays: 30,
    title: "Expected Release Date",
    message: "Pre-order now and be among the first to receive this product when it's released!"
  },
  
  // UI Text
  ui: {
    preOrderButton: "Pre-Order Now"
  }
};

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { colors, product, preorder, ui } = pageConfig;
  
  const releaseDate = new Date();
  releaseDate.setDate(releaseDate.getDate() + preorder.releaseDateDays);

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`aspect-square ${colors.gradients.image} rounded-2xl relative`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
            </div>
            <div className={`absolute top-4 left-4 ${colors.buttons.badge} px-4 py-2 rounded-lg font-semibold flex items-center gap-2`}>
              <Clock className="w-5 h-5" />
              {preorder.badgeText}
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

            <div className={`${colors.preorder.container} rounded-lg p-4 mb-6`}>
              <p className={`${colors.preorder.title} font-semibold mb-1`}>{preorder.title}</p>
              <p className={colors.preorder.date}>{releaseDate.toLocaleDateString()}</p>
              <p className={`text-sm ${colors.preorder.description} mt-2`}>
                {preorder.message}
              </p>
            </div>

            <p className={`${colors.text.secondary} mb-8 leading-relaxed`}>
              {product.description}
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 ${colors.buttons.addToCart} py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2`}
              >
                <ShoppingBag className="w-5 h-5" />
                {ui.preOrderButton}
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
