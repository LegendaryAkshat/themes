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

      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-light text-gray-900 text-center">Login</h1>
          <div className="border border-gray-200 p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="••••••••"
              />
            </div>
            <button className="w-full bg-gray-900 text-white py-4 font-medium hover:bg-gray-800 transition-colors">
              Sign In
            </button>
            <div className="text-center text-sm text-gray-600">
              <p>
                Don't have an account?{" "}
                <Link href="/signup" className="text-gray-900 underline">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

