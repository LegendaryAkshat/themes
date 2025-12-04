"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export default function Page() {
  const post = {
    title: "10 Easy Houseplants for Beginners",
    date: "January 15, 2025",
    author: "Plant Expert",
    image: "🌿",
    content: `
      Starting your plant journey can be overwhelming with so many options available. 
      Here are 10 easy-to-care-for houseplants perfect for beginners.
      
      These plants are known for their resilience and ability to thrive with minimal attention, 
      making them ideal for those new to plant parenting.
    `
  };

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

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href="/blog" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center text-9xl">
          {post.image}
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </p>
        </div>
      </article>
    </main>
  );
}

