"use client";

import { useState } from "react";
import FounderWords from "../../../components/sections/modern/Founderwords";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Founder Words content configuration - you can override default configs here
  content: {
    // Override founderWords1 config if needed
    // founderWords1: { ... },
    // Override founderWords2 config if needed
    // founderWords2: { ... },
    // etc.
  }
};

export default function FounderWordsDemoPage() {
  const [founderWordsType, setFounderWordsType] = useState("founderWords1");
  const { content } = pageConfig;

  const founderWordsTypes = [
    { value: "founderWords1", label: "Founder Words 1 - Timeline with Quotes" },
    { value: "founderWords2", label: "Founder Words 2 - Insights with Main Quote" },
    { value: "founderWords3", label: "Founder Words 3 - Milestones" },
    { value: "founderWords4", label: "Founder Words 4 - Principles" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Founder Words Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a founder words type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="founder-words-type" className="text-sm font-medium text-gray-700">
                Founder Words Type:
              </label>
              <select
                id="founder-words-type"
                value={founderWordsType}
                onChange={(e) => setFounderWordsType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {founderWordsTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Founder Words Component */}
      <div className="pt-20">
        <FounderWords
          component="founder-words"
          type={founderWordsType}
          content={content}
        />
      </div>
    </div>
  );
}

