"use client";

import { motion } from "framer-motion";
import { CreditCard, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: "Credit Card",
      last4: "4242",
      expiry: "12/25",
      isDefault: true
    },
    {
      id: 2,
      type: "Credit Card",
      last4: "8888",
      expiry: "06/26",
      isDefault: false
    }
  ]);

  const removeMethod = (id) => {
    setPaymentMethods(paymentMethods.filter(m => m.id !== id));
  };

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900"
          >
            Payment Methods
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Add New
          </motion.button>
        </div>

        <div className="space-y-4">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-lg shadow-md p-6 ${
                method.isDefault ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <CreditCard className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{method.type}</h3>
                    <p className="text-gray-600">**** **** **** {method.last4}</p>
                    <p className="text-sm text-gray-500">Expires {method.expiry}</p>
                    {method.isDefault && (
                      <span className="inline-block mt-2 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                        Default
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => removeMethod(method.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

