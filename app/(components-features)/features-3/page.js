"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      link: "text-blue-600 hover:text-blue-700"
    },
    borders: {
      default: "border-gray-100"
    },
    gradients: {
      icon: "bg-gradient-to-br from-blue-500 to-purple-600",
      bullet: "bg-blue-500"
    }
  },
  
  // Page Header
  header: {
    title: "Powerful Features",
    description: "Everything you need to succeed, all in one place"
  },
  
  // Features (Edit features here!)
  features: [
    {
      title: "Advanced Analytics",
      description: "Comprehensive insights and data visualization tools to track your performance",
      benefits: ["Real-time metrics", "Custom dashboards", "Export reports"]
    },
    {
      title: "Seamless Integration",
      description: "Connect with your favorite tools and services effortlessly",
      benefits: ["API access", "Webhook support", "Third-party apps"]
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security measures to protect your sensitive information",
      benefits: ["End-to-end encryption", "SSO support", "Audit logs"]
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      desktop: "lg:grid-cols-3"
    },
    gap: "gap-8"
  }
};

export default function Page() {
  const { colors, header, features, grid } = pageConfig;

  const FeatureCard = ({ feature, index }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        className={`${colors.card} rounded-2xl p-8 shadow-xl ${colors.borders.default} hover:shadow-2xl transition-shadow`}
      >
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-12 h-12 ${colors.gradients.icon} rounded-xl flex items-center justify-center flex-shrink-0`}>
            <CheckCircle2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className={`text-2xl font-bold ${colors.text.primary} mb-2`}>{feature.title}</h3>
            <p className={`${colors.text.secondary} leading-relaxed`}>{feature.description}</p>
          </div>
        </div>

        <ul className="space-y-3 mb-6">
          {feature.benefits.map((benefit, i) => (
            <li key={i} className="flex items-center gap-3 text-gray-700">
              <div className={`w-2 h-2 ${colors.gradients.bullet} rounded-full`}></div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>

        <motion.a
          href="#"
          whileHover={{ x: 5 }}
          className={`inline-flex items-center gap-2 ${colors.text.link} font-semibold transition-colors`}
        >
          Learn more
          <ArrowRight className="w-4 h-4" />
        </motion.a>
      </motion.div>
    );
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

        <div className={`grid ${grid.columns.mobile} ${grid.columns.desktop} ${grid.gap}`}>
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
