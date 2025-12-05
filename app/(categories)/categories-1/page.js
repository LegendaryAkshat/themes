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
    badges: {
      blue: {
        background: "bg-blue-50",
        text: "text-blue-600"
      },
      purple: {
        background: "bg-purple-50",
        text: "text-purple-600"
      }
    },
    buttons: {
      blue: "bg-blue-600 hover:bg-blue-700",
      purple: "bg-purple-600 hover:bg-purple-700"
    },
    decorations: {
      blue: "bg-blue-100",
      purple: "bg-purple-100"
    }
  },
  
  // Featured Categories (Edit categories here!)
  categories: [
    {
      badge: "Featured Category",
      badgeColor: "blue",
      title: "Premium Device Pro & Pro Max",
      description: "Discover our premium device collection with cutting-edge features, advanced technology, and exceptional performance designed for professionals.",
      button: {
        text: "Explore Collection",
        color: "blue",
        link: "/category-premium-device"
      }
    },
    {
      badge: "Top Performance",
      badgeColor: "purple",
      title: "Professional Laptop M4",
      description: "14-core CPU with advanced performance and efficiency cores, delivering unparalleled speed and power for demanding workloads.",
      button: {
        text: "Shop Now",
        color: "purple",
        link: "/category-professional-laptop"
      }
    }
  ]
};

export default function Page() {
  const { colors, categories } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index === 0 ? 0.1 : 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`${colors.card} rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${colors.decorations[category.badgeColor]} rounded-full -mr-16 -mt-16 opacity-50`}></div>
              <div className="relative z-10">
                <div className="mb-4">
                  <span className={`text-sm uppercase tracking-wider ${colors.badges[category.badgeColor].text} ${colors.badges[category.badgeColor].background} px-3 py-1 rounded-full font-semibold`}>
                    {category.badge}
                  </span>
                </div>
                <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-4 group-hover:${colors.badges[category.badgeColor].text} transition-colors`}>
                  {category.title}
                </h2>
                <p className={`${colors.text.secondary} mb-6 leading-relaxed text-lg`}>
                  {category.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${colors.buttons[category.button.color]} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                >
                  {category.button.text}
                </motion.button>
              </div>
              <div className="mt-8 w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gray-400 rounded-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
