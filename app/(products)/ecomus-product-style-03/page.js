"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

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
      secondary: "text-gray-600",
      hover: "group-hover:text-blue-600"
    },
    borders: {
      default: "border-transparent",
      hover: "hover:border-blue-200"
    },
    buttons: {
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-white/90 text-gray-700 shadow-md"
      },
      addToCart: "bg-gray-900 text-white hover:bg-gray-800"
    },
    badges: {
      discount: "bg-red-500 text-white"
    },
    stars: {
      active: "fill-yellow-400 text-yellow-400",
      inactive: "text-gray-300"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    }
  },
  
  // Page Header
  header: {
    title: "Product Style 03"
  },
  
  // Products (Edit products here!)
  products: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    originalPrice: Math.random() > 0.5 ? (Math.random() * 150 + 50).toFixed(2) : null,
    rating: (Math.random() * 1 + 4).toFixed(1),
    discount: Math.random() > 0.5 ? Math.floor(Math.random() * 30 + 10) : null
  })),
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3",
      large: "xl:grid-cols-4"
    },
    gap: "gap-8"
  }
};

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());
  const { colors, header, products, grid } = pageConfig;

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

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`${colors.card} rounded-2xl shadow-lg ${colors.borders.hover} transition-all overflow-hidden border-2 ${colors.borders.default}`}>
                <div className={`relative aspect-square ${colors.gradients.image} overflow-hidden`}>
                  {product.discount && (
                    <div className={`absolute top-4 left-4 z-10 ${colors.badges.discount} px-3 py-1 rounded-full text-sm font-bold`}>
                      -{product.discount}%
                    </div>
                  )}
                  <div className="absolute top-4 right-4 z-10">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => {
                        const newSet = new Set(wishlist);
                        if (newSet.has(product.id)) newSet.delete(product.id);
                        else newSet.add(product.id);
                        setWishlist(newSet);
                      }}
                      className={`p-2 rounded-full ${
                        wishlist.has(product.id) ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive
                      }`}
                    >
                      <Heart className="w-5 h-5" fill={wishlist.has(product.id) ? "currentColor" : "none"} />
                    </motion.button>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 bg-gray-300 rounded-xl"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? colors.stars.active : colors.stars.inactive
                        }`}
                      />
                    ))}
                    <span className={`text-sm ${colors.text.secondary} ml-2`}>({product.rating})</span>
                  </div>
                  <h3 className={`font-bold ${colors.text.primary} mb-3 text-lg ${colors.text.hover} transition-colors`}>
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className={`text-2xl font-bold ${colors.text.primary}`}>${product.price}</span>
                      {product.originalPrice && (
                        <span className={`text-sm ${colors.text.secondary} line-through ml-2`}>${product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${colors.buttons.addToCart} py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
                  >
                    <ShoppingBag className="w-5 h-5" />
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
