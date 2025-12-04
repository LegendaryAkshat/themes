"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Filter, Grid, List, ChevronRight } from "lucide-react";

export default function Page() {
  const products = [
    { name: "Product 1", price: "$99.00", image: "👔" },
    { name: "Product 2", price: "$149.00", image: "👕" },
    { name: "Product 3", price: "$79.00", image: "👗" },
    { name: "Product 4", price: "$199.00", image: "🧥" },
    { name: "Product 5", price: "$129.00", image: "👖" },
    { name: "Product 6", price: "$89.00", image: "👠" },
    { name: "Product 7", price: "$159.00", image: "👜" },
    { name: "Product 8", price: "$69.00", image: "👓" },
  ];

  const breadcrumbs = [
    { label: "Home", path: "/" },
    { label: "Fashion", path: "/category/fashion" }
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Acme
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          {breadcrumbs.map((crumb, index) => (
            <div key={index} className="flex items-center gap-2">
              <Link href={crumb.path} className="hover:text-gray-900">
                {crumb.label}
              </Link>
              {index < breadcrumbs.length - 1 && <ChevronRight className="w-4 h-4" />}
            </div>
          ))}
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">Fashion</h1>

        {/* Filters and View Options */}
        <div className="flex items-center justify-between mb-8">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filter
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <Grid className="w-4 h-4" />
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link href="/product/item">
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                  {product.image}
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-base font-bold text-gray-900">{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

