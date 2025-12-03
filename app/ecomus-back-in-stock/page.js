"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Bell } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      setNotified(true);
      setTimeout(() => setNotified(false), 3000);
    }
  };

  return (
    <main className="min-h-screen w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl relative">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
            </div>
            <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-2 rounded-lg font-semibold">
              Out of Stock
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

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="w-5 h-5 text-yellow-600" />
                <p className="text-yellow-900 font-semibold">Notify Me When Available</p>
              </div>
              {notified ? (
                <p className="text-green-600 font-semibold">✓ You'll be notified when this product is back in stock!</p>
              ) : (
                <form onSubmit={handleNotify} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                  >
                    Notify Me
                  </motion.button>
                </form>
              )}
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              This product is currently out of stock. Enter your email to be notified when it becomes available again.
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                isWishlisted ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
              {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}

