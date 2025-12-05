"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
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
    hero: "bg-gradient-to-br from-amber-50 via-orange-50 to-red-50",
    section: "bg-gray-50",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-700",
      accent: "text-gray-400"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      secondary: "border border-gray-900 hover:bg-gray-900 hover:text-white",
      icon: "hover:bg-gray-100"
    }
  },
  
  // Header Navigation
  header: {
    navigation: [
      { label: "About us", href: "/headless-about" },
      { label: "Spring", href: "/headless-spring" },
      { label: "FAQ", href: "/headless-faq" }
    ],
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Hero Section (Edit hero content here!)
  hero: {
    badge: "GIFT GUIDE",
    title: "here's to joy",
    button: {
      text: "SHOP GIFTS",
      link: "/headless-collection-gifts"
    }
  },
  
  // Press Section
  press: {
    enabled: true,
    logos: Array(8).fill({ quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." })
  },
  
  // Featured Products (Edit products here!)
  featuredProducts: {
    title: "Complete the set",
    products: [
      { name: "Black Jacket", price: "$8,068.72", link: "/headless-product-detail" },
      { name: "Cozy coat", price: "$2,598.00", link: "/headless-product-detail" }
    ]
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, hero, press, featuredProducts } = pageConfig;

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

      <section className={`relative h-[600px] ${colors.hero} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className={`text-sm uppercase tracking-wider ${colors.text.light} mb-4`}
            >
              {hero.badge}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className={`text-5xl md:text-7xl font-light ${colors.text.primary} mb-8`}
            >
              {hero.title}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
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
          <div className="absolute top-20 left-20 w-32 h-32 bg-amber-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-orange-200 rounded-full blur-3xl"></div>
        </div>
      </section>

      {press.enabled && (
        <section className={`py-16 ${colors.background}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
              {press.logos.map((logo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <div className={`h-16 bg-gray-100 rounded flex items-center justify-center mb-2`}>
                    <span className={`text-xs ${colors.text.accent}`}>PRESS LOGO</span>
                  </div>
                  <p className={`text-xs ${colors.text.secondary} italic`}>
                    "{logo.quote}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className={`py-20 ${colors.section}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-light ${colors.text.primary} mb-12 text-center`}>{featuredProducts.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProducts.products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`${colors.background} p-8`}
              >
                <div className={`aspect-square bg-gray-100 mb-6 flex items-center justify-center`}>
                  <div className="w-32 h-32 bg-gray-300 rounded"></div>
                </div>
                <h3 className={`text-2xl font-light ${colors.text.primary} mb-2`}>{product.name}</h3>
                <p className={`text-lg ${colors.text.secondary} mb-4`}>{product.price}</p>
                <Link
                  href={product.link}
                  className={`inline-block ${colors.buttons.secondary} px-6 py-2 text-sm font-medium transition-colors`}
                >
                  View Product
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
