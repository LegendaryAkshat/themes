"use client";

import { motion } from "framer-motion";

export default function Page() {
  const brands = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    name: `Brand ${i + 1}`,
    logo: "BRAND"
  }));

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Our Brands
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 flex items-center justify-center cursor-pointer"
            >
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-gray-700">{brand.logo}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{brand.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

