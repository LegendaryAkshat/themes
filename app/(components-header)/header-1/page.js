"use client";

import { motion } from "framer-motion";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "NextMerce",
    logo: "N",
    logoColor: "bg-blue-600"
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
      primary: "bg-blue-600 hover:bg-blue-700",
      secondary: "bg-gray-100 hover:bg-gray-200"
    }
  },
  
  // Search Bar Configuration
  search: {
    enabled: true,
    placeholder: "I am shopping for...",
    categoryButton: {
      text: "All Categories",
      enabled: true
    }
  },
  
  // Navigation Links
  navigation: [
    { label: "Popular", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Contact", href: "#" },
    { label: "Pages", href: "#", hasDropdown: true },
    { label: "Blogs", href: "#", hasDropdown: true }
  ],
  
  // Header Actions
  actions: {
    cart: {
      enabled: true,
      count: 0,
      href: "#"
    },
    wishlist: {
      enabled: true,
      count: 0,
      href: "#"
    },
    account: {
      enabled: true,
      text: "Sign In / Register",
      href: "#"
    }
  }
};

export default function Page() {
  const { brand, colors, search, navigation, actions } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <header className={`${colors.background} border-b ${colors.borders.default} py-4`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 ${brand.logoColor} rounded-full flex items-center justify-center`}>
                  <span className="text-white font-bold text-lg">{brand.logo}</span>
                </div>
                <span className={`text-xl font-bold ${colors.text.primary}`}>{brand.name}</span>
              </div>
              
              {search.enabled && (
                <div className="flex-1 max-w-2xl mx-8">
                  <form className="flex">
                    {search.categoryButton.enabled && (
                      <button className={`flex items-center gap-2 px-4 py-3 ${colors.buttons.secondary} rounded-l-lg border-r ${colors.borders.input} transition-colors`}>
                        <div className="w-5 h-5 bg-gray-400 flex flex-col gap-0.5">
                          <div className="w-full h-0.5 bg-gray-600"></div>
                          <div className="w-full h-0.5 bg-gray-600"></div>
                          <div className="w-full h-0.5 bg-gray-600"></div>
                        </div>
                        <span className={`text-sm font-medium ${colors.text.secondary}`}>{search.categoryButton.text}</span>
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </button>
                    )}
                    <input
                      type="text"
                      placeholder={search.placeholder}
                      className={`flex-1 px-4 py-3 border ${colors.borders.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    />
                    <button className={`px-6 py-3 ${colors.buttons.primary} text-white rounded-r-lg transition-colors`}>
                      <div className="w-5 h-5 bg-white rounded"></div>
                    </button>
                  </form>
                </div>
              )}
              
              <div className="flex items-center gap-4">
                {actions.cart.enabled && (
                  <a href={actions.cart.href} className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                    {actions.cart.count > 0 && (
                      <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{actions.cart.count}</span>
                    )}
                  </a>
                )}
                {actions.wishlist.enabled && (
                  <a href={actions.wishlist.href} className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <div className="w-6 h-6 bg-gray-400 rounded"></div>
                    {actions.wishlist.count > 0 && (
                      <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{actions.wishlist.count}</span>
                    )}
                  </a>
                )}
                {actions.account.enabled && (
                  <a href={actions.account.href} className={`text-sm ${colors.text.link} transition-colors`}>
                    {actions.account.text}
                  </a>
                )}
              </div>
            </div>
            
            <nav className="flex items-center gap-6">
              {navigation.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  className={`${colors.text.link} transition-colors flex items-center gap-1`}
                >
                  {item.label}
                  {item.hasDropdown && <div className="w-3 h-3 bg-gray-400 rounded"></div>}
                </a>
              ))}
            </nav>
          </div>
        </header>
      </motion.section>
    </main>
  );
}
