"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Plus, Edit, Trash2 } from "lucide-react";

export default function Page() {
  const addresses = [
    {
      id: 1,
      name: "Home",
      address: "123 Plant St",
      city: "Planttown",
      state: "CA",
      zip: "12345",
      isDefault: true
    },
    {
      id: 2,
      name: "Work",
      address: "456 Office Blvd",
      city: "Planttown",
      state: "CA",
      zip: "12345",
      isDefault: false
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Planted
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Addresses</h1>
          <button className="flex items-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-800">
            <Plus className="w-4 h-4" />
            Add Address
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {addresses.map((address, index) => (
            <motion.div
              key={address.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-6 relative"
            >
              {address.isDefault && (
                <span className="absolute top-4 right-4 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded">
                  Default
                </span>
              )}
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-900">{address.name}</h3>
              </div>
              <div className="text-gray-700 space-y-1 mb-4">
                <p>{address.address}</p>
                <p>{address.city}, {address.state} {address.zip}</p>
              </div>
              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-sm">
                  <Edit className="w-4 h-4" />
                  Edit
                </button>
                <button className="flex items-center gap-2 px-3 py-2 border border-red-300 text-red-600 rounded-md hover:bg-red-50 text-sm">
                  <Trash2 className="w-4 h-4" />
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

