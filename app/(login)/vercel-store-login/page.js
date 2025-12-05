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
    signupLink: "/vercel-store-signup",
    logo: {
      background: "bg-white",
      icon: "bg-black"
    }
  },
  
  // Colors & Theme
  colors: {
    background: "bg-black",
    card: "bg-gray-900",
    text: {
      primary: "text-white",
      secondary: "text-gray-400"
    },
    borders: {
      default: "border-gray-800",
      input: "border-gray-700"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
      icon: "hover:bg-gray-800",
      focus: "focus:ring-gray-700"
    },
    input: {
      background: "bg-gray-800",
      border: "border-gray-700",
      focus: "focus:ring-gray-700"
    }
  },
  
  // Header Configuration
  header: {
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
    title: "Sign In"
  },
  
  // Form Fields (Edit form fields here!)
  form: {
    email: {
      label: "Email",
      placeholder: "your@email.com"
    },
    password: {
      label: "Password",
      placeholder: "••••••••"
    },
    submitButton: {
      text: "Sign In"
    }
  },
  
  // Footer Link
  footer: {
    text: "Don't have an account?",
    linkText: "Sign up",
    link: "/vercel-store-signup"
  },
  
  // Footer Links
  footerLinks: {
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
  const { brand, colors, header, page, form, footer, footerLinks } = pageConfig;

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

      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold text-center">{page.title}</h1>
          <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-8 space-y-6`}>
            <div>
              <label className="block text-sm font-medium mb-2">{form.email.label}</label>
              <input
                type="email"
                className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                placeholder={form.email.placeholder}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">{form.password.label}</label>
              <input
                type="password"
                className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                placeholder={form.password.placeholder}
              />
            </div>
            <button className={`w-full ${colors.buttons.primary} text-white font-semibold py-3 px-6 rounded-md transition-colors`}>
              {form.submitButton.text}
            </button>
            <div className={`text-center text-sm ${colors.text.secondary}`}>
              <p>
                {footer.text}{" "}
                <Link href={footer.link} className="text-blue-400 hover:text-blue-300 underline">
                  {footer.linkText}
                </Link>
              </p>
            </div>
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
                {footerLinks.links.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href} className={`text-sm ${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={`text-sm ${colors.text.secondary}`}>
              <p className="mb-2">{footerLinks.copyright}</p>
              <div className="space-y-1">
                {footerLinks.additionalLinks.map((link, index) => (
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
