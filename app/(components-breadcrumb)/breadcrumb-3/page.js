"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";

export default function Page() {
  const breadcrumbs = [
    { label: "Home", href: "#" },
    { label: "Shop", href: "#" },
    { label: "Collections", href: "#" },
    { label: "Summer 2024", href: "#", isActive: true }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Minimal Breadcrumb
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            A sleek, minimalist breadcrumb design with subtle separators
          </p>
        </motion.div>

        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 md:p-12">
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
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                  >
                    <Home className="w-4 h-4" />
                  </motion.a>
                ) : (
                  <>
                    <span className="text-gray-600">/</span>
                    <motion.a
                      href={crumb.href}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className={`transition-colors ${
                        crumb.isActive
                          ? "text-white font-semibold"
                          : "text-gray-400 hover:text-white"
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

