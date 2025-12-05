"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Rocket, CheckCircle2 } from "lucide-react";

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
      features: "bg-gradient-to-r from-indigo-50 to-purple-50",
      closing: "bg-gradient-to-r from-indigo-600 to-purple-600"
    },
    check: {
      icon: "text-indigo-600"
    }
  },
  
  // Page Header
  header: {
    badge: "What's Included",
    title: {
      line1: "Everything You Need",
      line2: "To Succeed"
    },
    description: "A complete suite of tools, support, and resources designed for your success."
  },
  
  // Main Offerings (Edit offerings here!)
  offerings: [
    {
      icon: "Zap",
      title: "Speed & Performance",
      description: "Lightning-fast response times and optimized performance for seamless experiences.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: "Shield",
      title: "Security & Compliance",
      description: "Enterprise-grade security with industry-leading compliance standards.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: "Users",
      title: "Team Collaboration",
      description: "Tools and features designed to enhance teamwork and productivity.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: "Rocket",
      title: "Scalability",
      description: "Grow without limits with infrastructure that scales with your needs.",
      gradient: "from-green-500 to-emerald-500"
    }
  ],
  
  // Additional Features (Edit features here!)
  features: [
    "Advanced analytics and insights",
    "Custom integrations available",
    "Regular feature updates",
    "Comprehensive documentation",
    "Multi-language support",
    "Mobile and desktop access"
  ],
  
  // CTA Section
  cta: {
    text: "Experience the difference. Start your journey with us today.",
    buttonText: "Explore Our Solutions"
  }
};

export default function Page() {
  const { colors, header, offerings, features, cta } = pageConfig;

  const iconMap = {
    Zap,
    Shield,
    Users,
    Rocket,
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
          {offerings.map((offering, index) => {
            const Icon = iconMap[offering.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${offering.gradient} rounded-3xl p-10 text-white shadow-2xl overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{offering.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{offering.description}</p>
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
          className={`${colors.gradients.features} rounded-3xl p-12`}
        >
          <h3 className={`text-3xl font-bold ${colors.text.primary} mb-8 text-center`}>
            Additional Features & Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-3 ${colors.card} rounded-xl p-4 shadow-sm`}
              >
                <CheckCircle2 className={`w-6 h-6 ${colors.check.icon} flex-shrink-0`} />
                <span className={`${colors.text.primary} font-medium`}>{feature}</span>
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
            <p className={`text-2xl font-light leading-relaxed max-w-3xl mb-6`}>
              {cta.text}
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {cta.buttonText}
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
