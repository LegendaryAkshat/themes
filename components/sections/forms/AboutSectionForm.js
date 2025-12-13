"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different about types and their fields
const ABOUT_TYPE_CONFIG = {
  about1: {
    label: "About 1 - Stats + Mission + Vision with Animations",
    fields: ["page", "stats", "mission", "vision"],
    description: "Feature-rich about section with animated stats, mission, and vision cards"
  },
  about2: {
    label: "About 2 - Simple Text Paragraphs",
    fields: ["page"],
    description: "Simple text-based about section with multiple paragraphs"
  },
  about3: {
    label: "About 3 - Stats + Mission + Vision with Gradients",
    fields: ["page", "stats", "mission", "vision"],
    description: "About section with stats, mission, and vision using gradient backgrounds"
  },
  about4: {
    label: "About 4 - Complex Content Sections",
    fields: ["page", "content"],
    description: "Complex about section with features lists and content sections"
  }
};

export default function AboutSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(ABOUT_TYPE_CONFIG)[0] || "about1";
    const initialData = { aboutType: firstType };

    if (firstType === "about1") {
      initialData.page = {
        badge: "Our Story",
        title: "About Us",
        description: "We are passionate about delivering exceptional products and services."
      };
      initialData.stats = [
        { icon: "Users", value: "10K+", label: "Happy Customers", color: "blue" }
      ];
      initialData.mission = {
        icon: "Target",
        title: "Our Mission",
        description: "To provide high-quality products and exceptional customer service."
      };
      initialData.vision = {
        icon: "Heart",
        title: "Our Vision",
        description: "To become the leading destination for quality products."
      };
    } else if (firstType === "about2") {
      initialData.page = {
        title: "About Us",
        content: ["Enter your about content here."]
      };
    } else if (firstType === "about3") {
      initialData.page = {
        title: "About Us",
        description: "We are a leading e-commerce platform."
      };
      initialData.stats = [
        { icon: "Users", value: "10K+", label: "Happy Customers" }
      ];
      initialData.mission = {
        title: "Our Mission",
        description: "To provide exceptional products and services."
      };
      initialData.vision = {
        title: "Our Vision",
        description: "To become the world's most trusted platform."
      };
    } else if (firstType === "about4") {
      initialData.page = {
        title: "About"
      };
      initialData.content = {
        intro: {
          text: "This website is built with",
          link: {
            text: "Next.js Commerce",
            href: "#"
          },
          description: ", which is a ecommerce template."
        },
        features: {
          title: "Support for real-world commerce features including:",
          items: ["Feature 1", "Feature 2"]
        },
        nextjs: {
          title: "This template also allows us to highlight newer Next.js features including:",
          items: ["Feature 1", "Feature 2"]
        },
        lastUpdated: "This document was last updated."
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

    const firstType = Object.keys(ABOUT_TYPE_CONFIG)[0] || "about1";
    const aboutType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { aboutType };

    // Load data based on about type
    const config = content[aboutType] || {};
    updatedFormData.page = config.page || formData.page || {};
    updatedFormData.stats = config.stats || formData.stats || [];
    updatedFormData.mission = config.mission || formData.mission || {};
    updatedFormData.vision = config.vision || formData.vision || {};
    updatedFormData.content = config.content || formData.content || {};

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

    if (field === "aboutType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Stats management
  const addStat = () => {
    const currentStats = formData.stats || [];
    const newStat = formData.aboutType === "about1" 
      ? { icon: "Users", value: "0", label: "New Stat", color: "blue" }
      : { icon: "Users", value: "0", label: "New Stat" };
    handleChange("stats", [...currentStats, newStat]);
  };

  const removeStat = (index) => {
    const updatedStats = formData.stats.filter((_, i) => i !== index);
    handleChange("stats", updatedStats);
  };

  const updateStat = (index, field, value) => {
    const updatedStats = formData.stats.map((stat, i) => 
      i === index ? { ...stat, [field]: value } : stat
    );
    handleChange("stats", updatedStats);
  };

  // Content paragraphs management for about2
  const addParagraph = () => {
    const currentContent = formData.page?.content || [];
    handleChange("page", {
      ...formData.page,
      content: [...currentContent, "New paragraph"]
    });
  };

  const removeParagraph = (index) => {
    const updatedContent = formData.page.content.filter((_, i) => i !== index);
    handleChange("page", {
      ...formData.page,
      content: updatedContent
    });
  };

  const updateParagraph = (index, value) => {
    const updatedContent = formData.page.content.map((para, i) => 
      i === index ? value : para
    );
    handleChange("page", {
      ...formData.page,
      content: updatedContent
    });
  };

  // Features items management for about4
  const addFeatureItem = (section) => {
    const currentItems = formData.content[section]?.items || [];
    handleChange("content", {
      ...formData.content,
      [section]: {
        ...formData.content[section],
        items: [...currentItems, "New feature"]
      }
    });
  };

  const removeFeatureItem = (section, index) => {
    const updatedItems = formData.content[section].items.filter((_, i) => i !== index);
    handleChange("content", {
      ...formData.content,
      [section]: {
        ...formData.content[section],
        items: updatedItems
      }
    });
  };

  const updateFeatureItem = (section, index, value) => {
    const updatedItems = formData.content[section].items.map((item, i) => 
      i === index ? value : item
    );
    handleChange("content", {
      ...formData.content,
      [section]: {
        ...formData.content[section],
        items: updatedItems
      }
    });
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.page?.title || formData.page.title.trim() === "") {
      errors.push("Page title is required");
    }

    if (formData.aboutType === "about1" || formData.aboutType === "about3") {
      if (!formData.stats || formData.stats.length === 0) {
        errors.push("At least one stat is required");
      } else {
        formData.stats.forEach((stat, index) => {
          if (!stat.label || stat.label.trim() === "") {
            errors.push(`Stat ${index + 1}: Label is required`);
          }
          if (!stat.value || stat.value.trim() === "") {
            errors.push(`Stat ${index + 1}: Value is required`);
          }
        });
      }
      if (!formData.mission?.title || formData.mission.title.trim() === "") {
        errors.push("Mission title is required");
      }
      if (!formData.vision?.title || formData.vision.title.trim() === "") {
        errors.push("Vision title is required");
      }
    } else if (formData.aboutType === "about2") {
      if (!formData.page?.content || formData.page.content.length === 0) {
        errors.push("At least one content paragraph is required");
      }
    } else if (formData.aboutType === "about4") {
      if (!formData.content?.features?.items || formData.content.features.items.length === 0) {
        errors.push("At least one feature item is required");
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("AboutSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { aboutType, page, stats, mission, vision, content } = formData;

    // Structure data according to about.js component expectations
    const aboutData = {
      component: "about",
      type: aboutType,
      content: {}
    };

    // Add type-specific data to content with proper defaults
    if (aboutType === "about1") {
      aboutData.content[aboutType] = {
        page: page || {},
        stats: stats || [],
        mission: mission || {},
        vision: vision || {}
      };
    } else if (aboutType === "about2") {
      aboutData.content[aboutType] = {
        page: page || {}
      };
    } else if (aboutType === "about3") {
      aboutData.content[aboutType] = {
        page: page || {},
        stats: stats || [],
        mission: mission || {},
        vision: vision || {}
      };
    } else if (aboutType === "about4") {
      aboutData.content[aboutType] = {
        page: page || {},
        content: content || {}
      };
    }

    console.log("Saving about content:", aboutData);

    onSave(aboutData);
    setHasChanges(false);
  };

  const currentAboutConfig = ABOUT_TYPE_CONFIG[formData.aboutType] || ABOUT_TYPE_CONFIG.about1;

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

      {/* About Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          About Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.aboutType}
          onChange={(e) => handleChange("aboutType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(ABOUT_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentAboutConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ About Type Info:</p>
            <p className="text-sm text-blue-700">{currentAboutConfig.description}</p>
            {formData.aboutType === "about1" && (
              <div className="mt-2 text-xs text-blue-600 space-y-1">
                <p>• Animated stats with counter effects</p>
                <p>• Mission and Vision cards with icons</p>
                <p>• GSAP scroll animations</p>
              </div>
            )}
            {formData.aboutType === "about2" && (
              <div className="mt-2 text-xs text-blue-600 space-y-1">
                <p>• Simple text-based layout</p>
                <p>• Multiple paragraph support</p>
                <p>• Clean and minimal design</p>
              </div>
            )}
            {formData.aboutType === "about3" && (
              <div className="mt-2 text-xs text-blue-600 space-y-1">
                <p>• Gradient backgrounds for sections</p>
                <p>• Stats with icon badges</p>
                <p>• Mission and Vision cards</p>
              </div>
            )}
            {formData.aboutType === "about4" && (
              <div className="mt-2 text-xs text-blue-600 space-y-1">
                <p>• Complex content sections</p>
                <p>• Features lists with links</p>
                <p>• Multiple content blocks</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Page Configuration - Common to all types */}
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
              placeholder="About Us"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          {(formData.aboutType === "about1" || formData.aboutType === "about3") && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">Description</label>
              <textarea
                value={formData.page?.description || ""}
                onChange={(e) => handleChange("page", {
                  ...formData.page,
                  description: e.target.value
                })}
                placeholder="Page description"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}

          {formData.aboutType === "about1" && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">Badge</label>
              <input
                type="text"
                value={formData.page?.badge || ""}
                onChange={(e) => handleChange("page", {
                  ...formData.page,
                  badge: e.target.value
                })}
                placeholder="Our Story"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* About2 - Content Paragraphs */}
      {formData.aboutType === "about2" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Content Paragraphs ({formData.page?.content?.length || 0})
            </label>
            <button
              type="button"
              onClick={addParagraph}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Paragraph
            </button>
          </div>
          {formData.page?.content?.map((paragraph, index) => (
            <div key={index} className="mb-3 flex items-start gap-2">
              <textarea
                value={paragraph}
                onChange={(e) => updateParagraph(index, e.target.value)}
                placeholder="Enter paragraph text"
                rows={3}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={() => removeParagraph(index)}
                className="text-red-600 hover:text-red-700 p-2"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Stats for about1 and about3 */}
      {(formData.aboutType === "about1" || formData.aboutType === "about3") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Stats ({formData.stats?.length || 0})
            </label>
            <button
              type="button"
              onClick={addStat}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Stat
            </button>
          </div>
          {formData.stats?.map((stat, index) => (
            <div key={index} className="mb-3 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Stat {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeStat(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className={`grid ${formData.aboutType === "about1" ? "grid-cols-4" : "grid-cols-3"} gap-2`}>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Icon</label>
                  <input
                    type="text"
                    value={stat.icon || ""}
                    onChange={(e) => updateStat(index, "icon", e.target.value)}
                    placeholder="Users"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Value <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={stat.value || ""}
                    onChange={(e) => updateStat(index, "value", e.target.value)}
                    placeholder="10K+"
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Label <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={stat.label || ""}
                    onChange={(e) => updateStat(index, "label", e.target.value)}
                    placeholder="Happy Customers"
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {formData.aboutType === "about1" && (
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Color</label>
                    <select
                      value={stat.color || "blue"}
                      onChange={(e) => updateStat(index, "color", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="blue">Blue</option>
                      <option value="purple">Purple</option>
                      <option value="green">Green</option>
                      <option value="orange">Orange</option>
                    </select>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Mission and Vision for about1 and about3 */}
      {(formData.aboutType === "about1" || formData.aboutType === "about3") && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mission */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Mission</label>
            <div className="space-y-3">
              {formData.aboutType === "about1" && (
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Icon</label>
                  <input
                    type="text"
                    value={formData.mission?.icon || ""}
                    onChange={(e) => handleChange("mission", {
                      ...formData.mission,
                      icon: e.target.value
                    })}
                    placeholder="Target"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.mission?.title || ""}
                  onChange={(e) => handleChange("mission", {
                    ...formData.mission,
                    title: e.target.value
                  })}
                  placeholder="Our Mission"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Description</label>
                <textarea
                  value={formData.mission?.description || ""}
                  onChange={(e) => handleChange("mission", {
                    ...formData.mission,
                    description: e.target.value
                  })}
                  placeholder="Mission description"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Vision */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Vision</label>
            <div className="space-y-3">
              {formData.aboutType === "about1" && (
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Icon</label>
                  <input
                    type="text"
                    value={formData.vision?.icon || ""}
                    onChange={(e) => handleChange("vision", {
                      ...formData.vision,
                      icon: e.target.value
                    })}
                    placeholder="Heart"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.vision?.title || ""}
                  onChange={(e) => handleChange("vision", {
                    ...formData.vision,
                    title: e.target.value
                  })}
                  placeholder="Our Vision"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Description</label>
                <textarea
                  value={formData.vision?.description || ""}
                  onChange={(e) => handleChange("vision", {
                    ...formData.vision,
                    description: e.target.value
                  })}
                  placeholder="Vision description"
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* About4 - Complex Content */}
      {formData.aboutType === "about4" && (
        <div className="space-y-4">
          {/* Intro */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Introduction</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Text</label>
                <input
                  type="text"
                  value={formData.content?.intro?.text || ""}
                  onChange={(e) => handleChange("content", {
                    ...formData.content,
                    intro: {
                      ...formData.content?.intro,
                      text: e.target.value
                    }
                  })}
                  placeholder="This website is built with"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Link Text</label>
                  <input
                    type="text"
                    value={formData.content?.intro?.link?.text || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      intro: {
                        ...formData.content?.intro,
                        link: {
                          ...formData.content?.intro?.link,
                          text: e.target.value
                        }
                      }
                    })}
                    placeholder="Next.js Commerce"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Link URL</label>
                  <input
                    type="text"
                    value={formData.content?.intro?.link?.href || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      intro: {
                        ...formData.content?.intro,
                        link: {
                          ...formData.content?.intro?.link,
                          href: e.target.value
                        }
                      }
                    })}
                    placeholder="#"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Description</label>
                <input
                  type="text"
                  value={formData.content?.intro?.description || ""}
                  onChange={(e) => handleChange("content", {
                    ...formData.content,
                    intro: {
                      ...formData.content?.intro,
                      description: e.target.value
                    }
                  })}
                  placeholder=", which is a ecommerce template."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">Features</label>
              <button
                type="button"
                onClick={() => addFeatureItem("features")}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Feature
              </button>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Title</label>
              <input
                type="text"
                value={formData.content?.features?.title || ""}
                onChange={(e) => handleChange("content", {
                  ...formData.content,
                  features: {
                    ...formData.content?.features,
                    title: e.target.value
                  }
                })}
                placeholder="Support for real-world commerce features including:"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {formData.content?.features?.items?.map((item, index) => (
              <div key={index} className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  value={typeof item === "string" ? item : item.text}
                  onChange={(e) => {
                    const items = formData.content.features.items.map((itm, i) => 
                      i === index ? e.target.value : itm
                    );
                    handleChange("content", {
                      ...formData.content,
                      features: {
                        ...formData.content.features,
                        items: items
                      }
                    });
                  }}
                  placeholder="Feature text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeFeatureItem("features", index)}
                  className="text-red-600 hover:text-red-700 p-2"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Next.js Features */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">Next.js Features</label>
              <button
                type="button"
                onClick={() => addFeatureItem("nextjs")}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Feature
              </button>
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Title</label>
              <input
                type="text"
                value={formData.content?.nextjs?.title || ""}
                onChange={(e) => handleChange("content", {
                  ...formData.content,
                  nextjs: {
                    ...formData.content?.nextjs,
                    title: e.target.value
                  }
                })}
                placeholder="This template also allows us to highlight newer Next.js features including:"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm mb-3 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {formData.content?.nextjs?.items?.map((item, index) => (
              <div key={index} className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  value={item}
                  onChange={(e) => updateFeatureItem("nextjs", index, e.target.value)}
                  placeholder="Feature text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeFeatureItem("nextjs", index)}
                  className="text-red-600 hover:text-red-700 p-2"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>

          {/* Last Updated */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Last Updated</label>
            <input
              type="text"
              value={formData.content?.lastUpdated || ""}
              onChange={(e) => handleChange("content", {
                ...formData.content,
                lastUpdated: e.target.value
              })}
              placeholder="This document was last updated on..."
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
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

