"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
      secondary: "text-gray-600",
      accent: "text-blue-600"
    },
    gradients: {
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      pink: "from-pink-500 to-pink-600",
      red: "from-red-500 to-red-600",
      yellow: "from-yellow-500 to-yellow-600"
    }
  },
  
  // Page Header
  page: {
    title: "SHOP BY CATEGORIES",
    footer: "Discovery all new items"
  },
  
  // Categories (Edit categories here!)
  categories: [
    {
      name: "Clothing",
      image: "👕",
      color: "blue",
      link: "/ecomus-category-clothing"
    },
    {
      name: "Sunglasses",
      image: "🕶️",
      color: "purple",
      link: "/ecomus-category-sunglasses"
    },
    {
      name: "Bags",
      image: "👜",
      color: "pink",
      link: "/ecomus-category-bags"
    },
    {
      name: "Fashion",
      image: "👗",
      color: "red",
      link: "/ecomus-category-fashion"
    },
    {
      name: "Accessories",
      image: "💍",
      color: "yellow",
      link: "/ecomus-category-accessories"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-2",
      tablet: "md:grid-cols-3",
      desktop: "lg:grid-cols-5"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const { colors, page, categories, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-4`}>
            {page.title}
          </h2>
        </motion.div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Link href={category.link}>
                <div className={`${colors.card} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradients[category.color]} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    <div className="text-6xl mb-4 text-center">{category.image}</div>
                    <h3 className={`text-lg font-semibold ${colors.text.primary} text-center mb-2 group-hover:${colors.text.accent} transition-colors`}>
                      {category.name}
                    </h3>
                    <div className={`flex items-center justify-center ${colors.text.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <span className="text-sm font-medium">Shop Now</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className={`${colors.text.secondary} text-sm`}>{page.footer}</p>
        </motion.div>
      </section>
    </main>
  );
}
