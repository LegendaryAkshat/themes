"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

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
      secondary: "text-gray-700",
      link: "text-gray-700 hover:text-gray-900"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      hover: "hover:bg-gray-100"
    }
  },
  
  // Navigation
  navigation: {
    links: [
      { label: "About us", href: "/about" },
      { label: "Spring", href: "/spring" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  
  // Page Content
  page: {
    title: "Terms of Use",
    lastUpdated: "January 1, 2024"
  },
  
  // Sections (Edit sections here!)
  sections: [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials on Headless's website for personal, non-commercial transitory viewing only."
    },
    {
      title: "3. Disclaimer",
      content: "The materials on Headless's website are provided on an 'as is' basis. Headless makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties."
    }
  ]
};

export default function Page() {
  const { brand, colors, navigation, page, sections } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {navigation.links.map((link, index) => (
                <Link key={index} href={link.href} className={`text-sm ${colors.text.link} transition-colors`}>
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href={brand.homeLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              <button className={`p-2 ${colors.buttons.hover} rounded-md transition-colors`}>
                <Search className={`w-5 h-5 ${colors.text.secondary}`} />
              </button>
              <button className={`p-2 ${colors.buttons.hover} rounded-md transition-colors`}>
                <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className={`text-4xl font-light ${colors.text.primary} mb-8`}>{page.title}</h1>
          <div className={`prose prose-lg max-w-none ${colors.text.secondary} space-y-6`}>
            <p>Last updated: {page.lastUpdated}</p>
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className={`text-xl font-light ${colors.text.primary} mb-3`}>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
