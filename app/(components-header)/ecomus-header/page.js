"use client";

import { motion } from "framer-motion";
import { Search, User, Heart, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Ecomus",
    logo: {
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-600",
      letter: "E"
    }
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-700",
      link: "text-gray-700 hover:text-blue-600"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      icon: "hover:bg-gray-100",
      badge: "bg-red-500 text-white"
    }
  },
  
  // Navigation (Edit navigation links here!)
  navigation: [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Products", href: "#" },
    { name: "Pages", href: "#" },
    { name: "Blog", href: "#" }
  ],
  
  // Header Actions
  actions: {
    search: { enabled: true, placeholder: "Search products..." },
    account: { enabled: true },
    wishlist: { enabled: true, count: 3 },
    cart: { enabled: true, count: 0 },
    menu: { enabled: true, mobileOnly: true }
  },
  
  // Page Content
  page: {
    title: "Ecomus Header",
    description: "This is a demo of the Ecomus header component with navigation, search, and cart icons."
  }
};

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { brand, colors, navigation, actions, page } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${colors.background} border-b ${colors.borders.default} sticky top-0 z-50 shadow-sm`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className={`w-10 h-10 ${brand.logo.gradient} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold text-xl">{brand.logo.letter}</span>
              </div>
              <span className={`text-2xl font-bold ${colors.text.primary}`}>{brand.name}</span>
            </motion.div>

            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`${colors.text.link} font-medium transition-colors relative group`}
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              {actions.search.enabled && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}
                >
                  <Search className={`w-5 h-5 ${colors.text.secondary}`} />
                </motion.button>
              )}

              {actions.account.enabled && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}
                >
                  <User className={`w-5 h-5 ${colors.text.secondary}`} />
                </motion.button>
              )}

              {actions.wishlist.enabled && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}
                >
                  <Heart className={`w-5 h-5 ${colors.text.secondary}`} />
                  {actions.wishlist.count > 0 && (
                    <span className={`absolute top-1 right-1 w-5 h-5 ${colors.buttons.badge} text-xs rounded-full flex items-center justify-center font-semibold`}>
                      {actions.wishlist.count}
                    </span>
                  )}
                </motion.button>
              )}

              {actions.cart.enabled && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
                  {actions.cart.count > 0 && (
                    <span className={`absolute top-1 right-1 w-5 h-5 ${colors.buttons.badge} text-xs rounded-full flex items-center justify-center font-semibold`}>
                      {actions.cart.count}
                    </span>
                  )}
                </motion.button>
              )}

              {actions.menu.enabled && actions.menu.mobileOnly && (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`lg:hidden p-2 ${colors.buttons.icon} rounded-full transition-colors`}
                >
                  {isMenuOpen ? (
                    <X className={`w-5 h-5 ${colors.text.secondary}`} />
                  ) : (
                    <Menu className={`w-5 h-5 ${colors.text.secondary}`} />
                  )}
                </motion.button>
              )}
            </div>
          </div>

          {isSearchOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="pb-4"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={actions.search.placeholder}
                  className={`w-full pl-10 pr-4 py-3 border ${colors.borders.input} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                  autoFocus
                />
              </div>
            </motion.div>
          )}

          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t ${colors.borders.default} py-4`}
            >
              <nav className="flex flex-col gap-4">
                {navigation.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`${colors.text.link} font-medium transition-colors py-2`}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </div>
      </motion.header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{page.title}</h1>
          <p className={colors.text.secondary}>{page.description}</p>
        </div>
      </div>
    </main>
  );
}
