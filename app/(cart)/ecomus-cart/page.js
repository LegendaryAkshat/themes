"use client";

import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    homeLink: "/ecomus-home",
    checkoutLink: "/ecomus-checkout"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-300"
    },
    borders: {
      default: "border-gray-300",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
      secondary: "bg-gray-100 hover:bg-gray-200",
      icon: "hover:bg-gray-100",
      delete: "text-red-600 hover:bg-red-50"
    }
  },
  
  // Page Content
  page: {
    title: "Shopping Cart",
    emptyTitle: "Your cart is empty!",
    emptyDescription: "Start shopping to add items to your cart.",
    continueShoppingText: "Continue Shopping"
  },
  
  // Cart Items (Edit cart items here!)
  cartItems: [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      quantity: 2,
      size: "M",
      color: "Black"
    },
    {
      id: 2,
      name: "Designer Jeans",
      price: 79.99,
      quantity: 1,
      size: "L",
      color: "Blue"
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 129.99,
      quantity: 1,
      size: "42",
      color: "White"
    }
  ],
  
  // Pricing Configuration
  pricing: {
    shipping: 10.00
  },
  
  // Order Summary
  order: {
    buttonText: "Proceed to Checkout",
    continueShoppingText: "Continue Shopping"
  }
};

export default function Page() {
  const [cartItems, setCartItems] = useState(pageConfig.cartItems);
  const { brand, colors, page, pricing, order } = pageConfig;

  const updateQuantity = (id, change) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = pricing.shipping;
  const total = subtotal + shipping;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          {page.title}
        </motion.h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag className={`w-24 h-24 ${colors.text.light} mx-auto mb-4`} />
            <h2 className={`text-2xl font-semibold ${colors.text.primary} mb-2`}>
              {page.emptyTitle}
            </h2>
            <p className={`${colors.text.secondary} mb-6`}>{page.emptyDescription}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${colors.buttons.primary} text-white px-8 py-3 rounded-lg font-semibold transition-colors`}
            >
              {page.continueShoppingText}
            </motion.button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${colors.card} rounded-lg shadow-sm p-6 flex gap-6`}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-300 rounded"></div>
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{item.name}</h3>
                    <p className={`text-sm ${colors.text.secondary} mb-2`}>
                      Size: {item.size} | Color: {item.color}
                    </p>
                    <p className={`text-lg font-bold ${colors.text.primary} mb-4`}>
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className={`flex items-center gap-2 border ${colors.borders.input} rounded-lg`}>
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className={`p-2 ${colors.buttons.icon}`}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className={`p-2 ${colors.buttons.icon}`}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className={`p-2 ${colors.buttons.delete} rounded-lg transition-colors`}
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className={`text-xl font-bold ${colors.text.primary}`}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`${colors.card} rounded-lg shadow-sm p-6 sticky top-8`}
              >
                <h2 className={`text-xl font-bold ${colors.text.primary} mb-6`}>
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6">
                  <div className={`flex justify-between ${colors.text.secondary}`}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className={`flex justify-between ${colors.text.secondary}`}>
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className={`border-t ${colors.borders.input} pt-4 flex justify-between text-lg font-bold ${colors.text.primary}`}>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full ${colors.buttons.primary} text-white py-4 rounded-lg font-semibold text-lg transition-colors mb-4`}
                >
                  {order.buttonText}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full ${colors.buttons.secondary} ${colors.text.primary} py-4 rounded-lg font-semibold transition-colors`}
                >
                  {order.continueShoppingText}
                </motion.button>
              </motion.div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
