"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Clare",
    trademark: "®",
    trademarkColor: "text-orange-500"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-slate-800",
      secondary: "text-gray-700",
      placeholder: "text-gray-400"
    },
    borders: {
      search: "border-transparent",
      searchFocused: "border-orange-500"
    },
    buttons: {
      icon: "bg-gray-100 hover:bg-gray-200",
      category: "bg-gray-200 hover:bg-gray-300",
      badge: "bg-orange-500"
    }
  },
  
  // Search Configuration
  search: {
    placeholder: "Search your favorite product",
    categoryButton: "Select Category",
    enabled: true
  },
  
  // Header Actions
  actions: {
    user: { enabled: true, hasBadge: true },
    wishlist: { enabled: true, count: 0 },
    cart: { enabled: true, count: 0 },
    menu: { enabled: true, mobileOnly: true }
  }
};

export default function Page() {
  const [searchFocused, setSearchFocused] = useState(false);
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { brand, colors, search, actions } = pageConfig;

  useEffect(() => {
    if (!headerRef.current) return;
    const handleMouseMove = (e) => {
      const rect = headerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    headerRef.current.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (headerRef.current) {
        headerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  const backgroundX = useTransform(mouseX, [0, 1000], [-50, 50]);
  const backgroundY = useTransform(mouseY, [0, 600], [-50, 50]);

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-6 max-w-7xl mx-auto relative overflow-hidden"
      >
        <motion.div
          style={{ x: backgroundX, y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10"
        />

        <div className="relative z-10 flex items-center justify-between gap-6 flex-wrap">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center"
          >
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className={`text-3xl md:text-4xl font-bold ${colors.text.primary}`}
            >
              {brand.name}<sup className={brand.trademarkColor}>{brand.trademark}</sup>
            </motion.h1>
          </motion.div>

          {search.enabled && (
            <motion.div
              ref={searchRef}
              initial={{ width: 0, opacity: 0 }}
              animate={{ 
                width: searchFocused ? "100%" : "auto",
                opacity: 1 
              }}
              transition={{ duration: 0.3 }}
              className="flex-1 max-w-2xl mx-4"
            >
              <motion.div
                whileFocus={{ scale: 1.02 }}
                className={`relative flex items-center bg-gray-50 rounded-lg border-2 transition-all duration-300 ${
                  searchFocused ? `${colors.borders.searchFocused} bg-white shadow-lg` : colors.borders.search
                }`}
              >
                <Search className="w-5 h-5 text-gray-400 ml-4" />
                <input
                  type="text"
                  placeholder={search.placeholder}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 ${colors.buttons.category} rounded-r-lg font-medium ${colors.text.secondary} transition-colors`}
                >
                  {search.categoryButton}
                  <motion.span
                    animate={{ rotate: searchFocused ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block ml-2"
                  >
                    ↓
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}

          <div className="flex items-center gap-4">
            {actions.user.enabled && (
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 ${colors.buttons.icon} rounded-full transition-colors relative group`}
              >
                <User className={`w-5 h-5 ${colors.text.secondary}`} />
                {actions.user.hasBadge && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className={`absolute -top-1 -right-1 w-3 h-3 ${colors.buttons.badge} rounded-full`}
                  />
                )}
              </motion.a>
            )}

            {actions.wishlist.enabled && (
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 ${colors.buttons.icon} rounded-full transition-colors relative group`}
              >
                <Heart className={`w-5 h-5 ${colors.text.secondary}`} />
                {actions.wishlist.count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className={`absolute -top-1 -right-1 w-5 h-5 ${colors.buttons.badge} text-white text-xs rounded-full flex items-center justify-center font-bold`}
                  >
                    {actions.wishlist.count}
                  </motion.span>
                )}
              </motion.a>
            )}

            {actions.cart.enabled && (
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className={`p-3 ${colors.buttons.icon} rounded-full transition-colors relative group`}
              >
                <ShoppingCart className={`w-5 h-5 ${colors.text.secondary}`} />
                {actions.cart.count > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    className={`absolute -top-1 -right-1 w-5 h-5 ${colors.buttons.badge} text-white text-xs rounded-full flex items-center justify-center font-bold`}
                  >
                    {actions.cart.count}
                  </motion.span>
                )}
              </motion.a>
            )}

            {actions.menu.enabled && actions.menu.mobileOnly && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`md:hidden p-3 ${colors.buttons.icon} rounded-full transition-colors`}
              >
                <Menu className={`w-5 h-5 ${colors.text.secondary}`} />
              </motion.button>
            )}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
