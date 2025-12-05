"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Planted",
    homeLink: "/catalyst-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-500"
    },
    borders: {
      default: "border-gray-200"
    }
  },
  
  // Page Content
  page: {
    title: "Blog"
  },
  
  // Blog Posts (Edit posts here!)
  posts: [
    {
      title: "10 Easy Houseplants for Beginners",
      excerpt: "Discover the best low-maintenance plants perfect for those just starting their plant journey.",
      date: "January 15, 2025",
      image: "🌿",
      link: "/catalyst-blog-post"
    },
    {
      title: "How to Care for Your Succulents",
      excerpt: "Learn the essential tips for keeping your succulents healthy and thriving all year round.",
      date: "January 10, 2025",
      image: "🌵",
      link: "/catalyst-blog-post"
    },
    {
      title: "The Best Plants for Low Light Spaces",
      excerpt: "Transform your dimly lit rooms with these beautiful plants that thrive in low light conditions.",
      date: "January 5, 2025",
      image: "🪴",
      link: "/catalyst-blog-post"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "md:grid-cols-2",
      desktop: "lg:grid-cols-3"
    },
    gap: "gap-8"
  }
};

export default function Page() {
  const { brand, colors, page, posts, grid } = pageConfig;

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`text-4xl font-bold ${colors.text.primary} mb-8`}>{page.title}</h1>
        <div className={`grid ${grid.columns.mobile} ${grid.columns.desktop} ${grid.gap}`}>
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={post.link}>
                <div className={`aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform`}>
                  {post.image}
                </div>
                <p className={`text-sm ${colors.text.light} mb-2`}>{post.date}</p>
                <h2 className={`text-xl font-bold ${colors.text.primary} mb-2 group-hover:text-gray-700`}>
                  {post.title}
                </h2>
                <p className={colors.text.secondary}>{post.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
