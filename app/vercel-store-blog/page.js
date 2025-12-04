"use client";

import { motion } from "framer-motion";
import { Search, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const posts = [
    { id: 1, title: "New Product Launch", excerpt: "Discover our latest collection of premium products.", date: "March 20, 2024", slug: "new-product-launch" },
    { id: 2, title: "Sustainability in Fashion", excerpt: "Learn about our commitment to sustainable practices.", date: "March 15, 2024", slug: "sustainability-in-fashion" },
    { id: 3, title: "Spring Collection Preview", excerpt: "Get a first look at our upcoming spring collection.", date: "March 10, 2024", slug: "spring-collection-preview" },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button className="md:hidden p-2 rounded-md hover:bg-gray-800">
              <Menu className="w-6 h-6" />
            </button>
            <div className="flex items-center gap-8 flex-1">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm"></div>
                </div>
                <span className="font-semibold text-lg">Acme Store</span>
              </Link>
              <div className="hidden md:flex items-center gap-6">
                <Link href="/" className="text-sm hover:text-gray-300 transition-colors">All</Link>
                <Link href="/search?category=shirts" className="text-sm hover:text-gray-300 transition-colors">Shirts</Link>
                <Link href="/search?category=stickers" className="text-sm hover:text-gray-300 transition-colors">Stickers</Link>
              </div>
            </div>
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <input type="text" placeholder="Search for products..." className="w-full bg-gray-900 border border-gray-800 rounded-md px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              </div>
            </div>
            <button className="p-2 rounded-md hover:bg-gray-800 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-800 pb-8"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-semibold mb-2 hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 text-sm mb-3">{post.date}</p>
                <p className="text-gray-300">{post.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>

      <footer className="border-t border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-sm"></div>
                </div>
                <span className="font-semibold">Acme Store</span>
              </Link>
            </div>
            <nav>
              <ul className="space-y-2">
                <li><Link href="/" className="text-sm text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About</Link></li>
                <li><Link href="/terms" className="text-sm text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/shipping-return" className="text-sm text-gray-400 hover:text-white transition-colors">Shipping & Return Policy</Link></li>
                <li><Link href="/privacy" className="text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/faq" className="text-sm text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </nav>
            <div className="text-sm text-gray-400">
              <p className="mb-2">© 2023-2025 ACME, Inc. All rights reserved.</p>
              <div className="space-y-1">
                <Link href="#" className="block hover:text-white transition-colors">View the source</Link>
                <Link href="#" className="block hover:text-white transition-colors">Created by ▲ Vercel</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

