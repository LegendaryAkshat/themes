"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose max-w-none"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Welcome to Planted, your destination for beautiful houseplants and accessories. 
              We're passionate about bringing nature into your home and helping you create 
              green spaces that inspire and rejuvenate.
            </p>
            <p>
              Our carefully curated collection features a wide variety of plants, from low-maintenance 
              succulents to statement-making tropical plants. Each plant is selected for its beauty, 
              health, and ability to thrive in home environments.
            </p>
            <p>
              We believe that everyone deserves to experience the joy of plant parenthood, which is 
              why we offer expert care guides, helpful resources, and exceptional customer service 
              to support you on your plant journey.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

