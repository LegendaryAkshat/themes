"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
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
  
  // Content (Edit content here!)
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
  
  // Stats (Edit stats here!)
  stats: [
    { icon: "Users", value: "50K+", label: "Happy Customers" },
    { icon: "Star", value: "4.9", label: "Rating" },
    { icon: "TrendingUp", value: "200+", label: "Products" }
  ],
  
  // Image Content
  image: {
    placeholder: "📱",
    label: "Premium Product",
    cards: [
      { label: "New Arrival", sublabel: "Just in" },
      { label: "Best Seller", sublabel: "Top rated" }
    ]
  }
};

export default function Page() {
  const sectionRef = useRef(null);
  const { colors, content, stats, image } = pageConfig;
  
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
