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
      secondary: "text-gray-600",
      price: "text-blue-600"
    },
    buttons: {
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-gray-200 text-gray-700"
      },
      addToCart: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90"
    },
    borders: {
      thumbnail: {
        selected: "border-blue-600",
        unselected: "border-transparent"
      }
    },
    gradients: {
      main: "bg-gradient-to-br from-blue-100 to-purple-100",
      thumbnail: "bg-gradient-to-br from-gray-100 to-gray-200",
      button: "bg-gradient-to-r from-blue-600 to-purple-600"
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
  
  // Images Configuration
  images: {
    thumbnailCount: 4,
    gridColumns: "grid-cols-2"
  },
  
  // UI Text
  ui: {
    addToCart: "Add to Cart"
  }
};

export default function Page() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { colors, product, images, ui } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images - Grid Layout */}
          <div className={`grid ${images.gridColumns} gap-4`}>
            <div className={`col-span-2 aspect-square ${colors.gradients.main} rounded-2xl overflow-hidden`}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-blue-300 to-purple-300 rounded-xl"></div>
              </div>
            </div>
            {[1, 2, 3, 4].map((i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`aspect-square ${colors.gradients.thumbnail} rounded-lg border-2 ${
                  selectedImage === i ? colors.borders.thumbnail.selected : colors.borders.thumbnail.unselected
                }`}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gray-300 rounded"></div>
                </div>
              </button>
            ))}
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
              <span className={`text-4xl font-bold ${colors.text.price}`}>{product.price}</span>
              <span className={`text-2xl ${colors.text.secondary} line-through ml-3`}>{product.originalPrice}</span>
            </div>
            <p className={`${colors.text.secondary} mb-8 leading-relaxed`}>
              {product.description}
            </p>
            <div className="flex gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 ${colors.buttons.addToCart} py-4 rounded-lg font-semibold text-lg transition-opacity flex items-center justify-center gap-2`}
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
