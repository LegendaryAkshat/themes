"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-500"
    },
    badges: {
      background: "bg-blue-50",
      text: "text-blue-600"
    },
    gradients: {
      title: "bg-gradient-to-r from-blue-600 to-purple-600",
      button: "bg-gradient-to-r from-blue-600 to-purple-600",
      buttonHover: "bg-gradient-to-r from-purple-600 to-blue-600",
      blue: "from-blue-500 to-blue-600",
      purple: "from-purple-500 to-purple-600",
      green: "from-green-500 to-green-600",
      red: "from-red-500 to-red-600",
      orange: "from-orange-500 to-orange-600",
      pink: "from-pink-500 to-pink-600",
      indigo: "from-indigo-500 to-indigo-600",
      yellow: "from-yellow-500 to-yellow-600"
    },
    decorations: {
      blue: "bg-blue-200",
      purple: "bg-purple-200"
    }
  },
  
  // Page Header
  page: {
    badge: {
      text: "Explore Categories",
      icon: "Sparkles"
    },
    title: "Browse by Category",
    description: "Explore our wide range of product categories and find exactly what you're looking for. Each category is carefully curated to bring you the best selection."
  },
  
  // Categories (Edit categories here!)
  categories: [
    { 
      name: "Laptop & PC", 
      icon: "💻", 
      count: 24, 
      color: "blue",
      description: "High-performance computing",
      link: "/category-laptop-pc"
    },
    { 
      name: "Watches", 
      icon: "⌚", 
      count: 18, 
      color: "purple",
      description: "Timepieces & smartwatches",
      link: "/category-watches"
    },
    { 
      name: "Mobile & Tablet", 
      icon: "📱", 
      count: 32, 
      color: "green",
      description: "Smartphones & tablets",
      link: "/category-mobile-tablet"
    },
    { 
      name: "Health & Sport", 
      icon: "🏃", 
      count: 15, 
      color: "red",
      description: "Fitness & wellness",
      link: "/category-health-sport"
    },
    { 
      name: "Home Appliance", 
      icon: "🏠", 
      count: 28, 
      color: "orange",
      description: "Smart home solutions",
      link: "/category-home-appliance"
    },
    { 
      name: "Games & Video", 
      icon: "🎮", 
      count: 21, 
      color: "pink",
      description: "Gaming & entertainment",
      link: "/category-games-video"
    },
    { 
      name: "Television", 
      icon: "📺", 
      count: 12, 
      color: "indigo",
      description: "4K & smart TVs",
      link: "/category-television"
    },
    { 
      name: "Audio & Music", 
      icon: "🎵", 
      count: 19, 
      color: "yellow",
      description: "Speakers & headphones",
      link: "/category-audio-music"
    }
  ],
  
  // CTA Button
  cta: {
    text: "View All Categories",
    icon: "ShoppingBag",
    enabled: true
  },
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-2",
      tablet: "sm:grid-cols-3",
      desktop: "md:grid-cols-4",
      large: "lg:grid-cols-4"
    },
    gap: "gap-6 md:gap-8"
  }
};

export default function Page() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const { colors, page, categories, cta, grid } = pageConfig;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const iconMap = {
    Sparkles,
    ShoppingBag,
    ArrowRight
  };

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

    const icons = containerRef.current.querySelectorAll('.category-icon');
    icons.forEach((icon) => {
      gsap.to(icon, {
        y: -10,
        duration: 2,
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
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary} overflow-hidden`}>
      <motion.section
        ref={sectionRef}
        style={{ opacity, scale, y }}
        className="px-6 py-24 max-w-7xl mx-auto relative"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className={`absolute top-20 left-10 w-72 h-72 ${colors.decorations.blue} rounded-full mix-blend-multiply filter blur-xl opacity-20`}
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
            className={`absolute bottom-20 right-10 w-96 h-96 ${colors.decorations.purple} rounded-full mix-blend-multiply filter blur-xl opacity-20`}
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
              <span className={`text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-4 py-2 rounded-full font-semibold flex items-center gap-2`}>
                {(() => {
                  const SparklesIcon = iconMap[page.badge.icon];
                  return <SparklesIcon className="w-4 h-4" />;
                })()}
                {page.badge.text}
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`text-4xl md:text-6xl font-bold text-slate-800 mb-6 bg-clip-text text-transparent ${colors.gradients.title}`}
            >
              {page.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`${colors.text.secondary} max-w-2xl mx-auto text-lg leading-relaxed`}
            >
              {page.description}
            </motion.p>
          </motion.div>
          
          <div ref={containerRef} className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href={category.link}
                className="category-card bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                whileHover={{ zIndex: 10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradients[category.color]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <div className="relative z-10">
                  <motion.div
                    className={`category-icon w-20 h-20 bg-gradient-to-br ${colors.gradients[category.color]} rounded-2xl flex items-center justify-center text-4xl mb-5 mx-auto shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.15
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="filter drop-shadow-lg">{category.icon}</span>
                  </motion.div>
                  
                  <motion.h3
                    className={`text-xl font-bold text-slate-800 text-center mb-2 group-hover:text-blue-600 transition-colors duration-300`}
                    whileHover={{ x: 5 }}
                  >
                    {category.name}
                  </motion.h3>
                  
                  <p className={`text-sm ${colors.text.light} text-center mb-4 min-h-[40px]`}>
                    {category.description}
                  </p>
                  
                  <div className={`flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors`}>
                    <span>{category.count} Products</span>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                  
                  <motion.div
                    className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${colors.gradients[category.color]} rounded-full`}
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

          {cta.enabled && (
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
                className={`group relative inline-flex items-center gap-3 ${colors.gradients.button} text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {(() => {
                    const ShoppingBagIcon = iconMap[cta.icon];
                    return <ShoppingBagIcon className="w-5 h-5" />;
                  })()}
                  {cta.text}
                </span>
                <motion.div
                  className={`absolute inset-0 ${colors.gradients.buttonHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={false}
                />
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>
    </main>
  );
}
