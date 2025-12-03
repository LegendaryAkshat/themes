"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const brands = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    name: `Brand ${i + 1}`,
    logo: "BRAND",
    products: Math.floor(Math.random() * 100 + 20)
  }));

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Our Brands V2
        </motion.h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer border-2 border-transparent hover:border-blue-200"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                  <span className="text-xl font-bold text-gray-700">{brand.logo}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{brand.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{brand.products} products</p>
                <div className="flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
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

