"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, Lock, User } from "lucide-react";

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
    title: "Create Account",
    subtitle: "Sign up to get started",
    buttonText: "Sign Up"
  },
  
  // Form Fields (Edit form fields here!)
  form: {
    fields: [
      {
        name: "name",
        label: "Full Name",
        type: "text",
        placeholder: "John Doe",
        icon: "User",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "your@email.com",
        icon: "Mail",
        required: true
      },
      {
        name: "password",
        label: "Password",
        type: "password",
        placeholder: "••••••••",
        icon: "Lock",
        required: true
      },
      {
        name: "confirmPassword",
        label: "Confirm Password",
        type: "password",
        placeholder: "••••••••",
        icon: "Lock",
        required: true
      }
    ]
  },
  
  // Footer Links
  footer: {
    text: "Already have an account?",
    linkText: "Sign in",
    link: "/blazity-login"
  }
};

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
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
            {form.fields.map((field, index) => {
              const Icon = field.icon === "User" ? User : field.icon === "Mail" ? Mail : Lock;
              return (
                <div key={index}>
                  <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                    {field.label}
                  </label>
                  <div className="relative">
                    <Icon className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400`} />
                    <input
                      type={field.type}
                      value={formData[field.name]}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      className={`w-full pl-10 pr-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                      placeholder={field.placeholder}
                    />
                  </div>
                </div>
              );
            })}

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
