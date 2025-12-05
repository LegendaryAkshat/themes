"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Mail, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Vercel Store",
    homeLink: "/vercel-store-home",
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
      secondary: "text-gray-400",
      link: "text-blue-400 hover:text-blue-300"
    },
    borders: {
      default: "border-gray-800",
      input: "border-gray-700"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
      icon: "hover:bg-gray-800"
    },
    success: {
      background: "bg-green-100",
      icon: "text-green-600"
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
    title: "Reset Password",
    description: "Enter your email to receive a password reset link",
    backLink: {
      text: "Back to login",
      href: "/vercel-store-login"
    }
  },
  
  // Form Configuration
  form: {
    email: {
      label: "Email Address",
      placeholder: "your@email.com",
      icon: "Mail"
    },
    submitButton: {
      text: "Send Reset Link"
    },
    footer: {
      text: "Remember your password?",
      linkText: "Sign in",
      link: "/vercel-store-login"
    }
  },
  
  // Success State
  success: {
    title: "Reset Link Sent",
    description: "If an account exists with {email}, we've sent a password reset link to your email.",
    buttonText: "Back to Login",
    buttonLink: "/vercel-store-login"
  }
};

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { brand, colors, header, page, form, success } = pageConfig;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  const iconMap = {
    Mail,
    ArrowLeft,
    Check,
    ShoppingCart
  };

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
                onClick={() => window.location.href = header.cart.link}
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
          <Link href={page.backLink.href} className={`inline-flex items-center gap-2 ${colors.text.secondary} hover:${colors.text.primary} transition-colors mb-4`}>
            <ArrowLeft className="w-4 h-4" />
            {page.backLink.text}
          </Link>
          
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <h1 className={`text-4xl font-bold mb-2`}>{page.title}</h1>
                <p className={colors.text.secondary}>{page.description}</p>
              </div>
              <form
                onSubmit={handleSubmit}
                className={`${colors.card} rounded-lg border ${colors.borders.default} p-8 space-y-6`}
              >
                <div>
                  <label className={`block text-sm font-medium mb-2 flex items-center gap-2`}>
                    <Mail className="w-4 h-4" />
                    {form.email.label}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`w-full ${colors.card} border ${colors.borders.input} rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700`}
                    placeholder={form.email.placeholder}
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full ${colors.buttons.primary} text-white font-semibold py-3 px-6 rounded-md transition-colors`}
                >
                  {form.submitButton.text}
                </button>
                <div className={`text-center text-sm ${colors.text.secondary}`}>
                  <p>
                    {form.footer.text}{" "}
                    <Link href={form.footer.link} className={`${colors.text.link} underline`}>
                      {form.footer.linkText}
                    </Link>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className={`w-20 h-20 ${colors.success.background} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <Check className={`w-10 h-10 ${colors.success.icon}`} />
              </div>
              <h2 className={`text-2xl font-bold mb-2`}>{success.title}</h2>
              <p className={`${colors.text.secondary} mb-6`}>
                {success.description.replace('{email}', email)}
              </p>
              <Link
                href={success.buttonLink}
                className={`inline-block px-6 py-3 ${colors.buttons.primary} text-white font-semibold rounded-md transition-colors`}
              >
                {success.buttonText}
              </Link>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}
