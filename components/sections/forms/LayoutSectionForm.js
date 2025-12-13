"use client";

import { useState, useEffect } from "react";
import { Save } from "lucide-react";

// Configuration for different layout types and their fields
const LAYOUT_TYPE_CONFIG = {
  layout1: {
    label: "Layout 1 - Standard Layout",
    fields: ["header", "footer", "main", "container"],
    description: "Standard layout with header and footer. Main content area with default padding."
  },
  layout2: {
    label: "Layout 2 - Custom Header Styling",
    fields: ["header", "footer", "main", "container"],
    description: "Layout with sticky header, custom main content styling, and footer at bottom."
  },
  layout3: {
    label: "Layout 3 - Minimal Layout",
    fields: ["header", "footer", "main", "container"],
    description: "Minimal layout with borders, custom spacing, and centered content."
  }
};

export default function LayoutSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(LAYOUT_TYPE_CONFIG)[0] || "layout1";
    const initialData = { layoutType: firstType };

    initialData.header = {
      type: "header1",
      showHeader: true
    };
    initialData.footer = {
      type: "footer1", 
      showFooter: true
    };
    initialData.main = {
      className: "flex-1",
      padding: "py-0"
    };
    initialData.container = {
      className: "min-h-screen flex flex-col"
    };

    return initialData;
  };

  const [formData, setFormData] = useState(initializeFormData());
  const [hasChanges, setHasChanges] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  // Initialize form with existing data if editing
  useEffect(() => {
    if (!sectionData) return;

    const firstType = Object.keys(LAYOUT_TYPE_CONFIG)[0] || "layout1";
    const layoutType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { layoutType };

    // Load data based on layout type
    const config = content[layoutType] || {};
    updatedFormData.header = config.header || formData.header || {};
    updatedFormData.footer = config.footer || formData.footer || {};
    updatedFormData.main = config.main || formData.main || {};
    updatedFormData.container = config.container || formData.container || {};

    setFormData(updatedFormData);
    setHasChanges(false);
  }, [sectionData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    setHasChanges(true);
    
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }

    if (field === "layoutType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.header || !formData.header.type || formData.header.type.trim() === "") {
      errors.push("Header type is required");
    }

    if (!formData.footer || !formData.footer.type || formData.footer.type.trim() === "") {
      errors.push("Footer type is required");
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("LayoutSectionForm: No changes detected, skipping save");
      return;
    }

    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { layoutType, header, footer, main, container } = formData;

    const layoutData = {
      component: "layout",
      type: layoutType,
      content: {}
    };

    layoutData.content[layoutType] = {};

    if (header) {
      layoutData.content[layoutType].header = header;
    }

    if (footer) {
      layoutData.content[layoutType].footer = footer;
    }

    if (main) {
      layoutData.content[layoutType].main = main;
    }

    if (container) {
      layoutData.content[layoutType].container = container;
    }

    console.log("Saving layout content:", layoutData);

    onSave(layoutData);
    setHasChanges(false);
  };

  const currentLayoutConfig = LAYOUT_TYPE_CONFIG[formData.layoutType] || LAYOUT_TYPE_CONFIG.layout1;

  // Header types for dropdown
  const headerTypes = ["header1", "header2", "header3", "ecomusHeader"];
  const footerTypes = ["footer1", "footer2", "footer3", "ecomusFooter"];

  return (
    <div className="space-y-4 p-4">
      {validationErrors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <p className="text-sm font-medium text-red-800 mb-2">Please fix the following errors:</p>
          <ul className="list-disc list-inside text-sm text-red-700 space-y-1">
            {validationErrors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Layout Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.layoutType}
          onChange={(e) => handleChange("layoutType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(LAYOUT_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentLayoutConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Layout Type Info:</p>
            <p className="text-sm text-blue-700">{currentLayoutConfig.description}</p>
          </div>
        )}
      </div>

      {/* Header Configuration */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-3">Header Configuration</label>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.header?.showHeader || false}
              onChange={(e) => handleChange("header", {
                ...formData.header,
                showHeader: e.target.checked
              })}
              className="rounded"
            />
            <label className="text-sm text-gray-700">Show Header</label>
          </div>
          {formData.header?.showHeader && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Header Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.header?.type || "header1"}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  type: e.target.value
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              >
                {headerTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Footer Configuration */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-3">Footer Configuration</label>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={formData.footer?.showFooter || false}
              onChange={(e) => handleChange("footer", {
                ...formData.footer,
                showFooter: e.target.checked
              })}
              className="rounded"
            />
            <label className="text-sm text-gray-700">Show Footer</label>
          </div>
          {formData.footer?.showFooter && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Footer Type <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.footer?.type || "footer1"}
                onChange={(e) => handleChange("footer", {
                  ...formData.footer,
                  type: e.target.value
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              >
                {footerTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Main Configuration */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-3">Main Content Configuration</label>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-600 mb-1">CSS Classes</label>
            <input
              type="text"
              value={formData.main?.className || ""}
              onChange={(e) => handleChange("main", {
                ...formData.main,
                className: e.target.value
              })}
              placeholder="flex-1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Padding</label>
            <input
              type="text"
              value={formData.main?.padding || ""}
              onChange={(e) => handleChange("main", {
                ...formData.main,
                padding: e.target.value
              })}
              placeholder="py-0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Container Configuration */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-3">Container Configuration</label>
        <div>
          <label className="block text-xs text-gray-600 mb-1">CSS Classes</label>
          <input
            type="text"
            value={formData.container?.className || ""}
            onChange={(e) => handleChange("container", {
              ...formData.container,
              className: e.target.value
            })}
            placeholder="min-h-screen flex flex-col"
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-between items-center pt-2 border-t">
        <div className="text-xs text-gray-500">
          {hasChanges && <span className="text-orange-600">● Unsaved changes</span>}
          {!hasChanges && <span className="text-green-600">✓ All changes saved</span>}
        </div>
        <button
          onClick={handleSave}
          disabled={!hasChanges}
          className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
            hasChanges
              ? "bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          title={hasChanges ? "Save your changes" : "No changes to save"}
        >
          <Save className="h-4 w-4" />
          {hasChanges 
            ? "Save Changes" 
            : (sectionData?.id && sectionData.id.startsWith('temp-') 
                ? "Make changes to save" 
                : "Saved")}
        </button>
      </div>
    </div>
  );
}

