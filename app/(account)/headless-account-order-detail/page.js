"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Package } from "lucide-react";
import Link from "next/link";

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
      link: "text-gray-600 hover:text-gray-900"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      hover: "hover:bg-gray-100"
    },
    status: {
      delivered: "text-green-600"
    }
  },
  
  // Navigation
  navigation: {
    links: [
      { label: "About us", href: "/about" },
      { label: "Spring", href: "/spring" },
      { label: "FAQ", href: "/faq" }
    ],
    backLink: {
      text: "← Back to Orders",
      href: "/headless-account-orders"
    }
  },
  
  // Order Information (Edit order details here!)
  order: {
    id: "12345",
    date: "March 15, 2024",
    status: "Delivered",
    items: [
      { name: "Black Jacket", quantity: 1, price: 8068.72, link: "/headless-product-detail" },
      { name: "Cozy coat", quantity: 1, price: 2598.00, link: "/headless-product-detail" }
    ],
    shipping: {
      address: "123 Main Street, New York, NY 10001",
      method: "Standard Shipping",
      tracking: "TRACK123456789"
    },
    subtotal: 10666.72,
    shippingCost: 50.00,
    tax: 853.34,
    total: 11570.06
  }
};

export default function Page() {
  const { brand, colors, navigation, order } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {navigation.links.map((link, index) => (
                <Link key={index} href={link.href} className={`text-sm ${colors.text.link} transition-colors`}>
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href={brand.homeLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              <button className={`p-2 ${colors.buttons.hover} rounded-md transition-colors`}>
                <Search className={`w-5 h-5 ${colors.text.secondary}`} />
              </button>
              <button className={`p-2 ${colors.buttons.hover} rounded-md transition-colors`}>
                <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href={navigation.backLink.href} className={colors.text.link}>
            {navigation.backLink.text}
          </Link>
        </div>
        <h1 className={`text-4xl font-light ${colors.text.primary} mb-8`}>Order Details - #{order.id}</h1>

        <div className={`border ${colors.borders.default} p-6 mb-6`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className={colors.text.secondary}>Order Date: {order.date}</p>
              <p className={colors.text.secondary}>
                Status: <span className={`${colors.status[order.status.toLowerCase()]} font-light`}>{order.status}</span>
              </p>
            </div>
          </div>

          <div className={`border-t ${colors.borders.default} pt-6 mb-6`}>
            <h3 className={`font-light ${colors.text.primary} mb-4`}>Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <Link key={index} href={item.link} className="flex items-center gap-4 pb-4 border-b border-gray-100 hover:opacity-80 transition-opacity">
                  <div className="w-20 h-20 bg-gray-100 flex-shrink-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-300 rounded"></div>
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-light ${colors.text.primary}`}>{item.name}</h4>
                    <p className={`text-sm ${colors.text.secondary}`}>Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-light ${colors.text.primary}`}>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={`border-t ${colors.borders.default} pt-6 mb-6`}>
            <h3 className={`font-light ${colors.text.primary} mb-4`}>Shipping Information</h3>
            <div className={`${colors.text.secondary} space-y-1`}>
              <p>{order.shipping.address}</p>
              <p>Method: {order.shipping.method}</p>
              <p>Tracking: {order.shipping.tracking}</p>
            </div>
          </div>

          <div className={`border-t ${colors.borders.default} pt-6`}>
            <div className="flex justify-end">
              <div className="w-64 space-y-2">
                <div className={`flex justify-between ${colors.text.secondary}`}>
                  <span>Subtotal:</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className={`flex justify-between ${colors.text.secondary}`}>
                  <span>Shipping:</span>
                  <span>${order.shippingCost.toFixed(2)}</span>
                </div>
                <div className={`flex justify-between ${colors.text.secondary}`}>
                  <span>Tax:</span>
                  <span>${order.tax.toFixed(2)}</span>
                </div>
                <div className={`flex justify-between text-xl font-light ${colors.text.primary} pt-2 border-t ${colors.borders.default}`}>
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
