"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { XCircle, ShoppingBag, ArrowLeft } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    homeLink: "/blazity-home",
    cartLink: "/blazity-cart"
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
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      secondary: "border border-gray-300 text-gray-900 hover:bg-gray-50"
    },
    error: {
      icon: "bg-red-100",
      iconColor: "text-red-600"
    }
  },
  
  // Page Content
  page: {
    title: "Order Cancelled",
    description: "Your order was cancelled. No charges were made to your payment method."
  },
  
  // Action Buttons
  actions: {
    returnToCart: {
      text: "Return to Cart",
      icon: "ShoppingBag",
      link: "/blazity-cart",
      enabled: true
    },
    continueShopping: {
      text: "Continue Shopping",
      icon: "ArrowLeft",
      link: "/blazity-home",
      enabled: true
    }
  }
};

export default function Page() {
  const { brand, colors, page, actions } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} flex items-center justify-center`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className={`${colors.card} rounded-lg border ${colors.borders.default} p-12`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className={`w-20 h-20 ${colors.error.icon} rounded-full flex items-center justify-center mx-auto mb-6`}
          >
            <XCircle className={`w-12 h-12 ${colors.error.iconColor}`} />
          </motion.div>
          
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{page.title}</h1>
          <p className={`${colors.text.secondary} mb-8`}>{page.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions.returnToCart.enabled && (
              <Link
                href={actions.returnToCart.link}
                className={`inline-flex items-center justify-center gap-2 ${colors.buttons.primary} px-6 py-3 rounded-md font-semibold transition-colors`}
              >
                <ShoppingBag className="w-5 h-5" />
                {actions.returnToCart.text}
              </Link>
            )}
            {actions.continueShopping.enabled && (
              <Link
                href={actions.continueShopping.link}
                className={`inline-flex items-center justify-center gap-2 ${colors.buttons.secondary} px-6 py-3 rounded-md font-semibold transition-colors`}
              >
                <ArrowLeft className="w-5 h-5" />
                {actions.continueShopping.text}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
