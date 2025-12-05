"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, RotateCw } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    homeLink: "/blazity-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      secondary: "border border-gray-300 text-gray-900 hover:bg-gray-50"
    }
  },
  
  // Error Content (Edit error message here!)
  error: {
    code: "500",
    title: "Server Error",
    description: "Something went wrong on our end. Please try again later or contact support if the problem persists."
  },
  
  // Action Buttons
  actions: {
    goHome: {
      text: "Go Home",
      icon: "Home",
      link: "/blazity-home",
      enabled: true
    },
    tryAgain: {
      text: "Try Again",
      icon: "RotateCw",
      enabled: true,
      action: "reload"
    }
  }
};

export default function Page() {
  const { brand, colors, error, actions } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} flex items-center justify-center`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className={`text-9xl font-bold ${colors.text.primary} mb-4`}>{error.code}</h1>
          <h2 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{error.title}</h2>
          <p className={`${colors.text.secondary} mb-8 max-w-md mx-auto`}>
            {error.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions.goHome.enabled && (
              <Link
                href={actions.goHome.link}
                className={`inline-flex items-center justify-center gap-2 ${colors.buttons.primary} px-6 py-3 rounded-md font-semibold transition-colors`}
              >
                <Home className="w-5 h-5" />
                {actions.goHome.text}
              </Link>
            )}
            {actions.tryAgain.enabled && (
              <button
                onClick={() => window.location.reload()}
                className={`inline-flex items-center justify-center gap-2 ${colors.buttons.secondary} px-6 py-3 rounded-md font-semibold transition-colors`}
              >
                <RotateCw className="w-5 h-5" />
                {actions.tryAgain.text}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
