"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Home } from "lucide-react";
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
      secondary: "text-gray-600",
      light: "text-gray-300"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      icon: "hover:bg-gray-100",
      primary: "bg-gray-900 text-white hover:bg-gray-800"
    }
  },
  
  // Header Navigation
  header: {
    navigation: [
      { label: "About us", href: "/headless-about" },
      { label: "Spring", href: "/headless-spring" },
      { label: "FAQ", href: "/headless-faq" }
    ],
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Error Content (Edit error message here!)
  error: {
    code: "500",
    title: "Server Error",
    description: "Something went wrong on our end. Please try again later."
  },
  
  // Action Buttons
  actions: {
    goHome: {
      text: "Return Home",
      icon: "Home",
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
            <div className="flex items-center gap-8">
              {header.navigation.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className={`text-sm ${colors.text.secondary} hover:${colors.text.primary} transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
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

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="space-y-6"
        >
          <h1 className={`text-9xl font-light ${colors.text.light}`}>{error.code}</h1>
          <h2 className={`text-4xl font-light ${colors.text.primary}`}>{error.title}</h2>
          <p className={colors.text.secondary}>
            {error.description}
          </p>
          <div className="pt-6">
            {actions.goHome.enabled && (
              <Link
                href={actions.goHome.link}
                className={`inline-flex items-center gap-2 px-6 py-3 ${colors.buttons.primary} font-medium transition-colors`}
              >
                <Home className="w-5 h-5" />
                {actions.goHome.text}
              </Link>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
