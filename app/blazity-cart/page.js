"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Trash2, ArrowLeft, Plus, Minus } from "lucide-react";

export default function Page() {
  const cartItems = [
    { id: 1, name: "Product 1", price: 99.00, quantity: 1, image: "👔" },
    { id: 2, name: "Product 2", price: 149.00, quantity: 2, image: "👕" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 10.00;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Acme
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-md relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gray-900 rounded-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 mb-4">Your cart is empty</p>
            <Link href="/" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800">
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-4 p-4 border border-gray-200 rounded-lg"
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-lg font-bold text-gray-900 mb-3">${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button className="p-1 hover:bg-gray-100">
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 min-w-[40px] text-center text-sm">{item.quantity}</span>
                        <button className="p-1 hover:bg-gray-100">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-md">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 p-6 border border-gray-200 rounded-lg bg-gray-50">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-300 pt-4 flex justify-between text-lg font-bold text-gray-900">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                {subtotal < 100 && (
                  <p className="text-sm text-gray-600 mb-4">
                    Add ${(100 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <Link
                  href="/checkout"
                  className="block w-full bg-gray-900 text-white text-center px-6 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

