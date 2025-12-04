"use client";

import { motion } from "framer-motion";
import { Heart, Target, Sparkles, ArrowRight } from "lucide-react";

export default function Page() {
  const beliefs = [
    {
      icon: Heart,
      title: "People First",
      statement: "We believe that success is built on genuine relationships, mutual respect, and putting people at the center of everything we do.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Target,
      title: "Purpose-Driven",
      statement: "Every action we take is guided by a clear purpose: to create meaningful impact and lasting value for our community.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Sparkles,
      title: "Continuous Growth",
      statement: "We embrace learning, adapt to change, and continuously evolve to meet the challenges and opportunities ahead.",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Heart,
      title: "Integrity Always",
      statement: "Honesty, transparency, and ethical behavior are non-negotiable. We do what's right, even when it's difficult.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <section className="px-6 py-24 max-w-7xl mx-auto">
        {/* Header */}
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
            className="inline-block text-sm uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-2 rounded-full font-semibold mb-6"
          >
            Our Philosophy
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            What We
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Believe In
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            The core beliefs that guide our decisions, shape our culture, and define our commitment to excellence.
          </p>
        </motion.div>

        {/* Beliefs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {beliefs.map((belief, index) => {
            const Icon = belief.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${belief.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${belief.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{belief.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{belief.statement}</p>

                  {/* Hover Indicator */}
                  <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-semibold mr-2">Learn more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Statement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-white overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center max-w-4xl mx-auto">
            <p className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
              "These beliefs aren't just words on a page—they're the foundation of our culture, 
              the compass that guides our decisions, and the promise we make to ourselves and our community."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-white/30" />
              <span className="text-lg font-semibold">Our Commitment</span>
              <div className="w-16 h-px bg-white/30" />
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

