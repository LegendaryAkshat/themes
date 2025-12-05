"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight, Lightbulb, Rocket, Users } from "lucide-react";

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
      quote: "text-gray-700"
    },
    badges: {
      background: "bg-blue-50",
      text: "text-blue-600"
    },
    gradients: {
      title: "bg-gradient-to-r from-blue-600 to-purple-600",
      quote: "bg-gradient-to-r from-blue-600 to-purple-600"
    }
  },
  
  // Page Header
  header: {
    badge: "Founder's Perspective",
    title: {
      line1: "Insights That",
      line2: "Drive Innovation"
    },
    description: "Three fundamental principles that have guided our journey from concept to reality."
  },
  
  // Insights (Edit insights here!)
  insights: [
    {
      icon: "Lightbulb",
      title: "The Spark",
      quote: "The best ideas don't come from boardrooms—they come from understanding real problems and having the audacity to solve them differently.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: "Rocket",
      title: "The Launch",
      quote: "Starting is easy. Persisting through uncertainty, learning from failures, and staying true to your vision—that's where the real work begins.",
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      icon: "Users",
      title: "The Community",
      quote: "We don't build products for customers. We build experiences with people who share our passion for excellence and innovation.",
      gradient: "from-purple-400 to-pink-500"
    }
  ],
  
  // Main Quote
  mainQuote: {
    text: "Building something meaningful requires more than ambition—it demands resilience, empathy, and an unwavering commitment to creating value that extends beyond profit.",
    author: "Founder & CEO"
  }
};

export default function Page() {
  const { colors, header, insights, mainQuote } = pageConfig;

  const iconMap = {
    Quote,
    ArrowRight,
    Lightbulb,
    Rocket,
    Users
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => {
            const Icon = iconMap[insight.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative ${colors.card} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className={`w-16 h-16 bg-gradient-to-br ${insight.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>{insight.title}</h3>
                <div className="flex items-start gap-3 mb-6">
                  <Quote className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                  <p className={`${colors.text.quote} leading-relaxed italic`}>
                    "{insight.quote}"
                  </p>
                </div>

                <div className={`flex items-center ${colors.badges.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
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

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-8 text-white/30" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-light leading-relaxed mb-8"
            >
              "{mainQuote.text}"
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-12 h-0.5 bg-white/30" />
              <span className="text-lg font-semibold">{mainQuote.author}</span>
              <div className="w-12 h-0.5 bg-white/30" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
