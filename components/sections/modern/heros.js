"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Play, ShoppingBag, Sparkles, ArrowRight, Star, TrendingUp, Users, Check } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Default configuration for each hero type
const defaultConfigs = {
  hero1: {
    colors: {
      background: "bg-black",
      text: {
        primary: "text-white",
        secondary: "text-gray-300",
        badge: "text-gray-300"
      },
      badges: {
        background: "bg-white/10 backdrop-blur-sm",
        border: "border-white/20"
      },
      buttons: {
        primary: "bg-white text-black",
        secondary: "bg-white/10 backdrop-blur-sm hover:bg-white/20",
        border: "border-white/20"
      },
      gradients: {
        title: "bg-gradient-to-r from-white via-gray-100 to-white",
        overlay: {
          top: "bg-gradient-to-t from-black/50 via-transparent to-transparent",
          sides: "bg-gradient-to-r from-black/30 via-transparent to-black/30"
        }
      }
    },
    slides: [
      {
        badge: "Premium design",
        title: "Apple Watch Ultra",
        description: "Advanced imaging performance with a 200MP AI camera with Enhanced image quality.",
        buttonText: "Shop Now",
        bgGradient: "from-gray-900 via-gray-800 to-black",
        accentColor: "blue"
      },
      {
        badge: "SPECIAL EDITION",
        title: "Apple AirPods Max",
        description: "Transparency mode, and spatial audio, it delivers a premium listening experience.",
        buttonText: "Shop Now",
        bgGradient: "from-blue-900 via-indigo-900 to-black",
        accentColor: "indigo"
      },
      {
        badge: "LIMITED EDITION",
        title: "iPhone 16 Pro Max",
        description: "Featuring A18 Chip, Liquid Glass, and AI-Powered Innovation",
        buttonText: "Shop Now",
        bgGradient: "from-purple-900 via-pink-900 to-black",
        accentColor: "purple"
      }
    ],
    animations: {
      autoSlideInterval: 5000,
      particles: {
        count: 20,
        enabled: true
      }
    }
  },
  hero2: {
    colors: {
      background: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600"
      },
      badges: {
        background: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-100"
      },
      buttons: {
        primary: "bg-gradient-to-r from-blue-600 to-purple-600",
        secondary: "border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50"
      },
      gradients: {
        title: "bg-gradient-to-r from-blue-600 to-purple-600",
        background: "bg-gradient-to-br from-blue-50 via-white to-purple-50",
        image: "bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400",
        icon: "bg-gradient-to-br from-blue-100 to-purple-100"
      },
      borders: {
        divider: "border-gray-200"
      }
    },
    content: {
      badge: "New Collection 2024",
      title: {
        line1: "Discover Your",
        line2: "Perfect Style"
      },
      description: "Explore our curated collection of premium products designed to elevate your lifestyle. Quality meets innovation in every piece.",
      buttons: {
        primary: "Shop Now",
        secondary: "Learn More"
      }
    },
    stats: [
      { icon: "Users", value: "50K+", label: "Happy Customers" },
      { icon: "Star", value: "4.9", label: "Rating" },
      { icon: "TrendingUp", value: "200+", label: "Products" }
    ],
    image: {
      placeholder: "📱",
      label: "Premium Product",
      cards: [
        { label: "New Arrival", sublabel: "Just in" },
        { label: "Best Seller", sublabel: "Top rated" }
      ]
    }
  },
  hero3: {
    colors: {
      background: "bg-black",
      text: {
        primary: "text-white",
        secondary: "text-gray-300"
      },
      badges: {
        background: "bg-white/10 backdrop-blur-sm",
        text: "text-purple-300",
        border: "border-white/20"
      },
      buttons: {
        primary: "bg-white text-black",
        secondary: "border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20"
      },
      gradients: {
        title1: "bg-gradient-to-r from-white via-purple-200 to-pink-200",
        title2: "bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300",
        background: "bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900",
        button: "bg-gradient-to-r from-purple-500 to-pink-500",
        orbs: {
          blue: "bg-blue-500/30",
          purple: "bg-purple-500/30",
          pink: "bg-pink-500/20"
        }
      },
      features: {
        background: "bg-white/5 backdrop-blur-sm",
        border: "border-white/10",
        check: "bg-green-500/20",
        icon: "text-green-400"
      }
    },
    content: {
      badge: {
        text: "Limited Time Offer",
        icon: "Sparkles"
      },
      title: {
        line1: "Experience",
        line2: "The Future"
      },
      description: "Transform your everyday with cutting-edge technology and innovative design. Join thousands of satisfied customers worldwide.",
      buttons: {
        primary: "Shop Now",
        secondary: "Watch Demo"
      }
    },
    features: [
      "Free Worldwide Shipping",
      "30-Day Return Policy",
      "Secure Payment",
      "24/7 Customer Support"
    ],
    animations: {
      particles: {
        count: 20,
        enabled: true
      },
      orbs: {
        enabled: true
      }
    }
  },
  ecomusHero: {
    colors: {
      background: "bg-white",
      text: {
        primary: "text-white"
      },
      buttons: {
        primary: "bg-white text-gray-900 hover:bg-gray-100",
        navigation: "bg-white/20 hover:bg-white/30 backdrop-blur-sm"
      }
    },
    slides: [
      {
        title: "Glamorous",
        subtitle: "Glam",
        description: "From casual to formal, we've got you covered",
        buttonText: "Shop collection",
        gradient: "from-pink-500 via-purple-500 to-indigo-600"
      },
      {
        title: "Simple",
        subtitle: "Style",
        description: "From casual to formal, we've got you covered",
        buttonText: "Shop collection",
        gradient: "from-blue-500 via-cyan-500 to-teal-600"
      },
      {
        title: "Glamorous",
        subtitle: "Glam",
        description: "From casual to formal, we've got you covered",
        buttonText: "Shop collection",
        gradient: "from-purple-500 via-pink-500 to-rose-600"
      }
    ],
    animations: {
      autoSlideInterval: 5000,
      slideDuration: 0.8
    }
  }
};

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

/**
 * Hero Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "hero")
 * @param {string} props.type - Hero type: "hero1" | "hero2" | "hero3" | "ecomusHero" (default: "hero1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 * @param {boolean} props.autoplay - Enable autoplay for carousel heroes (default: true)
 * @param {boolean} props.showNavigation - Show navigation arrows (default: true)
 * @param {boolean} props.showPagination - Show pagination dots (default: true)
 * @param {boolean} props.enableParallax - Enable parallax effects (default: true)
 * @param {boolean} props.showProgress - Show progress bar (default: true)
 * @param {boolean} props.enableKeyboard - Enable keyboard navigation (default: true)
 * @param {boolean} props.loop - Enable loop for carousel (default: true)
 */
export default function Hero({
  component = "hero",
  type = "hero1",
  content = {},
  autoplay = true,
  showNavigation = true,
  showPagination = true,
  enableParallax = true,
  showProgress = true,
  enableKeyboard = true,
  loop = true
}) {
  // Validate hero type
  const validTypes = ["hero1", "hero2", "hero3", "ecomusHero"];
  const heroType = validTypes.includes(type) ? type : "hero1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[heroType] || defaultConfigs.hero1;
  
  // Get custom config from content prop
  const customConfig = content[heroType] || {};
  
  // Deep merge custom config with defaults to ensure all required fields exist
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config has required fields
  if (!config || typeof config !== 'object') {
    console.warn(`Hero: Invalid config for type "${heroType}", using defaults`);
    return <Hero1 config={defaultConfigs.hero1} autoplay={autoplay} />;
  }
  
  // Hero 1 - Framer Motion with particles
  if (heroType === "hero1") {
    // Validate required fields
    if (!config.slides || !Array.isArray(config.slides) || config.slides.length === 0) {
      console.warn("Hero1: No slides provided, using default");
      config.slides = defaultConfigs.hero1.slides;
    }
    return <Hero1 config={config} autoplay={autoplay} />;
  }
  
  // Hero 2 - White background with stats
  if (heroType === "hero2") {
    // Validate required fields
    if (!config.content || !config.stats || !Array.isArray(config.stats)) {
      console.warn("Hero2: Missing required fields, using defaults");
      config.content = config.content || defaultConfigs.hero2.content;
      config.stats = Array.isArray(config.stats) ? config.stats : defaultConfigs.hero2.stats;
      config.image = config.image || defaultConfigs.hero2.image;
    }
    return <Hero2 config={config} />;
  }
  
  // Hero 3 - Dark gradient with features
  if (heroType === "hero3") {
    // Validate required fields
    if (!config.content || !config.features || !Array.isArray(config.features)) {
      console.warn("Hero3: Missing required fields, using defaults");
      config.content = config.content || defaultConfigs.hero3.content;
      config.features = Array.isArray(config.features) ? config.features : defaultConfigs.hero3.features;
    }
    return <Hero3 config={config} />;
  }
  
  // Ecomus Hero - Simple gradient carousel
  if (heroType === "ecomusHero") {
    // Validate required fields
    if (!config.slides || !Array.isArray(config.slides) || config.slides.length === 0) {
      console.warn("EcomusHero: No slides provided, using default");
      config.slides = defaultConfigs.ecomusHero.slides;
    }
    return <EcomusHero config={config} autoplay={autoplay} />;
  }
  
  // Default fallback
  return null;
}

// Hero 1 Component
function Hero1({ config, autoplay }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  
  // Safely extract config with fallbacks
  const colors = config?.colors || defaultConfigs.hero1.colors;
  const slides = config?.slides || defaultConfigs.hero1.slides;
  const animations = config?.animations || defaultConfigs.hero1.animations;
  
  // Ensure we have at least one slide
  if (!slides || slides.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">No slides available</p>
      </div>
    );
  }
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(nextSlide, animations.autoSlideInterval);
      return () => clearInterval(interval);
    }
  }, [autoplay, animations.autoSlideInterval, slides.length]);

  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;
    const textElements = hero.querySelectorAll('.hero-text');
    const imageElements = hero.querySelectorAll('.hero-image');

    gsap.to(textElements, {
      y: -50,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(imageElements, {
      y: 50,
      scale: 1.1,
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 1
      }
    });

    if (animations.particles.enabled) {
      for (let i = 0; i < animations.particles.count; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-white rounded-full opacity-20';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        hero.appendChild(particle);

        gsap.to(particle, {
          y: -100,
          x: Math.random() * 100 - 50,
          opacity: 0,
          duration: Math.random() * 3 + 2,
          repeat: -1,
          ease: "none"
        });
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animations]);

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary} overflow-hidden`}>
      <motion.section
        ref={sectionRef}
        style={{ opacity, scale, y }}
        className="relative"
      >
        <div
          ref={heroRef}
          className={`relative bg-gradient-to-br ${slides[currentSlide].bgGradient} min-h-screen flex items-center overflow-hidden`}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className={`absolute inset-0 ${colors.gradients.overlay.top}`} />
          <div className={`absolute inset-0 ${colors.gradients.overlay.sides}`} />

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="hero-text space-y-8"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3"
                  >
                    <span className={`text-xs uppercase tracking-wider ${colors.text.badge} ${colors.badges.background} px-4 py-2 rounded-full ${colors.badges.border} flex items-center gap-2`}>
                      <Sparkles className="w-4 h-4" />
                      {slides[currentSlide].badge}
                    </span>
                  </motion.div>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                  >
                    <span className={`bg-clip-text text-transparent ${colors.gradients.title}`}>
                      {slides[currentSlide].title}
                    </span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className={`${colors.text.secondary} leading-relaxed text-lg md:text-xl max-w-lg`}
                  >
                    {slides[currentSlide].description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`group relative ${colors.buttons.primary} px-8 py-4 rounded-full font-semibold text-lg overflow-hidden`}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <ShoppingBag className="w-5 h-5" />
                        {slides[currentSlide].buttonText}
                      </span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                        initial={false}
                      />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-4 ${colors.buttons.secondary} rounded-full ${colors.buttons.border} transition-colors`}
                    >
                      <Play className="w-6 h-6" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
              
              <motion.div
                key={`img-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="hero-image relative flex items-center justify-center"
              >
                <div className="relative w-full h-[600px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl blur-3xl" />
                  <div className="relative w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl flex items-center justify-center shadow-2xl">
                    <div className="w-80 h-96 bg-gray-700 rounded-2xl transform hover:scale-105 transition-transform duration-500" />
                  </div>
                  
                  <motion.div
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -top-10 -right-10 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
                  />
                  <motion.div
                    animate={{
                      y: [0, 20, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 ${colors.buttons.secondary} rounded-full ${colors.buttons.border} transition-colors`}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className={`p-4 ${colors.buttons.secondary} rounded-full ${colors.buttons.border} transition-colors`}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
          
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
            {slides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

// Hero 2 Component
function Hero2({ config }) {
  const sectionRef = useRef(null);
  
  // Safely extract config with fallbacks
  const colors = config?.colors || defaultConfigs.hero2.colors;
  const content = config?.content || defaultConfigs.hero2.content;
  const stats = config?.stats || defaultConfigs.hero2.stats;
  const image = config?.image || defaultConfigs.hero2.image;
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const iconMap = {
    ArrowRight,
    Star,
    TrendingUp,
    Users
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} overflow-hidden`}>
      <motion.section
        ref={sectionRef}
        style={{ opacity, y, scale }}
        className="relative min-h-screen flex items-center"
      >
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
            backgroundSize: '24px 24px'
          }} />
        </div>

        <div className={`absolute inset-0 ${colors.gradients.background}`} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block"
              >
                <span className={`text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-4 py-2 rounded-full font-semibold ${colors.badges.border}`}>
                  {content.badge}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-5xl md:text-6xl lg:text-7xl font-bold ${colors.text.primary} leading-tight`}
              >
                {content.title.line1}
                <br />
                <span className={`bg-clip-text text-transparent ${colors.gradients.title}`}>
                  {content.title.line2}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className={`text-lg ${colors.text.secondary} leading-relaxed max-w-lg`}
              >
                {content.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group relative ${colors.buttons.primary} text-white px-8 py-4 rounded-full font-semibold text-lg overflow-hidden shadow-lg hover:shadow-xl transition-all`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {content.buttons.primary}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-8 py-4 rounded-full font-semibold text-lg ${colors.buttons.secondary} transition-all`}
                >
                  {content.buttons.secondary}
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className={`grid grid-cols-3 gap-6 pt-8 border-t ${colors.borders.divider}`}
              >
                {stats.map((stat, index) => {
                  const Icon = iconMap[stat.icon];
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="flex justify-center mb-2">
                        <div className={`p-2 ${colors.gradients.icon} rounded-lg`}>
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div className={`text-2xl font-bold ${colors.text.primary}`}>{stat.value}</div>
                      <div className={`text-sm ${colors.text.secondary}`}>{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              <div className="relative w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl">
                <div className={`absolute inset-0 ${colors.gradients.image}`} />
                
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute top-20 right-20 w-32 h-32 bg-white/20 rounded-full blur-2xl"
                />
                <motion.div
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute bottom-20 left-20 w-40 h-40 bg-white/20 rounded-full blur-2xl"
                />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-64 h-64 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center mb-4 border border-white/30">
                      <div className="text-6xl">{image.placeholder}</div>
                    </div>
                    <p className="text-lg font-semibold">{image.label}</p>
                  </div>
                </div>

                {image.cards.map((card, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, index === 0 ? -15 : 15, 0],
                      rotate: [0, index === 0 ? 3 : -3, 0]
                    }}
                    transition={{
                      duration: index === 0 ? 4 : 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                    className={`absolute ${index === 0 ? 'top-10 left-10' : 'bottom-10 right-10'} bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg`}
                  >
                    <div className="text-sm font-semibold text-gray-900">{card.label}</div>
                    <div className="text-xs text-gray-600">{card.sublabel}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </main>
  );
}

// Hero 3 Component
function Hero3({ config }) {
  const sectionRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // Safely extract config with fallbacks
  const colors = config?.colors || defaultConfigs.hero3.colors;
  const content = config?.content || defaultConfigs.hero3.content;
  const features = config?.features || defaultConfigs.hero3.features;
  const animations = config?.animations || defaultConfigs.hero3.animations;
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  const iconMap = {
    Play,
    ShoppingBag,
    ArrowRight,
    Sparkles,
    Check
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary} overflow-hidden`}>
      <motion.section
        ref={sectionRef}
        style={{ opacity, scale, y }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div className={`absolute inset-0 ${colors.gradients.background}`} />
          
          {animations.orbs.enabled && (
            <>
              <motion.div
                animate={{
                  x: [0, 100, 0],
                  y: [0, 50, 0],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute top-20 left-20 w-96 h-96 ${colors.gradients.orbs.blue} rounded-full blur-3xl`}
              />
              <motion.div
                animate={{
                  x: [0, -100, 0],
                  y: [0, -50, 0],
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute bottom-20 right-20 w-[500px] h-[500px] ${colors.gradients.orbs.purple} rounded-full blur-3xl`}
              />
              <motion.div
                animate={{
                  x: [0, 50, 0],
                  y: [0, -100, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] ${colors.gradients.orbs.pink} rounded-full blur-3xl`}
              />
            </>
          )}
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
            }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block"
            >
              <span className={`text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-6 py-3 rounded-full font-semibold ${colors.badges.border} flex items-center gap-2 mx-auto`}>
                {(() => {
                  const SparklesIcon = iconMap[content.badge.icon];
                  return <SparklesIcon className="w-4 h-4" />;
                })()}
                {content.badge.text}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              <span className={`bg-clip-text text-transparent ${colors.gradients.title1}`}>
                {content.title.line1}
              </span>
              <br />
              <span className={`bg-clip-text text-transparent ${colors.gradients.title2}`}>
                {content.title.line2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className={`text-xl md:text-2xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}
            >
              {content.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group relative ${colors.buttons.primary} px-10 py-5 rounded-full font-bold text-lg overflow-hidden shadow-2xl`}
              >
                <span className="relative z-10 flex items-center gap-3">
                  <ShoppingBag className="w-6 h-6" />
                  {content.buttons.primary}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.div
                  className={`absolute inset-0 ${colors.gradients.button} opacity-0 group-hover:opacity-100 transition-opacity`}
                  initial={false}
                />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`group px-10 py-5 rounded-full font-bold text-lg ${colors.buttons.secondary} transition-all`}
              >
                <span className="flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  {content.buttons.secondary}
                </span>
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-12 max-w-4xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  className={`flex items-center gap-2 ${colors.features.background} px-4 py-3 rounded-lg ${colors.features.border}`}
                >
                  <div className={`p-1 ${colors.features.check} rounded-full`}>
                    <Check className={`w-4 h-4 ${colors.features.icon}`} />
                  </div>
                  <span className={`text-sm ${colors.text.secondary}`}>{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {animations.particles.enabled && [...Array(animations.particles.count)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
          />
        ))}

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
      </motion.section>
    </main>
  );
}

// Ecomus Hero Component
function EcomusHero({ config, autoplay }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Safely extract config with fallbacks
  const colors = config?.colors || defaultConfigs.ecomusHero.colors;
  const slides = config?.slides || defaultConfigs.ecomusHero.slides;
  const animations = config?.animations || defaultConfigs.ecomusHero.animations;
  
  // Ensure we have at least one slide
  if (!slides || slides.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">No slides available</p>
      </div>
    );
  }

  useEffect(() => {
    if (autoplay) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, animations.autoSlideInterval);
      return () => clearInterval(timer);
    }
  }, [autoplay, animations.autoSlideInterval, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="relative h-[600px] md:h-[700px] overflow-hidden">
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: animations.slideDuration }}
            className={`absolute inset-0 bg-gradient-to-r ${slide.gradient}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className={`text-white max-w-2xl`}>
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 30
                  }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-6xl md:text-8xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 30
                  }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-4xl md:text-6xl font-light mb-6"
                >
                  {slide.subtitle}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 30
                  }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-xl md:text-2xl mb-8 text-white/90"
                >
                  {slide.description}
                </motion.p>
                <motion.button
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: currentSlide === index ? 1 : 0,
                    y: currentSlide === index ? 0 : 30
                  }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${colors.buttons.primary} px-8 py-4 rounded-lg font-semibold text-lg transition-colors`}
                >
                  {slide.buttonText}
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}

        <button
          onClick={goToPrevious}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${colors.buttons.navigation} rounded-full p-3 transition-all z-10`}
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={goToNext}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 ${colors.buttons.navigation} rounded-full p-3 transition-all z-10`}
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
