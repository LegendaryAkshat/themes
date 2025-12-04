"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ShoppingCart, Heart, Eye, Star, TrendingUp, Sparkles } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const products = [
    { 
      name: "Portable Electric Grinder Maker", 
      price: "$777", 
      oldPrice: "$888", 
      id: 1,
      rating: 4.5,
      reviews: 128,
      badge: "New",
      badgeColor: "bg-green-500",
      discount: 13
    },
    { 
      name: "Indoor Steel Adjustable Silent Treadmill", 
      price: "$888", 
      oldPrice: "$999", 
      id: 2,
      rating: 4.8,
      reviews: 256,
      badge: "Hot",
      badgeColor: "bg-red-500",
      discount: 11
    },
    { 
      name: "Premium Smart TV 43 Inch", 
      price: "$700", 
      oldPrice: "$800", 
      id: 3,
      rating: 4.7,
      reviews: 342,
      badge: "Sale",
      badgeColor: "bg-blue-500",
      discount: 13
    },
    { 
      name: "Premium Mobile Device Pro Max", 
      price: "$899", 
      oldPrice: "$930", 
      id: 4,
      rating: 4.9,
      reviews: 512,
      badge: "New",
      badgeColor: "bg-green-500",
      discount: 3
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
      discount: 10
    },
    { 
      name: "Smart Watch Ultra", 
      price: "$89", 
      oldPrice: "$99", 
      id: 6,
      rating: 4.4,
      reviews: 267,
      badge: "Sale",
      badgeColor: "bg-blue-500",
      discount: 10
    },
    { 
      name: "Professional Laptop M4", 
      price: "$600", 
      oldPrice: "$699", 
      id: 7,
      rating: 4.8,
      reviews: 445,
      badge: "Hot",
      badgeColor: "bg-red-500",
      discount: 14
    },
    { 
      name: "All-in-One Desktop M4", 
      price: "$333", 
      oldPrice: "$555", 
      id: 8,
      rating: 4.5,
      reviews: 156,
      badge: "Sale",
      badgeColor: "bg-blue-500",
      discount: 40
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.product-card');
    
    cards.forEach((card, index) => {
      // Stagger animation on scroll
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
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 3D tilt effect on hover
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

    // Parallax effect for section title
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
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-blue-50/30 text-gray-900">
      <motion.section
        ref={sectionRef}
        style={{ opacity, y }}
        className="px-6 py-24 max-w-7xl mx-auto relative overflow-hidden"
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
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
                <span className="text-sm uppercase tracking-wider text-blue-600 bg-blue-50 px-4 py-2 rounded-full font-semibold flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Latest Collection
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-slate-800 mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
              >
                New Arrivals
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-lg"
              >
                Discover the latest products added to our collection
              </motion.p>
            </div>
            <motion.a
              href="#"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="hidden md:flex text-blue-600 hover:text-blue-700 font-semibold items-center gap-2 group"
            >
              View All
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
          
          <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                className="product-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 z-10" />
                
                {/* Shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-20"
                  initial={false}
                />
                
                <div className="relative z-10">
                  {/* Badge */}
                  {product.badge && (
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                      className={`absolute top-4 left-4 z-30 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}
                    >
                      {product.badge}
                    </motion.div>
                  )}

                  {/* Discount badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
                    className="absolute top-4 right-4 z-30 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full"
                  >
                    -{product.discount}%
                  </motion.div>

                  {/* Product Image */}
                  <div className="relative w-full h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300" />
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="w-48 h-48 bg-gray-400 rounded-2xl" />
                    </motion.div>
                    
                    {/* Action buttons on hover */}
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
                        className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                      >
                        <Eye className="w-5 h-5 text-gray-700" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                      >
                        <ShoppingCart className="w-5 h-5" />
                        Add to Cart
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                      >
                        <Heart className="w-5 h-5 text-gray-700" />
                      </motion.button>
                    </motion.div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <motion.h3
                      className="text-lg font-bold text-slate-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      {product.name}
                    </motion.h3>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 + 0.5 + i * 0.05, type: "spring" }}
                        >
                          <Star
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : i < product.rating
                                ? 'fill-yellow-200 text-yellow-200'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        </motion.div>
                      ))}
                      <span className="text-sm text-gray-600 ml-2">
                        ({product.reviews})
                      </span>
                    </div>
                    
                    {/* Price */}
                    <div className="flex items-center gap-3">
                      <motion.span
                        className="text-2xl font-bold text-blue-600"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.6, type: "spring" }}
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
