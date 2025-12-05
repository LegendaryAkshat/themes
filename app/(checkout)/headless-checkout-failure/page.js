"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, XCircle } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Headless",
    homeLink: "/headless-home",
    checkoutLink: "/headless-checkout",
    cartLink: "/headless-cart"
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
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      secondary: "border border-gray-300 text-gray-900 hover:bg-gray-50",
      icon: "hover:bg-gray-100"
    },
    error: {
      icon: "bg-red-100",
      iconColor: "text-red-600"
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
  
  // Page Content
  page: {
    title: "Payment Failed",
    description: "Your payment could not be processed. Please try again or contact support if the problem persists."
  },
  
  // Action Buttons
  actions: {
    tryAgain: {
      text: "Try Again",
      link: "/headless-checkout",
      enabled: true
    },
    returnToCart: {
      text: "Return to Cart",
      link: "/headless-cart",
      enabled: true
    }
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page, actions } = pageConfig;

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
          <div className="flex justify-center">
            <div className={`w-20 h-20 ${colors.error.icon} rounded-full flex items-center justify-center`}>
              <XCircle className={`w-12 h-12 ${colors.error.iconColor}`} />
            </div>
          </div>
          <h1 className={`text-4xl font-light ${colors.text.primary}`}>{page.title}</h1>
          <p className={colors.text.secondary}>
            {page.description}
          </p>
          <div className="pt-6 flex gap-4 justify-center">
            {actions.tryAgain.enabled && (
              <Link
                href={actions.tryAgain.link}
                className={`px-6 py-3 ${colors.buttons.primary} font-medium transition-colors`}
              >
                {actions.tryAgain.text}
              </Link>
            )}
            {actions.returnToCart.enabled && (
              <Link
                href={actions.returnToCart.link}
                className={`px-6 py-3 ${colors.buttons.secondary} font-medium transition-colors`}
              >
                {actions.returnToCart.text}
              </Link>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
