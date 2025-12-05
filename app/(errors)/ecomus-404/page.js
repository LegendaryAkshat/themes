"use client";

import { motion } from "framer-motion";
import { Home, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-50 to-blue-50",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    buttons: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      outline: "border-2 border-gray-300 text-gray-900 hover:border-gray-400"
    }
  },
  
  // Error Content (Edit error message here!)
  error: {
    code: "404",
    title: "Page Not Found",
    description: "Oops! The page you're looking for doesn't exist. It might have been moved or deleted."
  },
  
  // Action Buttons
  actions: {
    goHome: {
      text: "Go Home",
      icon: "Home",
      link: "/",
      enabled: true
    },
    goBack: {
      text: "Go Back",
      icon: "ArrowLeft",
      enabled: true,
      action: "history.back"
    },
    search: {
      text: "Search",
      icon: "Search",
      enabled: true
    }
  }
};

export default function Page() {
  const { colors, error, actions } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} flex items-center justify-center`}>
      <div className="text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h1 className={`text-9xl font-bold ${colors.text.primary} mb-4`}>{error.code}</h1>
          <h2 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{error.title}</h2>
          <p className={`${colors.text.secondary} mb-8 max-w-md mx-auto`}>
            {error.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions.goHome.enabled && (
              <Link href={actions.goHome.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${colors.buttons.primary} px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2`}
                >
                  <Home className="w-5 h-5" />
                  {actions.goHome.text}
                </motion.button>
              </Link>
            )}
            {actions.goBack.enabled && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.history.back()}
                className={`${colors.buttons.secondary} px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2`}
              >
                <ArrowLeft className="w-5 h-5" />
                {actions.goBack.text}
              </motion.button>
            )}
            {actions.search.enabled && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${colors.buttons.outline} px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2`}
              >
                <Search className="w-5 h-5" />
                {actions.search.text}
              </motion.button>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
