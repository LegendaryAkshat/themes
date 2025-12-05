"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { User, Package, MapPin, CreditCard, LogOut } from "lucide-react";

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
      secondary: "text-gray-700"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 hover:bg-gray-800",
      active: "bg-gray-900 text-white",
      inactive: "text-gray-700 hover:bg-gray-100",
      danger: "text-red-600 hover:bg-red-50",
      focus: "focus:ring-2 focus:ring-gray-900"
    }
  },
  
  // Page Content
  page: {
    title: "My Account"
  },
  
  // Navigation Menu (Edit navigation here!)
  navigation: [
    { label: "Account Details", icon: "User", link: "/blazity-account", active: true },
    { label: "Orders", icon: "Package", link: "/blazity-account-orders", active: false },
    { label: "Profile", icon: "CreditCard", link: "/blazity-account-profile", active: false },
    { label: "Addresses", icon: "MapPin", link: "/blazity-account-addresses", active: false }
  ],
  
  // Form Fields (Edit form fields here!)
  form: {
    title: "Account Details",
    fields: {
      firstName: { label: "First Name", defaultValue: "John" },
      lastName: { label: "Last Name", defaultValue: "Doe" },
      email: { label: "Email", defaultValue: "john.doe@example.com" },
      phone: { label: "Phone", defaultValue: "+1 (555) 123-4567" }
    },
    submitButton: {
      text: "Save Changes"
    }
  },
  
  // Sign Out Button
  signOut: {
    text: "Sign Out",
    icon: "LogOut",
    enabled: true
  }
};

export default function Page() {
  const { brand, colors, page, navigation, form, signOut } = pageConfig;

  const iconMap = {
    User,
    Package,
    MapPin,
    CreditCard,
    LogOut
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} ${colors.card}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`text-3xl font-bold ${colors.text.primary} mb-8`}>{page.title}</h1>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <nav className="space-y-2">
              {navigation.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <Link 
                    key={index}
                    href={item.link} 
                    className={`flex items-center gap-3 px-4 py-3 rounded-md ${item.active ? colors.buttons.active : colors.buttons.inactive}`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
              {signOut.enabled && (
                <button className={`flex items-center gap-3 px-4 py-3 rounded-md w-full text-left ${colors.buttons.danger}`}>
                  {(() => {
                    const Icon = iconMap[signOut.icon];
                    return <Icon className="w-5 h-5" />;
                  })()}
                  {signOut.text}
                </button>
              )}
            </nav>
          </div>

          <div className="md:col-span-3">
            <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6`}>
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>{form.title}</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                      {form.fields.firstName.label}
                    </label>
                    <input
                      type="text"
                      defaultValue={form.fields.firstName.defaultValue}
                      className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md ${colors.buttons.focus}`}
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                      {form.fields.lastName.label}
                    </label>
                    <input
                      type="text"
                      defaultValue={form.fields.lastName.defaultValue}
                      className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md ${colors.buttons.focus}`}
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                    {form.fields.email.label}
                  </label>
                  <input
                    type="email"
                    defaultValue={form.fields.email.defaultValue}
                    className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md ${colors.buttons.focus}`}
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                    {form.fields.phone.label}
                  </label>
                  <input
                    type="tel"
                    defaultValue={form.fields.phone.defaultValue}
                    className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md ${colors.buttons.focus}`}
                  />
                </div>
                <button
                  type="submit"
                  className={`${colors.buttons.primary} text-white px-6 py-3 rounded-md font-semibold transition-colors`}
                >
                  {form.submitButton.text}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
