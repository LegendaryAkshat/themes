"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-900",
    text: {
      primary: "text-white",
      secondary: "text-gray-300"
    },
    borders: {
      default: "border-white/20",
      focus: "border-blue-400"
    },
    buttons: {
      primary: "bg-gradient-to-r from-blue-500 to-purple-500",
      icon: {
        blue: "bg-blue-600",
        green: "bg-green-600",
        purple: "bg-purple-600",
        orange: "bg-orange-600"
      }
    },
    input: {
      background: "bg-white/10",
      placeholder: "placeholder-gray-400"
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
    },
    hours: {
      title: "Business Hours",
      icon: "Clock",
      iconColor: "orange",
      text: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed"
    }
  },
  
  // Form Fields (Edit form fields here!)
  form: {
    fields: {
      name: { label: "Name", placeholder: "Your name", required: true },
      email: { label: "Email", placeholder: "your@email.com", required: true },
      subject: { label: "Subject", placeholder: "Subject", required: true },
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
    subject: "",
    message: ""
  });
  const { colors, page, contact, form } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          {page.title}
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-4"
            >
              <div className={`p-3 ${colors.buttons.icon[contact.address.iconColor]} rounded-lg`}>
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{contact.address.title}</h3>
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
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{contact.phone.title}</h3>
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
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{contact.email.title}</h3>
                <p className={colors.text.secondary}>{contact.email.text}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className={`p-3 ${colors.buttons.icon[contact.hours.iconColor]} rounded-lg`}>
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{contact.hours.title}</h3>
                <p className={`${colors.text.secondary} whitespace-pre-line`}>{contact.hours.text}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className={`block text-sm font-semibold text-gray-300 mb-2`}>
                  {form.fields.name.label}
                </label>
                <input
                  type="text"
                  required={form.fields.name.required}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className={`w-full px-4 py-3 ${colors.input.background} border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none text-white ${colors.input.placeholder} transition-colors`}
                  placeholder={form.fields.name.placeholder}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold text-gray-300 mb-2`}>
                  {form.fields.email.label}
                </label>
                <input
                  type="email"
                  required={form.fields.email.required}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className={`w-full px-4 py-3 ${colors.input.background} border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none text-white ${colors.input.placeholder} transition-colors`}
                  placeholder={form.fields.email.placeholder}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold text-gray-300 mb-2`}>
                  {form.fields.subject.label}
                </label>
                <input
                  type="text"
                  required={form.fields.subject.required}
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className={`w-full px-4 py-3 ${colors.input.background} border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none text-white ${colors.input.placeholder} transition-colors`}
                  placeholder={form.fields.subject.placeholder}
                />
              </div>
              <div>
                <label className={`block text-sm font-semibold text-gray-300 mb-2`}>
                  {form.fields.message.label}
                </label>
                <textarea
                  rows={5}
                  required={form.fields.message.required}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className={`w-full px-4 py-3 ${colors.input.background} border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none text-white ${colors.input.placeholder} transition-colors resize-none`}
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
