"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

export default function Page() {
  const team = [
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
  ];

  return (
    <main className="min-h-screen w-full bg-white">
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
            className="inline-block text-sm uppercase tracking-wider text-indigo-600 bg-indigo-50 px-4 py-2 rounded-full font-semibold mb-6"
          >
            Our Team
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Meet the
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Dream Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Talented individuals working together to create something extraordinary.
          </p>
        </motion.div>

        {/* Team Grid - Alternating Layout */}
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
              {/* Avatar */}
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`flex-shrink-0 w-40 h-40 bg-gradient-to-br ${member.gradient} rounded-3xl flex items-center justify-center shadow-2xl`}
              >
                <span className="text-5xl font-bold text-white">{member.image}</span>
              </motion.div>

              {/* Info Card */}
              <div className="flex-1 bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-indigo-600 font-semibold text-lg mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.bio}</p>
                <div className="flex items-center gap-4">
                  {member.social.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-indigo-600" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.twitter}
                      className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-indigo-600" />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.github}
                      className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center hover:bg-indigo-200 transition-colors"
                    >
                      <Github className="w-5 h-5 text-indigo-600" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <p className="text-2xl font-light leading-relaxed max-w-3xl mb-6">
              Want to join our team? We're always looking for exceptional talent.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              See Open Roles
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

