"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different testimonials types and their fields
const TESTIMONIALS_TYPE_CONFIG = {
  testimonials1: {
    label: "Testimonials 1 - Simple Grid",
    fields: ["testimonials", "navigation"],
    description: "Simple grid layout with text, author, role, and link. No ratings or header."
  },
  testimonials2: {
    label: "Testimonials 2 - Grid with Ratings",
    fields: ["header", "testimonials", "navigation", "grid"],
    description: "Grid layout with star ratings, header, and navigation controls."
  },
  testimonials3: {
    label: "Testimonials 3 - Carousel/Slider",
    fields: ["header", "testimonials", "navigation"],
    description: "Single testimonial carousel with dots and arrows. Includes company field."
  },
  ecomusTestimonials: {
    label: "Ecomus Testimonials - Grid with Title",
    fields: ["header", "testimonials", "grid"],
    description: "Grid layout with testimonial titles, ratings, quote icon, and avatar initials."
  }
};

export default function TestimonialsSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(TESTIMONIALS_TYPE_CONFIG)[0] || "testimonials1";
    const initialData = { testimonialsType: firstType };

    if (firstType === "testimonials1") {
      initialData.testimonials = [
        {
          text: "Exceptional service and quality products.",
          author: "David Johnson",
          role: "Serial Entrepreneur",
          link: "#"
        }
      ];
      initialData.navigation = {
        enabled: true,
        prevButton: { enabled: true },
        nextButton: { enabled: true }
      };
    } else if (firstType === "testimonials2") {
      initialData.header = {
        title: "User Feedbacks"
      };
      initialData.testimonials = [
        {
          text: "Exceptional service and quality products.",
          author: "Davis Dorwart",
          role: "Serial Entrepreneur",
          link: "#",
          rating: 5
        }
      ];
      initialData.navigation = {
        enabled: true,
        prevButton: { enabled: true },
        nextButton: { enabled: true }
      };
      initialData.grid = {
        columns: {
          mobile: "md:grid-cols-2",
          desktop: "lg:grid-cols-3"
        },
        gap: "gap-6"
      };
    } else if (firstType === "testimonials3") {
      initialData.header = {
        title: "What Our Customers Say",
        description: "Discover why thousands of customers trust us for their needs"
      };
      initialData.testimonials = [
        {
          text: "The attention to detail and craftsmanship is truly remarkable.",
          author: "Sarah Chen",
          role: "Creative Director",
          company: "Design Studio",
          rating: 5
        }
      ];
      initialData.navigation = {
        dots: { enabled: true },
        arrows: { enabled: true }
      };
    } else if (firstType === "ecomusTestimonials") {
      initialData.header = {
        title: "Happy Clients",
        description: "Hear what they say about us"
      };
      initialData.testimonials = [
        {
          id: 1,
          name: "Robert Smith",
          role: "Customer from USA",
          rating: 5,
          text: "I always find something stylish and affordable.",
          title: "Best Online Fashion Site"
        }
      ];
      initialData.grid = {
        columns: "grid-cols-1 md:grid-cols-3",
        gap: "gap-8"
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

    const firstType = Object.keys(TESTIMONIALS_TYPE_CONFIG)[0] || "testimonials1";
    const testimonialsType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { testimonialsType };

    // Load data based on testimonials type
    const config = content[testimonialsType] || {};
    updatedFormData.header = config.header || formData.header || {};
    updatedFormData.testimonials = config.testimonials || formData.testimonials || [];
    updatedFormData.navigation = config.navigation || formData.navigation || {};
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

    if (field === "testimonialsType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Testimonials management
  const addTestimonial = () => {
    const currentTestimonials = formData.testimonials || [];
    let newTestimonial;
    
    if (formData.testimonialsType === "testimonials1") {
      newTestimonial = {
        text: "Testimonial text",
        author: "Author Name",
        role: "Role",
        link: "#"
      };
    } else if (formData.testimonialsType === "testimonials2") {
      newTestimonial = {
        text: "Testimonial text",
        author: "Author Name",
        role: "Role",
        link: "#",
        rating: 5
      };
    } else if (formData.testimonialsType === "testimonials3") {
      newTestimonial = {
        text: "Testimonial text",
        author: "Author Name",
        role: "Role",
        company: "Company",
        rating: 5
      };
    } else if (formData.testimonialsType === "ecomusTestimonials") {
      newTestimonial = {
        id: Date.now(),
        name: "Author Name",
        role: "Role",
        rating: 5,
        text: "Testimonial text",
        title: "Testimonial Title"
      };
    }
    
    if (newTestimonial) {
      handleChange("testimonials", [...currentTestimonials, newTestimonial]);
    }
  };

  const removeTestimonial = (index) => {
    const updatedTestimonials = formData.testimonials.filter((_, i) => i !== index);
    handleChange("testimonials", updatedTestimonials);
  };

  const updateTestimonial = (index, field, value) => {
    const updatedTestimonials = formData.testimonials.map((testimonial, i) => 
      i === index ? { ...testimonial, [field]: value } : testimonial
    );
    handleChange("testimonials", updatedTestimonials);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.testimonials || formData.testimonials.length === 0) {
      errors.push("At least one testimonial is required");
    } else {
      formData.testimonials.forEach((testimonial, index) => {
        if (!testimonial.text || testimonial.text.trim() === "") {
          errors.push(`Testimonial ${index + 1}: Text is required`);
        }
        if (!testimonial.author && !testimonial.name) {
          errors.push(`Testimonial ${index + 1}: Author/Name is required`);
        }
      });
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("TestimonialsSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { testimonialsType, header, testimonials, navigation, grid } = formData;

    // Structure data according to testimonials.js component expectations
    const testimonialsData = {
      component: "testimonials",
      type: testimonialsType,
      content: {}
    };

    // Add type-specific data to content
    testimonialsData.content[testimonialsType] = {
      testimonials: testimonials || []
    };

    if (header && Object.keys(header).length > 0) {
      testimonialsData.content[testimonialsType].header = header;
    }

    if (navigation && Object.keys(navigation).length > 0) {
      testimonialsData.content[testimonialsType].navigation = navigation;
    }

    if (grid && Object.keys(grid).length > 0) {
      testimonialsData.content[testimonialsType].grid = grid;
    }

    console.log("Saving testimonials content:", testimonialsData);

    onSave(testimonialsData);
    setHasChanges(false);
  };

  const currentTestimonialsConfig = TESTIMONIALS_TYPE_CONFIG[formData.testimonialsType] || TESTIMONIALS_TYPE_CONFIG.testimonials1;

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

      {/* Testimonials Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Testimonials Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.testimonialsType}
          onChange={(e) => handleChange("testimonialsType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(TESTIMONIALS_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentTestimonialsConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Testimonials Type Info:</p>
            <p className="text-sm text-blue-700">{currentTestimonialsConfig.description}</p>
          </div>
        )}
      </div>

      {/* Header Configuration */}
      {(formData.testimonialsType === "testimonials2" || formData.testimonialsType === "testimonials3" || formData.testimonialsType === "ecomusTestimonials") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Header Configuration</label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Title</label>
              <input
                type="text"
                value={formData.header?.title || ""}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  title: e.target.value
                })}
                placeholder="User Feedbacks"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {(formData.testimonialsType === "testimonials3" || formData.testimonialsType === "ecomusTestimonials") && (
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
            )}
          </div>
        </div>
      )}

      {/* Testimonials */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Testimonials ({formData.testimonials?.length || 0})
          </label>
          <button
            type="button"
            onClick={addTestimonial}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Add Testimonial
          </button>
        </div>
        {formData.testimonials?.map((testimonial, index) => (
          <div key={index} className="mb-3 p-3 border rounded bg-white">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Testimonial {index + 1}</span>
              <button
                type="button"
                onClick={() => removeTestimonial(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Text <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={testimonial.text || ""}
                  onChange={(e) => updateTestimonial(index, "text", e.target.value)}
                  placeholder="Testimonial text"
                  rows={3}
                  required
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    {formData.testimonialsType === "ecomusTestimonials" ? "Name" : "Author"} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={testimonial.author || testimonial.name || ""}
                    onChange={(e) => updateTestimonial(index, formData.testimonialsType === "ecomusTestimonials" ? "name" : "author", e.target.value)}
                    placeholder="Author Name"
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Role</label>
                  <input
                    type="text"
                    value={testimonial.role || ""}
                    onChange={(e) => updateTestimonial(index, "role", e.target.value)}
                    placeholder="Role"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              {(formData.testimonialsType === "testimonials1" || formData.testimonialsType === "testimonials2") && (
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Link</label>
                  <input
                    type="text"
                    value={testimonial.link || ""}
                    onChange={(e) => updateTestimonial(index, "link", e.target.value)}
                    placeholder="#"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              {(formData.testimonialsType === "testimonials2" || formData.testimonialsType === "testimonials3" || formData.testimonialsType === "ecomusTestimonials") && (
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Rating</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    value={testimonial.rating || 5}
                    onChange={(e) => updateTestimonial(index, "rating", parseInt(e.target.value))}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              {formData.testimonialsType === "testimonials3" && (
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Company</label>
                  <input
                    type="text"
                    value={testimonial.company || ""}
                    onChange={(e) => updateTestimonial(index, "company", e.target.value)}
                    placeholder="Company Name"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              {formData.testimonialsType === "ecomusTestimonials" && (
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Title</label>
                  <input
                    type="text"
                    value={testimonial.title || ""}
                    onChange={(e) => updateTestimonial(index, "title", e.target.value)}
                    placeholder="Testimonial Title"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Configuration */}
      {(formData.testimonialsType === "testimonials1" || formData.testimonialsType === "testimonials2") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Navigation</label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.navigation?.enabled || false}
                onChange={(e) => handleChange("navigation", {
                  ...formData.navigation,
                  enabled: e.target.checked
                })}
                className="rounded"
              />
              <label className="text-sm text-gray-700">Enable Navigation</label>
            </div>
            {formData.navigation?.enabled && (
              <div className="grid grid-cols-2 gap-3 ml-6">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.navigation?.prevButton?.enabled || false}
                    onChange={(e) => handleChange("navigation", {
                      ...formData.navigation,
                      prevButton: {
                        ...formData.navigation?.prevButton,
                        enabled: e.target.checked
                      }
                    })}
                    className="rounded"
                  />
                  <label className="text-sm text-gray-700">Previous Button</label>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={formData.navigation?.nextButton?.enabled || false}
                    onChange={(e) => handleChange("navigation", {
                      ...formData.navigation,
                      nextButton: {
                        ...formData.navigation?.nextButton,
                        enabled: e.target.checked
                      }
                    })}
                    className="rounded"
                  />
                  <label className="text-sm text-gray-700">Next Button</label>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Navigation for testimonials3 */}
      {formData.testimonialsType === "testimonials3" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Navigation</label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.navigation?.dots?.enabled || false}
                onChange={(e) => handleChange("navigation", {
                  ...formData.navigation,
                  dots: {
                    ...formData.navigation?.dots,
                    enabled: e.target.checked
                  }
                })}
                className="rounded"
              />
              <label className="text-sm text-gray-700">Enable Dots</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.navigation?.arrows?.enabled || false}
                onChange={(e) => handleChange("navigation", {
                  ...formData.navigation,
                  arrows: {
                    ...formData.navigation?.arrows,
                    enabled: e.target.checked
                  }
                })}
                className="rounded"
              />
              <label className="text-sm text-gray-700">Enable Arrows</label>
            </div>
          </div>
        </div>
      )}

      {/* Grid Configuration */}
      {(formData.testimonialsType === "testimonials2" || formData.testimonialsType === "ecomusTestimonials") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Grid Configuration</label>
          {formData.testimonialsType === "testimonials2" ? (
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Mobile Columns</label>
                <input
                  type="text"
                  value={formData.grid?.columns?.mobile || ""}
                  onChange={(e) => handleChange("grid", {
                    ...formData.grid,
                    columns: {
                      ...formData.grid?.columns,
                      mobile: e.target.value
                    }
                  })}
                  placeholder="md:grid-cols-2"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Desktop Columns</label>
                <input
                  type="text"
                  value={formData.grid?.columns?.desktop || ""}
                  onChange={(e) => handleChange("grid", {
                    ...formData.grid,
                    columns: {
                      ...formData.grid?.columns,
                      desktop: e.target.value
                    }
                  })}
                  placeholder="lg:grid-cols-3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Gap</label>
                <input
                  type="text"
                  value={formData.grid?.gap || ""}
                  onChange={(e) => handleChange("grid", {
                    ...formData.grid,
                    gap: e.target.value
                  })}
                  placeholder="gap-6"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Columns</label>
                <input
                  type="text"
                  value={formData.grid?.columns || ""}
                  onChange={(e) => handleChange("grid", {
                    ...formData.grid,
                    columns: e.target.value
                  })}
                  placeholder="grid-cols-1 md:grid-cols-3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Gap</label>
                <input
                  type="text"
                  value={formData.grid?.gap || ""}
                  onChange={(e) => handleChange("grid", {
                    ...formData.grid,
                    gap: e.target.value
                  })}
                  placeholder="gap-8"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
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

