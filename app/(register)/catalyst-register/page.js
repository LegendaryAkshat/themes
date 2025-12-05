"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, User } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    loginLink: "/catalyst-login"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-400"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      focus: "focus:ring-2 focus:ring-gray-900"
    }
  },
  
  // Page Content
  page: {
    title: "Create Account",
    description: "Sign up to get started"
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
    link: "/catalyst-login"
  }
};

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const { brand, colors, page, form, footer } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} flex items-center justify-center`}>
      <div className="max-w-md w-full mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${colors.card} rounded-lg border ${colors.borders.default} p-8`}
        >
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{page.title}</h1>
          <p className={`${colors.text.secondary} mb-8`}>{page.description}</p>

          <form className="space-y-6">
            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                {form.name.label}
              </label>
              <div className="relative">
                <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${colors.text.light}`} />
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full pl-10 pr-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                  placeholder={form.name.placeholder}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                {form.email.label}
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${colors.text.light}`} />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full pl-10 pr-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                  placeholder={form.email.placeholder}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                {form.password.label}
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${colors.text.light}`} />
                <input
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  className={`w-full pl-10 pr-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                  placeholder={form.password.placeholder}
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                {form.confirmPassword.label}
              </label>
              <div className="relative">
                <Lock className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${colors.text.light}`} />
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  className={`w-full pl-10 pr-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none ${colors.buttons.focus}`}
                  placeholder={form.confirmPassword.placeholder}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full ${colors.buttons.primary} py-3 rounded-md font-semibold transition-colors`}
            >
              {form.submitButton.text}
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
