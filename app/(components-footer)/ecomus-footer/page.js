"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    footer: "bg-gray-900",
    text: {
      primary: "text-white",
      secondary: "text-gray-400",
      link: "text-gray-400 hover:text-white"
    },
    borders: {
      default: "border-gray-800"
    },
    buttons: {
      social: "bg-gray-800 hover:bg-blue-600",
      app: "bg-white text-gray-900 hover:bg-gray-100"
    }
  },
  
  // Footer Links (Edit footer links here!)
  footerLinks: {
    help: [
      { name: "Shipping & Delivery", href: "#" },
      { name: "Returns", href: "#" },
      { name: "Help", href: "#" },
      { name: "Size chart", href: "#" }
    ],
    account: [
      { name: "Login / Register", href: "#" },
      { name: "Cart", href: "#" },
      { name: "Wishlist", href: "#" },
      { name: "Shop", href: "#" }
    ],
    quickLink: [
      { name: "Privacy Policy", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Terms of Use", href: "#" },
      { name: "FAQ's", href: "#" },
      { name: "Contact", href: "#" }
    ]
  },
  
  // Contact Information
  contact: {
    address: "685 Market Street, Las Vegas, LA 95820, United States.",
    phone: "(+099) 532-786-9843",
    email: "support@example.com"
  },
  
  // Social Links
  socialLinks: [
    { icon: "Facebook", href: "#", label: "Facebook" },
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Instagram", href: "#", label: "Instagram" },
    { icon: "Linkedin", href: "#", label: "LinkedIn" }
  ],
  
  // App Download
  appDownload: {
    enabled: true,
    description: "Get started in seconds – it's fast, free, and easy!",
    buttons: [
      { text: "Download on the App Store", href: "#" },
      { text: "Get it on Google Play", href: "#" }
    ]
  },
  
  // Footer Bottom
  footer: {
    copyright: "© 2025. All rights reserved by Pimjo.",
    paymentText: "We Accept:",
    paymentMethods: ["Visa", "PayPal", "Master", "Apple", "Google"]
  }
};

export default function Page() {
  const { colors, footerLinks, contact, socialLinks, appDownload, footer } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <footer className={colors.footer}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-6">Help & Support</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <p className={`${colors.text.secondary} text-sm`}>
                    {contact.address}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className={`${colors.text.secondary} text-sm`}>{contact.phone}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <p className={`${colors.text.secondary} text-sm`}>{contact.email}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-6">Account</h3>
              <ul className="space-y-3">
                {footerLinks.account.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`${colors.text.link} transition-colors text-sm`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-6">Quick Link</h3>
              <ul className="space-y-3">
                {footerLinks.quickLink.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`${colors.text.link} transition-colors text-sm`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {appDownload.enabled && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-6">Download App</h3>
                <p className={`${colors.text.secondary} text-sm mb-4`}>
                  {appDownload.description}
                </p>
                <div className="space-y-3">
                  {appDownload.buttons.map((button, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full ${colors.buttons.app} px-4 py-3 rounded-lg font-semibold text-sm transition-colors`}
                    >
                      {button.text}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className={`border-t ${colors.borders.default} pt-8`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className={`${colors.text.secondary} text-sm`}>
                {footer.copyright}
              </p>
              <div className="flex items-center gap-4">
                <p className={`${colors.text.secondary} text-sm`}>{footer.paymentText}</p>
                <div className="flex gap-2">
                  {footer.paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className={`w-10 h-6 ${colors.buttons.social} rounded border ${colors.borders.default} flex items-center justify-center`}
                    >
                      <span className={`text-xs ${colors.text.secondary}`}>{method}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon === "Facebook" ? Facebook : 
                             social.icon === "Twitter" ? Twitter :
                             social.icon === "Instagram" ? Instagram : Linkedin;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 ${colors.buttons.social} rounded-full flex items-center justify-center transition-colors`}
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
