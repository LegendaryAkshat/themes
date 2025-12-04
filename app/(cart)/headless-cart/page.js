"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, X, Plus, Minus } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const cartItems = [
    { id: 1, name: "Black Jacket", price: 8068.72, quantity: 1 },
    { id: 2, name: "Cozy coat", price: 2598.00, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50.00;
  const total = subtotal + shipping;

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
        <h1 className="text-4xl font-light text-gray-900 mb-8">Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link href="/" className="text-gray-900 underline">Continue shopping</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-6 p-6 border border-gray-200"
                >
                  <div className="w-24 h-24 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-light text-gray-900 mb-2">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 border border-gray-300">
                      <button className="p-2 hover:bg-gray-100">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button className="p-2 hover:bg-gray-100">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-medium w-32 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button className="p-2 hover:bg-gray-100">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className="border border-gray-200 p-6 sticky top-4">
                <h2 className="text-xl font-light text-gray-900 mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className="block w-full bg-gray-900 text-white py-4 text-center font-medium hover:bg-gray-800 transition-colors"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

