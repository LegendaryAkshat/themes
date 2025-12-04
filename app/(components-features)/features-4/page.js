"use client";

import { motion } from "framer-motion";
import { Sparkles, Zap, Shield, Globe, Users, TrendingUp } from "lucide-react";

export default function Page() {
  const stats = [
    { icon: Users, value: "10M+", label: "Active Users", color: "from-blue-500 to-cyan-500" },
    { icon: Globe, value: "150+", label: "Countries", color: "from-green-500 to-emerald-500" },
    { icon: TrendingUp, value: "99.9%", label: "Uptime", color: "from-purple-500 to-pink-500" },
    { icon: Shield, value: "256-bit", label: "Encryption", color: "from-orange-500 to-red-500" }
  ];

  const highlights = [
    {
      icon: Sparkles,
      title: "Innovation First",
      description: "Cutting-edge technology that adapts to your needs",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Zap,
      title: "Lightning Speed",
      description: "Optimized for performance and instant responsiveness",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Shield,
      title: "Trusted Security",
      description: "Enterprise-grade protection for your peace of mind",
      gradient: "from-green-400 to-teal-500"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Built for Excellence
          </h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Experience the power of thoughtfully crafted features designed to elevate your workflow
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center"
              >
                <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-200 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${highlight.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{highlight.title}</h3>
                <p className="text-purple-200 leading-relaxed">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

