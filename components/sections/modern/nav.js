"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

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

// Default configuration for each nav type
const defaultConfigs = {
  nav1: {
    links: [
      {
        text: "Home",
        href: "/",
        icon: null
      },
      {
        text: "About Us",
        href: "/about",
        icon: null
      },
      {
        text: "Services",
        href: "/services",
        icon: null
      },
      {
        text: "Contact",
        href: "/contact",
        icon: null
      }
    ],
    brand: {
      name: "Brand",
      logo: "/logo.png",
      href: "/"
    }
  },
  nav2: {
    links: [
      {
        text: "Home",
        href: "/",
        icon: null
      },
      {
        text: "About",
        href: "/about",
        icon: null
      },
      {
        text: "Services",
        href: "/services",
        icon: null
      }
    ],
    brand: {
      name: "Brand",
      logo: "/logo.png",
      href: "/"
    }
  },
  nav3: {
    links: [
      {
        text: "Home",
        href: "/",
        icon: null
      },
      {
        text: "About",
        href: "/about",
        icon: null
      },
      {
        text: "Contact",
        href: "/contact",
        icon: null
      }
    ],
    brand: {
      name: "Brand",
      logo: "/logo.png",
      href: "/"
    }
  }
};

/**
 * Nav Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "nav")
 * @param {string} props.type - Nav type: "nav1" | "nav2" | "nav3" (default: "nav1")
 * @param {string} props.variant - Variant: "desktop" | "mobile" (default: "desktop")
 * @param {Object} props.content - Content configuration object with type-specific configs
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.showBrand - Whether to show brand (default: true)
 * @param {boolean} props.showIcons - Whether to show icons (default: true)
 */
export default function Nav({ 
  component = "nav",
  type = "nav1",
  variant = "desktop",
  content = {},
  className = "",
  showBrand = true,
  showIcons = true
}) {
  // Validate nav type
  const validTypes = ["nav1", "nav2", "nav3"];
  const navType = validTypes.includes(type) ? type : "nav1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[navType] || defaultConfigs.nav1;
  
  // Get custom config from content prop
  const customConfig = content[navType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`Nav: Invalid config for type "${navType}", using defaults`);
    return <Nav1 config={defaultConfigs.nav1} variant={variant} className={className} showBrand={showBrand} showIcons={showIcons} />;
  }
  
  // Route to appropriate nav component
  if (navType === "nav1") {
    if (!config.links || !Array.isArray(config.links) || config.links.length === 0) {
      console.warn("Nav1: No links provided, using default");
      config.links = defaultConfigs.nav1.links;
    }
    return <Nav1 config={config} variant={variant} className={className} showBrand={showBrand} showIcons={showIcons} />;
  }
  
  if (navType === "nav2") {
    if (!config.links || !Array.isArray(config.links) || config.links.length === 0) {
      console.warn("Nav2: No links provided, using default");
      config.links = defaultConfigs.nav2.links;
    }
    return <Nav2 config={config} className={className} showBrand={showBrand} />;
  }
  
  if (navType === "nav3") {
    if (!config.links || !Array.isArray(config.links) || config.links.length === 0) {
      console.warn("Nav3: No links provided, using default");
      config.links = defaultConfigs.nav3.links;
    }
    return <Nav3 config={config} className={className} showIcons={showIcons} />;
  }
  
  // Default fallback
  return null;
}

// Nav 1 Component - Standard navigation with desktop and mobile variants
function Nav1({ config, variant, className, showBrand, showIcons }) {
  const pathname = usePathname();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const links = config?.links || defaultConfigs.nav1.links;
  const brand = config?.brand || defaultConfigs.nav1.brand;

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLinkClick = () => {
    setIsDropdownOpen(false);
  };

  if (variant === "mobile") {
    return (
      <div className={`space-y-1 ${className}`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={handleLinkClick}
            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive(link.href)
                ? "bg-blue-600 text-white"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            }`}
          >
            {showIcons && link.icon && <span className="mr-3">{link.icon}</span>}
            {link.text}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center space-x-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              isActive(link.href)
                ? "text-blue-600"
                : "text-slate-600 hover:text-slate-900"
            }`}
          >
            {showIcons && link.icon && <span className="mr-2">{link.icon}</span>}
            {link.text}
          </Link>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="lg:hidden">
        <button
          onClick={handleDropdownToggle}
          className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            isDropdownOpen || links.some(link => isActive(link.href))
              ? "text-blue-600 bg-blue-50"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Menu
          <svg
            className={`w-4 h-4 ml-2 transition-transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-slate-200 z-50">
            <div className="py-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className={`flex items-center px-4 py-2 text-sm transition-colors ${
                    isActive(link.href)
                      ? "bg-blue-50 text-blue-700"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {showIcons && link.icon && <span className="mr-3">{link.icon}</span>}
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Nav 2 Component - Horizontal navigation with brand
function Nav2({ config, className, showBrand }) {
  const pathname = usePathname();
  
  const links = config?.links || defaultConfigs.nav2.links;
  const brand = config?.brand || defaultConfigs.nav2.brand;

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`bg-white border-b border-slate-200 ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          {showBrand && brand && (
            <Link href={brand.href} className="flex items-center">
              <span className="text-xl font-bold text-slate-900">
                {brand.name}
              </span>
            </Link>
          )}
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

// Nav 3 Component - Centered navigation
function Nav3({ config, className, showIcons }) {
  const pathname = usePathname();
  
  const links = config?.links || defaultConfigs.nav3.links;

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={`bg-slate-50 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center h-16">
          {/* Centered Navigation Links */}
          <div className="flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isActive(link.href)
                    ? "bg-blue-600 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-white"
                }`}
              >
                {showIcons && link.icon && <span className="mr-2">{link.icon}</span>}
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

