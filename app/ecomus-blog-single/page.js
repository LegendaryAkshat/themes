"use client";

import { motion } from "framer-motion";
import { Calendar, User, Tag, Share2, Heart } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <main className="min-h-screen w-full bg-white">
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

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              March 15, 2024
            </span>
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" />
              Admin
            </span>
            <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
              Fashion
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            The Ultimate Guide to Modern Fashion Trends
          </h1>

          <div className="prose max-w-none mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Fashion is an ever-evolving industry that reflects the cultural, social, and economic changes of our time. 
              In this comprehensive guide, we'll explore the latest trends that are shaping the fashion world in 2024.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              From sustainable fashion to bold color choices, modern fashion is all about expressing individuality while 
              staying conscious of our impact on the environment. Designers are increasingly focusing on creating pieces 
              that are both stylish and sustainable.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              One of the key trends we're seeing is the return of vintage styles with a modern twist. Classic silhouettes 
              are being reimagined with contemporary fabrics and cuts, creating a perfect blend of nostalgia and innovation.
            </p>
          </div>

          <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
            <div className="flex gap-2">
              <Tag className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-gray-600">Fashion, Trends, Style</span>
            </div>
            <div className="flex gap-2 ml-auto">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsLiked(!isLiked)}
                className={`p-2 rounded-lg ${
                  isLiked ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
                }`}
              >
                <Heart className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 bg-gray-100 text-gray-600 rounded-lg"
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

