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
    title: "Blog",
    description: "Latest news and fashion insights"
  },
  
  // Blog Posts (Edit posts here!)
  posts: [
    {
      id: 1,
      title: "Effortlessly Blends The Carefree Style",
      category: "Accessories",
      author: "Admin",
      date: "March 15, 2024",
      excerpt: "Discover the latest trends in fashion accessories that blend style with comfort.",
      link: "/ecomus-blog-post-1"
    },
    {
      id: 2,
      title: "The Limited Edition Club des Sports Courchevel",
      category: "Accessories",
      author: "Admin",
      date: "March 12, 2024",
      excerpt: "Explore our exclusive collection of limited edition sports accessories.",
      link: "/ecomus-blog-post-2"
    },
    {
      id: 3,
      title: "Christine Is A True Style Icon",
      category: "Fashion",
      author: "Admin",
      date: "March 10, 2024",
      excerpt: "Learn about the fashion trends that are making waves this season.",
      link: "/ecomus-blog-post-3"
    },
    {
      id: 4,
      title: "Summer Fashion Trends 2024",
      category: "Fashion",
      author: "Admin",
      date: "March 8, 2024",
      excerpt: "Get ready for summer with these must-have fashion pieces.",
      link: "/ecomus-blog-post-4"
    },
    {
      id: 5,
      title: "Sustainable Fashion Guide",
      category: "Fashion",
      author: "Admin",
      date: "March 5, 2024",
      excerpt: "How to build a sustainable wardrobe without compromising on style.",
      link: "/ecomus-blog-post-5"
    },
    {
      id: 6,
      title: "Accessories That Make The Outfit",
      category: "Accessories",
      author: "Admin",
      date: "March 3, 2024",
      excerpt: "The perfect accessories can transform any outfit from ordinary to extraordinary.",
      link: "/ecomus-blog-post-6"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "md:grid-cols-2",
      desktop: "lg:grid-cols-3"
    },
    gap: "gap-8"
  }
};

export default function Page() {
  const { colors, page, posts, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{page.title}</h1>
          <p className={`${colors.text.secondary} text-lg`}>{page.description}</p>
        </motion.div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${colors.card} rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden`}
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                </div>
              </div>

              <div className="p-6">
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

                <h2 className={`text-xl font-bold ${colors.text.primary} mb-3 hover:${colors.text.accent} transition-colors`}>
                  {post.title}
                </h2>

                <p className={`${colors.text.secondary} mb-4 line-clamp-2`}>
                  {post.excerpt}
                </p>

                <motion.a
                  href={post.link}
                  whileHover={{ x: 5 }}
                  className={`inline-flex items-center gap-2 ${colors.text.accent} font-semibold hover:text-blue-700`}
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
