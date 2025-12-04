"use client";

import { motion } from "framer-motion";
import { Download, Printer } from "lucide-react";

export default function Page() {
  const invoice = {
    number: "INV-2024-001234",
    date: "March 15, 2024",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main Street, New York, NY 10001"
    },
    items: [
      { name: "Premium Product 1", quantity: 2, price: 99.99, total: 199.98 },
      { name: "Premium Product 2", quantity: 1, price: 79.99, total: 79.99 }
    ],
    subtotal: 279.97,
    shipping: 10.00,
    tax: 22.40,
    total: 312.37
  };

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-8"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Invoice</h1>
              <p className="text-gray-600">#{invoice.number}</p>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Download className="w-5 h-5 text-gray-700" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Printer className="w-5 h-5 text-gray-700" />
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Bill To:</h3>
              <p className="text-gray-600">{invoice.customer.name}</p>
              <p className="text-gray-600">{invoice.customer.email}</p>
              <p className="text-gray-600">{invoice.customer.address}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Invoice Details:</h3>
              <p className="text-gray-600">Date: {invoice.date}</p>
              <p className="text-gray-600">Status: <span className="text-green-600 font-semibold">Paid</span></p>
            </div>
          </div>

          <div className="border-t border-b border-gray-200 py-4 mb-6">
            <table className="w-full">
              <thead>
                <tr className="text-left text-gray-600">
                  <th className="pb-2">Item</th>
                  <th className="pb-2">Quantity</th>
                  <th className="pb-2 text-right">Price</th>
                  <th className="pb-2 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item, index) => (
                  <tr key={index} className="border-t border-gray-100">
                    <td className="py-3 text-gray-900">{item.name}</td>
                    <td className="py-3 text-gray-600">{item.quantity}</td>
                    <td className="py-3 text-gray-600 text-right">${item.price.toFixed(2)}</td>
                    <td className="py-3 text-gray-900 text-right font-semibold">${item.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal:</span>
                <span>${invoice.subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping:</span>
                <span>${invoice.shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax:</span>
                <span>${invoice.tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                <span>Total:</span>
                <span>${invoice.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

