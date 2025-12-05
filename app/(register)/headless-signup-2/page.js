"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Mail, Lock, User, ArrowRight } from "lucide-react";
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
    loginLink: "/headless-login-2"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 hover:bg-gray-800",
      icon: "hover:bg-gray-100",
      focus: "focus:ring-2 focus:ring-gray-900"
    }
  },
  
  // Header Navigation
  header: {
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Page Content
  page: {
    title: "Create Account",
    description: "Join us and start shopping"
  },
  
  // Form Fields (Edit form fields here!)
  form: {
    name: {
      label: "Full Name",
      placeholder: "John Doe",
      icon: "User"
    },
    email: {
      label: "Email",
      placeholder: "your@email.com",
      icon: "Mail"
    },
    password: {
      label: "Password",
      placeholder: "••••••••",
      icon: "Lock"
    },
    confirmPassword: {
      label: "Confirm Password",
      placeholder: "••••••••",
      icon: "Lock"
    },
    submitButton: {
      text: "Create Account",
      icon: "ArrowRight"
    }
  },
  
  // Footer Link
  footer: {
    text: "Already have an account?",
    linkText: "Sign in",
    link: "/headless-login-2"
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
          <div className="text-center mb-8">
            <h1 className={`text-4xl font-semibold ${colors.text.primary} mb-2`}>{page.title}</h1>
            <p className={colors.text.secondary}>{page.description}</p>
          </div>
          <div className={`${colors.card} border ${colors.borders.default} rounded-lg p-8 space-y-6 shadow-sm`}>
            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2 flex items-center gap-2`}>
                <User className="w-4 h-4" />
                {form.name.label}
              </label>
              <input
                type="text"
                className={`w-full border ${colors.borders.input} rounded-md px-4 py-2 ${colors.buttons.focus}`}
                placeholder={form.name.placeholder}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2 flex items-center gap-2`}>
                <Mail className="w-4 h-4" />
                {form.email.label}
              </label>
              <input
                type="email"
                className={`w-full border ${colors.borders.input} rounded-md px-4 py-2 ${colors.buttons.focus}`}
                placeholder={form.email.placeholder}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2 flex items-center gap-2`}>
                <Lock className="w-4 h-4" />
                {form.password.label}
              </label>
              <input
                type="password"
                className={`w-full border ${colors.borders.input} rounded-md px-4 py-2 ${colors.buttons.focus}`}
                placeholder={form.password.placeholder}
              />
            </div>
            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2 flex items-center gap-2`}>
                <Lock className="w-4 h-4" />
                {form.confirmPassword.label}
              </label>
              <input
                type="password"
                className={`w-full border ${colors.borders.input} rounded-md px-4 py-2 ${colors.buttons.focus}`}
                placeholder={form.confirmPassword.placeholder}
              />
            </div>
            <button className={`w-full ${colors.buttons.primary} text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2`}>
              {form.submitButton.text}
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className={`text-center text-sm ${colors.text.secondary}`}>
              <p>
                {footer.text}{" "}
                <Link href={footer.link} className={`${colors.text.primary} hover:underline font-medium`}>
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
