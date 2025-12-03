"use client";

import { motion } from "framer-motion";

export default function Page() {
  const products = [
    { 
      name: "All-in-One Desktop M4", 
      price: "$555", 
      oldPrice: "$333", 
      id: 1,
      rating: 4.9,
      reviews: 523,
      badge: "Best Seller",
      badgeColor: "bg-yellow-500"
    },
    { 
      name: "Premium Wireless Headphones Max", 
      price: "$500", 
      oldPrice: "$450", 
      id: 2,
      rating: 4.8,
      reviews: 412,
      badge: "Best Seller",
      badgeColor: "bg-yellow-500"
    },
    { 
      name: "Premium Mobile Device Pro Max", 
      price: "$930", 
      oldPrice: "$899", 
      id: 3,
      rating: 4.9,
      reviews: 678,
      badge: "Best Seller",
      badgeColor: "bg-yellow-500"
    },
    { 
      name: "Professional Laptop M4", 
      price: "$699", 
      oldPrice: "$600", 
      id: 4,
      rating: 4.7,
      reviews: 389,
      badge: "Best Seller",
      badgeColor: "bg-yellow-500"
    },
    { 
      name: "Indoor Steel Adjustable Silent Treadmill", 
      price: "$999", 
      oldPrice: "$888", 
      id: 5,
      rating: 4.6,
      reviews: 267,
      badge: "Best Seller",
      badgeColor: "bg-yellow-500"
    },
    { 
      name: "Premium Smart TV 43 Inch", 
      price: "$800", 
      oldPrice: "$700", 
      id: 6,
      rating: 4.8,
      reviews: 445,
      badge: "Best Seller",
      badgeColor: "bg-yellow-500"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-white text-gray-900">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Best Sellers</h2>
            <p className="text-gray-600">Our most popular products loved by customers worldwide</p>
          </div>
          <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center gap-2 group">
            View All
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="relative">
                {product.badge && (
                  <div className={`absolute top-3 left-3 z-10 ${product.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </div>
                )}
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-300"></div>
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-opacity flex items-center justify-center gap-3">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </motion.button>
                    <span className="text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded whitespace-nowrap">Quick View</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </motion.button>
                    <span className="text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded whitespace-nowrap">Add to cart</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </motion.button>
                    <span className="text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded whitespace-nowrap">Add to Wishlist</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className={`w-4 h-4 rounded ${
                        i < Math.floor(product.rating)
                          ? 'bg-yellow-400'
                          : i < product.rating
                          ? 'bg-yellow-200'
                          : 'bg-gray-200'
                      }`}
                    />
                  ))}
                  <span className="text-sm text-gray-600 ml-2">
                    ({product.reviews})
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  <span className="text-gray-400 line-through">{product.oldPrice}</span>
                  <span className="text-sm text-green-600 font-semibold ml-auto">
                    {Math.round(((parseFloat(product.oldPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.oldPrice.replace('$', ''))) * 100)}% OFF
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

