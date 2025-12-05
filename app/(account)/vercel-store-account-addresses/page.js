"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Plus } from "lucide-react";
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
      secondary: "text-gray-300",
      link: "text-gray-400 hover:text-white"
    },
    borders: {
      default: "border-gray-800"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
      hover: "hover:bg-gray-800"
    },
    inputs: {
      background: "bg-gray-900",
      border: "border-gray-800",
      focus: "focus:ring-gray-700"
    },
    badges: {
      default: "bg-blue-600"
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
    title: "My Addresses"
  },
  
  // Addresses (Edit addresses here!)
  addresses: [
    { id: 1, name: "John Doe", street: "123 Main St", city: "New York", zip: "10001", isDefault: true },
    { id: 2, name: "John Doe", street: "456 Oak Ave", city: "Los Angeles", zip: "90001", isDefault: false }
  ],
  
  // Actions
  actions: {
    addButton: {
      text: "Add Address",
      icon: "Plus"
    }
  },
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      desktop: "md:grid-cols-2"
    },
    gap: "gap-6"
  },
  
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
  const { brand, colors, navigation, page, addresses, actions, grid, footer } = pageConfig;

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href={navigation.backLink.href} className={`${colors.text.secondary} hover:${colors.text.primary} mb-2 block transition-colors`}>
              {navigation.backLink.text}
            </Link>
            <h1 className={`text-4xl font-bold`}>{page.title}</h1>
          </div>
          <button className={`flex items-center gap-2 px-4 py-2 ${colors.buttons.primary} rounded-md transition-colors`}>
            <Plus className="w-5 h-5" />
            {actions.addButton.text}
          </button>
        </div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.desktop} ${grid.gap}`}>
          {addresses.map((address, index) => (
            <motion.div
              key={address.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card} rounded-lg ${colors.borders.default} p-6`}
            >
              {address.isDefault && (
                <span className={`inline-block mb-3 px-3 py-1 ${colors.badges.default} text-xs font-semibold rounded-md`}>
                  Default
                </span>
              )}
              <div className="space-y-2">
                <p className="font-semibold">{address.name}</p>
                <p className={`${colors.text.secondary} text-sm`}>{address.street}</p>
                <p className={`${colors.text.secondary} text-sm`}>{address.city}, {address.zip}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button className={`text-sm text-blue-400 hover:text-blue-300`}>Edit</button>
                <button className={`text-sm text-red-400 hover:text-red-300`}>Delete</button>
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
