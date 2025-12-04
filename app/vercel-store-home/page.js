"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const products = [
    { id: 1, name: "Acme Circles T-Shirt", price: "$20.00", image: "t-shirt" },
    { id: 2, name: "Acme Drawstring Bag", price: "$12.00", image: "bag" },
    { id: 3, name: "Acme Cup", price: "$15.00", image: "cup" },
    { id: 4, name: "Acme Mug", price: "$15.00", image: "mug" },
    { id: 5, name: "Acme Hoodie", price: "$50.00", image: "hoodie" },
    { id: 6, name: "Acme Baby Onesie", price: "$10.00", image: "onesie" },
    { id: 7, name: "Acme Baby Cap", price: "$10.00", image: "cap" },
    { id: 8, name: "Acme Mug", price: "$15.00", image: "mug" },
    { id: 9, name: "Acme Hoodie", price: "$50.00", image: "hoodie" },
    { id: 10, name: "Acme Baby Onesie", price: "$10.00", image: "onesie" },
    { id: 11, name: "Acme Baby Cap", price: "$10.00", image: "cap" },
    { id: 12, name: "Acme Mug", price: "$15.00", image: "mug" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button className="md:hidden p-2 rounded-md hover:bg-gray-800">
              <Menu className="w-6 h-6" />
            </button>

            {/* Logo and Navigation */}
            <div className="flex items-center gap-8 flex-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm"></div>
                </div>
                <span className="font-semibold text-lg">Acme Store</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm hover:text-gray-300 transition-colors">
                  All
                </Link>
                <Link href="/search?category=shirts" className="text-sm hover:text-gray-300 transition-colors">
                  Shirts
                </Link>
                <Link href="/search?category=stickers" className="text-sm hover:text-gray-300 transition-colors">
                  Stickers
                </Link>
              </div>
            </div>

            {/* Search */}
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

            {/* Cart */}
            <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="aspect-square bg-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                  <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-700 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <span className="text-sm font-semibold bg-blue-600 px-3 py-1 rounded-md">
                    {product.price}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
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

