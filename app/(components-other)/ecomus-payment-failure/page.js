"use client";

import { motion } from "framer-motion";
import { XCircle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

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
      secondary: "text-gray-600",
      error: "text-red-800",
      errorLight: "text-red-700"
    },
    borders: {
      default: "border-red-200"
    },
    buttons: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      outline: "border-2 border-gray-300 text-gray-900 hover:border-gray-400"
    },
    error: {
      icon: "bg-red-100",
      iconColor: "text-red-600",
      card: "bg-red-50 border-red-200"
    }
  },
  
  // Page Content
  page: {
    title: "Payment Failed",
    description: "Unfortunately, your payment could not be processed. Please check your payment details and try again."
  },
  
  // Error Reasons (Edit reasons here!)
  reasons: {
    title: "Possible reasons:",
    items: [
      "Insufficient funds",
      "Incorrect card details",
      "Card expired or blocked",
      "Network error"
    ]
  },
  
  // Action Buttons
  actions: {
    tryAgain: {
      text: "Try Again",
      icon: "RefreshCw",
      link: "/ecomus-checkout",
      enabled: true
    },
    goHome: {
      text: "Back to Home",
      icon: "Home",
      link: "/",
      enabled: true
    }
  }
};

export default function Page() {
  const { colors, page, reasons, actions } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className={`${colors.card} rounded-2xl shadow-xl p-12 text-center`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className={`w-24 h-24 ${colors.error.icon} rounded-full flex items-center justify-center`}>
              <XCircle className={`w-16 h-16 ${colors.error.iconColor}`} />
            </div>
          </motion.div>

          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{page.title}</h1>
          <p className={`${colors.text.secondary} mb-8`}>
            {page.description}
          </p>

          <div className={`${colors.error.card} border ${colors.borders.default} rounded-lg p-6 mb-8`}>
            <p className={`${colors.text.error} font-semibold mb-2`}>{reasons.title}</p>
            <ul className="text-left space-y-1 text-sm">
              {reasons.items.map((reason, index) => (
                <li key={index} className={colors.text.errorLight}>• {reason}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions.tryAgain.enabled && (
              <Link href={actions.tryAgain.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center gap-2 ${colors.buttons.primary} px-6 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto`}
                >
                  <RefreshCw className="w-5 h-5" />
                  {actions.tryAgain.text}
                </motion.button>
              </Link>
            )}
            {actions.goHome.enabled && (
              <Link href={actions.goHome.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center gap-2 ${colors.buttons.outline} px-6 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto`}
                >
                  <Home className="w-5 h-5" />
                  {actions.goHome.text}
                </motion.button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
