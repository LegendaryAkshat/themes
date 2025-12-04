"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors"
            >
              <Search className="w-5 h-5" />
              Search Products
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

