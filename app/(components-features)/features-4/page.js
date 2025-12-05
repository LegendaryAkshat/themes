"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Globe, Users, TrendingUp } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900",
    card: "bg-white/10 backdrop-blur-xl",
    text: {
      primary: "text-white",
      secondary: "text-purple-200"
    },
    borders: {
      default: "border-white/20",
      hover: "border-white/40"
    },
    gradients: {
      title: "bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
    }
  },
  
  // Page Header
  header: {
    title: "Built for Excellence",
    description: "Experience the power of thoughtfully crafted features designed to elevate your workflow"
  },
  
  // Stats (Edit stats here!)
  stats: [
    { icon: "Users", value: "10M+", label: "Active Users", gradient: "from-blue-500 to-cyan-500" },
    { icon: "Globe", value: "150+", label: "Countries", gradient: "from-green-500 to-emerald-500" },
    { icon: "TrendingUp", value: "99.9%", label: "Uptime", gradient: "from-purple-500 to-pink-500" },
    { icon: "Shield", value: "256-bit", label: "Encryption", gradient: "from-orange-500 to-red-500" }
  ],
  
  // Highlights (Edit highlights here!)
  highlights: [
    {
      icon: "Sparkles",
      title: "Innovation First",
      description: "Cutting-edge technology that adapts to your needs",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: "Zap",
      title: "Lightning Speed",
      description: "Optimized for performance and instant responsiveness",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: "Shield",
      title: "Trusted Security",
      description: "Enterprise-grade protection for your peace of mind",
      gradient: "from-green-400 to-teal-500"
    }
  ],
  
  // Grid Configuration
  grid: {
    stats: {
      columns: {
        mobile: "grid-cols-2",
        desktop: "md:grid-cols-4"
      },
      gap: "gap-6"
    },
    highlights: {
      columns: {
        mobile: "grid-cols-1",
        desktop: "md:grid-cols-3"
      },
      gap: "gap-8"
    }
  }
};

export default function Page() {
  const { colors, header, stats, highlights, grid } = pageConfig;

  const iconMap = {
    Sparkles,
    Zap,
    Shield,
    Globe,
    Users,
    TrendingUp
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className={`text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent ${colors.gradients.title}`}>
            {header.title}
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className={`grid ${grid.stats.columns.mobile} ${grid.stats.columns.desktop} ${grid.stats.gap} mb-20`}>
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`${colors.card} rounded-2xl p-6 ${colors.borders.default} text-center`}
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className={`${colors.text.secondary} text-sm`}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className={`grid ${grid.highlights.columns.mobile} ${grid.highlights.columns.desktop} ${grid.highlights.gap}`}>
          {highlights.map((highlight, index) => {
            const Icon = iconMap[highlight.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`${colors.card} rounded-3xl p-8 ${colors.borders.default} hover:${colors.borders.hover} transition-all`}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
                <p className={`${colors.text.secondary} leading-relaxed`}>{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
