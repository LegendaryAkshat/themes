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
        active: "border-red-500 bg-red-50 text-red-600",
        inactive: "border-gray-300 text-gray-700"
      },
      addToCart: "bg-blue-600 text-white hover:bg-blue-700"
    },
    borders: {
      divider: "border-t border-gray-200"
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
    description: {
      title: "Description",
      paragraphs: [
        "Premium quality product with exceptional features. Designed for comfort and style, this product combines modern aesthetics with practical functionality.",
        "Made from the finest materials and crafted with attention to detail, this product is built to last. Perfect for everyday use while maintaining a sophisticated appearance.",
        "With advanced technology and innovative design, this product sets new standards in quality and performance. Experience the difference that premium craftsmanship makes."
      ]
    }
  },
  
  // UI Text
  ui: {
    addToCart: "Add to Cart"
  }
};

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { colors, product, ui } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className={`aspect-video ${colors.gradients.image} rounded-2xl`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-96 h-64 bg-gray-300 rounded-xl"></div>
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
          </div>

          <div className={`${colors.borders.divider} pt-6`}>
            <h3 className={`font-semibold ${colors.text.primary} mb-4`}>{product.description.title}</h3>
            <div className={`space-y-4 ${colors.text.secondary} leading-relaxed`}>
              {product.description.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
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
              className={`px-8 py-4 rounded-lg border-2 ${
                isWishlisted ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive
              }`}
            >
              <Heart className="w-6 h-6" fill={isWishlisted ? "currentColor" : "none"} />
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
