"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, Gift } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: {
      container: "bg-white",
      hover: "hover:shadow-xl"
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-700"
    },
    buttons: {
      addToCart: "bg-blue-600 text-white hover:bg-blue-700"
    },
    cards: {
      offer: "bg-gradient-to-r from-purple-50 to-pink-50"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    stars: {
      filled: "fill-yellow-400 text-yellow-400",
      empty: "text-gray-300"
    }
  },
  
  // Page Header
  header: {
    title: "Complimentary Products"
  },
  
  // Offer Banner
  offer: {
    icon: "Gift",
    title: "Perfect Complements",
    description: "These products work great together and are often purchased with your selected item.",
    iconColor: "text-purple-600"
  },
  
  // Complimentary Products (Edit products here!)
  products: [
    { id: 1, name: "Matching Case", price: 19.99, rating: 4.5 },
    { id: 2, name: "Screen Protector", price: 9.99, rating: 4.7 },
    { id: 3, name: "Charging Cable", price: 14.99, rating: 4.6 }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "md:grid-cols-3"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const { colors, header, offer, products, grid } = pageConfig;
  const GiftIcon = Gift;

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

        <div className={`${colors.cards.offer} rounded-2xl p-8 mb-8`}>
          <div className="flex items-center gap-3 mb-4">
            <GiftIcon className={`w-8 h-8 ${offer.iconColor}`} />
            <h2 className={`text-2xl font-bold ${colors.text.primary}`}>{offer.title}</h2>
          </div>
          <p className={colors.text.secondary}>
            {offer.description}
          </p>
        </div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${colors.card.container} rounded-lg shadow-md ${colors.card.hover} transition-all p-6`}
            >
              <div className={`aspect-square ${colors.gradients.image} rounded-lg mb-4`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-300 rounded"></div>
                </div>
              </div>
              <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{product.name}</h3>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? colors.stars.filled : colors.stars.empty
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-lg font-bold ${colors.text.primary}`}>${product.price.toFixed(2)}</span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 ${colors.buttons.addToCart} rounded-lg transition-colors`}
                >
                  <ShoppingBag className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
