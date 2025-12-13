"use client";

import { useState } from "react";
import About from "../../../components/sections/modern/Aboutus";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // About content configuration - you can override default configs here
  content: {
    // Override about1 config if needed
    // about1: { ... },
    // Override about2 config if needed
    // about2: { ... },
    // etc.
  }
};

export default function AboutDemoPage() {
  const [aboutType, setAboutType] = useState("about1");
  const { content } = pageConfig;

  const aboutTypes = [
    { value: "about1", label: "About 1 - Stats + Mission + Vision with Animations" },
    { value: "about2", label: "About 2 - Simple Text Paragraphs" },
    { value: "about3", label: "About 3 - Stats + Mission + Vision with Gradients" },
    { value: "about4", label: "About 4 - Complex Content Sections" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">About Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select an about type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="about-type" className="text-sm font-medium text-gray-700">
                About Type:
              </label>
              <select
                id="about-type"
                value={aboutType}
                onChange={(e) => setAboutType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {aboutTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* About Component */}
      <div className="pt-20">
        <About
          component="about"
          type={aboutType}
          content={content}
        />
      </div>
    </div>
  );
}

