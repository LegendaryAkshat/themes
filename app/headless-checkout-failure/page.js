"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, XCircle } from "lucide-react";
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

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <div className="flex justify-center">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <XCircle className="w-12 h-12 text-red-600" />
            </div>
          </div>
          <h1 className="text-4xl font-light text-gray-900">Payment Failed</h1>
          <p className="text-gray-600">
            Your payment could not be processed. Please try again or contact support if the problem persists.
          </p>
          <div className="pt-6 flex gap-4 justify-center">
            <Link
              href="/checkout"
              className="px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
            >
              Try Again
            </Link>
            <Link
              href="/cart"
              className="px-6 py-3 border border-gray-300 text-gray-900 font-medium hover:bg-gray-50 transition-colors"
            >
              Return to Cart
            </Link>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

