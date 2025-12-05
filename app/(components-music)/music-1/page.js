"use client";

import { motion } from "framer-motion";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    buttons: {
      primary: "bg-slate-800 hover:bg-slate-700"
    }
  },
  
  // Content (Edit content here!)
  content: {
    title: "Enhance Your Music Experience",
    description: "Professional Laptop M1 chip, 8/256GB",
    buttonText: "Check it Out!",
    buttonLink: "/product-detail"
  }
};

export default function Page() {
  const { colors, content } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className={`${colors.card} rounded-2xl shadow-lg overflow-hidden`}>
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
            <div className="space-y-6">
              <h2 className={`text-4xl md:text-5xl font-bold text-slate-800`}>
                {content.title}
              </h2>
              <p className={`text-lg ${colors.text.secondary} leading-relaxed`}>
                {content.description}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${colors.buttons.primary} text-white px-8 py-3 rounded-lg font-semibold transition-colors`}
              >
                {content.buttonText}
              </motion.button>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
