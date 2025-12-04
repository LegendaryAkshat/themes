"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CreditCard, Plus } from "lucide-react";

export default function Page() {
  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/25",
      isDefault: true
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Planted
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Payment Methods</h1>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800">
            <Plus className="w-4 h-4" />
            Add Payment Method
          </button>
        </div>

        <div className="space-y-4">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CreditCard className="w-8 h-8 text-gray-600" />
                  <div>
                    <p className="font-semibold text-gray-900">{method.type} •••• {method.last4}</p>
                    <p className="text-sm text-gray-600">Expires {method.expiry}</p>
                  </div>
                  {method.isDefault && (
                    <span className="px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded">
                      Default
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                    Edit
                  </button>
                  <button className="px-4 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 text-sm">
                    Remove
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

