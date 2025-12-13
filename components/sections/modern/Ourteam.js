"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Twitter, Mail, Github, Sparkles, Award } from "lucide-react";

/**
 * Deep merge utility function
 */
const deepMerge = (target, source) => {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

// Default configuration for each our team type
const defaultConfigs = {
  ourTeam1: {
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
    header: {
      badge: "Meet the Team",
      title: "Our",
      titleAccent: "Leadership Team",
      description: "The talented individuals driving our vision forward."
    },
    team: [
      {
        name: "Sarah Chen",
        role: "Chief Executive Officer",
        bio: "Visionary leader with 15+ years of experience.",
        image: "SC",
        gradient: "from-blue-500 to-cyan-500",
        social: { linkedin: "#", twitter: "#" }
      }
    ]
  },
  ourTeam2: {
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
    header: {
      badge: {
        text: "Our Experts",
        icon: "Sparkles"
      },
      title: {
        line1: "The People Behind",
        line2: "The Innovation"
      },
      description: "Meet the talented individuals driving our success."
    },
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
      }
    ],
    statement: {
      text: "We're a diverse team united by passion, innovation, and a shared commitment to excellence."
    }
  },
  ourTeam3: {
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
    header: {
      badge: "Our Team",
      title: {
        line1: "Meet the",
        line2: "Dream Team"
      },
      description: "Talented individuals working together to create something extraordinary."
    },
    team: [
      {
        name: "Sophie Chen",
        role: "CEO & Co-Founder",
        bio: "Serial entrepreneur with a passion for building products that matter.",
        image: "SC",
        gradient: "from-indigo-500 to-purple-500",
        social: { linkedin: "#", twitter: "#" }
      }
    ],
    cta: {
      text: "Want to join our team? We're always looking for exceptional talent.",
      buttonText: "See Open Roles",
      enabled: true
    }
  },
  ourTeam4: {
    colors: {
      background: "bg-gradient-to-br from-gray-50 via-white to-indigo-50/30",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        accent: "text-indigo-600"
      },
      badges: {
        text: "text-indigo-600"
      },
      buttons: {
        social: "bg-gray-100 hover:bg-indigo-100",
        socialIcon: "text-gray-600"
      }
    },
    header: {
      badge: {
        text: "Our People",
        icon: "Sparkles"
      },
      title: {
        line1: "The Team",
        line2: "Behind Success"
      },
      description: "Organized by department, meet the talented individuals driving our mission forward."
    },
    departments: [
      {
        name: "Leadership",
        members: [
          { name: "Jennifer Adams", role: "CEO", image: "JA", gradient: "from-blue-500 to-cyan-500" }
        ]
      }
    ],
    statement: {
      text: "Together, we're building something meaningful. Join us on this journey."
    }
  }
};

/**
 * OurTeam Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "our-team")
 * @param {string} props.type - Our team type: "ourTeam1" | "ourTeam2" | "ourTeam3" | "ourTeam4" (default: "ourTeam1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function OurTeam({
  component = "our-team",
  type = "ourTeam1",
  content = {}
}) {
  // Validate our team type
  const validTypes = ["ourTeam1", "ourTeam2", "ourTeam3", "ourTeam4"];
  const ourTeamType = validTypes.includes(type) ? type : "ourTeam1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[ourTeamType] || defaultConfigs.ourTeam1;
  
  // Get custom config from content prop
  const customConfig = content[ourTeamType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`OurTeam: Invalid config for type "${ourTeamType}", using defaults`);
    return <OurTeam1 config={defaultConfigs.ourTeam1} />;
  }
  
  // Route to appropriate our team component
  if (ourTeamType === "ourTeam1") {
    if (!config.team || !Array.isArray(config.team) || config.team.length === 0) {
      console.warn("OurTeam1: No team members provided, using default");
      config.team = defaultConfigs.ourTeam1.team;
    }
    return <OurTeam1 config={config} />;
  }
  
  if (ourTeamType === "ourTeam2") {
    if (!config.team || !Array.isArray(config.team) || config.team.length === 0) {
      console.warn("OurTeam2: No team members provided, using default");
      config.team = defaultConfigs.ourTeam2.team;
    }
    return <OurTeam2 config={config} />;
  }
  
  if (ourTeamType === "ourTeam3") {
    if (!config.team || !Array.isArray(config.team) || config.team.length === 0) {
      console.warn("OurTeam3: No team members provided, using default");
      config.team = defaultConfigs.ourTeam3.team;
    }
    return <OurTeam3 config={config} />;
  }
  
  if (ourTeamType === "ourTeam4") {
    if (!config.departments || !Array.isArray(config.departments) || config.departments.length === 0) {
      console.warn("OurTeam4: No departments provided, using default");
      config.departments = defaultConfigs.ourTeam4.departments;
    }
    return <OurTeam4 config={config} />;
  }
  
  // Default fallback
  return null;
}

// Our Team 1 Component - Grid with bio
function OurTeam1({ config }) {
  const colors = config?.colors || defaultConfigs.ourTeam1.colors;
  const header = config?.header || defaultConfigs.ourTeam1.header;
  const team = config?.team || defaultConfigs.ourTeam1.team;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {header.badge && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`inline-block text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-4 py-2 rounded-full font-semibold mb-6`}
            >
              {header.badge}
            </motion.span>
          )}
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.text.primary} mb-6`}>
            {header.title}
            {header.titleAccent && (
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {header.titleAccent}
              </span>
            )}
          </h1>
          {header.description && (
            <p className={`text-lg ${colors.text.primary} max-w-2xl mx-auto`}>
              {header.description}
            </p>
          )}
        </motion.div>

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
              {member.role && (
                <p className={`text-sm ${colors.text.secondary} mb-4`}>{member.role}</p>
              )}
              {member.bio && (
                <p className={`${colors.text.primary} mb-6 leading-relaxed`}>{member.bio}</p>
              )}
              {member.social && (
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
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

// Our Team 2 Component - Horizontal cards with scroll animations
function OurTeam2({ config }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  const colors = config?.colors || defaultConfigs.ourTeam2.colors;
  const header = config?.header || defaultConfigs.ourTeam2.header;
  const team = config?.team || defaultConfigs.ourTeam2.team;
  const statement = config?.statement || defaultConfigs.ourTeam2.statement;

  const iconMap = {
    Sparkles
  };

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
          {header.badge && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`inline-flex items-center gap-2 ${colors.badges.text} ${colors.badges.background} px-6 py-3 rounded-full mb-6 border ${colors.badges.border}`}
            >
              {header.badge.icon && (() => {
                const Icon = iconMap[header.badge.icon];
                return Icon ? <Icon className="w-5 h-5" /> : null;
              })()}
              <span className="text-sm font-semibold uppercase tracking-wider">{header.badge.text}</span>
            </motion.div>
          )}
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-cyan-200 to-white`}>
            {header.title?.line1}
            {header.title?.line2 && (
              <span className="block">{header.title.line2}</span>
            )}
          </h1>
          {header.description && (
            <p className={`text-xl ${colors.text.light} max-w-3xl mx-auto leading-relaxed`}>
              {header.description}
            </p>
          )}
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
                  {member.role && (
                    <p className={`${colors.text.secondary} font-semibold mb-2`}>{member.role}</p>
                  )}
                  {member.expertise && (
                    <p className={`${colors.text.accent} text-sm mb-4`}>{member.expertise}</p>
                  )}
                  {member.social && (
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
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {statement && (
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
        )}
      </motion.section>
    </main>
  );
}

// Our Team 3 Component - Alternating layout with CTA
function OurTeam3({ config }) {
  const colors = config?.colors || defaultConfigs.ourTeam3.colors;
  const header = config?.header || defaultConfigs.ourTeam3.header;
  const team = config?.team || defaultConfigs.ourTeam3.team;
  const cta = config?.cta || defaultConfigs.ourTeam3.cta;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {header.badge && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`inline-block text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-4 py-2 rounded-full font-semibold mb-6`}
            >
              {header.badge}
            </motion.span>
          )}
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.text.primary} mb-6`}>
            {header.title?.line1}
            {header.title?.line2 && (
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                {header.title.line2}
              </span>
            )}
          </h1>
          {header.description && (
            <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              {header.description}
            </p>
          )}
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
                {member.role && (
                  <p className={`${colors.text.accent} font-semibold text-lg mb-4`}>{member.role}</p>
                )}
                {member.bio && (
                  <p className={`${colors.text.secondary} leading-relaxed mb-6`}>{member.bio}</p>
                )}
                {member.social && (
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
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {cta && cta.enabled && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              {cta.text && (
                <p className="text-2xl font-light leading-relaxed max-w-3xl mb-6">
                  {cta.text}
                </p>
              )}
              {cta.buttonText && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${colors.buttons.cta} px-8 py-4 rounded-xl font-semibold shadow-lg transition-all`}
                >
                  {cta.buttonText}
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

// Our Team 4 Component - Departments
function OurTeam4({ config }) {
  const colors = config?.colors || defaultConfigs.ourTeam4.colors;
  const header = config?.header || defaultConfigs.ourTeam4.header;
  const departments = config?.departments || defaultConfigs.ourTeam4.departments;
  const statement = config?.statement || defaultConfigs.ourTeam4.statement;

  const iconMap = {
    Sparkles,
    Award
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
          {header.badge && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex items-center gap-2 mb-6"
            >
              {header.badge.icon && (() => {
                const Icon = iconMap[header.badge.icon];
                return Icon ? <Icon className={`w-6 h-6 ${colors.badges.text}`} /> : null;
              })()}
              <span className={`text-sm uppercase tracking-wider ${colors.badges.text} font-semibold`}>
                {header.badge.text}
              </span>
            </motion.div>
          )}
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.text.primary} mb-6`}>
            {header.title?.line1}
            {header.title?.line2 && (
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                {header.title.line2}
              </span>
            )}
          </h1>
          {header.description && (
            <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              {header.description}
            </p>
          )}
        </motion.div>

        <div className="space-y-16">
          {departments.map((dept, deptIndex) => (
            <motion.div
              key={deptIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: deptIndex * 0.2 }}
            >
              <h2 className={`text-3xl font-bold ${colors.text.primary} mb-8 flex items-center gap-3`}>
                <Award className={`w-8 h-8 ${colors.text.accent}`} />
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
                    className={`group ${colors.card} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all`}
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
                        <h3 className={`text-xl font-bold ${colors.text.primary} mb-1`}>{member.name}</h3>
                        {member.role && (
                          <p className={`${colors.text.accent} font-semibold mb-3`}>{member.role}</p>
                        )}
                        {member.social && (
                          <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                            {member.social.linkedin && (
                              <motion.a
                                whileHover={{ scale: 1.2, y: -2 }}
                                href={member.social.linkedin}
                                className={`w-8 h-8 ${colors.buttons.social} rounded-full flex items-center justify-center transition-colors`}
                              >
                                <Linkedin className={`w-4 h-4 ${colors.buttons.socialIcon}`} />
                              </motion.a>
                            )}
                            {member.social.email && (
                              <motion.a
                                whileHover={{ scale: 1.2, y: -2 }}
                                href={member.social.email}
                                className={`w-8 h-8 ${colors.buttons.social} rounded-full flex items-center justify-center transition-colors`}
                              >
                                <Mail className={`w-4 h-4 ${colors.buttons.socialIcon}`} />
                              </motion.a>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {statement && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
              <p className="text-2xl font-light leading-relaxed max-w-3xl">
                {statement.text}
              </p>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

