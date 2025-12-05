"use client";

import { motion } from "framer-motion";
import { MapPin, Save } from "lucide-react";
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
      secondary: "text-gray-700"
    },
    inputs: {
      border: "border-gray-300",
      focus: "focus:ring-blue-500"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700"
    }
  },
  
  // Page Content
  page: {
    title: "Add New Address"
  },
  
  // Form Configuration
  form: {
    addressTypes: ["Home", "Work", "Other"],
    fields: [
      { label: "Address Type", type: "select", name: "type", defaultValue: "Home" },
      { label: "First Name", type: "text", name: "firstName", required: true },
      { label: "Last Name", type: "text", name: "lastName", required: true },
      { label: "Street Address", type: "text", name: "address", icon: "MapPin", required: true },
      { label: "City", type: "text", name: "city", required: true },
      { label: "State", type: "text", name: "state", required: true },
      { label: "ZIP Code", type: "text", name: "zipCode", required: true },
      { label: "Phone Number", type: "tel", name: "phone", required: true }
    ],
    checkbox: {
      label: "Set as default address",
      name: "isDefault"
    },
    submitButton: {
      text: "Save Address",
      icon: "Save"
    }
  }
};

export default function Page() {
  const [formData, setFormData] = useState({
    type: pageConfig.form.addressTypes[0],
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    isDefault: false
  });

  const { colors, page, form } = pageConfig;

  const iconMap = {
    MapPin,
    Save
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          {page.title}
        </motion.h1>

        <div className={`${colors.card} rounded-lg shadow-md p-8`}>
          <form className="space-y-6">
            {form.fields.map((field, index) => (
              <div key={index} className={field.label === "First Name" || field.label === "Last Name" || field.label === "City" || field.label === "State" || field.label === "ZIP Code" ? "grid grid-cols-1 md:grid-cols-3 gap-6" : ""}>
                {field.label === "First Name" || field.label === "Last Name" || field.label === "City" || field.label === "State" || field.label === "ZIP Code" ? (
                  <div className={field.label === "City" || field.label === "State" || field.label === "ZIP Code" ? "" : field.label === "First Name" || field.label === "Last Name" ? "md:col-span-1" : ""}>
                    <label className={`block text-sm font-semibold ${colors.text.secondary} mb-2 ${field.icon ? 'flex items-center gap-2' : ''}`}>
                      {field.icon && (() => {
                        const Icon = iconMap[field.icon];
                        return <Icon className="w-4 h-4" />;
                      })()}
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        value={formData[field.name]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className={`w-full px-4 py-3 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                      >
                        {form.addressTypes.map((type, i) => (
                          <option key={i} value={type}>{type}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.name]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className={`w-full px-4 py-3 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                        required={field.required}
                      />
                    )}
                  </div>
                ) : (
                  <div>
                    <label className={`block text-sm font-semibold ${colors.text.secondary} mb-2 ${field.icon ? 'flex items-center gap-2' : ''}`}>
                      {field.icon && (() => {
                        const Icon = iconMap[field.icon];
                        return <Icon className="w-4 h-4" />;
                      })()}
                      {field.label}
                    </label>
                    {field.type === "select" ? (
                      <select
                        value={formData[field.name]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className={`w-full px-4 py-3 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                      >
                        {form.addressTypes.map((type, i) => (
                          <option key={i} value={type}>{type}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.name]}
                        onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                        className={`w-full px-4 py-3 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                        required={field.required}
                      />
                    )}
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id={form.checkbox.name}
                checked={formData[form.checkbox.name]}
                onChange={(e) => setFormData({ ...formData, [form.checkbox.name]: e.target.checked })}
                className="w-4 h-4 rounded"
              />
              <label htmlFor={form.checkbox.name} className={`text-sm ${colors.text.secondary}`}>
                {form.checkbox.label}
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full ${colors.buttons.primary} text-white py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
            >
              {(() => {
                const SaveIcon = iconMap[form.submitButton.icon];
                return <SaveIcon className="w-5 h-5" />;
              })()}
              {form.submitButton.text}
            </motion.button>
          </form>
        </div>
      </div>
    </main>
  );
}
