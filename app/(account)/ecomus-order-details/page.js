"use client";

import { motion } from "framer-motion";
import { Package, Truck, CheckCircle, Download } from "lucide-react";

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
    borders: {
      default: "border-gray-200"
    },
    status: {
      delivered: "text-green-600"
    },
    buttons: {
      download: "bg-gray-100 hover:bg-gray-200 text-gray-700"
    },
    timeline: {
      completed: "bg-green-500",
      pending: "bg-gray-200"
    }
  },
  
  // Order Information (Edit order details here!)
  order: {
    id: "#12345",
    date: "March 15, 2024",
    status: "Delivered",
    items: [
      { name: "Premium Product 1", quantity: 2, price: 99.99, link: "/ecomus-product-detail" },
      { name: "Premium Product 2", quantity: 1, price: 79.99, link: "/ecomus-product-detail" }
    ],
    shipping: {
      address: "123 Main Street, New York, NY 10001",
      method: "Standard Shipping",
      tracking: "TRACK123456789"
    },
    subtotal: 279.97,
    shippingCost: 10.00,
    tax: 22.40,
    total: 312.37
  },
  
  // Timeline Steps (Edit timeline here!)
  timeline: {
    steps: [
      { label: "Order Placed", date: "March 15, 2024", completed: true },
      { label: "Processing", date: "March 16, 2024", completed: true },
      { label: "Shipped", date: "March 17, 2024", completed: true },
      { label: "Delivered", date: "March 20, 2024", completed: true }
    ]
  },
  
  // Actions
  actions: {
    downloadButton: {
      text: "Download Invoice",
      icon: "Download"
    }
  }
};

export default function Page() {
  const { colors, order, timeline, actions } = pageConfig;

  const iconMap = {
    Package,
    Truck,
    CheckCircle,
    Download
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          Order Details - {order.id}
        </motion.h1>

        <div className={`${colors.card} rounded-lg shadow-md p-6 mb-6`}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className={colors.text.secondary}>Order Date: {order.date}</p>
              <p className={colors.text.secondary}>Status: <span className={`${colors.status[order.status.toLowerCase()]} font-semibold`}>{order.status}</span></p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 ${colors.buttons.download} px-4 py-2 rounded-lg transition-colors`}
            >
              {(() => {
                const DownloadIcon = iconMap[actions.downloadButton.icon];
                return <DownloadIcon className="w-4 h-4" />;
              })()}
              {actions.downloadButton.text}
            </motion.button>
          </div>

          <div className={`border-t ${colors.borders.default} pt-6`}>
            <h3 className={`font-semibold ${colors.text.primary} mb-4`}>Order Items</h3>
            <div className="space-y-4">
              {order.items.map((item, index) => (
                <Link key={index} href={item.link} className="flex items-center gap-4 pb-4 border-b border-gray-100 hover:opacity-80 transition-opacity">
                  <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex-shrink-0">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-12 h-12 bg-gray-300 rounded"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className={`font-semibold ${colors.text.primary}`}>{item.name}</h4>
                    <p className={`text-sm ${colors.text.secondary}`}>Quantity: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${colors.text.primary}`}>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className={`border-t ${colors.borders.default} pt-6 mt-6`}>
            <h3 className={`font-semibold ${colors.text.primary} mb-4 flex items-center gap-2`}>
              <Truck className="w-5 h-5" />
              Shipping Information
            </h3>
            <div className={`${colors.text.secondary} space-y-1`}>
              <p>{order.shipping.address}</p>
              <p>Method: {order.shipping.method}</p>
              <p>Tracking: {order.shipping.tracking}</p>
            </div>
          </div>

          <div className={`border-t ${colors.borders.default} pt-6 mt-6`}>
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
                <div className={`flex justify-between text-xl font-bold ${colors.text.primary} pt-2 border-t ${colors.borders.default}`}>
                  <span>Total:</span>
                  <span>${order.total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${colors.card} rounded-lg shadow-md p-6`}>
          <h3 className={`font-semibold ${colors.text.primary} mb-6`}>Order Timeline</h3>
          <div className="space-y-4">
            {timeline.steps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step.completed ? colors.timeline.completed : colors.timeline.pending
                }`}>
                  {step.completed ? (
                    <CheckCircle className="w-6 h-6 text-white" />
                  ) : (
                    <div className="w-4 h-4 bg-gray-400 rounded-full" />
                  )}
                </div>
                <div>
                  <p className={`font-semibold ${colors.text.primary}`}>{step.label}</p>
                  <p className={`text-sm ${colors.text.secondary}`}>{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
