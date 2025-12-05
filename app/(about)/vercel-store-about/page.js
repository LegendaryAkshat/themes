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
      secondary: "text-gray-300",
      light: "text-gray-400",
      accent: "text-blue-400"
    },
    borders: {
      default: "border-gray-800"
    },
    buttons: {
      icon: "hover:bg-gray-800",
      focus: "focus:ring-gray-700"
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
  
  // Page Content
  page: {
    title: "About"
  },
  
  // Content Sections (Edit content here!)
  content: {
    intro: {
      text: "This website is built with",
      link: {
        text: "Next.js Commerce",
        href: "#"
      },
      description: ", which is a ecommerce template for creating a headless Shopify storefront."
    },
    features: {
      title: "Support for real-world commerce features including:",
      items: [
        "Out of stock",
        "Order history",
        "Order status",
        "Cross variant / option availability (aka. Amazon style)",
        {
          text: "Hidden product",
          link: { text: "(example)", href: "#" }
        },
        "Dynamically driven content and features via Shopify (ie. collections, menus, pages, etc.)",
        {
          text: "Seamless and secure checkout via",
          link: { text: "Shopify Checkout", href: "#" }
        },
        "And more!"
      ]
    },
    nextjs: {
      title: "This template also allows us to highlight newer Next.js features including:",
      items: [
        "Next.js App Router",
        "Optimized for SEO using Next.js' Metadata",
        "React Server Components (RSC) and Suspense",
        "Server Actions for mutations",
        "Edge runtime",
        "New Next.js 13 fetching and caching paradigm",
        "Dynamic OG image",
        "Styling with Tailwind CSS",
        "Automatic light/dark mode based on system setting",
        "And more!"
      ]
    },
    lastUpdated: "This document was last updated on July 18, 2023."
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
  const { brand, colors, header, page, content, footer } = pageConfig;

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl font-bold">{page.title}</h1>
          
          <div className={`space-y-6 ${colors.text.secondary}`}>
            <p>
              {content.intro.text}{" "}
              <Link href={content.intro.link.href} className={`${colors.text.accent} hover:text-blue-300 underline`}>
                {content.intro.link.text}
              </Link>
              {content.intro.description}
            </p>

            <div>
              <h2 className={`text-xl font-semibold ${colors.text.primary} mb-4`}>
                {content.features.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {content.features.items.map((item, index) => (
                  <li key={index}>
                    {typeof item === "string" ? (
                      item
                    ) : (
                      <>
                        {item.text}{" "}
                        <Link href={item.link.href} className={`${colors.text.accent} hover:text-blue-300 underline`}>
                          {item.link.text}
                        </Link>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className={`text-xl font-semibold ${colors.text.primary} mb-4`}>
                {content.nextjs.title}
              </h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                {content.nextjs.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <p className={`text-sm ${colors.text.light} pt-4`}>
              {content.lastUpdated}
            </p>
          </div>
        </motion.div>
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
                    <Link href={link.href} className={`text-sm ${colors.text.light} hover:${colors.text.primary} transition-colors`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={`text-sm ${colors.text.light}`}>
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
