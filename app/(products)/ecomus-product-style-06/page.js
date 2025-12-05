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
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      price: "text-teal-600"
    },
    buttons: {
      wishlist: {
        active: "text-red-500",
        inactive: "text-gray-400"
      },
      quickAdd: "bg-teal-600 text-white"
    },
    stars: {
      active: "fill-yellow-400 text-yellow-400",
      inactive: "text-gray-300"
    },
    gradients: {
      image: "bg-gradient-to-br from-teal-50 to-cyan-50",
      imageInner: "bg-gradient-to-br from-teal-200 to-cyan-200"
    }
  },
  
  // Page Header
  header: {
    title: "Product Style 06"
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
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              className={`group ${colors.card} rounded-2xl shadow-md hover:shadow-2xl transition-all overflow-hidden`}
            >
              <div className={`relative aspect-square ${colors.gradients.image} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 ${colors.gradients.imageInner} rounded-2xl`}></div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full ${colors.buttons.quickAdd} py-2 rounded-lg font-semibold flex items-center justify-center gap-2`}
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Quick Add
                  </motion.button>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(product.rating) ? colors.stars.active : colors.stars.inactive
                        }`}
                      />
                    ))}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => {
                      const newSet = new Set(wishlist);
                      if (newSet.has(product.id)) newSet.delete(product.id);
                      else newSet.add(product.id);
                      setWishlist(newSet);
                    }}
                    className={`p-1 rounded-full ${
                      wishlist.has(product.id) ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive
                    }`}
                  >
                    <Heart className="w-5 h-5" fill={wishlist.has(product.id) ? "currentColor" : "none"} />
                  </motion.button>
                </div>
                <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{product.name}</h3>
                <div className="flex items-center gap-2">
                  <span className={`text-xl font-bold ${colors.text.price}`}>${product.price}</span>
                  {product.originalPrice && (
                    <span className={`text-sm ${colors.text.secondary} line-through`}>${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
