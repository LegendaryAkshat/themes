"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

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
      secondary: "text-gray-600",
      accent: "text-blue-600"
    },
    badges: {
      category: "bg-blue-100 text-blue-600"
    }
  },
  
  // Page Header
  page: {
    title: "Blog List"
  },
  
  // Blog Posts (Edit posts here!)
  posts: Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    category: "Fashion",
    author: "Admin",
    date: `March ${20 - i}, 2024`,
    excerpt: "Discover the latest trends in fashion and style. This comprehensive guide covers everything you need to know about modern fashion and how to incorporate it into your wardrobe.",
    link: `/ecomus-blog-post-${i + 1}`
  }))
};

export default function Page() {
  const { colors, page, posts } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.text.primary} text-center mb-12`}
        >
          {page.title}
        </motion.h1>

        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${colors.card} rounded-lg shadow-md hover:shadow-xl transition-all p-6`}
            >
              <div className={`flex items-center gap-4 text-sm ${colors.text.secondary} mb-3`}>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className={`${colors.badges.category} text-xs font-semibold px-3 py-1 rounded-full`}>
                  {post.category}
                </span>
              </div>
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-3 hover:${colors.text.accent} transition-colors`}>
                {post.title}
              </h2>
              <p className={`${colors.text.secondary} mb-4 leading-relaxed`}>{post.excerpt}</p>
              <a href={post.link} className={`inline-flex items-center gap-2 ${colors.text.accent} font-semibold hover:text-blue-700`}>
                Read More
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
