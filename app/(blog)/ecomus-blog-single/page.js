"use client";

import { motion } from "framer-motion";
import { Calendar, User, Tag, Share2, Heart } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
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
    },
    buttons: {
      like: {
        active: "bg-red-100 text-red-600",
        inactive: "bg-gray-100 text-gray-600"
      },
      share: "bg-gray-100 text-gray-600"
    },
    badges: {
      category: "bg-blue-100 text-blue-600"
    }
  },
  
  // Blog Post (Edit post content here!)
  post: {
    date: "March 15, 2024",
    author: "Admin",
    category: "Fashion",
    title: "The Ultimate Guide to Modern Fashion Trends",
    content: [
      "Fashion is an ever-evolving industry that reflects the cultural, social, and economic changes of our time. In this comprehensive guide, we'll explore the latest trends that are shaping the fashion world in 2024.",
      "From sustainable fashion to bold color choices, modern fashion is all about expressing individuality while staying conscious of our impact on the environment. Designers are increasingly focusing on creating pieces that are both stylish and sustainable.",
      "One of the key trends we're seeing is the return of vintage styles with a modern twist. Classic silhouettes are being reimagined with contemporary fabrics and cuts, creating a perfect blend of nostalgia and innovation."
    ],
    tags: "Fashion, Trends, Style"
  }
};

export default function Page() {
  const [isLiked, setIsLiked] = useState(false);
  const { colors, post } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl mb-8 overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-96 h-64 bg-gray-300 rounded-xl"></div>
            </div>
          </div>

          <div className={`flex items-center gap-4 text-sm ${colors.text.light} mb-6`}>
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

          <h1 className={`text-4xl font-bold ${colors.text.primary} mb-6`}>
            {post.title}
          </h1>

          <div className="prose max-w-none mb-8">
            {post.content.map((paragraph, index) => (
              <p key={index} className={`${index === 0 ? 'text-lg' : ''} ${colors.text.secondary} leading-relaxed mb-6`}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={`flex items-center gap-4 pt-6 border-t ${colors.borders.default}`}>
            <div className="flex gap-2">
              <Tag className={`w-5 h-5 ${colors.text.light}`} />
              <span className={`text-sm ${colors.text.secondary}`}>{post.tags}</span>
            </div>
            <div className="flex gap-2 ml-auto">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-lg ${isLiked ? colors.buttons.like.active : colors.buttons.like.inactive}`}
              >
                <Heart className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 ${colors.buttons.share} rounded-lg`}
              >
                <Share2 className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.article>
      </div>
    </main>
  );
}
