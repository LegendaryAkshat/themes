"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Search, Menu, User, ShoppingCart } from "lucide-react";

export default function Page() {
  const heroSlides = [
    {
      title: "Fresh finds for every occasion",
      description: "Explore our latest arrivals, curated to bring you style, functionality, and inspiration. Shop now and discover your next favorite.",
      buttonText: "Shop Now"
    },
    {
      title: "Discover what's new",
      description: "Shop our latest arrivals and find something fresh and exciting for your home.",
      buttonText: "Shop Now"
    },
    {
      title: "Something for everyone",
      description: "Don't miss out on exclusive offers across our best-selling products. Shop today and save big on the items you love.",
      buttonText: "Shop Now"
    }
  ];

  const products = [
    { name: "3 Plant Bundle", price: "$342.00", image: "🌿" },
    { name: "The Planter by Rustic Roots", brand: "Rustic Roots", price: "$55.00", image: "🪴" },
    { name: "The Cylinder by Modern Botany", brand: "Modern Botany", price: "$35.00", image: "🌱" },
    { name: "ZZ Plant", price: "$80.00", image: "🌿" },
    { name: "Spray Bottle", brand: "Planted", price: "$15.00", image: "💧" },
    { name: "Snake Plant", price: "$109.99", image: "🌵" },
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
                Planted
              </Link>
              <nav className="hidden lg:flex items-center gap-6">
                <Link href="/" className="text-sm font-medium text-gray-700 hover:text-gray-900">Shop All</Link>
                <Link href="/categories/plants" className="text-sm font-medium text-gray-700 hover:text-gray-900">Plants</Link>
                <Link href="/categories/accessories" className="text-sm font-medium text-gray-700 hover:text-gray-900">Accessories</Link>
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
                <span className="absolute top-1 right-1 w-2 h-2 bg-gray-900 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      <section className="relative h-[600px] md:h-[700px] bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                {heroSlides[0].title}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                {heroSlides[0].description}
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                {heroSlides[0].buttonText}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
        {/* Decorative plant illustration placeholder */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
          <div className="h-full flex items-center justify-center text-9xl">🌿</div>
        </div>
        {/* Carousel indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {heroSlides.map((_, i) => (
            <div key={i} className={`h-2 rounded-full ${i === 0 ? 'w-8 bg-gray-900' : 'w-2 bg-gray-400'}`} />
          ))}
        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured collection</h2>
              <p className="text-gray-600">Explore our top picks in this featured collection. Find the perfect gift or treat yourself!</p>
            </div>
            <Link href="/categories" className="text-sm font-semibold text-gray-900 hover:underline">
              View more
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                    {product.image}
                  </div>
                  {product.brand && (
                    <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
                  )}
                  <h3 className="font-semibold text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-lg font-bold text-gray-900">{product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">New arrivals</h2>
              <p className="text-gray-600">Our latest products are here. Check out what's new in store.</p>
            </div>
            <Link href="/products" className="text-sm font-semibold text-gray-900 hover:underline">
              See all
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                    {product.image}
                  </div>
                  {product.brand && (
                    <p className="text-xs text-gray-500 mb-1">{product.brand}</p>
                  )}
                  <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-base font-bold text-gray-900">{product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Sign up for our newsletter</h2>
          <p className="text-gray-300 mb-8">Stay up to date with the latest news and offers from our store.</p>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Planted</h3>
              <p className="text-sm text-gray-600">123 Plant St, Planttown, USA</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/" className="hover:text-gray-900">Shop All</Link></li>
                <li><Link href="/categories/plants" className="hover:text-gray-900">Plants</Link></li>
                <li><Link href="/categories/accessories" className="hover:text-gray-900">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Brands</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/brands/rustic-roots" className="hover:text-gray-900">Rustic Roots</Link></li>
                <li><Link href="/brands/modern-botany" className="hover:text-gray-900">Modern Botany</Link></li>
                <li><Link href="/brands/planted" className="hover:text-gray-900">Planted</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Navigate</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link href="/blog" className="hover:text-gray-900">Blog</Link></li>
                <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
                <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>© 2025 Planted – Powered by BigCommerce</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

