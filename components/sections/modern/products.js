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

// Default configuration for each product type
const defaultConfigs = {
  product1: {
    colors: {
      background: "bg-gray-50",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-600",
        accent: "text-blue-600"
      },
      borders: {
        default: "border-gray-100"
      },
      badges: {
        blue: "bg-blue-500",
        green: "bg-green-500",
        red: "bg-red-500",
        yellow: "bg-yellow-500",
        orange: "bg-orange-500"
      },
      buttons: {
        hover: "hover:bg-gray-100",
        primary: "bg-blue-600 hover:bg-blue-700"
      },
      stars: {
        active: "bg-yellow-400",
        partial: "bg-yellow-200",
        inactive: "bg-gray-200"
      }
    },
    page: {
      title: "Featured Products",
      description: "Handpicked selection of our most popular items",
      viewAll: {
        text: "View All",
        link: "#"
      }
    },
    products: [
      {
        name: "Premium Smart TV 43 Inch",
        id: 1,
        price: "$699",
        oldPrice: "$799",
        rating: 4.7,
        reviews: 234,
        badge: "Featured",
        badgeColor: "blue",
        link: "#"
      }
    ],
    grid: {
      columns: {
        mobile: "grid-cols-1",
        tablet: "sm:grid-cols-2",
        desktop: "md:grid-cols-3",
        large: "lg:grid-cols-4"
      },
      gap: "gap-6"
    }
  },
  product2: {
    colors: {
      background: "bg-white",
      card: "bg-white",
      text: {
        primary: "text-gray-900",
        accent: "text-blue-600"
      },
      borders: {
        default: "border-gray-100"
      },
      buttons: {
        hover: "hover:bg-gray-100"
      }
    },
    page: {
      title: "Best Sellers",
      viewAll: {
        text: "View All",
        link: "#"
      }
    },
    products: [
      {
        name: "Premium Mobile Device Pro",
        id: 1,
        link: "#"
      }
    ],
    grid: {
      columns: {
        mobile: "grid-cols-1",
        tablet: "sm:grid-cols-2",
        desktop: "md:grid-cols-3",
        large: "lg:grid-cols-4"
      },
      gap: "gap-6"
    }
  },
  product3: {
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
        link: "#"
      }
    },
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
        link: "#"
      }
    ],
    grid: {
      columns: {
        mobile: "grid-cols-1",
        tablet: "sm:grid-cols-2",
        desktop: "md:grid-cols-3",
        large: "lg:grid-cols-4"
      },
      gap: "gap-6 md:gap-8"
    },
    animations: {
      enabled: true,
      staggerDelay: 0.1,
      scrollTrigger: {
        start: "top 85%",
        end: "top 20%"
      }
    }
  },
  product4: {
    colors: {
      background: "bg-white",
      text: {
        primary: "text-slate-800",
        secondary: "text-gray-600",
        price: "text-blue-600",
        oldPrice: "text-gray-400",
        discount: "text-green-600"
      },
      card: {
        background: "bg-white",
        border: "border-gray-100",
        hover: "hover:shadow-2xl"
      },
      badges: {
        bestSeller: "bg-yellow-500 text-white"
      }
    },
    header: {
      title: "Best Sellers",
      description: "Our most popular products loved by customers worldwide",
      viewAll: {
        text: "View All",
        link: "#"
      }
    },
    products: [
      {
        name: "All-in-One Desktop M4",
        price: "$555",
        oldPrice: "$333",
        id: 1,
        rating: 4.9,
        reviews: 523,
        badge: "Best Seller",
        badgeColor: "yellow"
      }
    ],
    grid: {
      columns: {
        mobile: "grid-cols-1",
        tablet: "sm:grid-cols-2",
        desktop: "md:grid-cols-3",
        large: "lg:grid-cols-4"
      },
      gap: "gap-6"
    }
  }
};

/**
 * Products Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "products")
 * @param {string} props.type - Product type: "product1" | "product2" | "product3" | "product4" (default: "product1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function Products({
  component = "products",
  type = "product1",
  content = {}
}) {
  // Validate product type
  const validTypes = ["product1", "product2", "product3", "product4"];
  const productType = validTypes.includes(type) ? type : "product1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[productType] || defaultConfigs.product1;
  
  // Get custom config from content prop
  const customConfig = content[productType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`Products: Invalid config for type "${productType}", using defaults`);
    return <Product1 config={defaultConfigs.product1} />;
  }
  
  // Route to appropriate product component
  if (productType === "product1") {
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Product1: No products provided, using default");
      config.products = defaultConfigs.product1.products;
    }
    return <Product1 config={config} />;
  }
  
  if (productType === "product2") {
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Product2: No products provided, using default");
      config.products = defaultConfigs.product2.products;
    }
    return <Product2 config={config} />;
  }
  
  if (productType === "product3") {
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Product3: No products provided, using default");
      config.products = defaultConfigs.product3.products;
    }
    return <Product3 config={config} />;
  }
  
  if (productType === "product4") {
    if (!config.products || !Array.isArray(config.products) || config.products.length === 0) {
      console.warn("Product4: No products provided, using default");
      config.products = defaultConfigs.product4.products;
    }
    return <Product4 config={config} />;
  }
  
  // Default fallback
  return null;
}

// Product 1 Component - Featured Products with badges
function Product1({ config }) {
  const colors = config?.colors || defaultConfigs.product1.colors;
  const page = config?.page || defaultConfigs.product1.page;
  const products = config?.products || defaultConfigs.product1.products;
  const grid = config?.grid || defaultConfigs.product1.grid;

  const calculateDiscount = (price, oldPrice) => {
    if (!price || !oldPrice) return 0;
    const priceNum = parseFloat(price.replace('$', '').replace(',', ''));
    const oldPriceNum = parseFloat(oldPrice.replace('$', '').replace(',', ''));
    if (oldPriceNum === 0) return 0;
    return Math.round(((oldPriceNum - priceNum) / oldPriceNum) * 100);
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold text-slate-800 mb-2`}>{page.title}</h2>
            {page.description && (
              <p className={colors.text.secondary}>{page.description}</p>
            )}
          </div>
          {page.viewAll && (
            <Link href={page.viewAll.link || "#"} className={`${colors.text.accent} hover:text-blue-700 font-semibold flex items-center gap-2 group`}>
              {page.viewAll.text}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          )}
        </div>
        
        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`${colors.card} rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 group`}
            >
              <Link href={product.link || "#"}>
                <div className="relative">
                  {product.badge && (
                    <div className={`absolute top-3 left-3 z-10 ${colors.badges[product.badgeColor] || colors.badges.blue} text-white text-xs font-semibold px-2 py-1 rounded-full`}>
                      {product.badge}
                    </div>
                  )}
                  <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300"></div>
                    <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className={`p-2 ${colors.card} rounded-full shadow-lg ${colors.buttons.hover} transition-colors`}>
                        <div className="w-5 h-5 bg-gray-400 rounded"></div>
                      </button>
                    </div>
                  </div>
                  <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-opacity flex items-center justify-center gap-2`}>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity p-2 ${colors.card} rounded-full shadow-lg`}
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity px-6 py-2 ${colors.buttons.primary} text-white rounded-lg font-medium shadow-lg`}
                    >
                      Add to Cart
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`opacity-0 group-hover:opacity-100 transition-opacity p-2 ${colors.card} rounded-full shadow-lg`}
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </motion.button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className={`text-lg font-semibold text-slate-800 mb-3 line-clamp-2 group-hover:${colors.text.accent} transition-colors`}>
                    {product.name}
                  </h3>
                  {product.rating !== undefined && (
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-4 h-4 rounded ${
                            i < Math.floor(product.rating)
                              ? colors.stars.active
                              : i < product.rating
                              ? colors.stars.partial
                              : colors.stars.inactive
                          }`}
                        />
                      ))}
                      {product.reviews !== undefined && (
                        <span className={`text-sm ${colors.text.secondary} ml-2`}>
                          ({product.reviews})
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <span className={`text-2xl font-bold ${colors.text.accent}`}>{product.price}</span>
                    {product.oldPrice && (
                      <span className={`text-gray-400 line-through`}>{product.oldPrice}</span>
                    )}
                    {product.oldPrice && (
                      <span className={`text-sm text-green-600 font-semibold ml-auto`}>
                        {calculateDiscount(product.price, product.oldPrice)}% OFF
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

// Product 2 Component - Best Sellers with hover tooltips
function Product2({ config }) {
  const colors = config?.colors || defaultConfigs.product2.colors;
  const page = config?.page || defaultConfigs.product2.page;
  const products = config?.products || defaultConfigs.product2.products;
  const grid = config?.grid || defaultConfigs.product2.grid;

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className={`text-3xl font-bold text-slate-800`}>{page.title}</h2>
          {page.viewAll && (
            <Link href={page.viewAll.link || "#"} className={`${colors.text.accent} hover:text-blue-700 font-semibold`}>
              {page.viewAll.text}
            </Link>
          )}
        </div>
        
        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`${colors.card} rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow border ${colors.borders.default}`}
            >
              <Link href={product.link || "#"}>
                <div className="relative group">
                  <div className="w-full h-64 bg-gray-200"></div>
                  <div className={`absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity flex items-center justify-center gap-2`}>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                      <button className={`p-2 ${colors.card} rounded-full ${colors.buttons.hover}`}>
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </button>
                      <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">Quick View</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                      <button className={`p-2 ${colors.card} rounded-full ${colors.buttons.hover}`}>
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </button>
                      <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">Add to cart</span>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                      <button className={`p-2 ${colors.card} rounded-full ${colors.buttons.hover}`}>
                        <div className="w-4 h-4 bg-gray-400 rounded"></div>
                      </button>
                      <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">Add to Wishlist</span>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className={`text-lg font-semibold text-slate-800 mb-2`}>
                    {product.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

// Product 3 Component - New Arrivals with GSAP animations
function Product3({ config }) {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const colors = config?.colors || defaultConfigs.product3.colors;
  const page = config?.page || defaultConfigs.product3.page;
  const products = config?.products || defaultConfigs.product3.products;
  const grid = config?.grid || defaultConfigs.product3.grid;
  const animations = config?.animations || defaultConfigs.product3.animations;

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
              {page.badge && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-block mb-4"
                >
                  <span className={`text-sm uppercase tracking-wider ${page.badge.textColor} ${page.badge.background} px-4 py-2 rounded-full font-semibold flex items-center gap-2`}>
                    {page.badge.icon && (() => {
                      const Icon = iconMap[page.badge.icon];
                      return Icon ? <Icon className="w-4 h-4" /> : null;
                    })()}
                    {page.badge.text}
                  </span>
                </motion.div>
              )}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className={`text-4xl md:text-6xl font-bold text-slate-800 mb-3 bg-clip-text text-transparent ${colors.gradients.title}`}
              >
                {page.title}
              </motion.h2>
              {page.description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className={`${colors.text.secondary} text-lg`}
                >
                  {page.description}
                </motion.p>
              )}
            </div>
            {page.viewAll && (
              <Link
                href={page.viewAll.link || "#"}
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
            )}
          </motion.div>
          
          <div ref={containerRef} className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
            {products.map((product, index) => (
              <motion.div
                key={product.id || index}
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
                      className={`absolute top-4 left-4 z-30 ${colors.badges[product.badgeColor] || colors.badges.green} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
                    >
                      {product.badge}
                    </motion.div>
                  )}

                  {product.discount !== undefined && (
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * animations.staggerDelay + 0.4, type: "spring" }}
                      className={`absolute top-4 right-4 z-30 ${colors.badges.discount} text-white text-xs font-bold px-2 py-1 rounded-full`}
                    >
                      -{product.discount}%
                    </motion.div>
                  )}

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
                    <Link href={product.link || "#"}>
                      <motion.h3
                        className={`text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:${colors.text.accent} transition-colors`}
                        whileHover={{ x: 5 }}
                      >
                        {product.name}
                      </motion.h3>
                    </Link>
                    
                    {product.rating !== undefined && (
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
                        {product.reviews !== undefined && (
                          <span className={`text-sm ${colors.text.secondary} ml-2`}>
                            ({product.reviews})
                          </span>
                        )}
                      </div>
                    )}
                    
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
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through">{product.oldPrice}</span>
                      )}
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

// Product 4 Component - Best Sellers with different styling
function Product4({ config }) {
  const colors = config?.colors || defaultConfigs.product4.colors;
  const header = config?.header || defaultConfigs.product4.header;
  const products = config?.products || defaultConfigs.product4.products;
  const grid = config?.grid || defaultConfigs.product4.grid;

  const calculateDiscount = (price, oldPrice) => {
    if (!price || !oldPrice) return 0;
    const priceNum = parseFloat(price.replace('$', '').replace(',', ''));
    const oldPriceNum = parseFloat(oldPrice.replace('$', '').replace(',', ''));
    if (oldPriceNum === 0) return 0;
    return Math.round(((oldPriceNum - priceNum) / oldPriceNum) * 100);
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className={`text-3xl md:text-4xl font-bold ${colors.text.primary} mb-2`}>{header.title}</h2>
            {header.description && (
              <p className={colors.text.secondary}>{header.description}</p>
            )}
          </div>
          {header.viewAll && (
            <a href={header.viewAll.link || "#"} className={`${colors.text.price} hover:text-blue-700 font-semibold flex items-center gap-2 group`}>
              {header.viewAll.text}
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          )}
        </div>
        
        <div className={`grid ${grid.columns.mobile} ${grid.columns.tablet} ${grid.columns.desktop} ${grid.columns.large} ${grid.gap}`}>
          {products.map((product, index) => (
            <motion.div
              key={product.id || index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className={`${colors.card.background} rounded-xl shadow-md overflow-hidden ${colors.card.hover} transition-all duration-300 ${colors.card.border} border group`}
            >
              <div className="relative">
                {product.badge && (
                  <div className={`absolute top-3 left-3 z-10 ${colors.badges.bestSeller} text-xs font-semibold px-3 py-1 rounded-full`}>
                    {product.badge}
                  </div>
                )}
                <div className="w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-300"></div>
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </button>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-opacity flex items-center justify-center gap-3">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </motion.button>
                    <span className="text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded whitespace-nowrap">Quick View</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </motion.button>
                    <span className="text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded whitespace-nowrap">Add to cart</span>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="w-5 h-5 bg-gray-400 rounded"></div>
                    </motion.button>
                    <span className="text-xs text-white bg-black bg-opacity-70 px-2 py-1 rounded whitespace-nowrap">Add to Wishlist</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className={`text-lg font-semibold ${colors.text.primary} mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors`}>
                  {product.name}
                </h3>
                {product.rating !== undefined && (
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 rounded ${
                          i < Math.floor(product.rating)
                            ? 'bg-yellow-400'
                            : i < product.rating
                            ? 'bg-yellow-200'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                    {product.reviews !== undefined && (
                      <span className={`text-sm ${colors.text.secondary} ml-2`}>
                        ({product.reviews})
                      </span>
                    )}
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <span className={`text-2xl font-bold ${colors.text.price}`}>{product.price}</span>
                  {product.oldPrice && (
                    <>
                      <span className={colors.text.oldPrice}>{product.oldPrice}</span>
                      <span className={`text-sm ${colors.text.discount} font-semibold ml-auto`}>
                        {calculateDiscount(product.price, product.oldPrice)}% OFF
                      </span>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}

