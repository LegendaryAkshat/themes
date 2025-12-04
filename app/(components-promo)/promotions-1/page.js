"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-gray-50 text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4">UP TO 30% OFF</h2>
              <p className="text-blue-100 mb-6 leading-relaxed">
                Latest premium device features advanced chip technology with 
                enhanced graphics performance powering all the newest features.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Purchase Now
              </motion.button>
            </div>
            <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gray-200 opacity-10 rounded-lg transform rotate-12 translate-x-12 translate-y-12"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Workout At Home</h3>
              <p className="text-blue-600 font-semibold text-lg mb-4">Flat 20% off</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors"
              >
                Grab the deal
              </motion.button>
            </div>
            <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">Up to 40% off</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Premium grade materials strike the perfect balance of everything you need.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800 text-white px-6 py-2 rounded-lg font-medium hover:bg-slate-700 transition-colors"
              >
                Grab the deal
              </motion.button>
            </div>
            <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

