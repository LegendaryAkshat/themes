"use client";

import { useState } from "react";
import Testimonials from "../../../components/sections/modern/testimonials";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Testimonials content configuration - you can override default configs here
  content: {
    // Override testimonials1 config if needed
    // testimonials1: { ... },
    // Override testimonials2 config if needed
    // testimonials2: { ... },
    // etc.
  }
};

export default function TestimonialsDemoPage() {
  const [testimonialsType, setTestimonialsType] = useState("testimonials1");
  const { content } = pageConfig;

  const testimonialsTypes = [
    { value: "testimonials1", label: "Testimonials 1 - Simple Grid" },
    { value: "testimonials2", label: "Testimonials 2 - Grid with Ratings" },
    { value: "testimonials3", label: "Testimonials 3 - Carousel/Slider" },
    { value: "ecomusTestimonials", label: "Ecomus Testimonials - Grid with Title" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Testimonials Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a testimonials type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="testimonials-type" className="text-sm font-medium text-gray-700">
                Testimonials Type:
              </label>
              <select
                id="testimonials-type"
                value={testimonialsType}
                onChange={(e) => setTestimonialsType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {testimonialsTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Component */}
      <div className="pt-20">
        <Testimonials
          component="testimonials"
          type={testimonialsType}
          content={content}
        />
      </div>
    </div>
  );
}

