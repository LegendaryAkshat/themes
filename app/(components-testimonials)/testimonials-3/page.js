"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-100"
    },
    buttons: {
      dot: {
        active: "bg-blue-600",
        inactive: "bg-gray-300 hover:bg-gray-400"
      },
      arrow: "bg-white border-gray-200 hover:border-blue-500 hover:bg-blue-50"
    },
    stars: {
      active: "fill-yellow-400 text-yellow-400"
    }
  },
  
  // Page Header
  header: {
    title: "What Our Customers Say",
    description: "Discover why thousands of customers trust us for their needs"
  },
  
  // Testimonials (Edit testimonials here!)
  testimonials: [
    {
      text: "The attention to detail and craftsmanship is truly remarkable. Every interaction feels thoughtfully designed, and the quality exceeds expectations at every turn.",
      author: "Sarah Chen",
      role: "Creative Director",
      company: "Design Studio",
      rating: 5
    },
    {
      text: "Outstanding experience from start to finish. The seamless integration of form and function creates something truly special that stands out in today's market.",
      author: "Michael Rodriguez",
      role: "Product Manager",
      company: "Tech Innovations",
      rating: 5
    },
    {
      text: "A perfect blend of elegance and performance. The refined approach to design and execution sets a new standard for what's possible.",
      author: "Emily Watson",
      role: "Brand Strategist",
      company: "Global Brands",
      rating: 5
    },
    {
      text: "Exceptional quality that speaks for itself. The thoughtful curation and meticulous attention to detail create an experience that's both sophisticated and accessible.",
      author: "James Thompson",
      role: "Entrepreneur",
      company: "Venture Capital",
      rating: 5
    }
  ],
  
  // Navigation
  navigation: {
    dots: { enabled: true },
    arrows: { enabled: true }
  }
};

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { colors, header, testimonials, navigation } = pageConfig;
  const currentTestimonial = testimonials[activeIndex];

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold ${colors.text.primary} mb-4`}>
            {header.title}
          </h1>
          <p className={`text-lg ${colors.text.secondary} max-w-2xl mx-auto`}>
            {header.description}
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className={`${colors.card} rounded-3xl shadow-2xl border ${colors.borders.default} p-8 md:p-12 lg:p-16`}
          >
            <div className="max-w-4xl mx-auto">
              <Quote className="w-12 h-12 text-blue-100 mb-6" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${colors.stars.active}`} />
                ))}
              </div>

              <blockquote className={`text-2xl md:text-3xl font-medium ${colors.text.primary} mb-8 leading-relaxed`}>
                "{currentTestimonial.text}"
              </blockquote>

              <div className={`flex items-center gap-4 pt-6 border-t ${colors.borders.default}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {currentTestimonial.author.charAt(0)}
                </div>
                <div>
                  <div className={`font-bold ${colors.text.primary} text-lg`}>
                    {currentTestimonial.author}
                  </div>
                  <div className={colors.text.secondary}>
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {navigation.dots.enabled && (
            <div className="flex items-center justify-center gap-3 mt-8">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index
                      ? `${colors.buttons.dot.active} w-8`
                      : colors.buttons.dot.inactive
                  }`}
                />
              ))}
            </div>
          )}

          {navigation.arrows.enabled && (
            <div className="flex items-center justify-between mt-8">
              <motion.button
                onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 ${colors.buttons.arrow} rounded-full shadow-lg transition-colors`}
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </motion.button>

              <motion.button
                onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-4 ${colors.buttons.arrow} rounded-full shadow-lg transition-colors`}
              >
                <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
