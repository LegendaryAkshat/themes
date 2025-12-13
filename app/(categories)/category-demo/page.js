"use client";

import { useState } from "react";
import Categories from "../../../components/sections/modern/categories";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Category content configuration - you can override default configs here
  content: {
    // Override category1 config if needed
    // category1: { ... },
    // Override category2 config if needed
    // category2: { ... },
    // etc.
  }
};

export default function CategoryDemoPage() {
  const [categoryType, setCategoryType] = useState("category1");
  const { content } = pageConfig;

  const categoryTypes = [
    { value: "category1", label: "Category 1 - Featured Categories with Badges" },
    { value: "category2", label: "Category 2 - Horizontal Scrolling Navigation" },
    { value: "category3", label: "Category 3 - Browse by Category with Animations" },
    { value: "category4", label: "Category 4 - Simple Grid with Images" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Categories Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a category type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="category-type" className="text-sm font-medium text-gray-700">
                Category Type:
              </label>
              <select
                id="category-type"
                value={categoryType}
                onChange={(e) => setCategoryType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {categoryTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Component */}
      <div className="pt-20">
        <Categories
          component="categories"
          type={categoryType}
          content={content}
        />
      </div>
    </div>
  );
}

