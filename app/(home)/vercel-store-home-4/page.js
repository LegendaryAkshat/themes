"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const trending = [
    { name: "Minimalist Watch", price: "$199", trend: "+24%" },
    { name: "Leather Wallet", price: "$89", trend: "+18%" },
    { name: "Canvas Backpack", price: "$149", trend: "+32%" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800 sticky top-0 z-50 bg-black/95 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="font-semibold text-lg">Vercel Store</span>
            </Link>

            <div className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                Home
              </Link>
              <Link href="/collections" className="text-sm hover:text-gray-300 transition-colors">
                Collections
              </Link>
              <Link href="/trending" className="text-sm hover:text-gray-300 transition-colors">
                Trending
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div className="hidden md:block relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-64 bg-gray-900 border border-gray-800 rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
              <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
                <ShoppingCart className="w-6 h-6" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative h-[500px] bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 max-w-3xl px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">New Collection Available</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Shop the Latest
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-400 mb-8"
            >
              Discover what's trending and find your next favorite piece
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className="w-6 h-6 text-blue-500" />
          <h2 className="text-3xl font-bold">Trending Now</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trending.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-700 rounded"></div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">{item.name}</h3>
                <span className="text-blue-500 text-sm font-semibold">{item.trend}</span>
              </div>
              <p className="text-2xl font-bold">{item.price}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

