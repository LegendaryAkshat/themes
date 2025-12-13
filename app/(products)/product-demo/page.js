"use client";

import { useState } from "react";
import Products from "../../../components/sections/modern/products";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Product content configuration - you can override default configs here
  content: {
    // Override product1 config if needed
    // product1: { ... },
    // Override product2 config if needed
    // product2: { ... },
    // etc.
  }
};

export default function ProductDemoPage() {
  const [productType, setProductType] = useState("product1");
  const { content } = pageConfig;

  const productTypes = [
    { value: "product1", label: "Product 1 - Featured Products with Badges" },
    { value: "product2", label: "Product 2 - Best Sellers with Hover Tooltips" },
    { value: "product3", label: "Product 3 - New Arrivals with GSAP Animations" },
    { value: "product4", label: "Product 4 - Best Sellers with Different Styling" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Products Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a product type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="product-type" className="text-sm font-medium text-gray-700">
                Product Type:
              </label>
              <select
                id="product-type"
                value={productType}
                onChange={(e) => setProductType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {productTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Products Component */}
      <div className="pt-20">
        <Products
          component="products"
          type={productType}
          content={content}
        />
      </div>
    </div>
  );
}

