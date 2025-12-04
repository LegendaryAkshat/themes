"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());

  const products = [
    { id: 1, name: "ZZ Plant", price: "$80.00", rating: 4.8, image: "plant1" },
    { id: 2, name: "Monstera", price: "$95.00", rating: 4.9, image: "plant2" },
    { id: 3, name: "Snake Plant", price: "$65.00", rating: 4.7, image: "plant3" },
    { id: 4, name: "Pothos", price: "$45.00", rating: 4.6, image: "plant4" },
    { id: 5, name: "Fiddle Leaf", price: "$120.00", rating: 4.9, image: "plant5" },
    { id: 6, name: "Peace Lily", price: "$55.00", rating: 4.8, image: "plant6" }
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
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Planted
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-md relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Product Grid</h1>
          <p className="text-gray-600">Browse our plant collection</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  <div className="text-9xl">🌿</div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart
                      className={`w-5 h-5 ${wishlist.has(product.id) ? "fill-red-500 text-red-500" : "text-gray-700"}`}
                    />
                  </button>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <button className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </main>
  );
}

