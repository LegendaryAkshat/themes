"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const products = [
    { name: "Product 1", price: "$299.00" },
    { name: "Product 2", price: "$399.00" },
    { name: "Product 3", price: "$199.00" },
    { name: "Product 4", price: "$499.00" },
    { name: "Product 5", price: "$349.00" },
    { name: "Product 6", price: "$249.00" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <Link href="/about" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">About us</Link>
              <Link href="/spring" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">Spring</Link>
              <Link href="/faq" className="text-sm text-gray-700 hover:text-gray-900 transition-colors">FAQ</Link>
            </div>
            <Link href="/" className="text-2xl font-semibold text-gray-900">Headless</Link>
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                <Search className="w-5 h-5 text-gray-700" />
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-md transition-colors">
                <ShoppingBag className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-light text-gray-900 mb-12">Collection</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/products/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                  <div className="w-32 h-32 bg-gray-300 rounded"></div>
                </div>
                <h3 className="text-lg font-light text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}

