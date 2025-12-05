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
      light: "text-gray-400"
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
    title: "Frequently Asked Questions"
  },
  
  // FAQs (Edit FAQs here!)
  faqs: [
    {
      question: "How do I place an order?",
      answer: "Simply browse our products, add items to your cart, and proceed to checkout. You'll need to provide shipping and payment information to complete your order."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and other secure payment methods through our checkout system."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 5-7 business days. Express shipping options are available for faster delivery."
    },
    {
      question: "Can I return or exchange items?",
      answer: "Yes, we accept returns within 30 days of purchase. Items must be in original condition with tags attached. Please contact our customer service to initiate a return."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we offer international shipping to most countries. Shipping times and costs vary by location."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this to track your package's delivery status."
    }
  ]
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page, faqs } = pageConfig;

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
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
          <h1 className="text-4xl font-bold">{page.title}</h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-b ${colors.borders.default} pb-6`}
              >
                <h2 className={`text-xl font-semibold ${colors.text.primary} mb-3`}>{faq.question}</h2>
                <p className={colors.text.secondary}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
