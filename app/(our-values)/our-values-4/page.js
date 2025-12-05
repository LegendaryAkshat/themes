"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

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
      secondary: "text-gray-600",
      accent: "text-indigo-600"
    },
    badges: {
      text: "text-indigo-600"
    },
    statement: {
      background: "bg-gradient-to-r from-indigo-600 to-purple-600",
      text: "text-white"
    }
  },
  
  // Page Header
  header: {
    badge: {
      text: "Our Commitment",
      icon: "Sparkles"
    },
    title: {
      line1: "Values That",
      line2: "Shape Our Culture"
    },
    description: "Three pillars that define how we work, grow, and connect with each other and our community."
  },
  
  // Value Categories (Edit value categories here!)
  valueCategories: [
    {
      title: "How We Work",
      values: [
        { name: "Transparency", description: "Open communication and honest feedback" },
        { name: "Accountability", description: "Own our actions and outcomes" },
        { name: "Excellence", description: "Pursue the highest standards" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "How We Grow",
      values: [
        { name: "Innovation", description: "Embrace change and new ideas" },
        { name: "Learning", description: "Continuous improvement and development" },
        { name: "Adaptability", description: "Thrive in dynamic environments" }
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "How We Connect",
      values: [
        { name: "Respect", description: "Value every perspective" },
        { name: "Collaboration", description: "Together we achieve more" },
        { name: "Empathy", description: "Understand and support each other" }
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ],
  
  // Bottom Statement
  statement: {
    text: "\"These values aren't just words—they're the foundation of our culture, the guide for our decisions, and the promise we make to ourselves and our community.\"",
    author: "Leadership Team"
  }
};

export default function Page() {
  const { colors, header, valueCategories, statement } = pageConfig;

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
            <Sparkles className={`w-6 h-6 ${colors.badges.text}`} />
            <span className={`text-sm uppercase tracking-wider ${colors.badges.text} font-semibold`}>
              {header.badge.text}
            </span>
          </motion.div>
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.text.primary} mb-6`}>
            {header.title.line1}
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              {header.title.line2}
            </span>
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {valueCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative ${colors.card} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden`}
            >
              <div className={`h-2 bg-gradient-to-r ${category.gradient} mb-6 rounded-full`} />
              
              <h3 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>{category.title}</h3>

              <ul className="space-y-4 mb-6">
                {category.values.map((value, vIndex) => (
                  <motion.li
                    key={vIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 + vIndex * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className={`font-semibold ${colors.text.primary} mb-1`}>{value.name}</div>
                      <div className={`text-sm ${colors.text.secondary}`}>{value.description}</div>
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className={`flex items-center ${colors.text.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                <span className="text-sm font-semibold mr-2">Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`relative ${colors.statement.background} rounded-3xl p-12 md:p-16 ${colors.statement.text} overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
              {statement.text}
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-white/30" />
              <span className="text-lg font-semibold">{statement.author}</span>
              <div className="w-16 h-px bg-white/30" />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
