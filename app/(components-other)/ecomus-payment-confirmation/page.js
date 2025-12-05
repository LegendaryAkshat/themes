"use client";

import { motion } from "framer-motion";
import { CheckCircle, Package, Home, Download } from "lucide-react";
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
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-300"
    },
    buttons: {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
      outline: "border-2 border-gray-300 text-gray-900 hover:border-gray-400"
    },
    success: {
      icon: "bg-green-100",
      iconColor: "text-green-600"
    }
  },
  
  // Page Content
  page: {
    title: "Payment Successful!",
    description: "Thank you for your purchase. Your order has been confirmed and will be processed shortly."
  },
  
  // Order Details (Edit order details here!)
  order: {
    orderNumber: "#12345",
    totalAmount: "$299.97",
    paymentMethod: "Credit Card"
  },
  
  // Action Buttons
  actions: {
    downloadInvoice: {
      text: "Download Invoice",
      icon: "Download",
      enabled: true
    },
    viewOrders: {
      text: "View Orders",
      icon: "Package",
      link: "/ecomus-account",
      enabled: true
    },
    continueShopping: {
      text: "Continue Shopping",
      icon: "Home",
      link: "/",
      enabled: true
    }
  }
};

export default function Page() {
  const { colors, page, order, actions } = pageConfig;

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
            <div className={`w-24 h-24 ${colors.success.icon} rounded-full flex items-center justify-center`}>
              <CheckCircle className={`w-16 h-16 ${colors.success.iconColor}`} />
            </div>
          </motion.div>

          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{page.title}</h1>
          <p className={`${colors.text.secondary} mb-8`}>
            {page.description}
          </p>

          <div className={`${colors.background} rounded-lg p-6 mb-8 text-left`}>
            <div className="flex items-center justify-between mb-4">
              <span className={colors.text.secondary}>Order Number</span>
              <span className={`font-semibold ${colors.text.primary}`}>{order.orderNumber}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className={colors.text.secondary}>Total Amount</span>
              <span className={`font-semibold ${colors.text.primary}`}>{order.totalAmount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className={colors.text.secondary}>Payment Method</span>
              <span className={`font-semibold ${colors.text.primary}`}>{order.paymentMethod}</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {actions.downloadInvoice.enabled && (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center gap-2 ${colors.buttons.primary} px-6 py-3 rounded-lg font-semibold transition-colors`}
              >
                <Download className="w-5 h-5" />
                {actions.downloadInvoice.text}
              </motion.button>
            )}
            {actions.viewOrders.enabled && (
              <Link href={actions.viewOrders.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center gap-2 ${colors.buttons.secondary} px-6 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto`}
                >
                  <Package className="w-5 h-5" />
                  {actions.viewOrders.text}
                </motion.button>
              </Link>
            )}
            {actions.continueShopping.enabled && (
              <Link href={actions.continueShopping.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center justify-center gap-2 ${colors.buttons.outline} px-6 py-3 rounded-lg font-semibold transition-colors w-full sm:w-auto`}
                >
                  <Home className="w-5 h-5" />
                  {actions.continueShopping.text}
                </motion.button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
