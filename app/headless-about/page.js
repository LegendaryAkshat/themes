"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">About us</Link>
              <Link href="/spring" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Spring</Link>
              <Link href="/faq" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">FAQ</Link>
            </div>
            <Link href="/" className="text-2xl font-semibold text-gray-900">Headless</Link>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                <ShoppingBag className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-5xl font-light text-gray-900 mb-8">About us</h1>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
              eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

