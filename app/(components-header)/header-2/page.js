"use client";

import { motion } from "framer-motion";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Brand",
    suffix: "commerce",
    badge: "Demo",
    logo: {
      color: "bg-blue-600",
      icon: "bg-white"
    }
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-slate-800",
      light: "text-gray-500",
      link: "text-gray-700 hover:text-blue-600"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      icon: "hover:bg-gray-100",
      badge: "bg-green-500 text-white"
    }
  },
  
  // Navigation (Edit navigation links here!)
  navigation: [
    { label: "Popular", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Page", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Contact", href: "#" }
  ],
  
  // Header Actions
  actions: {
    search: { enabled: true, count: 0 },
    account: { enabled: true },
    wishlist: { enabled: true, count: 0 },
    cart: { enabled: true, count: 0 },
    menu: { enabled: true, mobileOnly: true }
  }
};

export default function Page() {
  const { brand, colors, navigation, actions } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <header className={`${colors.background} border-b ${colors.borders.default} py-4`}>
          <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${brand.logo.color} rounded-lg flex items-center justify-center`}>
                <div className={`w-6 h-6 ${brand.logo.icon} rounded`}></div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xl font-bold ${colors.text.secondary}`}>{brand.name}</span>
                <span className={`text-xl ${colors.text.light}`}>{brand.suffix}</span>
                <span className={`text-xs ${colors.buttons.badge} px-2 py-0.5 rounded`}>{brand.badge}</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item, index) => (
                <a key={index} href={item.href} className={`${colors.text.link} transition-colors`}>
                  {item.label}
                </a>
              ))}
            </nav>
            
            <div className="flex items-center gap-4">
              {actions.search.enabled && (
                <button className={`p-2 ${colors.buttons.icon} rounded-full transition-colors`}>
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                </button>
              )}
              {actions.account.enabled && (
                <button className={`p-2 ${colors.buttons.icon} rounded-full transition-colors`}>
                  <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
                </button>
              )}
              {actions.wishlist.enabled && (
                <button className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}>
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                  {actions.wishlist.count > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{actions.wishlist.count}</span>
                  )}
                </button>
              )}
              {actions.cart.enabled && (
                <button className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}>
                  <div className="w-5 h-5 bg-gray-400 rounded"></div>
                  {actions.cart.count > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{actions.cart.count}</span>
                  )}
                </button>
              )}
              {actions.menu.enabled && actions.menu.mobileOnly && (
                <button className={`p-2 ${colors.buttons.icon} rounded-full transition-colors md:hidden`}>
                  <div className="w-5 h-5 bg-gray-400 flex flex-col gap-1">
                    <div className="w-full h-0.5 bg-gray-600"></div>
                    <div className="w-full h-0.5 bg-gray-600"></div>
                    <div className="w-full h-0.5 bg-gray-600"></div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </header>
      </motion.section>
    </main>
  );
}
