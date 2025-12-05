"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Package, Truck } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Acme",
    homeLink: "/blazity-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200"
    },
    status: {
      delivered: "bg-green-100 text-green-800"
    }
  },
  
  // Navigation
  navigation: {
    backLink: {
      text: "Back to Orders",
      href: "/blazity-account-orders"
    }
  },
  
  // Order Information (Edit order details here!)
  order: {
    id: "12345",
    date: "January 10, 2025",
    status: "Delivered",
    total: "$428.76",
    items: [
      { name: "Product 1", price: "$99.00", quantity: 1, image: "👔", link: "/blazity-product-detail" },
      { name: "Product 2", price: "$149.00", quantity: 2, image: "👕", link: "/blazity-product-detail" }
    ],
    shipping: {
      address: "123 Main St, City, State 12345",
      method: "Standard Shipping",
      tracking: "1Z999AA10123456784"
    }
  }
};

export default function Page() {
  const { brand, colors, navigation, order } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} ${colors.card}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link href={navigation.backLink.href} className={`inline-flex items-center gap-2 ${colors.text.secondary} hover:${colors.text.primary} mb-8`}>
          <ArrowLeft className="w-4 h-4" />
          {navigation.backLink.text}
        </Link>

        <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6 mb-6`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className={`text-2xl font-bold ${colors.text.primary} mb-2`}>Order #{order.id}</h1>
              <p className={colors.text.secondary}>Placed on {order.date}</p>
            </div>
            <span className={`px-3 py-1 ${colors.status[order.status.toLowerCase()]} rounded text-sm font-medium`}>
              {order.status}
            </span>
          </div>

          <div className={`border-t ${colors.borders.default} pt-6`}>
            <h2 className={`text-lg font-semibold ${colors.text.primary} mb-4`}>Order Items</h2>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <Link key={index} href={item.link} className="flex items-center gap-4 hover:opacity-80 transition-opacity">
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-3xl">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-semibold ${colors.text.primary}`}>{item.name}</h3>
                    <p className={`text-sm ${colors.text.secondary}`}>Quantity: {item.quantity}</p>
                  </div>
                  <p className={`font-semibold ${colors.text.primary}`}>${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className={`border-t ${colors.borders.default} pt-6 mt-6`}>
            <div className={`flex justify-between text-lg font-bold ${colors.text.primary}`}>
              <span>Total</span>
              <span>{order.total}</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className={`${colors.card} rounded-lg border ${colors.borders.default} p-6`}>
            <h2 className={`text-lg font-semibold ${colors.text.primary} mb-4 flex items-center gap-2`}>
              <Truck className="w-5 h-5" />
              Shipping Information
            </h2>
            <div className={`space-y-2 text-sm ${colors.text.secondary}`}>
              <p>{order.shipping.address}</p>
              <p><strong>Method:</strong> {order.shipping.method}</p>
              <p><strong>Tracking:</strong> {order.shipping.tracking}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
