"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Sparkles, Heart, ArrowRight, Lightbulb, Rocket, Users, Calendar, MapPin, TrendingUp, Target, Zap } from "lucide-react";

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

// Default configuration for each founder words type
const defaultConfigs = {
  founderWords1: {
    colors: {
      background: "bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900",
      card: "bg-white/10 backdrop-blur-md",
      text: {
        primary: "text-white",
        secondary: "text-purple-200",
        accent: "text-purple-300"
      },
      borders: {
        default: "border-white/20",
        timeline: "border-white/10"
      },
      badges: {
        background: "bg-purple-900/30 backdrop-blur-sm",
        border: "border-purple-500/30",
        text: "text-purple-300"
      },
      gradients: {
        title: "bg-gradient-to-r from-white via-purple-200 to-white",
        timeline: "bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500",
        dot: "bg-gradient-to-br from-purple-400 to-purple-600"
      }
    },
    header: {
      badge: {
        text: "Founder's Journey",
        icon: "Sparkles"
      },
      title: "Words That Shaped Us",
      description: "Reflections from the journey of building something meaningful, one decision at a time."
    },
    quotes: [
      {
        text: "Every great journey begins with a single step, but it's the vision that guides you through every challenge.",
        year: "2015",
        context: "The Beginning"
      }
    ],
    closing: {
      text: "The journey continues, and every day brings new opportunities to make a difference.",
      icon: "Heart"
    }
  },
  founderWords2: {
    colors: {
      background: "bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        quote: "text-gray-700"
      },
      badges: {
        background: "bg-blue-50",
        text: "text-blue-600"
      },
      gradients: {
        title: "bg-gradient-to-r from-blue-600 to-purple-600",
        quote: "bg-gradient-to-r from-blue-600 to-purple-600"
      }
    },
    header: {
      badge: "Founder's Perspective",
      title: {
        line1: "Insights That",
        line2: "Drive Innovation"
      },
      description: "Three fundamental principles that have guided our journey from concept to reality."
    },
    insights: [
      {
        icon: "Lightbulb",
        title: "The Spark",
        quote: "The best ideas don't come from boardrooms—they come from understanding real problems and having the audacity to solve them differently.",
        gradient: "from-yellow-400 to-orange-500"
      }
    ],
    mainQuote: {
      text: "Building something meaningful requires more than ambition—it demands resilience, empathy, and an unwavering commitment to creating value that extends beyond profit.",
      author: "Founder & CEO"
    }
  },
  founderWords3: {
    colors: {
      background: "bg-white",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      badges: {
        date: "bg-indigo-50 text-indigo-600",
        location: "text-gray-600",
        achievement: "bg-purple-50 text-purple-600"
      },
      gradients: {
        title: "bg-gradient-to-r from-indigo-600 to-purple-600",
        background: "bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50",
        closing: "bg-gradient-to-r from-indigo-600 to-purple-600",
        divider: "bg-gradient-to-r from-indigo-200 to-purple-200"
      }
    },
    header: {
      title: {
        line1: "Moments That",
        line2: "Defined Us"
      },
      description: "Key moments and reflections from our journey, captured in time."
    },
    milestones: [
      {
        date: "2015",
        location: "San Francisco",
        quote: "We started with a simple question: What if we could make technology feel more human?",
        achievement: "Company Founded"
      }
    ],
    closing: {
      text: "The journey continues, and every milestone is both a destination and a new beginning."
    }
  },
  founderWords4: {
    colors: {
      background: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900",
      card: "bg-white/5 backdrop-blur-md",
      text: {
        primary: "text-white",
        secondary: "text-gray-300",
        accent: "text-yellow-400"
      },
      borders: {
        default: "border-white/10",
        hover: "border-white/30"
      },
      badges: {
        text: "text-yellow-400"
      },
      gradients: {
        title: "bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400",
        statement: "bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-purple-500/20"
      }
    },
    header: {
      badge: {
        text: "Core Philosophy",
        icon: "Sparkles"
      },
      title: {
        line1: "Principles",
        line2: "That Guide Us"
      },
      description: "The foundational beliefs that shape every aspect of how we build, grow, and create value."
    },
    principles: [
      {
        icon: "Target",
        title: "Purpose-Driven",
        quote: "Every decision we make is guided by a clear purpose: to create meaningful impact.",
        gradient: "from-blue-500 to-cyan-500"
      }
    ],
    mainStatement: {
      text: "These principles aren't just words on a wall—they're the foundation of every decision, every product, and every relationship we build. They remind us why we started and guide us toward where we're going.",
      author: "Founder"
    }
  }
};

/**
 * FounderWords Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "founder-words")
 * @param {string} props.type - Founder words type: "founderWords1" | "founderWords2" | "founderWords3" | "founderWords4" (default: "founderWords1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function FounderWords({
  component = "founder-words",
  type = "founderWords1",
  content = {}
}) {
  // Validate founder words type
  const validTypes = ["founderWords1", "founderWords2", "founderWords3", "founderWords4"];
  const founderWordsType = validTypes.includes(type) ? type : "founderWords1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[founderWordsType] || defaultConfigs.founderWords1;
  
  // Get custom config from content prop
  const customConfig = content[founderWordsType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`FounderWords: Invalid config for type "${founderWordsType}", using defaults`);
    return <FounderWords1 config={defaultConfigs.founderWords1} />;
  }
  
  // Route to appropriate founder words component
  if (founderWordsType === "founderWords1") {
    if (!config.quotes || !Array.isArray(config.quotes) || config.quotes.length === 0) {
      console.warn("FounderWords1: No quotes provided, using default");
      config.quotes = defaultConfigs.founderWords1.quotes;
    }
    return <FounderWords1 config={config} />;
  }
  
  if (founderWordsType === "founderWords2") {
    if (!config.insights || !Array.isArray(config.insights) || config.insights.length === 0) {
      console.warn("FounderWords2: No insights provided, using default");
      config.insights = defaultConfigs.founderWords2.insights;
    }
    return <FounderWords2 config={config} />;
  }
  
  if (founderWordsType === "founderWords3") {
    if (!config.milestones || !Array.isArray(config.milestones) || config.milestones.length === 0) {
      console.warn("FounderWords3: No milestones provided, using default");
      config.milestones = defaultConfigs.founderWords3.milestones;
    }
    return <FounderWords3 config={config} />;
  }
  
  if (founderWordsType === "founderWords4") {
    if (!config.principles || !Array.isArray(config.principles) || config.principles.length === 0) {
      console.warn("FounderWords4: No principles provided, using default");
      config.principles = defaultConfigs.founderWords4.principles;
    }
    return <FounderWords4 config={config} />;
  }
  
  // Default fallback
  return null;
}

// Founder Words 1 Component - Timeline with quotes
function FounderWords1({ config }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const colors = config?.colors || defaultConfigs.founderWords1.colors;
  const header = config?.header || defaultConfigs.founderWords1.header;
  const quotes = config?.quotes || defaultConfigs.founderWords1.quotes;
  const closing = config?.closing || defaultConfigs.founderWords1.closing;

  const iconMap = {
    Quote,
    Sparkles,
    Heart
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={containerRef}
        style={{ opacity, y }}
        className="relative px-6 py-24 max-w-6xl mx-auto"
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
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className={`inline-flex items-center gap-2 ${colors.badges.text} ${colors.badges.background} px-6 py-3 rounded-full mb-6 ${colors.badges.border}`}
            >
              {header.badge.icon && (() => {
                const Icon = iconMap[header.badge.icon];
                return Icon ? <Icon className="w-5 h-5" /> : null;
              })()}
              <span className="text-sm font-semibold uppercase tracking-wider">{header.badge.text}</span>
            </motion.div>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent ${colors.gradients.title}`}
          >
            {header.title}
          </motion.h1>
          {header.description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`text-xl ${colors.text.secondary} max-w-2xl mx-auto leading-relaxed`}
            >
              {header.description}
            </motion.p>
          )}
        </motion.div>

        <div className="relative">
          <div className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 ${colors.gradients.timeline} transform md:-translate-x-1/2`} />

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
                <div className="relative z-10 flex-shrink-0">
                  <div className={`w-16 h-16 rounded-full ${colors.gradients.dot} flex items-center justify-center shadow-lg shadow-purple-500/50`}>
                    <div className="w-8 h-8 rounded-full bg-white" />
                  </div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`flex-1 ${colors.card} rounded-2xl p-8 ${colors.borders.default} shadow-2xl ${
                    index % 2 === 0 ? "md:mr-auto md:max-w-md" : "md:ml-auto md:max-w-md"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className={`w-8 h-8 ${colors.text.accent} flex-shrink-0`} />
                    <p className={`text-xl md:text-2xl leading-relaxed ${colors.text.primary} font-light italic`}>
                      "{quote.text}"
                    </p>
                  </div>
                  <div className={`flex items-center justify-between mt-6 pt-6 border-t ${colors.borders.timeline}`}>
                    {quote.context && (
                      <span className={`${colors.text.accent} font-semibold`}>{quote.context}</span>
                    )}
                    {quote.year && (
                      <span className={`${colors.text.primary}/60 text-sm`}>{quote.year}</span>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {closing && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-32 text-center"
          >
            <div className={`inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm px-8 py-6 rounded-2xl ${colors.borders.default}`}>
              {closing.icon && (() => {
                const Icon = iconMap[closing.icon];
                return Icon ? <Icon className="w-6 h-6 text-purple-400" /> : null;
              })()}
              <p className={`text-lg ${colors.text.secondary}`}>
                {closing.text}
              </p>
            </div>
          </motion.div>
        )}
      </motion.section>
    </main>
  );
}

// Founder Words 2 Component - Insights with main quote
function FounderWords2({ config }) {
  const colors = config?.colors || defaultConfigs.founderWords2.colors;
  const header = config?.header || defaultConfigs.founderWords2.header;
  const insights = config?.insights || defaultConfigs.founderWords2.insights;
  const mainQuote = config?.mainQuote || defaultConfigs.founderWords2.mainQuote;

  const iconMap = {
    Quote,
    ArrowRight,
    Lightbulb,
    Rocket,
    Users
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              <span className={`block bg-clip-text text-transparent ${colors.gradients.title}`}>
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
          {insights.map((insight, index) => {
            const Icon = iconMap[insight.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative ${colors.card} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                {Icon && (
                  <div className={`w-16 h-16 bg-gradient-to-br ${insight.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                )}

                <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>{insight.title}</h3>
                <div className="flex items-start gap-3 mb-6">
                  <Quote className="w-6 h-6 text-gray-400 flex-shrink-0 mt-1" />
                  <p className={`${colors.text.quote} leading-relaxed italic`}>
                    "{insight.quote}"
                  </p>
                </div>

                <div className={`flex items-center ${colors.badges.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-sm font-semibold mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {mainQuote && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative ${colors.gradients.quote} rounded-3xl p-12 md:p-16 text-white overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <Quote className="w-16 h-16 mx-auto mb-8 text-white/30" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-4xl font-light leading-relaxed mb-8"
              >
                "{mainQuote.text}"
              </motion.p>
              {mainQuote.author && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-3"
                >
                  <div className="w-12 h-0.5 bg-white/30" />
                  <span className="text-lg font-semibold">{mainQuote.author}</span>
                  <div className="w-12 h-0.5 bg-white/30" />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

// Founder Words 3 Component - Milestones
function FounderWords3({ config }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  const colors = config?.colors || defaultConfigs.founderWords3.colors;
  const header = config?.header || defaultConfigs.founderWords3.header;
  const milestones = config?.milestones || defaultConfigs.founderWords3.milestones;
  const closing = config?.closing || defaultConfigs.founderWords3.closing;

  return (
    <main className={`min-h-screen w-full ${colors.background} relative overflow-hidden`}>
      <motion.div
        style={{ y: backgroundY }}
        className={`absolute inset-0 ${colors.gradients.background} opacity-50`}
      />

      <section ref={containerRef} className="relative px-6 py-24 max-w-6xl mx-auto">
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
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-xl">
              <Quote className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.text.primary} mb-6`}>
            {header.title?.line1}
            {header.title?.line2 && (
              <span className={`block text-transparent bg-clip-text ${colors.gradients.title}`}>
                {header.title.line2}
              </span>
            )}
          </h1>
          {header.description && (
            <p className={`text-xl ${colors.text.secondary} max-w-2xl mx-auto`}>
              {header.description}
            </p>
          )}
        </motion.div>

        <div className="space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className={`flex flex-col md:flex-row items-start gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className={`flex-shrink-0 w-full md:w-64 ${index % 2 === 0 ? "md:text-left" : "md:text-right"}`}>
                {milestone.date && (
                  <div className={`inline-flex items-center gap-2 ${colors.badges.date} px-4 py-2 rounded-full mb-3`}>
                    <Calendar className="w-4 h-4" />
                    <span className="font-bold text-lg">{milestone.date}</span>
                  </div>
                )}
                {milestone.location && (
                  <div className={`inline-flex items-center gap-2 ${colors.badges.location} mb-4`}>
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{milestone.location}</span>
                  </div>
                )}
                {milestone.achievement && (
                  <div className={`inline-flex items-center gap-2 ${colors.badges.achievement} px-4 py-2 rounded-full`}>
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-semibold">{milestone.achievement}</span>
                  </div>
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className={`flex-1 ${colors.card} rounded-2xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className={`text-xl md:text-2xl ${colors.text.primary} leading-relaxed mb-4 italic`}>
                      "{milestone.quote}"
                    </p>
                    <div className={`h-px ${colors.gradients.divider}`} />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {closing && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-24 text-center"
          >
            <div className={`inline-block ${colors.gradients.closing} rounded-2xl p-8 text-white shadow-2xl`}>
              <p className="text-2xl font-light leading-relaxed max-w-3xl">
                {closing.text}
              </p>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

// Founder Words 4 Component - Principles
function FounderWords4({ config }) {
  const colors = config?.colors || defaultConfigs.founderWords4.colors;
  const header = config?.header || defaultConfigs.founderWords4.header;
  const principles = config?.principles || defaultConfigs.founderWords4.principles;
  const mainStatement = config?.mainStatement || defaultConfigs.founderWords4.mainStatement;

  const iconMap = {
    Quote,
    Sparkles,
    ArrowRight,
    Heart,
    Target,
    Zap
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          {header.badge && (
            <motion.div
              initial={{ scale: 0, rotate: 180 }}
              animate={{ scale: 1, rotate: 0 }}
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
          <h1 className="text-6xl md:text-8xl font-bold mb-8">
            {header.title?.line1 && (
              <span className={`block bg-clip-text text-transparent ${colors.gradients.title}`}>
                {header.title.line1}
              </span>
            )}
            {header.title?.line2 && (
              <span className="block text-white">{header.title.line2}</span>
            )}
          </h1>
          {header.description && (
            <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              {header.description}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {principles.map((principle, index) => {
            const Icon = iconMap[principle.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className={`relative ${colors.card} rounded-3xl p-8 ${colors.borders.default} hover:${colors.borders.hover} transition-all overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
                  
                  <div className="relative z-10">
                    {Icon && (
                      <div className={`w-16 h-16 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold mb-4">{principle.title}</h3>
                    <div className="flex items-start gap-3 mb-6">
                      <Quote className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                      <p className={`${colors.text.secondary} leading-relaxed italic`}>
                        "{principle.quote}"
                      </p>
                    </div>
                    <div className="flex items-center text-white/60 group-hover:text-white transition-colors">
                      <span className="text-sm mr-2">Explore</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {mainStatement && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative ${colors.gradients.statement} backdrop-blur-md rounded-3xl p-12 md:p-16 ${colors.borders.default} overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-30">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400 to-pink-400 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1.2, 1, 1.2],
                  rotate: [90, 180, 90],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full blur-3xl"
              />
            </div>

            <div className="relative z-10 text-center">
              <Quote className="w-16 h-16 mx-auto mb-8 text-white/30" />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-3xl md:text-5xl font-light leading-relaxed mb-8 max-w-4xl mx-auto"
              >
                "{mainStatement.text}"
              </motion.p>
              {mainStatement.author && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center justify-center gap-4"
                >
                  <div className="w-16 h-px bg-white/30" />
                  <span className="text-lg font-semibold">{mainStatement.author}</span>
                  <div className="w-16 h-px bg-white/30" />
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

