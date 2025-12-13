"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Users, Rocket, Award, Heart, CheckCircle2, ArrowRight, Sparkles, Star } from "lucide-react";

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

// Default configuration for each what we offer type
const defaultConfigs = {
  whatWeOffer1: {
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
        title: "bg-gradient-to-r from-blue-600 to-purple-600"
      }
    },
    header: {
      badge: "Our Solutions",
      title: {
        line1: "What We",
        line2: "Offer You"
      },
      description: "Comprehensive solutions designed to elevate your business."
    },
    offerings: [
      {
        icon: "Zap",
        title: "Lightning-Fast Solutions",
        description: "Cutting-edge technology that delivers results.",
        features: ["Real-time processing", "Scalable infrastructure"],
        gradient: "from-yellow-500 to-orange-500"
      }
    ]
  },
  whatWeOffer2: {
    colors: {
      background: "bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900",
      card: "bg-white/10 backdrop-blur-md",
      text: {
        primary: "text-white",
        secondary: "text-cyan-200",
        accent: "text-cyan-300"
      },
      borders: {
        default: "border-white/20",
        hover: "border-white/40"
      },
      badges: {
        background: "bg-cyan-900/30 backdrop-blur-sm",
        border: "border-cyan-500/30",
        text: "text-cyan-300"
      },
      buttons: {
        primary: "bg-white text-cyan-900"
      }
    },
    header: {
      badge: {
        text: "Our Services",
        icon: "Sparkles"
      },
      title: {
        line1: "Comprehensive",
        line2: "Solutions"
      },
      description: "Everything you need to succeed, delivered with expertise and care."
    },
    services: [
      {
        category: "Technology",
        title: "Advanced Platform",
        description: "State-of-the-art infrastructure built for performance.",
        benefits: [
          "Cloud-native architecture",
          "Auto-scaling capabilities"
        ],
        gradient: "from-blue-500 to-cyan-500"
      }
    ],
    cta: {
      title: "Ready to Transform Your Business?",
      description: "Let's discuss how our solutions can help you achieve your goals.",
      buttonText: "Schedule a Consultation"
    }
  },
  whatWeOffer3: {
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
        features: "bg-gradient-to-r from-indigo-50 to-purple-50",
        closing: "bg-gradient-to-r from-indigo-600 to-purple-600"
      },
      check: {
        icon: "text-indigo-600"
      }
    },
    header: {
      badge: "What's Included",
      title: {
        line1: "Everything You Need",
        line2: "To Succeed"
      },
      description: "A complete suite of tools, support, and resources designed for your success."
    },
    offerings: [
      {
        icon: "Zap",
        title: "Speed & Performance",
        description: "Lightning-fast response times and optimized performance.",
        gradient: "from-yellow-500 to-orange-500"
      }
    ],
    features: [
      "Advanced analytics and insights",
      "Custom integrations available"
    ],
    cta: {
      text: "Experience the difference. Start your journey with us today.",
      buttonText: "Explore Our Solutions"
    }
  },
  whatWeOffer4: {
    colors: {
      background: "bg-gradient-to-br from-gray-50 via-white to-indigo-50/30",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        light: "text-gray-500"
      },
      badges: {
        icon: "text-indigo-600",
        text: "text-indigo-600"
      },
      gradients: {
        title: "bg-gradient-to-r from-indigo-600 to-purple-600",
        closing: "bg-gradient-to-r from-indigo-600 to-purple-600"
      },
      rings: {
        popular: "ring-4 ring-purple-500 ring-opacity-50"
      }
    },
    header: {
      badge: {
        text: "Our Offerings",
        icon: "Sparkles"
      },
      title: {
        line1: "Solutions for",
        line2: "Every Stage"
      },
      description: "Choose the package that fits your needs, with the flexibility to grow as you do."
    },
    packages: [
      {
        name: "Essential",
        description: "Perfect for getting started",
        price: "Starting at",
        priceValue: "$99",
        features: [
          "Core functionality",
          "Email support"
        ],
        gradient: "from-blue-500 to-cyan-500",
        popular: false
      }
    ],
    bottomNote: {
      text: "All packages include our commitment to excellence."
    }
  }
};

/**
 * WhatWeOffer Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "what-we-offer")
 * @param {string} props.type - What we offer type: "whatWeOffer1" | "whatWeOffer2" | "whatWeOffer3" | "whatWeOffer4" (default: "whatWeOffer1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function WhatWeOffer({
  component = "what-we-offer",
  type = "whatWeOffer1",
  content = {}
}) {
  // Validate what we offer type
  const validTypes = ["whatWeOffer1", "whatWeOffer2", "whatWeOffer3", "whatWeOffer4"];
  const whatWeOfferType = validTypes.includes(type) ? type : "whatWeOffer1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[whatWeOfferType] || defaultConfigs.whatWeOffer1;
  
  // Get custom config from content prop
  const customConfig = content[whatWeOfferType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`WhatWeOffer: Invalid config for type "${whatWeOfferType}", using defaults`);
    return <WhatWeOffer1 config={defaultConfigs.whatWeOffer1} />;
  }
  
  // Route to appropriate what we offer component
  if (whatWeOfferType === "whatWeOffer1") {
    if (!config.offerings || !Array.isArray(config.offerings) || config.offerings.length === 0) {
      console.warn("WhatWeOffer1: No offerings provided, using default");
      config.offerings = defaultConfigs.whatWeOffer1.offerings;
    }
    return <WhatWeOffer1 config={config} />;
  }
  
  if (whatWeOfferType === "whatWeOffer2") {
    if (!config.services || !Array.isArray(config.services) || config.services.length === 0) {
      console.warn("WhatWeOffer2: No services provided, using default");
      config.services = defaultConfigs.whatWeOffer2.services;
    }
    return <WhatWeOffer2 config={config} />;
  }
  
  if (whatWeOfferType === "whatWeOffer3") {
    if (!config.offerings || !Array.isArray(config.offerings) || config.offerings.length === 0) {
      console.warn("WhatWeOffer3: No offerings provided, using default");
      config.offerings = defaultConfigs.whatWeOffer3.offerings;
    }
    return <WhatWeOffer3 config={config} />;
  }
  
  if (whatWeOfferType === "whatWeOffer4") {
    if (!config.packages || !Array.isArray(config.packages) || config.packages.length === 0) {
      console.warn("WhatWeOffer4: No packages provided, using default");
      config.packages = defaultConfigs.whatWeOffer4.packages;
    }
    return <WhatWeOffer4 config={config} />;
  }
  
  // Default fallback
  return null;
}

// What We Offer 1 Component - Grid with features
function WhatWeOffer1({ config }) {
  const colors = config?.colors || defaultConfigs.whatWeOffer1.colors;
  const header = config?.header || defaultConfigs.whatWeOffer1.header;
  const offerings = config?.offerings || defaultConfigs.whatWeOffer1.offerings;

  const iconMap = {
    Zap,
    Shield,
    Users,
    Rocket,
    Award,
    Heart
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => {
            const Icon = iconMap[offering.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02, rotateY: 5 }}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${offering.gradient} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10">
                  {Icon && (
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${offering.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                  )}

                  <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>{offering.title}</h3>
                  {offering.description && (
                    <p className={`${colors.text.secondary} leading-relaxed mb-6`}>{offering.description}</p>
                  )}

                  {offering.features && offering.features.length > 0 && (
                    <ul className="space-y-2">
                      {offering.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className={`flex items-center gap-2 text-sm ${colors.text.secondary}`}>
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${offering.gradient}`} />
                          {feature}
                        </li>
                      ))}
                    </ul>
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

// What We Offer 2 Component - Services with CTA
function WhatWeOffer2({ config }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  
  const colors = config?.colors || defaultConfigs.whatWeOffer2.colors;
  const header = config?.header || defaultConfigs.whatWeOffer2.header;
  const services = config?.services || defaultConfigs.whatWeOffer2.services;
  const cta = config?.cta || defaultConfigs.whatWeOffer2.cta;

  const iconMap = {
    CheckCircle2,
    ArrowRight,
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
              className={`inline-flex items-center gap-2 ${colors.badges.text} ${colors.badges.background} px-6 py-3 rounded-full mb-6 ${colors.badges.border}`}
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
            <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
              {header.description}
            </p>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative ${colors.card} rounded-3xl p-8 ${colors.borders.default} hover:${colors.borders.hover} transition-all overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity`} />
              
              <div className="relative z-10">
                {service.category && (
                  <div className={`inline-block text-xs uppercase tracking-wider ${colors.text.accent} bg-cyan-900/30 px-3 py-1 rounded-full mb-4`}>
                    {service.category}
                  </div>
                )}
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                {service.description && (
                  <p className={`${colors.text.secondary} mb-6 leading-relaxed`}>{service.description}</p>
                )}

                {service.benefits && service.benefits.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {service.benefits.map((benefit, bIndex) => (
                      <motion.li
                        key={bIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + bIndex * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className={`w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5`} />
                        <span className={`${colors.text.secondary} text-sm`}>{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                )}

                <div className={`flex items-center ${colors.text.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-sm mr-2">Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {cta && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`relative bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 backdrop-blur-md rounded-3xl p-12 md:p-16 ${colors.borders.default} overflow-hidden`}
          >
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center">
              {cta.title && (
                <h2 className={`text-3xl md:text-4xl font-bold mb-6`}>
                  {cta.title}
                </h2>
              )}
              {cta.description && (
                <p className={`text-xl ${colors.text.secondary} mb-8 max-w-2xl mx-auto`}>
                  {cta.description}
                </p>
              )}
              {cta.buttonText && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${colors.buttons.primary} px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all`}
                >
                  {cta.buttonText}
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </motion.section>
    </main>
  );
}

// What We Offer 3 Component - Offerings with features section
function WhatWeOffer3({ config }) {
  const colors = config?.colors || defaultConfigs.whatWeOffer3.colors;
  const header = config?.header || defaultConfigs.whatWeOffer3.header;
  const offerings = config?.offerings || defaultConfigs.whatWeOffer3.offerings;
  const features = config?.features || defaultConfigs.whatWeOffer3.features;
  const cta = config?.cta || defaultConfigs.whatWeOffer3.cta;

  const iconMap = {
    Zap,
    Shield,
    Users,
    Rocket,
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
          {offerings.map((offering, index) => {
            const Icon = iconMap[offering.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-gradient-to-br ${offering.gradient} rounded-3xl p-10 text-white shadow-2xl overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl" />
                </div>

                <div className="relative z-10">
                  {Icon && (
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-10 h-10" />
                    </div>
                  )}
                  <h3 className="text-3xl font-bold mb-4">{offering.title}</h3>
                  {offering.description && (
                    <p className="text-white/90 text-lg leading-relaxed">{offering.description}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {features && features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${colors.gradients.features} rounded-3xl p-12`}
          >
            <h3 className={`text-3xl font-bold ${colors.text.primary} mb-8 text-center`}>
              Additional Features & Benefits
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-3 ${colors.card} rounded-xl p-4 shadow-sm`}
                >
                  <CheckCircle2 className={`w-6 h-6 ${colors.check.icon} flex-shrink-0`} />
                  <span className={`${colors.text.primary} font-medium`}>{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <div className={`inline-block ${colors.gradients.closing} rounded-2xl p-8 text-white shadow-2xl`}>
              {cta.text && (
                <p className={`text-2xl font-light leading-relaxed max-w-3xl mb-6`}>
                  {cta.text}
                </p>
              )}
              {cta.buttonText && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
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

// What We Offer 4 Component - Packages/pricing
function WhatWeOffer4({ config }) {
  const colors = config?.colors || defaultConfigs.whatWeOffer4.colors;
  const header = config?.header || defaultConfigs.whatWeOffer4.header;
  const packages = config?.packages || defaultConfigs.whatWeOffer4.packages;
  const bottomNote = config?.bottomNote || defaultConfigs.whatWeOffer4.bottomNote;

  const iconMap = {
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Star
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

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative ${colors.card} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden ${
                pkg.popular ? colors.rings.popular : ""
              }`}
            >
              {pkg.popular && (
                <div className={`absolute top-0 right-0 bg-gradient-to-r ${pkg.gradient} text-white px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-semibold flex items-center gap-1`}>
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${pkg.gradient} mb-6 rounded-full`} />

              <h3 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{pkg.name}</h3>
              {pkg.description && (
                <p className={`${colors.text.secondary} mb-6`}>{pkg.description}</p>
              )}

              <div className="mb-6">
                {pkg.price && (
                  <div className={`text-sm ${colors.text.light} mb-1`}>{pkg.price}</div>
                )}
                {pkg.priceValue && (
                  <div className={`text-4xl font-bold ${colors.text.primary}`}>
                    {pkg.priceValue}
                  </div>
                )}
              </div>

              {pkg.features && pkg.features.length > 0 && (
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIndex) => (
                    <motion.li
                      key={fIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + fIndex * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className={`w-5 h-5 text-transparent bg-gradient-to-br ${pkg.gradient} bg-clip-text flex-shrink-0 mt-0.5`} />
                      <span className={colors.text.secondary}>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              )}

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${pkg.gradient} text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        {bottomNote && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className={`inline-block ${colors.gradients.closing} rounded-2xl p-8 text-white shadow-2xl`}>
              <p className={`text-xl font-light leading-relaxed max-w-3xl`}>
                {bottomNote.text}
              </p>
            </div>
          </motion.div>
        )}
      </section>
    </main>
  );
}

