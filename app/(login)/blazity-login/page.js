"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
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
      primary: "bg-gray-900 text-white hover:bg-gray-800"
    }
  },
  
  // Page Content
  page: {
    title: "Welcome Back",
    subtitle: "Sign in to your account",
    buttonText: "Sign In"
  },
  
  // Form Fields
  form: {
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
    rememberMe: {
      enabled: true,
      label: "Remember me"
    },
    forgotPassword: {
      enabled: true,
      text: "Forgot password?",
      link: "#"
    }
  },
  
  // Footer Links
  footer: {
    text: "Don't have an account?",
    linkText: "Sign up",
    link: "/blazity-register"
  }
};

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const { colors, page, form, footer } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} flex items-center justify-center`}>
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${colors.card} rounded-lg border ${colors.borders.default} p-8`}
        >
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{page.title}</h1>
          <p className={`${colors.text.secondary} mb-8`}>{page.subtitle}</p>

          <form className="space-y-6">
            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                {form.email.label}
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full pl-10 pr-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                  placeholder={form.email.placeholder}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                {form.password.label}
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className={`w-full pl-10 pr-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                  placeholder={form.password.placeholder}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              {form.rememberMe.enabled && (
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300" />
                  <span className={`ml-2 text-sm ${colors.text.secondary}`}>{form.rememberMe.label}</span>
                </label>
              )}
              {form.forgotPassword.enabled && (
                <Link href={form.forgotPassword.link} className={`text-sm ${colors.text.primary} hover:underline`}>
                  {form.forgotPassword.text}
                </Link>
              )}
            </div>

            <button
              type="submit"
              className={`w-full ${colors.buttons.primary} py-3 rounded-md font-semibold transition-colors`}
            >
              {page.buttonText}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className={`text-sm ${colors.text.secondary}`}>
              {footer.text}{" "}
              <Link href={footer.link} className={`${colors.text.primary} font-semibold hover:underline`}>
                {footer.linkText}
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
