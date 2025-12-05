"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
    text: {
      primary: "text-gray-900",
      secondary: "text-blue-600"
    },
    badges: {
      background: "bg-blue-50",
      text: "text-blue-600"
    }
  },
  
  // Page Header
  header: {
    badge: "Meet the Team",
    title: "Our",
    titleAccent: "Leadership Team",
    description: "The talented individuals driving our vision forward."
  },
  
  // Team Members (Edit team members here!)
  team: [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "Visionary leader with 15+ years of experience building transformative companies.",
      image: "SC",
      gradient: "from-blue-500 to-cyan-500",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      bio: "Tech innovator passionate about creating solutions that make a real difference.",
      image: "MR",
      gradient: "from-purple-500 to-pink-500",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Emily Johnson",
      role: "Head of Design",
      bio: "Award-winning designer focused on creating beautiful, intuitive experiences.",
      image: "EJ",
      gradient: "from-orange-500 to-red-500",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      bio: "Engineering leader dedicated to building scalable, reliable systems.",
      image: "DK",
      gradient: "from-green-500 to-emerald-500",
      social: { linkedin: "#", github: "#" }
    },
    {
      name: "Jessica Martinez",
      role: "Chief Marketing Officer",
      bio: "Strategic marketer with a track record of building strong brand presence.",
      image: "JM",
      gradient: "from-pink-500 to-rose-500",
      social: { linkedin: "#", twitter: "#" }
    },
    {
      name: "Robert Taylor",
      role: "VP of Operations",
      bio: "Operations expert ensuring smooth execution and exceptional delivery.",
      image: "RT",
      gradient: "from-indigo-500 to-blue-500",
      social: { linkedin: "#" }
    }
  ]
};

export default function Page() {
  const { colors, header, team } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
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
            className={`inline-block text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-4 py-2 rounded-full font-semibold mb-6`}
          >
            {header.badge}
          </motion.span>
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.text.primary} mb-6`}>
            {header.title}
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              {header.titleAccent}
            </span>
          </h1>
          <p className={`text-lg ${colors.text.primary} max-w-2xl mx-auto`}>
            {header.description}
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-2xl flex items-center justify-center text-white text-2xl font-bold mb-6`}>
                {member.image}
              </div>
              <h3 className={`text-xl font-bold ${colors.text.primary} mb-2`}>{member.name}</h3>
              <p className={`text-sm ${colors.text.secondary} mb-4`}>{member.role}</p>
              <p className={`${colors.text.primary} mb-6 leading-relaxed`}>{member.bio}</p>
              <div className="flex gap-3">
                {member.social.linkedin && (
                  <a href={member.social.linkedin} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Linkedin className="w-5 h-5 text-gray-600" />
                  </a>
                )}
                {member.social.twitter && (
                  <a href={member.social.twitter} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Twitter className="w-5 h-5 text-gray-600" />
                  </a>
                )}
                {member.social.github && (
                  <a href={member.social.github} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Github className="w-5 h-5 text-gray-600" />
                  </a>
                )}
                {member.social.email && (
                  <a href={member.social.email} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <Mail className="w-5 h-5 text-gray-600" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
