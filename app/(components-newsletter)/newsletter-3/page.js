"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50",
    card: "bg-white",
    text: {
      primary: "text-white",
      secondary: "text-indigo-100",
      form: "text-gray-900"
    },
    borders: {
      default: "border-gray-100",
      badge: "bg-white/20 backdrop-blur-sm"
    },
    buttons: {
      primary: "bg-white text-indigo-600 hover:bg-indigo-50",
      submit: "bg-indigo-600 hover:bg-indigo-700 text-white"
    },
    gradients: {
      left: "bg-gradient-to-br from-indigo-600 to-purple-600",
      check: "bg-white/20 backdrop-blur-sm"
    }
  },
  
  // Content
  content: {
    badge: {
      text: "Join Our Community",
      icon: "Sparkles"
    },
    title: "Stay Connected",
    description: "Be the first to discover new arrivals, exclusive offers, and insider updates delivered directly to your inbox.",
    benefits: [
      "Exclusive early access to new products",
      "Special member-only discounts",
      "Weekly curated recommendations",
      "First to know about sales and events"
    ],
    form: {
      title: "Subscribe Now",
      description: "Enter your email to get started",
      placeholder: "your.email@example.com",
      submitButton: {
        text: "Subscribe",
        icon: "ArrowRight"
      }
    },
    success: {
      title: "Thank You!",
      message: "You've been successfully subscribed to our newsletter."
    }
  }
};

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { colors, content } = pageConfig;

  const iconMap = {
    Mail,
    Sparkles,
    ArrowRight,
    Check
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className={`${colors.card} rounded-3xl shadow-2xl overflow-hidden ${colors.borders.default}`}>
            <div className="grid md:grid-cols-2 gap-0">
              <div className={`p-8 md:p-12 lg:p-16 ${colors.gradients.left} ${colors.text.primary}`}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className={`inline-flex items-center gap-2 ${colors.borders.badge} px-4 py-2 rounded-full mb-6`}>
                    {(() => {
                      const SparklesIcon = iconMap[content.badge.icon];
                      return <SparklesIcon className="w-4 h-4" />;
                    })()}
                    <span className="text-sm font-semibold">{content.badge.text}</span>
                  </div>
                  
                  <h2 className={`text-4xl md:text-5xl font-bold mb-6 leading-tight`}>
                    {content.title}
                  </h2>
                  
                  <p className={`${colors.text.secondary} text-lg mb-8 leading-relaxed`}>
                    {content.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    {content.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <div className={`w-6 h-6 ${colors.gradients.check} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-4 h-4" />
                        </div>
                        <span className={colors.text.secondary}>{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="p-8 md:p-12 lg:p-16 flex items-center">
                {!submitted ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="w-full"
                  >
                    <div className="mb-6">
                      <h3 className={`text-2xl font-bold ${colors.text.form} mb-2`}>
                        {content.form.title}
                      </h3>
                      <p className={colors.text.form}>
                        {content.form.description}
                      </p>
                    </div>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        setSubmitted(true);
                      }}
                      className="space-y-6"
                    >
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={content.form.placeholder}
                          required
                          className={`w-full pl-12 pr-4 py-4 border ${colors.borders.default} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 ${colors.text.form}`}
                        />
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`w-full ${colors.buttons.submit} py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2`}
                      >
                        {content.form.submitButton.text}
                        {(() => {
                          const ArrowIcon = iconMap[content.form.submitButton.icon];
                          return <ArrowIcon className="w-5 h-5" />;
                        })()}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center w-full"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className={`text-2xl font-bold ${colors.text.form} mb-2`}>
                      {content.success.title}
                    </h3>
                    <p className={colors.text.form}>
                      {content.success.message}
                    </p>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
