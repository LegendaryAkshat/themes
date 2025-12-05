"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles, Heart, Target, Zap, Users } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-50 via-white to-indigo-50/30",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    badges: {
      icon: "text-indigo-600",
      text: "text-indigo-600"
    },
    gradients: {
      title: "bg-gradient-to-r from-indigo-600 to-purple-600",
      quote: "bg-gradient-to-r from-indigo-600 to-purple-600"
    }
  },
  
  // Page Header
  header: {
    badge: {
      text: "Our Foundation",
      icon: "Sparkles"
    },
    title: {
      line1: "Beliefs That",
      line2: "Define Us"
    },
    description: "Six core beliefs that shape our culture, guide our decisions, and inspire our work."
  },
  
  // Beliefs (Edit beliefs here!)
  beliefs: [
    {
      icon: "Heart",
      title: "Human-Centered",
      description: "People are at the heart of everything we do. We prioritize understanding, empathy, and genuine care.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: "Target",
      title: "Purpose-Driven",
      description: "Every action is guided by a clear purpose: to create meaningful impact and lasting value.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Zap",
      title: "Action-Oriented",
      description: "We believe in moving forward, taking calculated risks, and learning through doing.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "Users",
      title: "Collaborative",
      description: "Together we achieve more. We value diverse perspectives and shared success.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: "Target",
      title: "Excellence",
      description: "We pursue the highest standards, knowing that excellence is a journey, not a destination.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: "Heart",
      title: "Integrity",
      description: "Honesty, transparency, and ethical behavior guide every decision we make.",
      gradient: "from-indigo-500 to-blue-500"
    }
  ],
  
  // Main Quote
  quote: {
    text: "These beliefs aren't just ideals—they're the principles we live by, the standards we hold ourselves to, and the foundation of everything we build together.",
    label: "Our Promise"
  }
};

export default function Page() {
  const { colors, header, beliefs, quote } = pageConfig;

  const iconMap = {
    Quote,
    Sparkles,
    Heart,
    Target,
    Zap,
    Users
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 mb-6"
          >
            {(() => {
              const SparklesIcon = iconMap[header.badge.icon];
              return <SparklesIcon className={`w-6 h-6 ${colors.badges.icon}`} />;
            })()}
            <span className={`text-sm uppercase tracking-wider ${colors.badges.text} font-semibold`}>
              {header.badge.text}
            </span>
          </motion.div>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {beliefs.map((belief, index) => {
            const Icon = iconMap[belief.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative ${colors.card} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden`}
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
                  <p className={`${colors.text.secondary} leading-relaxed`}>{belief.description}</p>

                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${belief.gradient} transition-all duration-500 rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative ${colors.gradients.quote} rounded-3xl p-12 md:p-16 text-white overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <Quote className="w-16 h-16 mx-auto mb-8 text-white/30" />
            <p className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
              "{quote.text}"
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-white/30" />
              <span className="text-lg font-semibold">{quote.label}</span>
              <div className="w-16 h-px bg-white/30" />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
