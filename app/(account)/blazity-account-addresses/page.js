"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Plus, Edit, Trash2 } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Acme",
    homeLink: "/blazity-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-700"
    },
    borders: {
      default: "border-gray-200",
      danger: "border-red-300"
    },
    buttons: {
      primary: "bg-gray-900 hover:bg-gray-800",
      secondary: "border border-gray-300 hover:bg-gray-50",
      danger: "border-red-300 text-red-600 hover:bg-red-50"
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
      name: "Home",
      address: "123 Main St",
      city: "City",
      state: "State",
      zip: "12345",
      isDefault: true
    },
    {
      id: 2,
      name: "Work",
      address: "456 Office Blvd",
      city: "City",
      state: "State",
      zip: "12345",
      isDefault: false
    }
  ],
  
  // Actions
  actions: {
    addAddress: {
      text: "Add Address",
      icon: "Plus",
      enabled: true
    },
    edit: {
      text: "Edit",
      icon: "Edit",
      enabled: true
    },
    delete: {
      text: "Delete",
      icon: "Trash2",
      enabled: true
    }
  }
};

export default function Page() {
  const { brand, colors, page, addresses, actions } = pageConfig;

  const iconMap = {
    MapPin,
    Plus,
    Edit,
    Trash2
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} ${colors.card}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className={`text-3xl font-bold ${colors.text.primary}`}>{page.title}</h1>
          {actions.addAddress.enabled && (
            <button className={`flex items-center gap-2 ${colors.buttons.primary} text-white px-4 py-2 rounded-md font-semibold transition-colors`}>
              {(() => {
                const PlusIcon = iconMap[actions.addAddress.icon];
                return <PlusIcon className="w-4 h-4" />;
              })()}
              {actions.addAddress.text}
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {addresses.map((address, index) => (
            <motion.div
              key={address.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${colors.card} rounded-lg border ${colors.borders.default} p-6 relative`}
            >
              {address.isDefault && (
                <span className={`absolute top-4 right-4 px-2 py-1 ${colors.buttons.primary} text-white text-xs font-medium rounded`}>
                  Default
                </span>
              )}
              <div className="flex items-center gap-2 mb-4">
                <MapPin className={`w-5 h-5 ${colors.text.secondary}`} />
                <h3 className={`font-semibold ${colors.text.primary}`}>{address.name}</h3>
              </div>
              <div className={`${colors.text.secondary} space-y-1 mb-4`}>
                <p>{address.address}</p>
                <p>{address.city}, {address.state} {address.zip}</p>
              </div>
              <div className="flex gap-2">
                {actions.edit.enabled && (
                  <button className={`flex items-center gap-2 px-3 py-2 ${colors.buttons.secondary} rounded-md text-sm`}>
                    {(() => {
                      const EditIcon = iconMap[actions.edit.icon];
                      return <EditIcon className="w-4 h-4" />;
                    })()}
                    {actions.edit.text}
                  </button>
                )}
                {actions.delete.enabled && (
                  <button className={`flex items-center gap-2 px-3 py-2 ${colors.buttons.danger} rounded-md text-sm`}>
                    {(() => {
                      const Trash2Icon = iconMap[actions.delete.icon];
                      return <Trash2Icon className="w-4 h-4" />;
                    })()}
                    {actions.delete.text}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
