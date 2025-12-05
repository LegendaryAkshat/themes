"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "BrandName",
    description: "Crafting exceptional experiences through thoughtful design and unwavering commitment to quality."
  },
  
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900",
    text: {
      primary: "text-white",
      secondary: "text-gray-400",
      accent: "text-blue-400"
    },
    buttons: {
      primary: "bg-gradient-to-r from-blue-600 to-purple-600"
    }
  },
  
  // Contact Information (Edit contact details here!)
  contactInfo: {
    enabled: true,
    items: [
      {
        icon: "MapPin",
        label: "Address",
        value: "123 Design Street, Creative City, CC 12345"
      },
      {
        icon: "Phone",
        label: "Phone",
        value: "+1 (555) 123-4567"
      },
      {
        icon: "Mail",
        label: "Email",
        value: "hello@brandname.com"
      }
    ]
  },
  
  // Footer Sections (Edit links here!)
  footerSections: [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Our Story", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Help Center", href: "#" },
        { name: "Contact Us", href: "#" },
        { name: "Shipping Info", href: "#" },
        { name: "Returns", href: "#" },
        { name: "Size Guide", href: "#" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Refund Policy", href: "#" },
        { name: "Accessibility", href: "#" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Style Guide", href: "#" },
        { name: "Gift Cards", href: "#" },
        { name: "Store Locator", href: "#" },
        { name: "Sitemap", href: "#" }
      ]
    }
  ],
  
  // Social Links (Edit social media links here!)
  socialLinks: [
    { icon: "Facebook", href: "#", label: "Facebook" },
    { icon: "Twitter", href: "#", label: "Twitter" },
    { icon: "Instagram", href: "#", label: "Instagram" },
    { icon: "Linkedin", href: "#", label: "LinkedIn" },
    { icon: "Youtube", href: "#", label: "YouTube" }
  ],
  
  // Newsletter Section
  newsletter: {
    enabled: true,
    title: "Stay Updated",
    description: "Subscribe to our newsletter for the latest updates and exclusive offers.",
    placeholder: "Enter your email",
    buttonText: "Subscribe"
  },
  
  // Footer Bottom
  footer: {
    copyright: `© ${new Date().getFullYear()} BrandName. All rights reserved.`,
    links: [
      { label: "Privacy", href: "#" },
      { label: "Terms", href: "#" },
      { label: "Cookies", href: "#" }
    ]
  }
};

export default function Page() {
  const { brand, colors, contactInfo, footerSections, socialLinks, newsletter, footer } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <h2 className={`text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
                {brand.name}
              </h2>
              <p className={`${colors.text.secondary} mb-6 leading-relaxed`}>
                {brand.description}
              </p>
              
              {/* Contact Info */}
              {contactInfo.enabled && (
                <div className="space-y-3 mb-6">
                  {contactInfo.items.map((item, index) => {
                    const Icon = item.icon === "Mail" ? Mail : item.icon === "Phone" ? Phone : MapPin;
                    return (
                      <div key={index} className={`flex items-center gap-3 ${colors.text.secondary}`}>
                        <Icon className={`w-5 h-5 ${colors.text.accent} flex-shrink-0`} />
                        <span className="text-sm">{item.value}</span>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon === "Facebook" ? Facebook : 
                             social.icon === "Twitter" ? Twitter :
                             social.icon === "Instagram" ? Instagram :
                             social.icon === "Linkedin" ? Linkedin : Youtube;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Link Columns */}
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className={`font-bold ${colors.text.primary} mb-4`}>{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors text-sm flex items-center gap-2 group`}
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          {newsletter.enabled && (
            <div className="border-t border-gray-800 pt-8 mb-8">
              <div className="max-w-md">
                <h3 className={`text-lg font-bold mb-3`}>{newsletter.title}</h3>
                <p className={`${colors.text.secondary} text-sm mb-4`}>
                  {newsletter.description}
                </p>
                <form className="flex gap-2">
                  <input
                    type="email"
                    placeholder={newsletter.placeholder}
                    className={`flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 ${colors.text.primary} placeholder-gray-500`}
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className={`px-6 py-3 ${colors.buttons.primary} rounded-lg font-semibold hover:shadow-lg transition-shadow`}
                  >
                    {newsletter.buttonText}
                  </motion.button>
                </form>
              </div>
            </div>
          )}

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className={`${colors.text.secondary} text-sm`}>
              {footer.copyright}
            </p>
            <div className={`flex items-center gap-6 text-sm ${colors.text.secondary}`}>
              {footer.links.map((link, index) => (
                <a key={index} href={link.href} className={`hover:${colors.text.primary} transition-colors`}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </footer>
    </main>
  );
}
