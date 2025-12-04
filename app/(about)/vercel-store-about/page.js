"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="md:hidden p-2 rounded-md hover:bg-gray-800">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-8 flex-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm"></div>
                </div>
                <span className="font-semibold text-lg">Acme Store</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm hover:text-gray-300 transition-colors">All</Link>
                <Link href="/search?category=shirts" className="text-sm hover:text-gray-300 transition-colors">Shirts</Link>
                <Link href="/search?category=stickers" className="text-sm hover:text-gray-300 transition-colors">Stickers</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold">About</h1>
          
          <div className="space-y-6 text-gray-300">
            <p>
              This website is built with{" "}
              <Link href="#" className="text-blue-400 hover:text-blue-300 underline">
                Next.js Commerce
              </Link>
              , which is a ecommerce template for creating a headless Shopify storefront.
            </p>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                Support for real-world commerce features including:
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Out of stock</li>
                <li>Order history</li>
                <li>Order status</li>
                <li>Cross variant / option availability (aka. Amazon style)</li>
                <li>
                  Hidden product{" "}
                  <Link href="#" className="text-blue-400 hover:text-blue-300 underline">
                    (example)
                  </Link>
                </li>
                <li>Dynamically driven content and features via Shopify (ie. collections, menus, pages, etc.)</li>
                <li>
                  Seamless and secure checkout via{" "}
                  <Link href="#" className="text-blue-400 hover:text-blue-300 underline">
                    Shopify Checkout
                  </Link>
                </li>
                <li>And more!</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-4">
                This template also allows us to highlight newer Next.js features including:
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Next.js App Router</li>
                <li>Optimized for SEO using Next.js' Metadata</li>
                <li>React Server Components (RSC) and Suspense</li>
                <li>Server Actions for mutations</li>
                <li>Edge runtime</li>
                <li>New Next.js 13 fetching and caching paradigm</li>
                <li>Dynamic OG image</li>
                <li>Styling with Tailwind CSS</li>
                <li>Automatic light/dark mode based on system setting</li>
                <li>And more!</li>
              </ul>
            </div>

            <p className="text-sm text-gray-400 pt-4">
              This document was last updated on July 18, 2023.
            </p>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm"></div>
                </div>
                <span className="font-semibold">Acme Store</span>
              </Link>
            </div>
            <nav>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/shipping-return" className="text-sm text-gray-400 hover:text-white transition-colors">Shipping & Return Policy</Link></li>
                <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </nav>
            <div className="text-sm text-gray-400">
              <p className="mb-2">© 2023-2025 ACME, Inc. All rights reserved.</p>
              <div className="space-y-1">
                <Link href="#" className="block hover:text-white transition-colors">View the source</Link>
                <Link href="#" className="block hover:text-white transition-colors">Created by ▲ Vercel</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

