"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, TrendingUp, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Vercel Store",
    homeLink: "/vercel-store-home-4",
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
      secondary: "text-gray-400",
      light: "text-gray-500"
    },
    borders: {
      default: "border-gray-800",
      input: "border-gray-800"
    },
    buttons: {
      icon: "hover:bg-gray-800",
      focus: "focus:ring-gray-700"
    },
    hero: {
      background: "bg-gradient-to-br from-gray-900 via-black to-gray-900",
      badge: "bg-white/10 backdrop-blur-sm"
    },
    input: {
      background: "bg-gray-900",
      border: "border-gray-800",
      focus: "focus:ring-gray-700"
    },
    trending: {
      icon: "text-blue-500"
    }
  },
  
  // Header Configuration
  header: {
    navigation: [
      { label: "Home", href: "/vercel-store-home-4" },
      { label: "Collections", href: "/vercel-store-collections" },
      { label: "Trending", href: "/vercel-store-trending" }
    ],
    search: {
      enabled: true,
      placeholder: "Search..."
    },
    cart: {
      enabled: true,
      link: "/vercel-store-cart"
    }
  },
  
  // Hero Section (Edit hero content here!)
  hero: {
    badge: {
      text: "New Collection Available",
      icon: "Sparkles"
    },
    title: "Shop the Latest",
    description: "Discover what's trending and find your next favorite piece"
  },
  
  // Trending Section (Edit trending items here!)
  trending: {
    title: "Trending Now",
    icon: "TrendingUp",
    items: [
      { name: "Minimalist Watch", price: "$199", trend: "+24%", link: "/vercel-store-product-detail" },
      { name: "Leather Wallet", price: "$89", trend: "+18%", link: "/vercel-store-product-detail" },
      { name: "Canvas Backpack", price: "$149", trend: "+32%", link: "/vercel-store-product-detail" }
    ]
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, hero, trending } = pageConfig;

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

            <div className="hidden md:flex items-center gap-6">
              {header.navigation.map((item, index) => (
                <Link key={index} href={item.href} className="text-sm hover:text-gray-300 transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              {header.search.enabled && (
                <div className="hidden md:block relative">
                  <input
                    type="text"
                    placeholder={header.search.placeholder}
                    className={`w-64 ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 ${colors.input.focus}`}
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
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
          </div>
        </nav>
      </header>

      <section className={`relative h-[500px] ${colors.hero.background} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 max-w-3xl px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`inline-flex items-center gap-2 ${colors.hero.badge} px-4 py-2 rounded-full mb-6`}
            >
              <Sparkles className="w-4 h-4" />
              <span className="text-sm">{hero.badge.text}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-xl ${colors.text.secondary} mb-8`}
            >
              {hero.description}
            </motion.p>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center gap-3 mb-8">
          <TrendingUp className={`w-6 h-6 ${colors.trending.icon}`} />
          <h2 className="text-3xl font-bold">{trending.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {trending.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${colors.card} rounded-lg p-6 border ${colors.borders.default} hover:border-gray-700 transition-colors`}
            >
              <Link href={item.link}>
                <div className={`aspect-square ${colors.card} rounded-lg mb-4 flex items-center justify-center`}>
                  <div className="w-24 h-24 bg-gray-800 rounded"></div>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{item.name}</h3>
                  <span className="text-blue-500 text-sm font-semibold">{item.trend}</span>
                </div>
                <p className="text-2xl font-bold">{item.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
