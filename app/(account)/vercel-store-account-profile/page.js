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
    card: "bg-gray-900",
    text: {
      primary: "text-white",
      secondary: "text-gray-400",
      link: "text-gray-400 hover:text-white"
    },
    borders: {
      default: "border-gray-800"
    },
    buttons: {
      hover: "hover:bg-gray-800",
      primary: "bg-blue-600 hover:bg-blue-700"
    },
    inputs: {
      background: "bg-gray-800",
      border: "border-gray-700",
      focus: "focus:ring-gray-700"
    }
  },
  
  // Navigation
  navigation: {
    backLink: {
      text: "← Back to Account",
      href: "/vercel-store-account"
    },
    searchPlaceholder: "Search for products..."
  },
  
  // Page Content
  page: {
    title: "Account Details"
  },
  
  // Form Fields (Edit form fields here!)
  form: {
    fields: [
      { label: "Full Name", type: "text", defaultValue: "John Doe" },
      { label: "Email", type: "email", defaultValue: "john@example.com" },
      { label: "Phone", type: "tel", defaultValue: "+1 (555) 123-4567" }
    ],
    submitButton: {
      text: "Save Changes"
    }
  },
  
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
  const { brand, colors, navigation, page, form, footer } = pageConfig;

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

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Link href={navigation.backLink.href} className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
            {navigation.backLink.text}
          </Link>
        </div>
        <h1 className={`text-4xl font-bold mb-8`}>{page.title}</h1>

        <div className={`${colors.card} rounded-lg ${colors.borders.default} p-8 space-y-6`}>
          {form.fields.map((field, index) => (
            <div key={index}>
              <label className={`block text-sm font-medium mb-2`}>{field.label}</label>
              <input
                type={field.type}
                className={`w-full ${colors.inputs.background} ${colors.inputs.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                defaultValue={field.defaultValue}
              />
            </div>
          ))}
          <button className={`w-full ${colors.buttons.primary} text-white font-semibold py-3 px-6 rounded-md transition-colors`}>
            {form.submitButton.text}
          </button>
        </div>
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
