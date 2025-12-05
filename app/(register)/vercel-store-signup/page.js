"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Mail, Lock, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Vercel Store",
    homeLink: "/vercel-store-home",
    loginLink: "/vercel-store-login",
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
    cart: {
      enabled: true,
      link: "/vercel-store-cart"
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
      text: "Create Account"
    }
  },
  
  // Footer Link
  footer: {
    text: "Already have an account?",
    linkText: "Sign in",
    link: "/vercel-store-login"
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page, form, footer } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background} ${colors.text.primary}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className="flex items-center gap-2">
              <div className={`w-8 h-8 ${brand.logo.background} rounded flex items-center justify-center`}>
                <div className={`w-4 h-4 ${brand.logo.icon} rounded-sm`}></div>
              </div>
              <span className="font-semibold text-lg">{brand.name}</span>
            </Link>
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
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">{page.title}</h1>
            <p className={colors.text.secondary}>{page.description}</p>
          </div>
          <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-8 space-y-6`}>
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <User className="w-4 h-4" />
                {form.name.label}
              </label>
              <input
                type="text"
                className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                placeholder={form.name.placeholder}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                {form.email.label}
              </label>
              <input
                type="email"
                className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                placeholder={form.email.placeholder}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                {form.password.label}
              </label>
              <input
                type="password"
                className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                placeholder={form.password.placeholder}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <Lock className="w-4 h-4" />
                {form.confirmPassword.label}
              </label>
              <input
                type="password"
                className={`w-full ${colors.input.background} border ${colors.input.border} rounded-md px-4 py-2 focus:outline-none focus:ring-2 ${colors.buttons.focus}`}
                placeholder={form.confirmPassword.placeholder}
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
    </div>
  );
}
