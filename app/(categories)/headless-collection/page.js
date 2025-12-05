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
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200",
      hover: "border-gray-900"
    },
    buttons: {
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
  
  // Page Content
  page: {
    title: "Collection"
  },
  
  // Products (Edit products here!)
  products: [
    { name: "Product 1", price: "$299.00", link: "/headless-product-detail" },
    { name: "Product 2", price: "$399.00", link: "/headless-product-detail" },
    { name: "Product 3", price: "$199.00", link: "/headless-product-detail" },
    { name: "Product 4", price: "$499.00", link: "/headless-product-detail" },
    { name: "Product 5", price: "$349.00", link: "/headless-product-detail" },
    { name: "Product 6", price: "$249.00", link: "/headless-product-detail" }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3"
    },
    gap: "gap-8"
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page, products, grid } = pageConfig;

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
        <h1 className={`text-4xl font-light ${colors.text.primary} mb-12`}>{page.title}</h1>
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
