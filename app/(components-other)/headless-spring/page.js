"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Headless",
    homeLink: "/headless-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-700",
      link: "text-gray-700 hover:text-gray-900"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      hover: "hover:bg-gray-100"
    }
  },
  
  // Navigation
  navigation: {
    links: [
      { label: "About us", href: "/about" },
      { label: "Spring", href: "/spring" },
      { label: "FAQ", href: "/faq" }
    ]
  },
  
  // Page Content
  page: {
    title: "Spring",
    description: "\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\""
  },
  
  // Products (Edit products here!)
  products: [
    { name: "Brown loveseat", price: "$2,999.00", link: "/headless-product-detail" },
    { name: "The Slicer", price: "$2,999.00", link: "/headless-product-detail" },
    { name: "The Kramer", price: "$1,600.00", link: "/headless-product-detail" },
    { name: "Silver grey with white stripe single button", price: "$1,332.00", link: "/headless-product-detail" }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "md:grid-cols-2",
      desktop: "lg:grid-cols-4"
    },
    gap: "gap-8"
  }
};

export default function Page() {
  const { brand, colors, navigation, page, products, grid } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {navigation.links.map((link, index) => (
                <Link key={index} href={link.href} className={`text-sm ${colors.text.link} transition-colors`}>
                  {link.label}
                </Link>
              ))}
            </div>
            <Link href={brand.homeLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              <button className={`p-2 ${colors.buttons.hover} rounded-md transition-colors`}>
                <Search className={`w-5 h-5 ${colors.text.secondary}`} />
              </button>
              <button className={`p-2 ${colors.buttons.hover} rounded-md transition-colors`}>
                <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div className="text-center max-w-3xl mx-auto">
            <h1 className={`text-5xl font-light ${colors.text.primary} mb-8`}>{page.title}</h1>
            <p className={`text-lg ${colors.text.secondary} leading-relaxed`}>
              {page.description}
            </p>
          </div>

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
                  <div className="aspect-square bg-gray-100 mb-4 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                    <div className="w-32 h-32 bg-gray-300 rounded"></div>
                  </div>
                  <h3 className={`text-lg font-light ${colors.text.primary} mb-2`}>{product.name}</h3>
                  <p className={colors.text.secondary}>{product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
