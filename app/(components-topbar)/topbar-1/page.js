"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Monitor, Tablet, Smartphone, ShoppingCart, X } from "lucide-react";

export default function Page() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll('.animate-item');
    
    elements.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power2.out"
        }
      );
    });
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 text-white">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-4 max-w-7xl mx-auto"
      >
        <div ref={containerRef} className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4 animate-item">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center"
            >
              <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 via-red-500 to-blue-500 rounded"></div>
            </motion.div>
            <span className="text-sm md:text-base font-medium">
              Clare: Next.js Ecommerce Website Template
            </span>
          </div>

          <div className="flex items-center gap-3 animate-item">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              title="Tablet View"
            >
              <Tablet className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              title="Mobile View"
            >
              <Smartphone className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
              title="Desktop View"
            >
              <Monitor className="w-5 h-5" />
            </motion.a>
          </div>

          <div className="flex items-center gap-3 animate-item">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg transition-colors"
            >
              <ShoppingCart className="w-4 h-4" />
              Buy Now
            </motion.button>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
              <span className="text-sm">Remove frame</span>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

