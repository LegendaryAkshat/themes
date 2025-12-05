"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

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
      secondary: "text-gray-600"
    },
    buttons: {
      pagination: {
        active: "bg-blue-600 text-white",
        inactive: "bg-white text-gray-700 hover:bg-gray-100",
        disabled: "bg-gray-100 text-gray-400"
      }
    }
  },
  
  // Page Header
  header: {
    title: "Shop - Pagination Links"
  },
  
  // Products (Edit products here!)
  products: Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    rating: (Math.random() * 1 + 4).toFixed(1)
  })),
  
  // Pagination Settings
  pagination: {
    totalPages: 10
  },
  
  // Grid Configuration
  grid: {
    products: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3 xl:grid-cols-4"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const { colors, header, products, pagination, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          {header.title}
        </motion.h1>

        <div className={`grid ${grid.products.mobile} ${grid.products.tablet} ${grid.products.desktop} ${grid.gap} mb-8`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${colors.card} rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden`}
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
              <div className="p-4">
                <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className={`text-lg font-bold ${colors.text.primary}`}>${product.price}</span>
                  <span className={`text-sm ${colors.text.secondary}`}>★ {product.rating}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded-lg ${
              currentPage === 1 ? colors.buttons.pagination.disabled : colors.buttons.pagination.inactive
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>

          {[...Array(Math.min(5, pagination.totalPages))].map((_, i) => {
            const page = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
            if (page > pagination.totalPages) return null;
            return (
              <motion.button
                key={page}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-lg font-semibold ${
                  currentPage === page
                    ? colors.buttons.pagination.active
                    : colors.buttons.pagination.inactive
                }`}
              >
                {page}
              </motion.button>
            );
          })}

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setCurrentPage(Math.min(pagination.totalPages, currentPage + 1))}
            disabled={currentPage === pagination.totalPages}
            className={`p-2 rounded-lg ${
              currentPage === pagination.totalPages ? colors.buttons.pagination.disabled : colors.buttons.pagination.inactive
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>
      </div>
    </main>
  );
}
