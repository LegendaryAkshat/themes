"use client";

import { motion } from "framer-motion";
import { MessageSquare, Plus, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [tickets, setTickets] = useState([
    {
      id: "#12345",
      subject: "Order Delivery Issue",
      status: "Open",
      date: "March 15, 2024",
      lastUpdate: "2 hours ago"
    },
    {
      id: "#12344",
      subject: "Product Return Request",
      status: "In Progress",
      date: "March 12, 2024",
      lastUpdate: "1 day ago"
    },
    {
      id: "#12343",
      subject: "Payment Refund",
      status: "Resolved",
      date: "March 10, 2024",
      lastUpdate: "3 days ago"
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Open": return "bg-blue-100 text-blue-800";
      case "In Progress": return "bg-yellow-100 text-yellow-800";
      case "Resolved": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold text-gray-900"
          >
            Support Tickets
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            New Ticket
          </motion.button>
        </div>

        <div className="space-y-4">
          {tickets.map((ticket, index) => (
            <motion.div
              key={ticket.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{ticket.subject}</h3>
                    <p className="text-sm text-gray-600">Ticket {ticket.id}</p>
                    <p className="text-sm text-gray-500">Created: {ticket.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${getStatusColor(ticket.status)}`}>
                    {ticket.status}
                  </span>
                  <p className="text-sm text-gray-500">Last update: {ticket.lastUpdate}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

