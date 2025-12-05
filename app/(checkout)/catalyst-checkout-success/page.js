"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle, ShoppingBag, Home } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    homeLink: "/catalyst-home",
    ordersLink: "/catalyst-account-orders"
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
    success: {
      icon: "bg-green-100",
      iconColor: "text-green-600"
    }
  },
  
  // Page Content
  page: {
    title: "Order Confirmed!",
    message: "Thank you for your purchase.",
    emailMessage: "We've sent a confirmation email with your order details."
  },
  
  // Order Details (Edit order details here!)
  order: {
    orderNumber: "#12345",
    total: "$284.99",
    estimatedDelivery: "3-5 business days"
  },
  
  // Action Buttons
  actions: {
    viewOrders: {
      text: "View Orders",
      icon: "ShoppingBag",
      link: "/catalyst-account-orders",
      enabled: true
    },
    continueShopping: {
      text: "Continue Shopping",
      icon: "Home",
      link: "/catalyst-home",
      enabled: true
    }
  }
};

export default function Page() {
  const { brand, colors, page, order, actions } = pageConfig;

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
            className={`w-20 h-20 ${colors.success.icon} rounded-full flex items-center justify-center mx-auto mb-6`}
          >
            <CheckCircle className={`w-12 h-12 ${colors.success.iconColor}`} />
          </motion.div>
          
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{page.title}</h1>
          <p className={`${colors.text.secondary} mb-2`}>{page.message}</p>
          <p className={`${colors.text.secondary} mb-8`}>{page.emailMessage}</p>

          <div className={`${colors.background} rounded-lg p-6 mb-8 text-left`}>
            <div className="flex justify-between mb-2">
              <span className={colors.text.secondary}>Order Number</span>
              <span className={`font-semibold ${colors.text.primary}`}>{order.orderNumber}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className={colors.text.secondary}>Total</span>
              <span className={`font-semibold ${colors.text.primary}`}>{order.total}</span>
            </div>
            <div className="flex justify-between">
              <span className={colors.text.secondary}>Estimated Delivery</span>
              <span className={`font-semibold ${colors.text.primary}`}>{order.estimatedDelivery}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions.viewOrders.enabled && (
              <Link
                href={actions.viewOrders.link}
                className={`inline-flex items-center justify-center gap-2 ${colors.buttons.primary} px-6 py-3 rounded-md font-semibold transition-colors`}
              >
                <ShoppingBag className="w-5 h-5" />
                {actions.viewOrders.text}
              </Link>
            )}
            {actions.continueShopping.enabled && (
              <Link
                href={actions.continueShopping.link}
                className={`inline-flex items-center justify-center gap-2 ${colors.buttons.secondary} px-6 py-3 rounded-md font-semibold transition-colors`}
              >
                <Home className="w-5 h-5" />
                {actions.continueShopping.text}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
