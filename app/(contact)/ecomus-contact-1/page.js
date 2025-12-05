"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-300"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
      icon: {
        blue: "bg-blue-100",
        green: "bg-green-100",
        purple: "bg-purple-100"
      }
    },
    icons: {
      blue: "text-blue-600",
      green: "text-green-600",
      purple: "text-purple-600"
    }
  },
  
  // Page Content
  page: {
    title: "Contact Us"
  },
  
  // Contact Information (Edit contact info here!)
  contact: {
    address: {
      title: "Address",
      icon: "MapPin",
      iconColor: "blue",
      text: "123 Fashion Street, Suite 567, New York, NY 10001"
    },
    phone: {
      title: "Phone",
      icon: "Phone",
      iconColor: "green",
      text: "+1 (212) 555-1234"
    },
    email: {
      title: "Email",
      icon: "Mail",
      iconColor: "purple",
      text: "info@fashionshop.com"
    }
  },
  
  // Form Fields (Edit form fields here!)
  form: {
    fields: {
      name: { label: "Name", placeholder: "Your name", required: true },
      email: { label: "Email", placeholder: "your@email.com", required: true },
      phone: { label: "Phone", placeholder: "+1 (555) 123-4567", required: false },
      message: { label: "Message", placeholder: "Your message...", required: true }
    },
    submitButton: {
      text: "Send Message",
      icon: "Send"
    }
  }
};

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { colors, page, contact, form } = pageConfig;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.text.primary} text-center mb-12`}
        >
          {page.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-start gap-4"
              >
                <div className={`p-3 ${colors.buttons.icon[contact.address.iconColor]} rounded-lg`}>
                  <MapPin className={`w-6 h-6 ${colors.icons[contact.address.iconColor]}`} />
                </div>
                <div>
                  <h3 className={`font-semibold ${colors.text.primary} mb-1`}>{contact.address.title}</h3>
                  <p className={colors.text.secondary}>{contact.address.text}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex items-start gap-4"
              >
                <div className={`p-3 ${colors.buttons.icon[contact.phone.iconColor]} rounded-lg`}>
                  <Phone className={`w-6 h-6 ${colors.icons[contact.phone.iconColor]}`} />
                </div>
                <div>
                  <h3 className={`font-semibold ${colors.text.primary} mb-1`}>{contact.phone.title}</h3>
                  <p className={colors.text.secondary}>{contact.phone.text}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4"
              >
                <div className={`p-3 ${colors.buttons.icon[contact.email.iconColor]} rounded-lg`}>
                  <Mail className={`w-6 h-6 ${colors.icons[contact.email.iconColor]}`} />
                </div>
                <div>
                  <h3 className={`font-semibold ${colors.text.primary} mb-1`}>{contact.email.title}</h3>
                  <p className={colors.text.secondary}>{contact.email.text}</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                  {form.fields.name.label}
                </label>
                <input
                  type="text"
                  required={form.fields.name.required}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 border ${colors.borders.default} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder={form.fields.name.placeholder}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                  {form.fields.email.label}
                </label>
                <input
                  type="email"
                  required={form.fields.email.required}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 border ${colors.borders.default} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder={form.fields.email.placeholder}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                  {form.fields.phone.label}
                </label>
                <input
                  type="tel"
                  required={form.fields.phone.required}
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className={`w-full px-4 py-3 border ${colors.borders.default} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder={form.fields.phone.placeholder}
                />
              </div>
              <div>
                <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                  {form.fields.message.label}
                </label>
                <textarea
                  rows={5}
                  required={form.fields.message.required}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full px-4 py-3 border ${colors.borders.default} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none`}
                  placeholder={form.fields.message.placeholder}
                />
              </div>
              <button
                type="submit"
                className={`w-full ${colors.buttons.primary} text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors`}
              >
                <Send className="w-5 h-5" />
                {form.submitButton.text}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
