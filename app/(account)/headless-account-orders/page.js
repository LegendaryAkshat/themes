"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Package } from "lucide-react";
import Link from "next/link";

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
      link: "text-gray-600 hover:text-gray-900"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      hover: "hover:bg-gray-100"
    },
    status: {
      delivered: "text-green-600",
      shipped: "text-blue-600",
      processing: "text-yellow-600"
    }
  },
  
  // Navigation
  navigation: {
    links: [
      { label: "About us", href: "/about" },
      { label: "Spring", href: "/spring" },
      { label: "FAQ", href: "/faq" }
    ],
    backLink: {
      text: "← Back to Account",
      href: "/headless-account"
    }
  },
  
  // Page Content
  page: {
    title: "My Orders"
  },
  
  // Orders (Edit orders here!)
  orders: [
    { id: "12345", date: "March 15, 2024", status: "Delivered", total: "$10,716.72", link: "/headless-account-order-detail" },
    { id: "12344", date: "March 10, 2024", status: "Shipped", total: "$2,999.00", link: "/headless-account-order-detail" }
  ]
};

export default function Page() {
  const { brand, colors, navigation, page, orders } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {navigation.links.map((link, index) => (
                <Link key={index} href={link.href} className={`text-sm ${colors.text.link} transition-colors`}>
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href={brand.homeLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              <button className={`p-2 ${colors.buttons.hover} rounded-md transition-colors`}>
                <Search className={`w-5 h-5 ${colors.text.secondary}`} />
              </button>
              <button className={`p-2 ${colors.buttons.hover} rounded-md transition-colors`}>
                <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href={navigation.backLink.href} className={colors.text.link}>
            {navigation.backLink.text}
          </Link>
        </div>
        <h1 className={`text-4xl font-light ${colors.text.primary} mb-8`}>{page.title}</h1>

        <div className="space-y-4">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`border ${colors.borders.default} p-6`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Package className={`w-6 h-6 ${colors.text.secondary}`} />
                  <div>
                    <h3 className={`font-light ${colors.text.primary}`}>Order #{order.id}</h3>
                    <p className={`text-sm ${colors.text.secondary}`}>{order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-light ${colors.text.primary}`}>{order.total}</p>
                  <p className={`text-sm ${colors.status[order.status.toLowerCase()]}`}>
                    {order.status}
                  </p>
                </div>
                <Link
                  href={order.link}
                  className={`px-4 py-2 border ${colors.borders.default} ${colors.buttons.hover} transition-colors`}
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
