"use client";

import { motion } from "framer-motion";
import { Package, Truck, CheckCircle, Download } from "lucide-react";

export default function Page() {
  const order = {
    id: "#12345",
    date: "March 15, 2024",
    status: "Delivered",
    items: [
      { name: "Premium Product 1", quantity: 2, price: 99.99 },
      { name: "Premium Product 2", quantity: 1, price: 79.99 }
    ],
    shipping: {
      address: "123 Main Street, New York, NY 10001",
      method: "Standard Shipping",
      tracking: "TRACK123456789"
    },
    subtotal: 279.97,
    shippingCost: 10.00,
    tax: 22.40,
    total: 312.37
  };

  const steps = [
    { label: "Order Placed", date: "March 15, 2024", completed: true },
    { label: "Processing", date: "March 16, 2024", completed: true },
    { label: "Shipped", date: "March 17, 2024", completed: true },
    { label: "Delivered", date: "March 20, 2024", completed: true }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Order Details - {order.id}
        </motion.h1>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-gray-600">Order Date: {order.date}</p>
              <p className="text-gray-600">Status: <span className="text-green-600 font-semibold">{order.status}</span></p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Invoice
            </motion.button>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <div key={index} className="flex items-center gap-4 pb-4 border-b border-gray-100">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{item.name}</h4>
                    <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Shipping Information</h3>
            <div className="text-gray-600 space-y-1">
              <p>{order.shipping.address}</p>
              <p>Method: {order.shipping.method}</p>
              <p>Tracking: {order.shipping.tracking}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-6">
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
                <div className="flex justify-between text-xl font-bold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="font-semibold text-gray-900 mb-6">Order Timeline</h3>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.completed ? "bg-green-500" : "bg-gray-200"
                }`}>
                  {step.completed ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <div className="w-4 h-4 bg-gray-400 rounded-full" />
                  )}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{step.label}</p>
                  <p className="text-sm text-gray-600">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

