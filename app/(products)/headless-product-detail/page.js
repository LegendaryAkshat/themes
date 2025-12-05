"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Headless",
    homeLink: "/headless-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-700"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300",
      selected: "border-gray-900"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      secondary: "border border-gray-300 hover:bg-gray-100"
    }
  },
  
  // Header Navigation
  header: {
    navigation: [
      { label: "About us", href: "/headless-about" },
      { label: "Spring", href: "/headless-spring" },
      { label: "FAQ", href: "/headless-faq" }
    ],
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Product Information (Edit product details here!)
  product: {
    name: "Black Jacket",
    price: "$8,068.72",
    description: "Hello world",
    colors: ["black", "blue", "brown"],
    sizes: ["4XL", "XXXL", "M", "L", "XXL", "XL"]
  }
};

export default function Page() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");
  const router = useRouter();
  const { brand, colors, header, product } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {header.navigation.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className={`text-sm ${colors.text.light} hover:${colors.text.primary} transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href={brand.homeLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              {header.actions.search.enabled && (
                <button 
                  onClick={() => router.push(header.actions.search.link)} 
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <Search className={`w-5 h-5 ${colors.text.light}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.light}`} />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="aspect-square bg-gray-100"
          >
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div>
              <h1 className={`text-4xl font-light ${colors.text.primary} mb-4`}>{product.name}</h1>
              <p className={`text-2xl ${colors.text.secondary} mb-6`}>{product.price}</p>
              <p className={`${colors.text.light} mb-8`}>{product.description}</p>
            </div>

            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-medium ${colors.text.primary} mb-3`}>Color</label>
                <div className="flex gap-3">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border-2 ${
                        selectedColor === color
                          ? `${colors.borders.selected} bg-gray-900 text-white`
                          : `${colors.borders.input} ${colors.text.light} hover:border-gray-400`
                      } transition-colors capitalize`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium ${colors.text.primary} mb-3`}>Size</label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border-2 ${
                        selectedSize === size
                          ? `${colors.borders.selected} bg-gray-900 text-white`
                          : `${colors.borders.input} ${colors.text.light} hover:border-gray-400`
                      } transition-colors`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-medium ${colors.text.primary} mb-3`}>Quantity</label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className={`p-2 border ${colors.borders.input} hover:bg-gray-100 transition-colors`}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className={`text-lg font-medium w-12 text-center ${colors.text.primary}`}>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className={`p-2 border ${colors.borders.input} hover:bg-gray-100 transition-colors`}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button className={`w-full ${colors.buttons.primary} py-4 font-medium transition-colors`}>
                Add to Cart
              </button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
