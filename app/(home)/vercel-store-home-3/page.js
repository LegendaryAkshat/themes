"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Vercel Store",
    homeLink: "/vercel-store-home-3",
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
      focus: "focus:ring-gray-700"
    },
    hero: {
      background: "bg-gradient-to-br from-gray-900 to-black"
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
      { label: "Collections", href: "/vercel-store-collections" },
      { label: "About", href: "/vercel-store-about" },
      { label: "Contact", href: "/vercel-store-contact" }
    ],
    search: {
      enabled: true,
      placeholder: "Search..."
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
    title: "Elevate Your Style",
    description: "Discover curated collections designed for the modern lifestyle",
    button: {
      text: "Explore Collections",
      link: "/vercel-store-collections",
      icon: "ArrowRight"
    }
  },
  
  // Collections (Edit collections here!)
  collections: [
    {
      name: "Spring Collection",
      description: "Fresh styles for the new season",
      image: "spring",
      count: 28,
      link: "/vercel-store-collections-spring-collection"
    },
    {
      name: "Essentials",
      description: "Timeless pieces for every wardrobe",
      image: "essentials",
      count: 45,
      link: "/vercel-store-collections-essentials"
    },
    {
      name: "Limited Edition",
      description: "Exclusive designs in limited quantities",
      image: "limited",
      count: 12,
      link: "/vercel-store-collections-limited-edition"
    }
  ]
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, hero, collections } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background} ${colors.text.primary}`}>
      <header className={`border-b ${colors.borders.default}`}>
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

      <section className={`relative h-[700px] ${colors.hero.background} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 max-w-4xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-6xl md:text-8xl font-light mb-6 tracking-tight"
            >
              {hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className={`text-xl ${colors.text.secondary} mb-10 max-w-2xl mx-auto`}
            >
              {hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <Link
                href={hero.button.link}
                className={`inline-flex items-center gap-2 px-8 py-4 ${colors.buttons.primary} text-black font-medium transition-colors rounded-md`}
              >
                {hero.button.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group cursor-pointer"
            >
              <Link href={collection.link}>
                <div className={`aspect-[4/5] ${colors.card} rounded-2xl mb-6 flex items-center justify-center overflow-hidden border ${colors.borders.default} group-hover:border-gray-700 transition-colors`}>
                  <div className="w-40 h-40 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-700 rounded"></div>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                <p className={`${colors.text.secondary} mb-3`}>{collection.description}</p>
                <p className={`text-sm ${colors.text.secondary}`}>{collection.count} items</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
