"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye } from "lucide-react";
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
    buttons: {
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-white/80 text-gray-700"
      },
      quickView: "bg-white/80 text-gray-700",
      addToCart: "bg-gray-900 text-white"
    },
    badges: {
      new: "bg-green-500 text-white",
      sale: "bg-red-500 text-white"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    }
  },
  
  // Page Header
  header: {
    title: "Product Style 01"
  },
  
  // Products (Edit products here!)
  products: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    originalPrice: Math.random() > 0.5 ? (Math.random() * 150 + 50).toFixed(2) : null,
    rating: (Math.random() * 1 + 4).toFixed(1),
    badge: Math.random() > 0.7 ? "New" : Math.random() > 0.5 ? "Sale" : null
  })),
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3",
      large: "xl:grid-cols-4"
    },
    gap: "gap-6"
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
              whileHover={{ y: -5 }}
              className={`group ${colors.card} rounded-lg shadow-md ${colors.text.hover} transition-all overflow-hidden`}
            >
              <div className={`relative aspect-square ${colors.gradients.image} overflow-hidden`}>
                {product.badge && (
                  <span className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-semibold ${
                    product.badge === "New" ? colors.badges.new : colors.badges.sale
                  }`}>
                    {product.badge}
                  </span>
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                </div>
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const newSet = new Set(wishlist);
                      if (newSet.has(product.id)) newSet.delete(product.id);
                      else newSet.add(product.id);
                      setWishlist(newSet);
                    }}
                    className={`p-2 rounded-full backdrop-blur-sm ${
                      wishlist.has(product.id) ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={wishlist.has(product.id) ? "currentColor" : "none"} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-2 rounded-full ${colors.buttons.quickView} backdrop-blur-sm`}
                  >
                    <Eye className="w-4 h-4" />
                  </motion.button>
                </div>
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${colors.buttons.addToCart} px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all w-4/5`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </div>
                </motion.button>
              </div>
              <div className="p-4">
                <h3 className={`font-semibold ${colors.text.primary} mb-2 ${colors.text.hover} transition-colors`}>
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-lg font-bold ${colors.text.primary}`}>${product.price}</span>
                    {product.originalPrice && (
                      <span className={`text-sm ${colors.text.secondary} line-through ml-2`}>${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span className={`text-sm ${colors.text.secondary}`}>{product.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
