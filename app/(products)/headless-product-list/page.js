"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Heart, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Headless",
    homeLink: "/headless-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      icon: "hover:bg-gray-100",
      primary: "bg-gray-900 text-white hover:bg-gray-800"
    },
    stars: {
      active: "fill-yellow-400 text-yellow-400"
    }
  },
  
  // Header Navigation
  header: {
    navigation: [
      { label: "About us", href: "/headless-about" },
      { label: "Collections", href: "/headless-collection" }
    ],
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Page Header
  page: {
    title: "Product List",
    description: "Browse our complete collection"
  },
  
  // Products (Edit products here!)
  products: [
    { id: 1, name: "Minimalist Watch", price: "$199", rating: 4.8, description: "Sleek design with precision movement", image: "watch", link: "/headless-product-detail" },
    { id: 2, name: "Leather Wallet", price: "$89", rating: 4.9, description: "Handcrafted from genuine leather", image: "wallet", link: "/headless-product-detail" },
    { id: 3, name: "Canvas Backpack", price: "$149", rating: 4.7, description: "Durable and stylish everyday carry", image: "backpack", link: "/headless-product-detail" }
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
    <div className={`min-h-screen ${colors.background}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {header.navigation.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className={`text-sm ${colors.text.secondary} hover:${colors.text.primary} transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href={brand.homeLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              {header.actions.search.enabled && (
                <button 
                  onClick={() => router.push(header.actions.search.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <Search className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className={`text-3xl font-semibold ${colors.text.primary} mb-2`}>{page.title}</h1>
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
                    <div className="w-32 h-32 bg-gray-200 rounded"></div>
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
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
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
