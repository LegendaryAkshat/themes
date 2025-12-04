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
        <div className="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32"></div>
          </div>
          
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-md mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't Miss Out Latest Trends & Offers
              </h2>
              <p className="text-blue-100 mb-8 leading-relaxed">
                Register to receive news about the latest offers & discount codes
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

