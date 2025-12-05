"use client";

import { motion } from "framer-motion";
import { Users, Award, Globe, Heart } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    gradients: {
      stats: "bg-gradient-to-br from-blue-50 to-indigo-50",
      mission: "bg-gradient-to-br from-purple-50 to-pink-50",
      vision: "bg-gradient-to-br from-blue-50 to-cyan-50",
      icon: {
        stats: "bg-blue-600"
      }
    }
  },
  
  // Page Header
  page: {
    title: "About Us",
    description: "We are a leading e-commerce platform dedicated to providing the best products and services to our customers worldwide."
  },
  
  // Stats (Edit stats here!)
  stats: [
    { icon: "Users", value: "10K+", label: "Happy Customers" },
    { icon: "Award", value: "500+", label: "Awards Won" },
    { icon: "Globe", value: "50+", label: "Countries" },
    { icon: "Heart", value: "99%", label: "Satisfaction Rate" }
  ],
  
  // Mission & Vision
  mission: {
    title: "Our Mission",
    description: "To provide exceptional products and services that enhance the lives of our customers while maintaining the highest standards of quality and customer satisfaction."
  },
  
  vision: {
    title: "Our Vision",
    description: "To become the world's most trusted and innovative e-commerce platform, setting new standards in customer experience and product excellence."
  }
};

export default function Page() {
  const { colors, page, stats, mission, vision } = pageConfig;

  const iconMap = {
    Users,
    Award,
    Globe,
    Heart
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold ${colors.text.primary} mb-6`}>{page.title}</h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto`}>
            {page.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-6 ${colors.gradients.stats} rounded-2xl`}
              >
                <div className={`inline-block p-4 ${colors.gradients.icon.stats} rounded-full mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold ${colors.text.primary} mb-2`}>{stat.value}</div>
                <div className={colors.text.secondary}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${colors.gradients.mission} rounded-2xl p-8`}
          >
            <h2 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{mission.title}</h2>
            <p className={`${colors.text.secondary} leading-relaxed`}>
              {mission.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${colors.gradients.vision} rounded-2xl p-8`}
          >
            <h2 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{vision.title}</h2>
            <p className={`${colors.text.secondary} leading-relaxed`}>
              {vision.description}
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
