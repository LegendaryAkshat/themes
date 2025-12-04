"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const posts = [
    {
      title: "10 Easy Houseplants for Beginners",
      excerpt: "Discover the best low-maintenance plants perfect for those just starting their plant journey.",
      date: "January 15, 2025",
      image: "🌿"
    },
    {
      title: "How to Care for Your Succulents",
      excerpt: "Learn the essential tips for keeping your succulents healthy and thriving all year round.",
      date: "January 10, 2025",
      image: "🌵"
    },
    {
      title: "The Best Plants for Low Light Spaces",
      excerpt: "Transform your dimly lit rooms with these beautiful plants that thrive in low light conditions.",
      date: "January 5, 2025",
      image: "🪴"
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Planted
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {post.image}
                </div>
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700">
                  {post.title}
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}

