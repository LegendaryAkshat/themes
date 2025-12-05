"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Acme",
    homeLink: "/blazity-home"
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
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800"
    }
  },
  
  // Header Configuration
  header: {
    logo: "Acme",
    logoLink: "/blazity-home",
    secureText: "Secure Checkout"
  },
  
  // Navigation
  navigation: {
    backToCart: {
      text: "Back to cart",
      link: "/blazity-cart"
    }
  },
  
  // Form Fields (Edit form fields here!)
  form: {
    contact: {
      title: "Contact Information",
      fields: [
        { name: "email", type: "email", placeholder: "Email", required: true }
      ]
    },
    shipping: {
      title: "Shipping Address",
      fields: [
        { name: "firstName", type: "text", placeholder: "First Name", required: true },
        { name: "lastName", type: "text", placeholder: "Last Name", required: true },
        { name: "address", type: "text", placeholder: "Address", required: true },
        { name: "city", type: "text", placeholder: "City", required: true },
        { name: "state", type: "text", placeholder: "State", required: true },
        { name: "zip", type: "text", placeholder: "ZIP", required: true }
      ]
    },
    payment: {
      title: "Payment Information",
      icon: "CreditCard",
      fields: [
        { name: "cardNumber", type: "text", placeholder: "Card Number", required: true },
        { name: "expiry", type: "text", placeholder: "MM/YY", required: true },
        { name: "cvv", type: "text", placeholder: "CVV", required: true }
      ]
    }
  },
  
  // Order Summary (Edit pricing here!)
  order: {
    subtotal: 397.00,
    shipping: 0,
    shippingText: "Free",
    tax: 31.76,
    taxRate: 0.08,
    buttonText: "Complete Order",
    successLink: "/blazity-checkout-success"
  }
};

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  const { brand, colors, header, navigation, form, order } = pageConfig;
  const orderTotal = order.subtotal + order.tax;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      {/* Header */}
      <header className={`border-b ${colors.borders.default} ${colors.card}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={header.logoLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {header.logo}
            </Link>
            <div className={`flex items-center gap-2 text-sm ${colors.text.secondary}`}>
              <Lock className="w-4 h-4" />
              {header.secureText}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href={navigation.backToCart.link} className={`inline-flex items-center gap-2 ${colors.text.secondary} hover:${colors.text.primary} mb-8`}>
          <ArrowLeft className="w-4 h-4" />
          {navigation.backToCart.text}
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            {/* Contact Information */}
            <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6 mb-6`}>
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>{form.contact.title}</h2>
              {form.contact.fields.map((field, index) => (
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={formData[field.name]}
                  onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                  className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                />
              ))}
            </div>

            {/* Shipping Address */}
            <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6 mb-6`}>
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>{form.shipping.title}</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                {form.shipping.fields.slice(0, 2).map((field, index) => (
                  <input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                    className={`px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                  />
                ))}
              </div>
              <input
                type="text"
                placeholder={form.shipping.fields[2].placeholder}
                value={formData[form.shipping.fields[2].name]}
                onChange={(e) => setFormData({...formData, [form.shipping.fields[2].name]: e.target.value})}
                className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-gray-900`}
              />
              <div className="grid grid-cols-3 gap-4">
                {form.shipping.fields.slice(3).map((field, index) => (
                  <input
                    key={index}
                    type={field.type}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                    className={`px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                  />
                ))}
              </div>
            </div>

            {/* Payment Information */}
            <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6`}>
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6 flex items-center gap-2`}>
                <CreditCard className="w-6 h-6" />
                {form.payment.title}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={form.payment.fields[0].placeholder}
                  value={formData[form.payment.fields[0].name]}
                  onChange={(e) => setFormData({...formData, [form.payment.fields[0].name]: e.target.value})}
                  className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                />
                <div className="grid grid-cols-2 gap-4">
                  {form.payment.fields.slice(1).map((field, index) => (
                    <input
                      key={index}
                      type="text"
                      placeholder={field.placeholder}
                      value={formData[field.name]}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      className={`px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className={`sticky top-24 ${colors.card} rounded-lg border ${colors.borders.default} p-6`}>
              <h2 className={`text-xl font-bold ${colors.text.primary} mb-6`}>Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className={`flex justify-between ${colors.text.secondary}`}>
                  <span>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className={`flex justify-between ${colors.text.secondary}`}>
                  <span>Shipping</span>
                  <span>{order.shippingText}</span>
                </div>
                <div className={`flex justify-between ${colors.text.secondary}`}>
                  <span>Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className={`border-t ${colors.borders.input} pt-4 flex justify-between text-lg font-bold ${colors.text.primary}`}>
                  <span>Total</span>
                  <span>${orderTotal.toFixed(2)}</span>
                </div>
              </div>
              <Link
                href={order.successLink}
                className={`block w-full ${colors.buttons.primary} text-center px-6 py-4 rounded-md font-semibold transition-colors`}
              >
                {order.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
