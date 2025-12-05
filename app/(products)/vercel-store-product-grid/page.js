"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Heart, Star } from "lucide-react";
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
    },
    input: {
      background: "bg-gray-900",
      border: "border-gray-800",
      focus: "focus:ring-gray-700"
    }
  },
  
  // Header Configuration
  header: {
    search: {
      enabled: true,
      placeholder: "Search products..."
    },
    cart: {
      enabled: true,
      link: "/vercel-store-cart"
    }
  },
  
  // Page Header
  page: {
    title: "Product Grid",
    description: "Browse our complete collection"
  },
  
  // Products (Edit products here!)
  products: [
    { id: 1, name: "Classic White Tee", price: "$29.00", rating: 4.8, image: "tee", link: "/vercel-store-product-detail" },
    { id: 2, name: "Denim Jacket", price: "$89.00", rating: 4.9, image: "jacket", link: "/vercel-store-product-detail" },
    { id: 3, name: "Leather Boots", price: "$199.00", rating: 4.7, image: "boots", link: "/vercel-store-product-detail" },
    { id: 4, name: "Canvas Backpack", price: "$79.00", rating: 4.6, image: "backpack", link: "/vercel-store-product-detail" },
    { id: 5, name: "Wool Beanie", price: "$24.00", rating: 4.5, image: "beanie", link: "/vercel-store-product-detail" },
    { id: 6, name: "Silk Scarf", price: "$45.00", rating: 4.8, image: "scarf", link: "/vercel-store-product-detail" },
    { id: 7, name: "Sunglasses", price: "$129.00", rating: 4.9, image: "sunglasses", link: "/vercel-store-product-detail" },
    { id: 8, name: "Leather Belt", price: "$59.00", rating: 4.7, image: "belt", link: "/vercel-store-product-detail" }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3",
      xl: "xl:grid-cols-4"
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
  const router = useRouter();
  const { brand, colors, header, page, products, grid, features } = pageConfig;

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
            {header.search.enabled && (
              <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder={header.search.placeholder}
                    className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 ${colors.input.focus}`}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </div>
              </div>
            )}
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

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.xl} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <Link href={product.link}>
                <div className={`aspect-square bg-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden border ${colors.borders.default} group-hover:${colors.borders.hover} transition-colors relative`}>
                  <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-700 rounded"></div>
                  </div>
                  {features.wishlist.enabled && (
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        toggleWishlist(product.id);
                      }}
                      className="absolute top-3 right-3 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart
                        className={`w-5 h-5 ${wishlist.has(product.id) ? "fill-red-500 text-red-500" : colors.text.secondary}`}
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
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
