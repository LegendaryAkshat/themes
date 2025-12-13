"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Heart, Target, Sparkles, ArrowRight, Lightbulb, Quote, Zap, Users, CheckCircle2 } from "lucide-react";

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

// Default configuration for each our belief type
const defaultConfigs = {
  ourBelief1: {
    colors: {
      background: "bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      badges: {
        background: "bg-blue-50",
        text: "text-blue-600"
      },
      gradients: {
        title: "bg-gradient-to-r from-blue-600 to-purple-600",
        hover: "text-blue-600"
      }
    },
    header: {
      badge: "Our Philosophy",
      title: {
        line1: "What We",
        line2: "Believe In"
      },
      description: "The core beliefs that guide our decisions, shape our culture, and define our commitment to excellence."
    },
    beliefs: [
      {
        icon: "Heart",
        title: "People First",
        statement: "We believe that success is built on genuine relationships, mutual respect, and putting people at the center of everything we do.",
        gradient: "from-rose-500 to-pink-500"
      }
    ],
    hoverAction: {
      text: "Learn more",
      icon: "ArrowRight",
      enabled: true
    }
  },
  ourBelief2: {
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
        hover: "border-white/40"
      },
      badges: {
        background: "bg-purple-900/30 backdrop-blur-sm",
        border: "border-purple-500/30",
        text: "text-purple-300"
      }
    },
    header: {
      badge: {
        text: "Core Principles",
        icon: "Sparkles"
      },
      title: "Our Beliefs",
      description: "The fundamental principles that shape our thinking and guide our actions."
    },
    principles: [
      {
        icon: "Lightbulb",
        title: "Innovation",
        belief: "We believe in challenging the status quo and finding better ways to solve problems.",
        gradient: "from-yellow-500 to-orange-500"
      }
    ],
    closing: {
      text: "These beliefs guide every decision, shape our culture, and inspire us to create something meaningful."
    }
  },
  ourBelief3: {
    colors: {
      background: "bg-white",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      badges: {
        background: "bg-indigo-50",
        text: "text-indigo-600"
      },
      gradients: {
        title: "bg-gradient-to-r from-indigo-600 to-purple-600",
        manifesto: "bg-gradient-to-r from-indigo-50 to-purple-50",
        closing: "bg-gradient-to-r from-indigo-600 to-purple-600"
      },
      check: {
        icon: "text-indigo-600"
      }
    },
    header: {
      badge: "Our Manifesto",
      title: {
        line1: "What We",
        line2: "Stand For"
      },
      description: "A declaration of our beliefs, values, and commitments to our community and the world."
    },
    manifesto: [
      {
        icon: "Heart",
        statement: "We believe in the power of human connection and the impact of genuine relationships.",
        gradient: "from-rose-500 to-pink-500"
      }
    ],
    commitments: [
      "Transparency in all our communications",
      "Ethical practices in every decision"
    ],
    bottomStatement: {
      text: "These beliefs and commitments guide us every day, in every decision, as we work to create something meaningful together."
    }
  },
  ourBelief4: {
    colors: {
      background: "bg-gradient-to-br from-gray-50 via-white to-indigo-50/30",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      badges: {
        icon: "text-indigo-600",
        text: "text-indigo-600"
      },
      gradients: {
        title: "bg-gradient-to-r from-indigo-600 to-purple-600",
        quote: "bg-gradient-to-r from-indigo-600 to-purple-600"
      }
    },
    header: {
      badge: {
        text: "Our Foundation",
        icon: "Sparkles"
      },
      title: {
        line1: "Beliefs That",
        line2: "Define Us"
      },
      description: "Six core beliefs that shape our culture, guide our decisions, and inspire our work."
    },
    beliefs: [
      {
        icon: "Heart",
        title: "Human-Centered",
        description: "People are at the heart of everything we do. We prioritize understanding, empathy, and genuine care.",
        gradient: "from-rose-500 to-pink-500"
      }
    ],
    quote: {
      text: "These beliefs aren't just ideals—they're the principles we live by, the standards we hold ourselves to, and the foundation of everything we build together.",
      label: "Our Promise"
    }
  }
};

/**
 * OurBelief Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "our-belief")
 * @param {string} props.type - Our belief type: "ourBelief1" | "ourBelief2" | "ourBelief3" | "ourBelief4" (default: "ourBelief1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function OurBelief({
  component = "our-belief",
  type = "ourBelief1",
  content = {}
}) {
  // Validate our belief type
  const validTypes = ["ourBelief1", "ourBelief2", "ourBelief3", "ourBelief4"];
  const ourBeliefType = validTypes.includes(type) ? type : "ourBelief1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[ourBeliefType] || defaultConfigs.ourBelief1;
  
  // Get custom config from content prop
  const customConfig = content[ourBeliefType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`OurBelief: Invalid config for type "${ourBeliefType}", using defaults`);
    return <OurBelief1 config={defaultConfigs.ourBelief1} />;
  }
  
  // Route to appropriate our belief component
  if (ourBeliefType === "ourBelief1") {
    if (!config.beliefs || !Array.isArray(config.beliefs) || config.beliefs.length === 0) {
      console.warn("OurBelief1: No beliefs provided, using default");
      config.beliefs = defaultConfigs.ourBelief1.beliefs;
    }
    return <OurBelief1 config={config} />;
  }
  
  if (ourBeliefType === "ourBelief2") {
    if (!config.principles || !Array.isArray(config.principles) || config.principles.length === 0) {
      console.warn("OurBelief2: No principles provided, using default");
      config.principles = defaultConfigs.ourBelief2.principles;
    }
    return <OurBelief2 config={config} />;
  }
  
  if (ourBeliefType === "ourBelief3") {
    if (!config.manifesto || !Array.isArray(config.manifesto) || config.manifesto.length === 0) {
      console.warn("OurBelief3: No manifesto provided, using default");
      config.manifesto = defaultConfigs.ourBelief3.manifesto;
    }
    return <OurBelief3 config={config} />;
  }
  
  if (ourBeliefType === "ourBelief4") {
    if (!config.beliefs || !Array.isArray(config.beliefs) || config.beliefs.length === 0) {
      console.warn("OurBelief4: No beliefs provided, using default");
      config.beliefs = defaultConfigs.ourBelief4.beliefs;
    }
    return <OurBelief4 config={config} />;
  }
  
  // Default fallback
  return null;
}

// Our Belief 1 Component - Grid with hover action
function OurBelief1({ config }) {
  const colors = config?.colors || defaultConfigs.ourBelief1.colors;
  const header = config?.header || defaultConfigs.ourBelief1.header;
  const beliefs = config?.beliefs || defaultConfigs.ourBelief1.beliefs;
  const hoverAction = config?.hoverAction || defaultConfigs.ourBelief1.hoverAction;

  const iconMap = {
    Heart,
    Target,
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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {beliefs.map((belief, index) => {
            const Icon = iconMap[belief.icon];
            if (!Icon) return null;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${belief.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${belief.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {belief.title && (
                    <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>{belief.title}</h3>
                  )}
                  {belief.statement && (
                    <p className={`${colors.text.secondary} leading-relaxed mb-6`}>{belief.statement}</p>
                  )}

                  {hoverAction && hoverAction.enabled && (
                    <div className={`flex items-center ${colors.gradients.hover} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      {hoverAction.text && (
                        <span className="text-sm font-semibold mr-2">{hoverAction.text}</span>
                      )}
                      {hoverAction.icon && (() => {
                        const ActionIcon = iconMap[hoverAction.icon];
                        return ActionIcon ? <ActionIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /> : null;
                      })()}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

// Our Belief 2 Component - Horizontal cards with scroll animations
function OurBelief2({ config }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  const colors = config?.colors || defaultConfigs.ourBelief2.colors;
  const header = config?.header || defaultConfigs.ourBelief2.header;
  const principles = config?.principles || defaultConfigs.ourBelief2.principles;
  const closing = config?.closing || defaultConfigs.ourBelief2.closing;

  const iconMap = {
    Lightbulb,
    Heart,
    Target,
    Sparkles,
    Quote
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={containerRef}
        style={{ opacity, y }}
        className="relative px-6 py-24 max-w-7xl mx-auto"
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
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white`}>
            {header.title}
          </h1>
          {header.description && (
            <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              {header.description}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {principles.map((principle, index) => {
            const Icon = iconMap[principle.icon];
            if (!Icon) return null;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`group relative ${colors.card} rounded-3xl p-8 border ${colors.borders.default} hover:${colors.borders.hover} transition-all overflow-hidden`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${principle.gradient} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    {principle.title && (
                      <h3 className="text-3xl font-bold">{principle.title}</h3>
                    )}
                  </div>
                  {principle.belief && (
                    <div className="flex items-start gap-3">
                      <Quote className={`w-6 h-6 ${colors.text.accent} flex-shrink-0 mt-1`} />
                      <p className={`${colors.text.secondary} leading-relaxed italic text-lg`}>
                        "{principle.belief}"
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {closing && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <div className={`inline-block ${colors.card} px-8 py-6 rounded-2xl border ${colors.borders.default}`}>
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

// Our Belief 3 Component - Manifesto with commitments
function OurBelief3({ config }) {
  const colors = config?.colors || defaultConfigs.ourBelief3.colors;
  const header = config?.header || defaultConfigs.ourBelief3.header;
  const manifesto = config?.manifesto || defaultConfigs.ourBelief3.manifesto;
  const commitments = config?.commitments || defaultConfigs.ourBelief3.commitments;
  const bottomStatement = config?.bottomStatement || defaultConfigs.ourBelief3.bottomStatement;

  const iconMap = {
    Heart,
    Target,
    Zap,
    Users,
    CheckCircle2
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
              <span className={`block text-transparent bg-clip-text ${colors.gradients.title}`}>
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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {manifesto.map((item, index) => {
            const Icon = iconMap[item.icon];
            if (!Icon) return null;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${item.gradient} rounded-3xl p-10 text-white shadow-2xl overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  {item.statement && (
                    <p className="text-2xl font-light leading-relaxed">
                      {item.statement}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {commitments && commitments.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${colors.gradients.manifesto} rounded-3xl p-12`}
          >
            <h3 className={`text-3xl font-bold ${colors.text.primary} mb-8 text-center`}>
              Our Commitments
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {commitments.map((commitment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-start gap-3 ${colors.card} rounded-xl p-4 shadow-sm`}
                >
                  <CheckCircle2 className={`w-6 h-6 ${colors.check.icon} flex-shrink-0 mt-0.5`} />
                  <span className={`${colors.text.primary} font-medium`}>{commitment}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {bottomStatement && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className={`inline-block ${colors.gradients.closing} rounded-2xl p-8 text-white shadow-2xl`}>
              <p className="text-2xl font-light leading-relaxed max-w-3xl">
                {bottomStatement.text}
              </p>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

// Our Belief 4 Component - Grid with quote
function OurBelief4({ config }) {
  const colors = config?.colors || defaultConfigs.ourBelief4.colors;
  const header = config?.header || defaultConfigs.ourBelief4.header;
  const beliefs = config?.beliefs || defaultConfigs.ourBelief4.beliefs;
  const quote = config?.quote || defaultConfigs.ourBelief4.quote;

  const iconMap = {
    Quote,
    Sparkles,
    Heart,
    Target,
    Zap,
    Users
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
                return Icon ? <Icon className={`w-6 h-6 ${colors.badges.icon}`} /> : null;
              })()}
              <span className={`text-sm uppercase tracking-wider ${colors.badges.text} font-semibold`}>
                {header.badge.text}
              </span>
            </motion.div>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {beliefs.map((belief, index) => {
            const Icon = iconMap[belief.icon];
            if (!Icon) return null;
            
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
                <div className={`absolute inset-0 bg-gradient-to-br ${belief.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className={`w-20 h-20 bg-gradient-to-br ${belief.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {belief.title && (
                    <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>{belief.title}</h3>
                  )}
                  {belief.description && (
                    <p className={`${colors.text.secondary} leading-relaxed`}>{belief.description}</p>
                  )}

                  <div className={`mt-6 h-1 w-0 group-hover:w-full bg-gradient-to-r ${belief.gradient} transition-all duration-500 rounded-full`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {quote && (
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

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <Quote className="w-16 h-16 mx-auto mb-8 text-white/30" />
              {quote.text && (
                <p className="text-3xl md:text-4xl font-light leading-relaxed mb-6">
                  "{quote.text}"
                </p>
              )}
              {quote.label && (
                <div className="flex items-center justify-center gap-4">
                  <div className="w-16 h-px bg-white/30" />
                  <span className="text-lg font-semibold">{quote.label}</span>
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

