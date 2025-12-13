"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Star, Quote } from "lucide-react";

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

// Default configuration for each testimonials type
const defaultConfigs = {
  testimonials1: {
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
    testimonials: [
      {
        text: "Exceptional service and quality products.",
        author: "David Johnson",
        role: "Serial Entrepreneur",
        link: "#"
      }
    ],
    navigation: {
      enabled: true,
      prevButton: { enabled: true },
      nextButton: { enabled: true }
    }
  },
  testimonials2: {
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
    header: {
      title: "User Feedbacks"
    },
    navigation: {
      enabled: true,
      prevButton: { enabled: true },
      nextButton: { enabled: true }
    },
    testimonials: [
      {
        text: "Exceptional service and quality products.",
        author: "Davis Dorwart",
        role: "Serial Entrepreneur",
        link: "#",
        rating: 5
      }
    ],
    grid: {
      columns: {
        mobile: "md:grid-cols-2",
        desktop: "lg:grid-cols-3"
      },
      gap: "gap-6"
    }
  },
  testimonials3: {
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
    header: {
      title: "What Our Customers Say",
      description: "Discover why thousands of customers trust us for their needs"
    },
    testimonials: [
      {
        text: "The attention to detail and craftsmanship is truly remarkable.",
        author: "Sarah Chen",
        role: "Creative Director",
        company: "Design Studio",
        rating: 5
      }
    ],
    navigation: {
      dots: { enabled: true },
      arrows: { enabled: true }
    }
  },
  ecomusTestimonials: {
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
    header: {
      title: "Happy Clients",
      description: "Hear what they say about us"
    },
    testimonials: [
      {
        id: 1,
        name: "Robert Smith",
        role: "Customer from USA",
        rating: 5,
        text: "I always find something stylish and affordable on this web fashion site",
        title: "Best Online Fashion Site"
      }
    ],
    grid: {
      columns: "grid-cols-1 md:grid-cols-3",
      gap: "gap-8"
    }
  }
};

/**
 * Testimonials Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "testimonials")
 * @param {string} props.type - Testimonials type: "testimonials1" | "testimonials2" | "testimonials3" | "ecomusTestimonials" (default: "testimonials1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function Testimonials({
  component = "testimonials",
  type = "testimonials1",
  content = {}
}) {
  // Validate testimonials type
  const validTypes = ["testimonials1", "testimonials2", "testimonials3", "ecomusTestimonials"];
  const testimonialsType = validTypes.includes(type) ? type : "testimonials1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[testimonialsType] || defaultConfigs.testimonials1;
  
  // Get custom config from content prop
  const customConfig = content[testimonialsType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`Testimonials: Invalid config for type "${testimonialsType}", using defaults`);
    return <Testimonials1 config={defaultConfigs.testimonials1} />;
  }
  
  // Route to appropriate testimonials component
  if (testimonialsType === "testimonials1") {
    if (!config.testimonials || !Array.isArray(config.testimonials) || config.testimonials.length === 0) {
      console.warn("Testimonials1: No testimonials provided, using default");
      config.testimonials = defaultConfigs.testimonials1.testimonials;
    }
    return <Testimonials1 config={config} />;
  }
  
  if (testimonialsType === "testimonials2") {
    if (!config.testimonials || !Array.isArray(config.testimonials) || config.testimonials.length === 0) {
      console.warn("Testimonials2: No testimonials provided, using default");
      config.testimonials = defaultConfigs.testimonials2.testimonials;
    }
    return <Testimonials2 config={config} />;
  }
  
  if (testimonialsType === "testimonials3") {
    if (!config.testimonials || !Array.isArray(config.testimonials) || config.testimonials.length === 0) {
      console.warn("Testimonials3: No testimonials provided, using default");
      config.testimonials = defaultConfigs.testimonials3.testimonials;
    }
    return <Testimonials3 config={config} />;
  }
  
  if (testimonialsType === "ecomusTestimonials") {
    if (!config.testimonials || !Array.isArray(config.testimonials) || config.testimonials.length === 0) {
      console.warn("EcomusTestimonials: No testimonials provided, using default");
      config.testimonials = defaultConfigs.ecomusTestimonials.testimonials;
    }
    return <EcomusTestimonials config={config} />;
  }
  
  // Default fallback
  return null;
}

// Testimonials 1 Component - Simple grid
function Testimonials1({ config }) {
  const colors = config?.colors || defaultConfigs.testimonials1.colors;
  const testimonials = config?.testimonials || defaultConfigs.testimonials1.testimonials;
  const navigation = config?.navigation || defaultConfigs.testimonials1.navigation;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="relative">
          {navigation?.enabled && (
            <div className="flex items-center justify-center gap-4 mb-8">
              {navigation.prevButton?.enabled && (
                <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </button>
              )}
              {navigation.nextButton?.enabled && (
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
                  {testimonial.link ? (
                    <a href={testimonial.link} className={`${colors.text.link} font-semibold transition-colors`}>
                      {testimonial.author}
                    </a>
                  ) : (
                    <p className={`${colors.text.primary} font-semibold`}>
                      {testimonial.author}
                    </p>
                  )}
                  {testimonial.role && (
                    <p className={`${colors.text.secondary} text-sm mt-1`}>{testimonial.role}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

// Testimonials 2 Component - Grid with ratings
function Testimonials2({ config }) {
  const colors = config?.colors || defaultConfigs.testimonials2.colors;
  const header = config?.header || defaultConfigs.testimonials2.header;
  const navigation = config?.navigation || defaultConfigs.testimonials2.navigation;
  const testimonials = config?.testimonials || defaultConfigs.testimonials2.testimonials;
  const grid = config?.grid || defaultConfigs.testimonials2.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        {header?.title && (
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.secondary} mb-4`}>
              {header.title}
            </h2>
          </div>
        )}
        
        <div className="relative">
          {navigation?.enabled && (
            <div className="flex items-center justify-center gap-4 mb-8">
              {navigation.prevButton?.enabled && (
                <button className={`p-3 ${colors.buttons.navigation} rounded-full transition-colors`}>
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                </button>
              )}
              {navigation.nextButton?.enabled && (
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
                {testimonial.rating && (
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <div key={i} className={`w-5 h-5 ${colors.stars.active} rounded`}></div>
                    ))}
                  </div>
                )}
                <p className={`${colors.text.light} leading-relaxed mb-6`}>
                  "{testimonial.text}"
                </p>
                <div>
                  {testimonial.link ? (
                    <a href={testimonial.link} className={`${colors.text.secondary} font-semibold hover:text-blue-600 transition-colors`}>
                      {testimonial.author}
                    </a>
                  ) : (
                    <p className={`${colors.text.secondary} font-semibold`}>
                      {testimonial.author}
                    </p>
                  )}
                  {testimonial.role && (
                    <p className={`${colors.text.role} text-sm mt-1`}>{testimonial.role}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

// Testimonials 3 Component - Carousel/slider
function Testimonials3({ config }) {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const colors = config?.colors || defaultConfigs.testimonials3.colors;
  const header = config?.header || defaultConfigs.testimonials3.header;
  const testimonials = config?.testimonials || defaultConfigs.testimonials3.testimonials;
  const navigation = config?.navigation || defaultConfigs.testimonials3.navigation;
  
  const currentTestimonial = testimonials[activeIndex] || testimonials[0];

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {header && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            {header.title && (
              <h1 className={`text-4xl md:text-5xl font-bold ${colors.text.primary} mb-4`}>
                {header.title}
              </h1>
            )}
            {header.description && (
              <p className={`text-lg ${colors.text.secondary} max-w-2xl mx-auto`}>
                {header.description}
              </p>
            )}
          </motion.div>
        )}

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
              
              {currentTestimonial.rating && (
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className={`w-6 h-6 ${colors.stars.active}`} />
                  ))}
                </div>
              )}

              <blockquote className={`text-2xl md:text-3xl font-medium ${colors.text.primary} mb-8 leading-relaxed`}>
                "{currentTestimonial.text}"
              </blockquote>

              <div className={`flex items-center gap-4 pt-6 border-t ${colors.borders.default}`}>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
                  {currentTestimonial.author?.charAt(0) || "?"}
                </div>
                <div>
                  <div className={`font-bold ${colors.text.primary} text-lg`}>
                    {currentTestimonial.author}
                  </div>
                  <div className={colors.text.secondary}>
                    {currentTestimonial.role}
                    {currentTestimonial.company && ` at ${currentTestimonial.company}`}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {navigation?.dots?.enabled && (
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

          {navigation?.arrows?.enabled && (
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

// Ecomus Testimonials Component - Grid with title and quote icon
function EcomusTestimonials({ config }) {
  const colors = config?.colors || defaultConfigs.ecomusTestimonials.colors;
  const header = config?.header || defaultConfigs.ecomusTestimonials.header;
  const testimonials = config?.testimonials || defaultConfigs.ecomusTestimonials.testimonials;
  const grid = config?.grid || defaultConfigs.ecomusTestimonials.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {header && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {header.title && (
              <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-4`}>
                {header.title}
              </h2>
            )}
            {header.description && (
              <p className={`${colors.text.secondary} text-lg`}>
                {header.description}
              </p>
            )}
          </motion.div>
        )}

        <div className={`grid ${grid.columns} ${grid.gap}`}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id || index}
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

              {testimonial.title && (
                <h3 className={`text-xl font-bold ${colors.text.primary} mb-4`}>
                  {testimonial.title}
                </h3>
              )}

              {testimonial.rating && (
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${colors.stars.active}`}
                    />
                  ))}
                </div>
              )}

              <p className={`${colors.text.secondary} mb-6 leading-relaxed relative z-10`}>
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {(testimonial.name || testimonial.author)?.charAt(0) || "?"}
                </div>
                <div>
                  <p className={`font-semibold ${colors.text.primary}`}>
                    {testimonial.name || testimonial.author}
                  </p>
                  {testimonial.role && (
                    <p className={`text-sm ${colors.text.light}`}>{testimonial.role}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

