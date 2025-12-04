"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Star } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const featuredProducts = [
    { id: 1, name: "Classic Denim Jacket", price: "$89.00", rating: 4.8, image: "jacket" },
    { id: 2, name: "Leather Crossbody Bag", price: "$125.00", rating: 4.9, image: "bag" },
    { id: 3, name: "Wool Scarf", price: "$45.00", rating: 4.7, image: "scarf" },
    { id: 4, name: "Canvas Sneakers", price: "$75.00", rating: 4.6, image: "sneakers" }
  ];

  const categories = [
    { name: "New Arrivals", count: 24 },
    { name: "Best Sellers", count: 18 },
    { name: "Sale", count: 32 }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="md:hidden p-2 rounded-md hover:bg-gray-800">
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-8 flex-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm"></div>
                </div>
                <span className="font-semibold text-lg">Vercel Store</span>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                  All
                </Link>
                <Link href="/search?category=apparel" className="text-sm hover:text-gray-300 transition-colors">
                  Apparel
                </Link>
                <Link href="/search?category=accessories" className="text-sm hover:text-gray-300 transition-colors">
                  Accessories
                </Link>
              </div>
            </div>

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

      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 max-w-3xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Discover Your Style
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8"
            >
              Curated collections of thoughtfully designed pieces
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/collections/all"
                className="inline-block px-8 py-3 bg-white text-black font-semibold hover:bg-gray-200 transition-colors rounded-md"
              >
                Shop Now
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
            >
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className="text-gray-400">{category.count} items</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/products/${product.id}`}>
                <div className="aspect-square bg-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-gray-800 group-hover:border-gray-700 transition-colors">
                  <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-700 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <span className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-md">
                      {product.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-gray-400">{product.rating}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

