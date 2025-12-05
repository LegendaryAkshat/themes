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
      secondary: "text-gray-600"
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
  header: {
    title: "Product Grid",
    description: "Browse our plant collection"
  },
  
  // Products (Edit products here!)
  products: [
    { id: 1, name: "ZZ Plant", price: "$80.00", rating: 4.8, image: "plant1", link: "/catalyst-product-detail" },
    { id: 2, name: "Monstera", price: "$95.00", rating: 4.9, image: "plant2", link: "/catalyst-product-detail" },
    { id: 3, name: "Snake Plant", price: "$65.00", rating: 4.7, image: "plant3", link: "/catalyst-product-detail" },
    { id: 4, name: "Pothos", price: "$45.00", rating: 4.6, image: "plant4", link: "/catalyst-product-detail" },
    { id: 5, name: "Fiddle Leaf", price: "$120.00", rating: 4.9, image: "plant5", link: "/catalyst-product-detail" },
    { id: 6, name: "Peace Lily", price: "$55.00", rating: 4.8, image: "plant6", link: "/catalyst-product-detail" }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3"
    },
    gap: "gap-6"
  },
  
  // Features
  features: {
    wishlist: { enabled: true },
    ratings: { enabled: true }
  }
};

export default function Page() {
  const [wishlist, setWishlist] = useState(new Set());
  const { brand, colors, header, products, grid, features } = pageConfig;

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
              <Link href={brand.cartLink} className="p-2 hover:bg-gray-100 rounded-md relative">
                <ShoppingCart className={`w-5 h-5 ${colors.text.light}`} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{header.title}</h1>
          <p className={colors.text.secondary}>{header.description}</p>
        </div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={product.link}>
                <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden relative">
                  <div className="text-9xl">🌿</div>
                  {features.wishlist.enabled && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart
                        className={`w-5 h-5 ${wishlist.has(product.id) ? "fill-red-500 text-red-500" : colors.text.light}`}
                      />
                    </button>
                  )}
                </div>
                <div className="space-y-2">
                  <h3 className={`font-semibold ${colors.text.primary}`}>{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-bold ${colors.text.primary}`}>{product.price}</span>
                    {features.ratings.enabled && (
                      <div className="flex items-center gap-1">
                        <Star className={`w-4 h-4 ${colors.stars.active}`} />
                        <span className={`text-sm ${colors.text.secondary}`}>{product.rating}</span>
                      </div>
                    )}
                  </div>
                  <button className={`w-full mt-2 flex items-center justify-center gap-2 px-4 py-2 ${colors.buttons.primary} rounded-lg transition-colors`}>
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </main>
  );
}
