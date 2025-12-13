"use client";

import { useState } from "react";
import Nav from "../../../components/sections/modern/nav";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Nav content configuration - you can override default configs here
  content: {
    // Override nav1 config if needed
    // nav1: { ... },
    // Override nav2 config if needed
    // nav2: { ... },
    // etc.
  }
};

export default function NavDemoPage() {
  const [navType, setNavType] = useState("nav1");
  const { content } = pageConfig;

  const navTypes = [
    { value: "nav1", label: "Nav 1 - Standard Navigation" },
    { value: "nav2", label: "Nav 2 - Horizontal with Brand" },
    { value: "nav3", label: "Nav 3 - Centered Navigation" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Nav Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a nav type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="nav-type" className="text-sm font-medium text-gray-700">
                Nav Type:
              </label>
              <select
                id="nav-type"
                value={navType}
                onChange={(e) => setNavType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {navTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Nav Component */}
      <div className="pt-20">
        <Nav
          component="nav"
          type={navType}
          content={content}
        />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Content</h2>
            <p className="text-gray-600">This is sample content to demonstrate the navigation positioning.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

