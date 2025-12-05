"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
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
  
  // Slides (Edit slides here!)
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
  
  // Animation Settings
  animations: {
    autoSlideInterval: 5000,
    slideDuration: 0.8
  }
};

export default function Page() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { colors, slides, animations } = pageConfig;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, animations.autoSlideInterval);
    return () => clearInterval(timer);
  }, [slides.length, animations.autoSlideInterval]);

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
