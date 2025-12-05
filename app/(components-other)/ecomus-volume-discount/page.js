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
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      success: "text-green-600"
    },
    buttons: {
      quantity: "hover:bg-gray-100",
      addToCart: "bg-blue-600 text-white hover:bg-blue-700"
    },
    badges: {
      discount: "bg-green-100 text-green-600"
    },
    borders: {
      quantity: "border border-gray-300",
      discount: "border border-blue-200"
    },
    discount: {
      container: "bg-blue-50"
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
  
  // Discount Tiers
  discounts: [
    { min: 1, max: 2, discount: 0, price: 99.99 },
    { min: 3, max: 5, discount: 10, price: 89.99 },
    { min: 6, max: 10, discount: 15, price: 84.99 },
    { min: 11, max: Infinity, discount: 20, price: 79.99 }
  ],
  
  // UI Text
  ui: {
    quantityLabel: "Quantity",
    volumeDiscountTitle: "Volume Discount",
    addToCart: "Add to Cart",
    total: "Total",
    youSave: "You save"
  }
};

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const { colors, product, discounts, ui } = pageConfig;

  const currentDiscount = discounts.find(d => quantity >= d.min && quantity <= d.max) || discounts[0];
  const totalPrice = currentDiscount.price * quantity;
  const savings = (product.basePrice - currentDiscount.price) * quantity;

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
              <span className={`text-4xl font-bold ${colors.text.primary}`}>${currentDiscount.price.toFixed(2)}</span>
              <span className={`text-2xl ${colors.text.secondary} line-through ml-3`}>${product.basePrice.toFixed(2)}</span>
              {currentDiscount.discount > 0 && (
                <span className={`${colors.badges.discount} px-3 py-1 rounded-full text-sm font-semibold ml-3`}>
                  {currentDiscount.discount}% OFF
                </span>
              )}
            </div>

            <div className={`${colors.discount.container} ${colors.borders.discount} rounded-lg p-4 mb-6`}>
              <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{ui.volumeDiscountTitle}</h3>
              <div className="space-y-1 text-sm">
                <p>Buy 1-2: ${discounts[0].price.toFixed(2)} each</p>
                <p>Buy 3-5: ${discounts[1].price.toFixed(2)} each (10% off)</p>
                <p>Buy 6-10: ${discounts[2].price.toFixed(2)} each (15% off)</p>
                <p>Buy 11+: ${discounts[3].price.toFixed(2)} each (20% off)</p>
              </div>
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>{ui.quantityLabel}</label>
              <div className="flex items-center gap-4">
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
                <div>
                  <p className={`text-sm ${colors.text.secondary}`}>{ui.total}: <span className={`text-lg font-bold ${colors.text.primary}`}>${totalPrice.toFixed(2)}</span></p>
                  {currentDiscount.discount > 0 && (
                    <p className={`text-xs ${colors.text.success}`}>{ui.youSave} ${savings.toFixed(2)}!</p>
                  )}
                </div>
              </div>
            </div>

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
