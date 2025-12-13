"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different founder words types and their fields
const FOUNDER_WORDS_TYPE_CONFIG = {
  founderWords1: {
    label: "Founder Words 1 - Timeline with Quotes",
    fields: ["header", "quotes", "closing"],
    description: "Timeline layout with quotes, years, and context. Dark purple gradient background."
  },
  founderWords2: {
    label: "Founder Words 2 - Insights with Main Quote",
    fields: ["header", "insights", "mainQuote"],
    description: "Insights cards with icons and a main quote section. Light background."
  },
  founderWords3: {
    label: "Founder Words 3 - Milestones",
    fields: ["header", "milestones", "closing"],
    description: "Milestones with dates, locations, and achievements. White background with gradient overlay."
  },
  founderWords4: {
    label: "Founder Words 4 - Principles",
    fields: ["header", "principles", "mainStatement"],
    description: "Principles cards with main statement. Dark slate background."
  }
};

export default function FounderWordsSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(FOUNDER_WORDS_TYPE_CONFIG)[0] || "founderWords1";
    const initialData = { founderWordsType: firstType };

    if (firstType === "founderWords1") {
      initialData.header = {
        badge: {
          text: "Founder's Journey",
          icon: "Sparkles"
        },
        title: "Words That Shaped Us",
        description: "Reflections from the journey of building something meaningful."
      };
      initialData.quotes = [
        {
          text: "Every great journey begins with a single step.",
          year: "2015",
          context: "The Beginning"
        }
      ];
      initialData.closing = {
        text: "The journey continues.",
        icon: "Heart"
      };
    } else if (firstType === "founderWords2") {
      initialData.header = {
        badge: "Founder's Perspective",
        title: {
          line1: "Insights That",
          line2: "Drive Innovation"
        },
        description: "Three fundamental principles."
      };
      initialData.insights = [
        {
          icon: "Lightbulb",
          title: "The Spark",
          quote: "The best ideas come from understanding real problems.",
          gradient: "from-yellow-400 to-orange-500"
        }
      ];
      initialData.mainQuote = {
        text: "Building something meaningful requires resilience and empathy.",
        author: "Founder & CEO"
      };
    } else if (firstType === "founderWords3") {
      initialData.header = {
        title: {
          line1: "Moments That",
          line2: "Defined Us"
        },
        description: "Key moments and reflections from our journey."
      };
      initialData.milestones = [
        {
          date: "2015",
          location: "San Francisco",
          quote: "We started with a simple question.",
          achievement: "Company Founded"
        }
      ];
      initialData.closing = {
        text: "The journey continues."
      };
    } else if (firstType === "founderWords4") {
      initialData.header = {
        badge: {
          text: "Core Philosophy",
          icon: "Sparkles"
        },
        title: {
          line1: "Principles",
          line2: "That Guide Us"
        },
        description: "The foundational beliefs that shape every aspect."
      };
      initialData.principles = [
        {
          icon: "Target",
          title: "Purpose-Driven",
          quote: "Every decision we make is guided by a clear purpose.",
          gradient: "from-blue-500 to-cyan-500"
        }
      ];
      initialData.mainStatement = {
        text: "These principles aren't just words on a wall.",
        author: "Founder"
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

    const firstType = Object.keys(FOUNDER_WORDS_TYPE_CONFIG)[0] || "founderWords1";
    const founderWordsType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { founderWordsType };

    // Load data based on founder words type
    const config = content[founderWordsType] || {};
    updatedFormData.header = config.header || formData.header || {};
    updatedFormData.quotes = config.quotes || formData.quotes || [];
    updatedFormData.insights = config.insights || formData.insights || [];
    updatedFormData.milestones = config.milestones || formData.milestones || [];
    updatedFormData.principles = config.principles || formData.principles || [];
    updatedFormData.closing = config.closing || formData.closing || {};
    updatedFormData.mainQuote = config.mainQuote || formData.mainQuote || {};
    updatedFormData.mainStatement = config.mainStatement || formData.mainStatement || {};

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

    if (field === "founderWordsType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Quotes management for founderWords1
  const addQuote = () => {
    const currentQuotes = formData.quotes || [];
    const newQuote = {
      text: "New quote text",
      year: "2024",
      context: "Context"
    };
    handleChange("quotes", [...currentQuotes, newQuote]);
  };

  const removeQuote = (index) => {
    const updatedQuotes = formData.quotes.filter((_, i) => i !== index);
    handleChange("quotes", updatedQuotes);
  };

  const updateQuote = (index, field, value) => {
    const updatedQuotes = formData.quotes.map((quote, i) => 
      i === index ? { ...quote, [field]: value } : quote
    );
    handleChange("quotes", updatedQuotes);
  };

  // Insights management for founderWords2
  const addInsight = () => {
    const currentInsights = formData.insights || [];
    const newInsight = {
      icon: "Lightbulb",
      title: "New Insight",
      quote: "Insight quote text",
      gradient: "from-yellow-400 to-orange-500"
    };
    handleChange("insights", [...currentInsights, newInsight]);
  };

  const removeInsight = (index) => {
    const updatedInsights = formData.insights.filter((_, i) => i !== index);
    handleChange("insights", updatedInsights);
  };

  const updateInsight = (index, field, value) => {
    const updatedInsights = formData.insights.map((insight, i) => 
      i === index ? { ...insight, [field]: value } : insight
    );
    handleChange("insights", updatedInsights);
  };

  // Milestones management for founderWords3
  const addMilestone = () => {
    const currentMilestones = formData.milestones || [];
    const newMilestone = {
      date: "2024",
      location: "Location",
      quote: "Milestone quote",
      achievement: "Achievement"
    };
    handleChange("milestones", [...currentMilestones, newMilestone]);
  };

  const removeMilestone = (index) => {
    const updatedMilestones = formData.milestones.filter((_, i) => i !== index);
    handleChange("milestones", updatedMilestones);
  };

  const updateMilestone = (index, field, value) => {
    const updatedMilestones = formData.milestones.map((milestone, i) => 
      i === index ? { ...milestone, [field]: value } : milestone
    );
    handleChange("milestones", updatedMilestones);
  };

  // Principles management for founderWords4
  const addPrinciple = () => {
    const currentPrinciples = formData.principles || [];
    const newPrinciple = {
      icon: "Target",
      title: "New Principle",
      quote: "Principle quote text",
      gradient: "from-blue-500 to-cyan-500"
    };
    handleChange("principles", [...currentPrinciples, newPrinciple]);
  };

  const removePrinciple = (index) => {
    const updatedPrinciples = formData.principles.filter((_, i) => i !== index);
    handleChange("principles", updatedPrinciples);
  };

  const updatePrinciple = (index, field, value) => {
    const updatedPrinciples = formData.principles.map((principle, i) => 
      i === index ? { ...principle, [field]: value } : principle
    );
    handleChange("principles", updatedPrinciples);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.header?.title || (typeof formData.header.title === 'string' && formData.header.title.trim() === "") || (typeof formData.header.title === 'object' && (!formData.header.title.line1 || formData.header.title.line1.trim() === ""))) {
      errors.push("Header title is required");
    }

    if (formData.founderWordsType === "founderWords1") {
      if (!formData.quotes || formData.quotes.length === 0) {
        errors.push("At least one quote is required");
      } else {
        formData.quotes.forEach((quote, index) => {
          if (!quote.text || quote.text.trim() === "") {
            errors.push(`Quote ${index + 1}: Text is required`);
          }
        });
      }
    } else if (formData.founderWordsType === "founderWords2") {
      if (!formData.insights || formData.insights.length === 0) {
        errors.push("At least one insight is required");
      } else {
        formData.insights.forEach((insight, index) => {
          if (!insight.title || insight.title.trim() === "") {
            errors.push(`Insight ${index + 1}: Title is required`);
          }
          if (!insight.quote || insight.quote.trim() === "") {
            errors.push(`Insight ${index + 1}: Quote is required`);
          }
        });
      }
    } else if (formData.founderWordsType === "founderWords3") {
      if (!formData.milestones || formData.milestones.length === 0) {
        errors.push("At least one milestone is required");
      } else {
        formData.milestones.forEach((milestone, index) => {
          if (!milestone.quote || milestone.quote.trim() === "") {
            errors.push(`Milestone ${index + 1}: Quote is required`);
          }
        });
      }
    } else if (formData.founderWordsType === "founderWords4") {
      if (!formData.principles || formData.principles.length === 0) {
        errors.push("At least one principle is required");
      } else {
        formData.principles.forEach((principle, index) => {
          if (!principle.title || principle.title.trim() === "") {
            errors.push(`Principle ${index + 1}: Title is required`);
          }
          if (!principle.quote || principle.quote.trim() === "") {
            errors.push(`Principle ${index + 1}: Quote is required`);
          }
        });
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("FounderWordsSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { founderWordsType, header, quotes, insights, milestones, principles, closing, mainQuote, mainStatement } = formData;

    // Structure data according to founder-words.js component expectations
    const founderWordsData = {
      component: "founder-words",
      type: founderWordsType,
      content: {}
    };

    // Add type-specific data to content
    if (founderWordsType === "founderWords1") {
      founderWordsData.content[founderWordsType] = {
        header: header || {},
        quotes: quotes || [],
        closing: closing || {}
      };
    } else if (founderWordsType === "founderWords2") {
      founderWordsData.content[founderWordsType] = {
        header: header || {},
        insights: insights || [],
        mainQuote: mainQuote || {}
      };
    } else if (founderWordsType === "founderWords3") {
      founderWordsData.content[founderWordsType] = {
        header: header || {},
        milestones: milestones || [],
        closing: closing || {}
      };
    } else if (founderWordsType === "founderWords4") {
      founderWordsData.content[founderWordsType] = {
        header: header || {},
        principles: principles || [],
        mainStatement: mainStatement || {}
      };
    }

    console.log("Saving founder words content:", founderWordsData);

    onSave(founderWordsData);
    setHasChanges(false);
  };

  const currentFounderWordsConfig = FOUNDER_WORDS_TYPE_CONFIG[formData.founderWordsType] || FOUNDER_WORDS_TYPE_CONFIG.founderWords1;

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

      {/* Founder Words Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Founder Words Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.founderWordsType}
          onChange={(e) => handleChange("founderWordsType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(FOUNDER_WORDS_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentFounderWordsConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Founder Words Type Info:</p>
            <p className="text-sm text-blue-700">{currentFounderWordsConfig.description}</p>
          </div>
        )}
      </div>

      {/* Header Configuration */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-3">Header Configuration</label>
        <div className="space-y-3">
          {(formData.founderWordsType === "founderWords1" || formData.founderWordsType === "founderWords4") && (
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
                  placeholder="Founder's Journey"
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
          {formData.founderWordsType === "founderWords2" && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">Badge</label>
              <input
                type="text"
                value={formData.header?.badge || ""}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  badge: e.target.value
                })}
                placeholder="Founder's Perspective"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          {(formData.founderWordsType === "founderWords2" || formData.founderWordsType === "founderWords3" || formData.founderWordsType === "founderWords4") && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Title Line 1 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.header?.title?.line1 || ""}
                  onChange={(e) => handleChange("header", {
                    ...formData.header,
                    title: {
                      ...formData.header?.title,
                      line1: e.target.value
                    }
                  })}
                  placeholder="Insights That"
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
                      ...formData.header?.title,
                      line2: e.target.value
                    }
                  })}
                  placeholder="Drive Innovation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
          {formData.founderWordsType === "founderWords1" && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">
                Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.header?.title || ""}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  title: e.target.value
                })}
                placeholder="Words That Shaped Us"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
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

      {/* Quotes for founderWords1 */}
      {formData.founderWordsType === "founderWords1" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Quotes ({formData.quotes?.length || 0})
            </label>
            <button
              type="button"
              onClick={addQuote}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Quote
            </button>
          </div>
          {formData.quotes?.map((quote, index) => (
            <div key={index} className="mb-3 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Quote {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeQuote(index)}
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
                    value={quote.text || ""}
                    onChange={(e) => updateQuote(index, "text", e.target.value)}
                    placeholder="Quote text"
                    rows={2}
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Year</label>
                    <input
                      type="text"
                      value={quote.year || ""}
                      onChange={(e) => updateQuote(index, "year", e.target.value)}
                      placeholder="2015"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Context</label>
                    <input
                      type="text"
                      value={quote.context || ""}
                      onChange={(e) => updateQuote(index, "context", e.target.value)}
                      placeholder="The Beginning"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Insights for founderWords2 */}
      {formData.founderWordsType === "founderWords2" && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Insights ({formData.insights?.length || 0})
              </label>
              <button
                type="button"
                onClick={addInsight}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Insight
              </button>
            </div>
            {formData.insights?.map((insight, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Insight {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeInsight(index)}
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
                        value={insight.title || ""}
                        onChange={(e) => updateInsight(index, "title", e.target.value)}
                        placeholder="The Spark"
                        required
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Icon</label>
                      <input
                        type="text"
                        value={insight.icon || ""}
                        onChange={(e) => updateInsight(index, "icon", e.target.value)}
                        placeholder="Lightbulb"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Quote <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={insight.quote || ""}
                      onChange={(e) => updateInsight(index, "quote", e.target.value)}
                      placeholder="Insight quote"
                      rows={2}
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Gradient</label>
                    <input
                      type="text"
                      value={insight.gradient || ""}
                      onChange={(e) => updateInsight(index, "gradient", e.target.value)}
                      placeholder="from-yellow-400 to-orange-500"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Main Quote</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Text</label>
                <textarea
                  value={formData.mainQuote?.text || ""}
                  onChange={(e) => handleChange("mainQuote", {
                    ...formData.mainQuote,
                    text: e.target.value
                  })}
                  placeholder="Main quote text"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Author</label>
                <input
                  type="text"
                  value={formData.mainQuote?.author || ""}
                  onChange={(e) => handleChange("mainQuote", {
                    ...formData.mainQuote,
                    author: e.target.value
                  })}
                  placeholder="Founder & CEO"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Milestones for founderWords3 */}
      {formData.founderWordsType === "founderWords3" && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Milestones ({formData.milestones?.length || 0})
              </label>
              <button
                type="button"
                onClick={addMilestone}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Milestone
              </button>
            </div>
            {formData.milestones?.map((milestone, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Milestone {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeMilestone(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Quote <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={milestone.quote || ""}
                      onChange={(e) => updateMilestone(index, "quote", e.target.value)}
                      placeholder="Milestone quote"
                      rows={2}
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Date</label>
                      <input
                        type="text"
                        value={milestone.date || ""}
                        onChange={(e) => updateMilestone(index, "date", e.target.value)}
                        placeholder="2015"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Location</label>
                      <input
                        type="text"
                        value={milestone.location || ""}
                        onChange={(e) => updateMilestone(index, "location", e.target.value)}
                        placeholder="San Francisco"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Achievement</label>
                      <input
                        type="text"
                        value={milestone.achievement || ""}
                        onChange={(e) => updateMilestone(index, "achievement", e.target.value)}
                        placeholder="Company Founded"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Closing Statement</label>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Text</label>
              <textarea
                value={formData.closing?.text || ""}
                onChange={(e) => handleChange("closing", {
                  ...formData.closing,
                  text: e.target.value
                })}
                placeholder="Closing statement"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Principles for founderWords4 */}
      {formData.founderWordsType === "founderWords4" && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Principles ({formData.principles?.length || 0})
              </label>
              <button
                type="button"
                onClick={addPrinciple}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Principle
              </button>
            </div>
            {formData.principles?.map((principle, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Principle {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removePrinciple(index)}
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
                        value={principle.title || ""}
                        onChange={(e) => updatePrinciple(index, "title", e.target.value)}
                        placeholder="Purpose-Driven"
                        required
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Icon</label>
                      <input
                        type="text"
                        value={principle.icon || ""}
                        onChange={(e) => updatePrinciple(index, "icon", e.target.value)}
                        placeholder="Target"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Quote <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={principle.quote || ""}
                      onChange={(e) => updatePrinciple(index, "quote", e.target.value)}
                      placeholder="Principle quote"
                      rows={2}
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Gradient</label>
                    <input
                      type="text"
                      value={principle.gradient || ""}
                      onChange={(e) => updatePrinciple(index, "gradient", e.target.value)}
                      placeholder="from-blue-500 to-cyan-500"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Main Statement</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Text</label>
                <textarea
                  value={formData.mainStatement?.text || ""}
                  onChange={(e) => handleChange("mainStatement", {
                    ...formData.mainStatement,
                    text: e.target.value
                  })}
                  placeholder="Main statement text"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Author</label>
                <input
                  type="text"
                  value={formData.mainStatement?.author || ""}
                  onChange={(e) => handleChange("mainStatement", {
                    ...formData.mainStatement,
                    author: e.target.value
                  })}
                  placeholder="Founder"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Closing for founderWords1 */}
      {formData.founderWordsType === "founderWords1" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Closing Statement</label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Text</label>
              <textarea
                value={formData.closing?.text || ""}
                onChange={(e) => handleChange("closing", {
                  ...formData.closing,
                  text: e.target.value
                })}
                placeholder="Closing statement"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Icon</label>
              <input
                type="text"
                value={formData.closing?.icon || ""}
                onChange={(e) => handleChange("closing", {
                  ...formData.closing,
                  icon: e.target.value
                })}
                placeholder="Heart"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
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

