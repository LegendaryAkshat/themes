"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());

  const products = [
    { id: 1, name: "Inflatable Kayak", price: "$983.00", rating: 4.8, description: "Premium inflatable kayak for whitewater adventures", image: "kayak" },
    { id: 2, name: "Camping Tent", price: "$299.00", rating: 4.9, description: "Weather-resistant tent for 4 people", image: "tent" },
    { id: 3, name: "Hiking Backpack", price: "$189.00", rating: 4.7, description: "Durable backpack with multiple compartments", image: "backpack" }
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
              Acme
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Product List</h1>
          <p className="text-gray-600">Detailed view of our outdoor gear</p>
        </div>

        <div className="space-y-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <Link href={`/products/${product.id}`}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-9xl">🚣</div>
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            toggleWishlist(product.id);
                          }}
                          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        >
                          <Heart
                            className={`w-5 h-5 ${wishlist.has(product.id) ? "fill-red-500 text-red-500" : "text-gray-400"}`}
                          />
                        </button>
                      </div>
                      <p className="text-gray-600 mb-4">{product.description}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      <button className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors">
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
    </main>
  );
}

