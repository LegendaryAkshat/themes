"use client";

import { motion } from "framer-motion";

export default function Page() {
  const categories = [
    "Laptop & PC",
    "Watches",
    "Mobile & Tablet",
    "Health & Sport",
    "Home Appliance",
    "Games & Video",
    "Television"
  ];

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </button>
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 bg-white border-2 border-gray-200 rounded-lg px-6 py-3 hover:border-blue-600 hover:bg-blue-50 transition-colors"
              >
                <span className="text-gray-700 font-medium whitespace-nowrap">
                  {category}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

