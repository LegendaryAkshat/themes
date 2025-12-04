"use client";

import { motion } from "framer-motion";
import { Home, ChevronRight } from "lucide-react";

export default function Page() {
  const breadcrumbs = [
    { label: "Home", href: "#", isActive: false },
    { label: "Electronics", href: "#", isActive: false },
    { label: "Audio", href: "#", isActive: false },
    { label: "Headphones", href: "#", isActive: true }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Breadcrumb Navigation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            A clean, modern breadcrumb navigation with smooth transitions
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12">
          <nav className="flex items-center gap-2 flex-wrap">
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                {index === 0 ? (
                  <motion.a
                    href={crumb.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg text-gray-600 hover:text-blue-600 hover:bg-blue-50 transition-all font-medium"
                  >
                    <Home className="w-4 h-4" />
                    <span>{crumb.label}</span>
                  </motion.a>
                ) : (
                  <motion.a
                    href={crumb.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 rounded-lg transition-all font-medium ${
                      crumb.isActive
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {crumb.label}
                  </motion.a>
                )}
                {index < breadcrumbs.length - 1 && (
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>
    </main>
  );
}

