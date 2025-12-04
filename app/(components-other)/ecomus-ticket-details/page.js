"use client";

import { motion } from "framer-motion";
import { MessageSquare, Send, User, Clock } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [message, setMessage] = useState("");

  const ticket = {
    id: "#12345",
    subject: "Order Delivery Issue",
    status: "Open",
    date: "March 15, 2024",
    messages: [
      {
        id: 1,
        sender: "You",
        text: "I haven't received my order yet. It was supposed to arrive yesterday.",
        time: "2 hours ago"
      },
      {
        id: 2,
        sender: "Support",
        text: "We apologize for the delay. Let me check the tracking information for you.",
        time: "1 hour ago"
      }
    ]
  };

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-lg shadow-md p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{ticket.subject}</h1>
              <p className="text-gray-600">Ticket {ticket.id} • {ticket.date}</p>
            </div>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              {ticket.status}
            </span>
          </div>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Conversation</h2>
          <div className="space-y-4">
            {ticket.messages.map((msg, index) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 rounded-lg ${
                  msg.sender === "You" ? "bg-blue-50 ml-8" : "bg-gray-50 mr-8"
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <User className="w-4 h-4 text-gray-600" />
                  <span className="font-semibold text-gray-900">{msg.sender}</span>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {msg.time}
                  </span>
                </div>
                <p className="text-gray-700">{msg.text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <form className="flex gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send
            </motion.button>
          </form>
        </div>
      </div>
    </main>
  );
}

