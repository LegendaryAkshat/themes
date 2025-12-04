"use client";

import { motion } from "framer-motion";
import { CheckCircle, Package, Home, Download } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white rounded-2xl shadow-xl p-12 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-16 h-16 text-green-600" />
            </div>
          </motion.div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your purchase. Your order has been confirmed and will be processed shortly.
          </p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Order Number</span>
              <span className="font-semibold text-gray-900">#12345</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600">Total Amount</span>
              <span className="font-semibold text-gray-900">$299.97</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Payment Method</span>
              <span className="font-semibold text-gray-900">Credit Card</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Invoice
            </motion.button>
            <Link href="/ecomus-account">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors w-full sm:w-auto"
              >
                <Package className="w-5 h-5" />
                View Orders
              </motion.button>
            </Link>
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors w-full sm:w-auto"
              >
                <Home className="w-5 h-5" />
                Continue Shopping
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

