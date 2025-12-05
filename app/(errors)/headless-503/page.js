"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Headless",
    homeLink: "/headless-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      icon: "hover:bg-gray-100",
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      secondary: "border border-gray-300 text-gray-900 hover:bg-gray-50"
    },
    error: {
      icon: "bg-yellow-100",
      iconColor: "text-yellow-600"
    }
  },
  
  // Header Actions
  header: {
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Error Content (Edit error message here!)
  error: {
    code: "503",
    title: "Service Unavailable",
    description: "We're currently performing maintenance. Please check back shortly. We apologize for any inconvenience."
  },
  
  // Action Buttons
  actions: {
    tryAgain: {
      text: "Try Again",
      icon: "RefreshCw",
      enabled: true,
      action: "reload"
    },
    goHome: {
      text: "Go Home",
      icon: "ArrowLeft",
      link: "/headless-home",
      enabled: true
    }
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, error, actions } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              {header.actions.search.enabled && (
                <button 
                  onClick={() => router.push(header.actions.search.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <Search className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className={`w-24 h-24 ${colors.error.icon} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <AlertTriangle className={`w-12 h-12 ${colors.error.iconColor}`} />
          </div>
          <h1 className={`text-6xl font-bold ${colors.text.primary} mb-4`}>{error.code}</h1>
          <h2 className={`text-2xl font-semibold ${colors.text.primary} mb-4`}>{error.title}</h2>
          <p className={`${colors.text.secondary} mb-8 max-w-md mx-auto`}>
            {error.description}
          </p>
          <div className="flex items-center justify-center gap-4">
            {actions.tryAgain.enabled && (
              <button
                onClick={() => window.location.reload()}
                className={`inline-flex items-center gap-2 px-6 py-3 ${colors.buttons.primary} font-medium rounded-md transition-colors`}
              >
                <RefreshCw className="w-4 h-4" />
                {actions.tryAgain.text}
              </button>
            )}
            {actions.goHome.enabled && (
              <Link
                href={actions.goHome.link}
                className={`inline-flex items-center gap-2 px-6 py-3 ${colors.buttons.secondary} font-medium rounded-md transition-colors`}
              >
                <ArrowLeft className="w-4 h-4" />
                {actions.goHome.text}
              </Link>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
