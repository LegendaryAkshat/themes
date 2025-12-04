"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { XCircle, ShoppingBag, ArrowLeft } from "lucide-react";

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
            className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <XCircle className="w-12 h-12 text-red-600" />
          </motion.div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Cancelled</h1>
          <p className="text-gray-600 mb-8">Your order was cancelled. No charges were made to your payment method.</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cart"
              className="inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              Return to Cart
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-900 px-6 py-3 rounded-md font-semibold hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

