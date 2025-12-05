"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, X, Star } from "lucide-react";
import { useState } from "react";

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
      secondary: "text-gray-600",
      empty: "text-gray-300"
    },
    buttons: {
      remove: "bg-white hover:bg-red-50 hover:text-red-600",
      addToCart: "bg-blue-600 text-white hover:bg-blue-700"
    },
    badges: {
      rating: "bg-white/90 backdrop-blur-sm"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    stars: "fill-yellow-400 text-yellow-400"
  },
  
  // Page Header
  header: {
    title: "My Wishlist"
  },
  
  // Empty State
  empty: {
    icon: "Heart",
    title: "Your wishlist is empty",
    description: "Start adding items you love!"
  },
  
  // Wishlist Items (Edit items here!)
  wishlist: [
    { id: 1, name: "Premium Product 1", price: 99.99, originalPrice: 149.99, rating: 4.5 },
    { id: 2, name: "Premium Product 2", price: 79.99, originalPrice: null, rating: 4.8 },
    { id: 3, name: "Premium Product 3", price: 129.99, originalPrice: 179.99, rating: 4.3 },
    { id: 4, name: "Premium Product 4", price: 59.99, originalPrice: null, rating: 4.7 }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3",
      large: "xl:grid-cols-4"
    },
    gap: "gap-6"
  },
  
  // UI Text
  ui: {
    addToCart: "Add to Cart"
  }
};

export default function Page() {
  const [wishlist, setWishlist] = useState(pageConfig.wishlist);
  const { colors, header, empty, grid, ui } = pageConfig;

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
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

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <Heart className={`w-24 h-24 ${colors.text.empty} mx-auto mb-4`} />
            <h2 className={`text-2xl font-semibold ${colors.text.primary} mb-2`}>{empty.title}</h2>
            <p className={`${colors.text.secondary} mb-6`}>{empty.description}</p>
          </div>
        ) : (
          <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
            {wishlist.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group ${colors.card.container} rounded-lg shadow-md ${colors.card.hover} transition-all overflow-hidden relative`}
              >
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className={`absolute top-4 right-4 z-10 p-2 ${colors.buttons.remove} rounded-full shadow-md transition-colors opacity-0 group-hover:opacity-100`}
                >
                  <X className="w-5 h-5" />
                </button>

                <div className={`aspect-square ${colors.gradients.image} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className={`flex items-center gap-1 ${colors.badges.rating} px-2 py-1 rounded`}>
                      <Star className={`w-4 h-4 ${colors.stars}`} />
                      <span className="text-sm font-semibold">{item.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{item.name}</h3>
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`text-lg font-bold ${colors.text.primary}`}>${item.price.toFixed(2)}</span>
                    {item.originalPrice && (
                      <span className={`text-sm ${colors.text.secondary} line-through`}>${item.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${colors.buttons.addToCart} py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    {ui.addToCart}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
