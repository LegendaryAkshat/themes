"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
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
      secondary: "text-gray-600",
      accent: "text-gray-400"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      icon: "hover:bg-gray-100",
      focus: "focus:ring-2 focus:ring-gray-900"
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
  
  // Search Configuration
  search: {
    placeholder: "Search products..."
  },
  
  // Products (Edit products here!)
  products: [
    { name: "Black Jacket", price: "$8,068.72", link: "/headless-product-detail" },
    { name: "Cozy coat", price: "$2,598.00", link: "/headless-product-detail" },
    { name: "Brown loveseat", price: "$2,999.00", link: "/headless-product-detail" },
    { name: "The Slicer", price: "$2,999.00", link: "/headless-product-detail" }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-4"
    },
    gap: "gap-8"
  }
};

export default function Page() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { brand, colors, header, search, products, grid } = pageConfig;

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
          <div className="relative max-w-2xl">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={search.placeholder}
              className={`w-full px-4 py-3 pl-12 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
            />
            <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${colors.text.accent}`} />
          </div>
        </div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={product.link}>
                <div className={`aspect-square bg-gray-100 mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors`}>
                  <div className="w-32 h-32 bg-gray-300 rounded"></div>
                </div>
                <h3 className={`text-lg font-light ${colors.text.primary} mb-2`}>{product.name}</h3>
                <p className={colors.text.secondary}>{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
