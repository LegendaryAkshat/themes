"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Box, Smartphone } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-white/80 backdrop-blur-sm",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      view: {
        active: "bg-blue-600 text-white",
        inactive: "bg-gray-200 text-gray-700"
      },
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-white/80 text-gray-700"
      }
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    }
  },
  
  // Product Information (Edit product details here!)
  product: {
    name: "Premium Product",
    price: 99.99,
    originalPrice: 149.99,
    rating: 4.8,
    reviews: 128,
    description: "View this product in 3D or use AR to see it in your space. Premium quality product with exceptional features."
  },
  
  // View Modes
  viewModes: [
    { id: "3d", label: "3D View", icon: "Box" },
    { id: "ar", label: "AR View", icon: "Smartphone" }
  ],
  
  // Actions
  actions: {
    addToCart: {
      text: "Add to Cart",
      icon: "ShoppingBag"
    }
  }
};

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [viewMode, setViewMode] = useState("3d");
  const { colors, product, viewModes, actions } = pageConfig;

  const iconMap = {
    Heart,
    ShoppingBag,
    Star,
    Box,
    Smartphone
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className={`aspect-square ${colors.gradients.image} rounded-2xl mb-4 relative overflow-hidden`}>
              <div className="w-full h-full flex items-center justify-center">
                {viewMode === "3d" ? (
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-64 h-64 bg-gradient-to-br from-blue-300 to-purple-300 rounded-xl"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="w-full h-full flex items-center justify-center text-6xl">📦</div>
                  </motion.div>
                ) : (
                  <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
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
            <div className="flex gap-2 justify-center">
              {viewModes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setViewMode(mode.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                    viewMode === mode.id ? colors.buttons.view.active : colors.buttons.view.inactive
                  }`}
                >
                  {(() => {
                    const Icon = iconMap[mode.icon];
                    return <Icon className="w-5 h-5 inline mr-2" />;
                  })()}
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${colors.text.secondary}`} />
              ))}
              <span className={colors.text.secondary}>{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="mb-6">
              <span className={`text-4xl font-bold ${colors.text.primary}`}>${product.price.toFixed(2)}</span>
              <span className={`text-2xl ${colors.text.secondary} line-through ml-3`}>${product.originalPrice.toFixed(2)}</span>
            </div>
            <p className={`${colors.text.secondary} mb-8 leading-relaxed`}>
              {product.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full ${colors.buttons.primary} py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2`}
            >
              {(() => {
                const ShoppingBagIcon = iconMap[actions.addToCart.icon];
                return <ShoppingBagIcon className="w-5 h-5" />;
              })()}
              {actions.addToCart.text}
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
