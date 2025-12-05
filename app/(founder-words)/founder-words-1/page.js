"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Sparkles, Heart } from "lucide-react";

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
      timeline: "border-white/10"
    },
    badges: {
      background: "bg-purple-900/30 backdrop-blur-sm",
      border: "border-purple-500/30",
      text: "text-purple-300"
    },
    gradients: {
      title: "bg-gradient-to-r from-white via-purple-200 to-white",
      timeline: "bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500",
      dot: "bg-gradient-to-br from-purple-400 to-purple-600"
    }
  },
  
  // Page Header
  header: {
    badge: {
      text: "Founder's Journey",
      icon: "Sparkles"
    },
    title: "Words That Shaped Us",
    description: "Reflections from the journey of building something meaningful, one decision at a time."
  },
  
  // Quotes (Edit quotes here!)
  quotes: [
    {
      text: "Every great journey begins with a single step, but it's the vision that guides you through every challenge.",
      year: "2015",
      context: "The Beginning"
    },
    {
      text: "Innovation isn't about being first—it's about being thoughtful, intentional, and creating something that truly matters.",
      year: "2018",
      context: "Finding Our Path"
    },
    {
      text: "Success isn't measured by what you achieve alone, but by the impact you create in the lives of others.",
      year: "2021",
      context: "Scaling Impact"
    },
    {
      text: "The future belongs to those who dare to reimagine what's possible and have the courage to build it.",
      year: "2024",
      context: "Looking Forward"
    }
  ],
  
  // Closing Statement
  closing: {
    text: "The journey continues, and every day brings new opportunities to make a difference.",
    icon: "Heart"
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
  const { colors, header, quotes, closing } = pageConfig;

  const iconMap = {
    Quote,
    Sparkles,
    Heart
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={containerRef}
        style={{ opacity, y }}
        className="relative px-6 py-24 max-w-6xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className={`inline-flex items-center gap-2 ${colors.badges.text} ${colors.badges.background} px-6 py-3 rounded-full mb-6 ${colors.badges.border}`}
          >
            {(() => {
              const SparklesIcon = iconMap[header.badge.icon];
              return <SparklesIcon className="w-5 h-5" />;
            })()}
            <span className="text-sm font-semibold uppercase tracking-wider">{header.badge.text}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent ${colors.gradients.title}`}
          >
            {header.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`text-xl ${colors.text.secondary} max-w-2xl mx-auto leading-relaxed`}
          >
            {header.description}
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${colors.gradients.timeline} transform md:-translate-x-1/2`} />

          <div className="space-y-24">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${colors.gradients.dot} flex items-center justify-center shadow-lg shadow-purple-500/50`}>
                    <div className="w-8 h-8 rounded-full bg-white" />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-1 ${colors.card} rounded-2xl p-8 ${colors.borders.default} shadow-2xl ${
                    index % 2 === 0 ? "md:mr-auto md:max-w-md" : "md:ml-auto md:max-w-md"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className={`w-8 h-8 ${colors.text.accent} flex-shrink-0`} />
                    <p className={`text-xl md:text-2xl leading-relaxed ${colors.text.primary} font-light italic`}>
                      "{quote.text}"
                    </p>
                  </div>
                  <div className={`flex items-center justify-between mt-6 pt-6 border-t ${colors.borders.timeline}`}>
                    <span className={`${colors.text.accent} font-semibold`}>{quote.context}</span>
                    <span className={`${colors.text.primary}/60 text-sm`}>{quote.year}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 text-center"
        >
          <div className={`inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-8 py-6 rounded-2xl ${colors.borders.default}`}>
            {(() => {
              const HeartIcon = iconMap[closing.icon];
              return <HeartIcon className="w-6 h-6 text-purple-400" />;
            })()}
            <p className={`text-lg ${colors.text.secondary}`}>
              {closing.text}
            </p>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
