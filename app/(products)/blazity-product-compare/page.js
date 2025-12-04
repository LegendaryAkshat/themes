"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Check, X } from "lucide-react";
import Link from "next/link";

export default function Page() {
  const products = [
    {
      id: 1,
      name: "Inflatable Kayak",
      price: "$983.00",
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
      features: {
        weight: "3 lbs",
        capacity: "40L",
        material: "Nylon",
        warranty: "Lifetime",
        portable: true
      }
    }
  ];

  const featureLabels = {
    weight: "Weight",
    capacity: "Capacity",
    material: "Material",
    warranty: "Warranty",
    portable: "Portable"
  };

  return (
    <main className="min-h-screen w-full bg-white">
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Acme
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-md relative">
                <ShoppingCart className="w-5 h-5 text-gray-700" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Compare Products</h1>
          <p className="text-gray-600">Side-by-side comparison of our gear</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                {products.map((product) => (
                  <th key={product.id} className="text-center p-4 font-semibold text-gray-900 min-w-[200px]">
                    <div className="space-y-2">
                      <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <div className="text-6xl">🚣</div>
                      </div>
                      <div className="font-bold">{product.name}</div>
                      <div className="text-xl font-bold text-gray-900">{product.price}</div>
                      <button className="w-full mt-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors">
                        Add to Cart
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Object.entries(featureLabels).map(([key, label], index) => (
                <tr key={key} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                  <td className="p-4 font-medium text-gray-900">{label}</td>
                  {products.map((product) => (
                    <td key={product.id} className="p-4 text-center">
                      {typeof product.features[key] === "boolean" ? (
                        product.features[key] ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-600 mx-auto" />
                        )
                      ) : (
                        <span className="text-gray-700">{product.features[key]}</span>
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

