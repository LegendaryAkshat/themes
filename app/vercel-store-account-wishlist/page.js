"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Heart } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const wishlistItems = [
    { id: 1, name: "Acme Circles T-Shirt", price: "$20.00" },
    { id: 2, name: "Acme Hoodie", price: "$50.00" },
    { id: 3, name: "Acme Cup", price: "$15.00" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
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
            </div>
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input type="text" placeholder="Search for products..." className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/account" className="text-gray-400 hover:text-white transition-colors">
            ← Back to Account
          </Link>
        </div>
        <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-400" />
          Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="w-16 h-16 text-gray-700 mx-auto mb-4" />
            <p className="text-gray-400 text-lg mb-4">Your wishlist is empty</p>
            <Link href="/" className="text-blue-400 hover:text-blue-300 underline">
              Start shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlistItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/products/${item.name.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="aspect-square bg-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                      <div className="w-24 h-24 bg-gray-700 rounded"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <span className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-md">
                      {item.price}
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </main>

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

