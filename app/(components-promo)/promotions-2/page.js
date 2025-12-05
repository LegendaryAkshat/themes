"use client";

import { motion } from "framer-motion";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    text: {
      primary: "text-gray-900",
      white: "text-white",
      blue: {
        light: "text-blue-100",
        lighter: "text-blue-200"
      },
      purple: {
        light: "text-purple-100",
        lighter: "text-purple-200"
      }
    },
    cards: {
      blue: "bg-gradient-to-br from-blue-600 to-blue-800",
      purple: "bg-gradient-to-br from-purple-600 to-purple-800"
    },
    buttons: {
      primary: "bg-white text-blue-600 hover:bg-blue-50",
      secondary: "bg-white text-purple-600 hover:bg-purple-50"
    },
    badges: {
      blue: "text-blue-200 bg-white bg-opacity-20",
      purple: "text-purple-200 bg-white bg-opacity-20"
    },
    decorations: {
      white: "bg-white opacity-10",
      whiteLight: "bg-white opacity-5"
    }
  },
  
  // Promotions
  promotions: [
    {
      badge: "Limited Time Offer",
      title: "Smart Security Home Camera",
      savings: "Save up to $450",
      description: "Advanced security features with AI-powered motion detection and crystal-clear 4K video recording for complete home protection.",
      buttonText: "Shop Now",
      type: "blue"
    },
    {
      badge: "Special Deal",
      title: "Galaxy S24 Ultra 5G",
      savings: "Save up to $600",
      description: "Next-generation smartphone with cutting-edge technology, stunning display, and powerful performance for the ultimate mobile experience.",
      buttonText: "Shop Now",
      type: "purple"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: "md:grid-cols-2",
    gap: "gap-8"
  }
};

export default function Page() {
  const { colors, promotions, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-7xl mx-auto"
      >
        <div className={`grid ${grid.columns} ${grid.gap}`}>
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${promo.type === "blue" ? colors.cards.blue : colors.cards.purple} rounded-2xl shadow-2xl p-10 ${colors.text.white} relative overflow-hidden min-h-[400px] flex flex-col justify-between`}
            >
              <div className="relative z-10">
                <div className="mb-4">
                  <span className={`text-sm uppercase tracking-wider ${promo.type === "blue" ? colors.badges.blue : colors.badges.purple} px-3 py-1 rounded-full`}>
                    {promo.badge}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {promo.title}
                </h2>
                <p className={`${promo.type === "blue" ? colors.text.blue.light : colors.text.purple.light} text-xl mb-6 font-semibold`}>
                  {promo.savings}
                </p>
                <p className={`${promo.type === "blue" ? colors.text.blue.lighter : colors.text.purple.lighter} mb-8 leading-relaxed max-w-md`}>
                  {promo.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${promo.type === "blue" ? colors.buttons.primary : colors.buttons.secondary} px-8 py-3 rounded-lg font-semibold transition-colors`}
                >
                  {promo.buttonText}
                </motion.button>
              </div>
              <div className="relative z-10 mt-8">
                <div className="w-full h-56 bg-white bg-opacity-20 rounded-xl backdrop-blur-sm flex items-center justify-center">
                  <div className="w-48 h-48 bg-white bg-opacity-30 rounded-full"></div>
                </div>
              </div>
              <div className={`absolute bottom-0 right-0 w-64 h-64 ${colors.decorations.white} rounded-full -mr-32 -mb-32`}></div>
              <div className={`absolute top-0 left-0 w-48 h-48 ${colors.decorations.whiteLight} rounded-full -ml-24 -mt-24`}></div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
