"use client";

import { motion } from "framer-motion";
import { Package, Eye, Download } from "lucide-react";

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
      secondary: "text-gray-600"
    },
    status: {
      delivered: "bg-green-100 text-green-800",
      shipped: "bg-blue-100 text-blue-800",
      processing: "bg-yellow-100 text-yellow-800"
    },
    icons: {
      package: "bg-blue-100 text-blue-600",
      action: "bg-gray-100 hover:bg-gray-200 text-gray-700"
    }
  },
  
  // Page Content
  page: {
    title: "My Orders"
  },
  
  // Orders (Edit orders here!)
  orders: [
    {
      id: "#12345",
      date: "March 15, 2024",
      status: "Delivered",
      total: 299.97,
      items: 3,
      link: "/ecomus-order-details"
    },
    {
      id: "#12344",
      date: "March 10, 2024",
      status: "Shipped",
      total: 149.99,
      items: 2,
      link: "/ecomus-order-details"
    },
    {
      id: "#12343",
      date: "March 5, 2024",
      status: "Processing",
      total: 89.99,
      items: 1,
      link: "/ecomus-order-details"
    }
  ],
  
  // Actions
  actions: {
    view: {
      icon: "Eye",
      title: "View Details"
    },
    download: {
      icon: "Download",
      title: "Download Invoice"
    }
  }
};

export default function Page() {
  const { colors, page, orders, actions } = pageConfig;

  const getStatusColor = (status) => {
    return colors.status[status.toLowerCase()] || colors.status.processing;
  };

  const iconMap = {
    Package,
    Eye,
    Download
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          {page.title}
        </motion.h1>

        <div className="space-y-4">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card} rounded-lg shadow-md p-6`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 ${colors.icons.package} rounded-lg`}>
                    <Package className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${colors.text.primary} mb-1`}>Order {order.id}</h3>
                    <p className={`text-sm ${colors.text.secondary}`}>{order.date}</p>
                    <p className={`text-sm ${colors.text.secondary}`}>{order.items} item(s)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className={`text-lg font-bold ${colors.text.primary}`}>${order.total.toFixed(2)}</p>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <motion.a
                      href={order.link}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 ${colors.icons.action} rounded-lg transition-colors`}
                      title={actions.view.title}
                    >
                      <Eye className="w-5 h-5" />
                    </motion.a>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 ${colors.icons.action} rounded-lg transition-colors`}
                      title={actions.download.title}
                    >
                      <Download className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
