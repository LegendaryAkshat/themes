"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";

/**
 * Deep merge utility function
 */
const deepMerge = (target, source) => {
  const output = { ...target };
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach(key => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] });
        } else {
          output[key] = deepMerge(target[key], source[key]);
        }
      } else {
        Object.assign(output, { [key]: source[key] });
      }
    });
  }
  return output;
};

const isObject = (item) => {
  return item && typeof item === 'object' && !Array.isArray(item);
};

// Default configuration for each footer type
const defaultConfigs = {
  footer1: {
    colors: {
      background: "bg-slate-800",
      text: {
        primary: "text-white",
        secondary: "text-gray-300",
        light: "text-gray-400"
      },
      buttons: {
        social: "bg-gray-700 hover:bg-gray-600"
      }
    },
    sections: [
      {
        title: "Help & Support",
        content: {
          address: "685 Market Street, La Vega, LA 95820, United States",
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
      }
    ]
  },
  footer2: {
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
      }
    ],
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
  },
  footer3: {
    brand: {
      name: "BrandName",
      description: "Crafting exceptional experiences through thoughtful design and unwavering commitment to quality."
    },
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
    footerSections: [
      {
        title: "Company",
        links: [
          { name: "About Us", href: "#" },
          { name: "Our Story", href: "#" }
        ]
      }
    ],
    socialLinks: [
      { icon: "Facebook", href: "#", label: "Facebook" },
      { icon: "Twitter", href: "#", label: "Twitter" }
    ],
    newsletter: {
      enabled: true,
      title: "Stay Updated",
      description: "Subscribe to our newsletter for the latest updates and exclusive offers.",
      placeholder: "Enter your email",
      buttonText: "Subscribe"
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} BrandName. All rights reserved.`,
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" }
      ]
    }
  },
  ecomusFooter: {
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
    footerLinks: {
      help: [
        { name: "Shipping & Delivery", href: "#" },
        { name: "Returns", href: "#" }
      ],
      account: [
        { name: "Login / Register", href: "#" },
        { name: "Cart", href: "#" }
      ],
      quickLink: [
        { name: "Privacy Policy", href: "#" },
        { name: "Refund Policy", href: "#" }
      ]
    },
    contact: {
      address: "685 Market Street, Las Vegas, LA 95820, United States.",
      phone: "(+099) 532-786-9843",
      email: "support@example.com"
    },
    socialLinks: [
      { icon: "Facebook", href: "#", label: "Facebook" },
      { icon: "Twitter", href: "#", label: "Twitter" }
    ],
    appDownload: {
      enabled: true,
      description: "Get started in seconds – it's fast, free, and easy!",
      buttons: [
        { text: "Download on the App Store", href: "#" },
        { text: "Get it on Google Play", href: "#" }
      ]
    },
    footer: {
      copyright: "© 2025. All rights reserved by Pimjo.",
      paymentText: "We Accept:",
      paymentMethods: ["Visa", "PayPal", "Master", "Apple", "Google"]
    }
  }
};

/**
 * Footer Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "footer")
 * @param {string} props.type - Footer type: "footer1" | "footer2" | "footer3" | "ecomusFooter" (default: "footer1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function Footer({
  component = "footer",
  type = "footer1",
  content = {}
}) {
  // Validate footer type
  const validTypes = ["footer1", "footer2", "footer3", "ecomusFooter"];
  const footerType = validTypes.includes(type) ? type : "footer1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[footerType] || defaultConfigs.footer1;
  
  // Get custom config from content prop
  const customConfig = content[footerType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`Footer: Invalid config for type "${footerType}", using defaults`);
    return <Footer1 config={defaultConfigs.footer1} />;
  }
  
  // Route to appropriate footer component
  if (footerType === "footer1") {
    if (!config.sections || !Array.isArray(config.sections) || config.sections.length === 0) {
      console.warn("Footer1: No sections provided, using default");
      config.sections = defaultConfigs.footer1.sections;
    }
    return <Footer1 config={config} />;
  }
  
  if (footerType === "footer2") {
    if (!config.sections || !Array.isArray(config.sections) || config.sections.length === 0) {
      console.warn("Footer2: No sections provided, using default");
      config.sections = defaultConfigs.footer2.sections;
    }
    return <Footer2 config={config} />;
  }
  
  if (footerType === "footer3") {
    if (!config.footerSections || !Array.isArray(config.footerSections) || config.footerSections.length === 0) {
      console.warn("Footer3: No footer sections provided, using default");
      config.footerSections = defaultConfigs.footer3.footerSections;
    }
    return <Footer3 config={config} />;
  }
  
  if (footerType === "ecomusFooter") {
    if (!config.footerLinks || typeof config.footerLinks !== 'object') {
      console.warn("EcomusFooter: No footer links provided, using default");
      config.footerLinks = defaultConfigs.ecomusFooter.footerLinks;
    }
    return <EcomusFooter config={config} />;
  }
  
  // Default fallback
  return null;
}

// Footer 1 Component - Simple sections
function Footer1({ config }) {
  const colors = config?.colors || defaultConfigs.footer1.colors;
  const sections = config?.sections || defaultConfigs.footer1.sections;

  return (
    <footer className={`${colors.background} ${colors.text.secondary}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              {section.title && (
                <h3 className={`${colors.text.primary} font-bold text-lg mb-4`}>{section.title}</h3>
              )}
              
              {section.content && (
                <ul className="space-y-2 text-sm">
                  {section.content.address && (
                    <li>{section.content.address}</li>
                  )}
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
                    social.enabled && (
                      <a key={socialIndex} href={social.href} className={`w-8 h-8 ${colors.buttons.social} transition-colors flex items-center justify-center rounded-full`}>
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </a>
                    )
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
                        app.enabled && (
                          <a key={appIndex} href={app.href} className="block">
                            <div className={`w-32 h-10 ${colors.buttons.social} transition-colors rounded-lg`}></div>
                          </a>
                        )
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

// Footer 2 Component - With footer bottom
function Footer2({ config }) {
  const colors = config?.colors || defaultConfigs.footer2.colors;
  const sections = config?.sections || defaultConfigs.footer2.sections;
  const footer = config?.footer || defaultConfigs.footer2.footer;

  return (
    <footer className={`${colors.background} ${colors.text.secondary}`}>
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {sections.map((section, index) => (
            <div key={index}>
              {section.title && (
                <h3 className={`${colors.text.primary} font-bold text-lg mb-4`}>{section.title}</h3>
              )}
              
              {section.content && (
                <ul className="space-y-2 text-sm">
                  {section.content.address && (
                    <li>{section.content.address}</li>
                  )}
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
                    social.enabled && (
                      <a key={socialIndex} href={social.href} className={`w-8 h-8 ${colors.buttons.social} transition-colors flex items-center justify-center rounded-full`}>
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </a>
                    )
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
                        app.enabled && (
                          <a key={appIndex} href={app.href} className="block">
                            <div className={`w-32 h-10 ${colors.buttons.social} transition-colors rounded-lg`}></div>
                          </a>
                        )
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
        </div>
        
        {footer && (
          <div className={`border-t ${colors.borders.default} pt-8`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {footer.copyright && (
                <p className={`text-sm ${colors.text.light}`}>
                  {footer.copyright}{" "}
                  {footer.copyrightLink && (
                    <>
                      <a href={footer.copyrightLink.href} className={colors.text.link}>
                        {footer.copyrightLink.text}
                      </a>.
                    </>
                  )}
                </p>
              )}
              {footer.paymentText && footer.paymentMethods && (
                <div className="flex items-center gap-4">
                  <span className={`text-sm ${colors.text.light}`}>{footer.paymentText}</span>
                  <div className="flex gap-2">
                    {footer.paymentMethods.map((method, index) => (
                      method.enabled && (
                        <div key={index} className={`w-12 h-8 ${colors.buttons.social} rounded`}></div>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

// Footer 3 Component - Comprehensive with brand and newsletter
function Footer3({ config }) {
  const brand = config?.brand || defaultConfigs.footer3.brand;
  const colors = config?.colors || defaultConfigs.footer3.colors;
  const contactInfo = config?.contactInfo || defaultConfigs.footer3.contactInfo;
  const footerSections = config?.footerSections || defaultConfigs.footer3.footerSections;
  const socialLinks = config?.socialLinks || defaultConfigs.footer3.socialLinks;
  const newsletter = config?.newsletter || defaultConfigs.footer3.newsletter;
  const footer = config?.footer || defaultConfigs.footer3.footer;

  const iconMap = {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube
  };

  return (
    <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            {brand.name && (
              <h2 className={`text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent`}>
                {brand.name}
              </h2>
            )}
            {brand.description && (
              <p className={`${colors.text.secondary} mb-6 leading-relaxed`}>
                {brand.description}
              </p>
            )}
            
            {contactInfo && contactInfo.enabled && contactInfo.items && (
              <div className="space-y-3 mb-6">
                {contactInfo.items.map((item, index) => {
                  const Icon = iconMap[item.icon];
                  if (!Icon) return null;
                  return (
                    <div key={index} className={`flex items-center gap-3 ${colors.text.secondary}`}>
                      <Icon className={`w-5 h-5 ${colors.text.accent} flex-shrink-0`} />
                      <span className="text-sm">{item.value}</span>
                    </div>
                  );
                })}
              </div>
            )}

            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = iconMap[social.icon];
                  if (!Icon) return null;
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
            )}
          </div>

          {footerSections.map((section, index) => (
            <div key={index}>
              {section.title && (
                <h3 className={`font-bold ${colors.text.primary} mb-4`}>{section.title}</h3>
              )}
              {section.links && (
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
              )}
            </div>
          ))}
        </div>

        {newsletter && newsletter.enabled && (
          <div className="border-t border-gray-800 pt-8 mb-8">
            <div className="max-w-md">
              {newsletter.title && (
                <h3 className={`text-lg font-bold mb-3`}>{newsletter.title}</h3>
              )}
              {newsletter.description && (
                <p className={`${colors.text.secondary} text-sm mb-4`}>
                  {newsletter.description}
                </p>
              )}
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

        {footer && (
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {footer.copyright && (
              <p className={`${colors.text.secondary} text-sm`}>
                {footer.copyright}
              </p>
            )}
            {footer.links && footer.links.length > 0 && (
              <div className={`flex items-center gap-6 text-sm ${colors.text.secondary}`}>
                {footer.links.map((link, index) => (
                  <a key={index} href={link.href} className={`hover:${colors.text.primary} transition-colors`}>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </motion.div>
    </footer>
  );
}

// Ecomus Footer Component
function EcomusFooter({ config }) {
  const colors = config?.colors || defaultConfigs.ecomusFooter.colors;
  const footerLinks = config?.footerLinks || defaultConfigs.ecomusFooter.footerLinks;
  const contact = config?.contact || defaultConfigs.ecomusFooter.contact;
  const socialLinks = config?.socialLinks || defaultConfigs.ecomusFooter.socialLinks;
  const appDownload = config?.appDownload || defaultConfigs.ecomusFooter.appDownload;
  const footer = config?.footer || defaultConfigs.ecomusFooter.footer;

  const iconMap = {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin
  };

  return (
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
              {contact.address && (
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-400 mt-1" />
                  <p className={`${colors.text.secondary} text-sm`}>
                    {contact.address}
                  </p>
                </div>
              )}
              {contact.phone && (
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-400" />
                  <p className={`${colors.text.secondary} text-sm`}>{contact.phone}</p>
                </div>
              )}
              {contact.email && (
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <p className={`${colors.text.secondary} text-sm`}>{contact.email}</p>
                </div>
              )}
            </div>
          </motion.div>

          {footerLinks.account && (
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
          )}

          {footerLinks.quickLink && (
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
          )}

          {appDownload && appDownload.enabled && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h3 className="text-lg font-semibold mb-6">Download App</h3>
              {appDownload.description && (
                <p className={`${colors.text.secondary} text-sm mb-4`}>
                  {appDownload.description}
                </p>
              )}
              {appDownload.buttons && (
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
              )}
            </motion.div>
          )}
        </div>

        {footer && (
          <div className={`border-t ${colors.borders.default} pt-8`}>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {footer.copyright && (
                <p className={`${colors.text.secondary} text-sm`}>
                  {footer.copyright}
                </p>
              )}
              {footer.paymentText && footer.paymentMethods && (
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
              )}
              {socialLinks && socialLinks.length > 0 && (
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = iconMap[social.icon];
                    if (!Icon) return null;
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
              )}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}

