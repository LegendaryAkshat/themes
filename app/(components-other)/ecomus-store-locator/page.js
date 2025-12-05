"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: {
      container: "bg-white",
      hover: "hover:shadow-xl"
    },
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    buttons: {
      directions: "bg-blue-600 text-white hover:bg-blue-700"
    },
    gradients: {
      map: "bg-gradient-to-br from-blue-100 to-purple-100"
    },
    icons: {
      map: "text-blue-600",
      info: "text-gray-400"
    }
  },
  
  // Page Header
  header: {
    title: "Store Locator"
  },
  
  // Stores (Edit stores here!)
  stores: [
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
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "md:grid-cols-2",
      desktop: "lg:grid-cols-3"
    },
    gap: "gap-8"
  },
  
  // Icon Map
  iconMap: {
    MapPin,
    Phone,
    Mail,
    Clock
  },
  
  // UI Text
  ui: {
    getDirections: "Get Directions"
  }
};

export default function Page() {
  const { colors, header, stores, grid, iconMap, ui } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.text.primary} text-center mb-12`}
        >
          {header.title}
        </motion.h1>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {stores.map((store, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card.container} rounded-xl shadow-md ${colors.card.hover} transition-all p-6`}
            >
              <div className={`aspect-video ${colors.gradients.map} rounded-lg mb-4 flex items-center justify-center`}>
                <MapPin className={`w-12 h-12 ${colors.icons.map}`} />
              </div>
              <h3 className={`text-xl font-bold ${colors.text.primary} mb-4`}>{store.name}</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className={`w-5 h-5 ${colors.icons.info} mt-0.5`} />
                  <p className={`${colors.text.secondary} text-sm`}>{store.address}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className={`w-5 h-5 ${colors.icons.info}`} />
                  <p className={`${colors.text.secondary} text-sm`}>{store.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className={`w-5 h-5 ${colors.icons.info}`} />
                  <p className={`${colors.text.secondary} text-sm`}>{store.email}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className={`w-5 h-5 ${colors.icons.info} mt-0.5`} />
                  <p className={`${colors.text.secondary} text-sm`}>{store.hours}</p>
                </div>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full mt-6 ${colors.buttons.directions} py-3 rounded-lg font-semibold transition-colors`}
              >
                {ui.getDirections}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
