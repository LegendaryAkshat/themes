"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Minus, Plus } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-blue-50",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-blue-200",
      selected: "border-blue-600 bg-blue-100",
      unselected: "border-gray-200 bg-white"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      quantity: "border-gray-300 hover:bg-gray-100"
    },
    badges: {
      discount: "bg-green-100 text-green-600"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    }
  },
  
  // Product Information
  product: {
    name: "Premium Product",
    basePrice: 99.99
  },
  
  // Discount Tiers (Edit discount tiers here!)
  discountTiers: [
    { min: 1, max: 2, discount: 0, price: 99.99 },
    { min: 3, max: 5, discount: 10, price: 89.99 },
    { min: 6, max: 10, discount: 15, price: 84.99 },
    { min: 11, max: Infinity, discount: 20, price: 79.99 }
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
  const [quantity, setQuantity] = useState(1);
  const { colors, product, discountTiers, actions } = pageConfig;

  const currentTier = discountTiers.find(t => quantity >= t.min && quantity <= t.max) || discountTiers[0];
  const totalPrice = currentTier.price * quantity;

  const iconMap = {
    ShoppingBag,
    Minus,
    Plus
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
            <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{product.name}</h1>
            <div className="mb-6">
              <span className={`text-4xl font-bold ${colors.text.primary}`}>${currentTier.price.toFixed(2)}</span>
              <span className={`text-2xl ${colors.text.secondary} line-through ml-3`}>${product.basePrice.toFixed(2)}</span>
              {currentTier.discount > 0 && (
                <span className={`${colors.badges.discount} px-3 py-1 rounded-full text-sm font-semibold ml-3`}>
                  {currentTier.discount}% OFF
                </span>
              )}
            </div>

            <div className={`${colors.card} ${colors.borders.default} rounded-lg p-6 mb-6`}>
              <h3 className={`font-semibold ${colors.text.primary} mb-4`}>Volume Discount Grid</h3>
              <div className="grid grid-cols-2 gap-3">
                {discountTiers.map((tier, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border-2 ${
                      quantity >= tier.min && quantity <= tier.max
                        ? colors.borders.selected
                        : colors.borders.unselected
                    }`}
                  >
                    <p className={`text-sm font-semibold ${colors.text.primary}`}>
                      {tier.min === tier.max ? tier.min : tier.max === Infinity ? `${tier.min}+` : `${tier.min}-${tier.max}`} units
                    </p>
                    <p className={`text-lg font-bold ${colors.text.primary}`}>${tier.price.toFixed(2)}</p>
                    {tier.discount > 0 && (
                      <p className={`text-xs ${colors.badges.discount} font-semibold`}>{tier.discount}% off</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>Quantity</label>
              <div className="flex items-center gap-4">
                <div className={`flex items-center gap-2 border ${colors.borders.default} rounded-lg`}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <p className={colors.text.secondary}>Total: <span className={`text-xl font-bold ${colors.text.primary}`}>${totalPrice.toFixed(2)}</span></p>
                </div>
              </div>
            </div>

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
