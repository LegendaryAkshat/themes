"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      text: "The attention to detail and craftsmanship is truly remarkable. Every interaction feels thoughtfully designed, and the quality exceeds expectations at every turn.",
      author: "Sarah Chen",
      role: "Creative Director",
      rating: 5,
      company: "Design Studio"
    },
    {
      text: "Outstanding experience from start to finish. The seamless integration of form and function creates something truly special that stands out in today's market.",
      author: "Michael Rodriguez",
      role: "Product Manager",
      rating: 5,
      company: "Tech Innovations"
    },
    {
      text: "A perfect blend of elegance and performance. The refined approach to design and execution sets a new standard for what's possible.",
      author: "Emily Watson",
      role: "Brand Strategist",
      rating: 5,
      company: "Global Brands"
    },
    {
      text: "Exceptional quality that speaks for itself. The thoughtful curation and meticulous attention to detail create an experience that's both sophisticated and accessible.",
      author: "James Thompson",
      role: "Entrepreneur",
      rating: 5,
      company: "Venture Capital"
    }
  ];

  const currentTestimonial = testimonials[activeIndex];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of customers trust us for their needs
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-12 lg:p-16"
          >
            <div className="max-w-4xl mx-auto">
              <Quote className="w-12 h-12 text-blue-100 mb-6" />
              
              <div className="flex items-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 mb-8 leading-relaxed">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {currentTestimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-lg">
                    {currentTestimonial.author}
                  </div>
                  <div className="text-gray-600">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Dots */}
          <div className="flex items-center justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`w-3 h-3 rounded-full transition-all ${
                  activeIndex === index
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              onClick={() => setActiveIndex((activeIndex - 1 + testimonials.length) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white rounded-full shadow-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={() => setActiveIndex((activeIndex + 1) % testimonials.length)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 bg-white rounded-full shadow-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}

