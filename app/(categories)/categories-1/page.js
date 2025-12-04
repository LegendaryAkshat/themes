"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-gray-50 text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full font-semibold">
                  Featured Category
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">
                Premium Device Pro & Pro Max
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Discover our premium device collection with cutting-edge features, 
                advanced technology, and exceptional performance designed for professionals.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Collection
              </motion.button>
            </div>
            <div className="mt-8 w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gray-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-400 rounded-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-100 rounded-full -mr-16 -mt-16 opacity-50"></div>
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full font-semibold">
                  Top Performance
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 group-hover:text-purple-600 transition-colors">
                Professional Laptop M4
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                14-core CPU with advanced performance and efficiency cores, 
                delivering unparalleled speed and power for demanding workloads.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Shop Now
              </motion.button>
            </div>
            <div className="mt-8 w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gray-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-gray-400 rounded-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

