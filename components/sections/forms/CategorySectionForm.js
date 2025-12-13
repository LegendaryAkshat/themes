"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different category types and their fields
const CATEGORY_TYPE_CONFIG = {
  category1: {
    label: "Category 1 - Featured Categories with Badges",
    fields: ["categories"],
    description: "Featured category cards with badges, titles, descriptions, and buttons"
  },
  category2: {
    label: "Category 2 - Horizontal Scrolling Navigation",
    fields: ["navigation", "categories"],
    description: "Horizontal scrolling category navigation with simple text links"
  },
  category3: {
    label: "Category 3 - Browse by Category with Animations",
    fields: ["page", "categories", "cta", "grid"],
    description: "Category grid with icons, counts, descriptions, and GSAP animations"
  },
  category4: {
    label: "Category 4 - Simple Grid with Images",
    fields: ["page", "categories", "grid"],
    description: "Simple category grid with images, colors, and links"
  }
};

export default function CategorySectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(CATEGORY_TYPE_CONFIG)[0] || "category1";
    const initialData = { categoryType: firstType };

    if (firstType === "category1") {
      initialData.categories = [
        {
          badge: "Featured Category",
          badgeColor: "blue",
          title: "Premium Device Pro & Pro Max",
          description: "Discover our premium device collection.",
          button: {
            text: "Explore Collection",
            color: "blue",
            link: "#"
          }
        }
      ];
    } else if (firstType === "category2") {
      initialData.navigation = {
        prev: { enabled: true },
        next: { enabled: true }
      };
      initialData.categories = ["Laptop & PC", "Watches", "Mobile & Tablet"];
    } else if (firstType === "category3") {
      initialData.page = {
        badge: {
          text: "Explore Categories",
          icon: "Sparkles"
        },
        title: "Browse by Category",
        description: "Explore our wide range of product categories."
      };
      initialData.categories = [
        {
          name: "Laptop & PC",
          icon: "💻",
          count: 24,
          color: "blue",
          description: "High-performance computing",
          link: "#"
        }
      ];
      initialData.cta = {
        text: "View All Categories",
        icon: "ShoppingBag",
        enabled: true
      };
    } else if (firstType === "category4") {
      initialData.page = {
        title: "SHOP BY CATEGORIES",
        footer: "Discovery all new items"
      };
      initialData.categories = [
        {
          name: "Clothing",
          image: "👕",
          color: "blue",
          link: "#"
        }
      ];
    }

    return initialData;
  };

  const [formData, setFormData] = useState(initializeFormData());
  const [hasChanges, setHasChanges] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  // Initialize form with existing data if editing
  useEffect(() => {
    if (!sectionData) return;

    const firstType = Object.keys(CATEGORY_TYPE_CONFIG)[0] || "category1";
    const categoryType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { categoryType };

    // Load data based on category type
    const config = content[categoryType] || {};
    updatedFormData.categories = config.categories || formData.categories || [];
    updatedFormData.navigation = config.navigation || formData.navigation || {};
    updatedFormData.page = config.page || formData.page || {};
    updatedFormData.cta = config.cta || formData.cta || {};
    updatedFormData.grid = config.grid || formData.grid || {};

    setFormData(updatedFormData);
    setHasChanges(false);
  }, [sectionData]);

  const handleChange = (field, value) => {
    const updated = { ...formData, [field]: value };
    setFormData(updated);
    setHasChanges(true);
    
    // Clear validation errors when user makes changes
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }

    if (field === "categoryType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Category management for category1
  const addCategory1 = () => {
    const currentCategories = formData.categories || [];
    const newCategory = {
      badge: "Featured Category",
      badgeColor: "blue",
      title: "New Category",
      description: "Category description",
      button: {
        text: "Explore",
        color: "blue",
        link: "#"
      }
    };
    handleChange("categories", [...currentCategories, newCategory]);
  };

  const removeCategory1 = (index) => {
    const updatedCategories = formData.categories.filter((_, i) => i !== index);
    handleChange("categories", updatedCategories);
  };

  const updateCategory1 = (index, field, value) => {
    const updatedCategories = formData.categories.map((category, i) => {
      if (i === index) {
        if (field.startsWith('button.')) {
          const buttonField = field.split('.')[1];
          return {
            ...category,
            button: {
              ...category.button,
              [buttonField]: value
            }
          };
        }
        return { ...category, [field]: value };
      }
      return category;
    });
    handleChange("categories", updatedCategories);
  };

  // Category management for category2
  const addCategory2 = () => {
    const currentCategories = formData.categories || [];
    handleChange("categories", [...currentCategories, "New Category"]);
  };

  const removeCategory2 = (index) => {
    const updatedCategories = formData.categories.filter((_, i) => i !== index);
    handleChange("categories", updatedCategories);
  };

  const updateCategory2 = (index, value) => {
    const updatedCategories = formData.categories.map((cat, i) => 
      i === index ? value : cat
    );
    handleChange("categories", updatedCategories);
  };

  // Category management for category3
  const addCategory3 = () => {
    const currentCategories = formData.categories || [];
    const newCategory = {
      name: "New Category",
      icon: "📦",
      count: 0,
      color: "blue",
      description: "Category description",
      link: "#"
    };
    handleChange("categories", [...currentCategories, newCategory]);
  };

  const removeCategory3 = (index) => {
    const updatedCategories = formData.categories.filter((_, i) => i !== index);
    handleChange("categories", updatedCategories);
  };

  const updateCategory3 = (index, field, value) => {
    const updatedCategories = formData.categories.map((category, i) => 
      i === index ? { ...category, [field]: value } : category
    );
    handleChange("categories", updatedCategories);
  };

  // Category management for category4
  const addCategory4 = () => {
    const currentCategories = formData.categories || [];
    const newCategory = {
      name: "New Category",
      image: "📦",
      color: "blue",
      link: "#"
    };
    handleChange("categories", [...currentCategories, newCategory]);
  };

  const removeCategory4 = (index) => {
    const updatedCategories = formData.categories.filter((_, i) => i !== index);
    handleChange("categories", updatedCategories);
  };

  const updateCategory4 = (index, field, value) => {
    const updatedCategories = formData.categories.map((category, i) => 
      i === index ? { ...category, [field]: value } : category
    );
    handleChange("categories", updatedCategories);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.categories || formData.categories.length === 0) {
      errors.push("At least one category is required");
    } else {
      formData.categories.forEach((category, index) => {
        if (formData.categoryType === "category1") {
          if (!category.title || category.title.trim() === "") {
            errors.push(`Category ${index + 1}: Title is required`);
          }
        } else if (formData.categoryType === "category2") {
          const categoryName = typeof category === 'string' ? category : category.name;
          if (!categoryName || categoryName.trim() === "") {
            errors.push(`Category ${index + 1}: Name is required`);
          }
        } else if (formData.categoryType === "category3" || formData.categoryType === "category4") {
          if (!category.name || category.name.trim() === "") {
            errors.push(`Category ${index + 1}: Name is required`);
          }
        }
      });
    }

    if (formData.categoryType === "category3") {
      if (!formData.page?.title || formData.page.title.trim() === "") {
        errors.push("Page title is required");
      }
    } else if (formData.categoryType === "category4") {
      if (!formData.page?.title || formData.page.title.trim() === "") {
        errors.push("Page title is required");
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("CategorySectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { categoryType, categories, navigation, page, cta, grid } = formData;

    // Structure data according to categories.js component expectations
    const categoryData = {
      component: "categories",
      type: categoryType,
      content: {}
    };

    // Add type-specific data to content
    if (categoryType === "category1") {
      categoryData.content[categoryType] = {
        categories: categories || []
      };
    } else if (categoryType === "category2") {
      categoryData.content[categoryType] = {
        navigation: navigation || {},
        categories: categories || []
      };
    } else if (categoryType === "category3") {
      categoryData.content[categoryType] = {
        page: page || {},
        categories: categories || [],
        cta: cta || {},
        grid: grid || {}
      };
    } else if (categoryType === "category4") {
      categoryData.content[categoryType] = {
        page: page || {},
        categories: categories || [],
        grid: grid || {}
      };
    }

    console.log("Saving category content:", categoryData);

    onSave(categoryData);
    setHasChanges(false);
  };

  const currentCategoryConfig = CATEGORY_TYPE_CONFIG[formData.categoryType] || CATEGORY_TYPE_CONFIG.category1;

  return (
    <div className="space-y-4 p-4">
      {/* Validation Errors */}
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

      {/* Category Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Category Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.categoryType}
          onChange={(e) => handleChange("categoryType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(CATEGORY_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentCategoryConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Category Type Info:</p>
            <p className="text-sm text-blue-700">{currentCategoryConfig.description}</p>
          </div>
        )}
      </div>

      {/* Category1 - Featured Categories */}
      {formData.categoryType === "category1" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Categories ({formData.categories?.length || 0})
            </label>
            <button
              type="button"
              onClick={addCategory1}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Category
            </button>
          </div>
          {formData.categories?.map((category, index) => (
            <div key={index} className="mb-3 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Category {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeCategory1(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Badge</label>
                    <input
                      type="text"
                      value={category.badge || ""}
                      onChange={(e) => updateCategory1(index, "badge", e.target.value)}
                      placeholder="Featured Category"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Badge Color</label>
                    <select
                      value={category.badgeColor || "blue"}
                      onChange={(e) => updateCategory1(index, "badgeColor", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={category.title || ""}
                    onChange={(e) => updateCategory1(index, "title", e.target.value)}
                    placeholder="Category Title"
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Description</label>
                  <textarea
                    value={category.description || ""}
                    onChange={(e) => updateCategory1(index, "description", e.target.value)}
                    placeholder="Category description"
                    rows={2}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Button Text</label>
                    <input
                      type="text"
                      value={category.button?.text || ""}
                      onChange={(e) => updateCategory1(index, "button.text", e.target.value)}
                      placeholder="Explore"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Button Color</label>
                    <select
                      value={category.button?.color || "blue"}
                      onChange={(e) => updateCategory1(index, "button.color", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Button Link</label>
                    <input
                      type="text"
                      value={category.button?.link || ""}
                      onChange={(e) => updateCategory1(index, "button.link", e.target.value)}
                      placeholder="#"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Category2 - Horizontal Navigation */}
      {formData.categoryType === "category2" && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Navigation</label>
            <div className="grid grid-cols-2 gap-3">
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={formData.navigation?.prev?.enabled || false}
                  onChange={(e) => handleChange("navigation", {
                    ...formData.navigation,
                    prev: { enabled: e.target.checked }
                  })}
                  className="rounded"
                />
                Previous Button Enabled
              </label>
              <label className="flex items-center gap-2 text-xs text-gray-600">
                <input
                  type="checkbox"
                  checked={formData.navigation?.next?.enabled || false}
                  onChange={(e) => handleChange("navigation", {
                    ...formData.navigation,
                    next: { enabled: e.target.checked }
                  })}
                  className="rounded"
                />
                Next Button Enabled
              </label>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Categories ({formData.categories?.length || 0})
              </label>
              <button
                type="button"
                onClick={addCategory2}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Category
              </button>
            </div>
            {formData.categories?.map((category, index) => (
              <div key={index} className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  value={typeof category === 'string' ? category : category.name || ""}
                  onChange={(e) => updateCategory2(index, e.target.value)}
                  placeholder="Category Name"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeCategory2(index)}
                  className="text-red-600 hover:text-red-700 p-2"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Category3 - Browse by Category */}
      {formData.categoryType === "category3" && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Page Configuration</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.page?.title || ""}
                  onChange={(e) => handleChange("page", {
                    ...formData.page,
                    title: e.target.value
                  })}
                  placeholder="Browse by Category"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Description</label>
                <textarea
                  value={formData.page?.description || ""}
                  onChange={(e) => handleChange("page", {
                    ...formData.page,
                    description: e.target.value
                  })}
                  placeholder="Page description"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Badge Text</label>
                  <input
                    type="text"
                    value={formData.page?.badge?.text || ""}
                    onChange={(e) => handleChange("page", {
                      ...formData.page,
                      badge: {
                        ...formData.page?.badge,
                        text: e.target.value
                      }
                    })}
                    placeholder="Explore Categories"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Badge Icon</label>
                  <input
                    type="text"
                    value={formData.page?.badge?.icon || ""}
                    onChange={(e) => handleChange("page", {
                      ...formData.page,
                      badge: {
                        ...formData.page?.badge,
                        icon: e.target.value
                      }
                    })}
                    placeholder="Sparkles"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Categories ({formData.categories?.length || 0})
              </label>
              <button
                type="button"
                onClick={addCategory3}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Category
              </button>
            </div>
            {formData.categories?.map((category, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Category {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeCategory3(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={category.name || ""}
                      onChange={(e) => updateCategory3(index, "name", e.target.value)}
                      placeholder="Category Name"
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Icon</label>
                    <input
                      type="text"
                      value={category.icon || ""}
                      onChange={(e) => updateCategory3(index, "icon", e.target.value)}
                      placeholder="💻"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Count</label>
                    <input
                      type="number"
                      value={category.count || 0}
                      onChange={(e) => updateCategory3(index, "count", parseInt(e.target.value) || 0)}
                      placeholder="0"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Color</label>
                    <select
                      value={category.color || "blue"}
                      onChange={(e) => updateCategory3(index, "color", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                      <option value="green">Green</option>
                      <option value="red">Red</option>
                      <option value="orange">Orange</option>
                      <option value="pink">Pink</option>
                      <option value="indigo">Indigo</option>
                      <option value="yellow">Yellow</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Description</label>
                    <input
                      type="text"
                      value={category.description || ""}
                      onChange={(e) => updateCategory3(index, "description", e.target.value)}
                      placeholder="Category description"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Link</label>
                    <input
                      type="text"
                      value={category.link || ""}
                      onChange={(e) => updateCategory3(index, "link", e.target.value)}
                      placeholder="#"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">CTA Button</label>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.cta?.enabled || false}
                  onChange={(e) => handleChange("cta", {
                    ...formData.cta,
                    enabled: e.target.checked
                  })}
                  className="rounded"
                />
                <label className="text-xs text-gray-600">Enable CTA Button</label>
              </div>
              {formData.cta?.enabled && (
                <>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Button Text</label>
                    <input
                      type="text"
                      value={formData.cta?.text || ""}
                      onChange={(e) => handleChange("cta", {
                        ...formData.cta,
                        text: e.target.value
                      })}
                      placeholder="View All Categories"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Button Icon</label>
                    <input
                      type="text"
                      value={formData.cta?.icon || ""}
                      onChange={(e) => handleChange("cta", {
                        ...formData.cta,
                        icon: e.target.value
                      })}
                      placeholder="ShoppingBag"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Category4 - Simple Grid */}
      {formData.categoryType === "category4" && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Page Configuration</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.page?.title || ""}
                  onChange={(e) => handleChange("page", {
                    ...formData.page,
                    title: e.target.value
                  })}
                  placeholder="SHOP BY CATEGORIES"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Footer Text</label>
                <input
                  type="text"
                  value={formData.page?.footer || ""}
                  onChange={(e) => handleChange("page", {
                    ...formData.page,
                    footer: e.target.value
                  })}
                  placeholder="Discovery all new items"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Categories ({formData.categories?.length || 0})
              </label>
              <button
                type="button"
                onClick={addCategory4}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Category
              </button>
            </div>
            {formData.categories?.map((category, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Category {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeCategory4(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={category.name || ""}
                      onChange={(e) => updateCategory4(index, "name", e.target.value)}
                      placeholder="Category Name"
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Image</label>
                    <input
                      type="text"
                      value={category.image || ""}
                      onChange={(e) => updateCategory4(index, "image", e.target.value)}
                      placeholder="👕"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Color</label>
                    <select
                      value={category.color || "blue"}
                      onChange={(e) => updateCategory4(index, "color", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                      <option value="pink">Pink</option>
                      <option value="red">Red</option>
                      <option value="yellow">Yellow</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Link</label>
                    <input
                      type="text"
                      value={category.link || ""}
                      onChange={(e) => updateCategory4(index, "link", e.target.value)}
                      placeholder="#"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

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

