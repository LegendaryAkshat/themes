"use client";

import { motion } from "framer-motion";
import { Download, Printer } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: {
      container: "bg-white"
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      success: "text-green-600"
    },
    buttons: {
      action: "bg-gray-100 rounded-lg hover:bg-gray-200"
    },
    borders: {
      divider: "border-t border-b border-gray-200",
      item: "border-t border-gray-100"
    }
  },
  
  // Invoice Header
  header: {
    title: "Invoice"
  },
  
  // Invoice Data (Edit invoice here!)
  invoice: {
    number: "INV-2024-001234",
    date: "March 15, 2024",
    status: "Paid",
    customer: {
      name: "John Doe",
      email: "john.doe@example.com",
      address: "123 Main Street, New York, NY 10001"
    },
    items: [
      { name: "Premium Product 1", quantity: 2, price: 99.99, total: 199.98 },
      { name: "Premium Product 2", quantity: 1, price: 79.99, total: 79.99 }
    ],
    subtotal: 279.97,
    shipping: 10.00,
    tax: 22.40,
    total: 312.37
  },
  
  // UI Text
  ui: {
    billTo: "Bill To:",
    invoiceDetails: "Invoice Details:",
    date: "Date:",
    status: "Status:",
    item: "Item",
    quantity: "Quantity",
    price: "Price",
    total: "Total",
    subtotal: "Subtotal:",
    shipping: "Shipping:",
    tax: "Tax:",
    totalLabel: "Total:"
  },
  
  // Icon Map
  iconMap: {
    Download,
    Printer
  }
};

export default function Page() {
  const { colors, header, invoice, ui, iconMap } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`${colors.card.container} rounded-2xl shadow-lg p-8`}
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{header.title}</h1>
              <p className={colors.text.secondary}>#{invoice.number}</p>
            </div>
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 ${colors.buttons.action} transition-colors`}
              >
                <Download className={`w-5 h-5 ${colors.text.secondary}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-3 ${colors.buttons.action} transition-colors`}
              >
                <Printer className={`w-5 h-5 ${colors.text.secondary}`} />
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{ui.billTo}</h3>
              <p className={colors.text.secondary}>{invoice.customer.name}</p>
              <p className={colors.text.secondary}>{invoice.customer.email}</p>
              <p className={colors.text.secondary}>{invoice.customer.address}</p>
            </div>
            <div>
              <h3 className={`font-semibold ${colors.text.primary} mb-2`}>{ui.invoiceDetails}</h3>
              <p className={colors.text.secondary}>{ui.date} {invoice.date}</p>
              <p className={colors.text.secondary}>{ui.status}: <span className={`${colors.text.success} font-semibold`}>{invoice.status}</span></p>
            </div>
          </div>

          <div className={`${colors.borders.divider} py-4 mb-6`}>
            <table className="w-full">
              <thead>
                <tr className={`text-left ${colors.text.secondary}`}>
                  <th className="pb-2">{ui.item}</th>
                  <th className="pb-2">{ui.quantity}</th>
                  <th className="pb-2 text-right">{ui.price}</th>
                  <th className="pb-2 text-right">{ui.total}</th>
                </tr>
              </thead>
              <tbody>
                {invoice.items.map((item, index) => (
                  <tr key={index} className={colors.borders.item}>
                    <td className={`py-3 ${colors.text.primary}`}>{item.name}</td>
                    <td className={`py-3 ${colors.text.secondary}`}>{item.quantity}</td>
                    <td className={`py-3 ${colors.text.secondary} text-right`}>${item.price.toFixed(2)}</td>
                    <td className={`py-3 ${colors.text.primary} text-right font-semibold`}>${item.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className={`flex justify-between ${colors.text.secondary}`}>
                <span>{ui.subtotal}</span>
                <span>${invoice.subtotal.toFixed(2)}</span>
              </div>
              <div className={`flex justify-between ${colors.text.secondary}`}>
                <span>{ui.shipping}</span>
                <span>${invoice.shipping.toFixed(2)}</span>
              </div>
              <div className={`flex justify-between ${colors.text.secondary}`}>
                <span>{ui.tax}</span>
                <span>${invoice.tax.toFixed(2)}</span>
              </div>
              <div className={`flex justify-between text-xl font-bold ${colors.text.primary} pt-2 ${colors.borders.item}`}>
                <span>{ui.totalLabel}</span>
                <span>${invoice.total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
