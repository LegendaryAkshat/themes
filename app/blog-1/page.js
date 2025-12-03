"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Calendar, User, ArrowRight, Clock, Tag } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Page() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of E-Commerce: Trends to Watch in 2024",
      excerpt: "Discover the latest trends shaping the future of online shopping and how they're transforming the customer experience.",
      author: "Sarah Johnson",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "bg-gradient-to-br from-blue-400 to-purple-500"
    },
    {
      id: 2,
      title: "10 Essential Tips for Building a Successful Online Store",
      excerpt: "Learn the key strategies and best practices that can help you create a thriving e-commerce business from the ground up.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "8 min read",
      category: "Business",
      image: "bg-gradient-to-br from-green-400 to-blue-500"
    },
    {
      id: 3,
      title: "Mobile Commerce: Optimizing Your Store for Smartphones",
      excerpt: "With mobile shopping on the rise, here's how to ensure your online store provides an exceptional mobile experience.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Design",
      image: "bg-gradient-to-br from-pink-400 to-orange-500"
    },
    {
      id: 4,
      title: "Customer Retention Strategies That Actually Work",
      excerpt: "Explore proven techniques for keeping customers coming back and building long-term relationships with your audience.",
      author: "David Park",
      date: "March 8, 2024",
      readTime: "7 min read",
      category: "Marketing",
      image: "bg-gradient-to-br from-yellow-400 to-red-500"
    },
    {
      id: 5,
      title: "The Art of Product Photography for E-Commerce",
      excerpt: "Master the techniques that make products look irresistible online and drive more sales through stunning visuals.",
      author: "Lisa Anderson",
      date: "March 5, 2024",
      readTime: "4 min read",
      category: "Design",
      image: "bg-gradient-to-br from-indigo-400 to-purple-500"
    },
    {
      id: 6,
      title: "Understanding Payment Gateways: A Complete Guide",
      excerpt: "Navigate the world of online payments and choose the right gateway solution for your e-commerce business needs.",
      author: "James Wilson",
      date: "March 3, 2024",
      readTime: "9 min read",
      category: "Technology",
      image: "bg-gradient-to-br from-teal-400 to-cyan-500"
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll('.blog-card');
    
    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 100,
          scale: 0.9,
          rotationY: -15
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // 3D hover effect
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 15;
        const rotateY = (centerX - x) / 15;
        
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

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-purple-50/30 text-gray-900">
      <motion.section
        ref={sectionRef}
        style={{ opacity }}
        className="px-6 py-24 max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block text-sm uppercase tracking-wider text-purple-600 bg-purple-50 px-4 py-2 rounded-full font-semibold mb-4"
          >
            Latest Articles
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-slate-800 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600"
          >
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            Stay updated with the latest insights, tips, and trends in e-commerce and digital marketing
          </motion.p>
        </motion.div>

        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="blog-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className={`relative h-64 ${post.image} overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <motion.div
                  className="absolute top-4 left-4 z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring" }}
                >
                  <span className="bg-white/90 backdrop-blur-sm text-purple-600 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </span>
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <motion.h2
                  className="text-xl font-bold text-slate-800 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2"
                  whileHover={{ x: 5 }}
                >
                  {post.title}
                </motion.h2>

                <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>

                  <motion.a
                    href="#"
                    whileHover={{ x: 5 }}
                    className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2 group/link"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            Load More Articles
          </motion.button>
        </motion.div>
      </motion.section>
    </main>
  );
}





