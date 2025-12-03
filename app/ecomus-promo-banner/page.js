"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Page() {
  const [currentBanner, setCurrentBanner] = useState(0);

  const banners = [
    "Spring Clearance Event: Save Up to 70%",
    "Summer sale discount off 70%",
    "Time to refresh your wardrobe."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <main className="min-h-screen w-full bg-white">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-r from-red-500 via-pink-500 to-rose-600 py-4"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              key={currentBanner}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="text-white"
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
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Promotional Banner</h1>
          <p className="text-gray-600">Auto-rotating promotional banner section</p>
        </div>
      </div>
    </main>
  );
}

