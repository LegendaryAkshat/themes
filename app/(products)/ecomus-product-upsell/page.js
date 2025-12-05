"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Star, ArrowRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: {
      container: "bg-white",
      item: "bg-gray-50"
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    buttons: {
      addToCart: "bg-blue-600 text-white hover:bg-blue-700"
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
    title: "Product Upsell Features"
  },
  
  // Upsell Section
  upsell: {
    title: "You May Also Like"
  },
  
  // Upsell Products
  products: [
    { id: 1, name: "Matching Accessory", price: 29.99, rating: 4.5 },
    { id: 2, name: "Complementary Item", price: 39.99, rating: 4.7 },
    { id: 3, name: "Recommended Product", price: 49.99, rating: 4.6 }
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
  const { colors, header, upsell, products, grid } = pageConfig;

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

        <div className={`${colors.card.container} rounded-2xl shadow-lg p-8 mb-8`}>
          <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>{upsell.title}</h2>
          <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.gap}`}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${colors.card.item} rounded-lg p-4`}
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
                  <span className={`text-lg font-bold ${colors.text.primary}`}>${product.price}</span>
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
      </div>
    </main>
  );
}
