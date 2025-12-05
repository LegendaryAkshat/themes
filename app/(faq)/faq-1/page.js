"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, HelpCircle } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200"
    },
    buttons: {
      hover: "hover:bg-gray-50"
    }
  },
  
  // Page Header
  page: {
    title: "Frequently Asked Questions"
  },
  
  // FAQs (Edit FAQs here!)
  faqs: [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secured with SSL encryption for your safety."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 5-7 business days. Express shipping (2-3 business days) and overnight shipping options are also available. Free express shipping is available on orders over $200."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all unused items in their original packaging. Items must be in the same condition as when received. Returns are free for orders over $100."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping times vary by location (typically 7-14 business days). Customs fees may apply depending on your country's regulations."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website. You can also access order tracking from your account dashboard."
    },
    {
      question: "What if I receive a damaged item?",
      answer: "If you receive a damaged or defective item, please contact our customer service within 48 hours of delivery. We'll arrange a free replacement or full refund, and cover return shipping costs."
    },
    {
      question: "Can I modify or cancel my order?",
      answer: "Orders can be modified or cancelled within 1 hour of placement. After that, orders are processed and cannot be changed. If you need to make changes, please contact us immediately."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! Our customer support team is available 24/7 via live chat, email, and phone. We're here to help with any questions, concerns, or assistance you may need with your order or account."
    }
  ]
};

export default function Page() {
  const sectionRef = useRef(null);
  const [openIndex, setOpenIndex] = useState(0);
  const { colors, page, faqs } = pageConfig;

  useEffect(() => {
    if (!sectionRef.current) return;

    const items = sectionRef.current.querySelectorAll('.faq-item');
    
    items.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={sectionRef}
        className="px-6 py-24 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block p-4 bg-blue-100 rounded-full mb-4"
          >
            <HelpCircle className="w-12 h-12 text-blue-600" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`text-4xl md:text-5xl font-bold ${colors.text.primary} mb-4`}
          >
            {page.title}
          </motion.h1>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${colors.card} rounded-lg shadow-md overflow-hidden`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className={`w-full px-6 py-4 flex items-center justify-between ${colors.buttons.hover} transition-colors`}
                >
                  <span className={`font-semibold ${colors.text.primary} text-left`}>{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className={`w-5 h-5 ${colors.text.secondary}`} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4"
                    >
                      <p className={`${colors.text.secondary} leading-relaxed`}>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
