"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
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
      price: "text-indigo-600"
    },
    buttons: {
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-white text-gray-700 shadow-lg"
      },
      addToCart: "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
    },
    gradients: {
      image: "bg-gradient-to-br from-indigo-50 to-purple-50",
      imageInner: "bg-gradient-to-br from-indigo-200 to-purple-200",
      card: "bg-gradient-to-b from-white to-gray-50"
    }
  },
  
  // Page Header
  header: {
    title: "Product Style 05"
  },
  
  // Products (Edit products here!)
  products: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    originalPrice: Math.random() > 0.5 ? (Math.random() * 150 + 50).toFixed(2) : null,
    rating: (Math.random() * 1 + 4).toFixed(1)
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
              initial={{ opacity: 0, rotateY: -15 }}
              whileInView={{ opacity: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group ${colors.card} rounded-xl shadow-lg hover:shadow-2xl transition-all overflow-hidden transform perspective-1000`}
            >
              <div className={`relative aspect-square ${colors.gradients.image} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 ${colors.gradients.imageInner} rounded-xl transform group-hover:scale-110 transition-transform`}></div>
                </div>
                <div className="absolute top-4 right-4">
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const newSet = new Set(wishlist);
                      if (newSet.has(product.id)) newSet.delete(product.id);
                      else newSet.add(product.id);
                      setWishlist(newSet);
                    }}
                    className={`p-2 rounded-full shadow-lg ${
                      wishlist.has(product.id) ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={wishlist.has(product.id) ? "currentColor" : "none"} />
                  </motion.button>
                </div>
              </div>
              <div className={`p-6 ${colors.gradients.card}`}>
                <h3 className={`font-bold ${colors.text.primary} mb-3 text-lg`}>{product.name}</h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className={`text-2xl font-bold ${colors.text.price}`}>${product.price}</span>
                    {product.originalPrice && (
                      <span className={`text-sm ${colors.text.secondary} line-through ml-2`}>${product.originalPrice}</span>
                    )}
                  </div>
                  <span className={`text-sm ${colors.text.secondary}`}>★ {product.rating}</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${colors.buttons.addToCart} py-3 rounded-lg font-semibold flex items-center justify-center gap-2`}
                >
                  <ShoppingBag className="w-5 h-5" />
                  Add to Cart
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
