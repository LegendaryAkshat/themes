"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Page() {
  const [products, setProducts] = useState(Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    name: `Product ${i + 1}`,
    price: (Math.random() * 100 + 10).toFixed(2),
    rating: (Math.random() * 1 + 4).toFixed(1)
  })));
  const [loading, setLoading] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setLoading(true);
          setTimeout(() => {
            const newProducts = Array.from({ length: 8 }, (_, i) => ({
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
  }, [products, loading]);

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-gray-900 mb-8"
        >
          Shop - Infinite Scroll
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-gray-900">${product.price}</span>
                  <span className="text-sm text-gray-600">★ {product.rating}</span>
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
              className="text-gray-600"
            >
              Loading more products...
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
}

