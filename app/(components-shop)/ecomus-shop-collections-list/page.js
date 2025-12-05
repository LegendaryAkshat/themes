"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      link: "text-blue-600"
    },
    gradients: {
      hover: "group-hover:text-blue-600"
    }
  },
  
  // Page Header
  header: {
    title: "Collections List"
  },
  
  // Collections (Edit collections here!)
  collections: [
    { name: "Men's Fashion", count: 45, image: "👔", link: "/ecomus-shop-default" },
    { name: "Women's Fashion", count: 62, image: "👗", link: "/ecomus-shop-default" },
    { name: "Accessories", count: 28, image: "👜", link: "/ecomus-shop-default" },
    { name: "Shoes", count: 34, image: "👠", link: "/ecomus-shop-default" },
    { name: "Watches", count: 19, image: "⌚", link: "/ecomus-shop-default" },
    { name: "Bags", count: 23, image: "🛍️", link: "/ecomus-shop-default" },
    { name: "Jewelry", count: 31, image: "💍", link: "/ecomus-shop-default" },
    { name: "Sunglasses", count: 15, image: "🕶️", link: "/ecomus-shop-default" }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "md:grid-cols-2",
      desktop: "lg:grid-cols-4"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const { colors, header, collections, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.text.primary} text-center mb-12`}
        >
          {header.title}
        </motion.h1>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className={`group ${colors.card} rounded-xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer`}
            >
              <div className="text-6xl mb-4 text-center">{collection.image}</div>
              <h3 className={`text-xl font-bold ${colors.text.primary} mb-2 text-center ${colors.gradients.hover} transition-colors`}>
                {collection.name}
              </h3>
              <p className={`${colors.text.secondary} text-center mb-4`}>{collection.count} items</p>
              <div className={`flex items-center justify-center ${colors.text.link} opacity-0 group-hover:opacity-100 transition-opacity`}>
                <span className="text-sm font-medium">View Collection</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
