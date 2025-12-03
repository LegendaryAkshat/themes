"use client";

import { motion } from "framer-motion";
import { Globe, DollarSign } from "lucide-react";
import { useState } from "react";

export default function Page() {
  const [showCurrency, setShowCurrency] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD $ | United States");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const currencies = [
    "EUR € | France",
    "EUR € | Germany",
    "USD $ | United States",
    "VND ₫ | Vietnam"
  ];

  const languages = [
    "English",
    "العربية",
    "简体中文",
    "اردو"
  ];

  return (
    <main className="min-h-screen w-full bg-white">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-900 text-white py-2"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            {/* Left side - Promotional text */}
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className="text-red-400 font-semibold">Spring Fashion Sale</span>
                <span className="text-gray-300">Shop now</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="text-gray-300"
                >
                  →
                </motion.span>
              </motion.div>
            </div>

            {/* Right side - Currency and Language */}
            <div className="flex items-center gap-6">
              {/* Currency Selector */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowCurrency(!showCurrency);
                    setShowLanguage(false);
                  }}
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                >
                  <DollarSign className="w-4 h-4" />
                  <span>{selectedCurrency}</span>
                  <motion.span
                    animate={{ rotate: showCurrency ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>

                {showCurrency && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                  >
                    <div className="py-2">
                      {currencies.map((currency, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          onClick={() => {
                            setSelectedCurrency(currency);
                            setShowCurrency(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors ${
                            selectedCurrency === currency ? "bg-blue-50 text-blue-600" : ""
                          }`}
                        >
                          {currency}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Language Selector */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowLanguage(!showLanguage);
                    setShowCurrency(false);
                  }}
                  className="flex items-center gap-2 hover:text-gray-300 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  <span>{selectedLanguage}</span>
                  <motion.span
                    animate={{ rotate: showLanguage ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    ▼
                  </motion.span>
                </motion.button>

                {showLanguage && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                  >
                    <div className="py-2">
                      {languages.map((language, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ backgroundColor: "#f3f4f6" }}
                          onClick={() => {
                            setSelectedLanguage(language);
                            setShowLanguage(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100 transition-colors ${
                            selectedLanguage === language ? "bg-blue-50 text-blue-600" : ""
                          }`}
                        >
                          {language}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Click outside to close dropdowns */}
      {(showCurrency || showLanguage) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowCurrency(false);
            setShowLanguage(false);
          }}
        />
      )}
    </main>
  );
}

