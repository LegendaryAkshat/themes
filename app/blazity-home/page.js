"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Menu, Search, User, ArrowRight } from "lucide-react";

export default function Page() {
  const heroSections = [
    {
      title: "Adventure Awaits",
      description: "Gear up for your next outdoor expedition with premium equipment",
      cta: "Shop Outdoor Gear",
      image: "🚣",
      category: "Sports & Outdoors"
    },
    {
      title: "Signature Scents",
      description: "Discover fragrances that capture your essence",
      cta: "Explore Perfumes",
      image: "🌸",
      category: "Beauty"
    },
    {
      title: "Bold & Beautiful",
      description: "Express yourself with our premium makeup collection",
      cta: "Shop Lip Makeup",
      image: "💄",
      category: "Beauty"
    },
    {
      title: "Sound On The Go",
      description: "Premium audio that moves with your lifestyle",
      cta: "Shop Speakers",
      image: "🔊",
      category: "Electronics"
    }
  ];

  const categories = [
    { name: "Fashion", image: "👔", path: "/category/fashion" },
    { name: "Electronics", image: "📱", path: "/category/electronics" },
    { name: "Sports & Outdoors", image: "⚽", path: "/category/sports-outdoors" },
    { name: "Furniture", image: "🪑", path: "/category/furniture" }
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <button className="lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Acme
              </Link>
              <nav className="hidden lg:flex items-center gap-6">
                <Link href="/category/fashion" className="text-sm font-medium text-gray-700 hover:text-gray-900">Fashion</Link>
                <Link href="/category/electronics" className="text-sm font-medium text-gray-700 hover:text-gray-900">Electronics</Link>
                <Link href="/category/sports-outdoors" className="text-sm font-medium text-gray-700 hover:text-gray-900">Sports & Outdoors</Link>
                <Link href="/category/beauty" className="text-sm font-medium text-gray-700 hover:text-gray-900">Beauty</Link>
                <Link href="/category/furniture" className="text-sm font-medium text-gray-700 hover:text-gray-900">Furniture</Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-md">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-md">
                <User className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-md relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sale Banner */}
      <div className="bg-red-600 text-white text-center py-2">
        <p className="text-sm font-semibold">Sale 50% OFF <Link href="/category/fashion" className="underline ml-2">Shop Now</Link></p>
      </div>

      {/* Hero Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {heroSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-8xl">
                  {section.image}
                </div>
                <div className="p-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-3">{section.title}</h2>
                  <p className="text-gray-600 mb-6">{section.description}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={section.path}
                      className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:underline"
                    >
                      {section.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/category"
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      Browse All Categories
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">New Arrivals</h2>
            <Link href="/category" className="text-sm font-semibold text-gray-900 hover:underline">
              View all new arrivals
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.05 }}
                className="group"
              >
                <Link href="/product/item">
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                    🛍️
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1">Product Name</h3>
                  <p className="text-base font-bold text-gray-900">From $99.00</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Categories</h2>
          <p className="text-center text-gray-600 mb-12">Explore our curated collections</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <Link href={category.path}>
                  <div className="aspect-square bg-white rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform shadow-sm">
                    {category.image}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <Link
                    href={category.path}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-gray-900"
                  >
                    Shop Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Newsletter</h2>
          <p className="text-gray-300 mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-md text-gray-900"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/category" className="hover:text-gray-900">All Products</Link></li>
                <li><Link href="/category/electronics" className="hover:text-gray-900">Electronics</Link></li>
                <li><Link href="/category/fashion" className="hover:text-gray-900">Fashion</Link></li>
                <li><Link href="/category/sports-outdoors" className="hover:text-gray-900">Sports & Outdoors</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/contact" className="hover:text-gray-900">Contact Us</Link></li>
                <li><Link href="/discord" className="hover:text-gray-900">Discord</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-600">© 2025 Blazity Enterprise Commerce.</p>
              <p className="text-xs text-gray-500 mt-2">Hosted on Vercel | Designed with Logo v0</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

