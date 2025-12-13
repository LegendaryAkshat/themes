"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

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

// Default configuration for each brand type
const defaultConfigs = {
  brand1: {
    brand: {
      name: "Planted",
      homeLink: "/"
    },
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
    pageBrand: {
      name: "Rustic Roots",
      description: "Handcrafted planters and accessories for the modern home. Each piece is carefully designed to complement your plants and enhance your space."
    },
    breadcrumbs: [
      { label: "Home", href: "/", isActive: false },
      { label: "Brands", href: "#", isActive: false },
      { label: "Rustic Roots", href: "#", isActive: true }
    ],
    products: [
      { name: "The Planter by Rustic Roots", price: "$55.00", image: "🪴", link: "#" },
      { name: "Terracotta Pot Set", price: "$45.00", image: "🏺", link: "#" },
      { name: "Hanging Planter", price: "$35.00", image: "🪴", link: "#" }
    ],
    grid: {
      columns: {
        mobile: "grid-cols-2",
        tablet: "sm:grid-cols-3",
        desktop: "lg:grid-cols-4"
      },
      gap: "gap-6"
    }
  },
  brand2: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900"
      },
      gradients: {
        logo: "bg-gradient-to-br from-blue-100 to-purple-100"
      }
    },
    header: {
      title: "Our Brands"
    },
    brands: [
      { id: 1, name: "Brand 1", logo: "BRAND" },
      { id: 2, name: "Brand 2", logo: "BRAND" },
      { id: 3, name: "Brand 3", logo: "BRAND" },
      { id: 4, name: "Brand 4", logo: "BRAND" }
    ],
    grid: {
      columns: {
        mobile: "grid-cols-2",
        tablet: "md:grid-cols-3",
        desktop: "lg:grid-cols-4"
      },
      gap: "gap-8"
    }
  },
  brand3: {
    colors: {
      background: "bg-white",
      card: "bg-gradient-to-br from-gray-50 to-gray-100",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        link: "text-blue-600"
      },
      borders: {
        default: "border-transparent",
        hover: "border-blue-200"
      },
      gradients: {
        logo: "bg-gradient-to-br from-blue-200 to-purple-200"
      }
    },
    header: {
      title: "Our Brands V2"
    },
    brands: [
      { id: 1, name: "Brand 1", logo: "BRAND", products: 25 },
      { id: 2, name: "Brand 2", logo: "BRAND", products: 30 },
      { id: 3, name: "Brand 3", logo: "BRAND", products: 20 },
      { id: 4, name: "Brand 4", logo: "BRAND", products: 35 }
    ],
    grid: {
      columns: {
        mobile: "grid-cols-2",
        tablet: "md:grid-cols-3",
        desktop: "lg:grid-cols-4"
      },
      gap: "gap-6"
    }
  }
};

/**
 * Brands Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "brands")
 * @param {string} props.type - Brand type: "brand1" | "brand2" | "brand3" (default: "brand1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function Brands({
  component = "brands",
  type = "brand1",
  content = {}
}) {
  // Validate brand type
  const validTypes = ["brand1", "brand2", "brand3"];
  const brandType = validTypes.includes(type) ? type : "brand1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[brandType] || defaultConfigs.brand1;
  
  // Get custom config from content prop
  const customConfig = content[brandType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`Brands: Invalid config for type "${brandType}", using defaults`);
    return <Brand1 config={defaultConfigs.brand1} />;
  }
  
  // Route to appropriate brand component
  if (brandType === "brand1") {
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Brand1: No products provided, using default");
      config.products = defaultConfigs.brand1.products;
    }
    return <Brand1 config={config} />;
  }
  
  if (brandType === "brand2") {
    if (!config.brands || !Array.isArray(config.brands) || config.brands.length === 0) {
      console.warn("Brand2: No brands provided, using default");
      config.brands = defaultConfigs.brand2.brands;
    }
    return <Brand2 config={config} />;
  }
  
  if (brandType === "brand3") {
    if (!config.brands || !Array.isArray(config.brands) || config.brands.length === 0) {
      console.warn("Brand3: No brands provided, using default");
      config.brands = defaultConfigs.brand3.brands;
    }
    return <Brand3 config={config} />;
  }
  
  // Default fallback
  return null;
}

// Brand 1 Component - Single brand page with products
function Brand1({ config }) {
  const brand = config?.brand || defaultConfigs.brand1.brand;
  const colors = config?.colors || defaultConfigs.brand1.colors;
  const pageBrand = config?.pageBrand || defaultConfigs.brand1.pageBrand;
  const breadcrumbs = config?.breadcrumbs || defaultConfigs.brand1.breadcrumbs;
  const products = config?.products || defaultConfigs.brand1.products;
  const grid = config?.grid || defaultConfigs.brand1.grid;

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
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className={`text-sm ${colors.text.secondary} mb-8`}>
            {breadcrumbs.map((crumb, index) => (
              <span key={index}>
                {crumb.isActive ? (
                  <span className={colors.text.primary}>{crumb.label}</span>
                ) : (
                  <Link href={crumb.href || "#"} className={colors.text.link}>
                    {crumb.label}
                  </Link>
                )}
                {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
              </span>
            ))}
          </nav>
        )}

        <div className="mb-12">
          <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{pageBrand.name}</h1>
          {pageBrand.description && (
            <p className={`${colors.text.secondary} max-w-2xl leading-relaxed`}>{pageBrand.description}</p>
          )}
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
              <Link href={product.link || "#"}>
                <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-5xl group-hover:scale-105 transition-transform">
                  {product.image || "📦"}
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

// Brand 2 Component - Brands grid/list
function Brand2({ config }) {
  const colors = config?.colors || defaultConfigs.brand2.colors;
  const header = config?.header || defaultConfigs.brand2.header;
  const brands = config?.brands || defaultConfigs.brand2.brands;
  const grid = config?.grid || defaultConfigs.brand2.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.text.primary} text-center mb-12`}
        >
          {header.title}
        </motion.h1>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id || index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`${colors.card} rounded-xl shadow-md hover:shadow-xl transition-all p-8 flex items-center justify-center cursor-pointer`}
            >
              <div className="text-center">
                <div className={`w-24 h-24 ${colors.gradients.logo} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <span className="text-2xl font-bold text-gray-700">{brand.logo || "BRAND"}</span>
                </div>
                <h3 className={`font-semibold ${colors.text.primary}`}>{brand.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

// Brand 3 Component - Brands grid with product count
function Brand3({ config }) {
  const colors = config?.colors || defaultConfigs.brand3.colors;
  const header = config?.header || defaultConfigs.brand3.header;
  const brands = config?.brands || defaultConfigs.brand3.brands;
  const grid = config?.grid || defaultConfigs.brand3.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`text-4xl font-bold ${colors.text.primary} text-center mb-12`}
        >
          {header.title}
        </motion.h1>

        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.gap}`}>
          {brands.map((brand, index) => (
            <motion.div
              key={brand.id || index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className={`group ${colors.card} rounded-xl shadow-md hover:shadow-xl transition-all p-6 cursor-pointer border-2 ${colors.borders.default} hover:${colors.borders.hover}`}
            >
              <div className="text-center">
                <div className={`w-20 h-20 ${colors.gradients.logo} rounded-xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                  <span className="text-xl font-bold text-gray-700">{brand.logo || "BRAND"}</span>
                </div>
                <h3 className={`font-bold ${colors.text.primary} mb-1`}>{brand.name}</h3>
                {brand.products !== undefined && (
                  <p className={`text-sm ${colors.text.secondary} mb-3`}>{brand.products} products</p>
                )}
                <div className={`flex items-center justify-center ${colors.text.link} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span className="text-sm font-medium">View Brand</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

