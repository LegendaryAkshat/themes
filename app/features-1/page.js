"use client";

import { motion } from "framer-motion";

export default function Page() {
  const features = [
    {
      title: "Free Shipping",
      description: "For all orders $200",
      icon: "🚚"
    },
    {
      title: "1 & 1 Returns",
      description: "Cancellation after 1 day",
      icon: "↩️"
    },
    {
      title: "100% Secure Payments",
      description: "Guarantee secure payments",
      icon: "🔒"
    },
    {
      title: "24/7 Dedicated Support",
      description: "Anywhere & anytime",
      icon: "💬"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

