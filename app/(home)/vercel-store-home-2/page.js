"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Vercel Store",
    homeLink: "/vercel-store-home-2",
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
      input: "border-gray-800"
    },
    buttons: {
      primary: "bg-white hover:bg-gray-200",
      icon: "hover:bg-gray-800",
      badge: "bg-blue-600",
      focus: "focus:ring-gray-700"
    },
    hero: {
      background: "bg-gradient-to-br from-gray-900 via-black to-gray-900"
    },
    input: {
      background: "bg-gray-900",
      border: "border-gray-800",
      focus: "focus:ring-gray-700"
    }
  },
  
  // Header Configuration
  header: {
    navigation: [
      { label: "All", href: "/vercel-store-home-2" },
      { label: "Apparel", href: "/vercel-store-search?category=apparel" },
      { label: "Accessories", href: "/vercel-store-search?category=accessories" }
    ],
    search: {
      enabled: true,
      placeholder: "Search products..."
    },
    cart: {
      enabled: true,
      link: "/vercel-store-cart"
    },
    menu: {
      enabled: true,
      mobileOnly: true
    }
  },
  
  // Hero Section (Edit hero content here!)
  hero: {
    title: "Discover Your Style",
    description: "Curated collections of thoughtfully designed pieces",
    button: {
      text: "Shop Now",
      link: "/vercel-store-collections-all"
    }
  },
  
  // Categories (Edit categories here!)
  categories: [
    { name: "New Arrivals", count: 24 },
    { name: "Best Sellers", count: 18 },
    { name: "Sale", count: 32 }
  ],
  
  // Featured Products (Edit products here!)
  featuredProducts: {
    title: "Featured Products",
    products: [
      { id: 1, name: "Classic Denim Jacket", price: "$89.00", rating: 4.8, image: "jacket", link: "/vercel-store-product-detail" },
      { id: 2, name: "Leather Crossbody Bag", price: "$125.00", rating: 4.9, image: "bag", link: "/vercel-store-product-detail" },
      { id: 3, name: "Wool Scarf", price: "$45.00", rating: 4.7, image: "scarf", link: "/vercel-store-product-detail" },
      { id: 4, name: "Canvas Sneakers", price: "$75.00", rating: 4.6, image: "sneakers", link: "/vercel-store-product-detail" }
    ]
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, hero, categories, featuredProducts } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background} ${colors.text.primary}`}>
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 bg-black/95 backdrop-blur-sm`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {header.menu.enabled && header.menu.mobileOnly && (
              <button className={`md:hidden p-2 rounded-md ${colors.buttons.icon}`}>
                <Menu className="w-6 h-6" />
              </button>
            )}

            <div className="flex items-center gap-8 flex-1">
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
            </div>

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

      <section className={`relative h-[600px] ${colors.hero.background} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 max-w-3xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              {hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-xl ${colors.text.secondary} mb-8`}
            >
              {hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href={hero.button.link}
                className={`inline-block px-8 py-3 ${colors.buttons.primary} text-black font-semibold transition-colors rounded-md`}
              >
                {hero.button.text}
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className={`${colors.card} rounded-lg p-8 border ${colors.borders.default} hover:border-gray-700 transition-colors cursor-pointer`}
            >
              <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
              <p className={colors.text.secondary}>{category.count} items</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">{featuredProducts.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={product.link}>
                <div className={`aspect-square ${colors.card} rounded-lg mb-4 flex items-center justify-center overflow-hidden border ${colors.borders.default} group-hover:border-gray-700 transition-colors`}>
                  <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-700 rounded"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">{product.name}</h3>
                    <span className={`text-sm font-semibold ${colors.buttons.badge} px-3 py-1 rounded-md`}>
                      {product.price}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className={`text-xs ${colors.text.secondary}`}>{product.rating}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
