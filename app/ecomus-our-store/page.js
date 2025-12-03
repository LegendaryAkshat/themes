"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

export default function Page() {
  const stores = [
    {
      name: "Downtown Flagship Store",
      address: "123 Fashion Street, New York, NY 10001",
      phone: "+1 (212) 555-1234",
      email: "downtown@store.com",
      hours: "Mon-Sat: 9AM-8PM, Sun: 11AM-6PM",
      image: "🏢"
    },
    {
      name: "Shopping Mall Location",
      address: "456 Shopping Center, Los Angeles, CA 90001",
      phone: "+1 (323) 555-5678",
      email: "mall@store.com",
      hours: "Mon-Sun: 10AM-9PM",
      image: "🏬"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-gray-900 text-center mb-12"
        >
          Our Stores
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-8xl">
                {store.image}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{store.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <p className="text-gray-600">{store.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-600">{store.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <p className="text-gray-600">{store.email}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                    <p className="text-gray-600">{store.hours}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Navigation className="w-5 h-5" />
                  Get Directions
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

