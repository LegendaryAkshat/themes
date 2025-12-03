"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, ShoppingBag, Sparkles } from "lucide-react";
import Lottie from "lottie-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -100]);
  
  const slides = [
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
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    const hero = heroRef.current;
    const textElements = hero.querySelectorAll('.hero-text');
    const imageElements = hero.querySelectorAll('.hero-image');

    // Parallax effect on scroll
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

    // Floating particles animation
    for (let i = 0; i < 20; i++) {
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-black text-white overflow-hidden">
      <motion.section
        ref={sectionRef}
        style={{ opacity, scale, y }}
        className="relative"
      >
        <div
          ref={heroRef}
          className={`relative bg-gradient-to-br ${slides[currentSlide].bgGradient} min-h-screen flex items-center overflow-hidden`}
        >
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

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
                    <span className="text-xs uppercase tracking-wider text-gray-300 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 flex items-center gap-2">
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
                    <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                      {slides[currentSlide].title}
                    </span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-gray-300 leading-relaxed text-lg md:text-xl max-w-lg"
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
                      className="group relative bg-white text-black px-8 py-4 rounded-full font-semibold text-lg overflow-hidden"
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
                      className="p-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-colors"
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
                  
                  {/* Floating elements */}
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
          
          {/* Navigation buttons */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={prevSlide}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-white/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
          
          <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20">
            <motion.button
              onClick={nextSlide}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full border border-white/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>
          
          {/* Slide indicators */}
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
