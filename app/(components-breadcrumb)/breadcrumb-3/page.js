"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900",
    card: "bg-white/5 backdrop-blur-xl",
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      inactive: "text-gray-400",
      hover: "hover:text-white"
    },
    borders: {
      default: "border-white/10"
    }
  },
  
  // Page Header
  header: {
    title: "Minimal Breadcrumb",
    description: "A sleek, minimalist breadcrumb design with subtle separators"
  },
  
  // Breadcrumbs (Edit breadcrumb items here!)
  breadcrumbs: [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Collections", href: "#" },
    { label: "Summer 2024", href: "#", isActive: true }
  ]
};

export default function Page() {
  const { colors, header, breadcrumbs } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-4`}>
            {header.title}
          </h1>
          <p className={`text-lg ${colors.text.inactive} max-w-2xl`}>
            {header.description}
          </p>
        </motion.div>

        <div className={`${colors.card} rounded-2xl border ${colors.borders.default} p-8 md:p-12`}>
          <nav className="flex items-center gap-3 flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-3">
                {index === 0 ? (
                  <motion.a
                    href={crumb.href}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`flex items-center gap-2 ${colors.text.secondary} ${colors.text.hover} transition-colors`}
                  >
                    <Home className="w-4 h-4" />
                  </motion.a>
                ) : (
                  <>
                    <span className={colors.text.inactive}>/</span>
                    <motion.a
                      href={crumb.href}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`transition-colors ${
                        crumb.isActive
                          ? `${colors.text.primary} font-semibold`
                          : `${colors.text.inactive} ${colors.text.hover}`
                      }`}
                    >
                      {crumb.label}
                    </motion.a>
                  </>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}
