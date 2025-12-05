"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      accent: "text-blue-600"
    },
    borders: {
      default: "border-gray-100"
    },
    badges: {
      blue: "bg-blue-500",
      green: "bg-green-500",
      red: "bg-red-500",
      yellow: "bg-yellow-500",
      orange: "bg-orange-500"
    },
    buttons: {
      hover: "hover:bg-gray-100",
      primary: "bg-blue-600 hover:bg-blue-700"
    },
    stars: {
      active: "bg-yellow-400",
      partial: "bg-yellow-200",
      inactive: "bg-gray-200"
    }
  },
  
  // Page Header
  page: {
    title: "Featured Products",
    description: "Handpicked selection of our most popular items",
    viewAll: {
      text: "View All",
      link: "/products-all"
    }
  },
  
  // Products (Edit products here!)
  products: [
    { 
      name: "Premium Smart TV 43 Inch", 
      id: 1,
      price: "$699",
      oldPrice: "$799",
      rating: 4.7,
      reviews: 234,
      badge: "Featured",
      badgeColor: "blue",
      link: "/product-premium-smart-tv"
    },
    { 
      name: "Wireless Gaming Controller", 
      id: 2,
      price: "$89",
      oldPrice: "$99",
      rating: 4.5,
      reviews: 156,
      badge: "New",
      badgeColor: "green",
      link: "/product-wireless-gaming-controller"
    },
    { 
      name: "Adjustable Home Fitness Equipment", 
      id: 3,
      price: "$599",
      oldPrice: "$699",
      rating: 4.8,
      reviews: 312,
      badge: "Hot",
      badgeColor: "red",
      link: "/product-adjustable-home-fitness"
    },
    { 
      name: "Portable Electric Appliance", 
      id: 4,
      price: "$149",
      oldPrice: "$179",
      rating: 4.6,
      reviews: 189,
      badge: null,
      badgeColor: "",
      link: "/product-portable-electric-appliance"
    },
    { 
      name: "Professional Laptop M4", 
      id: 5,
      price: "$1299",
      oldPrice: "$1499",
      rating: 4.9,
      reviews: 445,
      badge: "Featured",
      badgeColor: "blue",
      link: "/product-professional-laptop-m4"
    },
    { 
      name: "High-Performance Laptop Pro", 
      id: 6,
      price: "$1899",
      oldPrice: "$2199",
      rating: 4.8,
      reviews: 278,
      badge: "Best Seller",
      badgeColor: "yellow",
      link: "/product-high-performance-laptop-pro"
    },
    { 
      name: "Premium Mobile Device Pro", 
      id: 7,
      price: "$999",
      oldPrice: "$1099",
      rating: 4.7,
      reviews: 523,
      badge: "Featured",
      badgeColor: "blue",
      link: "/product-premium-mobile-device-pro"
    },
    { 
      name: "Ultrabook Air M1", 
      id: 8,
      price: "$899",
      oldPrice: "$999",
      rating: 4.6,
      reviews: 367,
      badge: "Sale",
      badgeColor: "orange",
      link: "/product-ultrabook-air-m1"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "md:grid-cols-3",
      large: "lg:grid-cols-4"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const { colors, page, products, grid } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-2`}>{page.title}</h2>
            <p className={colors.text.secondary}>{page.description}</p>
          </div>
          <Link href={page.viewAll.link} className={`${colors.text.accent} hover:text-blue-700 font-semibold flex items-center gap-2 group`}>
            {page.viewAll.text}
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
        
        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`${colors.card} rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group`}
            >
              <Link href={product.link}>
                <div className="relative">
                  {product.badge && (
                    <div className={`absolute top-3 left-3 z-10 ${colors.badges[product.badgeColor]} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                      {product.badge}
                    </div>
                  )}
                  <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300"></div>
                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className={`p-2 ${colors.card} rounded-full shadow-lg ${colors.buttons.hover} transition-colors`}>
                        <div className="w-5 h-5 bg-gray-400 rounded"></div>
                      </button>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-opacity flex items-center justify-center gap-2`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity p-2 ${colors.card} rounded-full shadow-lg`}
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity px-6 py-2 ${colors.buttons.primary} text-white rounded-lg font-medium shadow-lg`}
                    >
                      Add to Cart
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity p-2 ${colors.card} rounded-full shadow-lg`}
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </motion.button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className={`text-lg font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:${colors.text.accent} transition-colors`}>
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded ${
                          i < Math.floor(product.rating)
                            ? colors.stars.active
                            : i < product.rating
                            ? colors.stars.partial
                            : colors.stars.inactive
                        }`}
                      />
                    ))}
                    <span className={`text-sm ${colors.text.secondary} ml-2`}>
                      ({product.reviews})
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-bold ${colors.text.accent}`}>{product.price}</span>
                    <span className={`text-gray-400 line-through`}>{product.oldPrice}</span>
                    <span className={`text-sm text-green-600 font-semibold ml-auto`}>
                      {Math.round(((parseFloat(product.oldPrice.replace('$', '')) - parseFloat(product.price.replace('$', ''))) / parseFloat(product.oldPrice.replace('$', ''))) * 100)}% OFF
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
