// Helper utility for dynamic page configurations
// This ensures Tailwind classes work correctly

export const cn = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

// Color presets for easy customization
export const colorPresets = {
  light: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-300"
    },
    borders: {
      default: "border-gray-200",
      light: "border-gray-300"
    }
  },
  dark: {
    background: "bg-gray-900",
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      light: "text-gray-500"
    },
    borders: {
      default: "border-gray-700",
      light: "border-gray-600"
    }
  },
  blue: {
    background: "bg-white",
    text: {
      primary: "text-blue-900",
      secondary: "text-blue-600",
      light: "text-blue-300"
    },
    borders: {
      default: "border-blue-200",
      light: "border-blue-300"
    }
  }
};

// Helper to merge configs
export const mergeConfig = (base, overrides) => {
  return { ...base, ...overrides };
};
