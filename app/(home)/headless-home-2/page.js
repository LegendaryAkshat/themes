"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Headless",
    homeLink: "/headless-home-2"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    hero: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
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
    }
  },
  
  // Header Navigation
  header: {
    navigation: [
      { label: "About us", href: "/headless-about" },
      { label: "Collections", href: "/headless-collections" }
    ],
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Hero Section (Edit hero content here!)
  hero: {
    title: "Discover Your Style",
    description: "Curated collections for the modern lifestyle",
    button: {
      text: "Explore Collections",
      link: "/headless-collections",
      icon: "ArrowRight"
    }
  },
  
  // Collections (Edit collections here!)
  collections: [
    { name: "New Arrivals", count: 24, image: "new", link: "/headless-collections-new-arrivals" },
    { name: "Best Sellers", count: 18, image: "bestsellers", link: "/headless-collections-best-sellers" },
    { name: "On Sale", count: 32, image: "sale", link: "/headless-collections-on-sale" }
  ]
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, hero, collections } = pageConfig;

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

      <section className={`relative h-[600px] ${colors.hero} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 max-w-3xl px-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-5xl md:text-7xl font-light ${colors.text.primary} mb-6`}
            >
              {hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-xl ${colors.text.secondary} mb-10`}
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
                className={`inline-flex items-center gap-2 px-8 py-4 ${colors.buttons.primary} font-medium transition-colors`}
              >
                {hero.button.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className={`py-16 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="cursor-pointer"
              >
                <Link href={collection.link}>
                  <div className="aspect-[4/5] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-32 h-32 bg-gray-200 rounded"></div>
                  </div>
                  <h3 className={`text-xl font-semibold ${colors.text.primary} mb-1`}>{collection.name}</h3>
                  <p className={colors.text.secondary}>{collection.count} items</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
