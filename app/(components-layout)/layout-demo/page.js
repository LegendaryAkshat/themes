"use client";

import { useState } from "react";
import Layout from "../../../components/sections/modern/layouts";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Layout content configuration - you can override default configs here
  content: {
    // Override layout1 config if needed
    // layout1: { ... },
    // Override layout2 config if needed
    // layout2: { ... },
    // etc.
  }
};

export default function LayoutDemoPage() {
  const [layoutType, setLayoutType] = useState("layout1");
  const { content } = pageConfig;

  const layoutTypes = [
    { value: "layout1", label: "Layout 1 - Standard Layout" },
    { value: "layout2", label: "Layout 2 - Custom Header Styling" },
    { value: "layout3", label: "Layout 3 - Minimal Layout" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Layout Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a layout type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="layout-type" className="text-sm font-medium text-gray-700">
                Layout Type:
              </label>
              <select
                id="layout-type"
                value={layoutType}
                onChange={(e) => setLayoutType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {layoutTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Layout Component */}
      <div className="pt-20">
        <Layout
          component="layout"
          type={layoutType}
          content={content}
        >
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Content</h2>
              <p className="text-gray-600 mb-8">This is sample content to demonstrate the layout structure.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-2">Section 1</h3>
                  <p className="text-gray-600">Sample content for section 1</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-2">Section 2</h3>
                  <p className="text-gray-600">Sample content for section 2</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-2">Section 3</h3>
                  <p className="text-gray-600">Sample content for section 3</p>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

