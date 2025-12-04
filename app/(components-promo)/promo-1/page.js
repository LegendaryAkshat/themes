"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, Package, Globe, DollarSign } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    // Animate text on scroll
    gsap.fromTo(
      textRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating animation for icons
    const icons = sectionRef.current.querySelectorAll('.icon-item');
    icons.forEach((icon, index) => {
      gsap.to(icon, {
        y: -5,
        duration: 2,
        delay: index * 0.2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-4 max-w-7xl mx-auto border-b border-gray-200"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <motion.div
            ref={textRef}
            className="flex items-center gap-2 flex-wrap"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="text-sm md:text-base text-gray-700"
            >
              Free Express Shipping on orders $200!
            </motion.span>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="text-orange-500 hover:text-orange-600 font-semibold text-sm md:text-base flex items-center gap-1"
            >
              Click and Shop Now.
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          <div className="flex items-center gap-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-500 transition-colors icon-item"
            >
              <Package className="w-4 h-4" />
              <span>Order Tracking</span>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-orange-500 transition-colors cursor-pointer icon-item"
            >
              <Globe className="w-4 h-4" />
              <span>English</span>
              <motion.div
                animate={{ rotate: [0, 180, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3"
              >
                ↓
              </motion.div>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-1 text-sm text-gray-700 hover:text-orange-500 transition-colors cursor-pointer icon-item"
            >
              <DollarSign className="w-4 h-4" />
              <span>USD</span>
              <motion.div
                animate={{ rotate: [0, 180, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-3 h-3"
              >
                ↓
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

