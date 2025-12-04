"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function Page() {
  const timeline = [
    { year: "2024", title: "Expansion to 50+ Countries", description: "Successfully expanded our operations globally" },
    { year: "2023", title: "10 Million Customers", description: "Reached a major milestone in customer base" },
    { year: "2022", title: "Sustainability Initiative", description: "Launched our eco-friendly product line" },
    { year: "2021", title: "Mobile App Launch", description: "Released our mobile application for iOS and Android" },
    { year: "2020", title: "Company Founded", description: "Started our journey with a vision to revolutionize e-commerce" }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Our Timeline
        </motion.h1>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
          <div className="space-y-8">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-lg shadow-md p-6">
                  <div className="text-2xl font-bold text-blue-600 mb-2">{event.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

