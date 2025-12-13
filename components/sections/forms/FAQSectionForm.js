"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different FAQ types and their fields
const FAQ_TYPE_CONFIG = {
  faq1: {
    label: "FAQ 1 - Accordion with GSAP Animations",
    fields: ["page", "faqs"],
    description: "Accordion with HelpCircle icon, GSAP scroll animations, and single open item. Gray background."
  },
  faq2: {
    label: "FAQ 2 - Simple Accordion",
    fields: ["page", "faqs"],
    description: "Simple accordion with border styling. White background."
  },
  faq3: {
    label: "FAQ 3 - Accordion with Gradient Background",
    fields: ["page", "faqs"],
    description: "Accordion with gradient background, HelpCircle icon, and description. Blue gradient background."
  },
  faq4: {
    label: "FAQ 4 - Simple List Format",
    fields: ["page", "faqs"],
    description: "Simple list format with all FAQs expanded. White background."
  }
};

export default function FAQSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(FAQ_TYPE_CONFIG)[0] || "faq1";
    const initialData = { faqType: firstType };

    initialData.page = {
      title: "Frequently Asked Questions"
    };
    initialData.faqs = [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, PayPal, Apple Pay, and Google Pay."
      }
    ];

    if (firstType === "faq3") {
      initialData.page.description = "Find answers to common questions";
    }

    return initialData;
  };

  const [formData, setFormData] = useState(initializeFormData());
  const [hasChanges, setHasChanges] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  // Initialize form with existing data if editing
  useEffect(() => {
    if (!sectionData) return;

    const firstType = Object.keys(FAQ_TYPE_CONFIG)[0] || "faq1";
    const faqType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { faqType };

    // Load data based on FAQ type
    const config = content[faqType] || {};
    updatedFormData.page = config.page || formData.page || {};
    updatedFormData.faqs = config.faqs || formData.faqs || [];

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

    if (field === "faqType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // FAQs management
  const addFAQ = () => {
    const currentFAQs = formData.faqs || [];
    const newFAQ = {
      question: "New question?",
      answer: "Answer to the question."
    };
    handleChange("faqs", [...currentFAQs, newFAQ]);
  };

  const removeFAQ = (index) => {
    const updatedFAQs = formData.faqs.filter((_, i) => i !== index);
    handleChange("faqs", updatedFAQs);
  };

  const updateFAQ = (index, field, value) => {
    const updatedFAQs = formData.faqs.map((faq, i) => 
      i === index ? { ...faq, [field]: value } : faq
    );
    handleChange("faqs", updatedFAQs);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.page?.title || formData.page.title.trim() === "") {
      errors.push("Page title is required");
    }

    if (!formData.faqs || formData.faqs.length === 0) {
      errors.push("At least one FAQ is required");
    } else {
      formData.faqs.forEach((faq, index) => {
        if (!faq.question || faq.question.trim() === "") {
          errors.push(`FAQ ${index + 1}: Question is required`);
        }
        if (!faq.answer || faq.answer.trim() === "") {
          errors.push(`FAQ ${index + 1}: Answer is required`);
        }
      });
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("FAQSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { faqType, page, faqs } = formData;

    // Structure data according to faq.js component expectations
    const faqData = {
      component: "faq",
      type: faqType,
      content: {}
    };

    // Add type-specific data to content
    faqData.content[faqType] = {
      page: page || {},
      faqs: faqs || []
    };

    console.log("Saving FAQ content:", faqData);

    onSave(faqData);
    setHasChanges(false);
  };

  const currentFAQConfig = FAQ_TYPE_CONFIG[formData.faqType] || FAQ_TYPE_CONFIG.faq1;

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

      {/* FAQ Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          FAQ Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.faqType}
          onChange={(e) => handleChange("faqType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(FAQ_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentFAQConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ FAQ Type Info:</p>
            <p className="text-sm text-blue-700">{currentFAQConfig.description}</p>
          </div>
        )}
      </div>

      {/* Page Configuration */}
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
              placeholder="Frequently Asked Questions"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          {formData.faqType === "faq3" && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">Description</label>
              <textarea
                value={formData.page?.description || ""}
                onChange={(e) => handleChange("page", {
                  ...formData.page,
                  description: e.target.value
                })}
                placeholder="Find answers to common questions"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>
      </div>

      {/* FAQs */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-medium text-gray-700">
            FAQs ({formData.faqs?.length || 0})
          </label>
          <button
            type="button"
            onClick={addFAQ}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Add FAQ
          </button>
        </div>
        {formData.faqs?.map((faq, index) => (
          <div key={index} className="mb-3 p-3 border rounded bg-white">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">FAQ {index + 1}</span>
              <button
                type="button"
                onClick={() => removeFAQ(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Question <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={faq.question || ""}
                  onChange={(e) => updateFAQ(index, "question", e.target.value)}
                  placeholder="What payment methods do you accept?"
                  required
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Answer <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={faq.answer || ""}
                  onChange={(e) => updateFAQ(index, "answer", e.target.value)}
                  placeholder="Answer to the question"
                  rows={3}
                  required
                  className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
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

