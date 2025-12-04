"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users, Rocket, Award, Heart } from "lucide-react";

export default function Page() {
  const offerings = [
    {
      icon: Zap,
      title: "Lightning-Fast Solutions",
      description: "Cutting-edge technology that delivers results in record time, without compromising quality.",
      features: ["Real-time processing", "Scalable infrastructure", "99.9% uptime"],
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols to protect your most valuable data.",
      features: ["End-to-end encryption", "Regular security audits", "Compliance certified"],
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: Users,
      title: "Dedicated Support",
      description: "A team of experts available around the clock to help you succeed.",
      features: ["24/7 availability", "Expert guidance", "Personalized assistance"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Rocket,
      title: "Scalable Growth",
      description: "Solutions that grow with your business, from startup to enterprise scale.",
      features: ["Flexible architecture", "Seamless scaling", "Future-proof design"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Award,
      title: "Proven Excellence",
      description: "Award-winning solutions trusted by industry leaders worldwide.",
      features: ["Industry recognition", "Customer testimonials", "Proven track record"],
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description: "Every feature and decision is made with your success in mind.",
      features: ["User-focused design", "Continuous improvement", "Feedback-driven"],
      gradient: "from-pink-500 to-rose-500"
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
            Our Solutions
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            What We
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Offer You
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your business and drive meaningful results.
          </p>
        </motion.div>

        {/* Offerings Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${offering.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{offering.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{offering.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {offering.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + fIndex * 0.1 }}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <div className={`w-1.5 h-1.5 bg-gradient-to-br ${offering.gradient} rounded-full`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover Indicator */}
                  <div className={`h-1 w-0 group-hover:w-full bg-gradient-to-r ${offering.gradient} transition-all duration-500 rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <p className="text-2xl font-light leading-relaxed max-w-3xl mb-6">
              Ready to experience the difference? Let's discuss how we can help you achieve your goals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

