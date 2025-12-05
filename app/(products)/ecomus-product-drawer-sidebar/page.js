"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Star, X } from "lucide-react";
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
      openDrawer: "bg-blue-600 text-white",
      close: "hover:bg-gray-100"
    },
    drawer: {
      overlay: "bg-black/50",
      container: "bg-white shadow-2xl"
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
    reviews: 128,
    description: "Premium quality product with exceptional features. Designed for comfort and style."
  },
  
  // Drawer Configuration
  drawer: {
    title: "Product Details",
    maxWidth: "max-w-md"
  },
  
  // UI Text
  ui: {
    openDrawerButton: "Open Product Drawer",
    addToCart: "Add to Cart"
  }
};

export default function Page() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { colors, product, drawer, ui } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDrawerOpen(true)}
          className={`mb-8 ${colors.buttons.openDrawer} px-6 py-3 rounded-lg font-semibold`}
        >
          {ui.openDrawerButton}
        </motion.button>

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
            <p className={`${colors.text.secondary} mb-8 leading-relaxed`}>
              {product.description}
            </p>
          </div>
        </div>

        <AnimatePresence>
          {isDrawerOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsDrawerOpen(false)}
                className={`fixed inset-0 ${colors.drawer.overlay} z-40`}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25 }}
                className={`fixed right-0 top-0 h-full w-full ${drawer.maxWidth} ${colors.drawer.container} z-50 overflow-y-auto`}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className={`text-2xl font-bold ${colors.text.primary}`}>{drawer.title}</h2>
                    <button
                      onClick={() => setIsDrawerOpen(false)}
                      className={`p-2 ${colors.buttons.close} rounded-lg`}
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  <div className={`aspect-square ${colors.gradients.image} rounded-lg mb-6`}>
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-48 h-48 bg-gray-300 rounded-lg"></div>
                    </div>
                  </div>
                  <h3 className={`text-xl font-bold ${colors.text.primary} mb-4`}>{product.name}</h3>
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${colors.stars}`} />
                    ))}
                    <span className={`text-sm ${colors.text.secondary}`}>{product.rating}</span>
                  </div>
                  <div className="mb-6">
                    <span className={`text-3xl font-bold ${colors.text.primary}`}>{product.price}</span>
                    <span className={`text-xl ${colors.text.secondary} line-through ml-3`}>{product.originalPrice}</span>
                  </div>
                  <p className={`${colors.text.secondary} mb-6 leading-relaxed`}>
                    {product.description}
                  </p>
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
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
