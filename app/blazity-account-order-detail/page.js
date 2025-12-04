"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Package, Truck } from "lucide-react";

export default function Page() {
  const order = {
    id: "12345",
    date: "January 10, 2025",
    status: "Delivered",
    total: "$428.76",
    items: [
      { name: "Product 1", price: "$99.00", quantity: 1, image: "👔" },
      { name: "Product 2", price: "$149.00", quantity: 2, image: "👕" },
    ],
    shipping: {
      address: "123 Main St, City, State 12345",
      method: "Standard Shipping",
      tracking: "1Z999AA10123456784"
    }
  };

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
        <Link href="/account/orders" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Orders
        </Link>

        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Order #{order.id}</h1>
              <p className="text-gray-600">Placed on {order.date}</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
              {order.status}
            </span>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-semibold text-gray-900">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <div className="flex justify-between text-lg font-bold text-gray-900">
              <span>Total</span>
              <span>{order.total}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Truck className="w-5 h-5" />
              Shipping Information
            </h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p>{order.shipping.address}</p>
              <p><strong>Method:</strong> {order.shipping.method}</p>
              <p><strong>Tracking:</strong> {order.shipping.tracking}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

