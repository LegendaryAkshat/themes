"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, Sparkles, Award } from "lucide-react";

export default function Page() {
  const departments = [
    {
      name: "Leadership",
      members: [
        { name: "Jennifer Adams", role: "CEO", image: "JA", gradient: "from-blue-500 to-cyan-500" },
        { name: "Mark Stevens", role: "COO", image: "MS", gradient: "from-purple-500 to-pink-500" }
      ]
    },
    {
      name: "Engineering",
      members: [
        { name: "Alex Rivera", role: "Senior Engineer", image: "AR", gradient: "from-green-500 to-emerald-500" },
        { name: "Sam Patel", role: "Backend Lead", image: "SP", gradient: "from-orange-500 to-red-500" }
      ]
    },
    {
      name: "Design",
      members: [
        { name: "Emma Wilson", role: "Creative Director", image: "EW", gradient: "from-pink-500 to-rose-500" },
        { name: "Noah Brown", role: "UX Designer", image: "NB", gradient: "from-indigo-500 to-blue-500" }
      ]
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-indigo-50/30">
      <section className="px-6 py-24 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <Sparkles className="w-6 h-6 text-indigo-600" />
            <span className="text-sm uppercase tracking-wider text-indigo-600 font-semibold">
              Our People
            </span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            The Team
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
              Behind Success
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Organized by department, meet the talented individuals driving our mission forward.
          </p>
        </motion.div>

        {/* Departments */}
        <div className="space-y-16">
          {departments.map((dept, deptIndex) => (
            <motion.div
              key={deptIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: deptIndex * 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                <Award className="w-8 h-8 text-indigo-600" />
                {dept.name}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {dept.members.map((member, memberIndex) => (
                  <motion.div
                    key={memberIndex}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: deptIndex * 0.2 + memberIndex * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-xl flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-2xl font-bold text-white">{member.image}</span>
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                        <p className="text-indigo-600 font-semibold mb-3">{member.role}</p>
                        <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href="#"
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors"
                          >
                            <Linkedin className="w-4 h-4 text-gray-600" />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.2, y: -2 }}
                            href="#"
                            className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-indigo-100 transition-colors"
                          >
                            <Mail className="w-4 h-4 text-gray-600" />
                          </motion.a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
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
          <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
            <p className="text-2xl font-light leading-relaxed max-w-3xl">
              Together, we're building something meaningful. Join us on this journey.
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}

