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
    background: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-100",
      active: "border-gray-300",
      disabled: "border-gray-200"
    },
    buttons: {
      pagination: {
        active: "bg-blue-600 text-white shadow-lg scale-110",
        inactive: "bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50",
        disabled: "border-gray-200 text-gray-400 cursor-not-allowed"
      }
    }
  },
  
  // Page Header
  header: {
    title: "Pagination with Numbers",
    description: "Navigate through pages with a numbered pagination system that provides clear context and easy navigation."
  },
  
  // Pagination Settings
  pagination: {
    totalPages: 10
  }
};

export default function Page() {
  const [currentPage, setCurrentPage] = useState(1);
  const { colors, header, pagination } = pageConfig;

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = pagination.totalPages > 7;

    if (!showEllipsis) {
      for (let i = 1; i <= pagination.totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(pagination.totalPages);
      } else if (currentPage >= pagination.totalPages - 3) {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = pagination.totalPages - 4; i <= pagination.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push('ellipsis');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('ellipsis');
        pages.push(pagination.totalPages);
      }
    }

    return pages;
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold ${colors.text.primary} mb-4`}>
            {header.title}
          </h1>
          <p className={`text-lg ${colors.text.secondary} max-w-2xl mx-auto`}>
            {header.description}
          </p>
        </motion.div>

        <div className={`${colors.card} rounded-2xl shadow-xl ${colors.borders.default} p-8 md:p-12`}>
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className={`p-3 rounded-lg border-2 transition-all ${
                currentPage === 1
                  ? colors.buttons.pagination.disabled
                  : colors.buttons.pagination.inactive
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>

            {getPageNumbers().map((page, index) => {
              if (page === 'ellipsis') {
                return (
                  <span key={`ellipsis-${index}`} className="px-2 text-gray-400">
                    ...
                  </span>
                );
              }

              return (
                <motion.button
                  key={page}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all min-w-[44px] ${
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
              className={`p-3 rounded-lg border-2 transition-all ${
                currentPage === pagination.totalPages
                  ? colors.buttons.pagination.disabled
                  : colors.buttons.pagination.inactive
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
