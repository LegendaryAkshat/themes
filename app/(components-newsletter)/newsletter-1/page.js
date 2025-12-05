"use client";

import { motion } from "framer-motion";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-gradient-to-br from-blue-600 to-purple-600",
    text: {
      primary: "text-white",
      secondary: "text-blue-100",
      input: "text-gray-900"
    },
    buttons: {
      primary: "bg-white text-blue-600 hover:bg-blue-50"
    }
  },
  
  // Newsletter Content (Edit content here!)
  newsletter: {
    title: "Stay Updated",
    description: "Subscribe to our newsletter and get the latest updates, exclusive offers, and special deals delivered straight to your inbox.",
    placeholder: "Enter your email",
    buttonText: "Subscribe"
  },
  
  // Decorative Elements
  decorations: {
    enabled: true,
    circles: [
      { position: "top-0 right-0", size: "w-96 h-96", offset: "-mr-48 -mt-48" },
      { position: "bottom-0 left-0", size: "w-64 h-64", offset: "-ml-32 -mb-32" }
    ]
  }
};

export default function Page() {
  const { colors, newsletter, decorations } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.input}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className={`relative ${colors.card} rounded-2xl shadow-2xl overflow-hidden`}>
          {decorations.enabled && (
            <div className="absolute inset-0 opacity-10">
              {decorations.circles.map((circle, index) => (
                <div 
                  key={index}
                  className={`absolute ${circle.position} ${circle.size} bg-white rounded-full ${circle.offset}`}
                />
              ))}
            </div>
          )}
          
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20">
            <div className="max-w-md mx-auto text-center">
              <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-4`}>
                {newsletter.title}
              </h2>
              <p className={`${colors.text.secondary} mb-8 leading-relaxed`}>
                {newsletter.description}
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder={newsletter.placeholder}
                  className={`flex-1 px-4 py-3 rounded-lg ${colors.text.input} focus:outline-none focus:ring-2 focus:ring-white`}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className={`${colors.buttons.primary} px-8 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap`}
                >
                  {newsletter.buttonText}
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
