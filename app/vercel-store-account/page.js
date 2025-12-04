"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Package, User, MapPin, Heart } from "lucide-react";
import Link from "next/link";

export default function Page() {
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
        <h1 className="text-4xl font-bold mb-8">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link href="/account/orders" className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <Package className="w-8 h-8 mb-4 text-blue-400" />
            <h2 className="text-lg font-semibold mb-2">My Orders</h2>
            <p className="text-sm text-gray-400">View order history and track shipments</p>
          </Link>

          <Link href="/account/profile" className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <User className="w-8 h-8 mb-4 text-blue-400" />
            <h2 className="text-lg font-semibold mb-2">Account Details</h2>
            <p className="text-sm text-gray-400">Manage your personal information</p>
          </Link>

          <Link href="/account/addresses" className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <MapPin className="w-8 h-8 mb-4 text-blue-400" />
            <h2 className="text-lg font-semibold mb-2">Addresses</h2>
            <p className="text-sm text-gray-400">Manage shipping addresses</p>
          </Link>

          <Link href="/account/wishlist" className="bg-gray-900 rounded-lg border border-gray-800 p-6 hover:border-gray-700 transition-colors">
            <Heart className="w-8 h-8 mb-4 text-blue-400" />
            <h2 className="text-lg font-semibold mb-2">Wishlist</h2>
            <p className="text-sm text-gray-400">View your saved items</p>
          </Link>
        </div>
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

