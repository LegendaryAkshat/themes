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
    homeLink: "/headless-home",
    loginLink: "/headless-login"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      icon: "hover:bg-gray-100",
      focus: "focus:ring-2 focus:ring-gray-900"
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
    title: "Sign Up"
  },
  
  // Form Fields (Edit form fields here!)
  form: {
    name: {
      label: "Full Name",
      placeholder: "John Doe"
    },
    email: {
      label: "Email",
      placeholder: "your@email.com"
    },
    password: {
      label: "Password",
      placeholder: "••••••••"
    },
    submitButton: {
      text: "Create Account"
    }
  },
  
  // Footer Link
  footer: {
    text: "Already have an account?",
    linkText: "Sign in",
    link: "/headless-login"
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page, form, footer } = pageConfig;

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
                  className={`text-sm ${colors.text.secondary} hover:${colors.text.primary} transition-colors`}
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
                  <Search className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <h1 className={`text-4xl font-light ${colors.text.primary} text-center`}>{page.title}</h1>
          <div className={`border ${colors.borders.default} p-8 space-y-6`}>
            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>{form.name.label}</label>
              <input
                type="text"
                className={`w-full px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                placeholder={form.name.placeholder}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>{form.email.label}</label>
              <input
                type="email"
                className={`w-full px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                placeholder={form.email.placeholder}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>{form.password.label}</label>
              <input
                type="password"
                className={`w-full px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                placeholder={form.password.placeholder}
              />
            </div>
            <button className={`w-full ${colors.buttons.primary} py-4 font-medium transition-colors`}>
              {form.submitButton.text}
            </button>
            <div className={`text-center text-sm ${colors.text.secondary}`}>
              <p>
                {footer.text}{" "}
                <Link href={footer.link} className={`${colors.text.primary} underline`}>
                  {footer.linkText}
                </Link>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
