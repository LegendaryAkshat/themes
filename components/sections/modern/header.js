"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Search, User, Heart, ShoppingBag, ShoppingCart, Menu, X } from "lucide-react";

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

// Default configuration for each header type
const defaultConfigs = {
  header1: {
    brand: {
      name: "NextMerce",
      logo: "N",
      logoColor: "bg-blue-600"
    },
    colors: {
      background: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-700",
        link: "text-gray-700 hover:text-blue-600"
      },
      borders: {
        default: "border-gray-200",
        input: "border-gray-300"
      },
      buttons: {
        primary: "bg-blue-600 hover:bg-blue-700",
        secondary: "bg-gray-100 hover:bg-gray-200"
      }
    },
    search: {
      enabled: true,
      placeholder: "I am shopping for...",
      categoryButton: {
        text: "All Categories",
        enabled: true
      }
    },
    navigation: [
      { label: "Popular", href: "#" },
      { label: "Shop", href: "#" }
    ],
    actions: {
      cart: {
        enabled: true,
        count: 0,
        href: "#"
      },
      wishlist: {
        enabled: true,
        count: 0,
        href: "#"
      },
      account: {
        enabled: true,
        text: "Sign In / Register",
        href: "#"
      }
    }
  },
  header2: {
    brand: {
      name: "Brand",
      suffix: "commerce",
      badge: "Demo",
      logo: {
        color: "bg-blue-600",
        icon: "bg-white"
      }
    },
    colors: {
      background: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-slate-800",
        light: "text-gray-500",
        link: "text-gray-700 hover:text-blue-600"
      },
      borders: {
        default: "border-gray-200"
      },
      buttons: {
        icon: "hover:bg-gray-100",
        badge: "bg-green-500 text-white"
      }
    },
    navigation: [
      { label: "Popular", href: "#" },
      { label: "Shop", href: "#" }
    ],
    actions: {
      search: { enabled: true, count: 0 },
      account: { enabled: true },
      wishlist: { enabled: true, count: 0 },
      cart: { enabled: true, count: 0 },
      menu: { enabled: true, mobileOnly: true }
    }
  },
  header3: {
    brand: {
      name: "Clare",
      trademark: "®",
      trademarkColor: "text-orange-500"
    },
    colors: {
      background: "bg-white",
      text: {
        primary: "text-slate-800",
        secondary: "text-gray-700",
        placeholder: "text-gray-400"
      },
      borders: {
        search: "border-transparent",
        searchFocused: "border-orange-500"
      },
      buttons: {
        icon: "bg-gray-100 hover:bg-gray-200",
        category: "bg-gray-200 hover:bg-gray-300",
        badge: "bg-orange-500"
      }
    },
    search: {
      placeholder: "Search your favorite product",
      categoryButton: "Select Category",
      enabled: true
    },
    actions: {
      user: { enabled: true, hasBadge: true },
      wishlist: { enabled: true, count: 0 },
      cart: { enabled: true, count: 0 },
      menu: { enabled: true, mobileOnly: true }
    }
  },
  ecomusHeader: {
    brand: {
      name: "Ecomus",
      logo: {
        gradient: "bg-gradient-to-br from-blue-600 to-indigo-600",
        letter: "E"
      }
    },
    colors: {
      background: "bg-white",
      text: {
        primary: "text-gray-900",
        secondary: "text-gray-700",
        link: "text-gray-700 hover:text-blue-600"
      },
      borders: {
        default: "border-gray-200",
        input: "border-gray-300"
      },
      buttons: {
        icon: "hover:bg-gray-100",
        badge: "bg-red-500 text-white"
      }
    },
    navigation: [
      { name: "Home", href: "#" },
      { name: "Shop", href: "#" }
    ],
    actions: {
      search: { enabled: true, placeholder: "Search products..." },
      account: { enabled: true },
      wishlist: { enabled: true, count: 3 },
      cart: { enabled: true, count: 0 },
      menu: { enabled: true, mobileOnly: true }
    }
  }
};

/**
 * Header Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "header")
 * @param {string} props.type - Header type: "header1" | "header2" | "header3" | "ecomusHeader" (default: "header1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 */
export default function Header({
  component = "header",
  type = "header1",
  content = {}
}) {
  // Validate header type
  const validTypes = ["header1", "header2", "header3", "ecomusHeader"];
  const headerType = validTypes.includes(type) ? type : "header1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[headerType] || defaultConfigs.header1;
  
  // Get custom config from content prop
  const customConfig = content[headerType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`Header: Invalid config for type "${headerType}", using defaults`);
    return <Header1 config={defaultConfigs.header1} />;
  }
  
  // Route to appropriate header component
  if (headerType === "header1") {
    if (!config.navigation || !Array.isArray(config.navigation) || config.navigation.length === 0) {
      console.warn("Header1: No navigation provided, using default");
      config.navigation = defaultConfigs.header1.navigation;
    }
    return <Header1 config={config} />;
  }
  
  if (headerType === "header2") {
    if (!config.navigation || !Array.isArray(config.navigation) || config.navigation.length === 0) {
      console.warn("Header2: No navigation provided, using default");
      config.navigation = defaultConfigs.header2.navigation;
    }
    return <Header2 config={config} />;
  }
  
  if (headerType === "header3") {
    return <Header3 config={config} />;
  }
  
  if (headerType === "ecomusHeader") {
    if (!config.navigation || !Array.isArray(config.navigation) || config.navigation.length === 0) {
      console.warn("EcomusHeader: No navigation provided, using default");
      config.navigation = defaultConfigs.ecomusHeader.navigation;
    }
    return <EcomusHeader config={config} />;
  }
  
  // Default fallback
  return null;
}

// Header 1 Component - With search bar
function Header1({ config }) {
  const brand = config?.brand || defaultConfigs.header1.brand;
  const colors = config?.colors || defaultConfigs.header1.colors;
  const search = config?.search || defaultConfigs.header1.search;
  const navigation = config?.navigation || defaultConfigs.header1.navigation;
  const actions = config?.actions || defaultConfigs.header1.actions;

  return (
    <header className={`${colors.background} border-b ${colors.borders.default} py-4`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className={`w-10 h-10 ${brand.logoColor} rounded-full flex items-center justify-center`}>
              <span className="text-white font-bold text-lg">{brand.logo}</span>
            </div>
            {brand.name && (
              <span className={`text-xl font-bold ${colors.text.primary}`}>{brand.name}</span>
            )}
          </div>
          
          {search && search.enabled && (
            <div className="flex-1 max-w-2xl mx-8">
              <form className="flex">
                {search.categoryButton && search.categoryButton.enabled && (
                  <button className={`flex items-center gap-2 px-4 py-3 ${colors.buttons.secondary} rounded-l-lg border-r ${colors.borders.input} transition-colors`}>
                    <div className="w-5 h-5 bg-gray-400 flex flex-col gap-0.5">
                      <div className="w-full h-0.5 bg-gray-600"></div>
                      <div className="w-full h-0.5 bg-gray-600"></div>
                      <div className="w-full h-0.5 bg-gray-600"></div>
                    </div>
                    <span className={`text-sm font-medium ${colors.text.secondary}`}>{search.categoryButton.text}</span>
                    <div className="w-4 h-4 bg-gray-400 rounded"></div>
                  </button>
                )}
                <input
                  type="text"
                  placeholder={search.placeholder}
                  className={`flex-1 px-4 py-3 border ${colors.borders.input} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                <button className={`px-6 py-3 ${colors.buttons.primary} text-white rounded-r-lg transition-colors`}>
                  <div className="w-5 h-5 bg-white rounded"></div>
                </button>
              </form>
            </div>
          )}
          
          <div className="flex items-center gap-4">
            {actions.cart && actions.cart.enabled && (
              <a href={actions.cart.href} className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                {actions.cart.count > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{actions.cart.count}</span>
                )}
              </a>
            )}
            {actions.wishlist && actions.wishlist.enabled && (
              <a href={actions.wishlist.href} className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                <div className="w-6 h-6 bg-gray-400 rounded"></div>
                {actions.wishlist.count > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{actions.wishlist.count}</span>
                )}
              </a>
            )}
            {actions.account && actions.account.enabled && (
              <a href={actions.account.href} className={`text-sm ${colors.text.link} transition-colors`}>
                {actions.account.text}
              </a>
            )}
          </div>
        </div>
        
        {navigation && navigation.length > 0 && (
          <nav className="flex items-center gap-6">
            {navigation.map((item, index) => (
              <a 
                key={index}
                href={item.href} 
                className={`${colors.text.link} transition-colors flex items-center gap-1`}
              >
                {item.label}
                {item.hasDropdown && <div className="w-3 h-3 bg-gray-400 rounded"></div>}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

// Header 2 Component - With badge
function Header2({ config }) {
  const brand = config?.brand || defaultConfigs.header2.brand;
  const colors = config?.colors || defaultConfigs.header2.colors;
  const navigation = config?.navigation || defaultConfigs.header2.navigation;
  const actions = config?.actions || defaultConfigs.header2.actions;

  return (
    <header className={`${colors.background} border-b ${colors.borders.default} py-4`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 ${brand.logo.color} rounded-lg flex items-center justify-center`}>
            <div className={`w-6 h-6 ${brand.logo.icon} rounded`}></div>
          </div>
          <div className="flex items-center gap-2">
            {brand.name && (
              <span className={`text-xl font-bold ${colors.text.secondary}`}>{brand.name}</span>
            )}
            {brand.suffix && (
              <span className={`text-xl ${colors.text.light}`}>{brand.suffix}</span>
            )}
            {brand.badge && (
              <span className={`text-xs ${colors.buttons.badge} px-2 py-0.5 rounded`}>{brand.badge}</span>
            )}
          </div>
        </div>
        
        {navigation && navigation.length > 0 && (
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item, index) => (
              <a key={index} href={item.href} className={`${colors.text.link} transition-colors`}>
                {item.label}
              </a>
            ))}
          </nav>
        )}
        
        <div className="flex items-center gap-4">
          {actions.search && actions.search.enabled && (
            <button className={`p-2 ${colors.buttons.icon} rounded-full transition-colors`}>
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
            </button>
          )}
          {actions.account && actions.account.enabled && (
            <button className={`p-2 ${colors.buttons.icon} rounded-full transition-colors`}>
              <div className="w-5 h-5 bg-gray-400 rounded-full"></div>
            </button>
          )}
          {actions.wishlist && actions.wishlist.enabled && (
            <button className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}>
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              {actions.wishlist.count > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{actions.wishlist.count}</span>
              )}
            </button>
          )}
          {actions.cart && actions.cart.enabled && (
            <button className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}>
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              {actions.cart.count > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">{actions.cart.count}</span>
              )}
            </button>
          )}
          {actions.menu && actions.menu.enabled && actions.menu.mobileOnly && (
            <button className={`p-2 ${colors.buttons.icon} rounded-full transition-colors md:hidden`}>
              <div className="w-5 h-5 bg-gray-400 flex flex-col gap-1">
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

// Header 3 Component - With motion effects
function Header3({ config }) {
  const [searchFocused, setSearchFocused] = useState(false);
  const headerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const brand = config?.brand || defaultConfigs.header3.brand;
  const colors = config?.colors || defaultConfigs.header3.colors;
  const search = config?.search || defaultConfigs.header3.search;
  const actions = config?.actions || defaultConfigs.header3.actions;

  useEffect(() => {
    if (!headerRef.current) return;
    const handleMouseMove = (e) => {
      const rect = headerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    headerRef.current.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (headerRef.current) {
        headerRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  const backgroundX = useTransform(mouseX, [0, 1000], [-50, 50]);
  const backgroundY = useTransform(mouseY, [0, 600], [-50, 50]);

  return (
    <motion.section
      ref={headerRef}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="px-6 py-6 max-w-7xl mx-auto relative overflow-hidden"
    >
      <motion.div
        style={{ x: backgroundX, y: backgroundY }}
        className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/50 to-pink-50/50 opacity-0 hover:opacity-100 transition-opacity duration-500 blur-3xl -z-10"
      />

      <div className="relative z-10 flex items-center justify-between gap-6 flex-wrap">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex items-center"
        >
          {brand.name && (
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className={`text-3xl md:text-4xl font-bold ${colors.text.primary}`}
            >
              {brand.name}{brand.trademark && <sup className={brand.trademarkColor}>{brand.trademark}</sup>}
            </motion.h1>
          )}
        </motion.div>

        {search && search.enabled && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: searchFocused ? "100%" : "auto",
              opacity: 1 
            }}
            transition={{ duration: 0.3 }}
            className="flex-1 max-w-2xl mx-4"
          >
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className={`relative flex items-center bg-gray-50 rounded-lg border-2 transition-all duration-300 ${
                searchFocused ? `${colors.borders.searchFocused} bg-white shadow-lg` : colors.borders.search
              }`}
            >
              <Search className="w-5 h-5 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder={search.placeholder}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="flex-1 px-4 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
              />
              {search.categoryButton && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-3 ${colors.buttons.category} rounded-r-lg font-medium ${colors.text.secondary} transition-colors`}
                >
                  {search.categoryButton}
                  <motion.span
                    animate={{ rotate: searchFocused ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block ml-2"
                  >
                    ↓
                  </motion.span>
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        )}

        <div className="flex items-center gap-4">
          {actions.user && actions.user.enabled && (
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 ${colors.buttons.icon} rounded-full transition-colors relative group`}
            >
              <User className={`w-5 h-5 ${colors.text.secondary}`} />
              {actions.user.hasBadge && (
                <motion.span
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className={`absolute -top-1 -right-1 w-3 h-3 ${colors.buttons.badge} rounded-full`}
                />
              )}
            </motion.a>
          )}

          {actions.wishlist && actions.wishlist.enabled && (
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 ${colors.buttons.icon} rounded-full transition-colors relative group`}
            >
              <Heart className={`w-5 h-5 ${colors.text.secondary}`} />
              {actions.wishlist.count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className={`absolute -top-1 -right-1 w-5 h-5 ${colors.buttons.badge} text-white text-xs rounded-full flex items-center justify-center font-bold`}
                >
                  {actions.wishlist.count}
                </motion.span>
              )}
            </motion.a>
          )}

          {actions.cart && actions.cart.enabled && (
            <motion.a
              href="#"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className={`p-3 ${colors.buttons.icon} rounded-full transition-colors relative group`}
            >
              <ShoppingCart className={`w-5 h-5 ${colors.text.secondary}`} />
              {actions.cart.count > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className={`absolute -top-1 -right-1 w-5 h-5 ${colors.buttons.badge} text-white text-xs rounded-full flex items-center justify-center font-bold`}
                >
                  {actions.cart.count}
                </motion.span>
              )}
            </motion.a>
          )}

          {actions.menu && actions.menu.enabled && actions.menu.mobileOnly && (
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`md:hidden p-3 ${colors.buttons.icon} rounded-full transition-colors`}
            >
              <Menu className={`w-5 h-5 ${colors.text.secondary}`} />
            </motion.button>
          )}
        </div>
      </div>
    </motion.section>
  );
}

// Ecomus Header Component - With mobile menu
function EcomusHeader({ config }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  const brand = config?.brand || defaultConfigs.ecomusHeader.brand;
  const colors = config?.colors || defaultConfigs.ecomusHeader.colors;
  const navigation = config?.navigation || defaultConfigs.ecomusHeader.navigation;
  const actions = config?.actions || defaultConfigs.ecomusHeader.actions;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${colors.background} border-b ${colors.borders.default} sticky top-0 z-50 shadow-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            {brand.logo && (
              <div className={`w-10 h-10 ${brand.logo.gradient} rounded-lg flex items-center justify-center`}>
                <span className="text-white font-bold text-xl">{brand.logo.letter}</span>
              </div>
            )}
            {brand.name && (
              <span className={`text-2xl font-bold ${colors.text.primary}`}>{brand.name}</span>
            )}
          </motion.div>

          {navigation && navigation.length > 0 && (
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`${colors.text.link} font-medium transition-colors relative group`}
                >
                  {item.name}
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"
                  />
                </motion.a>
              ))}
            </nav>
          )}

          <div className="flex items-center gap-4">
            {actions.search && actions.search.enabled && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}
              >
                <Search className={`w-5 h-5 ${colors.text.secondary}`} />
              </motion.button>
            )}

            {actions.account && actions.account.enabled && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}
              >
                <User className={`w-5 h-5 ${colors.text.secondary}`} />
              </motion.button>
            )}

            {actions.wishlist && actions.wishlist.enabled && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}
              >
                <Heart className={`w-5 h-5 ${colors.text.secondary}`} />
                {actions.wishlist.count > 0 && (
                  <span className={`absolute top-1 right-1 w-5 h-5 ${colors.buttons.badge} text-xs rounded-full flex items-center justify-center font-semibold`}>
                    {actions.wishlist.count}
                  </span>
                )}
              </motion.button>
            )}

            {actions.cart && actions.cart.enabled && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 ${colors.buttons.icon} rounded-full transition-colors relative`}
              >
                <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
                {actions.cart.count > 0 && (
                  <span className={`absolute top-1 right-1 w-5 h-5 ${colors.buttons.badge} text-xs rounded-full flex items-center justify-center font-semibold`}>
                    {actions.cart.count}
                  </span>
                )}
              </motion.button>
            )}

            {actions.menu && actions.menu.enabled && actions.menu.mobileOnly && (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2 ${colors.buttons.icon} rounded-full transition-colors`}
              >
                {isMenuOpen ? (
                  <X className={`w-5 h-5 ${colors.text.secondary}`} />
                ) : (
                  <Menu className={`w-5 h-5 ${colors.text.secondary}`} />
                )}
              </motion.button>
            )}
          </div>
        </div>

        {isSearchOpen && actions.search && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="pb-4"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={actions.search.placeholder}
                className={`w-full pl-10 pr-4 py-3 border ${colors.borders.input} rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                autoFocus
              />
            </div>
          </motion.div>
        )}

        {isMenuOpen && navigation && navigation.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t ${colors.borders.default} py-4`}
          >
            <nav className="flex flex-col gap-4">
              {navigation.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`${colors.text.link} font-medium transition-colors py-2`}
                >
                  {item.name}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}

