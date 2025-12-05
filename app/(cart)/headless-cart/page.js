"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, X, Plus, Minus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Headless",
    homeLink: "/headless-home",
    checkoutLink: "/headless-checkout"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      icon: "hover:bg-gray-100"
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
  
  // Page Content
  page: {
    title: "Cart",
    emptyMessage: "Your cart is empty",
    continueShoppingText: "Continue shopping"
  },
  
  // Cart Items (Edit cart items here!)
  cartItems: [
    { id: 1, name: "Black Jacket", price: 8068.72, quantity: 1 },
    { id: 2, name: "Cozy coat", price: 2598.00, quantity: 1 }
  ],
  
  // Pricing Configuration
  pricing: {
    shipping: 50.00
  },
  
  // Order Summary
  order: {
    buttonText: "Checkout"
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page, cartItems, pricing, order } = pageConfig;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = pricing.shipping;
  const total = subtotal + shipping;

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
                  className={`text-sm ${colors.text.secondary} hover:${colors.text.primary} transition-colors`}
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
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <Search className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`text-4xl font-light ${colors.text.primary} mb-8`}>{page.title}</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className={`${colors.text.secondary} mb-4`}>{page.emptyMessage}</p>
            <Link href={brand.homeLink} className={`${colors.text.primary} underline`}>
              {page.continueShoppingText}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex items-center gap-6 p-6 border ${colors.borders.default}`}
                >
                  <div className="w-24 h-24 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-lg font-light ${colors.text.primary} mb-2`}>{item.name}</h3>
                    <p className={colors.text.secondary}>${item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className={`flex items-center gap-2 border ${colors.borders.input}`}>
                      <button className={`p-2 ${colors.buttons.icon}`}>
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-4">{item.quantity}</span>
                      <button className={`p-2 ${colors.buttons.icon}`}>
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                    <p className={`font-medium w-32 text-right ${colors.text.primary}`}>
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button className={`p-2 ${colors.buttons.icon}`}>
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className={`border ${colors.borders.default} p-6 sticky top-4`}>
                <h2 className={`text-xl font-light ${colors.text.primary} mb-6`}>Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className={colors.text.secondary}>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className={colors.text.secondary}>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className={`border-t ${colors.borders.default} pt-4`}>
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <Link
                  href={brand.checkoutLink}
                  className={`block w-full ${colors.buttons.primary} py-4 text-center font-medium transition-colors`}
                >
                  {order.buttonText}
                </Link>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
