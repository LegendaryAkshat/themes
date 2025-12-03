"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Search, User, Heart, ShoppingCart, Menu } from "lucide-react";

export default function Page() {
  const [searchFocused, setSearchFocused] = useState(false);
  const headerRef = useRef(null);
  const searchRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    if (!headerRef.current) return;

    const handleMouseMove = (e) => {
      const rect = headerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };

    headerRef.current.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (headerRef.current) {
        headerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  const backgroundX = useTransform(mouseX, [0, 1000], [-50, 50]);
  const backgroundY = useTransform(mouseY, [0, 600], [-50, 50]);

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <motion.section
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-6 max-w-7xl mx-auto relative overflow-hidden"
      >
        {/* Animated background gradient */}
        <motion.div
          style={{ x: backgroundX, y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10"
        />

        <div className="relative z-10 flex items-center justify-between gap-6 flex-wrap">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center"
          >
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-3xl md:text-4xl font-bold text-slate-800"
            >
              Clare<sup className="text-orange-500">®</sup>
            </motion.h1>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            ref={searchRef}
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: searchFocused ? "100%" : "auto",
              opacity: 1 
            }}
            transition={{ duration: 0.3 }}
            className="flex-1 max-w-2xl mx-4"
          >
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className={`relative flex items-center bg-gray-50 rounded-lg border-2 transition-all duration-300 ${
                searchFocused ? 'border-orange-500 bg-white shadow-lg' : 'border-transparent'
              }`}
            >
              <Search className="w-5 h-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="Search your favorite product"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-r-lg font-medium text-gray-700 transition-colors"
              >
                Select Category
                <motion.span
                  animate={{ rotate: searchFocused ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block ml-2"
                >
                  ↓
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors relative group"
            >
              <User className="w-5 h-5 text-gray-700" />
              <motion.span
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"
              />
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors relative group"
            >
              <Heart className="w-5 h-5 text-gray-700" />
              <motion.span
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
              >
                0
              </motion.span>
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors relative group"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              <motion.span
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold"
              >
                0
              </motion.span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
            >
              <Menu className="w-5 h-5 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

