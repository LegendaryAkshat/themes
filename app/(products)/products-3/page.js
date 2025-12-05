"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ShoppingCart, Heart, Eye, Star, TrendingUp } from "lucide-react";
import Link from "next/link";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      accent: "text-blue-600"
    },
    badges: {
      green: "bg-green-500",
      red: "bg-red-500",
      blue: "bg-blue-500",
      discount: "bg-green-500"
    },
    gradients: {
      title: "bg-gradient-to-r from-blue-600 to-purple-600",
      overlay: "from-blue-500/0 via-purple-500/0 to-pink-500/0",
      overlayHover: "from-blue-500/5 via-purple-500/5 to-pink-500/5"
    },
    decorations: {
      blue: "bg-blue-200"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700",
      icon: "bg-white hover:bg-gray-100"
    },
    stars: {
      active: "fill-yellow-400 text-yellow-400",
      partial: "fill-yellow-200 text-yellow-200",
      inactive: "fill-gray-200 text-gray-200"
    }
  },
  
  // Page Header
  page: {
    badge: {
      text: "Latest Collection",
      icon: "TrendingUp",
      background: "bg-blue-50",
      textColor: "text-blue-600"
    },
    title: "New Arrivals",
    description: "Discover the latest products added to our collection",
    viewAll: {
      text: "View All",
      link: "/products-all"
    }
  },
  
  // Products (Edit products here!)
  products: [
    { 
      name: "Portable Electric Grinder Maker", 
      price: "$777", 
      oldPrice: "$888", 
      id: 1,
      rating: 4.5,
      reviews: 128,
      badge: "New",
      badgeColor: "green",
      discount: 13,
      link: "/product-portable-electric-grinder"
    },
    { 
      name: "Indoor Steel Adjustable Silent Treadmill", 
      price: "$888", 
      oldPrice: "$999", 
      id: 2,
      rating: 4.8,
      reviews: 256,
      badge: "Hot",
      badgeColor: "red",
      discount: 11,
      link: "/product-indoor-steel-treadmill"
    },
    { 
      name: "Premium Smart TV 43 Inch", 
      price: "$700", 
      oldPrice: "$800", 
      id: 3,
      rating: 4.7,
      reviews: 342,
      badge: "Sale",
      badgeColor: "blue",
      discount: 13,
      link: "/product-premium-smart-tv"
    },
    { 
      name: "Premium Mobile Device Pro Max", 
      price: "$899", 
      oldPrice: "$930", 
      id: 4,
      rating: 4.9,
      reviews: 512,
      badge: "New",
      badgeColor: "green",
      discount: 3,
      link: "/product-premium-mobile-device-pro-max"
    },
    { 
      name: "Premium Wireless Headphones Max", 
      price: "$450", 
      oldPrice: "$500", 
      id: 5,
      rating: 4.6,
      reviews: 189,
      badge: null,
      badgeColor: "",
      discount: 10,
      link: "/product-premium-wireless-headphones"
    },
    { 
      name: "Smart Watch Ultra", 
      price: "$89", 
      oldPrice: "$99", 
      id: 6,
      rating: 4.4,
      reviews: 267,
      badge: "Sale",
      badgeColor: "blue",
      discount: 10,
      link: "/product-smart-watch-ultra"
    },
    { 
      name: "Professional Laptop M4", 
      price: "$600", 
      oldPrice: "$699", 
      id: 7,
      rating: 4.8,
      reviews: 445,
      badge: "Hot",
      badgeColor: "red",
      discount: 14,
      link: "/product-professional-laptop-m4"
    },
    { 
      name: "All-in-One Desktop M4", 
      price: "$333", 
      oldPrice: "$555", 
      id: 8,
      rating: 4.5,
      reviews: 156,
      badge: "Sale",
      badgeColor: "blue",
      discount: 40,
      link: "/product-all-in-one-desktop-m4"
    }
  ],
  
  // Grid Configuration
  grid: {
    columns: {
      mobile: "grid-cols-1",
      tablet: "sm:grid-cols-2",
      desktop: "md:grid-cols-3",
      large: "lg:grid-cols-4"
    },
    gap: "gap-6 md:gap-8"
  },
  
  // Animations (GSAP settings)
  animations: {
    enabled: true,
    staggerDelay: 0.1,
    scrollTrigger: {
      start: "top 85%",
      end: "top 20%"
    }
  }
};

export default function Page() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { colors, page, products, grid, animations } = pageConfig;
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const iconMap = {
    ShoppingCart,
    Heart,
    Eye,
    Star,
    TrendingUp
  };

  useEffect(() => {
    if (!containerRef.current || !animations.enabled) return;

    const cards = containerRef.current.querySelectorAll('.product-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 150,
          scale: 0.8,
          rotationX: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationX: 0,
          duration: 1,
          delay: index * animations.staggerDelay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: animations.scrollTrigger.start,
            end: animations.scrollTrigger.end,
            toggleActions: "play none none reverse"
          }
        }
      );

      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        gsap.to(card, {
          rotationX: rotateX,
          rotationY: rotateY,
          transformPerspective: 1000,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          rotationX: 0,
          rotationY: 0,
          duration: 0.5,
          ease: "power2.out"
        });
      });
    });

    const title = sectionRef.current?.querySelector('.section-title');
    if (title) {
      gsap.to(title, {
        y: -30,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animations]);

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={sectionRef}
        style={{ opacity, y }}
        className="px-6 py-24 max-w-7xl mx-auto relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className={`absolute top-0 left-1/4 w-96 h-96 ${colors.decorations.blue} rounded-full mix-blend-multiply filter blur-3xl opacity-20`}
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-between mb-16 section-title"
          >
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block mb-4"
              >
                <span className={`text-sm uppercase tracking-wider ${page.badge.textColor} ${page.badge.background} px-4 py-2 rounded-full font-semibold flex items-center gap-2`}>
                  {(() => {
                    const TrendingUpIcon = iconMap[page.badge.icon];
                    return <TrendingUpIcon className="w-4 h-4" />;
                  })()}
                  {page.badge.text}
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`text-4xl md:text-6xl font-bold text-slate-800 mb-3 bg-clip-text text-transparent ${colors.gradients.title}`}
              >
                {page.title}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className={`${colors.text.secondary} text-lg`}
              >
                {page.description}
              </motion.p>
            </div>
            <Link
              href={page.viewAll.link}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex text-blue-600 hover:text-blue-700 font-semibold items-center gap-2 group"
            >
              {page.viewAll.text}
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Link>
          </motion.div>
          
          <div ref={containerRef} className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradients.overlay} group-hover:${colors.gradients.overlayHover} transition-all duration-500 z-10`} />
                
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"
                  initial={false}
                />
                
                <div className="relative z-10">
                  {product.badge && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * animations.staggerDelay + 0.3, type: "spring" }}
                      className={`absolute top-4 left-4 z-30 ${colors.badges[product.badgeColor]} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
                    >
                      {product.badge}
                    </motion.div>
                  )}

                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * animations.staggerDelay + 0.4, type: "spring" }}
                    className={`absolute top-4 right-4 z-30 ${colors.badges.discount} text-white text-xs font-bold px-2 py-1 rounded-full`}
                  >
                    -{product.discount}%
                  </motion.div>

                  <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-48 h-48 bg-gray-400 rounded-2xl" />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{
                        opacity: hoveredIndex === index ? 1 : 0,
                        y: hoveredIndex === index ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center gap-3 z-20"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 ${colors.buttons.icon} rounded-full shadow-lg transition-colors`}
                      >
                        <Eye className="w-5 h-5 text-gray-700" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`px-6 py-3 ${colors.buttons.primary} text-white rounded-full font-semibold shadow-lg transition-colors flex items-center gap-2`}
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className={`p-3 ${colors.buttons.icon} rounded-full shadow-lg transition-colors`}
                      >
                        <Heart className="w-5 h-5 text-gray-700" />
                      </motion.button>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <Link href={product.link}>
                      <motion.h3
                        className={`text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:${colors.text.accent} transition-colors`}
                        whileHover={{ x: 5 }}
                      >
                        {product.name}
                      </motion.h3>
                    </Link>
                    
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * animations.staggerDelay + 0.5 + i * 0.05, type: "spring" }}
                        >
                          <Star
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? colors.stars.active
                                : i < product.rating
                                ? colors.stars.partial
                                : colors.stars.inactive
                            }`}
                          />
                        </motion.div>
                      ))}
                      <span className={`text-sm ${colors.text.secondary} ml-2`}>
                        ({product.reviews})
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <motion.span
                        className={`text-2xl font-bold ${colors.text.accent}`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * animations.staggerDelay + 0.6, type: "spring" }}
                      >
                        {product.price}
                      </motion.span>
                      <span className="text-gray-400 line-through">{product.oldPrice}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
}
