"use client";

import { useState } from "react";
import Footer from "../../../components/sections/modern/footer";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Footer content configuration - you can override default configs here
  content: {
    // Override footer1 config if needed
    // footer1: { ... },
    // Override footer2 config if needed
    // footer2: { ... },
    // etc.
  }
};

export default function FooterDemoPage() {
  const [footerType, setFooterType] = useState("footer1");
  const { content } = pageConfig;

  const footerTypes = [
    { value: "footer1", label: "Footer 1 - Simple Sections" },
    { value: "footer2", label: "Footer 2 - With Footer Bottom" },
    { value: "footer3", label: "Footer 3 - Comprehensive with Brand" },
    { value: "ecomusFooter", label: "Ecomus Footer - E-commerce Style" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Footer Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a footer type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="footer-type" className="text-sm font-medium text-gray-700">
                Footer Type:
              </label>
              <select
                id="footer-type"
                value={footerType}
                onChange={(e) => setFooterType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {footerTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <div className="pt-20">
        <Footer
          component="footer"
          type={footerType}
          content={content}
        />
      </div>
    </div>
  );
}

