"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";

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
      inner: "bg-black"
    }
  },
  
  // Colors & Theme
  colors: {
    background: "bg-black",
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      link: "text-gray-400 hover:text-white"
    },
    borders: {
      default: "border-gray-800"
    },
    buttons: {
      hover: "hover:bg-gray-800"
    },
    inputs: {
      background: "bg-gray-900",
      border: "border-gray-800",
      focus: "focus:ring-gray-700"
    }
  },
  
  // Navigation
  navigation: {
    categories: [
      { label: "All", href: "/" },
      { label: "Shirts", href: "/search?category=shirts" },
      { label: "Stickers", href: "/search?category=stickers" }
    ],
    searchPlaceholder: "Search for products..."
  },
  
  // Page Content
  page: {
    title: "Privacy Policy"
  },
  
  // Sections (Edit sections here!)
  sections: [
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, including when you create an account, make a purchase, or contact us for support."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to process your orders, communicate with you, and improve our services."
    },
    {
      title: "Information Sharing",
      content: "We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us in operating our website and conducting our business."
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    },
    {
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information at any time by contacting us."
    }
  ],
  
  // Footer
  footer: {
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Shipping & Return Policy", href: "/shipping-return" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "FAQ", href: "/faq" }
    ],
    copyright: "© 2023-2025 ACME, Inc. All rights reserved.",
    credits: [
      { label: "View the source", href: "#" },
      { label: "Created by ▲ Vercel", href: "#" }
    ]
  }
};

export default function Page() {
  const { brand, colors, navigation, page, sections, footer } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background} ${colors.text.primary}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className={`md:hidden p-2 rounded-md ${colors.buttons.hover}`}>
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-8 flex-1">
              <Link href={brand.homeLink} className="flex items-center gap-2">
                <div className={`w-8 h-8 ${brand.logo.background} rounded flex items-center justify-center`}>
                  <div className={`w-4 h-4 ${brand.logo.inner} rounded-sm`}></div>
                </div>
                <span className="font-semibold text-lg">{brand.name}</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                {navigation.categories.map((category, index) => (
                  <Link key={index} href={category.href} className={`text-sm ${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                    {category.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input type="text" placeholder={navigation.searchPlaceholder} className={`w-full ${colors.inputs.background} ${colors.inputs.border} rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 ${colors.inputs.focus}`} />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className={`p-2 rounded-md ${colors.buttons.hover} transition-colors`}>
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <h1 className={`text-4xl font-bold`}>{page.title}</h1>
          <div className={`space-y-6 ${colors.text.secondary}`}>
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className={`text-xl font-semibold ${colors.text.primary} mb-3`}>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </motion.div>
      </main>

      <footer className={`border-t ${colors.borders.default} mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href={brand.homeLink} className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 ${brand.logo.background} rounded flex items-center justify-center`}>
                  <div className={`w-4 h-4 ${brand.logo.inner} rounded-sm`}></div>
                </div>
                <span className="font-semibold">{brand.name}</span>
              </Link>
            </div>
            <nav>
              <ul className="space-y-2">
                {footer.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={`text-sm ${colors.text.link} transition-colors`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={`text-sm ${colors.text.secondary}`}>
              <p className="mb-2">{footer.copyright}</p>
              <div className="space-y-1">
                {footer.credits.map((credit, index) => (
                  <Link key={index} href={credit.href} className={`block ${colors.text.link} transition-colors`}>
                    {credit.label}
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
