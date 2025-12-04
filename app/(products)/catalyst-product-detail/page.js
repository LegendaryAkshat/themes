"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Heart, Share2, Minus, Plus, ArrowLeft } from "lucide-react";

export default function Page() {
  const product = {
    name: "ZZ Plant",
    price: "$80.00",
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
    }
  };

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Planted
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-md relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/products" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to products
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-9xl">
              {product.images[selectedImage]}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-2xl border-2 transition-colors ${
                    selectedImage === index ? 'border-gray-900' : 'border-transparent'
                  }`}
                >
                  {img}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{product.name}</h1>
            <p className="text-3xl font-bold text-gray-900 mb-6">{product.price}</p>

            <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-700">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Care Instructions */}
            <div className="mb-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Care Instructions</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Light:</strong> {product.care.light}</p>
                <p><strong>Water:</strong> {product.care.water}</p>
                <p><strong>Humidity:</strong> {product.care.humidity}</p>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-900 mb-2">Quantity</label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-md">
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

            {/* Add to Cart */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button className="p-4 border border-gray-300 rounded-md hover:bg-gray-50">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-4 border border-gray-300 rounded-md hover:bg-gray-50">
                <Share2 className="w-5 h-5" />
              </button>
            </div>

            {/* Shipping Info */}
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900">
                <strong>Free shipping</strong> on orders over $50. Estimated delivery: 3-5 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

