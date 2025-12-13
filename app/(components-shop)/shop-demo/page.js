"use client";

import { useState } from "react";
import Shop from "../../../components/sections/modern/shop";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Shop content configuration - you can override default configs here
  content: {
    // Override shop1 config if needed
    // shop1: { ... },
    // Override shop2 config if needed
    // shop2: { ... },
    // etc.
  }
};

export default function ShopDemoPage() {
  const [shopType, setShopType] = useState("shop1");
  const { content } = pageConfig;

  const shopTypes = [
    { value: "shop1", label: "Shop 1 - Default with Toggleable Filters" },
    { value: "shop2", label: "Shop 2 - Left Sidebar" },
    { value: "shop3", label: "Shop 3 - Right Sidebar" },
    { value: "shop4", label: "Shop 4 - Fullwidth" },
    { value: "shop5", label: "Shop 5 - Sub Collection" },
    { value: "shop6", label: "Shop 6 - Collections List" },
    { value: "shop7", label: "Shop 7 - Filter Hidden" },
    { value: "shop8", label: "Shop 8 - Shop the Look" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Shop Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a shop type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="shop-type" className="text-sm font-medium text-gray-700">
                Shop Type:
              </label>
              <select
                id="shop-type"
                value={shopType}
                onChange={(e) => setShopType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {shopTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Shop Component */}
      <div className="pt-20">
        <Shop
          component="shop"
          type={shopType}
          content={content}
        />
      </div>
    </div>
  );
}

