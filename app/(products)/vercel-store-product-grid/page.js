"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Heart, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());

  const products = [
    { id: 1, name: "Classic White Tee", price: "$29.00", rating: 4.8, image: "tee" },
    { id: 2, name: "Denim Jacket", price: "$89.00", rating: 4.9, image: "jacket" },
    { id: 3, name: "Leather Boots", price: "$199.00", rating: 4.7, image: "boots" },
    { id: 4, name: "Canvas Backpack", price: "$79.00", rating: 4.6, image: "backpack" },
    { id: 5, name: "Wool Beanie", price: "$24.00", rating: 4.5, image: "beanie" },
    { id: 6, name: "Silk Scarf", price: "$45.00", rating: 4.8, image: "scarf" },
    { id: 7, name: "Sunglasses", price: "$129.00", rating: 4.9, image: "sunglasses" },
    { id: 8, name: "Leather Belt", price: "$59.00", rating: 4.7, image: "belt" }
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
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="font-semibold text-lg">Vercel Store</span>
            </Link>
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Product Grid</h1>
          <p className="text-gray-400">Browse our complete collection</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square bg-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-gray-800 group-hover:border-gray-700 transition-colors relative">
                  <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-700 rounded"></div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart
                      className={`w-5 h-5 ${wishlist.has(product.id) ? "fill-red-500 text-red-500" : "text-white"}`}
                    />
                  </button>
                </div>
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-md">
                      {product.price}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-400">{product.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

