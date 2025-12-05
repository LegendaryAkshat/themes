"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Target, Users, Award, Heart, TrendingUp, Zap } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
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
  
  // Page Header
  page: {
    badge: "Our Story",
    title: "About Us",
    description: "We are passionate about delivering exceptional products and services that enhance your daily life. Our commitment to quality, innovation, and customer satisfaction drives everything we do."
  },
  
  // Stats (Edit stats here!)
  stats: [
    { icon: "Users", value: "10K+", label: "Happy Customers", color: "blue" },
    { icon: "Award", value: "500+", label: "Products Sold", color: "purple" },
    { icon: "TrendingUp", value: "98%", label: "Satisfaction Rate", color: "green" },
    { icon: "Zap", value: "24/7", label: "Support Available", color: "orange" }
  ],
  
  // Mission & Vision
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
};

export default function Page() {
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  const { colors, page, stats, mission, vision } = pageConfig;

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
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className={`inline-block text-sm uppercase tracking-wider ${colors.badges.text} ${colors.badges.background} px-4 py-2 rounded-full font-semibold mb-4`}
          >
            {page.badge}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-4xl md:text-6xl font-bold text-slate-800 mb-4 bg-clip-text text-transparent ${colors.gradients.title}`}
          >
            {page.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`${colors.text.secondary} text-lg max-w-3xl mx-auto leading-relaxed`}
          >
            {page.description}
          </motion.p>
        </motion.div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon];
            const gradientClass = colors.gradients.stats[stat.color];

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
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
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
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-purple-600" />
            </div>
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
