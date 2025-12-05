"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Truck, Package, Globe, DollarSign } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-700"
    },
    links: {
      default: "text-orange-500 hover:text-orange-600",
      icon: "text-gray-700 hover:text-orange-500"
    },
    borders: {
      section: "border-b border-gray-200"
    }
  },
  
  // Content
  content: {
    message: "Free Express Shipping on orders $200!",
    cta: {
      text: "Click and Shop Now.",
      link: "#"
    },
    links: [
      { icon: "Package", text: "Order Tracking", link: "#" },
      { icon: "Globe", text: "English", link: "#" },
      { icon: "DollarSign", text: "USD", link: "#" }
    ]
  },
  
  // Icon Map
  iconMap: {
    Package,
    Globe,
    DollarSign
  }
};

export default function Page() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const { colors, content, iconMap } = pageConfig;

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
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={sectionRef}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`px-6 py-4 max-w-7xl mx-auto ${colors.borders.section}`}
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
              className={`text-sm md:text-base ${colors.text.secondary}`}
            >
              {content.message}
            </motion.span>
            <motion.a
              href={content.cta.link}
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.95 }}
              className={`${colors.links.default} font-semibold text-sm md:text-base flex items-center gap-1`}
            >
              {content.cta.text}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>

          <div className="flex items-center gap-6">
            {content.links.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <motion.a
                  key={index}
                  href={link.link}
                  whileHover={{ scale: 1.05, y: index === 0 ? -2 : 0 }}
                  className={`flex items-center gap-${index === 0 ? '2' : '1'} text-sm ${colors.links.icon} transition-colors icon-item`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.text}</span>
                  {index > 0 && (
                    <motion.div
                      animate={{ rotate: [0, 180, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-3 h-3"
                    >
                      ↓
                    </motion.div>
                  )}
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

