"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-700"
    },
    borders: {
      default: "border-gray-200",
      hover: "border-blue-600"
    },
    buttons: {
      hover: "hover:bg-gray-100",
      category: {
        hover: "hover:border-blue-600 hover:bg-blue-50"
      }
    }
  },
  
  // Navigation Controls
  navigation: {
    prev: { enabled: true },
    next: { enabled: true }
  },
  
  // Categories (Edit categories here!)
  categories: [
    "Laptop & PC",
    "Watches",
    "Mobile & Tablet",
    "Health & Sport",
    "Home Appliance",
    "Games & Video",
    "Television"
  ]
};

export default function Page() {
  const { colors, navigation, categories } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            {navigation.prev.enabled && (
              <button className={`p-2 ${colors.buttons.hover} rounded-full transition-colors`}>
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </button>
            )}
            {navigation.next.enabled && (
              <button className={`p-2 ${colors.buttons.hover} rounded-full transition-colors`}>
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </button>
            )}
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href={`/category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={`flex-shrink-0 ${colors.card} border-2 ${colors.borders.default} rounded-lg px-6 py-3 ${colors.buttons.category.hover} transition-colors`}
              >
                <span className={`${colors.text.secondary} font-medium whitespace-nowrap`}>
                  {category}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
