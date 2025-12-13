"use client";

import { useState } from "react";
import FAQ from "../../../components/sections/modern/FAQ";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // FAQ content configuration - you can override default configs here
  content: {
    // Override faq1 config if needed
    // faq1: { ... },
    // Override faq2 config if needed
    // faq2: { ... },
    // etc.
  }
};

export default function FAQDemoPage() {
  const [faqType, setFaqType] = useState("faq1");
  const { content } = pageConfig;

  const faqTypes = [
    { value: "faq1", label: "FAQ 1 - Accordion with GSAP Animations" },
    { value: "faq2", label: "FAQ 2 - Simple Accordion" },
    { value: "faq3", label: "FAQ 3 - Accordion with Gradient Background" },
    { value: "faq4", label: "FAQ 4 - Simple List Format" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">FAQ Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a FAQ type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="faq-type" className="text-sm font-medium text-gray-700">
                FAQ Type:
              </label>
              <select
                id="faq-type"
                value={faqType}
                onChange={(e) => setFaqType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {faqTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Component */}
      <div className="pt-20">
        <FAQ
          component="faq"
          type={faqType}
          content={content}
        />
      </div>
    </div>
  );
}

