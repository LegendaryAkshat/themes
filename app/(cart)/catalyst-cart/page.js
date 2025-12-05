"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShoppingCart, Trash2, ArrowLeft, Plus, Minus } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Planted",
    homeLink: "/catalyst-home",
    cartLink: "/catalyst-cart",
    checkoutLink: "/catalyst-checkout"
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
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      icon: "hover:bg-gray-100",
      delete: "text-red-600 hover:bg-red-50"
    },
    summary: {
      background: "bg-gray-50"
    }
  },
  
  // Page Header
  page: {
    title: "Shopping Cart",
    continueShoppingText: "Continue Shopping"
  },
  
  // Cart Items (Edit cart items here!)
  cartItems: [
    { id: 1, name: "ZZ Plant", price: 80.00, quantity: 1, image: "🌿" },
    { id: 2, name: "Snake Plant", price: 109.99, quantity: 2, image: "🌵" },
    { id: 3, name: "Spray Bottle", price: 15.00, quantity: 1, image: "💧" }
  ],
  
  // Pricing Configuration
  pricing: {
    freeShippingThreshold: 50,
    shippingCost: 10.00,
    taxRate: 0.08
  },
  
  // Empty Cart Message
  emptyCart: {
    title: "Your cart is empty",
    buttonText: "Start Shopping"
  }
};

export default function Page() {
  const { brand, colors, page, cartItems, pricing, emptyCart } = pageConfig;

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > pricing.freeShippingThreshold ? 0 : pricing.shippingCost;
  const tax = subtotal * pricing.taxRate;
  const total = subtotal + shipping + tax;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              <Link href={brand.cartLink} className={`p-2 ${colors.buttons.icon} rounded-md relative`}>
                <ShoppingCart className={`w-5 h-5 ${colors.text.light}`} />
                <span className="absolute top-1 right-1 w-2 h-2 bg-gray-900 rounded-full"></span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-8">
          <Link href={brand.homeLink} className={`inline-flex items-center gap-2 ${colors.text.secondary} hover:${colors.text.primary}`}>
            <ArrowLeft className="w-4 h-4" />
            {page.continueShoppingText}
          </Link>
        </div>

        <h1 className={`text-3xl font-bold ${colors.text.primary} mb-8`}>{page.title}</h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart className={`w-16 h-16 ${colors.text.secondary} mx-auto mb-4`} />
            <p className={`${colors.text.secondary} mb-4`}>{emptyCart.title}</p>
            <Link href={brand.homeLink} className={`inline-block ${colors.buttons.primary} px-6 py-3 rounded-md font-semibold transition-colors`}>
              {emptyCart.buttonText}
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-4 p-4 border ${colors.borders.default} rounded-lg`}
                >
                  <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center text-4xl flex-shrink-0">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${colors.text.primary} mb-1`}>{item.name}</h3>
                    <p className={`text-lg font-bold ${colors.text.primary} mb-3`}>${item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-4">
                      <div className={`flex items-center border ${colors.borders.input} rounded-md`}>
                        <button className={`p-1 ${colors.buttons.icon}`}>
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="px-3 py-1 min-w-[40px] text-center text-sm">{item.quantity}</span>
                        <button className={`p-1 ${colors.buttons.icon}`}>
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button className={`p-2 ${colors.buttons.delete} rounded-md`}>
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-lg font-bold ${colors.text.primary}`}>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="lg:col-span-1">
              <div className={`sticky top-24 p-6 border ${colors.borders.default} rounded-lg ${colors.summary.background}`}>
                <h2 className={`text-xl font-bold ${colors.text.primary} mb-6`}>Order Summary</h2>
                <div className="space-y-4 mb-6">
                  <div className={`flex justify-between ${colors.text.light}`}>
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className={`flex justify-between ${colors.text.light}`}>
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className={`flex justify-between ${colors.text.light}`}>
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className={`border-t ${colors.borders.input} pt-4 flex justify-between text-lg font-bold ${colors.text.primary}`}>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                {subtotal < pricing.freeShippingThreshold && (
                  <p className={`text-sm ${colors.text.secondary} mb-4`}>
                    Add ${(pricing.freeShippingThreshold - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <Link
                  href={brand.checkoutLink}
                  className={`block w-full ${colors.buttons.primary} text-center px-6 py-4 rounded-md font-semibold transition-colors`}
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
