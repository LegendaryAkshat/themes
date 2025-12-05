"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Calendar, MapPin, TrendingUp } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    badges: {
      date: "bg-indigo-50 text-indigo-600",
      location: "text-gray-600",
      achievement: "bg-purple-50 text-purple-600"
    },
    gradients: {
      title: "bg-gradient-to-r from-indigo-600 to-purple-600",
      background: "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50",
      closing: "bg-gradient-to-r from-indigo-600 to-purple-600",
      divider: "bg-gradient-to-r from-indigo-200 to-purple-200"
    }
  },
  
  // Page Header
  header: {
    title: {
      line1: "Moments That",
      line2: "Defined Us"
    },
    description: "Key moments and reflections from our journey, captured in time."
  },
  
  // Milestones (Edit milestones here!)
  milestones: [
    {
      date: "2015",
      location: "San Francisco",
      quote: "We started with a simple question: What if we could make technology feel more human?",
      achievement: "Company Founded"
    },
    {
      date: "2017",
      location: "New York",
      quote: "The first product launch taught us that perfection is the enemy of progress. Ship, learn, iterate.",
      achievement: "First Product Launch"
    },
    {
      date: "2020",
      location: "Remote",
      quote: "When the world changed, we discovered that our greatest strength was our ability to adapt and support each other.",
      achievement: "Global Expansion"
    },
    {
      date: "2024",
      location: "Worldwide",
      quote: "Today, we're not just building products—we're building a legacy of innovation that will inspire the next generation.",
      achievement: "Industry Leadership"
    }
  ],
  
  // Closing Statement
  closing: {
    text: "The journey continues, and every milestone is both a destination and a new beginning."
  }
};

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const { colors, header, milestones, closing } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} relative overflow-hidden`}>
      <motion.div
        style={{ y: backgroundY }}
        className={`absolute inset-0 ${colors.gradients.background} opacity-50`}
      />

      <section ref={containerRef} className="relative px-6 py-24 max-w-6xl mx-auto">
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
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <Quote className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.text.primary} mb-6`}>
            {header.title.line1}
            <span className={`block text-transparent bg-clip-text ${colors.gradients.title}`}>
              {header.title.line2}
            </span>
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-2xl mx-auto`}>
            {header.description}
          </p>
        </motion.div>

        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`flex flex-col md:flex-row items-start gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-shrink-0 w-full md:w-64 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <div className={`inline-flex items-center gap-2 ${colors.badges.date} px-4 py-2 rounded-full mb-3`}>
                  <Calendar className="w-4 h-4" />
                  <span className="font-bold text-lg">{milestone.date}</span>
                </div>
                <div className={`inline-flex items-center gap-2 ${colors.badges.location} mb-4`}>
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{milestone.location}</span>
                </div>
                <div className={`inline-flex items-center gap-2 ${colors.badges.achievement} px-4 py-2 rounded-full`}>
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">{milestone.achievement}</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`flex-1 ${colors.card} rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-xl md:text-2xl ${colors.text.primary} leading-relaxed mb-4 italic`}>
                      "{milestone.quote}"
                    </p>
                    <div className={`h-px ${colors.gradients.divider}`} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className={`inline-block ${colors.gradients.closing} rounded-2xl p-8 text-white shadow-2xl`}>
            <p className="text-2xl font-light leading-relaxed max-w-3xl">
              {closing.text}
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
