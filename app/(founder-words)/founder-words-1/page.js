"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Sparkles, Heart, Target } from "lucide-react";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const quotes = [
    {
      text: "Every great journey begins with a single step, but it's the vision that guides you through every challenge.",
      year: "2015",
      context: "The Beginning"
    },
    {
      text: "Innovation isn't about being first—it's about being thoughtful, intentional, and creating something that truly matters.",
      year: "2018",
      context: "Finding Our Path"
    },
    {
      text: "Success isn't measured by what you achieve alone, but by the impact you create in the lives of others.",
      year: "2021",
      context: "Scaling Impact"
    },
    {
      text: "The future belongs to those who dare to reimagine what's possible and have the courage to build it.",
      year: "2024",
      context: "Looking Forward"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <motion.section
        ref={containerRef}
        style={{ opacity, y }}
        className="relative px-6 py-24 max-w-6xl mx-auto"
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 text-purple-300 bg-purple-900/30 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-purple-500/30"
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Founder's Journey</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white"
          >
            Words That Shaped Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed"
          >
            Reflections from the journey of building something meaningful, one decision at a time.
          </motion.p>
        </motion.div>

        {/* Timeline Quotes */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500 transform md:-translate-x-1/2" />

          <div className="space-y-24">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/50">
                    <div className="w-8 h-8 rounded-full bg-white" />
                  </div>
                </div>

                {/* Quote Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-1 bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl ${
                    index % 2 === 0 ? "md:mr-auto md:max-w-md" : "md:ml-auto md:max-w-md"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-8 h-8 text-purple-300 flex-shrink-0" />
                    <p className="text-xl md:text-2xl leading-relaxed text-white font-light italic">
                      "{quote.text}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/10">
                    <span className="text-purple-300 font-semibold">{quote.context}</span>
                    <span className="text-white/60 text-sm">{quote.year}</span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/10">
            <Heart className="w-6 h-6 text-purple-400" />
            <p className="text-lg text-purple-100">
              The journey continues, and every day brings new opportunities to make a difference.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}

