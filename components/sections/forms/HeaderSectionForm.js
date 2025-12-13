"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different header types and their fields
const HEADER_TYPE_CONFIG = {
  header1: {
    label: "Header 1 - With Search Bar",
    fields: ["brand", "search", "navigation", "actions"],
    description: "Header with search bar, category button, navigation links, and action buttons (cart, wishlist, account)."
  },
  header2: {
    label: "Header 2 - With Badge",
    fields: ["brand", "navigation", "actions"],
    description: "Header with brand badge, navigation links, and icon action buttons."
  },
  header3: {
    label: "Header 3 - With Motion Effects",
    fields: ["brand", "search", "actions"],
    description: "Header with motion effects, interactive search, and action buttons with hover animations."
  },
  ecomusHeader: {
    label: "Ecomus Header - With Mobile Menu",
    fields: ["brand", "navigation", "actions"],
    description: "E-commerce style header with mobile menu toggle, search toggle, and action buttons."
  }
};

export default function HeaderSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(HEADER_TYPE_CONFIG)[0] || "header1";
    const initialData = { headerType: firstType };

    if (firstType === "header1") {
      initialData.brand = {
        name: "NextMerce",
        logo: "N",
        logoColor: "bg-blue-600"
      };
      initialData.search = {
        enabled: true,
        placeholder: "I am shopping for...",
        categoryButton: {
          text: "All Categories",
          enabled: true
        }
      };
      initialData.navigation = [
        { label: "Popular", href: "#" }
      ];
      initialData.actions = {
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
      };
    } else if (firstType === "header2") {
      initialData.brand = {
        name: "Brand",
        suffix: "commerce",
        badge: "Demo",
        logo: {
          color: "bg-blue-600",
          icon: "bg-white"
        }
      };
      initialData.navigation = [
        { label: "Popular", href: "#" }
      ];
      initialData.actions = {
        search: { enabled: true, count: 0 },
        account: { enabled: true },
        wishlist: { enabled: true, count: 0 },
        cart: { enabled: true, count: 0 },
        menu: { enabled: true, mobileOnly: true }
      };
    } else if (firstType === "header3") {
      initialData.brand = {
        name: "Clare",
        trademark: "®",
        trademarkColor: "text-orange-500"
      };
      initialData.search = {
        placeholder: "Search your favorite product",
        categoryButton: "Select Category",
        enabled: true
      };
      initialData.actions = {
        user: { enabled: true, hasBadge: true },
        wishlist: { enabled: true, count: 0 },
        cart: { enabled: true, count: 0 },
        menu: { enabled: true, mobileOnly: true }
      };
    } else if (firstType === "ecomusHeader") {
      initialData.brand = {
        name: "Ecomus",
        logo: {
          gradient: "bg-gradient-to-br from-blue-600 to-indigo-600",
          letter: "E"
        }
      };
      initialData.navigation = [
        { name: "Home", href: "#" }
      ];
      initialData.actions = {
        search: { enabled: true, placeholder: "Search products..." },
        account: { enabled: true },
        wishlist: { enabled: true, count: 3 },
        cart: { enabled: true, count: 0 },
        menu: { enabled: true, mobileOnly: true }
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

    const firstType = Object.keys(HEADER_TYPE_CONFIG)[0] || "header1";
    const headerType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { headerType };

    // Load data based on header type
    const config = content[headerType] || {};
    updatedFormData.brand = config.brand || formData.brand || {};
    updatedFormData.search = config.search || formData.search || {};
    updatedFormData.navigation = config.navigation || formData.navigation || [];
    updatedFormData.actions = config.actions || formData.actions || {};

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

    if (field === "headerType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Navigation management
  const addNavigationItem = () => {
    const currentNav = formData.navigation || [];
    let newItem;
    
    if (formData.headerType === "ecomusHeader") {
      newItem = { name: "New Link", href: "#" };
    } else {
      newItem = { label: "New Link", href: "#" };
    }
    
    handleChange("navigation", [...currentNav, newItem]);
  };

  const removeNavigationItem = (index) => {
    const updatedNav = formData.navigation.filter((_, i) => i !== index);
    handleChange("navigation", updatedNav);
  };

  const updateNavigationItem = (index, field, value) => {
    const updatedNav = formData.navigation.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    handleChange("navigation", updatedNav);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.brand?.name || formData.brand.name.trim() === "") {
      errors.push("Brand name is required");
    }

    if (formData.headerType === "header1" || formData.headerType === "header3") {
      if (formData.search && formData.search.enabled) {
        if (!formData.search.placeholder || formData.search.placeholder.trim() === "") {
          errors.push("Search placeholder is required when search is enabled");
        }
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("HeaderSectionForm: No changes detected, skipping save");
      return;
    }

    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { headerType, brand, search, navigation, actions } = formData;

    const headerData = {
      component: "header",
      type: headerType,
      content: {}
    };

    headerData.content[headerType] = {};

    if (brand) {
      headerData.content[headerType].brand = brand;
    }

    if (search) {
      headerData.content[headerType].search = search;
    }

    if (navigation) {
      headerData.content[headerType].navigation = navigation;
    }

    if (actions) {
      headerData.content[headerType].actions = actions;
    }

    console.log("Saving header content:", headerData);

    onSave(headerData);
    setHasChanges(false);
  };

  const currentHeaderConfig = HEADER_TYPE_CONFIG[formData.headerType] || HEADER_TYPE_CONFIG.header1;

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
          Header Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.headerType}
          onChange={(e) => handleChange("headerType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(HEADER_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentHeaderConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Header Type Info:</p>
            <p className="text-sm text-blue-700">{currentHeaderConfig.description}</p>
          </div>
        )}
      </div>

      {/* Brand Configuration */}
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
              placeholder="NextMerce"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {(formData.headerType === "header1" || formData.headerType === "header2") && (
            <>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Logo (Initial/Letter)</label>
                <input
                  type="text"
                  value={formData.brand?.logo || ""}
                  onChange={(e) => handleChange("brand", {
                    ...formData.brand,
                    logo: e.target.value
                  })}
                  placeholder="N"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {formData.headerType === "header1" && (
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Logo Color</label>
                  <input
                    type="text"
                    value={formData.brand?.logoColor || ""}
                    onChange={(e) => handleChange("brand", {
                      ...formData.brand,
                      logoColor: e.target.value
                    })}
                    placeholder="bg-blue-600"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              {formData.headerType === "header2" && (
                <>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Suffix</label>
                    <input
                      type="text"
                      value={formData.brand?.suffix || ""}
                      onChange={(e) => handleChange("brand", {
                        ...formData.brand,
                        suffix: e.target.value
                      })}
                      placeholder="commerce"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Badge</label>
                    <input
                      type="text"
                      value={formData.brand?.badge || ""}
                      onChange={(e) => handleChange("brand", {
                        ...formData.brand,
                        badge: e.target.value
                      })}
                      placeholder="Demo"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}
            </>
          )}
          {formData.headerType === "header3" && (
            <>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Trademark</label>
                <input
                  type="text"
                  value={formData.brand?.trademark || ""}
                  onChange={(e) => handleChange("brand", {
                    ...formData.brand,
                    trademark: e.target.value
                  })}
                  placeholder="®"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Trademark Color</label>
                <input
                  type="text"
                  value={formData.brand?.trademarkColor || ""}
                  onChange={(e) => handleChange("brand", {
                    ...formData.brand,
                    trademarkColor: e.target.value
                  })}
                  placeholder="text-orange-500"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}
          {formData.headerType === "ecomusHeader" && (
            <>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Logo Gradient</label>
                <input
                  type="text"
                  value={formData.brand?.logo?.gradient || ""}
                  onChange={(e) => handleChange("brand", {
                    ...formData.brand,
                    logo: {
                      ...formData.brand?.logo,
                      gradient: e.target.value
                    }
                  })}
                  placeholder="bg-gradient-to-br from-blue-600 to-indigo-600"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Logo Letter</label>
                <input
                  type="text"
                  value={formData.brand?.logo?.letter || ""}
                  onChange={(e) => handleChange("brand", {
                    ...formData.brand,
                    logo: {
                      ...formData.brand?.logo,
                      letter: e.target.value
                    }
                  })}
                  placeholder="E"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Search Configuration for header1, header3 */}
      {(formData.headerType === "header1" || formData.headerType === "header3") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Search Configuration</label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.search?.enabled || false}
                onChange={(e) => handleChange("search", {
                  ...formData.search,
                  enabled: e.target.checked
                })}
                className="rounded"
              />
              <label className="text-sm text-gray-700">Enable Search</label>
            </div>
            {formData.search?.enabled && (
              <>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Placeholder <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.search?.placeholder || ""}
                    onChange={(e) => handleChange("search", {
                      ...formData.search,
                      placeholder: e.target.value
                    })}
                    placeholder="I am shopping for..."
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {formData.headerType === "header1" && (
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <input
                        type="checkbox"
                        checked={formData.search?.categoryButton?.enabled || false}
                        onChange={(e) => handleChange("search", {
                          ...formData.search,
                          categoryButton: {
                            ...formData.search?.categoryButton,
                            enabled: e.target.checked
                          }
                        })}
                        className="rounded"
                      />
                      <label className="text-sm text-gray-700">Enable Category Button</label>
                    </div>
                    {formData.search?.categoryButton?.enabled && (
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Category Button Text</label>
                        <input
                          type="text"
                          value={formData.search?.categoryButton?.text || ""}
                          onChange={(e) => handleChange("search", {
                            ...formData.search,
                            categoryButton: {
                              ...formData.search?.categoryButton,
                              text: e.target.value
                            }
                          })}
                          placeholder="All Categories"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    )}
                  </div>
                )}
                {formData.headerType === "header3" && (
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Category Button Text</label>
                    <input
                      type="text"
                      value={formData.search?.categoryButton || ""}
                      onChange={(e) => handleChange("search", {
                        ...formData.search,
                        categoryButton: e.target.value
                      })}
                      placeholder="Select Category"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}

      {/* Navigation Links */}
      {(formData.headerType === "header1" || formData.headerType === "header2" || formData.headerType === "ecomusHeader") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Navigation Links ({formData.navigation?.length || 0})
            </label>
            <button
              type="button"
              onClick={addNavigationItem}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Link
            </button>
          </div>
          {formData.navigation?.map((item, index) => (
            <div key={index} className="mb-2 flex items-center gap-2">
              <input
                type="text"
                value={formData.headerType === "ecomusHeader" ? (item.name || "") : (item.label || "")}
                onChange={(e) => updateNavigationItem(index, formData.headerType === "ecomusHeader" ? "name" : "label", e.target.value)}
                placeholder={formData.headerType === "ecomusHeader" ? "Link name" : "Link label"}
                className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={item.href || ""}
                onChange={(e) => updateNavigationItem(index, "href", e.target.value)}
                placeholder="#"
                className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
              />
              {formData.headerType === "header1" && (
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={item.hasDropdown || false}
                    onChange={(e) => updateNavigationItem(index, "hasDropdown", e.target.checked)}
                    className="rounded"
                  />
                  <label className="text-xs text-gray-600">Dropdown</label>
                </div>
              )}
              <button
                type="button"
                onClick={() => removeNavigationItem(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Actions Configuration */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-3">Actions Configuration</label>
        <div className="space-y-3">
          {formData.headerType === "header1" && (
            <>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.cart?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    cart: {
                      ...formData.actions?.cart,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Cart</label>
              </div>
              {formData.actions?.cart?.enabled && (
                <div className="grid grid-cols-2 gap-3 ml-6">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Count</label>
                    <input
                      type="number"
                      value={formData.actions?.cart?.count || 0}
                      onChange={(e) => handleChange("actions", {
                        ...formData.actions,
                        cart: {
                          ...formData.actions?.cart,
                          count: parseInt(e.target.value) || 0
                        }
                      })}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Href</label>
                    <input
                      type="text"
                      value={formData.actions?.cart?.href || ""}
                      onChange={(e) => handleChange("actions", {
                        ...formData.actions,
                        cart: {
                          ...formData.actions?.cart,
                          href: e.target.value
                        }
                      })}
                      placeholder="#"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.wishlist?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    wishlist: {
                      ...formData.actions?.wishlist,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Wishlist</label>
              </div>
              {formData.actions?.wishlist?.enabled && (
                <div className="grid grid-cols-2 gap-3 ml-6">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Count</label>
                    <input
                      type="number"
                      value={formData.actions?.wishlist?.count || 0}
                      onChange={(e) => handleChange("actions", {
                        ...formData.actions,
                        wishlist: {
                          ...formData.actions?.wishlist,
                          count: parseInt(e.target.value) || 0
                        }
                      })}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Href</label>
                    <input
                      type="text"
                      value={formData.actions?.wishlist?.href || ""}
                      onChange={(e) => handleChange("actions", {
                        ...formData.actions,
                        wishlist: {
                          ...formData.actions?.wishlist,
                          href: e.target.value
                        }
                      })}
                      placeholder="#"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.account?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    account: {
                      ...formData.actions?.account,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Account</label>
              </div>
              {formData.actions?.account?.enabled && (
                <div className="grid grid-cols-2 gap-3 ml-6">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Text</label>
                    <input
                      type="text"
                      value={formData.actions?.account?.text || ""}
                      onChange={(e) => handleChange("actions", {
                        ...formData.actions,
                        account: {
                          ...formData.actions?.account,
                          text: e.target.value
                        }
                      })}
                      placeholder="Sign In / Register"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Href</label>
                    <input
                      type="text"
                      value={formData.actions?.account?.href || ""}
                      onChange={(e) => handleChange("actions", {
                        ...formData.actions,
                        account: {
                          ...formData.actions?.account,
                          href: e.target.value
                        }
                      })}
                      placeholder="#"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}
            </>
          )}
          {(formData.headerType === "header2" || formData.headerType === "ecomusHeader") && (
            <>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.search?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    search: {
                      ...formData.actions?.search,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Search</label>
              </div>
              {formData.actions?.search?.enabled && formData.headerType === "ecomusHeader" && (
                <div className="ml-6">
                  <label className="block text-xs text-gray-600 mb-1">Placeholder</label>
                  <input
                    type="text"
                    value={formData.actions?.search?.placeholder || ""}
                    onChange={(e) => handleChange("actions", {
                      ...formData.actions,
                      search: {
                        ...formData.actions?.search,
                        placeholder: e.target.value
                      }
                    })}
                    placeholder="Search products..."
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.account?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    account: {
                      ...formData.actions?.account,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Account</label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.wishlist?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    wishlist: {
                      ...formData.actions?.wishlist,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Wishlist</label>
              </div>
              {formData.actions?.wishlist?.enabled && (
                <div className="ml-6">
                  <label className="block text-xs text-gray-600 mb-1">Count</label>
                  <input
                    type="number"
                    value={formData.actions?.wishlist?.count || 0}
                    onChange={(e) => handleChange("actions", {
                      ...formData.actions,
                      wishlist: {
                        ...formData.actions?.wishlist,
                        count: parseInt(e.target.value) || 0
                      }
                    })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.cart?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    cart: {
                      ...formData.actions?.cart,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Cart</label>
              </div>
              {formData.actions?.cart?.enabled && (
                <div className="ml-6">
                  <label className="block text-xs text-gray-600 mb-1">Count</label>
                  <input
                    type="number"
                    value={formData.actions?.cart?.count || 0}
                    onChange={(e) => handleChange("actions", {
                      ...formData.actions,
                      cart: {
                        ...formData.actions?.cart,
                        count: parseInt(e.target.value) || 0
                      }
                    })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.menu?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    menu: {
                      ...formData.actions?.menu,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Menu (Mobile Only)</label>
              </div>
            </>
          )}
          {formData.headerType === "header3" && (
            <>
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.user?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    user: {
                      ...formData.actions?.user,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable User</label>
              </div>
              {formData.actions?.user?.enabled && (
                <div className="ml-6">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.actions?.user?.hasBadge || false}
                      onChange={(e) => handleChange("actions", {
                        ...formData.actions,
                        user: {
                          ...formData.actions?.user,
                          hasBadge: e.target.checked
                        }
                      })}
                      className="rounded"
                    />
                    <label className="text-xs text-gray-600">Has Badge</label>
                  </div>
                </div>
              )}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.wishlist?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    wishlist: {
                      ...formData.actions?.wishlist,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Wishlist</label>
              </div>
              {formData.actions?.wishlist?.enabled && (
                <div className="ml-6">
                  <label className="block text-xs text-gray-600 mb-1">Count</label>
                  <input
                    type="number"
                    value={formData.actions?.wishlist?.count || 0}
                    onChange={(e) => handleChange("actions", {
                      ...formData.actions,
                      wishlist: {
                        ...formData.actions?.wishlist,
                        count: parseInt(e.target.value) || 0
                      }
                    })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.cart?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    cart: {
                      ...formData.actions?.cart,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Cart</label>
              </div>
              {formData.actions?.cart?.enabled && (
                <div className="ml-6">
                  <label className="block text-xs text-gray-600 mb-1">Count</label>
                  <input
                    type="number"
                    value={formData.actions?.cart?.count || 0}
                    onChange={(e) => handleChange("actions", {
                      ...formData.actions,
                      cart: {
                        ...formData.actions?.cart,
                        count: parseInt(e.target.value) || 0
                      }
                    })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.actions?.menu?.enabled || false}
                  onChange={(e) => handleChange("actions", {
                    ...formData.actions,
                    menu: {
                      ...formData.actions?.menu,
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Menu (Mobile Only)</label>
              </div>
            </>
          )}
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

