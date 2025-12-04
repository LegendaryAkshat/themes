"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const brand = {
    name: "Rustic Roots",
    description: "Handcrafted planters and accessories for the modern home. Each piece is carefully designed to complement your plants and enhance your space.",
    products: [
      { name: "The Planter by Rustic Roots", price: "$55.00", image: "🪴" },
      { name: "Terracotta Pot Set", price: "$45.00", image: "🏺" },
      { name: "Hanging Planter", price: "$35.00", image: "🪴" },
    ]
  };

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/brands" className="hover:text-gray-900">Brands</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{brand.name}</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{brand.name}</h1>
          <p className="text-gray-700 max-w-2xl leading-relaxed">{brand.description}</p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {brand.products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                  {product.image}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-base font-bold text-gray-900">{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

