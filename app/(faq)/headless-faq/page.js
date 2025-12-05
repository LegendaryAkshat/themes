"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
      secondary: "text-gray-600",
      light: "text-gray-700"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      icon: "hover:bg-gray-100"
    }
  },
  
  // Header Navigation
  header: {
    navigation: [
      { label: "About us", href: "/headless-about" },
      { label: "Spring", href: "/headless-spring" },
      { label: "FAQ", href: "/headless-faq" }
    ],
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Page Content
  page: {
    title: "FAQ"
  },
  
  // FAQs (Edit FAQs here!)
  faqs: [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      question: "Sed do eiusmod tempor incididunt ut labore?",
      answer: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      question: "Duis aute irure dolor in reprehenderit?",
      answer: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  ]
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page, faqs } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {header.navigation.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className={`text-sm ${colors.text.light} hover:${colors.text.primary} transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href={brand.homeLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              {header.actions.search.enabled && (
                <button 
                  onClick={() => router.push(header.actions.search.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <Search className={`w-5 h-5 ${colors.text.light}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.light}`} />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className={`text-5xl font-light ${colors.text.primary} mb-12`}>{page.title}</h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border-b ${colors.borders.default} pb-6`}
              >
                <h2 className={`text-xl font-medium ${colors.text.primary} mb-3`}>{faq.question}</h2>
                <p className={`${colors.text.light} leading-relaxed`}>{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
