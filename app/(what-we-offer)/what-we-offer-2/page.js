"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const services = [
    {
      category: "Technology",
      title: "Advanced Platform",
      description: "State-of-the-art infrastructure built for performance and reliability.",
      benefits: [
        "Cloud-native architecture",
        "Auto-scaling capabilities",
        "Real-time analytics",
        "API-first design"
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      category: "Support",
      title: "Expert Assistance",
      description: "Dedicated team ready to help you maximize value and overcome challenges.",
      benefits: [
        "24/7 technical support",
        "Onboarding specialists",
        "Regular check-ins",
        "Knowledge base access"
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      category: "Growth",
      title: "Strategic Partnership",
      description: "More than a vendor—we're your partner in achieving long-term success.",
      benefits: [
        "Custom solutions",
        "Strategic consulting",
        "Performance optimization",
        "Future planning"
      ],
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
      <motion.section
        ref={containerRef}
        style={{ opacity }}
        className="px-6 py-24 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 text-cyan-300 bg-cyan-900/30 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-cyan-500/30"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Our Services</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
            Comprehensive
            <span className="block">Solutions</span>
          </h1>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            Everything you need to succeed, delivered with expertise and care.
          </p>
        </motion.div>

        {/* Services */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="inline-block text-xs uppercase tracking-wider text-cyan-300 bg-cyan-900/30 px-3 py-1 rounded-full mb-4">
                  {service.category}
                </div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p className="text-cyan-100 mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.benefits.map((benefit, bIndex) => (
                    <motion.li
                      key={bIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + bIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className={`w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5`} />
                      <span className="text-cyan-100 text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex items-center text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-white/20 overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-cyan-900 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}

