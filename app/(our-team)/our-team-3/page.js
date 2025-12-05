"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-gradient-to-r from-gray-50 to-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      accent: "text-indigo-600"
    },
    badges: {
      background: "bg-indigo-50",
      text: "text-indigo-600"
    },
    buttons: {
      social: "bg-indigo-100 hover:bg-indigo-200",
      socialIcon: "text-indigo-600",
      cta: "bg-white text-indigo-600 hover:shadow-xl"
    }
  },
  
  // Page Header
  header: {
    badge: "Our Team",
    title: {
      line1: "Meet the",
      line2: "Dream Team"
    },
    description: "Talented individuals working together to create something extraordinary."
  },
  
  // Team Members (Edit team members here!)
  team: [
    {
      name: "Sophie Chen",
      role: "CEO & Co-Founder",
      bio: "Serial entrepreneur with a passion for building products that matter.",
      image: "SC",
      gradient: "from-indigo-500 to-purple-500",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Ryan Thompson",
      role: "CTO & Co-Founder",
      bio: "Tech visionary focused on solving complex problems with elegant solutions.",
      image: "RT",
      gradient: "from-blue-500 to-cyan-500",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Lisa Wang",
      role: "Head of Product",
      bio: "Product strategist dedicated to creating exceptional user experiences.",
      image: "LW",
      gradient: "from-pink-500 to-rose-500",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Chris Martinez",
      role: "Lead Engineer",
      bio: "Full-stack developer passionate about clean code and scalable architecture.",
      image: "CM",
      gradient: "from-green-500 to-emerald-500",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Amanda Foster",
      role: "Head of Design",
      bio: "Creative director focused on beautiful, functional design that delights users.",
      image: "AF",
      gradient: "from-orange-500 to-red-500",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Daniel Kim",
      role: "Head of Growth",
      bio: "Growth expert with a proven track record of scaling businesses.",
      image: "DK",
      gradient: "from-yellow-500 to-orange-500",
      social: { linkedin: "#", twitter: "#" }
    }
  ],
  
  // CTA Section
  cta: {
    text: "Want to join our team? We're always looking for exceptional talent.",
    buttonText: "See Open Roles",
    enabled: true
  }
};

export default function Page() {
  const { colors, header, team, cta } = pageConfig;

  const iconMap = {
    Linkedin,
    Twitter,
    Github,
    Mail
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="px-6 py-24 max-w-7xl mx-auto">
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
            className={`inline-block text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-4 py-2 rounded-full font-semibold mb-6`}
          >
            {header.badge}
          </motion.span>
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.text.primary} mb-6`}>
            {header.title.line1}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              {header.title.line2}
            </span>
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="space-y-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`flex-shrink-0 w-40 h-40 bg-gradient-to-br ${member.gradient} rounded-3xl flex items-center justify-center shadow-2xl`}
              >
                <span className="text-5xl font-bold text-white">{member.image}</span>
              </motion.div>

              <div className={`flex-1 ${colors.card} rounded-3xl p-8 shadow-lg`}>
                <h3 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{member.name}</h3>
                <p className={`${colors.text.accent} font-semibold text-lg mb-4`}>{member.role}</p>
                <p className={`${colors.text.secondary} leading-relaxed mb-6`}>{member.bio}</p>
                <div className="flex items-center gap-4">
                  {member.social.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.linkedin}
                      className={`w-10 h-10 ${colors.buttons.social} rounded-full flex items-center justify-center transition-colors`}
                    >
                      <Linkedin className={`w-5 h-5 ${colors.buttons.socialIcon}`} />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.twitter}
                      className={`w-10 h-10 ${colors.buttons.social} rounded-full flex items-center justify-center transition-colors`}
                    >
                      <Twitter className={`w-5 h-5 ${colors.buttons.socialIcon}`} />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.github}
                      className={`w-10 h-10 ${colors.buttons.social} rounded-full flex items-center justify-center transition-colors`}
                    >
                      <Github className={`w-5 h-5 ${colors.buttons.socialIcon}`} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {cta.enabled && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <p className="text-2xl font-light leading-relaxed max-w-3xl mb-6">
                {cta.text}
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${colors.buttons.cta} px-8 py-4 rounded-xl font-semibold shadow-lg transition-all`}
              >
                {cta.buttonText}
              </motion.button>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}
