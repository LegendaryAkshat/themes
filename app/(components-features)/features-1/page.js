"use client";

import { motion } from "framer-motion";

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
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200"
    },
    icons: {
      background: "bg-blue-100"
    }
  },
  
  // Features (Edit features here!)
  features: [
    {
      title: "Free Shipping",
      description: "For all orders $200",
      icon: "🚚"
    },
    {
      title: "1 & 1 Returns",
      description: "Cancellation after 1 day",
      icon: "↩️"
    },
    {
      title: "100% Secure Payments",
      description: "Guarantee secure payments",
      icon: "🔒"
    },
    {
      title: "24/7 Dedicated Support",
      description: "Anywhere & anytime",
      icon: "💬"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-4"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const { colors, features, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${colors.card} border ${colors.borders.default} rounded-xl p-6 hover:shadow-lg transition-shadow text-center`}
            >
              <div className={`w-16 h-16 ${colors.icons.background} rounded-full flex items-center justify-center mx-auto mb-4 text-2xl`}>
                {feature.icon}
              </div>
              <h3 className={`text-lg font-semibold text-slate-800 mb-2`}>{feature.title}</h3>
              <p className={`${colors.text.secondary} text-sm`}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
