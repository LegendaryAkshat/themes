"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail, Sparkles } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900",
    text: {
      primary: "text-white",
      secondary: "text-cyan-300",
      light: "text-cyan-200",
      accent: "text-cyan-100"
    },
    badges: {
      background: "bg-cyan-900/30 backdrop-blur-sm",
      border: "border-cyan-500/30",
      text: "text-cyan-300"
    },
    cards: {
      background: "bg-white/10 backdrop-blur-md",
      border: "border-white/20",
      borderHover: "border-white/40"
    },
    buttons: {
      social: "bg-white/10 hover:bg-white/20"
    }
  },
  
  // Page Header
  header: {
    badge: {
      text: "Our Experts",
      icon: "Sparkles"
    },
    title: {
      line1: "The People Behind",
      line2: "The Innovation"
    },
    description: "Meet the talented individuals driving our success and shaping the future."
  },
  
  // Team Members (Edit team members here!)
  team: [
    {
      name: "Alexandra Park",
      role: "Product Lead",
      expertise: "Product Strategy & Innovation",
      image: "AP",
      gradient: "from-cyan-500 to-blue-500",
      social: {
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "James Wilson",
      role: "Engineering Manager",
      expertise: "Full-Stack Development",
      image: "JW",
      gradient: "from-purple-500 to-pink-500",
      social: {
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Maria Garcia",
      role: "UX Designer",
      expertise: "User Experience Design",
      image: "MG",
      gradient: "from-orange-500 to-red-500",
      social: {
        linkedin: "#",
        email: "#"
      }
    },
    {
      name: "Thomas Anderson",
      role: "Data Scientist",
      expertise: "Machine Learning & Analytics",
      image: "TA",
      gradient: "from-green-500 to-emerald-500",
      social: {
        linkedin: "#",
        email: "#"
      }
    }
  ],
  
  // Bottom Statement
  statement: {
    text: "We're a diverse team united by passion, innovation, and a shared commitment to excellence."
  }
};

export default function Page() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const { colors, header, team, statement } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={containerRef}
        style={{ opacity }}
        className="px-6 py-24 max-w-7xl mx-auto"
      >
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
            className={`inline-flex items-center gap-2 ${colors.badges.text} ${colors.badges.background} px-6 py-3 rounded-full mb-6 border ${colors.badges.border}`}
          >
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">{header.badge.text}</span>
          </motion.div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white`}>
            {header.title.line1}
            <span className="block">{header.title.line2}</span>
          </h1>
          <p className={`text-xl ${colors.text.light} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative ${colors.cards.background} rounded-3xl p-8 border ${colors.cards.border} hover:${colors.cards.borderHover} transition-all overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />

              <div className="relative z-10 flex items-center gap-6">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`flex-shrink-0 w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center shadow-xl`}
                >
                  <span className="text-3xl font-bold text-white">{member.image}</span>
                </motion.div>

                <div className="flex-1">
                  <h3 className={`text-2xl font-bold mb-1`}>{member.name}</h3>
                  <p className={`${colors.text.secondary} font-semibold mb-2`}>{member.role}</p>
                  <p className={`${colors.text.accent} text-sm mb-4`}>{member.expertise}</p>
                  <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.social.linkedin && (
                      <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        href={member.social.linkedin}
                        className={`w-8 h-8 ${colors.buttons.social} rounded-full flex items-center justify-center transition-colors`}
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                    )}
                    {member.social.email && (
                      <motion.a
                        whileHover={{ scale: 1.2, y: -2 }}
                        href={member.social.email}
                        className={`w-8 h-8 ${colors.buttons.social} rounded-full flex items-center justify-center transition-colors`}
                      >
                        <Mail className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className={`inline-block ${colors.cards.background} px-8 py-6 rounded-2xl border ${colors.cards.border}`}>
            <p className={`text-lg ${colors.text.accent}`}>
              {statement.text}
            </p>
          </div>
        </motion.div>
      </motion.section>
    </main>
  );
}
