"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Heart, Star, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());

  const products = [
    { id: 1, name: "Classic White Tee", price: "$29.00", rating: 4.8, description: "Comfortable cotton t-shirt", image: "tee" },
    { id: 2, name: "Denim Jacket", price: "$89.00", rating: 4.9, description: "Vintage-inspired denim jacket", image: "jacket" },
    { id: 3, name: "Leather Boots", price: "$199.00", rating: 4.7, description: "Handcrafted leather boots", image: "boots" }
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
            <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Product List</h1>
          <p className="text-gray-400">Detailed view of our products</p>
        </div>

        <div className="space-y-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-gray-900 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors overflow-hidden"
            >
              <Link href={`/products/${product.id}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-700 rounded"></div>
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold">{product.name}</h3>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleWishlist(product.id);
                          }}
                          className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                        >
                          <Heart
                            className={`w-5 h-5 ${wishlist.has(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                          />
                        </button>
                      </div>
                      <p className="text-gray-400 mb-4">{product.description}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-400">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold bg-blue-600 px-4 py-2 rounded-md">
                        {product.price}
                      </span>
                      <button className="flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-md hover:bg-gray-200 transition-colors">
                        <ShoppingBag className="w-4 h-4" />
                        Add to Cart
                      </button>
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

