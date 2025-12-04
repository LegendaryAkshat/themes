"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <header className="bg-white border-b border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-slate-800">Brand</span>
                <span className="text-xl text-gray-500">commerce</span>
                <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">Demo</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Popular</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Shop</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Page</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </nav>
            
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <div className="w-5 h-5 bg-gray-400 rounded"></div>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <div className="w-5 h-5 bg-gray-400 rounded"></div>
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                <div className="w-5 h-5 bg-gray-400 rounded"></div>
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors md:hidden">
                <div className="w-5 h-5 bg-gray-400 flex flex-col gap-1">
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <div className="w-full h-0.5 bg-gray-600"></div>
                  <div className="w-full h-0.5 bg-gray-600"></div>
                </div>
              </button>
            </div>
          </div>
        </header>
      </motion.section>
    </main>
  );
}

