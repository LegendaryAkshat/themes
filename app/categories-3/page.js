"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const categories = [
    { 
      name: "Laptop & PC", 
      icon: "💻", 
      count: 24, 
      color: "from-blue-500 to-blue-600",
      gradient: "from-blue-400 via-blue-500 to-blue-600",
      description: "High-performance computing"
    },
    { 
      name: "Watches", 
      icon: "⌚", 
      count: 18, 
      color: "from-purple-500 to-purple-600",
      gradient: "from-purple-400 via-purple-500 to-purple-600",
      description: "Timepieces & smartwatches"
    },
    { 
      name: "Mobile & Tablet", 
      icon: "📱", 
      count: 32, 
      color: "from-green-500 to-green-600",
      gradient: "from-green-400 via-green-500 to-green-600",
      description: "Smartphones & tablets"
    },
    { 
      name: "Health & Sport", 
      icon: "🏃", 
      count: 15, 
      color: "from-red-500 to-red-600",
      gradient: "from-red-400 via-red-500 to-red-600",
      description: "Fitness & wellness"
    },
    { 
      name: "Home Appliance", 
      icon: "🏠", 
      count: 28, 
      color: "from-orange-500 to-orange-600",
      gradient: "from-orange-400 via-orange-500 to-orange-600",
      description: "Smart home solutions"
    },
    { 
      name: "Games & Video", 
      icon: "🎮", 
      count: 21, 
      color: "from-pink-500 to-pink-600",
      gradient: "from-pink-400 via-pink-500 to-pink-600",
      description: "Gaming & entertainment"
    },
    { 
      name: "Television", 
      icon: "📺", 
      count: 12, 
      color: "from-indigo-500 to-indigo-600",
      gradient: "from-indigo-400 via-indigo-500 to-indigo-600",
      description: "4K & smart TVs"
    },
    { 
      name: "Audio & Music", 
      icon: "🎵", 
      count: 19, 
      color: "from-yellow-500 to-yellow-600",
      gradient: "from-yellow-400 via-yellow-500 to-yellow-600",
      description: "Speakers & headphones"
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.category-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotation: -5
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Hover animation with GSAP
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          scale: 1.05,
          rotation: 2,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    // Floating animation for icons
    cards.forEach((card) => {
      const icon = card.querySelector('.category-icon');
      if (icon) {
        gsap.to(icon, {
          y: -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 overflow-hidden">
      <motion.section
        ref={sectionRef}
        style={{ opacity, scale, y }}
        className="px-6 py-24 max-w-7xl mx-auto relative"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-4"
            >
              <span className="text-sm uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Explore Categories
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            >
              Browse by Category
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Explore our wide range of product categories and find exactly what you're looking for. 
              Each category is carefully curated to bring you the best selection.
            </motion.p>
          </motion.div>
          
          <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href="#"
                className="category-card bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                whileHover={{ zIndex: 10 }}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <div className="relative z-10">
                  <motion.div
                    className={`category-icon w-20 h-20 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-4xl mb-5 mx-auto shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.15
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="filter drop-shadow-lg">{category.icon}</span>
                  </motion.div>
                  
                  <motion.h3
                    className="text-xl font-bold text-slate-800 text-center mb-2 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {category.name}
                  </motion.h3>
                  
                  <p className="text-sm text-gray-500 text-center mb-4 min-h-[40px]">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors">
                    <span>{category.count} Products</span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                  
                  {/* Pulse indicator */}
                  <motion.div
                    className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${category.color} rounded-full`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.a>
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <ShoppingBag className="w-5 h-5" />
                View All Categories
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}
