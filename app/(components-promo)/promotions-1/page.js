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
      blue: "text-blue-600",
      blueLight: "text-blue-100"
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
      circle: "bg-white opacity-10",
      square: "bg-gray-200 opacity-10"
    }
  },
  
  // Promotions
  promotions: [
    {
      title: "UP TO 30% OFF",
      description: "Latest premium device features advanced chip technology with enhanced graphics performance powering all the newest features.",
      buttonText: "Purchase Now",
      type: "primary"
    },
    {
      title: "Workout At Home",
      discount: "Flat 20% off",
      buttonText: "Grab the deal",
      type: "secondary"
    },
    {
      title: "Up to 40% off",
      description: "Premium grade materials strike the perfect balance of everything you need.",
      buttonText: "Grab the deal",
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
                    <p className={`${colors.text.blueLight} mb-6 leading-relaxed`}>
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
                  <div className={`absolute right-0 top-0 w-32 h-32 ${colors.decorations.circle} rounded-full -mr-16 -mt-16`}></div>
                  <div className={`absolute bottom-0 right-0 w-48 h-48 ${colors.decorations.square} rounded-lg transform rotate-12 translate-x-12 translate-y-12`}></div>
                </>
              )}
              {promo.type === "secondary" && (
                <>
                  <div className="mb-4">
                    <h3 className={`text-2xl font-bold ${colors.text.primary} mb-2`}>{promo.title}</h3>
                    {promo.discount && (
                      <p className={`${colors.text.blue} font-semibold text-lg mb-4`}>{promo.discount}</p>
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
                  <div className="w-full h-48 bg-gray-200 rounded-lg"></div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
