"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different our belief types and their fields
const OUR_BELIEF_TYPE_CONFIG = {
  ourBelief1: {
    label: "Our Belief 1 - Grid with Hover Action",
    fields: ["header", "beliefs", "hoverAction"],
    description: "Grid layout with beliefs featuring icon, title, statement, gradient, and hover action. Light background."
  },
  ourBelief2: {
    label: "Our Belief 2 - Horizontal Cards with Scroll",
    fields: ["header", "principles", "closing"],
    description: "Horizontal cards with principles featuring icon, title, belief text, and gradient. Dark gradient background with scroll animations."
  },
  ourBelief3: {
    label: "Our Belief 3 - Manifesto with Commitments",
    fields: ["header", "manifesto", "commitments", "bottomStatement"],
    description: "Manifesto statements with commitments list and bottom statement. White background."
  },
  ourBelief4: {
    label: "Our Belief 4 - Grid with Quote",
    fields: ["header", "beliefs", "quote"],
    description: "Grid of beliefs with icon, title, description, gradient, and a main quote section. Light background."
  }
};

export default function OurBeliefSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(OUR_BELIEF_TYPE_CONFIG)[0] || "ourBelief1";
    const initialData = { ourBeliefType: firstType };

    if (firstType === "ourBelief1") {
      initialData.header = {
        badge: "Our Philosophy",
        title: {
          line1: "What We",
          line2: "Believe In"
        },
        description: "The core beliefs that guide our decisions."
      };
      initialData.beliefs = [
        {
          icon: "Heart",
          title: "People First",
          statement: "We believe that success is built on genuine relationships.",
          gradient: "from-rose-500 to-pink-500"
        }
      ];
      initialData.hoverAction = {
        text: "Learn more",
        icon: "ArrowRight",
        enabled: true
      };
    } else if (firstType === "ourBelief2") {
      initialData.header = {
        badge: {
          text: "Core Principles",
          icon: "Sparkles"
        },
        title: "Our Beliefs",
        description: "The fundamental principles that shape our thinking."
      };
      initialData.principles = [
        {
          icon: "Lightbulb",
          title: "Innovation",
          belief: "We believe in challenging the status quo.",
          gradient: "from-yellow-500 to-orange-500"
        }
      ];
      initialData.closing = {
        text: "These beliefs guide every decision and shape our culture."
      };
    } else if (firstType === "ourBelief3") {
      initialData.header = {
        badge: "Our Manifesto",
        title: {
          line1: "What We",
          line2: "Stand For"
        },
        description: "A declaration of our beliefs and values."
      };
      initialData.manifesto = [
        {
          icon: "Heart",
          statement: "We believe in the power of human connection.",
          gradient: "from-rose-500 to-pink-500"
        }
      ];
      initialData.commitments = ["Transparency in all our communications"];
      initialData.bottomStatement = {
        text: "These beliefs and commitments guide us every day."
      };
    } else if (firstType === "ourBelief4") {
      initialData.header = {
        badge: {
          text: "Our Foundation",
          icon: "Sparkles"
        },
        title: {
          line1: "Beliefs That",
          line2: "Define Us"
        },
        description: "Core beliefs that shape our culture."
      };
      initialData.beliefs = [
        {
          icon: "Heart",
          title: "Human-Centered",
          description: "People are at the heart of everything we do.",
          gradient: "from-rose-500 to-pink-500"
        }
      ];
      initialData.quote = {
        text: "These beliefs aren't just ideals—they're the principles we live by.",
        label: "Our Promise"
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

    const firstType = Object.keys(OUR_BELIEF_TYPE_CONFIG)[0] || "ourBelief1";
    const ourBeliefType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { ourBeliefType };

    // Load data based on our belief type
    const config = content[ourBeliefType] || {};
    updatedFormData.header = config.header || formData.header || {};
    updatedFormData.beliefs = config.beliefs || formData.beliefs || [];
    updatedFormData.principles = config.principles || formData.principles || [];
    updatedFormData.manifesto = config.manifesto || formData.manifesto || [];
    updatedFormData.commitments = config.commitments || formData.commitments || [];
    updatedFormData.closing = config.closing || formData.closing || {};
    updatedFormData.bottomStatement = config.bottomStatement || formData.bottomStatement || {};
    updatedFormData.quote = config.quote || formData.quote || {};
    updatedFormData.hoverAction = config.hoverAction || formData.hoverAction || {};

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

    if (field === "ourBeliefType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Beliefs management for ourBelief1, ourBelief4
  const addBelief = () => {
    const currentBeliefs = formData.beliefs || [];
    let newBelief;
    
    if (formData.ourBeliefType === "ourBelief1") {
      newBelief = {
        icon: "Heart",
        title: "New Belief",
        statement: "Belief statement",
        gradient: "from-rose-500 to-pink-500"
      };
    } else if (formData.ourBeliefType === "ourBelief4") {
      newBelief = {
        icon: "Heart",
        title: "New Belief",
        description: "Belief description",
        gradient: "from-rose-500 to-pink-500"
      };
    }
    
    if (newBelief) {
      handleChange("beliefs", [...currentBeliefs, newBelief]);
    }
  };

  const removeBelief = (index) => {
    const updatedBeliefs = formData.beliefs.filter((_, i) => i !== index);
    handleChange("beliefs", updatedBeliefs);
  };

  const updateBelief = (index, field, value) => {
    const updatedBeliefs = formData.beliefs.map((belief, i) => 
      i === index ? { ...belief, [field]: value } : belief
    );
    handleChange("beliefs", updatedBeliefs);
  };

  // Principles management for ourBelief2
  const addPrinciple = () => {
    const currentPrinciples = formData.principles || [];
    const newPrinciple = {
      icon: "Lightbulb",
      title: "New Principle",
      belief: "Principle belief text",
      gradient: "from-yellow-500 to-orange-500"
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

  // Manifesto management for ourBelief3
  const addManifesto = () => {
    const currentManifesto = formData.manifesto || [];
    const newManifesto = {
      icon: "Heart",
      statement: "Manifesto statement",
      gradient: "from-rose-500 to-pink-500"
    };
    handleChange("manifesto", [...currentManifesto, newManifesto]);
  };

  const removeManifesto = (index) => {
    const updatedManifesto = formData.manifesto.filter((_, i) => i !== index);
    handleChange("manifesto", updatedManifesto);
  };

  const updateManifesto = (index, field, value) => {
    const updatedManifesto = formData.manifesto.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    handleChange("manifesto", updatedManifesto);
  };

  // Commitments management for ourBelief3
  const addCommitment = () => {
    const currentCommitments = formData.commitments || [];
    handleChange("commitments", [...currentCommitments, "New commitment"]);
  };

  const removeCommitment = (index) => {
    const updatedCommitments = formData.commitments.filter((_, i) => i !== index);
    handleChange("commitments", updatedCommitments);
  };

  const updateCommitment = (index, value) => {
    const updatedCommitments = formData.commitments.map((commitment, i) => 
      i === index ? value : commitment
    );
    handleChange("commitments", updatedCommitments);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.header?.title || (typeof formData.header.title === 'string' && formData.header.title.trim() === "") || (typeof formData.header.title === 'object' && (!formData.header.title.line1 || formData.header.title.line1.trim() === ""))) {
      errors.push("Header title is required");
    }

    if (formData.ourBeliefType === "ourBelief1" || formData.ourBeliefType === "ourBelief4") {
      if (!formData.beliefs || formData.beliefs.length === 0) {
        errors.push("At least one belief is required");
      } else {
        formData.beliefs.forEach((belief, index) => {
          if (!belief.title || belief.title.trim() === "") {
            errors.push(`Belief ${index + 1}: Title is required`);
          }
        });
      }
    } else if (formData.ourBeliefType === "ourBelief2") {
      if (!formData.principles || formData.principles.length === 0) {
        errors.push("At least one principle is required");
      } else {
        formData.principles.forEach((principle, index) => {
          if (!principle.title || principle.title.trim() === "") {
            errors.push(`Principle ${index + 1}: Title is required`);
          }
          if (!principle.belief || principle.belief.trim() === "") {
            errors.push(`Principle ${index + 1}: Belief text is required`);
          }
        });
      }
    } else if (formData.ourBeliefType === "ourBelief3") {
      if (!formData.manifesto || formData.manifesto.length === 0) {
        errors.push("At least one manifesto statement is required");
      } else {
        formData.manifesto.forEach((item, index) => {
          if (!item.statement || item.statement.trim() === "") {
            errors.push(`Manifesto ${index + 1}: Statement is required`);
          }
        });
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("OurBeliefSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { ourBeliefType, header, beliefs, principles, manifesto, commitments, closing, bottomStatement, quote, hoverAction } = formData;

    // Structure data according to our-belief.js component expectations
    const ourBeliefData = {
      component: "our-belief",
      type: ourBeliefType,
      content: {}
    };

    // Add type-specific data to content
    ourBeliefData.content[ourBeliefType] = {
      header: header || {}
    };

    if (ourBeliefType === "ourBelief1" || ourBeliefType === "ourBelief4") {
      ourBeliefData.content[ourBeliefType].beliefs = beliefs || [];
    }

    if (ourBeliefType === "ourBelief2") {
      ourBeliefData.content[ourBeliefType].principles = principles || [];
      if (closing) {
        ourBeliefData.content[ourBeliefType].closing = closing;
      }
    }

    if (ourBeliefType === "ourBelief3") {
      ourBeliefData.content[ourBeliefType].manifesto = manifesto || [];
      ourBeliefData.content[ourBeliefType].commitments = commitments || [];
      if (bottomStatement) {
        ourBeliefData.content[ourBeliefType].bottomStatement = bottomStatement;
      }
    }

    if (ourBeliefType === "ourBelief4") {
      if (quote) {
        ourBeliefData.content[ourBeliefType].quote = quote;
      }
    }

    if (ourBeliefType === "ourBelief1") {
      if (hoverAction) {
        ourBeliefData.content[ourBeliefType].hoverAction = hoverAction;
      }
    }

    console.log("Saving our belief content:", ourBeliefData);

    onSave(ourBeliefData);
    setHasChanges(false);
  };

  const currentOurBeliefConfig = OUR_BELIEF_TYPE_CONFIG[formData.ourBeliefType] || OUR_BELIEF_TYPE_CONFIG.ourBelief1;

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

      {/* Our Belief Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Our Belief Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.ourBeliefType}
          onChange={(e) => handleChange("ourBeliefType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(OUR_BELIEF_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentOurBeliefConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Our Belief Type Info:</p>
            <p className="text-sm text-blue-700">{currentOurBeliefConfig.description}</p>
          </div>
        )}
      </div>

      {/* Header Configuration */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-3">Header Configuration</label>
        <div className="space-y-3">
          {(formData.ourBeliefType === "ourBelief2" || formData.ourBeliefType === "ourBelief4") && (
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
                  placeholder="Core Principles"
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
          {(formData.ourBeliefType === "ourBelief1" || formData.ourBeliefType === "ourBelief3") && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">Badge</label>
              <input
                type="text"
                value={formData.header?.badge || ""}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  badge: e.target.value
                })}
                placeholder="Our Philosophy"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          {formData.ourBeliefType === "ourBelief2" && (
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
                placeholder="Our Beliefs"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          {(formData.ourBeliefType === "ourBelief1" || formData.ourBeliefType === "ourBelief3" || formData.ourBeliefType === "ourBelief4") && (
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
                  placeholder="What We"
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
                  placeholder="Believe In"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
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

      {/* Beliefs for ourBelief1, ourBelief4 */}
      {(formData.ourBeliefType === "ourBelief1" || formData.ourBeliefType === "ourBelief4") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Beliefs ({formData.beliefs?.length || 0})
            </label>
            <button
              type="button"
              onClick={addBelief}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Belief
            </button>
          </div>
          {formData.beliefs?.map((belief, index) => (
            <div key={index} className="mb-3 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Belief {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeBelief(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Icon</label>
                    <input
                      type="text"
                      value={belief.icon || ""}
                      onChange={(e) => updateBelief(index, "icon", e.target.value)}
                      placeholder="Heart"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={belief.title || ""}
                      onChange={(e) => updateBelief(index, "title", e.target.value)}
                      placeholder="People First"
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                {formData.ourBeliefType === "ourBelief1" && (
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Statement</label>
                    <textarea
                      value={belief.statement || ""}
                      onChange={(e) => updateBelief(index, "statement", e.target.value)}
                      placeholder="Belief statement"
                      rows={2}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
                {formData.ourBeliefType === "ourBelief4" && (
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Description</label>
                    <textarea
                      value={belief.description || ""}
                      onChange={(e) => updateBelief(index, "description", e.target.value)}
                      placeholder="Belief description"
                      rows={2}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Gradient</label>
                  <input
                    type="text"
                    value={belief.gradient || ""}
                    onChange={(e) => updateBelief(index, "gradient", e.target.value)}
                    placeholder="from-rose-500 to-pink-500"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Principles for ourBelief2 */}
      {formData.ourBeliefType === "ourBelief2" && (
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
                    <label className="block text-xs text-gray-600 mb-1">Icon</label>
                    <input
                      type="text"
                      value={principle.icon || ""}
                      onChange={(e) => updatePrinciple(index, "icon", e.target.value)}
                      placeholder="Lightbulb"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={principle.title || ""}
                      onChange={(e) => updatePrinciple(index, "title", e.target.value)}
                      placeholder="Innovation"
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Belief <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={principle.belief || ""}
                    onChange={(e) => updatePrinciple(index, "belief", e.target.value)}
                    placeholder="We believe in challenging the status quo."
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
                    placeholder="from-yellow-500 to-orange-500"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Manifesto for ourBelief3 */}
      {formData.ourBeliefType === "ourBelief3" && (
        <>
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Manifesto Statements ({formData.manifesto?.length || 0})
              </label>
              <button
                type="button"
                onClick={addManifesto}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Statement
              </button>
            </div>
            {formData.manifesto?.map((item, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Statement {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeManifesto(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Icon</label>
                      <input
                        type="text"
                        value={item.icon || ""}
                        onChange={(e) => updateManifesto(index, "icon", e.target.value)}
                        placeholder="Heart"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Gradient</label>
                      <input
                        type="text"
                        value={item.gradient || ""}
                        onChange={(e) => updateManifesto(index, "gradient", e.target.value)}
                        placeholder="from-rose-500 to-pink-500"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Statement <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      value={item.statement || ""}
                      onChange={(e) => updateManifesto(index, "statement", e.target.value)}
                      placeholder="We believe in the power of human connection."
                      rows={2}
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Commitments ({formData.commitments?.length || 0})
              </label>
              <button
                type="button"
                onClick={addCommitment}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Commitment
              </button>
            </div>
            {formData.commitments?.map((commitment, index) => (
              <div key={index} className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  value={commitment}
                  onChange={(e) => updateCommitment(index, e.target.value)}
                  placeholder="Commitment text"
                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeCommitment(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Hover Action for ourBelief1 */}
      {formData.ourBeliefType === "ourBelief1" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Hover Action</label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.hoverAction?.enabled || false}
                onChange={(e) => handleChange("hoverAction", {
                  ...formData.hoverAction,
                  enabled: e.target.checked
                })}
                className="rounded"
              />
              <label className="text-sm text-gray-700">Enable Hover Action</label>
            </div>
            {formData.hoverAction?.enabled && (
              <>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Text</label>
                  <input
                    type="text"
                    value={formData.hoverAction?.text || ""}
                    onChange={(e) => handleChange("hoverAction", {
                      ...formData.hoverAction,
                      text: e.target.value
                    })}
                    placeholder="Learn more"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Icon</label>
                  <input
                    type="text"
                    value={formData.hoverAction?.icon || ""}
                    onChange={(e) => handleChange("hoverAction", {
                      ...formData.hoverAction,
                      icon: e.target.value
                    })}
                    placeholder="ArrowRight"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Closing for ourBelief2 */}
      {formData.ourBeliefType === "ourBelief2" && (
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
              placeholder="Closing statement text"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* Bottom Statement for ourBelief3 */}
      {formData.ourBeliefType === "ourBelief3" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Bottom Statement</label>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Text</label>
            <textarea
              value={formData.bottomStatement?.text || ""}
              onChange={(e) => handleChange("bottomStatement", {
                ...formData.bottomStatement,
                text: e.target.value
              })}
              placeholder="Bottom statement text"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* Quote for ourBelief4 */}
      {formData.ourBeliefType === "ourBelief4" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Quote</label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Text</label>
              <textarea
                value={formData.quote?.text || ""}
                onChange={(e) => handleChange("quote", {
                  ...formData.quote,
                  text: e.target.value
                })}
                placeholder="Quote text"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Label</label>
              <input
                type="text"
                value={formData.quote?.label || ""}
                onChange={(e) => handleChange("quote", {
                  ...formData.quote,
                  label: e.target.value
                })}
                placeholder="Our Promise"
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

