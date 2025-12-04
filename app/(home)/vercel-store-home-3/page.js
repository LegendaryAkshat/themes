"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const collections = [
    {
      name: "Spring Collection",
      description: "Fresh styles for the new season",
      image: "spring",
      count: 28
    },
    {
      name: "Essentials",
      description: "Timeless pieces for every wardrobe",
      image: "essentials",
      count: 45
    },
    {
      name: "Limited Edition",
      description: "Exclusive designs in limited quantities",
      image: "limited",
      count: 12
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
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
                  Collections
                </Link>
                <Link href="/about" className="text-sm hover:text-gray-300 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-sm hover:text-gray-300 transition-colors">
                  Contact
                </Link>
              </div>
            </div>

            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search..."
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

      {/* Hero */}
      <section className="relative h-[700px] bg-gradient-to-br from-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-light mb-6 tracking-tight"
            >
              Elevate Your Style
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            >
              Discover curated collections designed for the modern lifestyle
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Link
                href="/collections"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-medium hover:bg-gray-200 transition-colors rounded-md"
              >
                Explore Collections
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Collections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <Link href={`/collections/${collection.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="aspect-[4/5] bg-gray-900 rounded-2xl mb-6 flex items-center justify-center overflow-hidden border border-gray-800 group-hover:border-gray-700 transition-colors">
                  <div className="w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-700 rounded"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="text-gray-400 mb-3">{collection.description}</p>
                <p className="text-sm text-gray-500">{collection.count} items</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

