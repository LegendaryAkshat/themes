"use client";

import { motion } from "framer-motion";
import { User, Package, MapPin, CreditCard, Heart, Settings } from "lucide-react";

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
    gradients: {
      avatar: "bg-gradient-to-br from-blue-500 to-purple-600",
      active: "bg-blue-50 text-blue-600",
      inactive: "text-gray-700 hover:bg-gray-100"
    },
    inputs: {
      border: "border-gray-300",
      focus: "focus:ring-blue-500"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700"
    }
  },
  
  // Page Content
  page: {
    title: "My Account"
  },
  
  // User Information
  user: {
    initials: "JD",
    name: "John Doe",
    email: "john.doe@example.com"
  },
  
  // Menu Items (Edit menu items here!)
  menuItems: [
    { icon: "User", label: "My Account", active: true, link: "/ecomus-account" },
    { icon: "Package", label: "My Orders", link: "/ecomus-my-orders" },
    { icon: "MapPin", label: "My Addresses", link: "/ecomus-my-addresses" },
    { icon: "CreditCard", label: "Payment Methods", link: "/ecomus-payment-methods" },
    { icon: "Heart", label: "Wishlist", link: "/ecomus-wishlist" },
    { icon: "Settings", label: "Account Settings", link: "/ecomus-account-settings" }
  ],
  
  // Account Information Form
  accountInfo: {
    title: "Account Information",
    fields: [
      { label: "First Name", type: "text", defaultValue: "John" },
      { label: "Last Name", type: "text", defaultValue: "Doe" },
      { label: "Email", type: "email", defaultValue: "john.doe@example.com" },
      { label: "Phone Number", type: "tel", defaultValue: "+1 (555) 123-4567" }
    ],
    submitButton: {
      text: "Save Changes"
    }
  },
  
  // Grid Configuration
  grid: {
    sidebar: "lg:col-span-1",
    content: "lg:col-span-3"
  }
};

export default function Page() {
  const { colors, page, user, menuItems, accountInfo, grid } = pageConfig;

  const iconMap = {
    User,
    Package,
    MapPin,
    CreditCard,
    Heart,
    Settings
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

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className={grid.sidebar}>
            <div className={`${colors.card} rounded-lg shadow-sm p-6`}>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 ${colors.gradients.avatar} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
                  {user.initials}
                </div>
                <div>
                  <h3 className={`font-semibold ${colors.text.primary}`}>{user.name}</h3>
                  <p className={`text-sm ${colors.text.secondary}`}>{user.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  return (
                    <motion.a
                      key={index}
                      href={item.link}
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                        item.active
                          ? colors.gradients.active
                          : colors.gradients.inactive
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </motion.a>
                  );
                })}
              </nav>
            </div>
          </div>

          <div className={grid.content}>
            <div className={`${colors.card} rounded-lg shadow-sm p-8`}>
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>
                {accountInfo.title}
              </h2>

              <div className="space-y-6">
                {accountInfo.fields.map((field, index) => (
                  <div key={index}>
                    <label className={`block text-sm font-semibold ${colors.text.secondary} mb-2`}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      defaultValue={field.defaultValue}
                      className={`w-full px-4 py-3 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                    />
                  </div>
                ))}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`${colors.buttons.primary} text-white px-8 py-3 rounded-lg font-semibold transition-colors`}
                >
                  {accountInfo.submitButton.text}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
