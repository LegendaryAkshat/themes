"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Gift } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-700"
    },
    buttons: {
      addToCart: "bg-blue-600 text-white",
      free: "bg-blue-600 text-white"
    },
    badges: {
      free: "bg-green-100 text-green-600"
    },
    borders: {
      free: "ring-2 ring-purple-500 border-2 border-purple-500"
    },
    cards: {
      container: "bg-white",
      offer: "bg-gradient-to-r from-purple-50 to-pink-50"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    }
  },
  
  // Special Offer
  offer: {
    icon: "Gift",
    title: "Special Offer: Buy 2 Get 1 Free!",
    description: "Purchase 2 items and get the 3rd one absolutely free. Limited time offer!",
    iconColor: "text-purple-600"
  },
  
  // Products (Edit products here!)
  products: [
    { id: 1, name: "Product 1", price: 99.99, isFree: false },
    { id: 2, name: "Product 2", price: 99.99, isFree: false },
    { id: 3, name: "Product 3", price: 99.99, isFree: true }
  ],
  
  // How It Works
  instructions: {
    title: "How it works:",
    steps: [
      "Add 2 products to your cart",
      "The 3rd product will be automatically added for free",
      "Complete your purchase and enjoy your savings!"
    ]
  },
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "md:grid-cols-3"
    },
    gap: "gap-6"
  },
  
  // UI Text
  ui: {
    addToCart: "Add to Cart",
    freeItem: "Free Item"
  }
};

export default function Page() {
  const { colors, offer, products, instructions, grid, ui } = pageConfig;
  const GiftIcon = Gift;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className={`${colors.cards.offer} rounded-2xl p-8 mb-8`}>
          <div className="flex items-center gap-3 mb-4">
            <GiftIcon className={`w-8 h-8 ${offer.iconColor}`} />
            <h2 className={`text-2xl font-bold ${colors.text.primary}`}>{offer.title}</h2>
          </div>
          <p className={colors.text.secondary}>
            {offer.description}
          </p>
        </div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.gap} mb-8`}>
          {products.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.cards.container} rounded-lg shadow-md p-6 ${
                item.isFree ? colors.borders.free : ""
              }`}
            >
              <div className={`aspect-square ${colors.gradients.image} rounded-lg mb-4`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
              <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{item.name}</h3>
              <div className="flex items-center justify-between mb-4">
                <span className={`text-lg font-bold ${colors.text.primary}`}>${item.price.toFixed(2)}</span>
                {item.isFree && (
                  <span className={`${colors.badges.free} px-2 py-1 rounded text-xs font-semibold`}>
                    FREE
                  </span>
                )}
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full ${item.isFree ? colors.buttons.free : colors.buttons.addToCart} py-2 rounded-lg font-semibold flex items-center justify-center gap-2`}
              >
                <ShoppingBag className="w-4 h-4" />
                {item.isFree ? ui.freeItem : ui.addToCart}
              </motion.button>
            </motion.div>
          ))}
        </div>

        <div className={`${colors.cards.container} rounded-lg shadow-md p-6`}>
          <h3 className={`font-semibold ${colors.text.primary} mb-4`}>{instructions.title}</h3>
          <ol className="list-decimal list-inside space-y-2 text-gray-600">
            {instructions.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </main>
  );
}
