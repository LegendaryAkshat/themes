"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Page() {
  const categories = [
    {
      name: "Clothing",
      image: "👕",
      color: "from-blue-500 to-blue-600"
    },
    {
      name: "Sunglasses",
      image: "🕶️",
      color: "from-purple-500 to-purple-600"
    },
    {
      name: "Bags",
      image: "👜",
      color: "from-pink-500 to-pink-600"
    },
    {
      name: "Fashion",
      image: "👗",
      color: "from-red-500 to-red-600"
    },
    {
      name: "Accessories",
      image: "💍",
      color: "from-yellow-500 to-yellow-600"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            SHOP BY CATEGORIES
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
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
              <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                <div className="relative z-10">
                  <div className="text-6xl mb-4 text-center">{category.image}</div>
                  <h3 className="text-lg font-semibold text-gray-900 text-center mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <div className="flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Shop Now</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
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
          <p className="text-gray-600 text-sm">Discovery all new items</p>
        </motion.div>
      </section>
    </main>
  );
}

