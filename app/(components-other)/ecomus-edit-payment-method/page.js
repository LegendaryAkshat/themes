"use client";

import { motion } from "framer-motion";
import { CreditCard, Save } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: {
      container: "bg-white"
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    buttons: {
      save: "bg-blue-600 text-white hover:bg-blue-700",
      icon: "bg-blue-100"
    },
    borders: {
      input: "border border-gray-300 focus:ring-2 focus:ring-blue-500"
    }
  },
  
  // Page Header
  header: {
    title: "Edit Payment Method"
  },
  
  // Payment Method Info
  paymentMethod: {
    type: "Credit Card",
    description: "Update your payment information",
    icon: "CreditCard",
    iconColor: "text-blue-600"
  },
  
  // Form Fields
  form: {
    fields: [
      { name: "cardNumber", label: "Card Number", placeholder: "1234 5678 9012 3456", type: "text" },
      { name: "cardholderName", label: "Cardholder Name", placeholder: "John Doe", type: "text" },
      { name: "expiryDate", label: "Expiry Date", placeholder: "MM/YY", type: "text" },
      { name: "cvv", label: "CVV", placeholder: "123", type: "text" }
    ],
    checkbox: {
      label: "Set as default payment method",
      id: "default"
    }
  },
  
  // UI Text
  ui: {
    saveButton: "Save Payment Method"
  }
};

export default function Page() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardholderName: "",
    expiryDate: "",
    cvv: "",
    isDefault: false
  });
  const { colors, header, paymentMethod, form, ui } = pageConfig;
  const CreditCardIcon = CreditCard;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          {header.title}
        </motion.h1>

        <div className={`${colors.card.container} rounded-lg shadow-md p-8`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 ${colors.buttons.icon} rounded-lg`}>
              <CreditCardIcon className={`w-8 h-8 ${paymentMethod.iconColor}`} />
            </div>
            <div>
              <h3 className={`font-semibold ${colors.text.primary}`}>{paymentMethod.type}</h3>
              <p className={`text-sm ${colors.text.secondary}`}>{paymentMethod.description}</p>
            </div>
          </div>

          <form className="space-y-6">
            {form.fields.map((field) => (
              <div key={field.name}>
                <label className={`block text-sm font-semibold ${colors.text.secondary} mb-2`}>{field.label}</label>
                <input
                  type={field.type}
                  value={formData[field.name]}
                  onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                  placeholder={field.placeholder}
                  className={`w-full px-4 py-3 ${colors.borders.input} rounded-lg focus:outline-none`}
                  required
                />
              </div>
            ))}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id={form.checkbox.id}
                checked={formData.isDefault}
                onChange={(e) => setFormData({ ...formData, isDefault: e.target.checked })}
                className="w-4 h-4 rounded"
              />
              <label htmlFor={form.checkbox.id} className={`text-sm ${colors.text.secondary}`}>{form.checkbox.label}</label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full ${colors.buttons.save} py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
            >
              <Save className="w-5 h-5" />
              {ui.saveButton}
            </motion.button>
          </form>
        </div>
      </div>
    </main>
  );
}
