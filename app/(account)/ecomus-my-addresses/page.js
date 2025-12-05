"use client";

import { motion } from "framer-motion";
import { MapPin, Edit, Trash2, Plus } from "lucide-react";
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
    borders: {
      default: "border-transparent",
      active: "ring-2 ring-blue-500"
    },
    badges: {
      default: "bg-blue-100 text-blue-600"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
      secondary: "bg-gray-100 hover:bg-gray-200 text-gray-700",
      danger: "bg-red-100 hover:bg-red-200 text-red-600"
    },
    icons: {
      map: "bg-blue-100 text-blue-600"
    }
  },
  
  // Page Content
  page: {
    title: "My Addresses"
  },
  
  // Addresses (Edit addresses here!)
  addresses: [
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      address: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
      phone: "+1 (212) 555-1234",
      isDefault: true
    },
    {
      id: 2,
      type: "Work",
      name: "John Doe",
      address: "456 Business Ave",
      city: "New York",
      state: "NY",
      zip: "10002",
      phone: "+1 (212) 555-5678",
      isDefault: false
    }
  ],
  
  // Actions
  actions: {
    addButton: {
      text: "Add New Address",
      icon: "Plus"
    },
    editButton: {
      text: "Edit",
      icon: "Edit"
    },
    deleteButton: {
      icon: "Trash2"
    }
  },
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      desktop: "md:grid-cols-2"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const [addresses, setAddresses] = useState(pageConfig.addresses);
  const { colors, page, addresses: initialAddresses, actions, grid } = pageConfig;

  const iconMap = {
    MapPin,
    Edit,
    Trash2,
    Plus
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
            {page.title}
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${colors.buttons.primary} text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2`}
          >
            {(() => {
              const PlusIcon = iconMap[actions.addButton.icon];
              return <PlusIcon className="w-5 h-5" />;
            })()}
            {actions.addButton.text}
          </motion.button>
        </div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.desktop} ${grid.gap}`}>
          {addresses.map((address, index) => (
            <motion.div
              key={address.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card} rounded-lg shadow-md p-6 relative ${
                address.isDefault ? colors.borders.active : colors.borders.default
              }`}
            >
              {address.isDefault && (
                <span className={`absolute top-4 right-4 ${colors.badges.default} px-3 py-1 rounded-full text-xs font-semibold`}>
                  Default
                </span>
              )}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 ${colors.icons.map} rounded-lg`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`font-semibold ${colors.text.primary} mb-1`}>{address.type}</h3>
                  <p className={`${colors.text.secondary} text-sm`}>{address.name}</p>
                </div>
              </div>
              <div className={`${colors.text.secondary} text-sm space-y-1 mb-4`}>
                <p>{address.address}</p>
                <p>{address.city}, {address.state} {address.zip}</p>
                <p>{address.phone}</p>
              </div>
              <div className="flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 ${colors.buttons.secondary} px-4 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
                >
                  {(() => {
                    const EditIcon = iconMap[actions.editButton.icon];
                    return <EditIcon className="w-4 h-4" />;
                  })()}
                  {actions.editButton.text}
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 ${colors.buttons.danger} rounded-lg font-semibold transition-colors`}
                >
                  {(() => {
                    const TrashIcon = iconMap[actions.deleteButton.icon];
                    return <TrashIcon className="w-4 h-4" />;
                  })()}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
