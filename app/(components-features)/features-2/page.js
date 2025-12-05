"use client";

import { motion } from "framer-motion";
import { Shield, Truck, Headphones, Award, Zap, Lock } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-100"
    }
  },
  
  // Page Header
  header: {
    title: "Why Choose Us",
    description: "Experience the difference with features designed to elevate your journey"
  },
  
  // Features (Edit features here!)
  features: [
    {
      icon: "Shield",
      title: "Secure Payments",
      description: "Bank-level encryption ensures your transactions are always protected",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: "Truck",
      title: "Fast Delivery",
      description: "Express shipping available with real-time tracking for all orders",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: "Headphones",
      title: "24/7 Support",
      description: "Round-the-clock assistance from our dedicated customer care team",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: "Award",
      title: "Quality Guarantee",
      description: "Rigorous quality control ensures every product meets our high standards",
      gradient: "from-amber-500 to-amber-600"
    },
    {
      icon: "Zap",
      title: "Lightning Fast",
      description: "Optimized performance for the fastest possible experience",
      gradient: "from-yellow-500 to-yellow-600"
    },
    {
      icon: "Lock",
      title: "Privacy Protected",
      description: "Your data is safeguarded with industry-leading privacy practices",
      gradient: "from-red-500 to-red-600"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "md:grid-cols-2",
      desktop: "lg:grid-cols-3"
    },
    gap: "gap-8"
  }
};

export default function Page() {
  const { colors, header, features, grid } = pageConfig;

  const iconMap = {
    Shield,
    Truck,
    Headphones,
    Award,
    Zap,
    Lock
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold ${colors.text.primary} mb-4`}>
            {header.title}
          </h1>
          <p className={`text-lg ${colors.text.secondary} max-w-2xl mx-auto`}>
            {header.description}
          </p>
        </motion.div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative ${colors.card} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all ${colors.borders.default}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`} />
                
                <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className={`text-xl font-bold ${colors.text.primary} mb-3 group-hover:text-blue-600 transition-colors`}>
                  {feature.title}
                </h3>
                <p className={`${colors.text.secondary} leading-relaxed`}>
                  {feature.description}
                </p>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
