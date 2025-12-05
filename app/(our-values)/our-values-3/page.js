"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Zap, Users, Target, Award, ArrowRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-white",
      light: "text-white/90",
      accent: "text-white/80"
    },
    badges: {
      background: "bg-indigo-50",
      text: "text-indigo-600"
    }
  },
  
  // Page Header
  header: {
    badge: "What Drives Us",
    title: {
      line1: "Values That",
      line2: "Define Excellence"
    },
    description: "Six core values that shape our culture, guide our decisions, and inspire our team."
  },
  
  // Values (Edit values here!)
  values: [
    {
      icon: "Heart",
      title: "Empathy",
      description: "Understanding and sharing the feelings of others is at the heart of everything we do.",
      color: "from-rose-500 to-pink-500",
      stat: "100%"
    },
    {
      icon: "Shield",
      title: "Reliability",
      description: "Consistent delivery and unwavering commitment to our promises build lasting trust.",
      color: "from-blue-500 to-indigo-500",
      stat: "99.9%"
    },
    {
      icon: "Zap",
      title: "Agility",
      description: "Quick adaptation and responsive action in an ever-changing world.",
      color: "from-yellow-500 to-amber-500",
      stat: "24/7"
    },
    {
      icon: "Users",
      title: "Unity",
      description: "Stronger together—collaboration amplifies our individual strengths.",
      color: "from-purple-500 to-violet-500",
      stat: "500+"
    },
    {
      icon: "Target",
      title: "Precision",
      description: "Attention to detail and focused execution drive exceptional outcomes.",
      color: "from-green-500 to-teal-500",
      stat: "1000+"
    },
    {
      icon: "Award",
      title: "Excellence",
      description: "Pursuing the highest standards in every aspect of our work.",
      color: "from-orange-500 to-red-500",
      stat: "50+"
    }
  ]
};

export default function Page() {
  const { colors, header, values } = pageConfig;

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
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {header.title.line2}
            </span>
          </h1>
          <p className={`text-xl ${colors.text.primary} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br ${value.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-4xl font-bold text-white mb-1">{value.stat}</div>
                        <div className="text-sm text-white/80 font-medium">Impact</div>
                      </div>
                    </div>

                    <h3 className={`text-2xl font-bold ${colors.text.secondary} mb-4`}>{value.title}</h3>
                    <p className={`${colors.text.light} leading-relaxed mb-6`}>{value.description}</p>

                    <div className={`flex items-center ${colors.text.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <span className="text-sm font-semibold mr-2">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
