"use client";

import { motion } from "framer-motion";
import { Heart, Target, Zap, Users, CheckCircle2 } from "lucide-react";

export default function Page() {
  const manifesto = [
    {
      icon: Heart,
      statement: "We believe in the power of human connection and the impact of genuine relationships.",
      gradient: "from-rose-500 to-pink-500"
    },
    {
      icon: Target,
      statement: "We believe that purpose-driven work creates more value than profit-driven decisions alone.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Zap,
      statement: "We believe in moving fast, learning faster, and building solutions that truly matter.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Users,
      statement: "We believe that diverse perspectives and collaborative efforts lead to breakthrough innovations.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const commitments = [
    "Transparency in all our communications",
    "Ethical practices in every decision",
    "Continuous learning and improvement",
    "Supporting our community and giving back",
    "Environmental responsibility",
    "Creating inclusive environments"
  ];

  return (
    <main className="min-h-screen w-full bg-white">
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
            className="inline-block text-sm uppercase tracking-wider text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full font-semibold mb-6"
          >
            Our Manifesto
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            What We
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Stand For
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A declaration of our beliefs, values, and commitments to our community and the world.
          </p>
        </motion.div>

        {/* Manifesto Statements */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {manifesto.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-10 text-white shadow-2xl overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <p className="text-2xl font-light leading-relaxed">
                    {item.statement}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Commitments
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-800 font-medium">{commitment}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <p className="text-2xl font-light leading-relaxed max-w-3xl">
              These beliefs and commitments guide us every day, in every decision, 
              as we work to create something meaningful together.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

