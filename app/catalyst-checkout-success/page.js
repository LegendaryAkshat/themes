"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ShoppingBag, Home } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg border border-gray-200 p-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-gray-600 mb-2">Thank you for your purchase.</p>
          <p className="text-gray-600 mb-8">We've sent a confirmation email with your order details.</p>

          <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Order Number</span>
              <span className="font-semibold text-gray-900">#12345</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Total</span>
              <span className="font-semibold text-gray-900">$284.99</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Delivery</span>
              <span className="font-semibold text-gray-900">3-5 business days</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/account/orders"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              View Orders
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors"
            >
              <Home className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

