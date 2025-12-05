"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Monitor, Tablet, Smartphone, ShoppingCart, X } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500",
    text: "text-white",
    buttons: {
      buyNow: "bg-orange-500 hover:bg-orange-600 text-white",
      icon: "bg-white/10 backdrop-blur-sm hover:bg-white/20"
    },
    logo: {
      container: "bg-white/20 backdrop-blur-sm",
      icon: "bg-gradient-to-br from-yellow-400 via-red-500 to-blue-500"
    },
    links: {
      default: "text-white/80 hover:text-white"
    }
  },
  
  // Content
  content: {
    templateName: "Clare: Next.js Ecommerce Website Template",
    buyNow: {
      text: "Buy Now",
      link: "#"
    },
    removeFrame: {
      text: "Remove frame",
      link: "#"
    },
    viewButtons: [
      { icon: "Tablet", title: "Tablet View", link: "#" },
      { icon: "Smartphone", title: "Mobile View", link: "#" },
      { icon: "Monitor", title: "Desktop View", link: "#" }
    ]
  },
  
  // Icon Map
  iconMap: {
    Monitor,
    Tablet,
    Smartphone,
    ShoppingCart,
    X
  }
};

export default function Page() {
  const containerRef = useRef(null);
  const { colors, content, iconMap } = pageConfig;

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
    <main className={`min-h-screen w-full ${colors.background} ${colors.text}`}>
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
              className={`w-10 h-10 ${colors.logo.container} rounded-lg flex items-center justify-center`}
            >
              <div className={`w-6 h-6 ${colors.logo.icon} rounded`}></div>
            </motion.div>
            <span className="text-sm md:text-base font-medium">
              {content.templateName}
            </span>
          </div>

          <div className="flex items-center gap-3 animate-item">
            {content.viewButtons.map((btn, index) => {
              const Icon = iconMap[btn.icon];
              return (
                <motion.a
                  key={index}
                  href={btn.link}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-2 ${colors.buttons.icon} rounded-lg transition-colors`}
                  title={btn.title}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </div>

          <div className="flex items-center gap-3 animate-item">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${colors.buttons.buyNow} px-6 py-2 rounded-lg font-semibold flex items-center gap-2 shadow-lg transition-colors`}
            >
              <ShoppingCart className="w-4 h-4" />
              {content.buyNow.text}
            </motion.button>
            <motion.a
              href={content.removeFrame.link}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`flex items-center gap-2 ${colors.links.default} transition-colors`}
            >
              <X className="w-4 h-4" />
              <span className="text-sm">{content.removeFrame.text}</span>
            </motion.a>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

