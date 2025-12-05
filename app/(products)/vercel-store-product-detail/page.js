"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Acme Store",
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
      secondary: "text-gray-400",
      accent: "text-blue-400"
    },
    borders: {
      default: "border-gray-800",
      input: "border-gray-700"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
      icon: "hover:bg-gray-800"
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
      { label: "All", href: "/vercel-store-home" },
      { label: "Shirts", href: "/vercel-store-search?category=shirts" },
      { label: "Stickers", href: "/vercel-store-search?category=stickers" }
    ],
    search: {
      enabled: true,
      placeholder: "Search for products..."
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
  
  // Product Information (Edit product details here!)
  product: {
    name: "Acme Circles T-Shirt",
    price: "$20.00 USD",
    description: "Premium quality t-shirt featuring our signature circles design. Made from 100% organic cotton for comfort and sustainability.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White", "Gray"]
  },
  
  // Footer Links
  footer: {
    links: [
      { label: "Home", href: "/vercel-store-home" },
      { label: "About", href: "/vercel-store-about" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Shipping & Return Policy", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "FAQ", href: "/vercel-store-faq" }
    ],
    copyright: "© 2023-2025 ACME, Inc. All rights reserved.",
    additionalLinks: [
      { label: "View the source", href: "#" },
      { label: "Created by ▲ Vercel", href: "#" }
    ]
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, product, footer } = pageConfig;

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-gray-900 rounded-lg flex items-center justify-center"
          >
            <div className="w-64 h-64 bg-gray-800 rounded-full flex items-center justify-center">
              <div className="w-48 h-48 bg-gray-700 rounded"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div>
              <h1 className={`text-4xl font-bold mb-2`}>{product.name}</h1>
              <p className={`text-2xl font-semibold ${colors.text.accent}`}>{product.price}</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <div className="flex gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      className={`px-4 py-2 border ${colors.borders.input} rounded-md hover:border-gray-600 transition-colors`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Color</label>
                <div className="flex gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      className={`px-4 py-2 border ${colors.borders.input} rounded-md hover:border-gray-600 transition-colors`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <button className={`p-2 border ${colors.borders.input} rounded-md hover:border-gray-600`}>
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-lg font-semibold">1</span>
                  <button className={`p-2 border ${colors.borders.input} rounded-md hover:border-gray-600`}>
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button className={`w-full ${colors.buttons.primary} text-white font-semibold py-3 px-6 rounded-md transition-colors`}>
                Add to Cart
              </button>
            </div>

            <div className={`pt-6 border-t ${colors.borders.default}`}>
              <h2 className="text-lg font-semibold mb-3">Description</h2>
              <p className="text-gray-300">
                {product.description}
              </p>
            </div>
          </motion.div>
        </div>
      </main>

      <footer className={`border-t ${colors.borders.default} mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href={brand.homeLink} className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 ${brand.logo.background} rounded flex items-center justify-center`}>
                  <div className={`w-4 h-4 ${brand.logo.icon} rounded-sm`}></div>
                </div>
                <span className="font-semibold">{brand.name}</span>
              </Link>
            </div>
            <nav>
              <ul className="space-y-2">
                {footer.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={`text-sm ${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={`text-sm ${colors.text.secondary}`}>
              <p className="mb-2">{footer.copyright}</p>
              <div className="space-y-1">
                {footer.additionalLinks.map((link, index) => (
                  <Link key={index} href={link.href} className="block hover:text-white transition-colors">
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
