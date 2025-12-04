"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Calendar, MapPin, TrendingUp } from "lucide-react";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  const milestones = [
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
  ];

  return (
    <main className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 opacity-50"
      />

      <section ref={containerRef} className="relative px-6 py-24 max-w-6xl mx-auto">
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
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <Quote className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Moments That
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Defined Us
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Key moments and reflections from our journey, captured in time.
          </p>
        </motion.div>

        {/* Milestones */}
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
              {/* Left Side - Date & Location */}
              <div className={`flex-shrink-0 w-full md:w-64 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                <div className="inline-flex items-center gap-2 text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full mb-3">
                  <Calendar className="w-4 h-4" />
                  <span className="font-bold text-lg">{milestone.date}</span>
                </div>
                <div className="inline-flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{milestone.location}</span>
                </div>
                <div className="inline-flex items-center gap-2 text-purple-600 bg-purple-50 px-4 py-2 rounded-full">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-semibold">{milestone.achievement}</span>
                </div>
              </div>

              {/* Right Side - Quote Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex-1 bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-4 italic">
                      "{milestone.quote}"
                    </p>
                    <div className="h-px bg-gradient-to-r from-indigo-200 to-purple-200" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <p className="text-2xl font-light leading-relaxed max-w-3xl">
              The journey continues, and every milestone is both a destination and a new beginning.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

