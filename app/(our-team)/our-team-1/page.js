"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, Github } from "lucide-react";

export default function Page() {
  const team = [
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
            Meet the Team
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Our
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Leadership Team
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Passionate professionals dedicated to driving innovation and delivering exceptional results.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

              <div className="relative z-10">
                {/* Avatar */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-32 h-32 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl`}
                >
                  <span className="text-4xl font-bold text-white">{member.image}</span>
                </motion.div>

                {/* Info */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {member.social.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.linkedin}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-gray-600" />
                    </motion.a>
                  )}
                  {member.social.twitter && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.twitter}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <Twitter className="w-5 h-5 text-gray-600" />
                    </motion.a>
                  )}
                  {member.social.github && (
                    <motion.a
                      whileHover={{ scale: 1.2, y: -2 }}
                      href={member.social.github}
                      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                    >
                      <Github className="w-5 h-5 text-gray-600" />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <p className="text-2xl font-light leading-relaxed max-w-3xl mb-6">
              Join our team and help shape the future. We're always looking for talented individuals.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              View Open Positions
            </motion.button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

