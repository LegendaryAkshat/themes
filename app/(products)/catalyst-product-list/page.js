"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Planted",
    homeLink: "/catalyst-home",
    cartLink: "/catalyst-cart"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-400"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      icon: "hover:bg-gray-100"
    },
    stars: {
      active: "fill-yellow-400 text-yellow-400"
    }
  },
  
  // Page Header
  page: {
    title: "Product List",
    description: "Detailed view of our plants"
  },
  
  // Products (Edit products here!)
  products: [
    { id: 1, name: "ZZ Plant", price: "$80.00", rating: 4.8, description: "Low-maintenance houseplant perfect for beginners", image: "plant1", link: "/catalyst-product-detail" },
    { id: 2, name: "Monstera", price: "$95.00", rating: 4.9, description: "Tropical plant with distinctive split leaves", image: "plant2", link: "/catalyst-product-detail" },
    { id: 3, name: "Snake Plant", price: "$65.00", rating: 4.7, description: "Air-purifying plant that thrives in low light", image: "plant3", link: "/catalyst-product-detail" }
  ],
  
  // Features
  features: {
    wishlist: { enabled: true },
    ratings: { enabled: true }
  }
};

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());
  const { brand, colors, page, products, features } = pageConfig;

  const toggleWishlist = (id) => {
    setWishlist((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              <Link href={brand.cartLink} className={`p-2 ${colors.buttons.icon} rounded-md relative`}>
                <ShoppingCart className={`w-5 h-5 ${colors.text.light}`} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{page.title}</h1>
          <p className={colors.text.secondary}>{page.description}</p>
        </div>

        <div className="space-y-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className={`${colors.background} border ${colors.borders.default} rounded-lg overflow-hidden hover:shadow-lg transition-shadow`}
            >
              <Link href={product.link}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="text-9xl">🌿</div>
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`text-xl font-bold ${colors.text.primary}`}>{product.name}</h3>
                        {features.wishlist.enabled && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleWishlist(product.id);
                            }}
                            className={`p-2 ${colors.buttons.icon} rounded-full transition-colors`}
                          >
                            <Heart
                              className={`w-5 h-5 ${wishlist.has(product.id) ? "fill-red-500 text-red-500" : colors.text.light}`}
                            />
                          </button>
                        )}
                      </div>
                      <p className={`${colors.text.secondary} mb-3`}>{product.description}</p>
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`text-2xl font-bold ${colors.text.primary}`}>{product.price}</span>
                        {features.ratings.enabled && (
                          <div className="flex items-center gap-1">
                            <Star className={`w-4 h-4 ${colors.stars.active}`} />
                            <span className={`text-sm ${colors.text.secondary}`}>{product.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <button className={`w-full ${colors.buttons.primary} py-2 rounded-lg font-medium transition-colors flex items-center justify-center gap-2`}>
                      <ShoppingBag className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </main>
  );
}
