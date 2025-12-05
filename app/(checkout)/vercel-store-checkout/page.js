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
    successLink: "/vercel-store-checkout-success",
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
      input: "border-gray-800"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
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
    title: "Checkout"
  },
  
  // Form Sections (Edit form fields here!)
  form: {
    shipping: {
      title: "Shipping Information",
      fields: {
        email: { label: "Email", placeholder: "your@email.com" },
        fullName: { label: "Full Name", placeholder: "John Doe" },
        address: { label: "Address", placeholder: "123 Main St" },
        city: { label: "City", placeholder: "New York" },
        zip: { label: "ZIP Code", placeholder: "10001" }
      }
    },
    payment: {
      title: "Payment Information",
      fields: {
        cardNumber: { label: "Card Number", placeholder: "1234 5678 9012 3456" },
        expiry: { label: "Expiry Date", placeholder: "MM/YY" },
        cvv: { label: "CVV", placeholder: "123" }
      }
    }
  },
  
  // Order Summary (Edit order summary here!)
  order: {
    subtotal: 52.00,
    shipping: 5.00,
    total: 57.00,
    buttonText: "Complete Order"
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
  const { brand, colors, header, page, form, order, footer } = pageConfig;

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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`text-4xl font-bold mb-8`}>{page.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section>
              <h2 className={`text-xl font-semibold mb-4`}>{form.shipping.title}</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{form.shipping.fields.email.label}</label>
                  <input
                    type="email"
                    className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                    placeholder={form.shipping.fields.email.placeholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{form.shipping.fields.fullName.label}</label>
                  <input
                    type="text"
                    className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                    placeholder={form.shipping.fields.fullName.placeholder}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">{form.shipping.fields.address.label}</label>
                  <input
                    type="text"
                    className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                    placeholder={form.shipping.fields.address.placeholder}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{form.shipping.fields.city.label}</label>
                    <input
                      type="text"
                      className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                      placeholder={form.shipping.fields.city.placeholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{form.shipping.fields.zip.label}</label>
                    <input
                      type="text"
                      className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                      placeholder={form.shipping.fields.zip.placeholder}
                    />
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className={`text-xl font-semibold mb-4`}>{form.payment.title}</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{form.payment.fields.cardNumber.label}</label>
                  <input
                    type="text"
                    className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                    placeholder={form.payment.fields.cardNumber.placeholder}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">{form.payment.fields.expiry.label}</label>
                    <input
                      type="text"
                      className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                      placeholder={form.payment.fields.expiry.placeholder}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">{form.payment.fields.cvv.label}</label>
                    <input
                      type="text"
                      className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                      placeholder={form.payment.fields.cvv.placeholder}
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div>
            <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6 sticky top-4`}>
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className={colors.text.secondary}>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={colors.text.secondary}>Shipping</span>
                  <span>${order.shipping.toFixed(2)}</span>
                </div>
                <div className={`border-t ${colors.borders.default} pt-3`}>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Link
                href={brand.successLink}
                className={`block w-full ${colors.buttons.primary} text-white font-semibold py-3 px-6 rounded-md text-center transition-colors`}
              >
                {order.buttonText}
              </Link>
            </div>
          </div>
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
