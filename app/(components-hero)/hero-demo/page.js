"use client";

import { useState } from "react";
import Hero from "../../../components/sections/modern/heros";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Hero content configuration - you can override default configs here
  content: {
    // Override hero1 config if needed
    // hero1: { ... },
    // Override hero2 config if needed
    // hero2: { ... },
    // etc.
  },
  
  // Hero settings
  settings: {
    autoplay: true,
    showNavigation: true,
    showPagination: true,
    enableParallax: true,
    showProgress: true,
    enableKeyboard: true,
    loop: true
  }
};

export default function HeroDemoPage() {
  const [heroType, setHeroType] = useState("hero1");
  const { content, settings } = pageConfig;

  const heroTypes = [
    { value: "hero1", label: "Hero 1 - Framer Motion with Particles" },
    { value: "hero2", label: "Hero 2 - White Background with Stats" },
    { value: "hero3", label: "Hero 3 - Dark Gradient with Features" },
    { value: "ecomusHero", label: "Ecomus Hero - Simple Gradient Carousel" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Hero Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a hero type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="hero-type" className="text-sm font-medium text-gray-700">
                Hero Type:
              </label>
              <select
                id="hero-type"
                value={heroType}
                onChange={(e) => setHeroType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {heroTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Component */}
      <div className="pt-20">
        <Hero
          component="hero"
          type={heroType}
          content={content}
          autoplay={settings.autoplay}
          showNavigation={settings.showNavigation}
          showPagination={settings.showPagination}
          enableParallax={settings.enableParallax}
          showProgress={settings.showProgress}
          enableKeyboard={settings.enableKeyboard}
          loop={settings.loop}
        />
      </div>
    </div>
  );
}

