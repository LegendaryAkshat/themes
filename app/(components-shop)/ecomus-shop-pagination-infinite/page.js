"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

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
    }
  },
  
  // Page Header
  header: {
    title: "Shop - Infinite Scroll"
  },
  
  // Products (Edit products here!)
  initialProducts: Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    rating: (Math.random() * 1 + 4).toFixed(1)
  })),
  
  // Pagination Settings
  pagination: {
    loadMoreCount: 8
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
  const [products, setProducts] = useState(pageConfig.initialProducts);
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);
  const { colors, header, pagination, grid } = pageConfig;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            const newProducts = Array.from({ length: pagination.loadMoreCount }, (_, i) => ({
              id: products.length + i + 1,
              name: `Product ${products.length + i + 1}`,
              price: (Math.random() * 100 + 10).toFixed(2),
              rating: (Math.random() * 1 + 4).toFixed(1)
            }));
            setProducts([...products, ...newProducts]);
            setLoading(false);
          }, 1000);
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, [products, loading, pagination.loadMoreCount]);

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

        <div className={`grid ${grid.products.mobile} ${grid.products.tablet} ${grid.products.desktop} ${grid.gap}`}>
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

        <div ref={observerRef} className="h-20 flex items-center justify-center">
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={colors.text.secondary}
            >
              Loading more products...
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}
