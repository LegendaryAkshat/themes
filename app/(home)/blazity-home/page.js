"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingCart, Menu, Search, User, ArrowRight } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Acme",
    logo: "/",
    homeLink: "/blazity-home"
  },
  
  // Colors & Theme (use full Tailwind class names)
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-300"
    },
    borders: {
      default: "border-gray-200",
      light: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      secondary: "bg-white text-gray-900 hover:bg-gray-100"
    }
  },
  
  // Header Configuration
  header: {
    logo: "Acme",
    logoLink: "/blazity-home",
    navigation: [
      { label: "Fashion", href: "/blazity-category" },
      { label: "Electronics", href: "/blazity-category" },
      { label: "Sports & Outdoors", href: "/blazity-category" },
      { label: "Beauty", href: "/blazity-category" },
      { label: "Furniture", href: "/blazity-category" }
    ],
    actions: {
      search: { enabled: true, link: "/blazity-search" },
      account: { enabled: true, link: "/blazity-account" },
      cart: { enabled: true, link: "/blazity-cart" }
    }
  },
  
  // Sale Banner
  saleBanner: {
    enabled: true,
    text: "Sale 50% OFF",
    linkText: "Shop Now",
    link: "/blazity-category",
    backgroundColor: "bg-red-600",
    textColor: "text-white"
  },
  
  // Hero Sections
  heroSections: [
    {
      title: "Adventure Awaits",
      description: "Gear up for your next outdoor expedition with premium equipment",
      cta: "Shop Outdoor Gear",
      image: "🚣",
      category: "Sports & Outdoors",
      path: "/blazity-category",
      backgroundColor: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    {
      title: "Signature Scents",
      description: "Discover fragrances that capture your essence",
      cta: "Explore Perfumes",
      image: "🌸",
      category: "Beauty",
      path: "/blazity-category",
      backgroundColor: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    {
      title: "Bold & Beautiful",
      description: "Express yourself with our premium makeup collection",
      cta: "Shop Lip Makeup",
      image: "💄",
      category: "Beauty",
      path: "/blazity-category",
      backgroundColor: "bg-gradient-to-br from-gray-100 to-gray-200"
    },
    {
      title: "Sound On The Go",
      description: "Premium audio that moves with your lifestyle",
      cta: "Shop Speakers",
      image: "🔊",
      category: "Electronics",
      path: "/blazity-category",
      backgroundColor: "bg-gradient-to-br from-gray-100 to-gray-200"
    }
  ],
  
  // Categories
  categories: [
    { 
      name: "Fashion", 
      image: "👔", 
      path: "/blazity-category",
      backgroundColor: "bg-white"
    },
    { 
      name: "Electronics", 
      image: "📱", 
      path: "/blazity-category",
      backgroundColor: "bg-white"
    },
    { 
      name: "Sports & Outdoors", 
      image: "⚽", 
      path: "/blazity-category",
      backgroundColor: "bg-white"
    },
    { 
      name: "Furniture", 
      image: "🪑", 
      path: "/blazity-category",
      backgroundColor: "bg-white"
    }
  ],
  
  // New Arrivals Section
  newArrivals: {
    enabled: true,
    title: "New Arrivals",
    viewAllText: "View all new arrivals",
    viewAllLink: "/blazity-product-grid",
    backgroundColor: "bg-white",
    products: [
      { name: "Product Name", price: "From $99.00", image: "🛍️", link: "/blazity-product-detail" },
      { name: "Product Name", price: "From $99.00", image: "🛍️", link: "/blazity-product-detail" },
      { name: "Product Name", price: "From $99.00", image: "🛍️", link: "/blazity-product-detail" },
      { name: "Product Name", price: "From $99.00", image: "🛍️", link: "/blazity-product-detail" },
      { name: "Product Name", price: "From $99.00", image: "🛍️", link: "/blazity-product-detail" },
      { name: "Product Name", price: "From $99.00", image: "🛍️", link: "/blazity-product-detail" },
      { name: "Product Name", price: "From $99.00", image: "🛍️", link: "/blazity-product-detail" },
      { name: "Product Name", price: "From $99.00", image: "🛍️", link: "/blazity-product-detail" }
    ]
  },
  
  // Featured Categories Section
  featuredCategories: {
    enabled: true,
    title: "Featured Categories",
    subtitle: "Explore our curated collections",
    backgroundColor: "bg-gray-50"
  },
  
  // Newsletter Section
  newsletter: {
    enabled: true,
    title: "Newsletter",
    description: "Subscribe to receive updates, access to exclusive deals, and more.",
    placeholder: "Enter your email",
    buttonText: "Subscribe",
    backgroundColor: "bg-gray-900",
    textColor: "text-white"
  },
  
  // Footer Configuration
  footer: {
    backgroundColor: "bg-white",
    borderColor: "border-gray-200",
    sections: [
      {
        title: "Shop",
        links: [
          { label: "All Products", href: "/blazity-product-grid" },
          { label: "Electronics", href: "/blazity-category" },
          { label: "Fashion", href: "/blazity-category" },
          { label: "Sports & Outdoors", href: "/blazity-category" }
        ]
      },
      {
        title: "Account",
        links: [
          { label: "My Account", href: "/blazity-account" },
          { label: "Login", href: "/blazity-login" },
          { label: "Register", href: "/blazity-register" }
        ]
      }
    ],
    copyright: "© 2025 Blazity Enterprise Commerce.",
    additionalText: "Hosted on Vercel | Designed with Logo v0"
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, saleBanner, heroSections, categories, newArrivals, featuredCategories, newsletter, footer } = pageConfig;
  
  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      {/* Header */}
      <header className={`border-b ${colors.borders.default} sticky top-0 z-50 ${colors.background}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <button className="lg:hidden">
                <Menu className="w-6 h-6" />
              </button>
              <Link href={header.logoLink} className={`text-2xl font-bold ${colors.text.primary}`}>
                {header.logo}
              </Link>
              <nav className="hidden lg:flex items-center gap-6">
                {header.navigation.map((item, index) => (
                  <Link 
                    key={index}
                    href={item.href} 
                    className={`text-sm font-medium ${colors.text.secondary} hover:${colors.text.primary}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-4">
              {header.actions.search.enabled && (
                <button 
                  onClick={() => router.push(header.actions.search.link)} 
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <Search className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
              {header.actions.account.enabled && (
                <button 
                  onClick={() => router.push(header.actions.account.link)} 
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <User className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className="p-2 hover:bg-gray-100 rounded-md relative"
                >
                  <ShoppingCart className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Sale Banner */}
      {saleBanner.enabled && (
        <div className={`${saleBanner.backgroundColor} ${saleBanner.textColor} text-center py-2`}>
          <p className="text-sm font-semibold">
            {saleBanner.text} <Link href={saleBanner.link} className="underline ml-2">{saleBanner.linkText}</Link>
          </p>
        </div>
      )}

      {/* Hero Sections */}
      <section className={`py-16 bg-${colors.text.light}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {heroSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${colors.background} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className={`aspect-video ${section.backgroundColor} flex items-center justify-center text-8xl`}>
                  {section.image}
                </div>
                <div className="p-8">
                  <h2 className={`text-3xl font-bold ${colors.text.primary} mb-3`}>{section.title}</h2>
                  <p className={`${colors.text.secondary} mb-6`}>{section.description}</p>
                  <div className="flex items-center justify-between">
                    <Link
                      href={section.path}
                      className={`inline-flex items-center gap-2 ${colors.text.primary} font-semibold hover:underline`}
                    >
                      {section.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link
                      href="/blazity-category"
                      className={`text-sm ${colors.text.secondary} hover:${colors.text.primary}`}
                    >
                      Browse All Categories
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      {newArrivals.enabled && (
        <section className={`py-16 bg-${newArrivals.backgroundColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className={`text-3xl font-bold ${colors.text.primary}`}>{newArrivals.title}</h2>
              <Link href={newArrivals.viewAllLink} className={`text-sm font-semibold ${colors.text.primary} hover:underline`}>
                {newArrivals.viewAllText}
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {newArrivals.products.map((product, item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: item * 0.05 }}
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
        </section>
      )}

      {/* Featured Categories */}
      {featuredCategories.enabled && (
        <section className={`py-16 ${featuredCategories.backgroundColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className={`text-3xl font-bold ${colors.text.primary} mb-8 text-center`}>{featuredCategories.title}</h2>
            <p className={`text-center ${colors.text.secondary} mb-12`}>{featuredCategories.subtitle}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div>
                    <Link href={category.path}>
                      <div className={`aspect-square ${category.backgroundColor} rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform shadow-sm`}>
                        {category.image}
                      </div>
                      <h3 className={`text-lg font-semibold ${colors.text.primary} mb-2`}>{category.name}</h3>
                    </Link>
                    <Link
                      href={category.path}
                      className={`inline-flex items-center gap-2 text-sm font-semibold ${colors.text.secondary} hover:${colors.text.primary}`}
                    >
                      Shop Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter */}
      {newsletter.enabled && (
        <section className={`py-16 ${newsletter.backgroundColor} ${newsletter.textColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">{newsletter.title}</h2>
            <p className="text-gray-300 mb-8">{newsletter.description}</p>
            <form className="max-w-md mx-auto flex gap-2">
              <input
                type="email"
                placeholder={newsletter.placeholder}
                className="flex-1 px-4 py-3 rounded-md text-gray-900"
              />
              <button
                type="submit"
                className={`px-6 py-3 ${colors.buttons.secondary} font-semibold rounded-md transition-colors`}
              >
                {newsletter.buttonText}
              </button>
            </form>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className={`${footer.backgroundColor} border-t ${footer.borderColor} py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {footer.sections.map((section, index) => (
              <div key={index}>
                <h4 className={`font-semibold ${colors.text.primary} mb-4`}>{section.title}</h4>
                <ul className={`space-y-2 text-sm ${colors.text.secondary}`}>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={link.href} className={`hover:${colors.text.primary}`}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <p className={`text-sm ${colors.text.secondary}`}>{footer.copyright}</p>
              <p className={`text-xs ${colors.text.secondary} opacity-75 mt-2`}>{footer.additionalText}</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
