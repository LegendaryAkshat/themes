"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: {
      gradient: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600",
      icon: "bg-white/20 backdrop-blur-sm",
      success: "bg-white"
    },
    text: {
      primary: "text-white",
      secondary: "text-white/90",
      tertiary: "text-white/80",
      success: "text-green-600",
      input: "text-gray-900",
      placeholder: "text-gray-500"
    },
    buttons: {
      submit: "bg-white text-blue-600 hover:bg-gray-100"
    },
    borders: {
      input: "border-0 focus:ring-2 focus:ring-white/50"
    }
  },
  
  // Content
  content: {
    title: "Don't miss out",
    description: "Be the first one to get the new product at early bird prices.",
    footer: "Sign up for early Sale access plus tailored new arrivals, trends and promotions.",
    success: "✓ You have successfully subscribed!",
    placeholder: "Enter your email",
    buttonText: "Subscribe"
  }
};

export default function Page() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { colors, content } = pageConfig;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 3000);
    }
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`${colors.card.gradient} rounded-3xl p-12 text-center relative overflow-hidden`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }} />
          </div>

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className={`w-20 h-20 ${colors.card.icon} rounded-full flex items-center justify-center`}>
                <Mail className={`w-10 h-10 ${colors.text.primary}`} />
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-4`}
            >
              {content.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className={`text-xl ${colors.text.secondary} mb-8`}
            >
              {content.description}
            </motion.p>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`${colors.card.success} rounded-lg p-6 inline-block`}
              >
                <p className={`${colors.text.success} font-semibold text-lg`}>
                  {content.success}
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto flex gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={content.placeholder}
                  required
                  className={`flex-1 px-6 py-4 rounded-lg ${colors.borders.input} focus:outline-none ${colors.text.input} ${colors.text.placeholder}`}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${colors.buttons.submit} px-8 py-4 rounded-lg font-semibold transition-colors flex items-center gap-2`}
                >
                  <span>{content.buttonText}</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </motion.form>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className={`${colors.text.tertiary} text-sm mt-6`}
            >
              {content.footer}
            </motion.p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

