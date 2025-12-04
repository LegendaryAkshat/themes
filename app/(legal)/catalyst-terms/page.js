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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using this website, you accept and agree to be bound by the terms and 
                provision of this agreement.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Product Information</h2>
              <p>
                We strive to provide accurate product descriptions and images. However, we do not warrant 
                that product descriptions or other content is accurate, complete, or error-free.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Returns and Refunds</h2>
              <p>
                We offer a 30-day return policy for unused items in their original packaging. Plants must 
                be returned in healthy condition.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

