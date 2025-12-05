"use client";

import { motion } from "framer-motion";
import { Heart, Target, Zap, Users, CheckCircle2 } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    badges: {
      background: "bg-indigo-50",
      text: "text-indigo-600"
    },
    gradients: {
      title: "bg-gradient-to-r from-indigo-600 to-purple-600",
      manifesto: "bg-gradient-to-r from-indigo-50 to-purple-50",
      closing: "bg-gradient-to-r from-indigo-600 to-purple-600"
    },
    check: {
      icon: "text-indigo-600"
    }
  },
  
  // Page Header
  header: {
    badge: "Our Manifesto",
    title: {
      line1: "What We",
      line2: "Stand For"
    },
    description: "A declaration of our beliefs, values, and commitments to our community and the world."
  },
  
  // Manifesto Statements (Edit manifesto here!)
  manifesto: [
    {
      icon: "Heart",
      statement: "We believe in the power of human connection and the impact of genuine relationships.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: "Target",
      statement: "We believe that purpose-driven work creates more value than profit-driven decisions alone.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: "Zap",
      statement: "We believe in moving fast, learning faster, and building solutions that truly matter.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "Users",
      statement: "We believe that diverse perspectives and collaborative efforts lead to breakthrough innovations.",
      gradient: "from-purple-500 to-pink-500"
    }
  ],
  
  // Commitments (Edit commitments here!)
  commitments: [
    "Transparency in all our communications",
    "Ethical practices in every decision",
    "Continuous learning and improvement",
    "Supporting our community and giving back",
    "Environmental responsibility",
    "Creating inclusive environments"
  ],
  
  // Bottom Statement
  bottomStatement: {
    text: "These beliefs and commitments guide us every day, in every decision, as we work to create something meaningful together."
  }
};

export default function Page() {
  const { colors, header, manifesto, commitments, bottomStatement } = pageConfig;

  const iconMap = {
    Heart,
    Target,
    Zap,
    Users,
    CheckCircle2
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
            <span className={`block text-transparent bg-clip-text ${colors.gradients.title}`}>
              {header.title.line2}
            </span>
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {manifesto.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-10 text-white shadow-2xl overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <p className="text-2xl font-light leading-relaxed">
                    {item.statement}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${colors.gradients.manifesto} rounded-3xl p-12`}
        >
          <h3 className={`text-3xl font-bold ${colors.text.primary} mb-8 text-center`}>
            Our Commitments
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-start gap-3 ${colors.card} rounded-xl p-4 shadow-sm`}
              >
                <CheckCircle2 className={`w-6 h-6 ${colors.check.icon} flex-shrink-0 mt-0.5`} />
                <span className={`${colors.text.primary} font-medium`}>{commitment}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className={`inline-block ${colors.gradients.closing} rounded-2xl p-8 text-white shadow-2xl`}>
            <p className="text-2xl font-light leading-relaxed max-w-3xl">
              {bottomStatement.text}
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
