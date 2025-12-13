"use client";

import { useState } from "react";
import WhatWeOffer from "../../../components/sections/modern/Whatweoffer";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // What We Offer content configuration - you can override default configs here
  content: {
    // Override whatWeOffer1 config if needed
    // whatWeOffer1: { ... },
    // Override whatWeOffer2 config if needed
    // whatWeOffer2: { ... },
    // etc.
  }
};

export default function WhatWeOfferDemoPage() {
  const [whatWeOfferType, setWhatWeOfferType] = useState("whatWeOffer1");
  const { content } = pageConfig;

  const whatWeOfferTypes = [
    { value: "whatWeOffer1", label: "What We Offer 1 - Grid with Features" },
    { value: "whatWeOffer2", label: "What We Offer 2 - Services with CTA" },
    { value: "whatWeOffer3", label: "What We Offer 3 - Offerings with Features Section" },
    { value: "whatWeOffer4", label: "What We Offer 4 - Packages/Pricing" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">What We Offer Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a what we offer type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="what-we-offer-type" className="text-sm font-medium text-gray-700">
                What We Offer Type:
              </label>
              <select
                id="what-we-offer-type"
                value={whatWeOfferType}
                onChange={(e) => setWhatWeOfferType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {whatWeOfferTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer Component */}
      <div className="pt-20">
        <WhatWeOffer
          component="what-we-offer"
          type={whatWeOfferType}
          content={content}
        />
      </div>
    </div>
  );
}

