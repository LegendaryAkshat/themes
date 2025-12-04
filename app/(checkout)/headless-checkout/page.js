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
        <h1 className="text-4xl font-light text-gray-900 mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-light text-gray-900 mb-4">Shipping Information</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-light text-gray-900 mb-4">Payment Information</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
              </div>
            </section>
          </div>

          <div>
            <div className="border border-gray-200 p-6 sticky top-4">
              <h2 className="text-xl font-light text-gray-900 mb-4">Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span>$10,666.72</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span>$50.00</span>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>$10,716.72</span>
                  </div>
                </div>
              </div>
              <Link
                href="/checkout/success"
                className="block w-full bg-gray-900 text-white py-4 text-center font-medium hover:bg-gray-800 transition-colors"
              >
                Complete Order
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

