"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Rocket, CheckCircle2 } from "lucide-react";

export default function Page() {
  const offerings = [
    {
      icon: Zap,
      title: "Speed & Performance",
      description: "Lightning-fast response times and optimized performance for seamless experiences.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with industry-leading compliance standards.",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Tools and features designed to enhance teamwork and productivity.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Scalability",
      description: "Grow without limits with infrastructure that scales with your needs.",
      gradient: "from-green-500 to-emerald-500"
    }
  ];

  const features = [
    "Advanced analytics and insights",
    "Custom integrations available",
    "Regular feature updates",
    "Comprehensive documentation",
    "Multi-language support",
    "Mobile and desktop access"
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
            What's Included
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Everything You Need
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              To Succeed
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A complete suite of tools, support, and resources designed for your success.
          </p>
        </motion.div>

        {/* Main Offerings */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${offering.gradient} rounded-3xl p-10 text-white shadow-2xl overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-3xl font-bold mb-4">{offering.title}</h3>
                  <p className="text-white/90 text-lg leading-relaxed">{offering.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Features & Benefits
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm"
              >
                <CheckCircle2 className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-800 font-medium">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <p className="text-2xl font-light leading-relaxed max-w-3xl mb-6">
              Experience the difference. Start your journey with us today.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Explore Our Solutions
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

