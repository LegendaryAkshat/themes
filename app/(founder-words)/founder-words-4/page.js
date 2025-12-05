"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, ArrowRight, Heart, Target, Zap } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
    card: "bg-white/5 backdrop-blur-md",
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      accent: "text-yellow-400"
    },
    borders: {
      default: "border-white/10",
      hover: "border-white/30"
    },
    badges: {
      text: "text-yellow-400"
    },
    gradients: {
      title: "bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400",
      statement: "bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-purple-500/20"
    }
  },
  
  // Page Header
  header: {
    badge: {
      text: "Core Philosophy",
      icon: "Sparkles"
    },
    title: {
      line1: "Principles",
      line2: "That Guide Us"
    },
    description: "The foundational beliefs that shape every aspect of how we build, grow, and create value."
  },
  
  // Principles (Edit principles here!)
  principles: [
    {
      icon: "Target",
      title: "Purpose-Driven",
      quote: "Every decision we make is guided by a clear purpose: to create meaningful impact.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Heart",
      title: "People First",
      quote: "Our greatest asset isn't our technology—it's the people who believe in our mission.",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: "Zap",
      title: "Continuous Innovation",
      quote: "The only constant is change, and we embrace it as an opportunity to evolve.",
      gradient: "from-yellow-500 to-orange-500"
    }
  ],
  
  // Main Statement
  mainStatement: {
    text: "These principles aren't just words on a wall—they're the foundation of every decision, every product, and every relationship we build. They remind us why we started and guide us toward where we're going.",
    author: "Founder"
  }
};

export default function Page() {
  const { colors, header, principles, mainStatement } = pageConfig;

  const iconMap = {
    Quote,
    Sparkles,
    ArrowRight,
    Heart,
    Target,
    Zap
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 mb-6"
          >
            {(() => {
              const SparklesIcon = iconMap[header.badge.icon];
              return <SparklesIcon className={`w-6 h-6 ${colors.badges.text}`} />;
            })()}
            <span className={`text-sm uppercase tracking-wider ${colors.badges.text} font-semibold`}>
              {header.badge.text}
            </span>
          </motion.div>
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            <span className={`block bg-clip-text text-transparent ${colors.gradients.title}`}>
              {header.title.line1}
            </span>
            <span className="block text-white">{header.title.line2}</span>
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {principles.map((principle, index) => {
            const Icon = iconMap[principle.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className={`relative ${colors.card} rounded-3xl p-8 ${colors.borders.default} hover:${colors.borders.hover} transition-all overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                    <div className="flex items-start gap-3 mb-6">
                      <Quote className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      <p className={`${colors.text.secondary} leading-relaxed italic`}>
                        "{principle.quote}"
                      </p>
                    </div>
                    <div className="flex items-center text-white/60 group-hover:text-white transition-colors">
                      <span className="text-sm mr-2">Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative ${colors.gradients.statement} backdrop-blur-md rounded-3xl p-12 md:p-16 ${colors.borders.default} overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-30">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 180, 90],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 text-center">
            <Quote className="w-16 h-16 mx-auto mb-8 text-white/30" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-5xl font-light leading-relaxed mb-8 max-w-4xl mx-auto"
            >
              "{mainStatement.text}"
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-4"
            >
              <div className="w-16 h-px bg-white/30" />
              <span className="text-lg font-semibold">{mainStatement.author}</span>
              <div className="w-16 h-px bg-white/30" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
