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
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800">
                Enhance Your Music Experience
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Professional Laptop M1 chip, 8/256GB
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-700 transition-colors"
              >
                Check it Out!
              </motion.button>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

