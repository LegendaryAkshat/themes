"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Phone, MapPin } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Planted",
    homeLink: "/catalyst-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800"
    }
  },
  
  // Header Configuration
  header: {
    logo: "Planted",
    logoLink: "/catalyst-home"
  },
  
  // Page Content
  page: {
    title: "Contact Us"
  },
  
  // Contact Information
  contactInfo: {
    enabled: true,
    items: [
      {
        icon: "Mail",
        label: "Email",
        value: "hello@planted.com",
        link: "mailto:hello@planted.com"
      },
      {
        icon: "Phone",
        label: "Phone",
        value: "+1 (555) 123-4567",
        link: "tel:+15551234567"
      },
      {
        icon: "MapPin",
        label: "Address",
        value: "123 Plant St, Planttown, USA",
        link: null
      }
    ]
  },
  
  // Contact Form
  form: {
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        required: true
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        required: true
      },
      {
        name: "message",
        label: "Message",
        type: "textarea",
        rows: 6,
        required: true
      }
    ],
    submitText: "Send Message",
    successMessage: "Thank you! Your message has been sent."
  }
};

export default function Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const { brand, colors, header, page, contactInfo, form } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      {/* Header */}
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={header.logoLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {header.logo}
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className={`text-4xl font-bold ${colors.text.primary} mb-12 text-center`}>{page.title}</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form className="space-y-6">
              {form.fields.map((field, index) => (
                <div key={index}>
                  <label className={`block text-sm font-medium ${colors.text.primary} mb-2`}>
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      value={formData[field.name]}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      rows={field.rows || 4}
                      className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                    />
                  ) : (
                    <input
                      type={field.type}
                      value={formData[field.name]}
                      onChange={(e) => setFormData({...formData, [field.name]: e.target.value})}
                      className={`w-full px-4 py-3 border ${colors.borders.input} rounded-md focus:outline-none focus:ring-2 focus:ring-gray-900`}
                    />
                  )}
                </div>
              ))}
              <button
                type="submit"
                className={`w-full ${colors.buttons.primary} px-6 py-3 rounded-md font-semibold transition-colors`}
              >
                {form.submitText}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          {contactInfo.enabled && (
            <div>
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>Get in Touch</h2>
              <div className="space-y-6">
                {contactInfo.items.map((item, index) => {
                  const Icon = item.icon === "Mail" ? Mail : item.icon === "Phone" ? Phone : MapPin;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-gray-100 rounded-lg">
                        <Icon className={`w-5 h-5 ${colors.text.secondary}`} />
                      </div>
                      <div>
                        <p className={`text-sm font-medium ${colors.text.secondary} mb-1`}>{item.label}</p>
                        {item.link ? (
                          <Link href={item.link} className={`${colors.text.primary} hover:underline`}>
                            {item.value}
                          </Link>
                        ) : (
                          <p className={colors.text.primary}>{item.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
