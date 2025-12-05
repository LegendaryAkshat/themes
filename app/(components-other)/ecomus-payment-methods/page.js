"use client";

import { motion } from "framer-motion";
import { CreditCard, Plus, Trash2 } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      danger: "text-red-600 hover:bg-red-50"
    },
    icons: {
      card: "bg-blue-100 text-blue-600",
      default: "bg-blue-100 text-blue-600"
    },
    borders: {
      default: "ring-2 ring-blue-500"
    }
  },
  
  // Page Header
  header: {
    title: "Payment Methods"
  },
  
  // Payment Methods (Edit payment methods here!)
  paymentMethods: [
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
  ],
  
  // Actions
  actions: {
    addButton: {
      text: "Add New",
      icon: "Plus"
    }
  }
};

export default function Page() {
  const [paymentMethods, setPaymentMethods] = useState(pageConfig.paymentMethods);
  const { colors, header, paymentMethods: initialMethods, actions } = pageConfig;

  const removeMethod = (id) => {
    setPaymentMethods(paymentMethods.filter(m => m.id !== id));
  };

  const iconMap = {
    CreditCard,
    Plus,
    Trash2
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl font-bold ${colors.text.primary}`}
          >
            {header.title}
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${colors.buttons.primary} px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2`}
          >
            {(() => {
              const PlusIcon = iconMap[actions.addButton.icon];
              return <PlusIcon className="w-5 h-5" />;
            })()}
            {actions.addButton.text}
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
              className={`${colors.card} rounded-lg shadow-md p-6 ${
                method.isDefault ? colors.borders.default : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 ${colors.icons.card} rounded-lg`}>
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${colors.text.primary} mb-1`}>{method.type}</h3>
                    <p className={colors.text.secondary}>**** **** **** {method.last4}</p>
                    <p className={`text-sm ${colors.text.secondary}`}>Expires {method.expiry}</p>
                    {method.isDefault && (
                      <span className={`inline-block mt-2 ${colors.icons.default} px-3 py-1 rounded-full text-xs font-semibold`}>
                        Default
                      </span>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => removeMethod(method.id)}
                  className={`p-2 ${colors.buttons.danger} rounded-lg transition-colors`}
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
