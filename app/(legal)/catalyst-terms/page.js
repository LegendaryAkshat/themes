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
    title: "Terms of Service"
  },
  
  // Sections (Edit sections here!)
  sections: [
    {
      title: "Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "Product Information",
      content: "We strive to provide accurate product descriptions and images. However, we do not warrant that product descriptions or other content is accurate, complete, or error-free."
    },
    {
      title: "Returns and Refunds",
      content: "We offer a 30-day return policy for unused items in their original packaging. Plants must be returned in healthy condition."
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
