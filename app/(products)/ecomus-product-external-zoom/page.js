"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [showZoom, setShowZoom] = useState(false);

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div
              className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative cursor-crosshair"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setZoomPosition({ x, y });
                setShowZoom(true);
              }}
              onMouseLeave={() => setShowZoom(false)}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            {showZoom && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden border-2 border-blue-500"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-full h-full bg-gray-300" style={{
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundSize: "200%"
                  }}></div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="lg:col-span-3">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Premium Product</h1>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-gray-600">4.8 (128 reviews)</span>
            </div>
            <div className="mb-6">
              <span className="text-4xl font-bold text-gray-900">$99.99</span>
              <span className="text-2xl text-gray-500 line-through ml-3">$149.99</span>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Hover over the image to see zoom preview on the right. Premium quality product with exceptional features.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Add to Cart
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}

