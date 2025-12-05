"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    banner: {
      gradient: "bg-gradient-to-r from-red-500 via-pink-500 to-rose-600",
      text: "text-white"
    }
  },
  
  // Banner Configuration
  banners: [
    "Spring Clearance Event: Save Up to 70%",
    "Summer sale discount off 70%",
    "Time to refresh your wardrobe."
  ],
  
  // Animation Settings
  animation: {
    interval: 3000,
    duration: 0.5
  },
  
  // Demo Content
  demo: {
    title: "Promotional Banner",
    description: "Auto-rotating promotional banner section"
  }
};

export default function Page() {
  const [currentBanner, setCurrentBanner] = useState(0);
  const { colors, banners, animation, demo } = pageConfig;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, animation.interval);
    return () => clearInterval(timer);
  }, [banners.length, animation.interval]);

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`${colors.banner.gradient} py-4`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              key={currentBanner}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: animation.duration }}
              className={colors.banner.text}
            >
              <p className="text-lg md:text-xl font-semibold">
                {banners[currentBanner]}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Demo content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{demo.title}</h1>
          <p className={colors.text.secondary}>{demo.description}</p>
        </div>
      </div>
    </main>
  );
}
