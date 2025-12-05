"use client";

import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-gradient-to-r from-blue-50 to-indigo-50",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-700",
      active: "text-white",
      inactive: "text-gray-400"
    },
    borders: {
      default: "border-blue-100"
    },
    buttons: {
      active: "bg-blue-600 text-white shadow-lg",
      inactive: "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
    }
  },
  
  // Page Header
  header: {
    title: "Enhanced Breadcrumb",
    description: "A sophisticated breadcrumb navigation with icons and visual hierarchy"
  },
  
  // Breadcrumbs (Edit breadcrumb items here!)
  breadcrumbs: [
    { label: "Home", href: "#", icon: "Home", isActive: false },
    { label: "Products", href: "#", isActive: false },
    { label: "Technology", href: "#", isActive: false },
    { label: "Smartphones", href: "#", isActive: false },
    { label: "iPhone 15 Pro", href: "#", isActive: true }
  ]
};

export default function Page() {
  const { colors, header, breadcrumbs } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold ${colors.text.primary} mb-4`}>
            {header.title}
          </h1>
          <p className={`text-lg ${colors.text.secondary} max-w-2xl`}>
            {header.description}
          </p>
        </motion.div>

        <div className={`${colors.card} rounded-2xl shadow-lg border ${colors.borders.default} p-8 md:p-12`}>
          <nav className="flex items-center gap-2 flex-wrap">
            {breadcrumbs.map((crumb, index) => {
              const Icon = crumb.icon === "Home" ? Home : null;
              return (
                <div key={index} className="flex items-center gap-2">
                  <motion.a
                    href={crumb.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ y: -2 }}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                      crumb.isActive
                        ? `${colors.buttons.active} font-semibold`
                        : `${colors.buttons.inactive} font-medium`
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{crumb.label}</span>
                  </motion.a>
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className={`w-4 h-4 ${colors.text.inactive}`} />
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </main>
  );
}
