"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Heart, Star, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Vercel Store",
    homeLink: "/vercel-store-home",
    logo: {
      background: "bg-white",
      icon: "bg-black"
    }
  },
  
  // Colors & Theme
  colors: {
    background: "bg-black",
    card: "bg-gray-900",
    text: {
      primary: "text-white",
      secondary: "text-gray-400"
    },
    borders: {
      default: "border-gray-800",
      hover: "border-gray-700"
    },
    buttons: {
      icon: "hover:bg-gray-800",
      primary: "bg-gray-900 text-white hover:bg-gray-800"
    },
    stars: {
      active: "fill-yellow-400 text-yellow-400"
    }
  },
  
  // Header Configuration
  header: {
    cart: {
      enabled: true,
      link: "/vercel-store-cart"
    }
  },
  
  // Page Header
  page: {
    title: "Product List",
    description: "Detailed view of our products"
  },
  
  // Products (Edit products here!)
  products: [
    { id: 1, name: "Classic White Tee", price: "$29.00", rating: 4.8, description: "Comfortable cotton t-shirt", image: "tee", link: "/vercel-store-product-detail" },
    { id: 2, name: "Denim Jacket", price: "$89.00", rating: 4.9, description: "Vintage-inspired denim jacket", image: "jacket", link: "/vercel-store-product-detail" },
    { id: 3, name: "Leather Boots", price: "$199.00", rating: 4.7, description: "Handcrafted leather boots", image: "boots", link: "/vercel-store-product-detail" }
  ],
  
  // Features
  features: {
    wishlist: { enabled: true },
    ratings: { enabled: true }
  }
};

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());
  const router = useRouter();
  const { brand, colors, header, page, products, features } = pageConfig;

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
    <div className={`min-h-screen ${colors.background} ${colors.text.primary}`}>
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 bg-black/95 backdrop-blur-sm`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className="flex items-center gap-2">
              <div className={`w-8 h-8 ${brand.logo.background} rounded flex items-center justify-center`}>
                <div className={`w-4 h-4 ${brand.logo.icon} rounded-sm`}></div>
              </div>
              <span className="font-semibold text-lg">{brand.name}</span>
            </Link>
            {header.cart.enabled && (
              <button 
                onClick={() => router.push(header.cart.link)}
                className={`p-2 rounded-md ${colors.buttons.icon} transition-colors`}
              >
                <ShoppingCart className="w-6 h-6" />
              </button>
            )}
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold mb-2`}>{page.title}</h1>
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
              className={`${colors.card} rounded-lg border ${colors.borders.default} hover:${colors.borders.hover} transition-colors overflow-hidden`}
            >
              <Link href={product.link}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
                  <div className="aspect-square bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-700 rounded"></div>
                  </div>
                  <div className="md:col-span-2 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between mb-2">
                        <h3 className={`text-xl font-semibold ${colors.text.primary}`}>{product.name}</h3>
                        {features.wishlist.enabled && (
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              toggleWishlist(product.id);
                            }}
                            className={`p-2 ${colors.buttons.icon} rounded-full transition-colors`}
                          >
                            <Heart
                              className={`w-5 h-5 ${wishlist.has(product.id) ? "fill-red-500 text-red-500" : colors.text.secondary}`}
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
    </div>
  );
}
