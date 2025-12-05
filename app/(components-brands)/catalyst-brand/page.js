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
      secondary: "text-gray-600",
      link: "hover:text-gray-900"
    },
    borders: {
      default: "border-gray-200"
    }
  },
  
  // Page Brand (Edit brand details here!)
  pageBrand: {
    name: "Rustic Roots",
    description: "Handcrafted planters and accessories for the modern home. Each piece is carefully designed to complement your plants and enhance your space."
  },
  
  // Breadcrumbs
  breadcrumbs: [
    { label: "Home", href: "/catalyst-home" },
    { label: "Brands", href: "#" },
    { label: "Rustic Roots", href: "#", isActive: true }
  ],
  
  // Products (Edit products here!)
  products: [
    { name: "The Planter by Rustic Roots", price: "$55.00", image: "🪴", link: "/catalyst-product-detail" },
    { name: "Terracotta Pot Set", price: "$45.00", image: "🏺", link: "/catalyst-product-detail" },
    { name: "Hanging Planter", price: "$35.00", image: "🪴", link: "/catalyst-product-detail" }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-2",
      tablet: "sm:grid-cols-3",
      desktop: "lg:grid-cols-4"
    },
    gap: "gap-6"
  }
};

export default function Page() {
  const { brand, colors, pageBrand, breadcrumbs, products, grid } = pageConfig;

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className={`text-sm ${colors.text.secondary} mb-8`}>
          {breadcrumbs.map((crumb, index) => (
            <span key={index}>
              {crumb.isActive ? (
                <span className={colors.text.primary}>{crumb.label}</span>
              ) : (
                <Link href={crumb.href} className={colors.text.link}>
                  {crumb.label}
                </Link>
              )}
              {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
            </span>
          ))}
        </nav>

        <div className="mb-12">
          <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{pageBrand.name}</h1>
          <p className={`${colors.text.secondary} max-w-2xl leading-relaxed`}>{pageBrand.description}</p>
        </div>

        <h2 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>Products</h2>
        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={product.link}>
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                  {product.image}
                </div>
                <h3 className={`text-sm font-semibold ${colors.text.primary} mb-1`}>{product.name}</h3>
                <p className={`text-base font-bold ${colors.text.primary}`}>{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
