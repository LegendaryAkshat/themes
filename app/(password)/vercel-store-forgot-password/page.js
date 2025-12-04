"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu, Mail, ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim()) {
      // In a real application, you would make an API call here to send the reset link
      // For now, we'll just show the success state
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-sm"></div>
              </div>
              <span className="font-semibold text-lg">Vercel Store</span>
            </Link>
            <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Link href="/login" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-4">
            <ArrowLeft className="w-4 h-4" />
            Back to login
          </Link>
          
          {!submitted ? (
            <>
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold mb-2">Reset Password</h1>
                <p className="text-gray-400">Enter your email to receive a password reset link</p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="bg-gray-900 rounded-lg border border-gray-800 p-8 space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-700"
                    placeholder="your@email.com"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition-colors"
                >
                  Send Reset Link
                </button>
                <div className="text-center text-sm text-gray-400">
                  <p>
                    Remember your password?{" "}
                    <Link href="/login" className="text-blue-400 hover:text-blue-300 underline">
                      Sign in
                    </Link>
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Reset Link Sent</h2>
              <p className="text-gray-400 mb-6">
                If an account exists with {email}, we've sent a password reset link to your email.
              </p>
              <Link
                href="/login"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors"
              >
                Back to Sign In
              </Link>
            </div>
          )}
        </motion.div>
      </main>
    </div>
  );
}

