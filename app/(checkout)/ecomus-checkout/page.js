"use client";

import { motion } from "framer-motion";
import { CreditCard, Lock } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    homeLink: "/ecomus-home",
    successLink: "/ecomus-checkout-success"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-300",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
      focus: "focus:ring-2 focus:ring-blue-500"
    }
  },
  
  // Page Content
  page: {
    title: "Checkout"
  },
  
  // Form Sections (Edit form fields here!)
  form: {
    contact: {
      title: "Contact Information",
      fields: {
        email: { placeholder: "Email address" }
      }
    },
    shipping: {
      title: "Shipping Address",
      fields: {
        firstName: { placeholder: "First name" },
        lastName: { placeholder: "Last name" },
        address: { placeholder: "Address" },
        city: { placeholder: "City" },
        zipCode: { placeholder: "ZIP code" },
        country: { 
          placeholder: "Country",
          options: ["United States", "Canada", "United Kingdom", "Australia"]
        }
      }
    },
    payment: {
      title: "Payment Information",
      icon: "CreditCard",
      fields: {
        cardNumber: { placeholder: "Card number" },
        expiryDate: { placeholder: "MM/YY" },
        cvv: { placeholder: "CVV" }
      }
    }
  },
  
  // Order Summary (Edit order summary here!)
  order: {
    subtotal: 299.97,
    shipping: 10.00,
    total: 309.97,
    buttonText: "Complete Order",
    securityMessage: "Your payment information is secure and encrypted"
  }
};

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    zipCode: "",
    country: "United States",
    cardNumber: "",
    expiryDate: "",
    cvv: ""
  });
  const { brand, colors, page, form, order } = pageConfig;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          {page.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`${colors.card} rounded-lg shadow-sm p-6`}
            >
              <h2 className={`text-xl font-bold ${colors.text.primary} mb-6`}>
                {form.contact.title}
              </h2>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={form.contact.fields.email.placeholder}
                className={`w-full px-4 py-3 border ${colors.borders.input} rounded-lg ${colors.buttons.focus} mb-4`}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={`${colors.card} rounded-lg shadow-sm p-6`}
            >
              <h2 className={`text-xl font-bold ${colors.text.primary} mb-6`}>
                {form.shipping.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={form.shipping.fields.firstName.placeholder}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-lg ${colors.buttons.focus}`}
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={form.shipping.fields.lastName.placeholder}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-lg ${colors.buttons.focus}`}
                />
              </div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder={form.shipping.fields.address.placeholder}
                className={`w-full px-4 py-3 border ${colors.borders.input} rounded-lg ${colors.buttons.focus} mb-4`}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder={form.shipping.fields.city.placeholder}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-lg ${colors.buttons.focus}`}
                />
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder={form.shipping.fields.zipCode.placeholder}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-lg ${colors.buttons.focus}`}
                />
              </div>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className={`w-full px-4 py-3 border ${colors.borders.input} rounded-lg ${colors.buttons.focus}`}
              >
                {form.shipping.fields.country.options.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className={`${colors.card} rounded-lg shadow-sm p-6`}
            >
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className={`w-5 h-5 ${colors.text.secondary}`} />
                <h2 className={`text-xl font-bold ${colors.text.primary}`}>{form.payment.title}</h2>
              </div>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                placeholder={form.payment.fields.cardNumber.placeholder}
                className={`w-full px-4 py-3 border ${colors.borders.input} rounded-lg ${colors.buttons.focus} mb-4`}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  placeholder={form.payment.fields.expiryDate.placeholder}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-lg ${colors.buttons.focus}`}
                />
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  placeholder={form.payment.fields.cvv.placeholder}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-lg ${colors.buttons.focus}`}
                />
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`${colors.card} rounded-lg shadow-sm p-6 sticky top-8`}
            >
              <h2 className={`text-xl font-bold ${colors.text.primary} mb-6`}>
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className={`flex justify-between ${colors.text.secondary}`}>
                  <span>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className={`flex justify-between ${colors.text.secondary}`}>
                  <span>Shipping</span>
                  <span>${order.shipping.toFixed(2)}</span>
                </div>
                <div className={`border-t ${colors.borders.input} pt-4 flex justify-between text-lg font-bold ${colors.text.primary}`}>
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full ${colors.buttons.primary} text-white py-4 rounded-lg font-semibold text-lg transition-colors mb-4 flex items-center justify-center gap-2`}
              >
                <Lock className="w-5 h-5" />
                {order.buttonText}
              </motion.button>

              <p className={`text-xs ${colors.text.secondary} text-center`}>
                {order.securityMessage}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
