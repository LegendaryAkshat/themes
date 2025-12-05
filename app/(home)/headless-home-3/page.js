"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Headless",
    homeLink: "/headless-home-3"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    hero: "bg-gradient-to-br from-amber-50 via-orange-50 to-red-50",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-700"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      icon: "hover:bg-gray-100",
      badge: "bg-white/50 backdrop-blur-sm"
    }
  },
  
  // Header Navigation
  header: {
    navigation: [
      { label: "About", href: "/headless-about" },
      { label: "FAQ", href: "/headless-faq" }
    ],
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Hero Section (Edit hero content here!)
  hero: {
    badge: {
      text: "New Collection Available",
      icon: "Sparkles"
    },
    title: "here's to joy",
    description: "Thoughtfully curated pieces for every moment",
    button: {
      text: "SHOP NOW",
      link: "/headless-collections"
    }
  },
  
  // Features (Edit features here!)
  features: [
    { title: "Free Shipping", description: "On orders over $100" },
    { title: "Easy Returns", description: "30-day return policy" },
    { title: "Secure Payment", description: "100% secure checkout" }
  ]
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, hero, features } = pageConfig;

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
                  className={`text-sm ${colors.text.light} hover:${colors.text.primary} transition-colors`}
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
                  <Search className={`w-5 h-5 ${colors.text.light}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.light}`} />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      <section className={`relative h-[700px] ${colors.hero} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10 max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className={`inline-flex items-center gap-2 ${colors.buttons.badge} px-4 py-2 rounded-full mb-6`}
            >
              <Sparkles className="w-4 h-4" />
              <span className={`text-sm ${colors.text.light}`}>{hero.badge.text}</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-6xl md:text-8xl font-light ${colors.text.primary} mb-8`}
            >
              {hero.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`text-xl ${colors.text.secondary} mb-10`}
            >
              {hero.description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href={hero.button.link}
                className={`inline-block px-8 py-3 ${colors.buttons.primary} font-medium transition-colors`}
              >
                {hero.button.text}
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-200 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className={`py-16 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className={`text-xl font-semibold ${colors.text.primary} mb-2`}>{feature.title}</h3>
                <p className={colors.text.secondary}>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
