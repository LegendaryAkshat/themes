"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      accent: "text-blue-600"
    },
    borders: {
      default: "border-gray-100"
    },
    buttons: {
      hover: "hover:bg-gray-100"
    }
  },
  
  // Page Header
  page: {
    title: "Best Sellers",
    viewAll: {
      text: "View All",
      link: "/products-all"
    }
  },
  
  // Products (Edit products here!)
  products: [
    { name: "Premium Mobile Device Pro", id: 1, link: "/product-premium-mobile-device-pro" },
    { name: "Smart Watch Ultra", id: 2, link: "/product-smart-watch-ultra" },
    { name: "Adjustable Home Fitness Equipment", id: 3, link: "/product-adjustable-home-fitness" },
    { name: "Premium Smart TV 43 Inch", id: 4, link: "/product-premium-smart-tv" },
    { name: "High-Performance Laptop Pro", id: 5, link: "/product-high-performance-laptop-pro" },
    { name: "Portable Electric Appliance", id: 6, link: "/product-portable-electric-appliance" }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "md:grid-cols-3",
      large: "lg:grid-cols-4"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const { colors, page, products, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-3xl font-bold text-slate-800`}>{page.title}</h2>
          <Link href={page.viewAll.link} className={`${colors.text.accent} hover:text-blue-700 font-semibold`}>
            {page.viewAll.text}
          </Link>
        </div>
        
        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${colors.card} rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border ${colors.borders.default}`}
            >
              <Link href={product.link}>
                <div className="relative group">
                  <div className="w-full h-64 bg-gray-200"></div>
                  <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity flex items-center justify-center gap-2`}>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                      <button className={`p-2 ${colors.card} rounded-full ${colors.buttons.hover}`}>
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </button>
                      <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">Quick View</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                      <button className={`p-2 ${colors.card} rounded-full ${colors.buttons.hover}`}>
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </button>
                      <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">Add to cart</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                      <button className={`p-2 ${colors.card} rounded-full ${colors.buttons.hover}`}>
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </button>
                      <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">Add to Wishlist</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className={`text-lg font-semibold text-slate-800 mb-2`}>
                    {product.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
