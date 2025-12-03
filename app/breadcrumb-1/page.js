"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Home, ChevronRight } from "lucide-react";

export default function Page() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const items = containerRef.current.querySelectorAll('.breadcrumb-item');
    
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          delay: index * 0.1,
          ease: "power2.out"
        }
      );
    });
  }, []);

  const breadcrumbs = [
    { label: "Home", href: "#", isActive: false },
    { label: "Shop", href: "#", isActive: false },
    { label: "Electronics", href: "#", isActive: true }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-100 text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-4 max-w-7xl mx-auto"
      >
        <nav ref={containerRef} className="flex items-center gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              {index === 0 ? (
                <motion.a
                  href={crumb.href}
                  className="breadcrumb-item flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Home className="w-4 h-4" />
                  <span>{crumb.label}</span>
                </motion.a>
              ) : (
                <motion.a
                  href={crumb.href}
                  className={`breadcrumb-item ${
                    crumb.isActive 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-600 hover:text-blue-600'
                  } transition-colors`}
                  whileHover={{ scale: 1.05 }}
                >
                  {crumb.label}
                </motion.a>
              )}
              {index < breadcrumbs.length - 1 && (
                <ChevronRight className="w-4 h-4 text-gray-400" />
              )}
            </div>
          ))}
        </nav>
      </motion.section>
    </main>
  );
}





