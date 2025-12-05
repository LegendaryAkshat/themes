"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    icons: {
      background: "bg-blue-100",
      color: "text-blue-600"
    }
  },
  
  // Page Content
  page: {
    title: "Terms and Conditions",
    lastUpdated: "March 15, 2024"
  },
  
  // Sections (Edit sections here!)
  sections: [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only."
    },
    {
      title: "3. Disclaimer",
      content: "The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied."
    },
    {
      title: "4. Limitations",
      content: "In no event shall we or our suppliers be liable for any damages arising out of the use or inability to use the materials on this website."
    },
    {
      title: "5. Revisions",
      content: "We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms."
    }
  ]
};

export default function Page() {
  const { colors, page, sections } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className={`inline-block p-4 ${colors.icons.background} rounded-full mb-4`}>
            <FileText className={`w-12 h-12 ${colors.icons.color}`} />
          </div>
          <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{page.title}</h1>
          <p className={colors.text.secondary}>Last updated: {page.lastUpdated}</p>
        </motion.div>

        <div className={`${colors.card} rounded-lg shadow-md p-8 space-y-8`}>
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>{section.title}</h2>
              <p className={`${colors.text.secondary} leading-relaxed`}>{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
