"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900",
    card: "bg-white/10 backdrop-blur-md",
    text: {
      primary: "text-white",
      secondary: "text-cyan-300",
      light: "text-cyan-200",
      accent: "text-cyan-100"
    },
    borders: {
      default: "border-white/20",
      hover: "border-white/40"
    },
    badges: {
      background: "bg-cyan-900/30 backdrop-blur-sm",
      border: "border-cyan-500/30",
      text: "text-cyan-300"
    }
  },
  
  // Page Header
  header: {
    badge: {
      text: "Our Foundation",
      icon: "Sparkles"
    },
    title: "Values in Action",
    description: "How our core values translate into daily practices and long-term commitments."
  },
  
  // Values (Edit values here!)
  values: [
    {
      title: "Transparency",
      principles: [
        "Open communication at all levels",
        "Honest about challenges and opportunities",
        "Clear expectations and feedback"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Accountability",
      principles: [
        "Own our actions and outcomes",
        "Learn from mistakes and improve",
        "Deliver on commitments consistently"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Empowerment",
      principles: [
        "Trust and support our team",
        "Encourage autonomy and initiative",
        "Invest in growth and development"
      ],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Respect",
      principles: [
        "Value diverse perspectives",
        "Treat everyone with dignity",
        "Create inclusive environments"
      ],
      gradient: "from-green-500 to-emerald-500"
    }
  ],
  
  // Closing Statement
  statement: {
    text: "These values guide every decision, shape our culture, and define our commitment to excellence."
  }
};

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const { colors, header, values, statement } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={containerRef}
        style={{ opacity, scale }}
        className="px-6 py-24 max-w-7xl mx-auto"
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
            className={`inline-flex items-center gap-2 ${colors.badges.text} ${colors.badges.background} px-6 py-3 rounded-full mb-6 border ${colors.badges.border}`}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">{header.badge.text}</span>
          </motion.div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white`}>
            {header.title}
          </h1>
          <p className={`text-xl ${colors.text.light} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative ${colors.card} rounded-3xl p-8 border ${colors.borders.default} hover:${colors.borders.hover} transition-all overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">{value.title}</h3>
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                </div>

                <ul className="space-y-4 mb-6">
                  {value.principles.map((principle, pIndex) => (
                    <motion.li
                      key={pIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + pIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`w-6 h-6 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                        <div className="w-2 h-2 bg-white rounded-full" />
                      </div>
                      <span className={`${colors.text.accent} leading-relaxed`}>{principle}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className={`flex items-center ${colors.text.secondary} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-sm mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className={`inline-block ${colors.card} px-8 py-6 rounded-2xl border ${colors.borders.default}`}>
            <p className={`text-lg ${colors.text.accent}`}>
              {statement.text}
            </p>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
