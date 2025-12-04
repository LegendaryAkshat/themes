"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Sparkles } from "lucide-react";

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const team = [
    {
      name: "Alexandra Park",
      role: "Product Lead",
      expertise: "Product Strategy & Innovation",
      image: "AP",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      name: "James Wilson",
      role: "Engineering Manager",
      expertise: "Full-Stack Development",
      image: "JW",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Maria Garcia",
      role: "UX Designer",
      expertise: "User Experience Design",
      image: "MG",
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "Thomas Anderson",
      role: "Data Scientist",
      expertise: "Machine Learning & Analytics",
      image: "TA",
      gradient: "from-green-500 to-emerald-500"
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
            <span className="text-sm font-semibold uppercase tracking-wider">Our Experts</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white">
            The People Behind
            <span className="block">The Innovation</span>
          </h1>
          <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
            Meet the talented individuals driving our success and shaping the future.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all overflow-hidden"
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />

              <div className="relative z-10 flex items-center gap-6">
                {/* Avatar */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`flex-shrink-0 w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center shadow-xl`}
                >
                  <span className="text-3xl font-bold text-white">{member.image}</span>
                </motion.div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-cyan-300 font-semibold mb-2">{member.role}</p>
                  <p className="text-cyan-100 text-sm mb-4">{member.expertise}</p>
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href="#"
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href="#"
                      className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white/5 backdrop-blur-md px-8 py-6 rounded-2xl border border-white/10">
            <p className="text-lg text-cyan-100">
              We're a diverse team united by passion, innovation, and a shared commitment to excellence.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}

