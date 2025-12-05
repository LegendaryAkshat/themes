"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Plus } from "lucide-react";
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
      primary: "bg-gray-900 hover:bg-gray-800",
      hover: "hover:bg-gray-100"
    },
    badges: {
      default: "bg-gray-900 text-white"
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
  }
};

export default function Page() {
  const { brand, colors, navigation, page, addresses, actions, grid } = pageConfig;

  const iconMap = {
    Search,
    ShoppingBag,
    Plus
  };

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link href={navigation.backLink.href} className={`${colors.text.link} mb-2 block`}>
              {navigation.backLink.text}
            </Link>
            <h1 className={`text-4xl font-light ${colors.text.primary}`}>{page.title}</h1>
          </div>
          <button className={`flex items-center gap-2 px-4 py-2 ${colors.buttons.primary} text-white transition-colors`}>
            {(() => {
              const PlusIcon = iconMap[actions.addButton.icon];
              return <PlusIcon className="w-5 h-5" />;
            })()}
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
              className={`border ${colors.borders.default} p-6`}
            >
              {address.isDefault && (
                <span className={`inline-block mb-3 px-3 py-1 ${colors.badges.default} text-xs font-medium`}>
                  Default
                </span>
              )}
              <div className="space-y-2">
                <p className={`font-light ${colors.text.primary}`}>{address.name}</p>
                <p className={`text-sm ${colors.text.secondary}`}>{address.street}</p>
                <p className={`text-sm ${colors.text.secondary}`}>{address.city}, {address.zip}</p>
              </div>
              <div className="mt-4 flex gap-2">
                <button className={`text-sm ${colors.text.secondary} hover:${colors.text.primary} underline`}>Edit</button>
                <button className={`text-sm text-red-600 hover:text-red-700 underline`}>Delete</button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
