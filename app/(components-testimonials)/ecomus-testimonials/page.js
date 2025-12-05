"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-50 to-blue-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-500"
    },
    stars: {
      active: "fill-yellow-400 text-yellow-400"
    },
    quote: {
      icon: "text-blue-100"
    }
  },
  
  // Page Header
  header: {
    title: "Happy Clients",
    description: "Hear what they say about us"
  },
  
  // Testimonials (Edit testimonials here!)
  testimonials: [
    {
      id: 1,
      name: "Robert Smith",
      role: "Customer from USA",
      rating: 5,
      text: "I always find something stylish and affordable on this web fashion site",
      title: "Best Online Fashion Site"
    },
    {
      id: 2,
      name: "Wilson Dias",
      role: "Backend Developer",
      rating: 5,
      text: "Great quality products and excellent customer service. Highly recommended!",
      title: "Excellent Service"
    },
    {
      id: 3,
      name: "Davis Dorwart",
      role: "Serial Entrepreneur",
      rating: 5,
      text: "The best fashion shopping experience I've ever had. Fast shipping too!",
      title: "Amazing Experience"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: "grid-cols-1 md:grid-cols-3",
    gap: "gap-8"
  }
};

export default function Page() {
  const { colors, header, testimonials, grid } = pageConfig;

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
          <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-4`}>
            {header.title}
          </h2>
          <p className={`${colors.text.secondary} text-lg`}>
            {header.description}
          </p>
        </motion.div>

        <div className={`grid ${grid.columns} ${grid.gap}`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className={`${colors.card} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative`}
            >
              <div className={`absolute top-6 right-6 ${colors.quote.icon}`}>
                <Quote className="w-12 h-12" />
              </div>

              <h3 className={`text-xl font-bold ${colors.text.primary} mb-4`}>
                {testimonial.title}
              </h3>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${colors.stars.active}`}
                  />
                ))}
              </div>

              <p className={`${colors.text.secondary} mb-6 leading-relaxed relative z-10`}>
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className={`font-semibold ${colors.text.primary}`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${colors.text.light}`}>{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
