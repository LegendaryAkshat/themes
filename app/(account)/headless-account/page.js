"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag, Package, User, MapPin } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200",
      hover: "border-gray-900"
    },
    buttons: {
      icon: "hover:bg-gray-100"
    }
  },
  
  // Header Navigation
  header: {
    navigation: [
      { label: "About us", href: "/headless-about" },
      { label: "Spring", href: "/headless-spring" },
      { label: "FAQ", href: "/headless-faq" }
    ],
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Page Content
  page: {
    title: "My Account"
  },
  
  // Account Cards (Edit account cards here!)
  accountCards: [
    {
      title: "My Orders",
      description: "View order history and track shipments",
      icon: "Package",
      link: "/headless-account-orders"
    },
    {
      title: "Account Details",
      description: "Manage your personal information",
      icon: "User",
      link: "/headless-account"
    },
    {
      title: "Addresses",
      description: "Manage shipping addresses",
      icon: "MapPin",
      link: "/headless-account-addresses"
    }
  ]
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page, accountCards } = pageConfig;

  const iconMap = {
    Package,
    User,
    MapPin
  };

  return (
    <div className={`min-h-screen ${colors.background}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {header.navigation.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className={`text-sm ${colors.text.secondary} hover:${colors.text.primary} transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href={brand.homeLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              {header.actions.search.enabled && (
                <button 
                  onClick={() => router.push(header.actions.search.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <Search className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className={`p-2 ${colors.buttons.icon} rounded-md transition-colors`}
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`text-4xl font-light ${colors.text.primary} mb-8`}>{page.title}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {accountCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <Link 
                key={index}
                href={card.link} 
                className={`border ${colors.borders.default} p-6 hover:${colors.borders.hover} transition-colors`}
              >
                <Icon className={`w-8 h-8 ${colors.text.secondary} mb-4`} />
                <h2 className={`text-lg font-light ${colors.text.primary} mb-2`}>{card.title}</h2>
                <p className={`text-sm ${colors.text.secondary}`}>{card.description}</p>
              </Link>
            );
          })}
        </div>
      </main>
    </div>
  );
}
