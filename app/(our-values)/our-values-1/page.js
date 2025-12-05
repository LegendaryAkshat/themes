"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Zap, Users, Target, Award } from "lucide-react";

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
      secondary: "text-gray-600",
      badge: "text-blue-600"
    },
    badges: {
      background: "bg-blue-50",
      text: "text-blue-600"
    }
  },
  
  // Page Header
  header: {
    badge: "What We Stand For",
    title: {
      line1: "Our",
      line2: "Core Values"
    },
    description: "The fundamental beliefs that guide our decisions, shape our culture, and define who we are."
  },
  
  // Values (Edit values here!)
  values: [
    {
      icon: "Heart",
      title: "Integrity",
      description: "We do what's right, even when no one is watching. Our word is our bond, and our actions reflect our character.",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: "Shield",
      title: "Trust",
      description: "Building lasting relationships through transparency, reliability, and consistent delivery on our promises.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "Zap",
      title: "Excellence",
      description: "We pursue perfection in every detail, knowing that greatness is found in the sum of small, intentional choices.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: "Users",
      title: "Collaboration",
      description: "Together we achieve more. We believe in the power of diverse perspectives and shared goals.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: "Target",
      title: "Purpose",
      description: "Every action is guided by our mission to create meaningful impact and lasting value.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "Award",
      title: "Innovation",
      description: "We embrace change, challenge conventions, and continuously seek better ways to solve problems.",
      color: "from-pink-500 to-rose-500"
    }
  ],
  
  // Bottom Statement
  statement: {
    text: "These values aren't just ideals—they're the foundation of everything we do, from how we work together to how we serve our community."
  }
};

export default function Page() {
  const { colors, header, values, statement } = pageConfig;

  const iconMap = {
    Heart,
    Shield,
    Zap,
    Users,
    Target,
    Award
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
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {header.title.line2}
            </span>
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon];
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
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>{value.title}</h3>
                  <p className={`${colors.text.secondary} leading-relaxed`}>
                    {value.description}
                  </p>

                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${value.color} transition-all duration-500 rounded-full`} />
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
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <p className="text-2xl font-light leading-relaxed max-w-3xl">
              {statement.text}
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
