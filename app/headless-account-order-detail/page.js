"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Package } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const order = {
    id: "12345",
    date: "March 15, 2024",
    status: "Delivered",
    items: [
      { name: "Black Jacket", quantity: 1, price: 8068.72 },
      { name: "Cozy coat", quantity: 1, price: 2598.00 },
    ],
    shipping: {
      address: "123 Main Street, New York, NY 10001",
      method: "Standard Shipping",
      tracking: "TRACK123456789"
    },
    subtotal: 10666.72,
    shippingCost: 50.00,
    tax: 853.34,
    total: 11570.06
  };

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
        <div className="mb-8">
          <Link href="/account/orders" className="text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to Orders
          </Link>
        </div>
        <h1 className="text-4xl font-light text-gray-900 mb-8">Order Details - #{order.id}</h1>

        <div className="border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-600">Order Date: {order.date}</p>
              <p className="text-gray-600">
                Status: <span className="text-green-600 font-light">{order.status}</span>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <h3 className="font-light text-gray-900 mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 pb-4 border-b border-gray-100">
                  <div className="w-20 h-20 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-light text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-light text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mb-6">
            <h3 className="font-light text-gray-900 mb-4">Shipping Information</h3>
            <div className="text-gray-600 space-y-1">
              <p>{order.shipping.address}</p>
              <p>Method: {order.shipping.method}</p>
              <p>Tracking: {order.shipping.tracking}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <div className="flex justify-end">
              <div className="w-64 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal:</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping:</span>
                  <span>${order.shippingCost.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax:</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xl font-light text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

