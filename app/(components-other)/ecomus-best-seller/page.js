"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: {
      container: "bg-white",
      hover: "hover:shadow-xl"
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      hover: "group-hover:text-blue-600"
    },
    buttons: {
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-white/80 text-gray-700 hover:bg-white"
      },
      quickView: "bg-white/80 text-gray-700 hover:bg-white",
      quickAdd: "bg-gray-900 text-white",
      loadMore: "bg-gray-900 text-white hover:bg-gray-800"
    },
    borders: {
      size: "border border-gray-200"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    stars: "fill-yellow-400 text-yellow-400"
  },
  
  // Page Header
  header: {
    title: "Best Seller",
    description: "Shop the Latest Styles: Stay ahead of the curve with our newest arrivals"
  },
  
  // Products (Edit products here!)
  products: [
    {
      id: 1,
      name: "Ribbed Tank Top",
      price: 16.95,
      originalPrice: null,
      colors: ["Orange", "Black", "White"],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.5
    },
    {
      id: 2,
      name: "Ribbed Modal T-shirt",
      price: 18.95,
      originalPrice: null,
      colors: ["Brown", "Light Purple", "Light Green"],
      sizes: ["M", "L", "XL"],
      rating: 4.8
    },
    {
      id: 3,
      name: "Oversized Printed T-shirt",
      price: 10.00,
      originalPrice: null,
      colors: [],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.3
    },
    {
      id: 4,
      name: "Oversized Printed T-shirt",
      price: 16.95,
      originalPrice: null,
      colors: ["White", "Pink", "Black"],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.6
    },
    {
      id: 5,
      name: "V-neck Linen T-shirt",
      price: 14.95,
      originalPrice: null,
      colors: ["Brown", "White"],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.4
    },
    {
      id: 6,
      name: "Loose Fit Sweatshirt",
      price: 10.00,
      originalPrice: null,
      colors: ["Light Green", "Black", "Blue", "Dark Blue", "White", "Light Grey"],
      sizes: [],
      rating: 4.7
    },
    {
      id: 7,
      name: "Regular Fit Oxford Shirt",
      price: 10.00,
      originalPrice: null,
      colors: ["Black", "Dark Blue", "Beige", "Light Blue", "White"],
      sizes: ["S", "M", "L"],
      rating: 4.5
    },
    {
      id: 8,
      name: "Stylish T-shirt",
      price: 12.00,
      originalPrice: null,
      colors: [],
      sizes: ["S", "M", "L", "XL"],
      rating: 4.2
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-4"
    },
    gap: "gap-6"
  },
  
  // Color Mapping
  colorMap: {
    orange: "#ff9500",
    black: "#000",
    white: "#fff",
    brown: "#8b4513",
    purple: "#a855f7",
    green: "#10b981",
    pink: "#ec4899",
    blue: "#3b82f6",
    "dark blue": "#1e3a8a",
    beige: "#f5f5dc",
    "light blue": "#93c5fd",
    "light grey": "#d1d5db",
    "light green": "#86efac",
    "light purple": "#c084fc"
  },
  
  // UI Text
  ui: {
    quickAdd: "Quick Add",
    loadMore: "Load more"
  }
};

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());
  const { colors, header, products, grid, colorMap, ui } = pageConfig;

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getColorValue = (colorName) => {
    const lower = colorName.toLowerCase();
    return colorMap[lower] || colorMap[lower.replace(/\s+/g, "")] || "#ccc";
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-4`}>
            {header.title}
          </h2>
          <p className={`${colors.text.secondary} text-lg`}>
            {header.description}
          </p>
        </motion.div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className={`group ${colors.card.container} rounded-lg shadow-md ${colors.card.hover} transition-all duration-300 overflow-hidden`}
            >
              {/* Product Image */}
              <div className={`relative aspect-square ${colors.gradients.image} overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                </div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleWishlist(product.id)}
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

                {/* Quick Add Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 ${colors.buttons.quickAdd} px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all`}
                >
                  {ui.quickAdd}
                </motion.button>
              </div>

              {/* Product Info */}
              <div className="p-4">
                {/* Sizes */}
                {product.sizes.length > 0 && (
                  <div className="flex gap-1 mb-2">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className={`text-xs ${colors.text.secondary} ${colors.borders.size} px-2 py-1 rounded`}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                )}

                <h3 className={`font-semibold ${colors.text.primary} mb-2 ${colors.text.hover} transition-colors`}>
                  {product.name}
                </h3>

                {/* Colors */}
                {product.colors.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{ backgroundColor: getColorValue(color) }}
                      />
                    ))}
                  </div>
                )}

                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className={`text-lg font-bold ${colors.text.primary}`}>
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className={`w-4 h-4 ${colors.stars}`} />
                    <span className={`text-sm ${colors.text.secondary}`}>{product.rating}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${colors.buttons.loadMore} px-8 py-3 rounded-lg font-semibold transition-colors`}
          >
            {ui.loadMore}
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
