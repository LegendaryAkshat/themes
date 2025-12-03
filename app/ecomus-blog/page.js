"use client";

import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

export default function Page() {
  const posts = [
    {
      id: 1,
      title: "Effortlessly Blends The Carefree Style",
      category: "Accessories",
      author: "Admin",
      date: "March 15, 2024",
      excerpt: "Discover the latest trends in fashion accessories that blend style with comfort."
    },
    {
      id: 2,
      title: "The Limited Edition Club des Sports Courchevel",
      category: "Accessories",
      author: "Admin",
      date: "March 12, 2024",
      excerpt: "Explore our exclusive collection of limited edition sports accessories."
    },
    {
      id: 3,
      title: "Christine Is A True Style Icon",
      category: "Fashion",
      author: "Admin",
      date: "March 10, 2024",
      excerpt: "Learn about the fashion trends that are making waves this season."
    },
    {
      id: 4,
      title: "Summer Fashion Trends 2024",
      category: "Fashion",
      author: "Admin",
      date: "March 8, 2024",
      excerpt: "Get ready for summer with these must-have fashion pieces."
    },
    {
      id: 5,
      title: "Sustainable Fashion Guide",
      category: "Fashion",
      author: "Admin",
      date: "March 5, 2024",
      excerpt: "How to build a sustainable wardrobe without compromising on style."
    },
    {
      id: 6,
      title: "Accessories That Make The Outfit",
      category: "Accessories",
      author: "Admin",
      date: "March 3, 2024",
      excerpt: "The perfect accessories can transform any outfit from ordinary to extraordinary."
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-gray-600 text-lg">Latest news and fashion insights</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-300 rounded-lg"></div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </span>
                </div>

                <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>

                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <motion.a
                  href="#"
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
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

