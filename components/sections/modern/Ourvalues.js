"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Shield, Zap, Users, Target, Award, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";

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

// Default configuration for each our values type
const defaultConfigs = {
  ourValues1: {
    colors: {
      background: "bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        badge: "text-blue-600"
      },
      badges: {
        background: "bg-blue-50",
        text: "text-blue-600"
      }
    },
    header: {
      badge: "What We Stand For",
      title: {
        line1: "Our",
        line2: "Core Values"
      },
      description: "The fundamental beliefs that guide our decisions, shape our culture, and define who we are."
    },
    values: [
      {
        icon: "Heart",
        title: "Integrity",
        description: "We do what's right, even when no one is watching.",
        color: "from-red-500 to-pink-500"
      }
    ],
    statement: {
      text: "These values aren't just ideals—they're the foundation of everything we do."
    }
  },
  ourValues2: {
    colors: {
      background: "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900",
      card: "bg-white/10 backdrop-blur-md",
      text: {
        primary: "text-white",
        secondary: "text-cyan-300",
        light: "text-cyan-200",
        accent: "text-cyan-100"
      },
      borders: {
        default: "border-white/20",
        hover: "border-white/40"
      },
      badges: {
        background: "bg-cyan-900/30 backdrop-blur-sm",
        border: "border-cyan-500/30",
        text: "text-cyan-300"
      }
    },
    header: {
      badge: {
        text: "Our Foundation",
        icon: "Sparkles"
      },
      title: "Values in Action",
      description: "How our core values translate into daily practices and long-term commitments."
    },
    values: [
      {
        title: "Transparency",
        principles: [
          "Open communication at all levels",
          "Honest about challenges and opportunities"
        ],
        gradient: "from-blue-500 to-cyan-500"
      }
    ],
    statement: {
      text: "These values guide every decision, shape our culture, and define our commitment to excellence."
    }
  },
  ourValues3: {
    colors: {
      background: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-white",
        light: "text-white/90",
        accent: "text-white/80"
      },
      badges: {
        background: "bg-indigo-50",
        text: "text-indigo-600"
      }
    },
    header: {
      badge: "What Drives Us",
      title: {
        line1: "Values That",
        line2: "Define Excellence"
      },
      description: "Six core values that shape our culture, guide our decisions, and inspire our team."
    },
    values: [
      {
        icon: "Heart",
        title: "Empathy",
        description: "Understanding and sharing the feelings of others.",
        color: "from-rose-500 to-pink-500",
        stat: "100%"
      }
    ]
  },
  ourValues4: {
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
      statement: {
        background: "bg-gradient-to-r from-indigo-600 to-purple-600",
        text: "text-white"
      }
    },
    header: {
      badge: {
        text: "Our Commitment",
        icon: "Sparkles"
      },
      title: {
        line1: "Values That",
        line2: "Shape Our Culture"
      },
      description: "Three pillars that define how we work, grow, and connect with each other and our community."
    },
    valueCategories: [
      {
        title: "How We Work",
        values: [
          { name: "Transparency", description: "Open communication and honest feedback" }
        ],
        gradient: "from-blue-500 to-cyan-500"
      }
    ],
    statement: {
      text: "These values aren't just words—they're the foundation of our culture.",
      author: "Leadership Team"
    }
  }
};

/**
 * OurValues Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "our-values")
 * @param {string} props.type - Our values type: "ourValues1" | "ourValues2" | "ourValues3" | "ourValues4" (default: "ourValues1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function OurValues({
  component = "our-values",
  type = "ourValues1",
  content = {}
}) {
  // Validate our values type
  const validTypes = ["ourValues1", "ourValues2", "ourValues3", "ourValues4"];
  const ourValuesType = validTypes.includes(type) ? type : "ourValues1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[ourValuesType] || defaultConfigs.ourValues1;
  
  // Get custom config from content prop
  const customConfig = content[ourValuesType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`OurValues: Invalid config for type "${ourValuesType}", using defaults`);
    return <OurValues1 config={defaultConfigs.ourValues1} />;
  }
  
  // Route to appropriate our values component
  if (ourValuesType === "ourValues1") {
    if (!config.values || !Array.isArray(config.values) || config.values.length === 0) {
      console.warn("OurValues1: No values provided, using default");
      config.values = defaultConfigs.ourValues1.values;
    }
    return <OurValues1 config={config} />;
  }
  
  if (ourValuesType === "ourValues2") {
    if (!config.values || !Array.isArray(config.values) || config.values.length === 0) {
      console.warn("OurValues2: No values provided, using default");
      config.values = defaultConfigs.ourValues2.values;
    }
    return <OurValues2 config={config} />;
  }
  
  if (ourValuesType === "ourValues3") {
    if (!config.values || !Array.isArray(config.values) || config.values.length === 0) {
      console.warn("OurValues3: No values provided, using default");
      config.values = defaultConfigs.ourValues3.values;
    }
    return <OurValues3 config={config} />;
  }
  
  if (ourValuesType === "ourValues4") {
    if (!config.valueCategories || !Array.isArray(config.valueCategories) || config.valueCategories.length === 0) {
      console.warn("OurValues4: No value categories provided, using default");
      config.valueCategories = defaultConfigs.ourValues4.valueCategories;
    }
    return <OurValues4 config={config} />;
  }
  
  // Default fallback
  return null;
}

// Our Values 1 Component - Grid with icons
function OurValues1({ config }) {
  const colors = config?.colors || defaultConfigs.ourValues1.colors;
  const header = config?.header || defaultConfigs.ourValues1.header;
  const values = config?.values || defaultConfigs.ourValues1.values;
  const statement = config?.statement || defaultConfigs.ourValues1.statement;

  const iconMap = {
    Heart,
    Shield,
    Zap,
    Users,
    Target,
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
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative ${colors.card} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10">
                  {Icon && (
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                  )}

                  <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>{value.title}</h3>
                  {value.description && (
                    <p className={`${colors.text.secondary} leading-relaxed`}>
                      {value.description}
                    </p>
                  )}

                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${value.color} transition-all duration-500 rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {statement && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
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

// Our Values 2 Component - Values with principles
function OurValues2({ config }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  
  const colors = config?.colors || defaultConfigs.ourValues2.colors;
  const header = config?.header || defaultConfigs.ourValues2.header;
  const values = config?.values || defaultConfigs.ourValues2.values;
  const statement = config?.statement || defaultConfigs.ourValues2.statement;

  const iconMap = {
    Sparkles
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={containerRef}
        style={{ opacity, scale }}
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
            {header.title}
          </h1>
          {header.description && (
            <p className={`text-xl ${colors.text.light} max-w-3xl mx-auto leading-relaxed`}>
              {header.description}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative ${colors.card} rounded-3xl p-8 border ${colors.borders.default} hover:${colors.borders.hover} transition-all overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-3xl font-bold">{value.title}</h3>
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <CheckCircle2 className="w-8 h-8 text-white" />
                  </div>
                </div>

                {value.principles && value.principles.length > 0 && (
                  <ul className="space-y-4 mb-6">
                    {value.principles.map((principle, pIndex) => (
                      <motion.li
                        key={pIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + pIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`w-6 h-6 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center flex-shrink-0 mt-0.5`}>
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                        <span className={`${colors.text.accent} leading-relaxed`}>{principle}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                <div className={`flex items-center ${colors.text.secondary} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-sm mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
            <div className={`inline-block ${colors.card} px-8 py-6 rounded-2xl border ${colors.borders.default}`}>
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

// Our Values 3 Component - Values with stats
function OurValues3({ config }) {
  const colors = config?.colors || defaultConfigs.ourValues3.colors;
  const header = config?.header || defaultConfigs.ourValues3.header;
  const values = config?.values || defaultConfigs.ourValues3.values;

  const iconMap = {
    Heart,
    Shield,
    Zap,
    Users,
    Target,
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
            <p className={`text-xl ${colors.text.primary} max-w-3xl mx-auto leading-relaxed`}>
              {header.description}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = iconMap[value.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className={`relative bg-gradient-to-br ${value.color} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all overflow-hidden h-full`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      {Icon && (
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      )}
                      {value.stat && (
                        <div className="text-right">
                          <div className="text-4xl font-bold text-white mb-1">{value.stat}</div>
                          <div className="text-sm text-white/80 font-medium">Impact</div>
                        </div>
                      )}
                    </div>

                    <h3 className={`text-2xl font-bold ${colors.text.secondary} mb-4`}>{value.title}</h3>
                    {value.description && (
                      <p className={`${colors.text.light} leading-relaxed mb-6`}>{value.description}</p>
                    )}

                    <div className={`flex items-center ${colors.text.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <span className="text-sm font-semibold mr-2">Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

// Our Values 4 Component - Value categories
function OurValues4({ config }) {
  const colors = config?.colors || defaultConfigs.ourValues4.colors;
  const header = config?.header || defaultConfigs.ourValues4.header;
  const valueCategories = config?.valueCategories || defaultConfigs.ourValues4.valueCategories;
  const statement = config?.statement || defaultConfigs.ourValues4.statement;

  const iconMap = {
    CheckCircle2,
    Sparkles,
    ArrowRight
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {valueCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative ${colors.card} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden`}
            >
              <div className={`h-2 bg-gradient-to-r ${category.gradient} mb-6 rounded-full`} />
              
              <h3 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>{category.title}</h3>

              {category.values && category.values.length > 0 && (
                <ul className="space-y-4 mb-6">
                  {category.values.map((value, vIndex) => (
                    <motion.li
                      key={vIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + vIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`flex-shrink-0 w-6 h-6 bg-gradient-to-br ${category.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                        <CheckCircle2 className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className={`font-semibold ${colors.text.primary} mb-1`}>{value.name}</div>
                        {value.description && (
                          <div className={`text-sm ${colors.text.secondary}`}>{value.description}</div>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </ul>
              )}

              <div className={`flex items-center ${colors.text.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                <span className="text-sm font-semibold mr-2">Explore</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {statement && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative ${colors.statement.background} rounded-3xl p-12 md:p-16 ${colors.statement.text} overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <p className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
                {statement.text}
              </p>
              {statement.author && (
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-px bg-white/30" />
                  <span className="text-lg font-semibold">{statement.author}</span>
                  <div className="w-16 h-px bg-white/30" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

