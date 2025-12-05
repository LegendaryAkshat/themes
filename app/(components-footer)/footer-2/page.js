"use client";

import { motion } from "framer-motion";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-slate-800",
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      light: "text-gray-400",
      link: "text-white hover:text-blue-400"
    },
    borders: {
      default: "border-gray-700"
    },
    buttons: {
      social: "bg-gray-700 hover:bg-gray-600"
    }
  },
  
  // Footer Sections (Edit footer content here!)
  sections: [
    {
      title: "Help & Support",
      content: {
        address: "685 Market Street, Las Vegas, LA 95820, United States",
        phone: { text: "(+099) 532-786-9843", href: "tel:+0995327869843" },
        email: { text: "support@example.com", href: "mailto:support@example.com" }
      },
      socialLinks: [
        { href: "#", enabled: true },
        { href: "#", enabled: true },
        { href: "#", enabled: true },
        { href: "#", enabled: true }
      ]
    },
    {
      title: "Account",
      links: [
        { name: "Login / Register", href: "#" },
        { name: "Cart", href: "#" },
        { name: "Wishlist", href: "#" },
        { name: "Shop", href: "#" }
      ]
    },
    {
      title: "Quick Link",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Refund Policy", href: "#" },
        { name: "Terms of Use", href: "#" },
        { name: "FAQ's", href: "#" },
        { name: "Contact", href: "#" }
      ]
    },
    {
      title: "Download App",
      description: "Save $3 With App & New User only",
      appLinks: [
        { href: "#", enabled: true },
        { href: "#", enabled: true }
      ]
    }
  ],
  
  // Footer Bottom
  footer: {
    copyright: "© 2025. All rights reserved by",
    copyrightLink: { text: "Pimjo", href: "#" },
    paymentText: "We Accept:",
    paymentMethods: [
      { enabled: true },
      { enabled: true },
      { enabled: true },
      { enabled: true },
      { enabled: true }
    ]
  }
};

export default function Page() {
  const { colors, sections, footer } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <footer className={`${colors.background} ${colors.text.secondary}`}>
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {sections.map((section, index) => (
                <div key={index}>
                  <h3 className={`${colors.text.primary} font-bold text-lg mb-4`}>{section.title}</h3>
                  
                  {section.content && (
                    <ul className="space-y-2 text-sm">
                      <li>{section.content.address}</li>
                      {section.content.phone && (
                        <li>
                          <a href={section.content.phone.href} className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors flex items-center gap-2`}>
                            <span className="w-4 h-4 bg-gray-500 rounded"></span>
                            {section.content.phone.text}
                          </a>
                        </li>
                      )}
                      {section.content.email && (
                        <li>
                          <a href={section.content.email.href} className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors flex items-center gap-2`}>
                            <span className="w-4 h-4 bg-gray-500 rounded"></span>
                            {section.content.email.text}
                          </a>
                        </li>
                      )}
                    </ul>
                  )}
                  
                  {section.links && (
                    <ul className="space-y-2 text-sm">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          <a href={link.href} className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors`}>
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                  {section.socialLinks && (
                    <div className="flex gap-3 mt-6">
                      {section.socialLinks.map((social, socialIndex) => (
                        <a key={socialIndex} href={social.href} className={`w-8 h-8 ${colors.buttons.social} transition-colors flex items-center justify-center rounded-full`}>
                          <div className="w-4 h-4 bg-gray-400 rounded"></div>
                        </a>
                      ))}
                    </div>
                  )}
                  
                  {section.description && (
                    <>
                      <p className={`text-sm ${colors.text.light} mb-4`}>
                        {section.description}
                      </p>
                      {section.appLinks && (
                        <div className="space-y-3">
                          {section.appLinks.map((app, appIndex) => (
                            <a key={appIndex} href={app.href} className="block">
                              <div className={`w-32 h-10 ${colors.buttons.social} transition-colors rounded-lg`}></div>
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
            
            <div className={`border-t ${colors.borders.default} pt-8`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className={`text-sm ${colors.text.light}`}>
                  {footer.copyright}{" "}
                  <a href={footer.copyrightLink.href} className={colors.text.link}>
                    {footer.copyrightLink.text}
                  </a>.
                </p>
                <div className="flex items-center gap-4">
                  <span className={`text-sm ${colors.text.light}`}>{footer.paymentText}</span>
                  <div className="flex gap-2">
                    {footer.paymentMethods.map((method, index) => (
                      <div key={index} className={`w-12 h-8 ${colors.buttons.social} rounded`}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </motion.section>
    </main>
  );
}
