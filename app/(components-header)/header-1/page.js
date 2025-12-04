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
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-xl font-bold text-slate-800">NextMerce</span>
              </div>
              
              <div className="flex-1 max-w-2xl mx-8">
                <form className="flex">
                  <button className="flex items-center gap-2 px-4 py-3 bg-gray-100 rounded-l-lg border-r border-gray-300 hover:bg-gray-200 transition-colors">
                    <div className="w-5 h-5 bg-gray-400 flex flex-col gap-0.5">
                      <div className="w-full h-0.5 bg-gray-600"></div>
                      <div className="w-full h-0.5 bg-gray-600"></div>
                      <div className="w-full h-0.5 bg-gray-600"></div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">All Categories</span>
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  </button>
                  <input
                    type="text"
                    placeholder="I am shopping for..."
                    className="flex-1 px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                    <div className="w-5 h-5 bg-white rounded"></div>
                  </button>
                </form>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="#" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
                </a>
                <a href="#" className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">0</span>
                </a>
                <a href="#" className="text-sm text-gray-700 hover:text-blue-600 transition-colors">
                  Sign In / Register
                </a>
              </div>
            </div>
            
            <nav className="flex items-center gap-6">
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Popular</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Shop</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                Pages
                <div className="w-3 h-3 bg-gray-400 rounded"></div>
              </a>
              <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1">
                Blogs
                <div className="w-3 h-3 bg-gray-400 rounded"></div>
              </a>
            </nav>
          </div>
        </header>
      </motion.section>
    </main>
  );
}
