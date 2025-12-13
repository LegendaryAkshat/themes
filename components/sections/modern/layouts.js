"use client";

import Header from "./header";
import Footer from "./footer";

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

// Default configuration for each layout type
const defaultConfigs = {
  layout1: {
    header: {
      type: "header1",
      showHeader: true
    },
    footer: {
      type: "footer1", 
      showFooter: true
    },
    main: {
      className: "flex-1",
      padding: "py-0"
    },
    container: {
      className: "min-h-screen flex flex-col"
    }
  },
  layout2: {
    header: {
      type: "header1",
      showHeader: true
    },
    footer: {
      type: "footer1",
      showFooter: true
    },
    main: {
      className: "flex-1",
      padding: "py-0"
    },
    container: {
      className: "min-h-screen flex flex-col bg-gray-50"
    }
  },
  layout3: {
    header: {
      type: "header1",
      showHeader: true
    },
    footer: {
      type: "footer1",
      showFooter: true
    },
    main: {
      className: "flex-1",
      padding: "py-8 px-4"
    },
    container: {
      className: "min-h-screen flex flex-col bg-white"
    }
  }
};

/**
 * Layout Component
 * 
 * @param {Object} props
 * @param {string} props.component - Component identifier (default: "layout")
 * @param {string} props.type - Layout type: "layout1" | "layout2" | "layout3" (default: "layout1")
 * @param {Object} props.content - Content configuration object with type-specific configs
 * @param {React.ReactNode} props.children - Child components to render
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.showHeader - Whether to show header (default: true)
 * @param {boolean} props.showFooter - Whether to show footer (default: true)
 */
export default function Layout({
  component = "layout",
  type = "layout1",
  content = {},
  children,
  className = "",
  showHeader = true,
  showFooter = true
}) {
  // Validate layout type
  const validTypes = ["layout1", "layout2", "layout3"];
  const layoutType = validTypes.includes(type) ? type : "layout1";
  
  // Get default config for the type
  const defaultConfig = defaultConfigs[layoutType] || defaultConfigs.layout1;
  
  // Get custom config from content prop
  const customConfig = content[layoutType] || {};
  
  // Deep merge custom config with defaults
  const config = deepMerge(defaultConfig, customConfig);
  
  // Validate config
  if (!config || typeof config !== 'object') {
    console.warn(`Layout: Invalid config for type "${layoutType}", using defaults`);
    return <Layout1 config={defaultConfigs.layout1} children={children} className={className} showHeader={showHeader} showFooter={showFooter} content={content} />;
  }
  
  // Route to appropriate layout component
  if (layoutType === "layout1") {
    return <Layout1 config={config} children={children} className={className} showHeader={showHeader} showFooter={showFooter} content={content} />;
  }
  
  if (layoutType === "layout2") {
    return <Layout2 config={config} children={children} className={className} showHeader={showHeader} showFooter={showFooter} content={content} />;
  }
  
  if (layoutType === "layout3") {
    return <Layout3 config={config} children={children} className={className} showHeader={showHeader} showFooter={showFooter} content={content} />;
  }
  
  // Default fallback
  return null;
}

// Layout 1 Component - Standard layout with header and footer
function Layout1({ config, children, className, showHeader, showFooter, content }) {
  const header = config?.header || defaultConfigs.layout1.header;
  const footer = config?.footer || defaultConfigs.layout1.footer;
  const main = config?.main || defaultConfigs.layout1.main;
  const container = config?.container || defaultConfigs.layout1.container;

  return (
    <div className={`${container.className} ${className}`}>
      {showHeader && header.showHeader && (
        <Header
          component="header"
          type={header.type}
          content={content}
        />
      )}
      <main className={`${main.className} ${main.padding}`}>
        {children}
      </main>
      {showFooter && footer.showFooter && (
        <Footer
          component="footer"
          type={footer.type}
          content={content}
        />
      )}
    </div>
  );
}

// Layout 2 Component - Layout with custom header styling
function Layout2({ config, children, className, showHeader, showFooter, content }) {
  const header = config?.header || defaultConfigs.layout2.header;
  const footer = config?.footer || defaultConfigs.layout2.footer;
  const main = config?.main || defaultConfigs.layout2.main;
  const container = config?.container || defaultConfigs.layout2.container;

  return (
    <div className={`${container.className} ${className}`}>
      {showHeader && header.showHeader && (
        <div className="sticky top-0 z-50">
          <Header
            component="header"
            type={header.type}
            content={content}
          />
        </div>
      )}
      <main className={`${main.className} ${main.padding} bg-white`}>
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
      {showFooter && footer.showFooter && (
        <div className="mt-auto">
          <Footer
            component="footer"
            type={footer.type}
            content={content}
          />
        </div>
      )}
    </div>
  );
}

// Layout 3 Component - Minimal layout with custom spacing
function Layout3({ config, children, className, showHeader, showFooter, content }) {
  const header = config?.header || defaultConfigs.layout3.header;
  const footer = config?.footer || defaultConfigs.layout3.footer;
  const main = config?.main || defaultConfigs.layout3.main;
  const container = config?.container || defaultConfigs.layout3.container;

  return (
    <div className={`${container.className} ${className}`}>
      {showHeader && header.showHeader && (
        <div className="border-b border-gray-200">
          <Header
            component="header"
            type={header.type}
            content={content}
          />
        </div>
      )}
      <main className={`${main.className} ${main.padding}`}>
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </main>
      {showFooter && footer.showFooter && (
        <div className="border-t border-gray-200 mt-auto">
          <Footer
            component="footer"
            type={footer.type}
            content={content}
          />
        </div>
      )}
    </div>
  );
}

