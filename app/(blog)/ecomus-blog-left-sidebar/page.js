"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Tag } from "lucide-react";

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
    borders: {
      default: "border-gray-200"
    },
    badges: {
      category: "bg-blue-100 text-blue-600"
    }
  },
  
  // Page Header
  page: {
    title: "Blog - Left Sidebar"
  },
  
  // Sidebar Configuration
  sidebar: {
    categories: {
      title: "Categories",
      items: ["Fashion", "Accessories", "Lifestyle", "Trends"]
    },
    recentPosts: {
      title: "Recent Posts",
      count: 3
    }
  },
  
  // Blog Posts (Edit posts here!)
  posts: Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post ${i + 1}`,
    category: "Fashion",
    author: "Admin",
    date: `March ${15 - i}, 2024`,
    excerpt: "Discover the latest trends in fashion and style. This post covers everything you need to know about modern fashion.",
    link: `/ecomus-blog-post-${i + 1}`
  }))
};

export default function Page() {
  const { colors, page, sidebar, posts } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className={`${colors.card} rounded-lg shadow-sm p-6 mb-6`}>
              <h3 className={`font-semibold ${colors.text.primary} mb-4`}>{sidebar.categories.title}</h3>
              <div className="space-y-2">
                {sidebar.categories.items.map((cat) => (
                  <a key={cat} href="#" className={`block ${colors.text.secondary} hover:${colors.text.accent} transition-colors`}>
                    {cat}
                  </a>
                ))}
              </div>
            </div>
            <div className={`${colors.card} rounded-lg shadow-sm p-6`}>
              <h3 className={`font-semibold ${colors.text.primary} mb-4`}>{sidebar.recentPosts.title}</h3>
              <div className="space-y-4">
                {posts.slice(0, sidebar.recentPosts.count).map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                    <div>
                      <h4 className={`font-semibold text-sm ${colors.text.primary} mb-1`}>{post.title}</h4>
                      <p className={`text-xs ${colors.text.secondary}`}>{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>

          <div className="lg:col-span-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-4xl font-bold ${colors.text.primary} mb-8`}
            >
              {page.title}
            </motion.h1>

            <div className="space-y-8">
              {posts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`${colors.card} rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden`}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className={`flex items-center gap-4 text-sm ${colors.text.secondary} mb-3`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </span>
                      </div>
                      <span className={`inline-block ${colors.badges.category} text-xs font-semibold px-3 py-1 rounded-full mb-3`}>
                        {post.category}
                      </span>
                      <h2 className={`text-2xl font-bold ${colors.text.primary} mb-3 hover:${colors.text.accent} transition-colors`}>
                        {post.title}
                      </h2>
                      <p className={`${colors.text.secondary} mb-4 line-clamp-2`}>{post.excerpt}</p>
                      <a href={post.link} className={`inline-flex items-center gap-2 ${colors.text.accent} font-semibold hover:text-blue-700`}>
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
