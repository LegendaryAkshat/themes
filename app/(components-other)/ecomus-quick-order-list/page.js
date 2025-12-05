"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Plus, Minus, Trash2 } from "lucide-react";
import { useState, useMemo } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      quantity: "border-gray-300 hover:bg-gray-100",
      danger: "text-red-600 hover:bg-red-50"
    }
  },
  
  // Page Header
  header: {
    title: "Quick Order List"
  },
  
  // Items (Edit items here!)
  items: [
    { id: 1, name: "Product 1", sku: "SKU001", price: 99.99, quantity: 1 },
    { id: 2, name: "Product 2", sku: "SKU002", price: 79.99, quantity: 2 },
    { id: 3, name: "Product 3", sku: "SKU003", price: 59.99, quantity: 1 }
  ],
  
  // Actions
  actions: {
    addToCart: {
      text: "Add All to Cart",
      icon: "ShoppingBag"
    }
  }
};

export default function Page() {
  const [items, setItems] = useState(pageConfig.items);
  const { colors, header, items: initialItems, actions } = pageConfig;

  const updateQuantity = (id, change) => {
    setItems(items.map(item =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = useMemo(() => {
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }, [items]);

  const iconMap = {
    ShoppingBag,
    Plus,
    Minus,
    Trash2
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

        <div className={`${colors.card} rounded-lg shadow-md p-6 mb-6`}>
          <div className="space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 p-4 border ${colors.borders.default} rounded-lg`}
              >
                <div className="flex-1">
                  <h3 className={`font-semibold ${colors.text.primary}`}>{item.name}</h3>
                  <p className={`text-sm ${colors.text.secondary}`}>SKU: {item.sku}</p>
                  <p className={`text-lg font-bold ${colors.text.primary} mt-2`}>${item.price.toFixed(2)}</p>
                </div>
                <div className={`flex items-center gap-2 border ${colors.borders.default} rounded-lg`}>
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <div className="text-right">
                  <p className={`text-lg font-bold ${colors.text.primary}`}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className={`p-2 ${colors.buttons.danger} rounded-lg`}
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className={`bg-gray-50 rounded-lg p-6 mb-6`}>
          <div className="flex justify-between items-center mb-4">
            <span className={`text-xl font-semibold ${colors.text.primary}`}>Total:</span>
            <span className={`text-3xl font-bold ${colors.text.primary}`}>${total.toFixed(2)}</span>
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
    </main>
  );
}
