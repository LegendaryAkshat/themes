"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Play, ShoppingBag, ArrowRight, Sparkles, Check } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-black",
    text: {
      primary: "text-white",
      secondary: "text-gray-300"
    },
    badges: {
      background: "bg-white/10 backdrop-blur-sm",
      text: "text-purple-300",
      border: "border-white/20"
    },
    buttons: {
      primary: "bg-white text-black",
      secondary: "border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20"
    },
    gradients: {
      title1: "bg-gradient-to-r from-white via-purple-200 to-pink-200",
      title2: "bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300",
      background: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
      button: "bg-gradient-to-r from-purple-500 to-pink-500",
      orbs: {
        blue: "bg-blue-500/30",
        purple: "bg-purple-500/30",
        pink: "bg-pink-500/20"
      }
    },
    features: {
      background: "bg-white/5 backdrop-blur-sm",
      border: "border-white/10",
      check: "bg-green-500/20",
      icon: "text-green-400"
    }
  },
  
  // Content (Edit content here!)
  content: {
    badge: {
      text: "Limited Time Offer",
      icon: "Sparkles"
    },
    title: {
      line1: "Experience",
      line2: "The Future"
    },
    description: "Transform your everyday with cutting-edge technology and innovative design. Join thousands of satisfied customers worldwide.",
    buttons: {
      primary: "Shop Now",
      secondary: "Watch Demo"
    }
  },
  
  // Features (Edit features here!)
  features: [
    "Free Worldwide Shipping",
    "30-Day Return Policy",
    "Secure Payment",
    "24/7 Customer Support"
  ],
  
  // Animation Settings
  animations: {
    particles: {
      count: 20,
      enabled: true
    },
    orbs: {
      enabled: true
    }
  }
};

export default function Page() {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { colors, content, features, animations } = pageConfig;
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const iconMap = {
    Play,
    ShoppingBag,
    ArrowRight,
    Sparkles,
    Check
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary} overflow-hidden`}>
      <motion.section
        ref={sectionRef}
        style={{ opacity, scale, y }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${colors.gradients.background}`} />
          
          {animations.orbs.enabled && (
            <>
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute top-20 left-20 w-96 h-96 ${colors.gradients.orbs.blue} rounded-full blur-3xl`}
              />
              <motion.div
                animate={{
                  x: [0, -100, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute bottom-20 right-20 w-[500px] h-[500px] ${colors.gradients.orbs.purple} rounded-full blur-3xl`}
              />
              <motion.div
                animate={{
                  x: [0, 50, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] ${colors.gradients.orbs.pink} rounded-full blur-3xl`}
              />
            </>
          )}
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <span className={`text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-6 py-3 rounded-full font-semibold ${colors.badges.border} flex items-center gap-2 mx-auto`}>
                {(() => {
                  const SparklesIcon = iconMap[content.badge.icon];
                  return <SparklesIcon className="w-4 h-4" />;
                })()}
                {content.badge.text}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              <span className={`bg-clip-text text-transparent ${colors.gradients.title1}`}>
                {content.title.line1}
              </span>
              <br />
              <span className={`bg-clip-text text-transparent ${colors.gradients.title2}`}>
                {content.title.line2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-xl md:text-2xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative ${colors.buttons.primary} px-10 py-5 rounded-full font-bold text-lg overflow-hidden shadow-2xl`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6" />
                  {content.buttons.primary}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className={`absolute inset-0 ${colors.gradients.button} opacity-0 group-hover:opacity-100 transition-opacity`}
                  initial={false}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group px-10 py-5 rounded-full font-bold text-lg ${colors.buttons.secondary} transition-all`}
              >
                <span className="flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  {content.buttons.secondary}
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`flex items-center gap-2 ${colors.features.background} px-4 py-3 rounded-lg ${colors.features.border}`}
                >
                  <div className={`p-1 ${colors.features.check} rounded-full`}>
                    <Check className={`w-4 h-4 ${colors.features.icon}`} />
                  </div>
                  <span className={`text-sm ${colors.text.secondary}`}>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {animations.particles.enabled && [...Array(animations.particles.count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </motion.section>
    </main>
  );
}
