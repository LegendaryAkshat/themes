"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Acme",
    homeLink: "/blazity-home"
  },
  
  // Colors & Theme (use full Tailwind class names)
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-300"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      wishlist: {
        active: "fill-red-500 text-red-500",
        inactive: "text-gray-700"
      }
    }
  },
  
  // Header Configuration
  header: {
    logo: "Acme",
    logoLink: "/blazity-home",
    cartLink: "/blazity-cart"
  },
  
  // Page Content
  page: {
    title: "Product Grid",
    subtitle: "Browse our outdoor gear collection"
  },
  
  // Products
  products: [
    { 
      id: 1, 
      name: "Inflatable Kayak", 
      price: "$983.00", 
      rating: 4.8, 
      image: "🚣",
      link: "/blazity-product-detail"
    },
    { 
      id: 2, 
      name: "Camping Tent", 
      price: "$299.00", 
      rating: 4.9, 
      image: "⛺",
      link: "/blazity-product-detail"
    },
    { 
      id: 3, 
      name: "Hiking Backpack", 
      price: "$189.00", 
      rating: 4.7, 
      image: "🎒",
      link: "/blazity-product-detail"
    },
    { 
      id: 4, 
      name: "Sleeping Bag", 
      price: "$149.00", 
      rating: 4.6, 
      image: "🛌",
      link: "/blazity-product-detail"
    },
    { 
      id: 5, 
      name: "Portable Stove", 
      price: "$89.00", 
      rating: 4.8, 
      image: "🔥",
      link: "/blazity-product-detail"
    },
    { 
      id: 6, 
      name: "Water Bottle", 
      price: "$35.00", 
      rating: 4.5, 
      image: "💧",
      link: "/blazity-product-detail"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const router = useRouter();
  const [wishlist, setWishlist] = useState(new Set());
  const { brand, colors, header, page, products, grid } = pageConfig;

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
            <Link href={header.logoLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {header.logo}
            </Link>
            <div className="flex items-center gap-4">
              <Link href={header.cartLink} className="p-2 hover:bg-gray-100 rounded-md relative">
                <ShoppingCart className={`w-5 h-5 ${colors.text.secondary}`} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{page.title}</h1>
          <p className={colors.text.secondary}>{page.subtitle}</p>
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
                  <div className="text-9xl">{product.image}</div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product.id);
                    }}
                    className="absolute top-3 right-3 p-2 bg-white/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <Heart
                      className={`w-5 h-5 ${wishlist.has(product.id) ? colors.buttons.wishlist.active : colors.buttons.wishlist.inactive}`}
                    />
                  </button>
                </div>
                <div className="space-y-2">
                  <h3 className={`font-semibold ${colors.text.primary}`}>{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className={`text-xl font-bold ${colors.text.primary}`}>{product.price}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className={`text-sm ${colors.text.secondary}`}>{product.rating}</span>
                    </div>
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
