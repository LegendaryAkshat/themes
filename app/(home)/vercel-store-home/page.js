"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu } from "lucide-react";
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
      secondary: "text-gray-400"
    },
    borders: {
      default: "border-gray-800"
    },
    buttons: {
      icon: "hover:bg-gray-800",
      badge: "bg-blue-600"
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
  
  // Products (Edit products here!)
  products: [
    { id: 1, name: "Acme Circles T-Shirt", price: "$20.00", image: "t-shirt", link: "/vercel-store-product-detail" },
    { id: 2, name: "Acme Drawstring Bag", price: "$12.00", image: "bag", link: "/vercel-store-product-detail" },
    { id: 3, name: "Acme Cup", price: "$15.00", image: "cup", link: "/vercel-store-product-detail" },
    { id: 4, name: "Acme Mug", price: "$15.00", image: "mug", link: "/vercel-store-product-detail" },
    { id: 5, name: "Acme Hoodie", price: "$50.00", image: "hoodie", link: "/vercel-store-product-detail" },
    { id: 6, name: "Acme Baby Onesie", price: "$10.00", image: "onesie", link: "/vercel-store-product-detail" },
    { id: 7, name: "Acme Baby Cap", price: "$10.00", image: "cap", link: "/vercel-store-product-detail" },
    { id: 8, name: "Acme Mug", price: "$15.00", image: "mug", link: "/vercel-store-product-detail" },
    { id: 9, name: "Acme Hoodie", price: "$50.00", image: "hoodie", link: "/vercel-store-product-detail" },
    { id: 10, name: "Acme Baby Onesie", price: "$10.00", image: "onesie", link: "/vercel-store-product-detail" },
    { id: 11, name: "Acme Baby Cap", price: "$10.00", image: "cap", link: "/vercel-store-product-detail" },
    { id: 12, name: "Acme Mug", price: "$15.00", image: "mug", link: "/vercel-store-product-detail" }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "lg:grid-cols-3",
      xl: "xl:grid-cols-4"
    },
    gap: "gap-6"
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
  const { brand, colors, header, products, grid, footer } = pageConfig;

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
        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.xl} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={product.link}>
                <div className={`aspect-square bg-gray-900 rounded-lg mb-4 flex items-center justify-center overflow-hidden`}>
                  <div className="w-32 h-32 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-24 h-24 bg-gray-700 rounded"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{product.name}</h3>
                  <span className={`text-sm font-semibold ${colors.buttons.badge} px-3 py-1 rounded-md`}>
                    {product.price}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
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
