"use client";

import { motion } from "framer-motion";
import { Heart, Target, Sparkles, ArrowRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    badges: {
      background: "bg-blue-50",
      text: "text-blue-600"
    },
    gradients: {
      title: "bg-gradient-to-r from-blue-600 to-purple-600",
      hover: "text-blue-600"
    }
  },
  
  // Page Header
  header: {
    badge: "Our Philosophy",
    title: {
      line1: "What We",
      line2: "Believe In"
    },
    description: "The core beliefs that guide our decisions, shape our culture, and define our commitment to excellence."
  },
  
  // Beliefs (Edit beliefs here!)
  beliefs: [
    {
      icon: "Heart",
      title: "People First",
      statement: "We believe that success is built on genuine relationships, mutual respect, and putting people at the center of everything we do.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: "Target",
      title: "Purpose-Driven",
      statement: "Every action we take is guided by a clear purpose: to create meaningful impact and lasting value for our community.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Sparkles",
      title: "Continuous Growth",
      statement: "We embrace learning, adapt to change, and continuously evolve to meet the challenges and opportunities ahead.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: "Heart",
      title: "Integrity Always",
      statement: "Honesty, transparency, and ethical behavior are non-negotiable. We do what's right, even when it's difficult.",
      gradient: "from-green-500 to-emerald-500"
    }
  ],
  
  // Hover Action
  hoverAction: {
    text: "Learn more",
    icon: "ArrowRight",
    enabled: true
  }
};

export default function Page() {
  const { colors, header, beliefs, hoverAction } = pageConfig;

  const iconMap = {
    Heart,
    Target,
    Sparkles,
    ArrowRight
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className={`inline-block text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-4 py-2 rounded-full font-semibold mb-6`}
          >
            {header.badge}
          </motion.span>
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.text.primary} mb-6`}>
            {header.title.line1}
            <span className={`block bg-clip-text text-transparent ${colors.gradients.title}`}>
              {header.title.line2}
            </span>
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {beliefs.map((belief, index) => {
            const Icon = iconMap[belief.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${belief.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${belief.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>{belief.title}</h3>
                  <p className={`${colors.text.secondary} leading-relaxed mb-6`}>{belief.statement}</p>

                  {hoverAction.enabled && (
                    <div className={`flex items-center ${colors.gradients.hover} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <span className="text-sm font-semibold mr-2">{hoverAction.text}</span>
                      {(() => {
                        const ArrowRightIcon = iconMap[hoverAction.icon];
                        return <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />;
                      })()}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
