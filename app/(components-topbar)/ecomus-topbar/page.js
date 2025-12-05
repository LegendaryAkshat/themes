"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Globe, DollarSign } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    topbar: {
      background: "bg-gray-900",
      text: {
        primary: "text-white",
        secondary: "text-gray-300",
        accent: "text-red-400"
      }
    },
    dropdown: {
      container: "bg-white",
      item: {
        default: "text-gray-900 hover:bg-gray-100",
        selected: "bg-blue-50 text-blue-600"
      },
      border: "border border-gray-200"
    }
  },
  
  // Content
  content: {
    promo: {
      text: "Spring Fashion Sale",
      cta: "Shop now"
    },
    currency: {
      label: "Currency",
      options: [
        "EUR € | France",
        "EUR € | Germany",
        "USD $ | United States",
        "VND ₫ | Vietnam"
      ]
    },
    language: {
      label: "Language",
      options: [
        "English",
        "العربية",
        "简体中文",
        "اردو"
      ]
    }
  }
};

export default function Page() {
  const [showCurrency, setShowCurrency] = useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState(pageConfig.content.currency.options[2]);
  const [selectedLanguage, setSelectedLanguage] = useState(pageConfig.content.language.options[0]);
  const { colors, content } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`${colors.topbar.background} ${colors.topbar.text.primary} py-2`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            {/* Left side - Promotional text */}
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className={`${colors.topbar.text.accent} font-semibold`}>{content.promo.text}</span>
                <span className={colors.topbar.text.secondary}>{content.promo.cta}</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className={colors.topbar.text.secondary}
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
                  className={`flex items-center gap-2 ${colors.topbar.text.secondary} hover:${colors.topbar.text.secondary.replace("text-", "text-gray-")} transition-colors`}
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

                <AnimatePresence>
                  {showCurrency && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute right-0 mt-2 w-64 ${colors.dropdown.container} rounded-lg shadow-xl z-50 ${colors.dropdown.border}`}
                    >
                      <div className="py-2">
                        {content.currency.options.map((currency, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ backgroundColor: "#f3f4f6" }}
                            onClick={() => {
                              setSelectedCurrency(currency);
                              setShowCurrency(false);
                            }}
                            className={`w-full text-left px-4 py-2 transition-colors ${
                              selectedCurrency === currency ? colors.dropdown.item.selected : colors.dropdown.item.default
                            }`}
                          >
                            {currency}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
                  className={`flex items-center gap-2 ${colors.topbar.text.secondary} hover:${colors.topbar.text.secondary.replace("text-", "text-gray-")} transition-colors`}
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

                <AnimatePresence>
                  {showLanguage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className={`absolute right-0 mt-2 w-48 ${colors.dropdown.container} rounded-lg shadow-xl z-50 ${colors.dropdown.border}`}
                    >
                      <div className="py-2">
                        {content.language.options.map((language, index) => (
                          <motion.button
                            key={index}
                            whileHover={{ backgroundColor: "#f3f4f6" }}
                            onClick={() => {
                              setSelectedLanguage(language);
                              setShowLanguage(false);
                            }}
                            className={`w-full text-left px-4 py-2 transition-colors ${
                              selectedLanguage === language ? colors.dropdown.item.selected : colors.dropdown.item.default
                            }`}
                          >
                            {language}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
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
