"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles, ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const benefits = [
    "Exclusive early access to new products",
    "Special member-only discounts",
    "Weekly curated recommendations",
    "First to know about sales and events"
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Side - Content */}
              <div className="p-8 md:p-12 lg:p-16 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-semibold">Join Our Community</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                    Stay Connected
                  </h2>
                  
                  <p className="text-indigo-100 text-lg mb-8 leading-relaxed">
                    Be the first to discover new arrivals, exclusive offers, and insider updates delivered directly to your inbox.
                  </p>

                  <div className="space-y-4 mb-8">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-4 h-4" />
                        </div>
                        <span className="text-indigo-50">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right Side - Form */}
              <div className="p-8 md:p-12 lg:p-16 flex items-center">
                {!submitted ? (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="w-full"
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        Subscribe Now
                      </h3>
                      <p className="text-gray-600">
                        Enter your email to get started
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
                          placeholder="your.email@example.com"
                          required
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all text-gray-900"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        Subscribe
                        <ArrowRight className="w-5 h-5" />
                      </motion.button>
                    </form>

                    <p className="text-xs text-gray-500 mt-4 text-center">
                      We respect your privacy. Unsubscribe at any time.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center w-full"
                  >
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Welcome Aboard!
                    </h3>
                    <p className="text-gray-600">
                      Check your inbox for a confirmation email.
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

