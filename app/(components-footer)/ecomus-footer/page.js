"use client";

import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Page() {
  const footerLinks = {
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
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Help & Support */}
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
                  <p className="text-gray-400 text-sm">
                    685 Market Street, Las Vegas, LA 95820, United States.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-400 text-sm">(+099) 532-786-9843</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <p className="text-gray-400 text-sm">support@example.com</p>
                </div>
              </div>
            </motion.div>

            {/* Account */}
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
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Quick Link */}
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
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Download App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-6">Download App</h3>
              <p className="text-gray-400 text-sm mb-4">
                Get started in seconds – it's fast, free, and easy!
              </p>
              <div className="space-y-3">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  Download on the App Store
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-white text-gray-900 px-4 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  Get it on Google Play
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Social Links & Copyright */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-400 text-sm">
                © 2025. All rights reserved by Pimjo.
              </p>
              <div className="flex items-center gap-4">
                <p className="text-gray-400 text-sm">We Accept:</p>
                <div className="flex gap-2">
                  {["Visa", "PayPal", "Master", "Apple", "Google"].map((method, index) => (
                    <div
                      key={index}
                      className="w-10 h-6 bg-gray-800 rounded border border-gray-700 flex items-center justify-center"
                    >
                      <span className="text-xs text-gray-400">{method}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
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

