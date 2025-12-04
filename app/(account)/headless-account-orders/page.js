"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Package } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const orders = [
    { id: "12345", date: "March 15, 2024", status: "Delivered", total: "$10,716.72" },
    { id: "12344", date: "March 10, 2024", status: "Shipped", total: "$2,999.00" },
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/account" className="text-gray-600 hover:text-gray-900 transition-colors">
            ← Back to Account
          </Link>
        </div>
        <h1 className="text-4xl font-light text-gray-900 mb-8">My Orders</h1>

        <div className="space-y-4">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Package className="w-6 h-6 text-gray-700" />
                  <div>
                    <h3 className="font-light text-gray-900">Order #{order.id}</h3>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-light text-gray-900">{order.total}</p>
                  <p className={`text-sm ${
                    order.status === "Delivered" ? "text-green-600" :
                    order.status === "Shipped" ? "text-blue-600" :
                    "text-yellow-600"
                  }`}>
                    {order.status}
                  </p>
                </div>
                <Link
                  href={`/account/orders/${order.id}`}
                  className="px-4 py-2 border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

