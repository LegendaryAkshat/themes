"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
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
      default: "border-gray-200"
    }
  },
  
  // Header Configuration
  header: {
    logo: "Headless",
    logoLink: "/headless-home",
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
    title: "Blog"
  },
  
  // Blog Posts (Edit posts here!)
  posts: [
    { 
      id: 1, 
      title: "Spring Collection Preview", 
      excerpt: "Discover our latest spring collection featuring modern designs.", 
      date: "March 20, 2024", 
      slug: "spring-collection-preview",
      link: "/headless-blog-post"
    },
    { 
      id: 2, 
      title: "Behind the Brand", 
      excerpt: "Learn about our commitment to quality and sustainability.", 
      date: "March 15, 2024", 
      slug: "behind-the-brand",
      link: "/headless-blog-post"
    },
    { 
      id: 3, 
      title: "Why Brand", 
      excerpt: "Understanding what makes our products unique.", 
      date: "March 10, 2024", 
      slug: "why-brand",
      link: "/headless-blog-post"
    }
  ]
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page, posts } = pageConfig;

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
            <Link href={header.logoLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {header.logo}
            </Link>
            <div className="flex items-center gap-4">
              {header.actions.search.enabled && (
                <button 
                  onClick={() => router.push(header.actions.search.link)} 
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <Search className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`text-4xl font-light ${colors.text.primary} mb-12`}>{page.title}</h1>
        <div className="space-y-12">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`border-b ${colors.borders.default} pb-12`}
            >
              <Link href={post.link}>
                <h2 className={`text-2xl font-light ${colors.text.primary} mb-3 hover:${colors.text.secondary} transition-colors`}>
                  {post.title}
                </h2>
                <p className={`text-sm ${colors.text.secondary} mb-4`}>{post.date}</p>
                <p className={`${colors.text.secondary} leading-relaxed`}>{post.excerpt}</p>
              </Link>
            </motion.article>
          ))}
        </div>
      </main>
    </div>
  );
}
