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
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-10 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-blue-200 bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  Limited Time Offer
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Smart Security Home Camera
              </h2>
              <p className="text-blue-100 text-xl mb-6 font-semibold">
                Save up to $450
              </p>
              <p className="text-blue-200 mb-8 leading-relaxed max-w-md">
                Advanced security features with AI-powered motion detection and crystal-clear 4K video recording for complete home protection.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Shop Now
              </motion.button>
            </div>
            <div className="relative z-10 mt-8">
              <div className="w-full h-56 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <div className="w-48 h-48 bg-white bg-opacity-30 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mb-32"></div>
            <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mt-24"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-2xl shadow-2xl p-10 text-white relative overflow-hidden min-h-[400px] flex flex-col justify-between"
          >
            <div className="relative z-10">
              <div className="mb-4">
                <span className="text-sm uppercase tracking-wider text-purple-200 bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  Special Deal
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Galaxy S24 Ultra 5G
              </h2>
              <p className="text-purple-100 text-xl mb-6 font-semibold">
                Save up to $600
              </p>
              <p className="text-purple-200 mb-8 leading-relaxed max-w-md">
                Next-generation smartphone with cutting-edge technology, stunning display, and powerful performance for the ultimate mobile experience.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Shop Now
              </motion.button>
            </div>
            <div className="relative z-10 mt-8">
              <div className="w-full h-56 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                <div className="w-48 h-48 bg-white bg-opacity-30 rounded-full"></div>
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mb-32"></div>
            <div className="absolute top-0 left-0 w-48 h-48 bg-white opacity-5 rounded-full -ml-24 -mt-24"></div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

