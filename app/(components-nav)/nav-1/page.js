"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, ShoppingBag } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const navRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const { scrollYProgress } = useScroll();
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(251, 146, 60, 1)", "rgba(251, 146, 60, 0.95)"]
  );

  const navItems = [
    { name: "Home", hasDropdown: true },
    { name: "Shop", hasDropdown: false },
    { name: "Pages", hasDropdown: true },
    { name: "About", hasDropdown: false },
    { name: "Blog", hasDropdown: false },
    { name: "Contact", hasDropdown: false }
  ];

  useEffect(() => {
    if (!navRef.current) return;

    const items = navRef.current.querySelectorAll('.nav-item');
    
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out"
        }
      );

      // Hover animation
      item.addEventListener('mouseenter', () => {
        gsap.to(item, {
          y: -3,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      item.addEventListener('mouseleave', () => {
        gsap.to(item, {
          y: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-orange-500 text-white">
      <motion.section
        ref={navRef}
        style={{ backgroundColor }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-4 max-w-7xl mx-auto sticky top-0 z-50 shadow-lg"
      >
        <div className="flex items-center justify-between gap-6">
          {/* Category Button */}
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all nav-item"
          >
            <div className="w-5 h-5 flex flex-col gap-1">
              <div className="w-full h-0.5 bg-orange-500"></div>
              <div className="w-full h-0.5 bg-orange-500"></div>
              <div className="w-full h-0.5 bg-orange-500"></div>
            </div>
            <span>All Categories</span>
            <motion.div
              animate={{ rotate: [0, 180, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </motion.button>

          {/* Navigation Links */}
          <nav className="flex-1 flex items-center justify-center gap-8 flex-wrap">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href="#"
                className="nav-item text-white font-medium hover:text-orange-100 transition-colors flex items-center gap-1 relative group"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <span>{item.name}</span>
                {item.hasDropdown && (
                  <motion.div
                    animate={{ rotate: hoveredItem === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                )}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredItem === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Shop Now Button */}
          <motion.button
            whileHover={{ scale: 1.05, x: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all nav-item"
          >
            <ShoppingBag className="w-4 h-4" />
            Shop now
          </motion.button>
        </div>
      </motion.section>
    </main>
  );
}

