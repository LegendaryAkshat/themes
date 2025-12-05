"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShoppingBag, ArrowRight, Search, Menu, User, ShoppingCart } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Planted",
    homeLink: "/catalyst-home"
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
      default: "border-gray-200"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800"
    },
    hero: {
      background: "bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50"
    }
  },
  
  // Header Configuration
  header: {
    logo: "Planted",
    logoLink: "/catalyst-home",
    navigation: [
      { label: "Shop All", href: "/catalyst-home" },
      { label: "Plants", href: "/catalyst-category" },
      { label: "Accessories", href: "/catalyst-category" }
    ],
    actions: {
      search: { enabled: true, link: "/catalyst-search" },
      account: { enabled: true, link: "/catalyst-account" },
      cart: { enabled: true, link: "/catalyst-cart", badge: true }
    }
  },
  
  // Hero Carousel
  hero: {
    enabled: true,
    slides: [
      {
        title: "Fresh finds for every occasion",
        description: "Explore our latest arrivals, curated to bring you style, functionality, and inspiration. Shop now and discover your next favorite.",
        buttonText: "Shop Now",
        buttonLink: "/catalyst-product-grid"
      },
      {
        title: "Discover what's new",
        description: "Shop our latest arrivals and find something fresh and exciting for your home.",
        buttonText: "Shop Now",
        buttonLink: "/catalyst-product-grid"
      },
      {
        title: "Something for everyone",
        description: "Don't miss out on exclusive offers across our best-selling products. Shop today and save big on the items you love.",
        buttonText: "Shop Now",
        buttonLink: "/catalyst-product-grid"
      }
    ],
    decorativeElement: "🌿"
  },
  
  // Featured Collection
  featuredCollection: {
    enabled: true,
    title: "Featured collection",
    subtitle: "Explore our top picks in this featured collection. Find the perfect gift or treat yourself!",
    viewMoreText: "View more",
    viewMoreLink: "/catalyst-category"
  },
  
  // Products (Edit products here!)
  products: [
    { 
      name: "3 Plant Bundle", 
      price: "$342.00", 
      image: "🌿",
      link: "/catalyst-product-detail"
    },
    { 
      name: "The Planter by Rustic Roots", 
      brand: "Rustic Roots", 
      price: "$55.00", 
      image: "🪴",
      link: "/catalyst-product-detail"
    },
    { 
      name: "The Cylinder by Modern Botany", 
      brand: "Modern Botany", 
      price: "$35.00", 
      image: "🌱",
      link: "/catalyst-product-detail"
    },
    { 
      name: "ZZ Plant", 
      price: "$80.00", 
      image: "🌿",
      link: "/catalyst-product-detail"
    },
    { 
      name: "Spray Bottle", 
      brand: "Planted", 
      price: "$15.00", 
      image: "💧",
      link: "/catalyst-product-detail"
    },
    { 
      name: "Snake Plant", 
      price: "$109.99", 
      image: "🌵",
      link: "/catalyst-product-detail"
    }
  ],
  
  // New Arrivals Section
  newArrivals: {
    enabled: true,
    title: "New arrivals",
    subtitle: "Our latest products are here. Check out what's new in store.",
    seeAllText: "See all",
    seeAllLink: "/catalyst-product-grid",
    backgroundColor: "bg-gray-50"
  },
  
  // Newsletter Section
  newsletter: {
    enabled: true,
    title: "Sign up for our newsletter",
    description: "Stay up to date with the latest news and offers from our store.",
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
        title: "Planted",
        description: "123 Plant St, Planttown, USA"
      },
      {
        title: "Categories",
        links: [
          { label: "Shop All", href: "/catalyst-home" },
          { label: "Plants", href: "/catalyst-category" },
          { label: "Accessories", href: "/catalyst-category" }
        ]
      },
      {
        title: "Brands",
        links: [
          { label: "Rustic Roots", href: "/catalyst-brand" },
          { label: "Modern Botany", href: "/catalyst-brand" },
          { label: "Planted", href: "/catalyst-brand" }
        ]
      },
      {
        title: "Navigate",
        links: [
          { label: "Blog", href: "/catalyst-blog" },
          { label: "About", href: "/catalyst-about" },
          { label: "Contact", href: "/catalyst-contact" }
        ]
      }
    ],
    copyright: "© 2025 Planted – Powered by BigCommerce"
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, hero, featuredCollection, products, newArrivals, newsletter, footer } = pageConfig;
  const currentSlide = hero.slides[0]; // For carousel, you'd manage state

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
                  {header.actions.cart.badge && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-gray-900 rounded-full"></span>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Carousel */}
      {hero.enabled && (
        <section className={`relative h-[600px] md:h-[700px] ${colors.hero.background} overflow-hidden`}>
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold ${colors.text.primary} mb-6 leading-tight`}>
                  {currentSlide.title}
                </h1>
                <p className={`text-lg md:text-xl ${colors.text.secondary} mb-8 leading-relaxed`}>
                  {currentSlide.description}
                </p>
                <Link
                  href={currentSlide.buttonLink}
                  className={`inline-flex items-center gap-2 ${colors.buttons.primary} px-8 py-4 rounded-md font-semibold transition-colors`}
                >
                  {currentSlide.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10">
            <div className="h-full flex items-center justify-center text-9xl">{hero.decorativeElement}</div>
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
            {hero.slides.map((_, i) => (
              <div key={i} className={`h-2 rounded-full ${i === 0 ? 'w-8 bg-gray-900' : 'w-2 bg-gray-400'}`} />
            ))}
          </div>
        </section>
      )}

      {/* Featured Collection */}
      {featuredCollection.enabled && (
        <section className={`py-16 ${colors.background}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{featuredCollection.title}</h2>
                <p className={colors.text.secondary}>{featuredCollection.subtitle}</p>
              </div>
              <Link href={featuredCollection.viewMoreLink} className={`text-sm font-semibold ${colors.text.primary} hover:underline`}>
                {featuredCollection.viewMoreText}
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.slice(0, 3).map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={product.link}>
                    <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                      {product.image}
                    </div>
                    {product.brand && (
                      <p className={`text-sm ${colors.text.secondary} mb-1`}>{product.brand}</p>
                    )}
                    <h3 className={`font-semibold ${colors.text.primary} mb-1`}>{product.name}</h3>
                    <p className={`text-lg font-bold ${colors.text.primary}`}>{product.price}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* New Arrivals */}
      {newArrivals.enabled && (
        <section className={`py-16 ${newArrivals.backgroundColor}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{newArrivals.title}</h2>
                <p className={colors.text.secondary}>{newArrivals.subtitle}</p>
              </div>
              <Link href={newArrivals.seeAllLink} className={`text-sm font-semibold ${colors.text.primary} hover:underline`}>
                {newArrivals.seeAllText}
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 flex items-center justify-center text-4xl group-hover:scale-105 transition-transform">
                      {product.image}
                    </div>
                    {product.brand && (
                      <p className={`text-xs ${colors.text.secondary} mb-1`}>{product.brand}</p>
                    )}
                    <h3 className={`text-sm font-semibold ${colors.text.primary} mb-1 line-clamp-2`}>{product.name}</h3>
                    <p className={`text-base font-bold ${colors.text.primary}`}>{product.price}</p>
                  </Link>
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
                className={`px-6 py-3 ${colors.buttons.secondary || 'bg-white text-gray-900'} font-semibold rounded-md hover:bg-gray-100 transition-colors`}
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {footer.sections.map((section, index) => (
              <div key={index}>
                <h3 className={`text-xl font-bold ${colors.text.primary} mb-4`}>{section.title}</h3>
                {section.description && (
                  <p className={`text-sm ${colors.text.secondary}`}>{section.description}</p>
                )}
                {section.links && (
                  <ul className={`space-y-2 text-sm ${colors.text.secondary}`}>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link.href} className={`hover:${colors.text.primary}`}>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
            <p>{footer.copyright}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
