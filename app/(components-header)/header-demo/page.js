"use client";

import { useState } from "react";
import Header from "../../../components/sections/modern/header";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Header content configuration - you can override default configs here
  content: {
    // Override header1 config if needed
    // header1: { ... },
    // Override header2 config if needed
    // header2: { ... },
    // etc.
  }
};

export default function HeaderDemoPage() {
  const [headerType, setHeaderType] = useState("header1");
  const { content } = pageConfig;

  const headerTypes = [
    { value: "header1", label: "Header 1 - With Search Bar" },
    { value: "header2", label: "Header 2 - With Badge" },
    { value: "header3", label: "Header 3 - With Motion Effects" },
    { value: "ecomusHeader", label: "Ecomus Header - With Mobile Menu" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Header Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a header type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="header-type" className="text-sm font-medium text-gray-700">
                Header Type:
              </label>
              <select
                id="header-type"
                value={headerType}
                onChange={(e) => setHeaderType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {headerTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Header Component */}
      <div className="pt-20">
        <Header
          component="header"
          type={headerType}
          content={content}
        />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Content</h2>
            <p className="text-gray-600">This is sample content to demonstrate the header positioning.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

