"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Package, ArrowRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Planted",
    homeLink: "/catalyst-home"
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
    buttons: {
      active: "bg-gray-900 text-white",
      inactive: "text-gray-700 hover:bg-gray-100"
    },
    status: {
      delivered: "bg-green-100 text-green-800",
      shipped: "bg-blue-100 text-blue-800",
      default: "bg-gray-100 text-gray-800"
    }
  },
  
  // Page Content
  page: {
    title: "My Orders"
  },
  
  // Navigation Menu
  navigation: [
    { label: "Account Details", icon: "Package", link: "/catalyst-account", active: false },
    { label: "Orders", icon: "Package", link: "/catalyst-account-orders", active: true }
  ],
  
  // Orders (Edit orders here!)
  orders: [
    { id: "12345", date: "Jan 10, 2025", total: "$284.99", status: "Delivered", items: 3, link: "/catalyst-account-order-detail" },
    { id: "12344", date: "Dec 28, 2024", total: "$159.99", status: "Shipped", items: 2, link: "/catalyst-account-order-detail" },
    { id: "12343", date: "Dec 15, 2024", total: "$95.00", status: "Delivered", items: 1, link: "/catalyst-account-order-detail" }
  ]
};

export default function Page() {
  const { brand, colors, page, navigation, orders } = pageConfig;

  const iconMap = {
    Package,
    ArrowRight
  };

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
        <h1 className={`text-3xl font-bold ${colors.text.primary} mb-8`}>{page.title}</h1>

        <div className="grid md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <nav className="space-y-2">
              {navigation.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <Link 
                    key={index}
                    href={item.link} 
                    className={`flex items-center gap-3 px-4 py-3 rounded-md ${item.active ? colors.buttons.active : colors.buttons.inactive}`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="md:col-span-3 space-y-4">
            {orders.map((order, index) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${colors.card} rounded-lg border ${colors.borders.default} p-6`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className={`text-sm ${colors.text.secondary}`}>Order #{order.id}</p>
                    <p className={`text-sm ${colors.text.secondary}`}>{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${colors.text.primary}`}>{order.total}</p>
                    <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${colors.status[order.status.toLowerCase()] || colors.status.default}`}>
                      {order.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <p className={`text-sm ${colors.text.secondary}`}>{order.items} item{order.items > 1 ? 's' : ''}</p>
                  <Link
                    href={order.link}
                    className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text.primary} hover:underline`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
