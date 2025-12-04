"use client";

import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";

export default function Page() {
  const breadcrumbs = [
    { label: "Home", href: "#", icon: Home },
    { label: "Products", href: "#" },
    { label: "Technology", href: "#" },
    { label: "Smartphones", href: "#" },
    { label: "iPhone 15 Pro", href: "#", isActive: true }
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enhanced Breadcrumb
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A sophisticated breadcrumb navigation with icons and visual hierarchy
          </p>
        </motion.div>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl shadow-lg border border-blue-100 p-8 md:p-12">
          <nav className="flex items-center gap-2 flex-wrap">
            {breadcrumbs.map((crumb, index) => {
              const Icon = crumb.icon;
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
                        ? "bg-blue-600 text-white shadow-lg font-semibold"
                        : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium"
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" />}
                    <span>{crumb.label}</span>
                  </motion.a>
                  {index < breadcrumbs.length - 1 && (
                    <ChevronRight className="w-4 h-4 text-gray-400" />
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

