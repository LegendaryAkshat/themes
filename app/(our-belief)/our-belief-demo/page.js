"use client";

import { useState } from "react";
import OurBelief from "../../../components/sections/modern/Ourbelief";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Our Belief content configuration - you can override default configs here
  content: {
    // Override ourBelief1 config if needed
    // ourBelief1: { ... },
    // Override ourBelief2 config if needed
    // ourBelief2: { ... },
    // etc.
  }
};

export default function OurBeliefDemoPage() {
  const [ourBeliefType, setOurBeliefType] = useState("ourBelief1");
  const { content } = pageConfig;

  const ourBeliefTypes = [
    { value: "ourBelief1", label: "Our Belief 1 - Grid with Hover Action" },
    { value: "ourBelief2", label: "Our Belief 2 - Horizontal Cards with Scroll" },
    { value: "ourBelief3", label: "Our Belief 3 - Manifesto with Commitments" },
    { value: "ourBelief4", label: "Our Belief 4 - Grid with Quote" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Our Belief Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a belief type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="our-belief-type" className="text-sm font-medium text-gray-700">
                Our Belief Type:
              </label>
              <select
                id="our-belief-type"
                value={ourBeliefType}
                onChange={(e) => setOurBeliefType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {ourBeliefTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Our Belief Component */}
      <div className="pt-20">
        <OurBelief
          component="our-belief"
          type={ourBeliefType}
          content={content}
        />
      </div>
    </div>
  );
}

