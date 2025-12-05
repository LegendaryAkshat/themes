"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Package } from "lucide-react";
import Link from "next/link";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Acme Store",
    homeLink: "/vercel-store-home",
    logo: {
      background: "bg-white",
      inner: "bg-black"
    }
  },
  
  // Colors & Theme
  colors: {
    background: "bg-black",
    card: "bg-gray-900",
    text: {
      primary: "text-white",
      secondary: "text-gray-400",
      link: "text-gray-400 hover:text-white"
    },
    borders: {
      default: "border-gray-800"
    },
    buttons: {
      hover: "hover:bg-gray-800"
    },
    inputs: {
      background: "bg-gray-900",
      border: "border-gray-800",
      focus: "focus:ring-gray-700"
    },
    status: {
      delivered: "text-green-400",
      shipped: "text-blue-400",
      processing: "text-yellow-400"
    }
  },
  
  // Navigation
  navigation: {
    backLink: {
      text: "← Back to Account",
      href: "/vercel-store-account"
    },
    searchPlaceholder: "Search for products..."
  },
  
  // Page Content
  page: {
    title: "My Orders"
  },
  
  // Orders (Edit orders here!)
  orders: [
    { id: "12345", date: "March 15, 2024", status: "Delivered", total: "$57.00", link: "/vercel-store-account-order-detail" },
    { id: "12344", date: "March 10, 2024", status: "Shipped", total: "$35.00", link: "/vercel-store-account-order-detail" },
    { id: "12343", date: "March 5, 2024", status: "Processing", total: "$20.00", link: "/vercel-store-account-order-detail" }
  ],
  
  // Footer
  footer: {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Shipping & Return Policy", href: "/shipping-return" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "FAQ", href: "/faq" }
    ],
    copyright: "© 2023-2025 ACME, Inc. All rights reserved.",
    credits: [
      { label: "View the source", href: "#" },
      { label: "Created by ▲ Vercel", href: "#" }
    ]
  }
};

export default function Page() {
  const { brand, colors, navigation, page, orders, footer } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background} ${colors.text.primary}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className={`md:hidden p-2 rounded-md ${colors.buttons.hover}`}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-8 flex-1">
              <Link href={brand.homeLink} className="flex items-center gap-2">
                <div className={`w-8 h-8 ${brand.logo.background} rounded flex items-center justify-center`}>
                  <div className={`w-4 h-4 ${brand.logo.inner} rounded-sm`}></div>
                </div>
                <span className="font-semibold text-lg">{brand.name}</span>
              </Link>
            </div>
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input type="text" placeholder={navigation.searchPlaceholder} className={`w-full ${colors.inputs.background} ${colors.inputs.border} rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 ${colors.inputs.focus}`} />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className={`p-2 rounded-md ${colors.buttons.hover} transition-colors`}>
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Link href={navigation.backLink.href} className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
            {navigation.backLink.text}
          </Link>
        </div>
        <h1 className={`text-4xl font-bold mb-8`}>{page.title}</h1>

        <div className="space-y-4">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card} rounded-lg ${colors.borders.default} p-6`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Package className="w-6 h-6 text-blue-400" />
                  <div>
                    <h3 className="font-semibold">Order #{order.id}</h3>
                    <p className={`text-sm ${colors.text.secondary}`}>{order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{order.total}</p>
                  <p className={`text-sm ${colors.status[order.status.toLowerCase()]}`}>
                    {order.status}
                  </p>
                </div>
                <Link
                  href={order.link}
                  className={`px-4 py-2 border ${colors.borders.default} hover:border-gray-600 rounded-md transition-colors`}
                >
                  View Details
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className={`border-t ${colors.borders.default} mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href={brand.homeLink} className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 ${brand.logo.background} rounded flex items-center justify-center`}>
                  <div className={`w-4 h-4 ${brand.logo.inner} rounded-sm`}></div>
                </div>
                <span className="font-semibold">{brand.name}</span>
              </Link>
            </div>
            <nav>
              <ul className="space-y-2">
                {footer.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={`text-sm ${colors.text.link} transition-colors`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={`text-sm ${colors.text.secondary}`}>
              <p className="mb-2">{footer.copyright}</p>
              <div className="space-y-1">
                {footer.credits.map((credit, index) => (
                  <Link key={index} href={credit.href} className={`block ${colors.text.link} transition-colors`}>
                    {credit.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
