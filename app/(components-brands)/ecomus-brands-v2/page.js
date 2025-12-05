"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-gradient-to-br from-gray-50 to-gray-100",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      link: "text-blue-600"
    },
    borders: {
      default: "border-transparent",
      hover: "border-blue-200"
    },
    gradients: {
      logo: "bg-gradient-to-br from-blue-200 to-purple-200"
    }
  },
  
  // Page Header
  header: {
    title: "Our Brands V2"
  },
  
  // Brands (Edit brands here!)
  brands: Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `Brand ${i + 1}`,
    logo: "BRAND",
    products: Math.floor(Math.random() * 100 + 20)
  })),
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-2",
      tablet: "md:grid-cols-3",
      desktop: "lg:grid-cols-4"
    },
    gap: "gap-6"
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
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group ${colors.card} rounded-xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer border-2 ${colors.borders.default} hover:${colors.borders.hover}`}
            >
              <div className="text-center">
                <div className={`w-20 h-20 ${colors.gradients.logo} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <span className="text-xl font-bold text-gray-700">{brand.logo}</span>
                </div>
                <h3 className={`font-bold ${colors.text.primary} mb-1`}>{brand.name}</h3>
                <p className={`text-sm ${colors.text.secondary} mb-3`}>{brand.products} products</p>
                <div className={`flex items-center justify-center ${colors.text.link} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-sm font-medium">View Brand</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
