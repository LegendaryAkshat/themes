"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Eye, Star } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());

  const products = [
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
  ];

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

  return (
    <main className="min-h-screen w-full bg-white">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Best Seller
          </h2>
          <p className="text-gray-600 text-lg">
            Shop the Latest Styles: Stay ahead of the curve with our newest arrivals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
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
                      wishlist.has(product.id)
                        ? "bg-red-500 text-white"
                        : "bg-white/80 text-gray-700 hover:bg-white"
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={wishlist.has(product.id) ? "currentColor" : "none"} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-white/80 text-gray-700 hover:bg-white backdrop-blur-sm"
                  >
                    <Eye className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Quick Add Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-6 py-2 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-all"
                >
                  Quick Add
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
                        className="text-xs text-gray-500 border border-gray-200 px-2 py-1 rounded"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                )}

                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Colors */}
                {product.colors.length > 0 && (
                  <div className="flex gap-2 mb-3">
                    {product.colors.map((color, idx) => (
                      <div
                        key={idx}
                        className="w-4 h-4 rounded-full border border-gray-300"
                        style={{
                          backgroundColor: color.toLowerCase().includes("orange")
                            ? "#ff9500"
                            : color.toLowerCase().includes("black")
                            ? "#000"
                            : color.toLowerCase().includes("white")
                            ? "#fff"
                            : color.toLowerCase().includes("brown")
                            ? "#8b4513"
                            : color.toLowerCase().includes("purple")
                            ? "#a855f7"
                            : color.toLowerCase().includes("green")
                            ? "#10b981"
                            : color.toLowerCase().includes("pink")
                            ? "#ec4899"
                            : "#ccc"
                        }}
                      />
                    ))}
                  </div>
                )}

                {/* Price and Rating */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
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
            className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            Load more
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}

