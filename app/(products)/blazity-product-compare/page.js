"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Check, X } from "lucide-react";
import Link from "next/link";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Acme",
    homeLink: "/blazity-home",
    cartLink: "/blazity-cart"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-700"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      icon: "hover:bg-gray-100"
    },
    table: {
      even: "bg-gray-50",
      odd: "bg-white"
    },
    icons: {
      check: "text-green-600",
      cross: "text-red-600"
    }
  },
  
  // Page Header
  page: {
    title: "Compare Products",
    description: "Side-by-side comparison of our gear"
  },
  
  // Products (Edit products here!)
  products: [
    {
      id: 1,
      name: "Inflatable Kayak",
      price: "$983.00",
      image: "🚣",
      features: {
        weight: "15 lbs",
        capacity: "1-2 people",
        material: "PVC",
        warranty: "2 years",
        portable: true
      }
    },
    {
      id: 2,
      name: "Camping Tent",
      price: "$299.00",
      image: "⛺",
      features: {
        weight: "8 lbs",
        capacity: "4 people",
        material: "Polyester",
        warranty: "1 year",
        portable: true
      }
    },
    {
      id: 3,
      name: "Hiking Backpack",
      price: "$189.00",
      image: "🎒",
      features: {
        weight: "3 lbs",
        capacity: "40L",
        material: "Nylon",
        warranty: "Lifetime",
        portable: true
      }
    }
  ],
  
  // Feature Labels (Edit feature labels here!)
  featureLabels: {
    weight: "Weight",
    capacity: "Capacity",
    material: "Material",
    warranty: "Warranty",
    portable: "Portable"
  }
};

export default function Page() {
  const { brand, colors, page, products, featureLabels } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href={brand.homeLink} className={`text-2xl font-bold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              <Link href={brand.cartLink} className={`p-2 ${colors.buttons.icon} rounded-md relative`}>
                <ShoppingCart className={`w-5 h-5 ${colors.text.light}`} />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{page.title}</h1>
          <p className={colors.text.secondary}>{page.description}</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className={`border-b ${colors.borders.default}`}>
                <th className={`text-left p-4 font-semibold ${colors.text.primary}`}>Feature</th>
                {products.map((product) => (
                  <th key={product.id} className={`text-center p-4 font-semibold ${colors.text.primary} min-w-[200px]`}>
                    <div className="space-y-2">
                      <div className={`aspect-square bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                        <div className="text-6xl">{product.image}</div>
                      </div>
                      <div className="font-bold">{product.name}</div>
                      <div className={`text-xl font-bold ${colors.text.primary}`}>{product.price}</div>
                      <button className={`w-full mt-2 px-4 py-2 ${colors.buttons.primary} rounded-lg transition-colors`}>
                        Add to Cart
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(featureLabels).map(([key, label], index) => (
                <tr key={key} className={index % 2 === 0 ? colors.table.even : colors.table.odd}>
                  <td className={`p-4 font-medium ${colors.text.primary}`}>{label}</td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4 text-center">
                      {typeof product.features[key] === "boolean" ? (
                        product.features[key] ? (
                          <Check className={`w-5 h-5 ${colors.icons.check} mx-auto`} />
                        ) : (
                          <X className={`w-5 h-5 ${colors.icons.cross} mx-auto`} />
                        )
                      ) : (
                        <span className={colors.text.light}>{product.features[key]}</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </main>
  );
}
