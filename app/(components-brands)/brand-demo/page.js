"use client";

import { useState } from "react";
import Brands from "../../../components/sections/modern/brands";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand content configuration - you can override default configs here
  content: {
    // Override brand1 config if needed
    // brand1: { ... },
    // Override brand2 config if needed
    // brand2: { ... },
    // etc.
  }
};

export default function BrandDemoPage() {
  const [brandType, setBrandType] = useState("brand1");
  const { content } = pageConfig;

  const brandTypes = [
    { value: "brand1", label: "Brand 1 - Single Brand Page with Products" },
    { value: "brand2", label: "Brand 2 - Brands Grid" },
    { value: "brand3", label: "Brand 3 - Brands Grid with Product Count" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Brands Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a brand type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="brand-type" className="text-sm font-medium text-gray-700">
                Brand Type:
              </label>
              <select
                id="brand-type"
                value={brandType}
                onChange={(e) => setBrandType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {brandTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Component */}
      <div className="pt-20">
        <Brands
          component="brands"
          type={brandType}
          content={content}
        />
      </div>
    </div>
  );
}

