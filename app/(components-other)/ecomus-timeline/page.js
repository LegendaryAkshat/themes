"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: {
      container: "bg-white"
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      year: "text-blue-600"
    },
    timeline: {
      line: "bg-blue-200",
      circle: "bg-blue-600",
      icon: "text-white"
    }
  },
  
  // Page Header
  header: {
    title: "Our Timeline"
  },
  
  // Timeline Events (Edit events here!)
  events: [
    { year: "2024", title: "Expansion to 50+ Countries", description: "Successfully expanded our operations globally" },
    { year: "2023", title: "10 Million Customers", description: "Reached a major milestone in customer base" },
    { year: "2022", title: "Sustainability Initiative", description: "Launched our eco-friendly product line" },
    { year: "2021", title: "Mobile App Launch", description: "Released our mobile application for iOS and Android" },
    { year: "2020", title: "Company Founded", description: "Started our journey with a vision to revolutionize e-commerce" }
  ]
};

export default function Page() {
  const { colors, header, events } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.text.primary} text-center mb-12`}
        >
          {header.title}
        </motion.h1>

        <div className="relative">
          <div className={`absolute left-8 top-0 bottom-0 w-0.5 ${colors.timeline.line}`}></div>
          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 ${colors.timeline.circle} rounded-full flex items-center justify-center relative z-10`}>
                    <CheckCircle className={`w-8 h-8 ${colors.timeline.icon}`} />
                  </div>
                </div>
                <div className={`flex-1 ${colors.card.container} rounded-lg shadow-md p-6`}>
                  <div className={`text-2xl font-bold ${colors.text.year} mb-2`}>{event.year}</div>
                  <h3 className={`text-xl font-bold ${colors.text.primary} mb-2`}>{event.title}</h3>
                  <p className={colors.text.secondary}>{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
