"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Star, X, ZoomIn } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = Array.from({ length: 5 }, (_, i) => i);

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div
              className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-4 overflow-hidden cursor-zoom-in relative"
              onClick={() => setShowLightbox(true)}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
              </div>
              <div className="absolute top-4 right-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsWishlisted(!isWishlisted);
                  }}
                  className={`p-2 rounded-full backdrop-blur-sm ${
                    isWishlisted ? "bg-red-500 text-white" : "bg-white/80 text-gray-700"
                  }`}
                >
                  <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
                </motion.button>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                  <ZoomIn className="w-4 h-4 text-gray-700" />
                  <span className="text-sm font-semibold text-gray-700">Click to view</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {images.map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg border-2 ${
                    selectedImage === i ? "border-blue-600" : "border-transparent"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-300 rounded"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
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
              Click on the image to open in fullscreen lightbox view. Premium quality product with exceptional features.
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

        <AnimatePresence>
          {showLightbox && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowLightbox(false)}
                className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              >
                <motion.button
                  onClick={() => setShowLightbox(false)}
                  className="absolute top-4 right-4 text-white p-2 hover:bg-white/20 rounded-full"
                >
                  <X className="w-8 h-8" />
                </motion.button>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="max-w-4xl w-full"
                >
                  <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-96 h-96 bg-gray-300 rounded-lg"></div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

