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
      secondary: "text-gray-600",
      white: "text-white",
      blue: {
        light: "text-blue-100"
      },
      slate: "text-slate-800"
    },
    cards: {
      primary: "bg-gradient-to-br from-blue-600 to-blue-800",
      secondary: "bg-white"
    },
    buttons: {
      primary: "bg-white text-blue-600 hover:bg-blue-50",
      secondary: "bg-slate-800 text-white hover:bg-slate-700"
    },
    decorations: {
      white: "bg-white opacity-10"
    }
  },
  
  // Promotions
  promotions: [
    {
      title: "UP TO 30% OFF",
      description: "Latest premium device features advanced chip technology with enhanced graphics performance powering all the newest features.",
      buttonText: "Buy Now",
      type: "primary"
    },
    {
      title: "Workout At Home",
      discount: "Flat 20% off",
      buttonText: "Grab Now",
      type: "secondary"
    },
    {
      title: "Up to 40% off",
      description: "Premium grade materials strike the perfect balance of everything you need.",
      buttonText: "Buy Now",
      type: "secondary"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: "md:grid-cols-3",
    gap: "gap-6"
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
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className={`grid ${grid.columns} ${grid.gap}`}>
          {promotions.map((promo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              className={`${promo.type === "primary" ? colors.cards.primary : colors.cards.secondary} rounded-xl shadow-lg p-${promo.type === "primary" ? "8" : "6"} ${promo.type === "primary" ? colors.text.white : ""} ${promo.type === "secondary" ? "hover:shadow-xl" : ""} transition-shadow relative overflow-hidden`}
            >
              {promo.type === "primary" && (
                <>
                  <div className="relative z-10">
                    <h2 className={`text-4xl font-bold mb-4 ${colors.text.white}`}>{promo.title}</h2>
                    <p className={`${colors.text.blue.light} mb-6 leading-relaxed`}>
                      {promo.description}
                    </p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${colors.buttons.primary} px-6 py-3 rounded-lg font-semibold transition-colors`}
                    >
                      {promo.buttonText}
                    </motion.button>
                  </div>
                  <div className={`absolute right-0 top-0 w-48 h-48 ${colors.decorations.white} rounded-lg transform rotate-12 translate-x-12 -translate-y-12`}></div>
                </>
              )}
              {promo.type === "secondary" && (
                <>
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <div>
                    <h3 className={`text-2xl font-bold ${colors.text.slate} mb-2`}>{promo.title}</h3>
                    {promo.discount && (
                      <p className={`text-blue-600 font-semibold text-lg mb-4`}>{promo.discount}</p>
                    )}
                    {promo.description && (
                      <p className={`${colors.text.secondary} mb-4 leading-relaxed`}>
                        {promo.description}
                      </p>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${colors.buttons.secondary} px-6 py-2 rounded-lg font-medium transition-colors`}
                    >
                      {promo.buttonText}
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
