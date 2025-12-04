"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { User, Package, MapPin, CreditCard, LogOut } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Acme
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <nav className="space-y-2">
              <Link href="/account" className="flex items-center gap-3 px-4 py-3 bg-gray-900 text-white rounded-md">
                <User className="w-5 h-5" />
                Account Details
              </Link>
              <Link href="/account/orders" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
                <Package className="w-5 h-5" />
                Orders
              </Link>
              <Link href="/account/profile" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
                <CreditCard className="w-5 h-5" />
                Profile
              </Link>
              <Link href="/account/addresses" className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md">
                <MapPin className="w-5 h-5" />
                Addresses
              </Link>
              <button className="flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-md w-full text-left">
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Details</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">First Name</label>
                    <input
                      type="text"
                      defaultValue="John"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">Last Name</label>
                    <input
                      type="text"
                      defaultValue="Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

