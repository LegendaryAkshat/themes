"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag, Star, X, ZoomIn } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    buttons: {
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-white/80 text-gray-700"
      },
      addToCart: "bg-blue-600 text-white hover:bg-blue-700",
      lightboxClose: "text-white hover:bg-white/20"
    },
    borders: {
      selected: "border-blue-600",
      unselected: "border-transparent"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200",
      lightbox: "bg-black/90"
    },
    stars: "fill-yellow-400 text-yellow-400"
  },
  
  // Product Information
  product: {
    name: "Premium Product",
    price: "$99.99",
    originalPrice: "$149.99",
    rating: 4.8,
    reviews: 128,
    description: "Click on the image to open in fullscreen lightbox view. Premium quality product with exceptional features."
  },
  
  // Images Configuration
  images: {
    count: 5,
    thumbnailColumns: "grid-cols-5"
  },
  
  // UI Text
  ui: {
    zoomHint: "Click to view",
    addToCart: "Add to Cart"
  }
};

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { colors, product, images, ui } = pageConfig;

  const imageArray = Array.from({ length: images.count }, (_, i) => i);

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div
              className={`aspect-square ${colors.gradients.image} rounded-2xl mb-4 overflow-hidden cursor-zoom-in relative`}
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
                    isWishlisted ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive
                  }`}
                >
                  <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
                </motion.button>
              </div>
              <div className="absolute bottom-4 left-4">
                <div className="bg-white/80 backdrop-blur-sm px-3 py-2 rounded-lg flex items-center gap-2">
                  <ZoomIn className={`w-4 h-4 ${colors.text.secondary}`} />
                  <span className={`text-sm font-semibold ${colors.text.secondary}`}>{ui.zoomHint}</span>
                </div>
              </div>
            </div>
            <div className={`grid ${images.thumbnailColumns} gap-2`}>
              {imageArray.map((i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`aspect-square ${colors.gradients.image} rounded-lg border-2 ${
                    selectedImage === i ? colors.borders.selected : colors.borders.unselected
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
            <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${colors.stars}`} />
              ))}
              <span className={colors.text.secondary}>{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="mb-6">
              <span className={`text-4xl font-bold ${colors.text.primary}`}>{product.price}</span>
              <span className={`text-2xl ${colors.text.secondary} line-through ml-3`}>{product.originalPrice}</span>
            </div>
            <p className={`${colors.text.secondary} mb-8 leading-relaxed`}>
              {product.description}
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full ${colors.buttons.addToCart} py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2`}
            >
              <ShoppingBag className="w-5 h-5" />
              {ui.addToCart}
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
                className={`fixed inset-0 ${colors.gradients.lightbox} z-50 flex items-center justify-center p-4`}
              >
                <motion.button
                  onClick={() => setShowLightbox(false)}
                  className={`absolute top-4 right-4 ${colors.buttons.lightboxClose} p-2 rounded-full`}
                >
                  <X className="w-8 h-8" />
                </motion.button>
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="max-w-4xl w-full"
                >
                  <div className={`aspect-square ${colors.gradients.image} rounded-lg`}>
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

