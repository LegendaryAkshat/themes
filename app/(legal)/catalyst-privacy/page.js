"use client";

import { motion } from "framer-motion";
import Link from "next/link";

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
      secondary: "text-gray-700"
    },
    borders: {
      default: "border-gray-200"
    }
  },
  
  // Page Content
  page: {
    title: "Privacy Policy"
  },
  
  // Sections (Edit sections here!)
  sections: [
    {
      title: "Information We Collect",
      content: "We collect information that you provide directly to us, including when you create an account, make a purchase, or contact us for support."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect to process your orders, communicate with you, and improve our services."
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction."
    }
  ]
};

export default function Page() {
  const { brand, colors, page, sections } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose max-w-none"
        >
          <h1 className={`text-4xl font-bold ${colors.text.primary} mb-8`}>{page.title}</h1>
          <div className={`space-y-6 ${colors.text.secondary} leading-relaxed`}>
            {sections.map((section, index) => (
              <section key={index}>
                <h2 className={`text-2xl font-bold ${colors.text.primary} mt-8 mb-4`}>{section.title}</h2>
                <p>{section.content}</p>
              </section>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
