"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, MapPin } from "lucide-react";
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
      addToCart: "bg-blue-600 text-white hover:bg-blue-700"
    },
    pickup: {
      container: "bg-blue-50 border border-blue-200",
      icon: "text-blue-600",
      title: "text-blue-900",
      address: "text-blue-700",
      time: "text-blue-600",
      select: "border border-blue-300 focus:ring-2 focus:ring-blue-500"
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
  
  // Store Pickup Configuration
  stores: [
    { name: "Downtown Store", address: "123 Main St, New York, NY 10001", available: true },
    { name: "Mall Location", address: "456 Shopping Center, NY 10002", available: true },
    { name: "Outlet Store", address: "789 Outlet Blvd, NY 10003", available: false }
  ],
  
  // UI Text
  ui: {
    pickupTitle: "Store Pickup Available",
    pickupTime: "Ready for pickup in 2-3 hours",
    unavailableText: "(Unavailable)",
    reserveButton: "Reserve for Pickup"
  }
};

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedStore, setSelectedStore] = useState(pageConfig.stores[0].name);
  const { colors, product, stores, ui } = pageConfig;

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

            <div className={`${colors.pickup.container} rounded-lg p-4 mb-6`}>
              <div className="flex items-center gap-2 mb-3">
                <MapPin className={`w-5 h-5 ${colors.pickup.icon}`} />
                <h3 className={`font-semibold ${colors.pickup.title}`}>{ui.pickupTitle}</h3>
              </div>
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                className={`w-full px-4 py-2 ${colors.pickup.select} rounded-lg focus:outline-none`}
              >
                {stores.map((store) => (
                  <option key={store.name} value={store.name} disabled={!store.available}>
                    {store.name} {!store.available && ui.unavailableText}
                  </option>
                ))}
              </select>
              <p className={`text-sm ${colors.pickup.address} mt-2`}>
                {stores.find(s => s.name === selectedStore)?.address}
              </p>
              <p className={`text-sm ${colors.pickup.time} mt-2 font-semibold`}>
                {ui.pickupTime}
              </p>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 ${colors.buttons.addToCart} py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2`}
              >
                <ShoppingBag className="w-5 h-5" />
                {ui.reserveButton}
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
