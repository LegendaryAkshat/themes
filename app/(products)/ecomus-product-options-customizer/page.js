"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Palette, Settings } from "lucide-react";
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
        inactive: "bg-gray-200 text-gray-700"
      },
      addToCart: "bg-blue-600 text-white"
    },
    borders: {
      selected: "border-blue-600 bg-blue-50 text-blue-600",
      unselected: "border-gray-300 text-gray-700"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    stars: "fill-yellow-400 text-yellow-400"
  },
  
  // Product Information
  product: {
    name: "Premium Product",
    price: "$99.99",
    originalPrice: "$149.99",
    rating: 4.8,
    reviews: 128
  },
  
  // Product Options
  options: {
    colors: ["Black", "White", "Blue", "Red"],
    sizes: ["S", "M", "L", "XL"],
    materials: ["Cotton", "Polyester", "Blend"]
  },
  
  // UI Text
  ui: {
    colorLabel: "Color",
    sizeLabel: "Size",
    materialLabel: "Material",
    addToCart: "Add to Cart"
  }
};

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedColor, setSelectedColor] = useState(pageConfig.options.colors[0]);
  const [selectedSize, setSelectedSize] = useState(pageConfig.options.sizes[1]);
  const [selectedMaterial, setSelectedMaterial] = useState(pageConfig.options.materials[0]);
  const { colors, product, options, ui } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`aspect-square ${colors.gradients.image} rounded-2xl`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
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

            <div className="space-y-6 mb-8">
              <div>
                <label className={`block text-sm font-semibold ${colors.text.primary} mb-3 flex items-center gap-2`}>
                  <Palette className="w-4 h-4" />
                  {ui.colorLabel}: {selectedColor}
                </label>
                <div className="flex gap-3">
                  {options.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedColor === color ? colors.borders.selected : colors.borders.unselected
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>{ui.sizeLabel}: {selectedSize}</label>
                <div className="flex gap-2">
                  {options.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-2 rounded-lg border-2 transition-all ${
                        selectedSize === size ? colors.borders.selected : colors.borders.unselected
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-semibold ${colors.text.primary} mb-3 flex items-center gap-2`}>
                  <Settings className="w-4 h-4" />
                  {ui.materialLabel}: {selectedMaterial}
                </label>
                <div className="flex gap-2">
                  {options.materials.map((material) => (
                    <button
                      key={material}
                      onClick={() => setSelectedMaterial(material)}
                      className={`px-4 py-2 rounded-lg border-2 transition-all ${
                        selectedMaterial === material ? colors.borders.selected : colors.borders.unselected
                      }`}
                    >
                      {material}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 ${colors.buttons.addToCart} py-4 rounded-lg font-semibold flex items-center justify-center gap-2`}
              >
                <ShoppingBag className="w-5 h-5" />
                {ui.addToCart}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 rounded-lg ${
                  isWishlisted ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive
                }`}
              >
                <Heart className="w-6 h-6" fill={isWishlisted ? "currentColor" : "none"} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

