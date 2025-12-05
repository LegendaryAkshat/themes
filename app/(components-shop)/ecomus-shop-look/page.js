"use client";

import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-white/90 backdrop-blur-sm",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200",
      price: "text-blue-600"
    }
  },
  
  // Page Header
  header: {
    title: "Shop the look",
    description: "Inspire and let yourself be inspired, from one unique fashion to another."
  },
  
  // Looks (Edit looks here!)
  looks: [
    {
      id: 1,
      items: [
        { name: "Jersey thong body", price: 112.00, link: "/ecomus-product-detail" },
        { name: "Ribbed modal T-shirt", price: 20.00, link: "/ecomus-product-detail" }
      ],
      image: "👗"
    },
    {
      id: 2,
      items: [
        { name: "Ribbed Tank Top", price: 20.00, link: "/ecomus-product-detail" }
      ],
      image: "👕"
    }
  ]
};

export default function Page() {
  const { colors, header, looks } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-4`}>
            {header.title}
          </h2>
          <p className={`${colors.text.secondary} text-lg`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {looks.map((look, index) => (
            <motion.div
              key={look.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              <div className={`relative aspect-[4/5] ${colors.gradients.image} rounded-2xl overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">{look.image}</div>
                </div>

                <div className="absolute inset-0 p-6">
                  {look.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: itemIndex * 0.1 }}
                      className="absolute"
                      style={{
                        top: `${20 + itemIndex * 30}%`,
                        left: "10%"
                      }}
                    >
                      <motion.a
                        href={item.link}
                        whileHover={{ scale: 1.05 }}
                        className={`${colors.card} rounded-lg p-3 shadow-lg cursor-pointer group/item`}
                      >
                        <p className={`text-sm font-semibold ${colors.text.primary} mb-1`}>
                          {item.name}
                        </p>
                        <p className={`text-lg font-bold ${colors.gradients.price}`}>
                          ${item.price.toFixed(2)}
                        </p>
                      </motion.a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
