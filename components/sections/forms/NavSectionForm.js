"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different nav types and their fields
const NAV_TYPE_CONFIG = {
  nav1: {
    label: "Nav 1 - Standard Navigation",
    fields: ["links", "brand"],
    description: "Standard navigation with desktop and mobile variants. Supports icons and active state highlighting."
  },
  nav2: {
    label: "Nav 2 - Horizontal with Brand",
    fields: ["links", "brand"],
    description: "Horizontal navigation with brand logo/name on the left. Active link shows bottom border."
  },
  nav3: {
    label: "Nav 3 - Centered Navigation",
    fields: ["links"],
    description: "Centered navigation with rounded active state. Clean, minimal design."
  }
};

export default function NavSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(NAV_TYPE_CONFIG)[0] || "nav1";
    const initialData = { navType: firstType };

    initialData.links = [
      {
        text: "Home",
        href: "/",
        icon: null
      },
      {
        text: "About",
        href: "/about",
        icon: null
      }
    ];

    if (firstType === "nav1" || firstType === "nav2") {
      initialData.brand = {
        name: "Brand",
        logo: "/logo.png",
        href: "/"
      };
    }

    return initialData;
  };

  const [formData, setFormData] = useState(initializeFormData());
  const [hasChanges, setHasChanges] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  // Initialize form with existing data if editing
  useEffect(() => {
    if (!sectionData) return;

    const firstType = Object.keys(NAV_TYPE_CONFIG)[0] || "nav1";
    const navType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { navType };

    // Load data based on nav type
    const config = content[navType] || {};
    updatedFormData.links = config.links || formData.links || [];
    updatedFormData.brand = config.brand || formData.brand || {};

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

    if (field === "navType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Links management
  const addLink = () => {
    const currentLinks = formData.links || [];
    const newLink = {
      text: "New Link",
      href: "#",
      icon: null
    };
    handleChange("links", [...currentLinks, newLink]);
  };

  const removeLink = (index) => {
    const updatedLinks = formData.links.filter((_, i) => i !== index);
    handleChange("links", updatedLinks);
  };

  const updateLink = (index, field, value) => {
    const updatedLinks = formData.links.map((link, i) => 
      i === index ? { ...link, [field]: value } : link
    );
    handleChange("links", updatedLinks);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.links || formData.links.length === 0) {
      errors.push("At least one navigation link is required");
    } else {
      formData.links.forEach((link, index) => {
        if (!link.text || link.text.trim() === "") {
          errors.push(`Link ${index + 1}: Text is required`);
        }
        if (!link.href || link.href.trim() === "") {
          errors.push(`Link ${index + 1}: Href is required`);
        }
      });
    }

    if ((formData.navType === "nav1" || formData.navType === "nav2") && formData.brand) {
      if (!formData.brand.name || formData.brand.name.trim() === "") {
        errors.push("Brand name is required");
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("NavSectionForm: No changes detected, skipping save");
      return;
    }

    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { navType, links, brand } = formData;

    const navData = {
      component: "nav",
      type: navType,
      content: {}
    };

    navData.content[navType] = {};

    navData.content[navType].links = links || [];

    if ((navType === "nav1" || navType === "nav2") && brand) {
      navData.content[navType].brand = brand;
    }

    console.log("Saving nav content:", navData);

    onSave(navData);
    setHasChanges(false);
  };

  const currentNavConfig = NAV_TYPE_CONFIG[formData.navType] || NAV_TYPE_CONFIG.nav1;

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
          Nav Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.navType}
          onChange={(e) => handleChange("navType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(NAV_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentNavConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Nav Type Info:</p>
            <p className="text-sm text-blue-700">{currentNavConfig.description}</p>
          </div>
        )}
      </div>

      {/* Brand Configuration for nav1, nav2 */}
      {(formData.navType === "nav1" || formData.navType === "nav2") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Brand Configuration</label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.brand?.name || ""}
                onChange={(e) => handleChange("brand", {
                  ...formData.brand,
                  name: e.target.value
                })}
                placeholder="Brand"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Logo</label>
              <input
                type="text"
                value={formData.brand?.logo || ""}
                onChange={(e) => handleChange("brand", {
                  ...formData.brand,
                  logo: e.target.value
                })}
                placeholder="/logo.png"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Href</label>
              <input
                type="text"
                value={formData.brand?.href || ""}
                onChange={(e) => handleChange("brand", {
                  ...formData.brand,
                  href: e.target.value
                })}
                placeholder="/"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation Links */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Navigation Links ({formData.links?.length || 0})
          </label>
          <button
            type="button"
            onClick={addLink}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Add Link
          </button>
        </div>
        {formData.links?.map((link, index) => (
          <div key={index} className="mb-2 flex items-center gap-2">
            <input
              type="text"
              value={link.text || ""}
              onChange={(e) => updateLink(index, "text", e.target.value)}
              placeholder="Link text"
              required
              className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              value={link.href || ""}
              onChange={(e) => updateLink(index, "href", e.target.value)}
              placeholder="#"
              required
              className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => removeLink(index)}
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-3 w-3" />
            </button>
          </div>
        ))}
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

