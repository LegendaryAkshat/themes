"use client";

import { motion } from "framer-motion";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-slate-800 text-white">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <footer className="bg-slate-800 text-gray-300">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Help & Support</h3>
                <ul className="space-y-2 text-sm">
                  <li>685 Market Street, Las Vegas, LA 95820, United States</li>
                  <li>
                    <a href="tel:+0995327869843" className="hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-4 h-4 bg-gray-500 rounded"></span>
                      (+099) 532-786-9843
                    </a>
                  </li>
                  <li>
                    <a href="mailto:support@example.com" className="hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-4 h-4 bg-gray-500 rounded"></span>
                      support@example.com
                    </a>
                  </li>
                </ul>
                <div className="flex gap-3 mt-6">
                  <a href="#" className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  </a>
                  <a href="#" className="w-8 h-8 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors flex items-center justify-center">
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Account</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Login / Register</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Cart</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Wishlist</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Shop</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Quick Link</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">FAQ's</a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white transition-colors">Contact</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-bold text-lg mb-4">Download App</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Save $3 With App & New User only
                </p>
                <div className="space-y-3">
                  <a href="#" className="block">
                    <div className="w-32 h-10 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"></div>
                  </a>
                  <a href="#" className="block">
                    <div className="w-32 h-10 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"></div>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-400">
                  © 2025. All rights reserved by <a href="#" className="text-white hover:text-blue-400">Pimjo</a>.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-400">We Accept:</span>
                  <div className="flex gap-2">
                    <div className="w-12 h-8 bg-gray-700 rounded"></div>
                    <div className="w-12 h-8 bg-gray-700 rounded"></div>
                    <div className="w-12 h-8 bg-gray-700 rounded"></div>
                    <div className="w-12 h-8 bg-gray-700 rounded"></div>
                    <div className="w-12 h-8 bg-gray-700 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </motion.section>
    </main>
  );
}

