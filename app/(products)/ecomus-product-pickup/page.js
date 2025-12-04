"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, MapPin } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedStore, setSelectedStore] = useState("Downtown Store");

  const stores = [
    { name: "Downtown Store", address: "123 Main St, New York, NY 10001", available: true },
    { name: "Mall Location", address: "456 Shopping Center, NY 10002", available: true },
    { name: "Outlet Store", address: "789 Outlet Blvd, NY 10003", available: false }
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
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

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-blue-900">Store Pickup Available</h3>
              </div>
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {stores.map((store) => (
                  <option key={store.name} value={store.name} disabled={!store.available}>
                    {store.name} {!store.available && "(Unavailable)"}
                  </option>
                ))}
              </select>
              <p className="text-sm text-blue-700 mt-2">
                {stores.find(s => s.name === selectedStore)?.address}
              </p>
              <p className="text-sm text-blue-600 mt-2 font-semibold">
                Ready for pickup in 2-3 hours
              </p>
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                Reserve for Pickup
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 rounded-lg ${
                  isWishlisted ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
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

