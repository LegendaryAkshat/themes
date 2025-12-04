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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-light text-gray-900 mb-8">Terms of Use</h1>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>Last updated: January 1, 2024</p>
            <section>
              <h2 className="text-xl font-light text-gray-900 mb-3">1. Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-light text-gray-900 mb-3">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials on Headless's website for personal, 
                non-commercial transitory viewing only.
              </p>
            </section>
            <section>
              <h2 className="text-xl font-light text-gray-900 mb-3">3. Disclaimer</h2>
              <p>
                The materials on Headless's website are provided on an 'as is' basis. Headless makes no warranties, 
                expressed or implied, and hereby disclaims and negates all other warranties.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

