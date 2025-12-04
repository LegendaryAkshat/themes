"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const collections = [
    { name: "New Arrivals", count: 24, image: "new" },
    { name: "Best Sellers", count: 18, image: "bestsellers" },
    { name: "On Sale", count: 32, image: "sale" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                About us
              </Link>
              <Link href="/collections" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">
                Collections
              </Link>
            </div>
            <Link href="/" className="text-2xl font-semibold text-gray-900">
              Headless
            </Link>
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

      <section className="relative h-[600px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 max-w-3xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-light text-gray-900 mb-6"
            >
              Discover Your Style
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10"
            >
              Curated collections for the modern lifestyle
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
              >
                Explore Collections
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              >
                <Link href={`/collections/${collection.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="aspect-[4/5] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-200 rounded"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{collection.name}</h3>
                  <p className="text-gray-600">{collection.count} items</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

