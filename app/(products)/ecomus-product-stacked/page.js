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
    buttons: {
      wishlist: {
        active: "border-red-500 bg-red-50 text-red-600",
        inactive: "border-gray-300 text-gray-700"
      },
      addToCart: "bg-blue-600 text-white hover:bg-blue-700",
      quantity: "hover:bg-gray-100"
    },
    badges: {
      discount: "bg-red-100 text-red-600"
    },
    borders: {
      quantity: "border border-gray-300"
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
    discount: "33% OFF",
    description: "High-quality product with premium materials. Perfect for everyday use with exceptional durability and style. This product features advanced technology and modern design."
  },
  
  // UI Text
  ui: {
    quantityLabel: "Quantity:",
    addToCart: "Add to Cart"
  }
};

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { colors, product, ui } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Product Image */}
          <div className={`aspect-video ${colors.gradients.image} rounded-2xl overflow-hidden`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-96 h-64 bg-gray-300 rounded-xl"></div>
            </div>
          </div>

          {/* Product Info - Stacked */}
          <div className="space-y-6">
            <div>
              <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${colors.stars}`} />
                ))}
                <span className={colors.text.secondary}>{product.rating} ({product.reviews} reviews)</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className={`text-4xl font-bold ${colors.text.primary}`}>{product.price}</span>
              <span className={`text-2xl ${colors.text.secondary} line-through`}>{product.originalPrice}</span>
              <span className={`${colors.badges.discount} px-3 py-1 rounded-full text-sm font-semibold`}>
                {product.discount}
              </span>
            </div>

            <p className={`${colors.text.secondary} leading-relaxed text-lg`}>
              {product.description}
            </p>

            <div className="flex items-center gap-4">
              <span className={`font-semibold ${colors.text.primary}`}>{ui.quantityLabel}</span>
              <div className={`flex items-center gap-2 ${colors.borders.quantity} rounded-lg`}>
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
                className={`px-8 py-4 rounded-lg border-2 ${
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
