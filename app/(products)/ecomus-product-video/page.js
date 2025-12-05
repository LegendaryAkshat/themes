"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Play } from "lucide-react";
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
        inactive: "bg-white/80 text-gray-700"
      },
      addToCart: "bg-blue-600 text-white hover:bg-blue-700",
      play: "bg-white/90 text-gray-900",
      close: "bg-white text-black"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200",
      overlay: "bg-black/20 backdrop-blur-sm",
      video: "bg-black"
    },
    stars: "fill-yellow-400 text-yellow-400"
  },
  
  // Product Information
  product: {
    name: "Premium Product",
    price: "$99.99",
    originalPrice: "$149.99",
    rating: 4.8,
    reviews: 128,
    description: "Watch the product video to see it in action. Premium quality product with exceptional features."
  },
  
  // UI Text
  ui: {
    addToCart: "Add to Cart",
    videoPlayer: "Video Player",
    close: "Close"
  }
};

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { colors, product, ui } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="relative">
            <div className={`aspect-square ${colors.gradients.image} rounded-2xl overflow-hidden relative`}>
              {!isPlaying ? (
                <>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsPlaying(true)}
                    className={`absolute inset-0 flex items-center justify-center ${colors.gradients.overlay}`}
                  >
                    <div className={`w-20 h-20 ${colors.buttons.play} rounded-full flex items-center justify-center`}>
                      <Play className="w-10 h-10 ml-1" fill="currentColor" />
                    </div>
                  </motion.button>
                </>
              ) : (
                <div className={`w-full h-full ${colors.gradients.video} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <p className="mb-4">{ui.videoPlayer}</p>
                    <button
                      onClick={() => setIsPlaying(false)}
                      className={`px-4 py-2 ${colors.buttons.close} rounded-lg`}
                    >
                      {ui.close}
                    </button>
                  </div>
                </div>
              )}
            </div>
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-2 rounded-full backdrop-blur-sm ${
                  isWishlisted ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive
                }`}
              >
                <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
              </motion.button>
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
            <p className={`${colors.text.secondary} mb-8 leading-relaxed`}>
              {product.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full ${colors.buttons.addToCart} py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2`}
            >
              <ShoppingBag className="w-5 h-5" />
              {ui.addToCart}
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}

