"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How often should I water my plants?",
      answer: "Watering frequency depends on the type of plant, season, and environment. Most houseplants prefer to dry out slightly between waterings. Check the soil moisture before watering."
    },
    {
      question: "Do you offer shipping?",
      answer: "Yes, we offer shipping to all 50 states. Orders over $50 qualify for free shipping. Standard delivery takes 3-5 business days."
    },
    {
      question: "What if my plant arrives damaged?",
      answer: "We carefully package all plants to ensure they arrive in perfect condition. If your plant arrives damaged, please contact us within 48 hours for a replacement or refund."
    },
    {
      question: "Can I return a plant?",
      answer: "Yes, we offer a 30-day return policy. Plants must be in their original condition. Please contact us to initiate a return."
    },
    {
      question: "Do you provide care instructions?",
      answer: "Yes! Each plant comes with detailed care instructions, and we have comprehensive care guides available on our website and blog."
    }
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-50 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              Planted
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">Frequently Asked Questions</h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}

