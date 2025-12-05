"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";

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
    gradients: {
      image: "bg-gradient-to-br from-blue-100 to-purple-100"
    }
  },
  
  // Page Header
  header: {
    title: "Our Stores"
  },
  
  // Stores (Edit stores here!)
  stores: [
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
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      desktop: "md:grid-cols-2"
    },
    gap: "gap-8"
  }
};

export default function Page() {
  const { colors, header, stores, grid } = pageConfig;

  const iconMap = {
    MapPin,
    Phone,
    Mail,
    Clock,
    Navigation
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.text.primary} text-center mb-12`}
        >
          {header.title}
        </motion.h1>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.desktop} ${grid.gap}`}>
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`${colors.card} rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden`}
            >
              <div className={`aspect-video ${colors.gradients.image} flex items-center justify-center text-8xl`}>
                {store.image}
              </div>
              <div className="p-8">
                <h3 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>{store.name}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                    <p className={colors.text.secondary}>{store.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-gray-400" />
                    <p className={colors.text.secondary}>{store.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-gray-400" />
                    <p className={colors.text.secondary}>{store.email}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
                    <p className={colors.text.secondary}>{store.hours}</p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-6 ${colors.buttons.primary} py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
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
