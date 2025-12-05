"use client";

import { motion } from "framer-motion";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-slate-800",
      light: "text-gray-700",
      role: "text-gray-500"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      navigation: "hover:bg-gray-100"
    },
    stars: {
      active: "bg-yellow-400"
    }
  },
  
  // Page Header
  header: {
    title: "User Feedbacks"
  },
  
  // Navigation Controls
  navigation: {
    enabled: true,
    prevButton: { enabled: true },
    nextButton: { enabled: true }
  },
  
  // Testimonials (Edit testimonials here!)
  testimonials: [
    {
      text: "Exceptional service and quality products. The entire experience exceeded my expectations and I couldn't be happier with my purchase.",
      author: "Davis Dorwart",
      role: "Serial Entrepreneur",
      link: "#",
      rating: 5
    },
    {
      text: "Outstanding customer support and fast delivery. The product quality is top-notch and exactly as described. Highly recommended!",
      author: "Wilson Dias",
      role: "Backend Developer",
      link: "#",
      rating: 5
    },
    {
      text: "Great value for money and excellent build quality. The attention to detail is impressive and the service is second to none.",
      author: "Sarah Martinez",
      role: "Product Designer",
      link: "#",
      rating: 5
    },
    {
      text: "Amazing shopping experience with quick responses and professional service. The products arrived in perfect condition.",
      author: "Michael Chen",
      role: "Software Engineer",
      link: "#",
      rating: 5
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "md:grid-cols-2",
      desktop: "lg:grid-cols-3"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const { colors, header, navigation, testimonials, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.secondary} mb-4`}>
            {header.title}
          </h2>
        </div>
        
        <div className="relative">
          {navigation.enabled && (
            <div className="flex items-center justify-center gap-4 mb-8">
              {navigation.prevButton.enabled && (
                <button className={`p-3 ${colors.buttons.navigation} rounded-full transition-colors`}>
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </button>
              )}
              {navigation.nextButton.enabled && (
                <button className={`p-3 ${colors.buttons.navigation} rounded-full transition-colors`}>
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </button>
              )}
            </div>
          )}
          
          <div className={`grid ${grid.columns.mobile} ${grid.columns.desktop} ${grid.gap}`}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white border ${colors.borders.default} rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow`}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <div key={i} className={`w-5 h-5 ${colors.stars.active} rounded`}></div>
                  ))}
                </div>
                <p className={`${colors.text.light} leading-relaxed mb-6`}>
                  "{testimonial.text}"
                </p>
                <div>
                  <a href={testimonial.link} className={`${colors.text.secondary} font-semibold hover:text-blue-600 transition-colors`}>
                    {testimonial.author}
                  </a>
                  <p className={`${colors.text.role} text-sm mt-1`}>{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
