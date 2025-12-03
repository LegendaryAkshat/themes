"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

export default function Page() {
  const stores = [
    {
      name: "Downtown Store",
      address: "123 Fashion Street, New York, NY 10001",
      phone: "+1 (212) 555-1234",
      email: "downtown@store.com",
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM"
    },
    {
      name: "Mall Location",
      address: "456 Shopping Center, Los Angeles, CA 90001",
      phone: "+1 (323) 555-5678",
      email: "mall@store.com",
      hours: "Mon-Sun: 10AM-9PM"
    },
    {
      name: "Outlet Store",
      address: "789 Outlet Blvd, Miami, FL 33101",
      phone: "+1 (305) 555-9012",
      email: "outlet@store.com",
      hours: "Mon-Sat: 10AM-8PM, Sun: 12PM-6PM"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Store Locator
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-6"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mb-4 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{store.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                  <p className="text-gray-600 text-sm">{store.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-600 text-sm">{store.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-600 text-sm">{store.email}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                  <p className="text-gray-600 text-sm">{store.hours}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Directions
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

