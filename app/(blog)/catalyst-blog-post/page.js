"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Planted",
    homeLink: "/catalyst-home",
    blogLink: "/catalyst-blog"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200"
    }
  },
  
  // Blog Post (Edit post content here!)
  post: {
    title: "10 Easy Houseplants for Beginners",
    date: "January 15, 2025",
    author: "Plant Expert",
    image: "🌿",
    content: `Starting your plant journey can be overwhelming with so many options available. 
Here are 10 easy-to-care-for houseplants perfect for beginners.

These plants are known for their resilience and ability to thrive with minimal attention, 
making them ideal for those new to plant parenting.`
  }
};

export default function Page() {
  const { brand, colors, post } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
          </div>
        </div>
      </header>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href={brand.blogLink} className={`inline-flex items-center gap-2 ${colors.text.secondary} hover:${colors.text.primary} mb-8`}>
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="aspect-video bg-gray-100 rounded-lg mb-8 flex items-center justify-center text-9xl">
          {post.image}
        </div>

        <div className="mb-8">
          <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{post.title}</h1>
          <div className={`flex items-center gap-4 ${colors.text.secondary}`}>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <span>By {post.author}</span>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className={`text-lg ${colors.text.secondary} leading-relaxed whitespace-pre-line`}>
            {post.content}
          </p>
        </div>
      </article>
    </main>
  );
}
