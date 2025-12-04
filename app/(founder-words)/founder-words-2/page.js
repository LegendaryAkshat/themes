"use client";

import { motion } from "framer-motion";
import { Quote, ArrowRight, Lightbulb, Rocket, Users } from "lucide-react";

export default function Page() {
  const insights = [
    {
      icon: Lightbulb,
      title: "The Spark",
      quote: "The best ideas don't come from boardrooms—they come from understanding real problems and having the audacity to solve them differently.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: Rocket,
      title: "The Launch",
      quote: "Starting is easy. Persisting through uncertainty, learning from failures, and staying true to your vision—that's where the real work begins.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: Users,
      title: "The Community",
      quote: "We don't build products for customers. We build experiences with people who share our passion for excellence and innovation.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <section className="px-6 py-24 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
            Founder's Perspective
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Insights That
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Drive Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Three fundamental principles that have guided our journey from concept to reality.
          </p>
        </motion.div>

        {/* Insight Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {insights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${insight.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{insight.title}</h3>
                <div className="flex items-start gap-3 mb-6">
                  <Quote className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{insight.quote}"
                  </p>
                </div>

                {/* Decorative Arrow */}
                <div className="flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Quote Section */}
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

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 mx-auto mb-8 text-white/30" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl font-light leading-relaxed mb-8"
            >
              "Building something meaningful requires more than ambition—it demands resilience, 
              empathy, and an unwavering commitment to creating value that extends beyond profit."
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-12 h-0.5 bg-white/30" />
              <span className="text-lg font-semibold">Founder & CEO</span>
              <div className="w-12 h-0.5 bg-white/30" />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

