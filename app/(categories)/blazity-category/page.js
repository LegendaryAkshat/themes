"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Filter, Grid, List, ChevronRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Acme",
    homeLink: "/blazity-home"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      hover: "hover:bg-gray-50"
    }
  },
  
  // Page Content
  page: {
    title: "Fashion"
  },
  
  // Breadcrumbs (Edit breadcrumbs here!)
  breadcrumbs: [
    { label: "Home", path: "/blazity-home" },
    { label: "Fashion", path: "/blazity-category" }
  ],
  
  // Filters & View Options
  filters: {
    enabled: true,
    buttonText: "Filter",
    icon: "Filter"
  },
  viewOptions: {
    grid: { enabled: true, icon: "Grid" },
    list: { enabled: true, icon: "List" }
  },
  
  // Products (Edit products here!)
  products: [
    { name: "Product 1", price: "$99.00", image: "👔", link: "/blazity-product-detail" },
    { name: "Product 2", price: "$149.00", image: "👕", link: "/blazity-product-detail" },
    { name: "Product 3", price: "$79.00", image: "👗", link: "/blazity-product-detail" },
    { name: "Product 4", price: "$199.00", image: "🧥", link: "/blazity-product-detail" },
    { name: "Product 5", price: "$129.00", image: "👖", link: "/blazity-product-detail" },
    { name: "Product 6", price: "$89.00", image: "👠", link: "/blazity-product-detail" },
    { name: "Product 7", price: "$159.00", image: "👜", link: "/blazity-product-detail" },
    { name: "Product 8", price: "$69.00", image: "👓", link: "/blazity-product-detail" }
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
  const { brand, colors, page, breadcrumbs, filters, viewOptions, products, grid } = pageConfig;

  const iconMap = {
    Filter,
    Grid,
    List,
    ChevronRight
  };

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
        <nav className={`flex items-center gap-2 text-sm ${colors.text.secondary} mb-8`}>
          {breadcrumbs.map((crumb, index) => {
            const ChevronRightIcon = iconMap.ChevronRight;
            return (
              <div key={index} className="flex items-center gap-2">
                <Link href={crumb.path} className="hover:text-gray-900">
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && <ChevronRightIcon className="w-4 h-4" />}
              </div>
            );
          })}
        </nav>

        <h1 className={`text-4xl font-bold ${colors.text.primary} mb-8`}>{page.title}</h1>

        <div className="flex items-center justify-between mb-8">
          {filters.enabled && (
            <button className={`flex items-center gap-2 px-4 py-2 border ${colors.borders.input} rounded-md ${colors.buttons.hover}`}>
              {(() => {
                const FilterIcon = iconMap[filters.icon];
                return <FilterIcon className="w-4 h-4" />;
              })()}
              {filters.buttonText}
            </button>
          )}
          <div className="flex items-center gap-2">
            {viewOptions.grid.enabled && (
              <button className={`p-2 border ${colors.borders.input} rounded-md ${colors.buttons.hover}`}>
                {(() => {
                  const GridIcon = iconMap[viewOptions.grid.icon];
                  return <GridIcon className="w-4 h-4" />;
                })()}
              </button>
            )}
            {viewOptions.list.enabled && (
              <button className={`p-2 border ${colors.borders.input} rounded-md ${colors.buttons.hover}`}>
                {(() => {
                  const ListIcon = iconMap[viewOptions.list.icon];
                  return <ListIcon className="w-4 h-4" />;
                })()}
              </button>
            )}
          </div>
        </div>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <Link href={product.link}>
                <div className={`aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform`}>
                  {product.image}
                </div>
                <h3 className={`text-sm font-semibold ${colors.text.primary} mb-1 line-clamp-2`}>{product.name}</h3>
                <p className={`text-base font-bold ${colors.text.primary}`}>{product.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
