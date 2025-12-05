"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, Heart, Share2, Minus, Plus, ArrowLeft } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Planted",
    homeLink: "/catalyst-home",
    productsLink: "/catalyst-product-grid"
  },
  
  // Colors & Theme (use full Tailwind class names)
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-300"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      secondary: "border border-gray-900 text-gray-900 hover:bg-gray-50"
    }
  },
  
  // Header Configuration
  header: {
    logo: "Planted",
    logoLink: "/catalyst-home",
    cartLink: "/catalyst-cart"
  },
  
  // Product Information (Edit product details here!)
  product: {
    name: "ZZ Plant",
    price: "$80.00",
    originalPrice: null, // Set to show discount, e.g., "$100.00"
    images: ["🌿", "🪴", "🌱", "🌵"],
    description: "The ZZ Plant is a low-maintenance houseplant that thrives in low-light conditions. Perfect for beginners and busy plant parents.",
    features: [
      "Low maintenance",
      "Thrives in low light",
      "Air purifying",
      "Pet friendly"
    ],
    care: {
      light: "Low to bright indirect light",
      water: "Water every 2-3 weeks",
      humidity: "Average humidity"
    },
    inStock: true,
    stockCount: 15,
    sku: "ZZ-001",
    category: "Indoor Plants",
    tags: ["Low Light", "Pet Friendly", "Air Purifying"]
  },
  
  // Page Navigation
  navigation: {
    backText: "Back to Products",
    backLink: "/catalyst-product-grid"
  },
  
  // Actions
  actions: {
    addToCart: {
      enabled: true,
      text: "Add to Cart"
    },
    buyNow: {
      enabled: true,
      text: "Buy Now"
    },
    wishlist: {
      enabled: true
    },
    share: {
      enabled: true
    }
  }
};

export default function Page() {
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const { brand, colors, header, product, navigation, actions } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      {/* Header */}
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={header.logoLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {header.logo}
            </Link>
            <div className="flex items-center gap-4">
              <Link href={header.cartLink} className="p-2 hover:bg-gray-100 rounded-md relative">
                <ShoppingCart className={`w-5 h-5 ${colors.text.secondary}`} />
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

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-9xl">
              {product.images[selectedImage]}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-4xl border-2 ${
                    selectedImage === index ? 'border-gray-900' : 'border-transparent'
                  }`}
                >
                  {image}
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className={`text-3xl font-bold ${colors.text.primary}`}>{product.price}</span>
              {product.originalPrice && (
                <span className={`text-xl line-through ${colors.text.secondary}`}>{product.originalPrice}</span>
              )}
            </div>
            
            <p className={`${colors.text.secondary} mb-6 leading-relaxed`}>{product.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h3 className={`font-semibold ${colors.text.primary} mb-3`}>Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className={`flex items-center gap-2 ${colors.text.secondary}`}>
                    <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Care Instructions */}
            <div className={`border-t ${colors.borders.default} pt-6 mb-6`}>
              <h3 className={`font-semibold ${colors.text.primary} mb-3`}>Care Instructions:</h3>
              <div className="space-y-2">
                <p className={colors.text.secondary}><strong>Light:</strong> {product.care.light}</p>
                <p className={colors.text.secondary}><strong>Water:</strong> {product.care.water}</p>
                <p className={colors.text.secondary}><strong>Humidity:</strong> {product.care.humidity}</p>
              </div>
            </div>

            {/* Quantity & Actions */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className={colors.text.secondary}>Quantity:</span>
                <div className={`flex items-center border ${colors.borders.default} rounded-md`}>
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

              <div className="flex items-center gap-4">
                {actions.addToCart.enabled && (
                  <button className={`flex-1 ${colors.buttons.primary} px-6 py-3 rounded-md font-semibold`}>
                    {actions.addToCart.text}
                  </button>
                )}
                {actions.wishlist.enabled && (
                  <button 
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`p-3 border ${colors.borders.default} rounded-md hover:bg-gray-50`}
                  >
                    <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : colors.text.secondary}`} />
                  </button>
                )}
                {actions.share.enabled && (
                  <button className={`p-3 border ${colors.borders.default} rounded-md hover:bg-gray-50`}>
                    <Share2 className={`w-5 h-5 ${colors.text.secondary}`} />
                  </button>
                )}
              </div>

              {product.inStock && (
                <p className={`text-sm ${colors.text.secondary}`}>
                  In Stock ({product.stockCount} available)
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
