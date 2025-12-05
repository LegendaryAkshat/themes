"use client";

import { motion } from "framer-motion";
import { User, Mail, Phone, MapPin, Save } from "lucide-react";
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
    gradients: {
      avatar: "bg-gradient-to-br from-blue-500 to-purple-600"
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
    title: "My Account Details"
  },
  
  // User Information
  user: {
    initials: "JD",
    name: "John Doe",
    memberSince: "2020"
  },
  
  // Form Data (Edit form fields here!)
  form: {
    fields: [
      { icon: "User", label: "First Name", type: "text", defaultValue: "John" },
      { label: "Last Name", type: "text", defaultValue: "Doe" },
      { icon: "Mail", label: "Email", type: "email", defaultValue: "john.doe@example.com" },
      { icon: "Phone", label: "Phone Number", type: "tel", defaultValue: "+1 (212) 555-1234" },
      { label: "Date of Birth", type: "date", defaultValue: "1990-01-01" },
      { label: "Gender", type: "select", defaultValue: "Male", options: ["Male", "Female", "Other"] }
    ],
    submitButton: {
      text: "Save Changes",
      icon: "Save"
    }
  }
};

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: pageConfig.form.fields.find(f => f.label === "First Name")?.defaultValue || "",
    lastName: pageConfig.form.fields.find(f => f.label === "Last Name")?.defaultValue || "",
    email: pageConfig.form.fields.find(f => f.label === "Email")?.defaultValue || "",
    phone: pageConfig.form.fields.find(f => f.label === "Phone Number")?.defaultValue || "",
    dateOfBirth: pageConfig.form.fields.find(f => f.label === "Date of Birth")?.defaultValue || "",
    gender: pageConfig.form.fields.find(f => f.label === "Gender")?.defaultValue || ""
  });

  const { colors, page, user, form } = pageConfig;

  const iconMap = {
    User,
    Mail,
    Phone,
    MapPin,
    Save
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-3xl font-bold ${colors.text.primary} mb-8`}
        >
          {page.title}
        </motion.h1>

        <div className={`${colors.card} rounded-lg shadow-md p-8`}>
          <div className="flex items-center gap-4 mb-8">
            <div className={`w-20 h-20 ${colors.gradients.avatar} rounded-full flex items-center justify-center text-white text-2xl font-bold`}>
              {user.initials}
            </div>
            <div>
              <h3 className={`text-xl font-bold ${colors.text.primary}`}>{user.name}</h3>
              <p className={colors.text.secondary}>Member since {user.memberSince}</p>
            </div>
          </div>

          <form className="space-y-6">
            {form.fields.map((field, index) => (
              <div key={index} className={field.label === "First Name" || field.label === "Last Name" || field.label === "Date of Birth" || field.label === "Gender" ? "grid grid-cols-1 md:grid-cols-2 gap-6" : ""}>
                {field.label === "First Name" || field.label === "Last Name" || field.label === "Date of Birth" || field.label === "Gender" ? (
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
                        value={formData[field.label.toLowerCase().replace(/\s+/g, '')]}
                        onChange={(e) => setFormData({ ...formData, [field.label.toLowerCase().replace(/\s+/g, '')]: e.target.value })}
                        className={`w-full px-4 py-3 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                      >
                        {field.options?.map((option, i) => (
                          <option key={i} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.label.toLowerCase().replace(/\s+/g, '')]}
                        onChange={(e) => setFormData({ ...formData, [field.label.toLowerCase().replace(/\s+/g, '')]: e.target.value })}
                        className={`w-full px-4 py-3 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
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
                    <input
                      type={field.type}
                      value={formData[field.label.toLowerCase().replace(/\s+/g, '')]}
                      onChange={(e) => setFormData({ ...formData, [field.label.toLowerCase().replace(/\s+/g, '')]: e.target.value })}
                      className={`w-full px-4 py-3 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                    />
                  </div>
                )}
              </div>
            ))}

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
