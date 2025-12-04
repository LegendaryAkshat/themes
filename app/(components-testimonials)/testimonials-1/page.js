"use client";

import { motion } from "framer-motion";

export default function Page() {
  const testimonials = [
    {
      text: "Exceptional service and quality products. The entire experience exceeded my expectations and I couldn't be happier with my purchase.",
      author: "David Johnson",
      role: "Serial Entrepreneur"
    },
    {
      text: "Outstanding customer support and fast delivery. The product quality is top-notch and exactly as described. Highly recommended!",
      author: "Wilson Davis",
      role: "Backend Developer"
    },
    {
      text: "Great value for money and excellent build quality. The attention to detail is impressive and the service is second to none.",
      author: "Sarah Martinez",
      role: "Product Designer"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50 text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="relative">
          <div className="flex items-center justify-center gap-4 mb-8">
            <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </button>
            <button className="p-3 hover:bg-gray-200 rounded-full transition-colors">
              <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
            </button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div>
                  <a href="#" className="text-slate-800 font-semibold hover:text-blue-600 transition-colors">
                    {testimonial.author}
                  </a>
                  <p className="text-gray-500 text-sm mt-1">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}

