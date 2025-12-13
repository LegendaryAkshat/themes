"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different our values types and their fields
const OUR_VALUES_TYPE_CONFIG = {
  ourValues1: {
    label: "Our Values 1 - Grid with Icons",
    fields: ["header", "values", "statement"],
    description: "Grid layout with value cards featuring icons, titles, and descriptions. Light background."
  },
  ourValues2: {
    label: "Our Values 2 - Values with Principles",
    fields: ["header", "values", "statement"],
    description: "Values with principles lists. Dark gradient background with scroll animations."
  },
  ourValues3: {
    label: "Our Values 3 - Values with Stats",
    fields: ["header", "values"],
    description: "Gradient value cards with statistics. White background."
  },
  ourValues4: {
    label: "Our Values 4 - Value Categories",
    fields: ["header", "valueCategories", "statement"],
    description: "Value categories with nested values. Statement with author. Light background."
  }
};

export default function OurValuesSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(OUR_VALUES_TYPE_CONFIG)[0] || "ourValues1";
    const initialData = { ourValuesType: firstType };

    if (firstType === "ourValues1") {
      initialData.header = {
        badge: "What We Stand For",
        title: {
          line1: "Our",
          line2: "Core Values"
        },
        description: "The fundamental beliefs that guide our decisions."
      };
      initialData.values = [
        {
          icon: "Heart",
          title: "Integrity",
          description: "We do what's right, even when no one is watching.",
          color: "from-red-500 to-pink-500"
        }
      ];
      initialData.statement = {
        text: "These values aren't just ideals—they're the foundation of everything we do."
      };
    } else if (firstType === "ourValues2") {
      initialData.header = {
        badge: {
          text: "Our Foundation",
          icon: "Sparkles"
        },
        title: "Values in Action",
        description: "How our core values translate into daily practices."
      };
      initialData.values = [
        {
          title: "Transparency",
          principles: [
            "Open communication at all levels",
            "Honest about challenges and opportunities"
          ],
          gradient: "from-blue-500 to-cyan-500"
        }
      ];
      initialData.statement = {
        text: "These values guide every decision."
      };
    } else if (firstType === "ourValues3") {
      initialData.header = {
        badge: "What Drives Us",
        title: {
          line1: "Values That",
          line2: "Define Excellence"
        },
        description: "Six core values that shape our culture."
      };
      initialData.values = [
        {
          icon: "Heart",
          title: "Empathy",
          description: "Understanding and sharing the feelings of others.",
          color: "from-rose-500 to-pink-500",
          stat: "100%"
        }
      ];
    } else if (firstType === "ourValues4") {
      initialData.header = {
        badge: {
          text: "Our Commitment",
          icon: "Sparkles"
        },
        title: {
          line1: "Values That",
          line2: "Shape Our Culture"
        },
        description: "Three pillars that define how we work."
      };
      initialData.valueCategories = [
        {
          title: "How We Work",
          values: [
            { name: "Transparency", description: "Open communication and honest feedback" }
          ],
          gradient: "from-blue-500 to-cyan-500"
        }
      ];
      initialData.statement = {
        text: "These values aren't just words—they're the foundation of our culture.",
        author: "Leadership Team"
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

    const firstType = Object.keys(OUR_VALUES_TYPE_CONFIG)[0] || "ourValues1";
    const ourValuesType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { ourValuesType };

    // Load data based on our values type
    const config = content[ourValuesType] || {};
    updatedFormData.header = config.header || formData.header || {};
    updatedFormData.values = config.values || formData.values || [];
    updatedFormData.valueCategories = config.valueCategories || formData.valueCategories || [];
    updatedFormData.statement = config.statement || formData.statement || {};

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

    if (field === "ourValuesType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Values management for ourValues1, ourValues2, ourValues3
  const addValue = () => {
    const currentValues = formData.values || [];
    let newValue;
    
    if (formData.ourValuesType === "ourValues1") {
      newValue = {
        icon: "Heart",
        title: "New Value",
        description: "Value description",
        color: "from-red-500 to-pink-500"
      };
    } else if (formData.ourValuesType === "ourValues2") {
      newValue = {
        title: "New Value",
        principles: ["Principle 1", "Principle 2"],
        gradient: "from-blue-500 to-cyan-500"
      };
    } else if (formData.ourValuesType === "ourValues3") {
      newValue = {
        icon: "Heart",
        title: "New Value",
        description: "Value description",
        color: "from-rose-500 to-pink-500",
        stat: "100%"
      };
    }
    
    if (newValue) {
      handleChange("values", [...currentValues, newValue]);
    }
  };

  const removeValue = (index) => {
    const updatedValues = formData.values.filter((_, i) => i !== index);
    handleChange("values", updatedValues);
  };

  const updateValue = (index, field, value) => {
    const updatedValues = formData.values.map((val, i) => 
      i === index ? { ...val, [field]: value } : val
    );
    handleChange("values", updatedValues);
  };

  // Principles management for ourValues2
  const addPrinciple = (valueIndex) => {
    const updatedValues = formData.values.map((value, i) => 
      i === valueIndex 
        ? { ...value, principles: [...(value.principles || []), "New principle"] }
        : value
    );
    handleChange("values", updatedValues);
  };

  const removePrinciple = (valueIndex, principleIndex) => {
    const updatedValues = formData.values.map((value, i) => 
      i === valueIndex 
        ? { ...value, principles: value.principles.filter((_, pI) => pI !== principleIndex) }
        : value
    );
    handleChange("values", updatedValues);
  };

  const updatePrinciple = (valueIndex, principleIndex, value) => {
    const updatedValues = formData.values.map((val, i) => 
      i === valueIndex 
        ? { ...val, principles: val.principles.map((p, pI) => pI === principleIndex ? value : p) }
        : val
    );
    handleChange("values", updatedValues);
  };

  // Value categories management for ourValues4
  const addValueCategory = () => {
    const currentCategories = formData.valueCategories || [];
    const newCategory = {
      title: "New Category",
      values: [
        { name: "Value 1", description: "Description" }
      ],
      gradient: "from-blue-500 to-cyan-500"
    };
    handleChange("valueCategories", [...currentCategories, newCategory]);
  };

  const removeValueCategory = (index) => {
    const updatedCategories = formData.valueCategories.filter((_, i) => i !== index);
    handleChange("valueCategories", updatedCategories);
  };

  const updateValueCategory = (index, field, value) => {
    const updatedCategories = formData.valueCategories.map((category, i) => 
      i === index ? { ...category, [field]: value } : category
    );
    handleChange("valueCategories", updatedCategories);
  };

  const addCategoryValue = (categoryIndex) => {
    const updatedCategories = formData.valueCategories.map((category, i) => 
      i === categoryIndex 
        ? { ...category, values: [...(category.values || []), { name: "New Value", description: "Description" }] }
        : category
    );
    handleChange("valueCategories", updatedCategories);
  };

  const removeCategoryValue = (categoryIndex, valueIndex) => {
    const updatedCategories = formData.valueCategories.map((category, i) => 
      i === categoryIndex 
        ? { ...category, values: category.values.filter((_, vI) => vI !== valueIndex) }
        : category
    );
    handleChange("valueCategories", updatedCategories);
  };

  const updateCategoryValue = (categoryIndex, valueIndex, field, value) => {
    const updatedCategories = formData.valueCategories.map((category, i) => 
      i === categoryIndex 
        ? { ...category, values: category.values.map((val, vI) => vI === valueIndex ? { ...val, [field]: value } : val) }
        : category
    );
    handleChange("valueCategories", updatedCategories);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.header?.title || (typeof formData.header.title === 'object' && (!formData.header.title.line1 || formData.header.title.line1.trim() === ""))) {
      errors.push("Header title is required");
    }

    if (formData.ourValuesType === "ourValues1" || formData.ourValuesType === "ourValues2" || formData.ourValuesType === "ourValues3") {
      if (!formData.values || formData.values.length === 0) {
        errors.push("At least one value is required");
      } else {
        formData.values.forEach((value, index) => {
          if (!value.title || value.title.trim() === "") {
            errors.push(`Value ${index + 1}: Title is required`);
          }
          if (formData.ourValuesType === "ourValues2" && (!value.principles || value.principles.length === 0)) {
            errors.push(`Value ${index + 1}: At least one principle is required`);
          }
        });
      }
    } else if (formData.ourValuesType === "ourValues4") {
      if (!formData.valueCategories || formData.valueCategories.length === 0) {
        errors.push("At least one value category is required");
      } else {
        formData.valueCategories.forEach((category, index) => {
          if (!category.title || category.title.trim() === "") {
            errors.push(`Category ${index + 1}: Title is required`);
          }
          if (!category.values || category.values.length === 0) {
            errors.push(`Category ${index + 1}: At least one value is required`);
          }
        });
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("OurValuesSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { ourValuesType, header, values, valueCategories, statement } = formData;

    // Structure data according to our-values.js component expectations
    const ourValuesData = {
      component: "our-values",
      type: ourValuesType,
      content: {}
    };

    // Add type-specific data to content
    if (ourValuesType === "ourValues1" || ourValuesType === "ourValues2" || ourValuesType === "ourValues3") {
      ourValuesData.content[ourValuesType] = {
        header: header || {},
        values: values || []
      };
      if (statement) {
        ourValuesData.content[ourValuesType].statement = statement;
      }
    } else if (ourValuesType === "ourValues4") {
      ourValuesData.content[ourValuesType] = {
        header: header || {},
        valueCategories: valueCategories || [],
        statement: statement || {}
      };
    }

    console.log("Saving our values content:", ourValuesData);

    onSave(ourValuesData);
    setHasChanges(false);
  };

  const currentOurValuesConfig = OUR_VALUES_TYPE_CONFIG[formData.ourValuesType] || OUR_VALUES_TYPE_CONFIG.ourValues1;

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

      {/* Our Values Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Our Values Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.ourValuesType}
          onChange={(e) => handleChange("ourValuesType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(OUR_VALUES_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentOurValuesConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Our Values Type Info:</p>
            <p className="text-sm text-blue-700">{currentOurValuesConfig.description}</p>
          </div>
        )}
      </div>

      {/* Header Configuration */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-3">Header Configuration</label>
        <div className="space-y-3">
          {(formData.ourValuesType === "ourValues2" || formData.ourValuesType === "ourValues4") && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Badge Text</label>
                <input
                  type="text"
                  value={formData.header?.badge?.text || ""}
                  onChange={(e) => handleChange("header", {
                    ...formData.header,
                    badge: {
                      ...formData.header?.badge,
                      text: e.target.value
                    }
                  })}
                  placeholder="Our Foundation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Badge Icon</label>
                <input
                  type="text"
                  value={formData.header?.badge?.icon || ""}
                  onChange={(e) => handleChange("header", {
                    ...formData.header,
                    badge: {
                      ...formData.header?.badge,
                      icon: e.target.value
                    }
                  })}
                  placeholder="Sparkles"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
          {(formData.ourValuesType === "ourValues1" || formData.ourValuesType === "ourValues3") && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">Badge</label>
              <input
                type="text"
                value={formData.header?.badge || ""}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  badge: e.target.value
                })}
                placeholder="What We Stand For"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Title Line 1 <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.header?.title?.line1 || (typeof formData.header?.title === 'string' ? formData.header.title : "") || ""}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  title: typeof formData.header?.title === 'object' 
                    ? { ...formData.header.title, line1: e.target.value }
                    : { line1: e.target.value, line2: "" }
                })}
                placeholder="Our"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Title Line 2</label>
              <input
                type="text"
                value={formData.header?.title?.line2 || ""}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  title: {
                    ...(typeof formData.header?.title === 'object' ? formData.header.title : { line1: formData.header?.title || "" }),
                    line2: e.target.value
                  }
                })}
                placeholder="Core Values"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Description</label>
            <textarea
              value={formData.header?.description || ""}
              onChange={(e) => handleChange("header", {
                ...formData.header,
                description: e.target.value
              })}
              placeholder="Description text"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Values for ourValues1, ourValues2, ourValues3 */}
      {(formData.ourValuesType === "ourValues1" || formData.ourValuesType === "ourValues2" || formData.ourValuesType === "ourValues3") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Values ({formData.values?.length || 0})
            </label>
            <button
              type="button"
              onClick={addValue}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Value
            </button>
          </div>
          {formData.values?.map((value, index) => (
            <div key={index} className="mb-3 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Value {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeValue(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={value.title || ""}
                    onChange={(e) => updateValue(index, "title", e.target.value)}
                    placeholder="Integrity"
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {(formData.ourValuesType === "ourValues1" || formData.ourValuesType === "ourValues3") && (
                  <>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Description</label>
                      <textarea
                        value={value.description || ""}
                        onChange={(e) => updateValue(index, "description", e.target.value)}
                        placeholder="Value description"
                        rows={2}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Icon</label>
                        <input
                          type="text"
                          value={value.icon || ""}
                          onChange={(e) => updateValue(index, "icon", e.target.value)}
                          placeholder="Heart"
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Color Gradient</label>
                        <input
                          type="text"
                          value={value.color || ""}
                          onChange={(e) => updateValue(index, "color", e.target.value)}
                          placeholder="from-red-500 to-pink-500"
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                    {formData.ourValuesType === "ourValues3" && (
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Stat</label>
                        <input
                          type="text"
                          value={value.stat || ""}
                          onChange={(e) => updateValue(index, "stat", e.target.value)}
                          placeholder="100%"
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    )}
                  </>
                )}
                {formData.ourValuesType === "ourValues2" && (
                  <>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Gradient</label>
                      <input
                        type="text"
                        value={value.gradient || ""}
                        onChange={(e) => updateValue(index, "gradient", e.target.value)}
                        placeholder="from-blue-500 to-cyan-500"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <label className="block text-xs text-gray-600">
                          Principles ({value.principles?.length || 0})
                        </label>
                        <button
                          type="button"
                          onClick={() => addPrinciple(index)}
                          className="text-xs text-blue-600 hover:text-blue-700"
                        >
                          <Plus className="h-3 w-3 inline" /> Add
                        </button>
                      </div>
                      {value.principles?.map((principle, pIndex) => (
                        <div key={pIndex} className="flex gap-2 mb-2">
                          <input
                            type="text"
                            value={principle}
                            onChange={(e) => updatePrinciple(index, pIndex, e.target.value)}
                            placeholder="Principle text"
                            className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                          />
                          <button
                            type="button"
                            onClick={() => removePrinciple(index, pIndex)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Value Categories for ourValues4 */}
      {formData.ourValuesType === "ourValues4" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Value Categories ({formData.valueCategories?.length || 0})
            </label>
            <button
              type="button"
              onClick={addValueCategory}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Category
            </button>
          </div>
          {formData.valueCategories?.map((category, index) => (
            <div key={index} className="mb-3 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Category {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeValueCategory(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={category.title || ""}
                      onChange={(e) => updateValueCategory(index, "title", e.target.value)}
                      placeholder="How We Work"
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Gradient</label>
                    <input
                      type="text"
                      value={category.gradient || ""}
                      onChange={(e) => updateValueCategory(index, "gradient", e.target.value)}
                      placeholder="from-blue-500 to-cyan-500"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs text-gray-600">
                      Values ({category.values?.length || 0})
                    </label>
                    <button
                      type="button"
                      onClick={() => addCategoryValue(index)}
                      className="text-xs text-blue-600 hover:text-blue-700"
                    >
                      <Plus className="h-3 w-3 inline" /> Add
                    </button>
                  </div>
                  {category.values?.map((value, vIndex) => (
                    <div key={vIndex} className="mb-2 p-2 border rounded bg-gray-50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium">Value {vIndex + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeCategoryValue(index, vIndex)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Name</label>
                          <input
                            type="text"
                            value={value.name || ""}
                            onChange={(e) => updateCategoryValue(index, vIndex, "name", e.target.value)}
                            placeholder="Transparency"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-600 mb-1">Description</label>
                          <input
                            type="text"
                            value={value.description || ""}
                            onChange={(e) => updateCategoryValue(index, vIndex, "description", e.target.value)}
                            placeholder="Description"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Statement */}
      {(formData.ourValuesType === "ourValues1" || formData.ourValuesType === "ourValues2" || formData.ourValuesType === "ourValues4") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Statement</label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Text</label>
              <textarea
                value={formData.statement?.text || ""}
                onChange={(e) => handleChange("statement", {
                  ...formData.statement,
                  text: e.target.value
                })}
                placeholder="Statement text"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {formData.ourValuesType === "ourValues4" && (
              <div>
                <label className="block text-xs text-gray-600 mb-1">Author</label>
                <input
                  type="text"
                  value={formData.statement?.author || ""}
                  onChange={(e) => handleChange("statement", {
                    ...formData.statement,
                    author: e.target.value
                  })}
                  placeholder="Leadership Team"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            )}
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

