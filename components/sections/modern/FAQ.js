"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

// GSAP import (only if needed for FAQ1)
let gsap, ScrollTrigger;
if (typeof window !== "undefined") {
  try {
    gsap = require("gsap").gsap;
    ScrollTrigger = require("gsap/ScrollTrigger").ScrollTrigger;
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }
  } catch (e) {
    // GSAP not available, will skip animations
  }
}

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

// Default configuration for each FAQ type
const defaultConfigs = {
  faq1: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      borders: {
        default: "border-gray-200"
      },
      buttons: {
        hover: "hover:bg-gray-50"
      }
    },
    page: {
      title: "Frequently Asked Questions"
    },
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay."
      }
    ]
  },
  faq2: {
    colors: {
      background: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      borders: {
        default: "border-gray-200"
      }
    },
    page: {
      title: "Frequently Asked Questions"
    },
    faqs: [
      {
        question: "How often should I water my plants?",
        answer: "Watering frequency depends on the type of plant, season, and environment."
      }
    ]
  },
  faq3: {
    colors: {
      background: "bg-gradient-to-br from-blue-50 to-indigo-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        accent: "text-blue-600"
      },
      borders: {
        default: "border-transparent",
        hover: "border-blue-200"
      },
      buttons: {
        hover: "hover:bg-blue-50"
      },
      icon: {
        background: "bg-blue-100"
      }
    },
    page: {
      title: "Frequently Asked Questions",
      description: "Find answers to common questions"
    },
    faqs: [
      {
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy on all items."
      }
    ]
  },
  faq4: {
    colors: {
      background: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        light: "text-gray-700"
      },
      borders: {
        default: "border-gray-200"
      }
    },
    page: {
      title: "FAQ"
    },
    faqs: [
      {
        question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      }
    ]
  }
};

/**
 * FAQ Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "faq")
 * @param {string} props.type - FAQ type: "faq1" | "faq2" | "faq3" | "faq4" (default: "faq1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function FAQ({
  component = "faq",
  type = "faq1",
  content = {}
}) {
  // Validate FAQ type
  const validTypes = ["faq1", "faq2", "faq3", "faq4"];
  const faqType = validTypes.includes(type) ? type : "faq1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[faqType] || defaultConfigs.faq1;
  
  // Get custom config from content prop
  const customConfig = content[faqType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`FAQ: Invalid config for type "${faqType}", using defaults`);
    return <FAQ1 config={defaultConfigs.faq1} />;
  }
  
  // Route to appropriate FAQ component
  if (faqType === "faq1") {
    if (!config.faqs || !Array.isArray(config.faqs) || config.faqs.length === 0) {
      console.warn("FAQ1: No FAQs provided, using default");
      config.faqs = defaultConfigs.faq1.faqs;
    }
    return <FAQ1 config={config} />;
  }
  
  if (faqType === "faq2") {
    if (!config.faqs || !Array.isArray(config.faqs) || config.faqs.length === 0) {
      console.warn("FAQ2: No FAQs provided, using default");
      config.faqs = defaultConfigs.faq2.faqs;
    }
    return <FAQ2 config={config} />;
  }
  
  if (faqType === "faq3") {
    if (!config.faqs || !Array.isArray(config.faqs) || config.faqs.length === 0) {
      console.warn("FAQ3: No FAQs provided, using default");
      config.faqs = defaultConfigs.faq3.faqs;
    }
    return <FAQ3 config={config} />;
  }
  
  if (faqType === "faq4") {
    if (!config.faqs || !Array.isArray(config.faqs) || config.faqs.length === 0) {
      console.warn("FAQ4: No FAQs provided, using default");
      config.faqs = defaultConfigs.faq4.faqs;
    }
    return <FAQ4 config={config} />;
  }
  
  // Default fallback
  return null;
}

// FAQ 1 Component - Accordion with GSAP animations and icon
function FAQ1({ config }) {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);
  
  const colors = config?.colors || defaultConfigs.faq1.colors;
  const page = config?.page || defaultConfigs.faq1.page;
  const faqs = config?.faqs || defaultConfigs.faq1.faqs;

  useEffect(() => {
    if (!sectionRef.current || !gsap || !ScrollTrigger) return;

    const items = sectionRef.current.querySelectorAll('.faq-item');
    
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={sectionRef}
        className="px-6 py-24 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block p-4 bg-blue-100 rounded-full mb-4"
          >
            <HelpCircle className="w-12 h-12 text-blue-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-4xl md:text-5xl font-bold ${colors.text.primary} mb-4`}
          >
            {page.title}
          </motion.h1>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${colors.card} rounded-lg shadow-md overflow-hidden`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className={`w-full px-6 py-4 flex items-center justify-between ${colors.buttons.hover} transition-colors`}
                >
                  <span className={`font-semibold ${colors.text.primary} text-left`}>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${colors.text.secondary}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className={`${colors.text.secondary} leading-relaxed`}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

// FAQ 2 Component - Simple accordion
function FAQ2({ config }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  const colors = config?.colors || defaultConfigs.faq2.colors;
  const page = config?.page || defaultConfigs.faq2.page;
  const faqs = config?.faqs || defaultConfigs.faq2.faqs;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className={`text-4xl font-bold ${colors.text.primary} mb-12 text-center`}>{page.title}</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`border ${colors.borders.default} rounded-lg overflow-hidden`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className={`font-semibold ${colors.text.primary} text-left`}>{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 ${colors.text.secondary} transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className={`px-6 py-4 ${colors.text.secondary} border-t ${colors.borders.default}`}>
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

// FAQ 3 Component - Accordion with gradient background and description
function FAQ3({ config }) {
  const [openIndex, setOpenIndex] = useState(0);
  
  const colors = config?.colors || defaultConfigs.faq3.colors;
  const page = config?.page || defaultConfigs.faq3.page;
  const faqs = config?.faqs || defaultConfigs.faq3.faqs;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          {colors.icon && (
            <div className={`inline-block p-4 ${colors.icon.background} rounded-full mb-4`}>
              <HelpCircle className={`w-12 h-12 ${colors.text.accent}`} />
            </div>
          )}
          <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{page.title}</h1>
          {page.description && (
            <p className={colors.text.secondary}>{page.description}</p>
          )}
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card} rounded-xl shadow-md overflow-hidden border-2 ${colors.borders.default} hover:${colors.borders.hover} transition-colors`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className={`w-full px-6 py-5 flex items-center justify-between ${colors.buttons.hover} transition-colors`}
              >
                <span className={`font-semibold ${colors.text.primary} text-left pr-4`}>{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className={`w-5 h-5 ${colors.text.accent}`} />
                </motion.div>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="px-6 pb-5"
                >
                  <p className={`${colors.text.secondary} leading-relaxed`}>{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

// FAQ 4 Component - Simple list format (all expanded)
function FAQ4({ config }) {
  const colors = config?.colors || defaultConfigs.faq4.colors;
  const page = config?.page || defaultConfigs.faq4.page;
  const faqs = config?.faqs || defaultConfigs.faq4.faqs;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className={`text-5xl font-light ${colors.text.primary} mb-12`}>{page.title}</h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border-b ${colors.borders.default} pb-6`}
              >
                <h2 className={`text-xl font-medium ${colors.text.primary} mb-3`}>{faq.question}</h2>
                <p className={`${colors.text.light || colors.text.secondary} leading-relaxed`}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

