"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
      default: "border-gray-200"
    }
  },
  
  // Header Configuration
  header: {
    logo: "Planted",
    logoLink: "/catalyst-home"
  },
  
  // Page Content (Edit content here!)
  page: {
    title: "About Us",
    content: [
      "Welcome to Planted, your destination for beautiful houseplants and accessories. We're passionate about bringing nature into your home and helping you create green spaces that inspire and rejuvenate.",
      "Our carefully curated collection features a wide variety of plants, from low-maintenance succulents to statement-making tropical plants. Each plant is selected for its beauty, health, and ability to thrive in home environments.",
      "We believe that everyone deserves to experience the joy of plant parenthood, which is why we offer expert care guides, helpful resources, and exceptional customer service to support you on your plant journey."
    ]
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page } = pageConfig;

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose max-w-none"
        >
          <h1 className={`text-4xl font-bold ${colors.text.primary} mb-8`}>{page.title}</h1>
          <div className={`space-y-6 ${colors.text.secondary} leading-relaxed`}>
            {page.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
