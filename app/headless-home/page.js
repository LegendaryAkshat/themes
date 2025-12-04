"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left Navigation */}
            <div className="flex items-center gap-8">
              <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                About us
              </Link>
              <Link href="/spring" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Spring
              </Link>
              <Link href="/faq" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                FAQ
              </Link>
            </div>

            {/* Center Logo */}
            <Link href="/" className="text-2xl font-semibold text-gray-900">
              Headless
            </Link>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                <ShoppingBag className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[600px] bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-sm uppercase tracking-wider text-gray-700 mb-4"
            >
              GIFT GUIDE
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-light text-gray-900 mb-8"
            >
              here's to joy
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/collections/gifts"
                className="inline-block px-8 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
              >
                SHOP GIFTS
              </Link>
            </motion.div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-amber-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-200 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="h-16 bg-gray-100 rounded flex items-center justify-center mb-2">
                  <span className="text-xs text-gray-400">PRESS LOGO</span>
                </div>
                <p className="text-xs text-gray-600 italic">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-gray-900 mb-12 text-center">Complete the set</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { name: "Black Jacket", price: "$8,068.72" },
              { name: "Cozy coat", price: "$2,598.00" },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-8"
              >
                <div className="aspect-square bg-gray-100 mb-6 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded"></div>
                </div>
                <h3 className="text-2xl font-light text-gray-900 mb-2">{product.name}</h3>
                <p className="text-lg text-gray-600 mb-4">{product.price}</p>
                <Link
                  href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className="inline-block border border-gray-900 px-6 py-2 text-sm font-medium hover:bg-gray-900 hover:text-white transition-colors"
                >
                  View Product
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

