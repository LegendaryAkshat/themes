"use client";

import { motion } from "framer-motion";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-700",
      link: "text-slate-800 hover:text-blue-600"
    },
    borders: {
      default: "border-gray-200"
    }
  },
  
  // Testimonials (Edit testimonials here!)
  testimonials: [
    {
      text: "Exceptional service and quality products. The entire experience exceeded my expectations and I couldn't be happier with my purchase.",
      author: "David Johnson",
      role: "Serial Entrepreneur",
      link: "#"
    },
    {
      text: "Outstanding customer support and fast delivery. The product quality is top-notch and exactly as described. Highly recommended!",
      author: "Wilson Davis",
      role: "Backend Developer",
      link: "#"
    },
    {
      text: "Great value for money and excellent build quality. The attention to detail is impressive and the service is second to none.",
      author: "Sarah Martinez",
      role: "Product Designer",
      link: "#"
    }
  ],
  
  // Navigation Controls
  navigation: {
    enabled: true,
    prevButton: { enabled: true },
    nextButton: { enabled: true }
  }
};

export default function Page() {
  const { colors, testimonials, navigation } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="relative">
          {navigation.enabled && (
            <div className="flex items-center justify-center gap-4 mb-8">
              {navigation.prevButton.enabled && (
                <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </button>
              )}
              {navigation.nextButton.enabled && (
                <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </button>
              )}
            </div>
          )}
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${colors.card} rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow`}
              >
                <p className={`${colors.text.secondary} leading-relaxed mb-6`}>
                  "{testimonial.text}"
                </p>
                <div>
                  <a href={testimonial.link} className={`${colors.text.link} font-semibold transition-colors`}>
                    {testimonial.author}
                  </a>
                  <p className={`${colors.text.secondary} text-sm mt-1`}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
