"use client";

import { motion } from "framer-motion";
import { Heart, Share2, Star, Minus, Plus, ShoppingCart } from "lucide-react";
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
    borders: {
      default: "border-gray-300",
      selected: "border-blue-600"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-white/80 text-gray-700 hover:bg-white"
      },
      share: "bg-white/80 text-gray-700 hover:bg-white",
      quantity: "border border-gray-300 hover:bg-gray-100"
    },
    badges: {
      discount: "bg-red-100 text-red-600"
    },
    stars: {
      active: "fill-yellow-400 text-yellow-400",
      inactive: "text-gray-300"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    }
  },
  
  // Product Information (Edit product details here!)
  product: {
    name: "Premium Cotton T-Shirt",
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.5,
    reviews: 128,
    description: "High-quality cotton t-shirt with modern design. Perfect for everyday wear. Made from 100% organic cotton for maximum comfort.",
    features: [
      "100% Organic Cotton",
      "Machine Washable",
      "Sustainably Sourced",
      "Free Shipping"
    ]
  },
  
  // Variants
  variants: {
    sizes: ["S", "M", "L", "XL"],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#ffffff" },
      { name: "Blue", value: "#3b82f6" },
      { name: "Red", value: "#ef4444" }
    ]
  },
  
  // Actions
  actions: {
    wishlist: { enabled: true },
    share: { enabled: true },
    addToCart: {
      text: "Add to Cart",
      icon: "ShoppingCart"
    }
  }
};

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("Black");
  const [isWishlisted, setIsWishlisted] = useState(false);
  const { colors, product, variants, actions } = pageConfig;

  const discountPercent = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className={`aspect-square ${colors.gradients.image} rounded-2xl mb-4 overflow-hidden relative group`}>
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {actions.wishlist.enabled && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 rounded-full backdrop-blur-sm ${
                      isWishlisted
                        ? colors.buttons.wishlist.active
                        : colors.buttons.wishlist.inactive
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
                  </motion.button>
                )}
                {actions.share.enabled && (
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-full ${colors.buttons.share} backdrop-blur-sm`}
                  >
                    <Share2 className="w-5 h-5" />
                  </motion.button>
                )}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`aspect-square ${colors.gradients.image} rounded-lg cursor-pointer hover:ring-2 ring-blue-500`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-4`}>
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? colors.stars.active
                        : colors.stars.inactive
                    }`}
                  />
                ))}
              </div>
              <span className={colors.text.secondary}>
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4 mb-6">
              <span className={`text-3xl font-bold ${colors.text.primary}`}>
                ${product.price}
              </span>
              <span className={`text-xl ${colors.text.secondary} line-through`}>
                ${product.originalPrice}
              </span>
              <span className={`${colors.badges.discount} px-3 py-1 rounded-full text-sm font-semibold`}>
                {discountPercent}% OFF
              </span>
            </div>

            {/* Description */}
            <p className={`${colors.text.secondary} mb-6 leading-relaxed`}>
              {product.description}
            </p>

            {/* Size Selection */}
            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>
                Size: <span className={colors.text.secondary}>{selectedSize}</span>
              </label>
              <div className="flex gap-2">
                {variants.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 rounded-lg border-2 transition-all ${
                      selectedSize === size
                        ? `${colors.borders.selected} bg-blue-50 text-blue-600`
                        : `${colors.borders.default} ${colors.text.secondary} hover:border-gray-400`
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>
                Color: <span className={colors.text.secondary}>{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {variants.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? `${colors.borders.selected} ring-2 ring-blue-200`
                        : `${colors.borders.default} hover:border-gray-400`
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>
                Quantity
              </label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className={`p-2 rounded-lg ${colors.buttons.quantity}`}
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className={`text-xl font-semibold w-12 text-center ${colors.text.primary}`}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className={`p-2 rounded-lg ${colors.buttons.quantity}`}
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full ${colors.buttons.primary} py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2 mb-4`}
            >
              <ShoppingCart className="w-5 h-5" />
              {actions.addToCart.text}
            </motion.button>

            {/* Features */}
            <div className={`border-t ${colors.borders.default} pt-6`}>
              <h3 className={`font-semibold ${colors.text.primary} mb-4`}>Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-2 ${colors.text.secondary}`}>
                    <span className="text-green-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
