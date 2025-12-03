"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const collections = [
    { name: "Men's Fashion", count: 45, image: "👔" },
    { name: "Women's Fashion", count: 62, image: "👗" },
    { name: "Accessories", count: 28, image: "👜" },
    { name: "Shoes", count: 34, image: "👠" },
    { name: "Watches", count: 19, image: "⌚" },
    { name: "Bags", count: 23, image: "🛍️" },
    { name: "Jewelry", count: 31, image: "💍" },
    { name: "Sunglasses", count: 15, image: "🕶️" }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Collections List
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer group"
            >
              <div className="text-6xl mb-4 text-center">{collection.image}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center group-hover:text-blue-600 transition-colors">
                {collection.name}
              </h3>
              <p className="text-gray-600 text-center mb-4">{collection.count} items</p>
              <div className="flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
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

