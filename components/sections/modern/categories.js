"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
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

// Default configuration for each category type
const defaultConfigs = {
  category1: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      badges: {
        blue: {
          background: "bg-blue-50",
          text: "text-blue-600"
        },
        purple: {
          background: "bg-purple-50",
          text: "text-purple-600"
        }
      },
      buttons: {
        blue: "bg-blue-600 hover:bg-blue-700",
        purple: "bg-purple-600 hover:bg-purple-700"
      },
      decorations: {
        blue: "bg-blue-100",
        purple: "bg-purple-100"
      }
    },
    categories: [
      {
        badge: "Featured Category",
        badgeColor: "blue",
        title: "Premium Device Pro & Pro Max",
        description: "Discover our premium device collection with cutting-edge features, advanced technology, and exceptional performance designed for professionals.",
        button: {
          text: "Explore Collection",
          color: "blue",
          link: "#"
        }
      },
      {
        badge: "Top Performance",
        badgeColor: "purple",
        title: "Professional Laptop M4",
        description: "14-core CPU with advanced performance and efficiency cores, delivering unparalleled speed and power for demanding workloads.",
        button: {
          text: "Shop Now",
          color: "purple",
          link: "#"
        }
      }
    ]
  },
  category2: {
    colors: {
      background: "bg-white",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-700"
      },
      borders: {
        default: "border-gray-200",
        hover: "border-blue-600"
      },
      buttons: {
        hover: "hover:bg-gray-100",
        category: {
          hover: "hover:border-blue-600 hover:bg-blue-50"
        }
      }
    },
    navigation: {
      prev: { enabled: true },
      next: { enabled: true }
    },
    categories: [
      "Laptop & PC",
      "Watches",
      "Mobile & Tablet",
      "Health & Sport",
      "Home Appliance",
      "Games & Video",
      "Television"
    ]
  },
  category3: {
    colors: {
      background: "bg-gradient-to-br from-gray-50 via-white to-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        light: "text-gray-500"
      },
      badges: {
        background: "bg-blue-50",
        text: "text-blue-600"
      },
      gradients: {
        title: "bg-gradient-to-r from-blue-600 to-purple-600",
        button: "bg-gradient-to-r from-blue-600 to-purple-600",
        buttonHover: "bg-gradient-to-r from-purple-600 to-blue-600",
        blue: "from-blue-500 to-blue-600",
        purple: "from-purple-500 to-purple-600",
        green: "from-green-500 to-green-600",
        red: "from-red-500 to-red-600",
        orange: "from-orange-500 to-orange-600",
        pink: "from-pink-500 to-pink-600",
        indigo: "from-indigo-500 to-indigo-600",
        yellow: "from-yellow-500 to-yellow-600"
      },
      decorations: {
        blue: "bg-blue-200",
        purple: "bg-purple-200"
      }
    },
    page: {
      badge: {
        text: "Explore Categories",
        icon: "Sparkles"
      },
      title: "Browse by Category",
      description: "Explore our wide range of product categories and find exactly what you're looking for. Each category is carefully curated to bring you the best selection."
    },
    categories: [
      {
        name: "Laptop & PC",
        icon: "💻",
        count: 24,
        color: "blue",
        description: "High-performance computing",
        link: "#"
      },
      {
        name: "Watches",
        icon: "⌚",
        count: 18,
        color: "purple",
        description: "Timepieces & smartwatches",
        link: "#"
      }
    ],
    cta: {
      text: "View All Categories",
      icon: "ShoppingBag",
      enabled: true
    },
    grid: {
      columns: {
        mobile: "grid-cols-2",
        tablet: "sm:grid-cols-3",
        desktop: "md:grid-cols-4",
        large: "lg:grid-cols-4"
      },
      gap: "gap-6 md:gap-8"
    }
  },
  category4: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        accent: "text-blue-600"
      },
      gradients: {
        blue: "from-blue-500 to-blue-600",
        purple: "from-purple-500 to-purple-600",
        pink: "from-pink-500 to-pink-600",
        red: "from-red-500 to-red-600",
        yellow: "from-yellow-500 to-yellow-600"
      }
    },
    page: {
      title: "SHOP BY CATEGORIES",
      footer: "Discovery all new items"
    },
    categories: [
      {
        name: "Clothing",
        image: "👕",
        color: "blue",
        link: "#"
      },
      {
        name: "Sunglasses",
        image: "🕶️",
        color: "purple",
        link: "#"
      }
    ],
    grid: {
      columns: {
        mobile: "grid-cols-2",
        tablet: "md:grid-cols-3",
        desktop: "lg:grid-cols-5"
      },
      gap: "gap-6"
    }
  }
};

/**
 * Categories Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "categories")
 * @param {string} props.type - Category type: "category1" | "category2" | "category3" | "category4" (default: "category1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function Categories({
  component = "categories",
  type = "category1",
  content = {}
}) {
  // Validate category type
  const validTypes = ["category1", "category2", "category3", "category4"];
  const categoryType = validTypes.includes(type) ? type : "category1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[categoryType] || defaultConfigs.category1;
  
  // Get custom config from content prop
  const customConfig = content[categoryType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`Categories: Invalid config for type "${categoryType}", using defaults`);
    return <Category1 config={defaultConfigs.category1} />;
  }
  
  // Route to appropriate category component
  if (categoryType === "category1") {
    if (!config.categories || !Array.isArray(config.categories) || config.categories.length === 0) {
      console.warn("Category1: No categories provided, using default");
      config.categories = defaultConfigs.category1.categories;
    }
    return <Category1 config={config} />;
  }
  
  if (categoryType === "category2") {
    if (!config.categories || !Array.isArray(config.categories) || config.categories.length === 0) {
      console.warn("Category2: No categories provided, using default");
      config.categories = defaultConfigs.category2.categories;
    }
    return <Category2 config={config} />;
  }
  
  if (categoryType === "category3") {
    if (!config.categories || !Array.isArray(config.categories) || config.categories.length === 0) {
      console.warn("Category3: No categories provided, using default");
      config.categories = defaultConfigs.category3.categories;
    }
    return <Category3 config={config} />;
  }
  
  if (categoryType === "category4") {
    if (!config.categories || !Array.isArray(config.categories) || config.categories.length === 0) {
      console.warn("Category4: No categories provided, using default");
      config.categories = defaultConfigs.category4.categories;
    }
    return <Category4 config={config} />;
  }
  
  // Default fallback
  return null;
}

// Category 1 Component - Featured categories with badges
function Category1({ config }) {
  const colors = config?.colors || defaultConfigs.category1.colors;
  const categories = config?.categories || defaultConfigs.category1.categories;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-7xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index === 0 ? 0.1 : 0.2 }}
              whileHover={{ scale: 1.02 }}
              className={`${colors.card} rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${colors.decorations[category.badgeColor]} rounded-full -mr-16 -mt-16 opacity-50`}></div>
              <div className="relative z-10">
                {category.badge && (
                  <div className="mb-4">
                    <span className={`text-sm uppercase tracking-wider ${colors.badges[category.badgeColor].text} ${colors.badges[category.badgeColor].background} px-3 py-1 rounded-full font-semibold`}>
                      {category.badge}
                    </span>
                  </div>
                )}
                <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-4 group-hover:${colors.badges[category.badgeColor].text} transition-colors`}>
                  {category.title}
                </h2>
                {category.description && (
                  <p className={`${colors.text.secondary} mb-6 leading-relaxed text-lg`}>
                    {category.description}
                  </p>
                )}
                {category.button && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${colors.buttons[category.button.color]} text-white px-6 py-3 rounded-lg font-semibold transition-colors`}
                  >
                    {category.button.text}
                  </motion.button>
                )}
              </div>
              <div className="mt-8 w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-gray-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gray-400 rounded-2xl transform group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

// Category 2 Component - Horizontal scrolling navigation
function Category2({ config }) {
  const colors = config?.colors || defaultConfigs.category2.colors;
  const navigation = config?.navigation || defaultConfigs.category2.navigation;
  const categories = config?.categories || defaultConfigs.category2.categories;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="relative">
          <div className="flex items-center justify-between mb-4">
            {navigation.prev?.enabled && (
              <button className={`p-2 ${colors.buttons.hover} rounded-full transition-colors`}>
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </button>
            )}
            {navigation.next?.enabled && (
              <button className={`p-2 ${colors.buttons.hover} rounded-full transition-colors`}>
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
              </button>
            )}
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((category, index) => {
              const categoryName = typeof category === 'string' ? category : category.name;
              const categoryLink = typeof category === 'string' 
                ? `/category-${categoryName.toLowerCase().replace(/\s+/g, '-')}`
                : (category.link || `/category-${categoryName.toLowerCase().replace(/\s+/g, '-')}`);
              
              return (
                <motion.a
                  key={index}
                  href={categoryLink}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex-shrink-0 ${colors.card} border-2 ${colors.borders.default} rounded-lg px-6 py-3 ${colors.buttons.category.hover} transition-colors`}
                >
                  <span className={`${colors.text.secondary} font-medium whitespace-nowrap`}>
                    {categoryName}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

// Category 3 Component - Browse by Category with GSAP animations
function Category3({ config }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  
  const colors = config?.colors || defaultConfigs.category3.colors;
  const page = config?.page || defaultConfigs.category3.page;
  const categories = config?.categories || defaultConfigs.category3.categories;
  const cta = config?.cta || defaultConfigs.category3.cta;
  const grid = config?.grid || defaultConfigs.category3.grid;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const iconMap = {
    Sparkles,
    ShoppingBag,
    ArrowRight
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.category-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
          rotation: -5
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          scale: 1.05,
          rotation: 2,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    });

    const icons = containerRef.current.querySelectorAll('.category-icon');
    icons.forEach((icon) => {
      gsap.to(icon, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary} overflow-hidden`}>
      <motion.section
        ref={sectionRef}
        style={{ opacity, scale, y }}
        className="px-6 py-24 max-w-7xl mx-auto relative"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className={`absolute top-20 left-10 w-72 h-72 ${colors.decorations.blue} rounded-full mix-blend-multiply filter blur-xl opacity-20`}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className={`absolute bottom-20 right-10 w-96 h-96 ${colors.decorations.purple} rounded-full mix-blend-multiply filter blur-xl opacity-20`}
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16"
          >
            {page.badge && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-block mb-4"
              >
                <span className={`text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-4 py-2 rounded-full font-semibold flex items-center gap-2`}>
                  {page.badge.icon && (() => {
                    const Icon = iconMap[page.badge.icon];
                    return Icon ? <Icon className="w-4 h-4" /> : null;
                  })()}
                  {page.badge.text}
                </span>
              </motion.div>
            )}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className={`text-4xl md:text-6xl font-bold text-slate-800 mb-6 bg-clip-text text-transparent ${colors.gradients.title}`}
            >
              {page.title}
            </motion.h2>
            {page.description && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className={`${colors.text.secondary} max-w-2xl mx-auto text-lg leading-relaxed`}
              >
                {page.description}
              </motion.p>
            )}
          </motion.div>
          
          <div ref={containerRef} className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
            {categories.map((category, index) => (
              <motion.a
                key={index}
                href={category.link || "#"}
                className="category-card bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                whileHover={{ zIndex: 10 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradients[category.color]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                
                <div className="relative z-10">
                  {category.icon && (
                    <motion.div
                      className={`category-icon w-20 h-20 bg-gradient-to-br ${colors.gradients[category.color]} rounded-2xl flex items-center justify-center text-4xl mb-5 mx-auto shadow-lg group-hover:shadow-2xl transition-shadow duration-300`}
                      whileHover={{ 
                        rotate: [0, -10, 10, -10, 0],
                        scale: 1.15
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <span className="filter drop-shadow-lg">{category.icon}</span>
                    </motion.div>
                  )}
                  
                  <motion.h3
                    className={`text-xl font-bold text-slate-800 text-center mb-2 group-hover:text-blue-600 transition-colors duration-300`}
                    whileHover={{ x: 5 }}
                  >
                    {category.name}
                  </motion.h3>
                  
                  {category.description && (
                    <p className={`text-sm ${colors.text.light} text-center mb-4 min-h-[40px]`}>
                      {category.description}
                    </p>
                  )}
                  
                  {category.count !== undefined && (
                    <div className={`flex items-center justify-center gap-2 text-sm font-semibold text-gray-700 group-hover:text-blue-600 transition-colors`}>
                      <span>{category.count} Products</span>
                      <motion.div
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    </div>
                  )}
                  
                  <motion.div
                    className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-br ${colors.gradients[category.color]} rounded-full`}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              </motion.a>
            ))}
          </div>

          {cta?.enabled && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-16"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative inline-flex items-center gap-3 ${colors.gradients.button} text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  {cta.icon && (() => {
                    const Icon = iconMap[cta.icon];
                    return Icon ? <Icon className="w-5 h-5" /> : null;
                  })()}
                  {cta.text}
                </span>
                <motion.div
                  className={`absolute inset-0 ${colors.gradients.buttonHover} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  initial={false}
                />
              </motion.button>
            </motion.div>
          )}
        </div>
      </motion.section>
    </main>
  );
}

// Category 4 Component - Simple grid with images
function Category4({ config }) {
  const colors = config?.colors || defaultConfigs.category4.colors;
  const page = config?.page || defaultConfigs.category4.page;
  const categories = config?.categories || defaultConfigs.category4.categories;
  const grid = config?.grid || defaultConfigs.category4.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {page.title && (
            <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-4`}>
              {page.title}
            </h2>
          )}
        </motion.div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group cursor-pointer"
            >
              <Link href={category.link || "#"}>
                <div className={`${colors.card} rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden relative`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradients[category.color]} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <div className="relative z-10">
                    {category.image && (
                      <div className="text-6xl mb-4 text-center">{category.image}</div>
                    )}
                    <h3 className={`text-lg font-semibold ${colors.text.primary} text-center mb-2 group-hover:${colors.text.accent} transition-colors`}>
                      {category.name}
                    </h3>
                    <div className={`flex items-center justify-center ${colors.text.accent} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <span className="text-sm font-medium">Shop Now</span>
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {page.footer && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center mt-12"
          >
            <p className={`${colors.text.secondary} text-sm`}>{page.footer}</p>
          </motion.div>
        )}
      </section>
    </main>
  );
}

