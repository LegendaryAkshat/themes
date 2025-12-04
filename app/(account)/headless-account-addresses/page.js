"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Plus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const addresses = [
    { id: 1, name: "John Doe", street: "123 Main St", city: "New York", zip: "10001", isDefault: true },
    { id: 2, name: "John Doe", street: "456 Oak Ave", city: "Los Angeles", zip: "90001", isDefault: false },
  ];

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
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href="/account" className="text-gray-600 hover:text-gray-900 transition-colors mb-2 block">
              ← Back to Account
            </Link>
            <h1 className="text-4xl font-light text-gray-900">My Addresses</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
            <Plus className="w-5 h-5" />
            Add Address
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((address, index) => (
            <motion.div
              key={address.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 p-6"
            >
              {address.isDefault && (
                <span className="inline-block mb-3 px-3 py-1 bg-gray-900 text-white text-xs font-medium">
                  Default
                </span>
              )}
              <div className="space-y-2">
                <p className="font-light text-gray-900">{address.name}</p>
                <p className="text-sm text-gray-600">{address.street}</p>
                <p className="text-sm text-gray-600">{address.city}, {address.zip}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button className="text-sm text-gray-700 hover:text-gray-900 underline">Edit</button>
                <button className="text-sm text-red-600 hover:text-red-700 underline">Delete</button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

