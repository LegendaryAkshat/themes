"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Zap } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-yellow-50",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      accent: "text-yellow-900"
    },
    borders: {
      default: "border-yellow-200"
    },
    buttons: {
      primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90",
      quantity: "border-gray-300 hover:bg-gray-100"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    }
  },
  
  // Product Information (Edit product details here!)
  product: {
    name: "Premium Product",
    price: 99.99,
    originalPrice: 149.99
  },
  
  // Quick Buy Feature
  quickBuy: {
    enabled: true,
    badge: {
      text: "Quick Buy Available",
      description: "Skip the cart and checkout directly",
      icon: "Zap"
    },
    redirectMessage: "You'll be redirected to secure checkout"
  }
};

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const { colors, product, quickBuy } = pageConfig;

  const iconMap = {
    ShoppingBag,
    Zap
  };

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
            {quickBuy.enabled && (
              <div className={`${colors.card} ${colors.borders.default} rounded-lg p-4 mb-6 flex items-center gap-3`}>
                {(() => {
                  const ZapIcon = iconMap[quickBuy.badge.icon];
                  return <ZapIcon className={`w-6 h-6 ${colors.text.accent}`} />;
                })()}
                <div>
                  <p className={`font-semibold ${colors.text.accent}`}>{quickBuy.badge.text}</p>
                  <p className={`text-sm ${colors.text.secondary}`}>{quickBuy.badge.description}</p>
                </div>
              </div>
            )}

            <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{product.name}</h1>
            <div className="mb-6">
              <span className={`text-4xl font-bold ${colors.text.primary}`}>${product.price.toFixed(2)}</span>
              <span className={`text-2xl ${colors.text.secondary} line-through ml-3`}>${product.originalPrice.toFixed(2)}</span>
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>Quantity</label>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className={`px-4 py-2 ${colors.buttons.quantity} rounded-lg`}
                >
                  -
                </button>
                <span className={`text-xl font-semibold w-12 text-center`}>{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className={`px-4 py-2 ${colors.buttons.quantity} rounded-lg`}
                >
                  +
                </button>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full ${colors.buttons.primary} text-white py-5 rounded-lg font-bold text-xl transition-opacity flex items-center justify-center gap-3 shadow-lg`}
            >
              {(() => {
                const ZapIcon = iconMap[quickBuy.badge.icon];
                return <ZapIcon className="w-6 h-6" />;
              })()}
              Buy Now - ${(product.price * quantity).toFixed(2)}
            </motion.button>

            <p className={`text-center text-sm ${colors.text.secondary} mt-4`}>
              {quickBuy.redirectMessage}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
