"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, X, Plus, Minus } from "lucide-react";
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
    checkoutLink: "/vercel-store-checkout",
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
  
  // Page Content
  page: {
    title: "Shopping Cart",
    emptyMessage: "Your cart is empty",
    continueShoppingText: "Continue shopping"
  },
  
  // Cart Items (Edit cart items here!)
  cartItems: [
    { id: 1, name: "Acme Circles T-Shirt", price: 20.00, quantity: 1, image: "t-shirt" },
    { id: 2, name: "Acme Drawstring Bag", price: 12.00, quantity: 2, image: "bag" }
  ],
  
  // Pricing Configuration
  pricing: {
    shipping: 5.00
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
  const { brand, colors, header, page, cartItems, pricing, footer } = pageConfig;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = pricing.shipping;
  const total = subtotal + shipping;

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
        <h1 className={`text-4xl font-bold mb-8`}>{page.title}</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className={`${colors.text.secondary} text-lg mb-4`}>{page.emptyMessage}</p>
            <Link href={brand.homeLink} className="text-blue-400 hover:text-blue-300 underline">
              {page.continueShoppingText}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-4 p-4 ${colors.card} rounded-lg border ${colors.borders.default}`}
                >
                  <div className="w-24 h-24 bg-gray-800 rounded-lg flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-700 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{item.name}</h3>
                    <p className={`${colors.text.secondary} text-sm`}>${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className={`flex items-center gap-2 border ${colors.borders.input} rounded-md`}>
                      <button className={`p-2 ${colors.buttons.icon}`}>
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button className={`p-2 ${colors.buttons.icon}`}>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="font-semibold w-20 text-right">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button className={`p-2 ${colors.buttons.icon} rounded-md`}>
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6 sticky top-4`}>
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className={colors.text.secondary}>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={colors.text.secondary}>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className={`border-t ${colors.borders.default} pt-3`}>
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={brand.checkoutLink}
                  className={`block w-full ${colors.buttons.primary} text-white font-semibold py-3 px-6 rounded-md text-center transition-colors`}
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
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
