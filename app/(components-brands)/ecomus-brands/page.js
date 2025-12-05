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
      primary: "text-gray-900"
    },
    gradients: {
      logo: "bg-gradient-to-br from-blue-100 to-purple-100"
    }
  },
  
  // Page Header
  header: {
    title: "Our Brands"
  },
  
  // Brands (Edit brands here!)
  brands: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Brand ${i + 1}`,
    logo: "BRAND"
  })),
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-2",
      tablet: "md:grid-cols-3",
      desktop: "lg:grid-cols-4"
    },
    gap: "gap-8"
  }
};

export default function Page() {
  const { colors, header, brands, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.text.primary} text-center mb-12`}
        >
          {header.title}
        </motion.h1>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${colors.card} rounded-xl shadow-md hover:shadow-xl transition-all p-8 flex items-center justify-center cursor-pointer`}
            >
              <div className="text-center">
                <div className={`w-24 h-24 ${colors.gradients.logo} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-2xl font-bold text-gray-700">{brand.logo}</span>
                </div>
                <h3 className={`font-semibold ${colors.text.primary}`}>{brand.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
