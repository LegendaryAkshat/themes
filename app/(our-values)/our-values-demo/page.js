"use client";

import { useState } from "react";
import OurValues from "../../../components/sections/modern/Ourvalues";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Our Values content configuration - you can override default configs here
  content: {
    // Override ourValues1 config if needed
    // ourValues1: { ... },
    // Override ourValues2 config if needed
    // ourValues2: { ... },
    // etc.
  }
};

export default function OurValuesDemoPage() {
  const [ourValuesType, setOurValuesType] = useState("ourValues1");
  const { content } = pageConfig;

  const ourValuesTypes = [
    { value: "ourValues1", label: "Our Values 1 - Grid with Icons" },
    { value: "ourValues2", label: "Our Values 2 - Values with Principles" },
    { value: "ourValues3", label: "Our Values 3 - Values with Stats" },
    { value: "ourValues4", label: "Our Values 4 - Value Categories" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Our Values Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a values type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="our-values-type" className="text-sm font-medium text-gray-700">
                Our Values Type:
              </label>
              <select
                id="our-values-type"
                value={ourValuesType}
                onChange={(e) => setOurValuesType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {ourValuesTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Component */}
      <div className="pt-20">
        <OurValues
          component="our-values"
          type={ourValuesType}
          content={content}
        />
      </div>
    </div>
  );
}

