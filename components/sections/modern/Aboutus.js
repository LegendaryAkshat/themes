"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Users, Award, Heart, TrendingUp, Zap, Globe } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
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

// Default configuration for each about type
const defaultConfigs = {
  about1: {
    colors: {
      background: "bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        accent: "text-blue-600"
      },
      badges: {
        background: "bg-blue-50",
        text: "text-blue-600"
      },
      gradients: {
        title: "bg-gradient-to-r from-blue-600 to-purple-600",
        stats: {
          blue: "from-blue-500 to-blue-600",
          purple: "from-purple-500 to-purple-600",
          green: "from-green-500 to-green-600",
          orange: "from-orange-500 to-orange-600"
        },
        mission: "from-purple-50 to-pink-50",
        vision: "from-blue-50 to-cyan-50"
      }
    },
    page: {
      badge: "Our Story",
      title: "About Us",
      description: "We are passionate about delivering exceptional products and services that enhance your daily life. Our commitment to quality, innovation, and customer satisfaction drives everything we do."
    },
    stats: [
      { icon: "Users", value: "10K+", label: "Happy Customers", color: "blue" },
      { icon: "Award", value: "500+", label: "Products Sold", color: "purple" },
      { icon: "TrendingUp", value: "98%", label: "Satisfaction Rate", color: "green" },
      { icon: "Zap", value: "24/7", label: "Support Available", color: "orange" }
    ],
    mission: {
      icon: "Target",
      title: "Our Mission",
      description: "To provide high-quality products and exceptional customer service that exceed expectations. We strive to create lasting value for our customers while maintaining the highest standards of integrity and innovation in everything we do."
    },
    vision: {
      icon: "Heart",
      title: "Our Vision",
      description: "To become the leading destination for quality products and exceptional shopping experiences. We envision a future where every customer interaction is seamless, personalized, and delightful, setting new standards in the e-commerce industry."
    }
  },
  about2: {
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
      title: "About Us",
      content: [
        "Welcome to our company. We're passionate about bringing quality products and exceptional service to our customers.",
        "Our carefully curated collection features a wide variety of products, each selected for its quality, value, and ability to enhance your daily life.",
        "We believe that everyone deserves exceptional service, which is why we offer expert guidance, helpful resources, and dedicated customer support."
      ]
    }
  },
  about3: {
    colors: {
      background: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      gradients: {
        stats: "bg-gradient-to-br from-blue-50 to-indigo-50",
        mission: "bg-gradient-to-br from-purple-50 to-pink-50",
        vision: "bg-gradient-to-br from-blue-50 to-cyan-50",
        icon: {
          stats: "bg-blue-600"
        }
      }
    },
    page: {
      title: "About Us",
      description: "We are a leading e-commerce platform dedicated to providing the best products and services to our customers worldwide."
    },
    stats: [
      { icon: "Users", value: "10K+", label: "Happy Customers" },
      { icon: "Award", value: "500+", label: "Awards Won" },
      { icon: "Globe", value: "50+", label: "Countries" },
      { icon: "Heart", value: "99%", label: "Satisfaction Rate" }
    ],
    mission: {
      title: "Our Mission",
      description: "To provide exceptional products and services that enhance the lives of our customers while maintaining the highest standards of quality and customer satisfaction."
    },
    vision: {
      title: "Our Vision",
      description: "To become the world's most trusted and innovative e-commerce platform, setting new standards in customer experience and product excellence."
    }
  },
  about4: {
    colors: {
      background: "bg-black",
      text: {
        primary: "text-white",
        secondary: "text-gray-300",
        light: "text-gray-400",
        accent: "text-blue-400"
      },
      borders: {
        default: "border-gray-800"
      }
    },
    page: {
      title: "About"
    },
    content: {
      intro: {
        text: "This website is built with",
        link: {
          text: "Next.js Commerce",
          href: "#"
        },
        description: ", which is a ecommerce template for creating a headless Shopify storefront."
      },
      features: {
        title: "Support for real-world commerce features including:",
        items: [
          "Out of stock",
          "Order history",
          "Order status",
          "Cross variant / option availability",
          "Hidden product",
          "Dynamically driven content and features",
          "Seamless and secure checkout",
          "And more!"
        ]
      },
      nextjs: {
        title: "This template also allows us to highlight newer Next.js features including:",
        items: [
          "Next.js App Router",
          "Optimized for SEO",
          "React Server Components",
          "Server Actions for mutations",
          "Edge runtime",
          "And more!"
        ]
      },
      lastUpdated: "This document was last updated on July 18, 2023."
    }
  }
};

/**
 * About Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "about")
 * @param {string} props.type - About type: "about1" | "about2" | "about3" | "about4" (default: "about1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function About({
  component = "about",
  type = "about1",
  content = {}
}) {
  // Validate about type
  const validTypes = ["about1", "about2", "about3", "about4"];
  const aboutType = validTypes.includes(type) ? type : "about1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[aboutType] || defaultConfigs.about1;
  
  // Get custom config from content prop
  const customConfig = content[aboutType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`About: Invalid config for type "${aboutType}", using defaults`);
    return <About1 config={defaultConfigs.about1} />;
  }
  
  // About 1 - Stats + Mission + Vision with animations
  if (aboutType === "about1") {
    if (!config.stats || !Array.isArray(config.stats) || config.stats.length === 0) {
      console.warn("About1: No stats provided, using default");
      config.stats = defaultConfigs.about1.stats;
    }
    return <About1 config={config} />;
  }
  
  // About 2 - Simple text paragraphs
  if (aboutType === "about2") {
    if (!config.page?.content || !Array.isArray(config.page.content) || config.page.content.length === 0) {
      console.warn("About2: No content provided, using default");
      config.page = config.page || {};
      config.page.content = defaultConfigs.about2.page.content;
    }
    return <About2 config={config} />;
  }
  
  // About 3 - Stats + Mission + Vision with gradients
  if (aboutType === "about3") {
    if (!config.stats || !Array.isArray(config.stats) || config.stats.length === 0) {
      console.warn("About3: No stats provided, using default");
      config.stats = defaultConfigs.about3.stats;
    }
    return <About3 config={config} />;
  }
  
  // About 4 - Complex with features and content sections
  if (aboutType === "about4") {
    if (!config.content) {
      console.warn("About4: No content provided, using default");
      config.content = defaultConfigs.about4.content;
    }
    return <About4 config={config} />;
  }
  
  // Default fallback
  return null;
}

// About 1 Component - Stats + Mission + Vision with animations
function About1({ config }) {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  
  // Safely extract config with fallbacks
  const colors = config?.colors || defaultConfigs.about1.colors;
  const page = config?.page || defaultConfigs.about1.page;
  const stats = config?.stats || defaultConfigs.about1.stats;
  const mission = config?.mission || defaultConfigs.about1.mission;
  const vision = config?.vision || defaultConfigs.about1.vision;
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const iconMap = {
    Users,
    Award,
    TrendingUp,
    Zap,
    Target,
    Heart
  };

  useEffect(() => {
    if (!statsRef.current) return;

    const statCards = statsRef.current.querySelectorAll('.stat-card');
    
    statCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, scale: 0.5, rotation: -180 },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          delay: index * 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      const valueElement = card.querySelector('.stat-value');
      if (valueElement) {
        const finalValue = valueElement.textContent;
        const isNumber = /\d+/.test(finalValue);
        
        if (isNumber) {
          const num = parseInt(finalValue.replace(/\D/g, ''));
          const counterObj = { value: 0 };
          gsap.fromTo(
            counterObj,
            { value: 0 },
            {
              value: num,
              duration: 2,
              delay: index * 0.2 + 0.5,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse"
              },
              onUpdate: function() {
                valueElement.textContent = Math.floor(counterObj.value) + finalValue.replace(/\d/g, '');
              }
            }
          );
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        className="px-6 py-24 max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {page.badge && (
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`inline-block text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-4 py-2 rounded-full font-semibold mb-4`}
            >
              {page.badge}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-4xl md:text-6xl font-bold text-slate-800 mb-4 bg-clip-text text-transparent ${colors.gradients.title}`}
          >
            {page.title}
          </motion.h1>
          {page.description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`${colors.text.secondary} text-lg max-w-3xl mx-auto leading-relaxed`}
            >
              {page.description}
            </motion.p>
          )}
        </motion.div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            const gradientClass = colors.gradients.stats[stat.color] || colors.gradients.stats.blue;

            return (
              <motion.div
                key={index}
                className="stat-card bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-2xl transition-all"
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`stat-value text-3xl font-bold bg-gradient-to-r ${gradientClass} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className={`${colors.text.secondary} font-medium`}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${colors.card} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow`}
          >
            {mission.icon && (
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                {(() => {
                  const MissionIcon = iconMap[mission.icon];
                  return <MissionIcon className="w-8 h-8 text-blue-600" />;
                })()}
              </div>
            )}
            <h2 className={`text-2xl font-bold text-slate-800 mb-4`}>{mission.title}</h2>
            <p className={`${colors.text.secondary} leading-relaxed`}>
              {mission.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${colors.card} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow`}
          >
            {vision.icon && (
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                {(() => {
                  const VisionIcon = iconMap[vision.icon];
                  return <VisionIcon className="w-8 h-8 text-purple-600" />;
                })()}
              </div>
            )}
            <h2 className={`text-2xl font-bold text-slate-800 mb-4`}>{vision.title}</h2>
            <p className={`${colors.text.secondary} leading-relaxed`}>
              {vision.description}
            </p>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

// About 2 Component - Simple text paragraphs
function About2({ config }) {
  // Safely extract config with fallbacks
  const colors = config?.colors || defaultConfigs.about2.colors;
  const page = config?.page || defaultConfigs.about2.page;
  
  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose max-w-none"
        >
          <h1 className={`text-4xl font-bold ${colors.text.primary} mb-8`}>{page.title}</h1>
          <div className={`space-y-6 ${colors.text.secondary} leading-relaxed`}>
            {page.content && page.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

// About 3 Component - Stats + Mission + Vision with gradients
function About3({ config }) {
  // Safely extract config with fallbacks
  const colors = config?.colors || defaultConfigs.about3.colors;
  const page = config?.page || defaultConfigs.about3.page;
  const stats = config?.stats || defaultConfigs.about3.stats;
  const mission = config?.mission || defaultConfigs.about3.mission;
  const vision = config?.vision || defaultConfigs.about3.vision;

  const iconMap = {
    Users,
    Award,
    Globe,
    Heart
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-5xl font-bold ${colors.text.primary} mb-6`}>{page.title}</h1>
          {page.description && (
            <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto`}>
              {page.description}
            </p>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`text-center p-6 ${colors.gradients.stats} rounded-2xl`}
              >
                <div className={`inline-block p-4 ${colors.gradients.icon.stats} rounded-full mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-4xl font-bold ${colors.text.primary} mb-2`}>{stat.value}</div>
                <div className={colors.text.secondary}>{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${colors.gradients.mission} rounded-2xl p-8`}
          >
            <h2 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{mission.title}</h2>
            <p className={`${colors.text.secondary} leading-relaxed`}>
              {mission.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`${colors.gradients.vision} rounded-2xl p-8`}
          >
            <h2 className={`text-3xl font-bold ${colors.text.primary} mb-4`}>{vision.title}</h2>
            <p className={`${colors.text.secondary} leading-relaxed`}>
              {vision.description}
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}

// About 4 Component - Complex with features and content sections
function About4({ config }) {
  // Safely extract config with fallbacks
  const colors = config?.colors || defaultConfigs.about4.colors;
  const page = config?.page || defaultConfigs.about4.page;
  const content = config?.content || defaultConfigs.about4.content;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold">{page.title}</h1>
          
          <div className={`space-y-6 ${colors.text.secondary}`}>
            {content.intro && (
              <p>
                {content.intro.text}{" "}
                {content.intro.link && (
                  <Link href={content.intro.link.href} className={`${colors.text.accent} hover:text-blue-300 underline`}>
                    {content.intro.link.text}
                  </Link>
                )}
                {content.intro.description}
              </p>
            )}

            {content.features && (
              <div>
                <h2 className={`text-xl font-semibold ${colors.text.primary} mb-4`}>
                  {content.features.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {content.features.items && content.features.items.map((item, index) => (
                    <li key={index}>
                      {typeof item === "string" ? (
                        item
                      ) : (
                        <>
                          {item.text}{" "}
                          {item.link && (
                            <Link href={item.link.href} className={`${colors.text.accent} hover:text-blue-300 underline`}>
                              {item.link.text}
                            </Link>
                          )}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {content.nextjs && (
              <div>
                <h2 className={`text-xl font-semibold ${colors.text.primary} mb-4`}>
                  {content.nextjs.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  {content.nextjs.items && content.nextjs.items.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {content.lastUpdated && (
              <p className={`text-sm ${colors.text.light} pt-4`}>
                {content.lastUpdated}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

