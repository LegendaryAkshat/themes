"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Package, ArrowRight } from "lucide-react";

export default function Page() {
  const orders = [
    { id: "12345", date: "Jan 10, 2025", total: "$428.76", status: "Delivered", items: 3 },
    { id: "12344", date: "Dec 28, 2024", total: "$259.99", status: "Shipped", items: 2 },
    { id: "12343", date: "Dec 15, 2024", total: "$149.00", status: "Delivered", items: 1 },
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Acme
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <nav className="space-y-2">
              <Link href="/account" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
                <Package className="w-5 h-5" />
                Account Details
              </Link>
              <Link href="/account/orders" className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-white rounded-md">
                <Package className="w-5 h-5" />
                Orders
              </Link>
            </nav>
          </div>

          {/* Orders List */}
          <div className="md:col-span-3 space-y-4">
            {orders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg border border-gray-200 p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600">Order #{order.id}</p>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">{order.total}</p>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                      order.status === "Delivered" ? "bg-green-100 text-green-800" :
                      order.status === "Shipped" ? "bg-blue-100 text-blue-800" :
                      "bg-gray-100 text-gray-800"
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-600">{order.items} item{order.items > 1 ? 's' : ''}</p>
                  <Link
                    href={`/account/orders/${order.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:underline"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

