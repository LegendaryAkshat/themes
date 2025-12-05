"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CreditCard, Plus } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Planted",
    homeLink: "/catalyst-home"
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
      default: "border-gray-200"
    },
    buttons: {
      primary: "bg-gray-900 hover:bg-gray-800",
      secondary: "border-gray-300 hover:bg-gray-50",
      danger: "border-red-300 text-red-600 hover:bg-red-50"
    },
    badges: {
      default: "bg-gray-900 text-white"
    }
  },
  
  // Page Content
  page: {
    title: "Payment Methods"
  },
  
  // Payment Methods (Edit payment methods here!)
  paymentMethods: [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/25",
      isDefault: true
    }
  ],
  
  // Actions
  actions: {
    addButton: {
      text: "Add Payment Method",
      icon: "Plus"
    },
    editButton: {
      text: "Edit"
    },
    removeButton: {
      text: "Remove"
    }
  }
};

export default function Page() {
  const { brand, colors, page, paymentMethods, actions } = pageConfig;

  const iconMap = {
    CreditCard,
    Plus
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
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-3xl font-bold ${colors.text.primary}`}>{page.title}</h1>
          <button className={`flex items-center gap-2 ${colors.buttons.primary} text-white px-4 py-2 rounded-md font-semibold transition-colors`}>
            {(() => {
              const PlusIcon = iconMap[actions.addButton.icon];
              return <PlusIcon className="w-4 h-4" />;
            })()}
            {actions.addButton.text}
          </button>
        </div>

        <div className="space-y-4">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card} rounded-lg ${colors.borders.default} p-6`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <CreditCard className={`w-8 h-8 ${colors.text.secondary}`} />
                  <div>
                    <p className={`font-semibold ${colors.text.primary}`}>{method.type} •••• {method.last4}</p>
                    <p className={`text-sm ${colors.text.secondary}`}>Expires {method.expiry}</p>
                  </div>
                  {method.isDefault && (
                    <span className={`px-2 py-1 ${colors.badges.default} text-xs font-medium rounded`}>
                      Default
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <button className={`px-4 py-2 ${colors.buttons.secondary} rounded-md text-sm`}>
                    {actions.editButton.text}
                  </button>
                  <button className={`px-4 py-2 ${colors.buttons.danger} rounded-md text-sm`}>
                    {actions.removeButton.text}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
