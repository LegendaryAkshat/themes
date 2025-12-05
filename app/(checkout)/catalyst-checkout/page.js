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
    name: "Planted",
    homeLink: "/catalyst-home",
    cartLink: "/catalyst-cart",
    successLink: "/catalyst-checkout-success"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-700"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      focus: "focus:ring-2 focus:ring-gray-900"
    }
  },
  
  // Page Header
  page: {
    backText: "Back to cart",
    secureText: "Secure Checkout"
  },
  
  // Form Sections (Edit form fields here!)
  form: {
    contact: {
      title: "Contact Information",
      fields: {
        email: { placeholder: "Email" }
      }
    },
    shipping: {
      title: "Shipping Address",
      fields: {
        firstName: { placeholder: "First Name" },
        lastName: { placeholder: "Last Name" },
        address: { placeholder: "Address" },
        city: { placeholder: "City" },
        state: { placeholder: "State" },
        zip: { placeholder: "ZIP" }
      }
    },
    payment: {
      title: "Payment Information",
      icon: "CreditCard",
      fields: {
        cardNumber: { placeholder: "Card Number" },
        expiry: { placeholder: "MM/YY" },
        cvv: { placeholder: "CVV" }
      }
    }
  },
  
  // Order Summary (Edit order summary here!)
  order: {
    subtotal: 259.99,
    shipping: 0,
    shippingText: "Free",
    tax: 25.00,
    total: 284.99,
    buttonText: "Complete Order"
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
  const { brand, colors, page, form, order } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} ${colors.card}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className={`flex items-center gap-2 text-sm ${colors.text.secondary}`}>
              <Lock className="w-4 h-4" />
              {page.secureText}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href={brand.cartLink} className={`inline-flex items-center gap-2 ${colors.text.secondary} hover:${colors.text.primary} mb-8`}>
          <ArrowLeft className="w-4 h-4" />
          {page.backText}
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6 mb-6`}>
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>{form.contact.title}</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder={form.contact.fields.email.placeholder}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                />
              </div>
            </div>

            <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6 mb-6`}>
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>{form.shipping.title}</h2>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <input
                  type="text"
                  placeholder={form.shipping.fields.firstName.placeholder}
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                />
                <input
                  type="text"
                  placeholder={form.shipping.fields.lastName.placeholder}
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                />
              </div>
              <input
                type="text"
                placeholder={form.shipping.fields.address.placeholder}
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md mb-4 focus:outline-none ${colors.buttons.focus}`}
              />
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder={form.shipping.fields.city.placeholder}
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                />
                <input
                  type="text"
                  placeholder={form.shipping.fields.state.placeholder}
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                />
                <input
                  type="text"
                  placeholder={form.shipping.fields.zip.placeholder}
                  value={formData.zip}
                  onChange={(e) => setFormData({...formData, zip: e.target.value})}
                  className={`px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                />
              </div>
            </div>

            <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6`}>
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6 flex items-center gap-2`}>
                <CreditCard className="w-6 h-6" />
                {form.payment.title}
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={form.payment.fields.cardNumber.placeholder}
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({...formData, cardNumber: e.target.value})}
                  className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={form.payment.fields.expiry.placeholder}
                    value={formData.expiry}
                    onChange={(e) => setFormData({...formData, expiry: e.target.value})}
                    className={`px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                  />
                  <input
                    type="text"
                    placeholder={form.payment.fields.cvv.placeholder}
                    value={formData.cvv}
                    onChange={(e) => setFormData({...formData, cvv: e.target.value})}
                    className={`px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className={`sticky top-24 ${colors.card} rounded-lg border ${colors.borders.default} p-6`}>
              <h2 className={`text-xl font-bold ${colors.text.primary} mb-6`}>Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className={`flex justify-between ${colors.text.light}`}>
                  <span>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className={`flex justify-between ${colors.text.light}`}>
                  <span>Shipping</span>
                  <span>{order.shippingText}</span>
                </div>
                <div className={`flex justify-between ${colors.text.light}`}>
                  <span>Tax</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className={`border-t ${colors.borders.input} pt-4 flex justify-between text-lg font-bold ${colors.text.primary}`}>
                  <span>Total</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                href={brand.successLink}
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
