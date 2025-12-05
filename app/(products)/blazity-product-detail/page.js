"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Heart, Share2, Minus, Plus, ArrowLeft } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Acme",
    homeLink: "/blazity-home",
    categoryLink: "/blazity-category",
    cartLink: "/blazity-cart"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-700"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300",
      selected: "border-gray-900"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      secondary: "border border-gray-300 hover:bg-gray-50"
    }
  },
  
  // Product Information (Edit product details here!)
  product: {
    name: "Inflatable Whitewater Kayak",
    price: "$983.00",
    images: ["🚣", "🛶", "⛵", "🚤"],
    description: "Premium inflatable kayak designed for whitewater adventures. Durable construction with multiple air chambers for safety.",
    features: [
      "Multiple air chambers",
      "Compact when deflated",
      "Includes paddle and pump",
      "2-year warranty"
    ]
  },
  
  // Navigation
  navigation: {
    backText: "Back to products",
    backLink: "/blazity-category"
  },
  
  // Actions
  actions: {
    wishlist: { enabled: true },
    share: { enabled: true }
  }
};

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { brand, colors, product, navigation, actions } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              <Link href={brand.cartLink} className="p-2 hover:bg-gray-100 rounded-md relative">
                <ShoppingCart className={`w-5 h-5 ${colors.text.light}`} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href={navigation.backLink} className={`inline-flex items-center gap-2 ${colors.text.secondary} hover:${colors.text.primary} mb-8`}>
          <ArrowLeft className="w-4 h-4" />
          {navigation.backText}
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-9xl">
              {product.images[selectedImage]}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-3xl border-2 transition-colors ${
                    selectedImage === index ? colors.borders.selected : 'border-transparent'
                  }`}
                >
                  {img}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{product.name}</h1>
            <p className={`text-3xl font-bold ${colors.text.primary} mb-6`}>{product.price}</p>

            <p className={`${colors.text.light} mb-8 leading-relaxed`}>{product.description}</p>

            <div className="mb-8">
              <h3 className={`font-semibold ${colors.text.primary} mb-3`}>Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-2 ${colors.text.light}`}>
                    <span className="w-1.5 h-1.5 bg-gray-900 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>Quantity</label>
              <div className="flex items-center gap-4">
                <div className={`flex items-center border ${colors.borders.input} rounded-md`}>
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <button className={`flex-1 ${colors.buttons.primary} px-8 py-4 rounded-md font-semibold transition-colors flex items-center justify-center gap-2`}>
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              {actions.wishlist.enabled && (
                <button className={`p-4 ${colors.buttons.secondary} rounded-md transition-colors`}>
                  <Heart className="w-5 h-5" />
                </button>
              )}
              {actions.share.enabled && (
                <button className={`p-4 ${colors.buttons.secondary} rounded-md transition-colors`}>
                  <Share2 className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
