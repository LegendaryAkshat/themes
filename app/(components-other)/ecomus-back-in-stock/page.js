"use client";

import { motion } from "framer-motion";
import { Heart, Star, Bell } from "lucide-react";
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
    badges: {
      outOfStock: "bg-red-500 text-white",
      notify: {
        container: "bg-yellow-50 border border-yellow-200",
        icon: "text-yellow-600",
        title: "text-yellow-900",
        success: "text-green-600"
      }
    },
    buttons: {
      wishlist: {
        active: "bg-red-500 text-white",
        inactive: "bg-gray-200 text-gray-700"
      },
      notify: "bg-yellow-600 text-white hover:bg-yellow-700"
    },
    borders: {
      input: "border border-gray-300 focus:ring-2 focus:ring-yellow-500"
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
    reviews: 128,
    description: "This product is currently out of stock. Enter your email to be notified when it becomes available again."
  },
  
  // Out of Stock Configuration
  stock: {
    badge: "Out of Stock",
    notifyTitle: "Notify Me When Available",
    successMessage: "✓ You'll be notified when this product is back in stock!",
    placeholder: "Enter your email"
  },
  
  // UI Text
  ui: {
    notifyButton: "Notify Me",
    addToWishlist: "Add to Wishlist",
    removeFromWishlist: "Remove from Wishlist"
  }
};

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [email, setEmail] = useState("");
  const [notified, setNotified] = useState(false);
  const { colors, product, stock, ui } = pageConfig;

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      setNotified(true);
      setTimeout(() => setNotified(false), 3000);
    }
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`aspect-square ${colors.gradients.image} rounded-2xl relative`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-lg"></div>
            </div>
            <div className={`absolute top-4 left-4 ${colors.badges.outOfStock} px-4 py-2 rounded-lg font-semibold`}>
              {stock.badge}
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

            <div className={`${colors.badges.notify.container} rounded-lg p-4 mb-6`}>
              <div className="flex items-center gap-2 mb-2">
                <Bell className={`w-5 h-5 ${colors.badges.notify.icon}`} />
                <p className={`${colors.badges.notify.title} font-semibold`}>{stock.notifyTitle}</p>
              </div>
              {notified ? (
                <p className={`${colors.badges.notify.success} font-semibold`}>{stock.successMessage}</p>
              ) : (
                <form onSubmit={handleNotify} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={stock.placeholder}
                    className={`flex-1 px-4 py-2 ${colors.borders.input} rounded-lg focus:outline-none`}
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`${colors.buttons.notify} px-6 py-2 rounded-lg font-semibold transition-colors`}
                  >
                    {ui.notifyButton}
                  </motion.button>
                </form>
              )}
            </div>

            <p className={`${colors.text.secondary} mb-8 leading-relaxed`}>
              {product.description}
            </p>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center gap-2 ${
                isWishlisted ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive
              }`}
            >
              <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
              {isWishlisted ? ui.removeFromWishlist : ui.addToWishlist}
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
