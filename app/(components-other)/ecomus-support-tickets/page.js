"use client";

import { motion } from "framer-motion";
import { MessageSquare, Plus, Clock, CheckCircle } from "lucide-react";
import { useState } from "react";

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
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white"
    },
    icons: {
      ticket: "bg-blue-100 text-blue-600"
    },
    status: {
      open: "bg-blue-100 text-blue-800",
      inProgress: "bg-yellow-100 text-yellow-800",
      resolved: "bg-green-100 text-green-800"
    }
  },
  
  // Page Header
  header: {
    title: "Support Tickets"
  },
  
  // Tickets (Edit tickets here!)
  tickets: [
    {
      id: "#12345",
      subject: "Order Delivery Issue",
      status: "Open",
      date: "March 15, 2024",
      lastUpdate: "2 hours ago",
      link: "/ecomus-ticket-details"
    },
    {
      id: "#12344",
      subject: "Product Return Request",
      status: "In Progress",
      date: "March 12, 2024",
      lastUpdate: "1 day ago",
      link: "/ecomus-ticket-details"
    },
    {
      id: "#12343",
      subject: "Payment Refund",
      status: "Resolved",
      date: "March 10, 2024",
      lastUpdate: "3 days ago",
      link: "/ecomus-ticket-details"
    }
  ],
  
  // Actions
  actions: {
    newTicket: {
      text: "New Ticket",
      icon: "Plus"
    }
  }
};

export default function Page() {
  const [tickets, setTickets] = useState(pageConfig.tickets);
  const { colors, header, tickets: initialTickets, actions } = pageConfig;

  const getStatusColor = (status) => {
    const statusKey = status.toLowerCase().replace(/\s+/g, '');
    return colors.status[statusKey] || colors.status.open;
  };

  const iconMap = {
    MessageSquare,
    Plus,
    Clock,
    CheckCircle
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-3xl font-bold ${colors.text.primary}`}
          >
            {header.title}
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${colors.buttons.primary} px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2`}
          >
            {(() => {
              const PlusIcon = iconMap[actions.newTicket.icon];
              return <PlusIcon className="w-5 h-5" />;
            })()}
            {actions.newTicket.text}
          </motion.button>
        </div>

        <div className="space-y-4">
          {tickets.map((ticket, index) => (
            <motion.a
              key={ticket.id}
              href={ticket.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card} rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer block`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`p-3 ${colors.icons.ticket} rounded-lg`}>
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className={`font-semibold ${colors.text.primary} mb-1`}>{ticket.subject}</h3>
                    <p className={`text-sm ${colors.text.secondary}`}>Ticket {ticket.id}</p>
                    <p className={`text-sm ${colors.text.secondary}`}>Created: {ticket.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-2 ${getStatusColor(ticket.status)}`}>
                    {ticket.status}
                  </span>
                  <p className={`text-sm ${colors.text.secondary}`}>Last update: {ticket.lastUpdate}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}
