"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Check } from "lucide-react";
import { useState, useMemo } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      selected: "border-blue-600 bg-blue-50",
      unselected: "border-gray-200 hover:border-gray-300"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200",
      check: "bg-blue-600"
    },
    badges: {
      required: "text-gray-500",
      savings: "text-green-600"
    }
  },
  
  // Page Header
  header: {
    title: "Frequently Bought Together"
  },
  
  // Products (Edit products here!)
  products: [
    { id: 1, name: "Main Product", price: 99.99, required: true },
    { id: 2, name: "Accessory 1", price: 29.99, required: false },
    { id: 3, name: "Accessory 2", price: 19.99, required: false },
    { id: 4, name: "Accessory 3", price: 39.99, required: false }
  ],
  
  // Pricing
  pricing: {
    discountMultiplier: 1.2
  },
  
  // Actions
  actions: {
    addToCart: {
      text: "Add All to Cart",
      icon: "ShoppingBag"
    }
  }
};

export default function Page() {
  const [selectedItems, setSelectedItems] = useState(new Set([1]));
  const { colors, header, products, pricing, actions } = pageConfig;

  const toggleItem = (id) => {
    if (products.find(p => p.id === id)?.required) return;
    const newSet = new Set(selectedItems);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSelectedItems(newSet);
  };

  const total = useMemo(() => {
    return products
      .filter(p => selectedItems.has(p.id))
      .reduce((sum, p) => sum + p.price, 0);
  }, [selectedItems, products]);

  const iconMap = {
    ShoppingBag,
    Check
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          {header.title}
        </motion.h1>

        <div className={`${colors.card} rounded-2xl shadow-lg p-8`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all ${
                  selectedItems.has(product.id)
                    ? colors.borders.selected
                    : colors.borders.unselected
                } ${product.required ? "opacity-100" : ""}`}
                onClick={() => toggleItem(product.id)}
              >
                {index < products.length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 z-10 text-2xl text-gray-400">
                    +
                  </div>
                )}
                {selectedItems.has(product.id) && (
                  <div className={`absolute top-2 right-2 w-6 h-6 ${colors.gradients.check} rounded-full flex items-center justify-center`}>
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
                <div className={`aspect-square ${colors.gradients.image} rounded-lg mb-3`}>
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-20 h-20 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{product.name}</h3>
                <p className={`text-lg font-bold ${colors.text.primary}`}>${product.price.toFixed(2)}</p>
                {product.required && (
                  <p className={`text-xs ${colors.badges.required} mt-1`}>Required</p>
                )}
              </motion.div>
            ))}
          </div>

          <div className={`border-t border-gray-200 pt-6`}>
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className={colors.text.secondary}>Total Price:</p>
                <p className={`text-3xl font-bold ${colors.text.primary}`}>${total.toFixed(2)}</p>
                <p className={`text-sm ${colors.badges.savings} line-through mt-1`}>
                  ${(total * pricing.discountMultiplier).toFixed(2)}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${colors.buttons.primary} px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center gap-2`}
              >
                {(() => {
                  const ShoppingBagIcon = iconMap[actions.addToCart.icon];
                  return <ShoppingBagIcon className="w-5 h-5" />;
                })()}
                {actions.addToCart.text}
              </motion.button>
            </div>
            <p className={`text-sm ${colors.badges.savings} font-semibold`}>
              Save ${((total * pricing.discountMultiplier) - total).toFixed(2)} when you buy together!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
