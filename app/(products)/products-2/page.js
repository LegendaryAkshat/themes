"use client";

import { motion } from "framer-motion";

export default function Page() {
  const products = [
    { name: "Premium Mobile Device Pro", id: 1 },
    { name: "Smart Watch Ultra", id: 2 },
    { name: "Adjustable Home Fitness Equipment", id: 3 },
    { name: "Premium Smart TV 43 Inch", id: 4 },
    { name: "High-Performance Laptop Pro", id: 5 },
    { name: "Portable Electric Appliance", id: 6 }
  ];

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Best Sellers</h2>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold">
            View All
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className="relative group">
                <div className="w-full h-64 bg-gray-200"></div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity flex items-center justify-center gap-2">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                      <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    </button>
                    <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">Quick View</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                      <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    </button>
                    <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">Add to cart</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                    <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                      <div className="w-4 h-4 bg-gray-400 rounded"></div>
                    </button>
                    <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">Add to Wishlist</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-slate-800 mb-2">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

