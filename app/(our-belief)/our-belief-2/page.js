"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Lightbulb, Heart, Target, Sparkles, Quote } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
    card: "bg-white/10 backdrop-blur-md",
    text: {
      primary: "text-white",
      secondary: "text-purple-200",
      accent: "text-purple-300"
    },
    borders: {
      default: "border-white/20",
      hover: "border-white/40"
    },
    badges: {
      background: "bg-purple-900/30 backdrop-blur-sm",
      border: "border-purple-500/30",
      text: "text-purple-300"
    }
  },
  
  // Page Header
  header: {
    badge: {
      text: "Core Principles",
      icon: "Sparkles"
    },
    title: "Our Beliefs",
    description: "The fundamental principles that shape our thinking and guide our actions."
  },
  
  // Principles (Edit principles here!)
  principles: [
    {
      icon: "Lightbulb",
      title: "Innovation",
      belief: "We believe in challenging the status quo and finding better ways to solve problems.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "Heart",
      title: "Empathy",
      belief: "Understanding and caring for others is the foundation of meaningful relationships.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: "Target",
      title: "Excellence",
      belief: "We pursue the highest standards in everything we do, knowing that details matter.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Sparkles",
      title: "Possibility",
      belief: "We see potential where others see obstacles, and opportunity in every challenge.",
      gradient: "from-purple-500 to-indigo-500"
    }
  ],
  
  // Closing Statement
  closing: {
    text: "These beliefs guide every decision, shape our culture, and inspire us to create something meaningful."
  }
};

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const { colors, header, principles, closing } = pageConfig;

  const iconMap = {
    Lightbulb,
    Heart,
    Target,
    Sparkles,
    Quote
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={containerRef}
        style={{ opacity, y }}
        className="relative px-6 py-24 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className={`inline-flex items-center gap-2 ${colors.badges.text} ${colors.badges.background} px-6 py-3 rounded-full mb-6 ${colors.badges.border}`}
          >
            {(() => {
              const SparklesIcon = iconMap[header.badge.icon];
              return <SparklesIcon className="w-5 h-5" />;
            })()}
            <span className="text-sm font-semibold uppercase tracking-wider">{header.badge.text}</span>
          </motion.div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white`}>
            {header.title}
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = iconMap[principle.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative ${colors.card} rounded-3xl p-8 ${colors.borders.default} hover:${colors.borders.hover} transition-all overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold">{principle.title}</h3>
                  </div>
                  <div className="flex items-start gap-3">
                    <Quote className={`w-6 h-6 ${colors.text.accent} flex-shrink-0 mt-1`} />
                    <p className={`${colors.text.secondary} leading-relaxed italic text-lg`}>
                      "{principle.belief}"
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className={`inline-block ${colors.card} px-8 py-6 rounded-2xl ${colors.borders.default}`}>
            <p className={`text-lg ${colors.text.secondary}`}>
              {closing.text}
            </p>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
