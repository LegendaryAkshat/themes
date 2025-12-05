"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Search } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    homeLink: "/catalyst-home",
    searchLink: "/catalyst-search"
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
    code: "404",
    title: "Page Not Found",
    description: "Oops! The page you're looking for doesn't exist. It might have been moved or deleted."
  },
  
  // Action Buttons
  actions: {
    goHome: {
      text: "Go Home",
      icon: "Home",
      link: "/catalyst-home",
      enabled: true
    },
    search: {
      text: "Search Products",
      icon: "Search",
      link: "/catalyst-search",
      enabled: true
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
            {actions.search.enabled && (
              <Link
                href={actions.search.link}
                className={`inline-flex items-center justify-center gap-2 ${colors.buttons.secondary} px-6 py-3 rounded-md font-semibold transition-colors`}
              >
                <Search className="w-5 h-5" />
                {actions.search.text}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
