"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Package, Download, Calendar } from "lucide-react";
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
      addToCart: "bg-blue-600 text-white"
    },
    borders: {
      selected: "border-blue-600 bg-blue-50",
      unselected: "border-gray-300 hover:border-gray-400"
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
  
  // Product Types Configuration
  productTypes: [
    { id: "physical", name: "Physical Product", icon: "Package", description: "Shipped to your address" },
    { id: "digital", name: "Digital Product", icon: "Download", description: "Instant download" },
    { id: "subscription", name: "Subscription", icon: "Calendar", description: "Recurring monthly" }
  ],
  
  // UI Text
  ui: {
    productTypeLabel: "Product Type",
    addToCart: "Add to Cart"
  },
  
  // Icon Map
  iconMap: {
    Package,
    Download,
    Calendar
  }
};

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [productType, setProductType] = useState(pageConfig.productTypes[0].id);
  const { colors, product, productTypes, ui, iconMap } = pageConfig;

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

            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>{ui.productTypeLabel}</label>
              <div className="space-y-3">
                {productTypes.map((type) => {
                  const Icon = iconMap[type.icon];
                  return (
                    <button
                      key={type.id}
                      onClick={() => setProductType(type.id)}
                      className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                        productType === type.id ? colors.borders.selected : colors.borders.unselected
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-5 h-5 ${productType === type.id ? "text-blue-600" : colors.text.secondary}`} />
                        <div>
                          <p className={`font-semibold ${productType === type.id ? "text-blue-600" : colors.text.primary}`}>
                            {type.name}
                          </p>
                          <p className={`text-sm ${colors.text.secondary}`}>{type.description}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
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

