"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Package, User, MapPin } from "lucide-react";
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-light text-gray-900 mb-8">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/account/orders" className="border border-gray-200 p-6 hover:border-gray-900 transition-colors">
            <Package className="w-8 h-8 text-gray-700 mb-4" />
            <h2 className="text-lg font-light text-gray-900 mb-2">My Orders</h2>
            <p className="text-sm text-gray-600">View order history and track shipments</p>
          </Link>

          <Link href="/account" className="border border-gray-200 p-6 hover:border-gray-900 transition-colors">
            <User className="w-8 h-8 text-gray-700 mb-4" />
            <h2 className="text-lg font-light text-gray-900 mb-2">Account Details</h2>
            <p className="text-sm text-gray-600">Manage your personal information</p>
          </Link>

          <Link href="/account/addresses" className="border border-gray-200 p-6 hover:border-gray-900 transition-colors">
            <MapPin className="w-8 h-8 text-gray-700 mb-4" />
            <h2 className="text-lg font-light text-gray-900 mb-2">Addresses</h2>
            <p className="text-sm text-gray-600">Manage shipping addresses</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

