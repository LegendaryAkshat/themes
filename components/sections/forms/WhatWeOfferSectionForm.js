"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different what we offer types and their fields
const WHAT_WE_OFFER_TYPE_CONFIG = {
  whatWeOffer1: {
    label: "What We Offer 1 - Grid with Features",
    fields: ["header", "offerings"],
    description: "Grid layout with offerings featuring icons, titles, descriptions, and features lists. Light background."
  },
  whatWeOffer2: {
    label: "What We Offer 2 - Services with CTA",
    fields: ["header", "services", "cta"],
    description: "Services with categories, benefits lists, and CTA section. Dark gradient background with scroll animations."
  },
  whatWeOffer3: {
    label: "What We Offer 3 - Offerings with Features Section",
    fields: ["header", "offerings", "features", "cta"],
    description: "Gradient offering cards with additional features section and CTA. White background."
  },
  whatWeOffer4: {
    label: "What We Offer 4 - Packages/Pricing",
    fields: ["header", "packages", "bottomNote"],
    description: "Pricing packages with features, popular flag, and bottom note. Light background."
  }
};

export default function WhatWeOfferSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(WHAT_WE_OFFER_TYPE_CONFIG)[0] || "whatWeOffer1";
    const initialData = { whatWeOfferType: firstType };

    if (firstType === "whatWeOffer1") {
      initialData.header = {
        badge: "Our Solutions",
        title: {
          line1: "What We",
          line2: "Offer You"
        },
        description: "Comprehensive solutions designed to elevate your business."
      };
      initialData.offerings = [
        {
          icon: "Zap",
          title: "Lightning-Fast Solutions",
          description: "Cutting-edge technology that delivers results.",
          features: ["Real-time processing", "Scalable infrastructure"],
          gradient: "from-yellow-500 to-orange-500"
        }
      ];
    } else if (firstType === "whatWeOffer2") {
      initialData.header = {
        badge: {
          text: "Our Services",
          icon: "Sparkles"
        },
        title: {
          line1: "Comprehensive",
          line2: "Solutions"
        },
        description: "Everything you need to succeed."
      };
      initialData.services = [
        {
          category: "Technology",
          title: "Advanced Platform",
          description: "State-of-the-art infrastructure.",
          benefits: ["Cloud-native architecture", "Auto-scaling capabilities"],
          gradient: "from-blue-500 to-cyan-500"
        }
      ];
      initialData.cta = {
        title: "Ready to Transform Your Business?",
        description: "Let's discuss how our solutions can help you.",
        buttonText: "Schedule a Consultation"
      };
    } else if (firstType === "whatWeOffer3") {
      initialData.header = {
        badge: "What's Included",
        title: {
          line1: "Everything You Need",
          line2: "To Succeed"
        },
        description: "A complete suite of tools and resources."
      };
      initialData.offerings = [
        {
          icon: "Zap",
          title: "Speed & Performance",
          description: "Lightning-fast response times.",
          gradient: "from-yellow-500 to-orange-500"
        }
      ];
      initialData.features = [
        "Advanced analytics and insights",
        "Custom integrations available"
      ];
      initialData.cta = {
        text: "Experience the difference. Start your journey with us today.",
        buttonText: "Explore Our Solutions"
      };
    } else if (firstType === "whatWeOffer4") {
      initialData.header = {
        badge: {
          text: "Our Offerings",
          icon: "Sparkles"
        },
        title: {
          line1: "Solutions for",
          line2: "Every Stage"
        },
        description: "Choose the package that fits your needs."
      };
      initialData.packages = [
        {
          name: "Essential",
          description: "Perfect for getting started",
          price: "Starting at",
          priceValue: "$99",
          features: ["Core functionality", "Email support"],
          gradient: "from-blue-500 to-cyan-500",
          popular: false
        }
      ];
      initialData.bottomNote = {
        text: "All packages include our commitment to excellence."
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

    const firstType = Object.keys(WHAT_WE_OFFER_TYPE_CONFIG)[0] || "whatWeOffer1";
    const whatWeOfferType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { whatWeOfferType };

    // Load data based on what we offer type
    const config = content[whatWeOfferType] || {};
    updatedFormData.header = config.header || formData.header || {};
    updatedFormData.offerings = config.offerings || formData.offerings || [];
    updatedFormData.services = config.services || formData.services || [];
    updatedFormData.packages = config.packages || formData.packages || [];
    updatedFormData.features = config.features || formData.features || [];
    updatedFormData.cta = config.cta || formData.cta || {};
    updatedFormData.bottomNote = config.bottomNote || formData.bottomNote || {};

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

    if (field === "whatWeOfferType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Offerings management for whatWeOffer1, whatWeOffer3
  const addOffering = () => {
    const currentOfferings = formData.offerings || [];
    const newOffering = {
      icon: "Zap",
      title: "New Offering",
      description: "Offering description",
      gradient: "from-yellow-500 to-orange-500"
    };
    if (formData.whatWeOfferType === "whatWeOffer1") {
      newOffering.features = ["Feature 1", "Feature 2"];
    }
    handleChange("offerings", [...currentOfferings, newOffering]);
  };

  const removeOffering = (index) => {
    const updatedOfferings = formData.offerings.filter((_, i) => i !== index);
    handleChange("offerings", updatedOfferings);
  };

  const updateOffering = (index, field, value) => {
    const updatedOfferings = formData.offerings.map((offering, i) => 
      i === index ? { ...offering, [field]: value } : offering
    );
    handleChange("offerings", updatedOfferings);
  };

  const addOfferingFeature = (offeringIndex) => {
    const updatedOfferings = formData.offerings.map((offering, i) => 
      i === offeringIndex 
        ? { ...offering, features: [...(offering.features || []), "New feature"] }
        : offering
    );
    handleChange("offerings", updatedOfferings);
  };

  const removeOfferingFeature = (offeringIndex, featureIndex) => {
    const updatedOfferings = formData.offerings.map((offering, i) => 
      i === offeringIndex 
        ? { ...offering, features: offering.features.filter((_, fI) => fI !== featureIndex) }
        : offering
    );
    handleChange("offerings", updatedOfferings);
  };

  const updateOfferingFeature = (offeringIndex, featureIndex, value) => {
    const updatedOfferings = formData.offerings.map((offering, i) => 
      i === offeringIndex 
        ? { ...offering, features: offering.features.map((f, fI) => fI === featureIndex ? value : f) }
        : offering
    );
    handleChange("offerings", updatedOfferings);
  };

  // Services management for whatWeOffer2
  const addService = () => {
    const currentServices = formData.services || [];
    const newService = {
      category: "Category",
      title: "New Service",
      description: "Service description",
      benefits: ["Benefit 1", "Benefit 2"],
      gradient: "from-blue-500 to-cyan-500"
    };
    handleChange("services", [...currentServices, newService]);
  };

  const removeService = (index) => {
    const updatedServices = formData.services.filter((_, i) => i !== index);
    handleChange("services", updatedServices);
  };

  const updateService = (index, field, value) => {
    const updatedServices = formData.services.map((service, i) => 
      i === index ? { ...service, [field]: value } : service
    );
    handleChange("services", updatedServices);
  };

  const addServiceBenefit = (serviceIndex) => {
    const updatedServices = formData.services.map((service, i) => 
      i === serviceIndex 
        ? { ...service, benefits: [...(service.benefits || []), "New benefit"] }
        : service
    );
    handleChange("services", updatedServices);
  };

  const removeServiceBenefit = (serviceIndex, benefitIndex) => {
    const updatedServices = formData.services.map((service, i) => 
      i === serviceIndex 
        ? { ...service, benefits: service.benefits.filter((_, bI) => bI !== benefitIndex) }
        : service
    );
    handleChange("services", updatedServices);
  };

  const updateServiceBenefit = (serviceIndex, benefitIndex, value) => {
    const updatedServices = formData.services.map((service, i) => 
      i === serviceIndex 
        ? { ...service, benefits: service.benefits.map((b, bI) => bI === benefitIndex ? value : b) }
        : service
    );
    handleChange("services", updatedServices);
  };

  // Packages management for whatWeOffer4
  const addPackage = () => {
    const currentPackages = formData.packages || [];
    const newPackage = {
      name: "New Package",
      description: "Package description",
      price: "Starting at",
      priceValue: "$99",
      features: ["Feature 1"],
      gradient: "from-blue-500 to-cyan-500",
      popular: false
    };
    handleChange("packages", [...currentPackages, newPackage]);
  };

  const removePackage = (index) => {
    const updatedPackages = formData.packages.filter((_, i) => i !== index);
    handleChange("packages", updatedPackages);
  };

  const updatePackage = (index, field, value) => {
    const updatedPackages = formData.packages.map((pkg, i) => 
      i === index ? { ...pkg, [field]: value } : pkg
    );
    handleChange("packages", updatedPackages);
  };

  const addPackageFeature = (packageIndex) => {
    const updatedPackages = formData.packages.map((pkg, i) => 
      i === packageIndex 
        ? { ...pkg, features: [...(pkg.features || []), "New feature"] }
        : pkg
    );
    handleChange("packages", updatedPackages);
  };

  const removePackageFeature = (packageIndex, featureIndex) => {
    const updatedPackages = formData.packages.map((pkg, i) => 
      i === packageIndex 
        ? { ...pkg, features: pkg.features.filter((_, fI) => fI !== featureIndex) }
        : pkg
    );
    handleChange("packages", updatedPackages);
  };

  const updatePackageFeature = (packageIndex, featureIndex, value) => {
    const updatedPackages = formData.packages.map((pkg, i) => 
      i === packageIndex 
        ? { ...pkg, features: pkg.features.map((f, fI) => fI === featureIndex ? value : f) }
        : pkg
    );
    handleChange("packages", updatedPackages);
  };

  // Features management for whatWeOffer3
  const addFeature = () => {
    const currentFeatures = formData.features || [];
    handleChange("features", [...currentFeatures, "New feature"]);
  };

  const removeFeature = (index) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    handleChange("features", updatedFeatures);
  };

  const updateFeature = (index, value) => {
    const updatedFeatures = formData.features.map((f, i) => i === index ? value : f);
    handleChange("features", updatedFeatures);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.header?.title || (typeof formData.header.title === 'object' && (!formData.header.title.line1 || formData.header.title.line1.trim() === ""))) {
      errors.push("Header title is required");
    }

    if (formData.whatWeOfferType === "whatWeOffer1" || formData.whatWeOfferType === "whatWeOffer3") {
      if (!formData.offerings || formData.offerings.length === 0) {
        errors.push("At least one offering is required");
      } else {
        formData.offerings.forEach((offering, index) => {
          if (!offering.title || offering.title.trim() === "") {
            errors.push(`Offering ${index + 1}: Title is required`);
          }
        });
      }
    } else if (formData.whatWeOfferType === "whatWeOffer2") {
      if (!formData.services || formData.services.length === 0) {
        errors.push("At least one service is required");
      } else {
        formData.services.forEach((service, index) => {
          if (!service.title || service.title.trim() === "") {
            errors.push(`Service ${index + 1}: Title is required`);
          }
        });
      }
    } else if (formData.whatWeOfferType === "whatWeOffer4") {
      if (!formData.packages || formData.packages.length === 0) {
        errors.push("At least one package is required");
      } else {
        formData.packages.forEach((pkg, index) => {
          if (!pkg.name || pkg.name.trim() === "") {
            errors.push(`Package ${index + 1}: Name is required`);
          }
        });
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("WhatWeOfferSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { whatWeOfferType, header, offerings, services, packages, features, cta, bottomNote } = formData;

    // Structure data according to what-we-offer.js component expectations
    const whatWeOfferData = {
      component: "what-we-offer",
      type: whatWeOfferType,
      content: {}
    };

    // Add type-specific data to content
    whatWeOfferData.content[whatWeOfferType] = {
      header: header || {}
    };

    if (whatWeOfferType === "whatWeOffer1" || whatWeOfferType === "whatWeOffer3") {
      whatWeOfferData.content[whatWeOfferType].offerings = offerings || [];
    }

    if (whatWeOfferType === "whatWeOffer2") {
      whatWeOfferData.content[whatWeOfferType].services = services || [];
      if (cta) {
        whatWeOfferData.content[whatWeOfferType].cta = cta;
      }
    }

    if (whatWeOfferType === "whatWeOffer3") {
      if (features) {
        whatWeOfferData.content[whatWeOfferType].features = features;
      }
      if (cta) {
        whatWeOfferData.content[whatWeOfferType].cta = cta;
      }
    }

    if (whatWeOfferType === "whatWeOffer4") {
      whatWeOfferData.content[whatWeOfferType].packages = packages || [];
      if (bottomNote) {
        whatWeOfferData.content[whatWeOfferType].bottomNote = bottomNote;
      }
    }

    console.log("Saving what we offer content:", whatWeOfferData);

    onSave(whatWeOfferData);
    setHasChanges(false);
  };

  const currentWhatWeOfferConfig = WHAT_WE_OFFER_TYPE_CONFIG[formData.whatWeOfferType] || WHAT_WE_OFFER_TYPE_CONFIG.whatWeOffer1;

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

      {/* What We Offer Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          What We Offer Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.whatWeOfferType}
          onChange={(e) => handleChange("whatWeOfferType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(WHAT_WE_OFFER_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentWhatWeOfferConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ What We Offer Type Info:</p>
            <p className="text-sm text-blue-700">{currentWhatWeOfferConfig.description}</p>
          </div>
        )}
      </div>

      {/* Header Configuration */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-3">Header Configuration</label>
        <div className="space-y-3">
          {(formData.whatWeOfferType === "whatWeOffer2" || formData.whatWeOfferType === "whatWeOffer4") && (
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
                  placeholder="Our Services"
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
          {(formData.whatWeOfferType === "whatWeOffer1" || formData.whatWeOfferType === "whatWeOffer3") && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">Badge</label>
              <input
                type="text"
                value={formData.header?.badge || ""}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  badge: e.target.value
                })}
                placeholder="Our Solutions"
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
                placeholder="Offer You"
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

      {/* Offerings for whatWeOffer1, whatWeOffer3 */}
      {(formData.whatWeOfferType === "whatWeOffer1" || formData.whatWeOfferType === "whatWeOffer3") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Offerings ({formData.offerings?.length || 0})
            </label>
            <button
              type="button"
              onClick={addOffering}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Offering
            </button>
          </div>
          {formData.offerings?.map((offering, index) => (
            <div key={index} className="mb-3 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Offering {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeOffering(index)}
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
                      value={offering.title || ""}
                      onChange={(e) => updateOffering(index, "title", e.target.value)}
                      placeholder="Lightning-Fast Solutions"
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Icon</label>
                    <input
                      type="text"
                      value={offering.icon || ""}
                      onChange={(e) => updateOffering(index, "icon", e.target.value)}
                      placeholder="Zap"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Description</label>
                  <textarea
                    value={offering.description || ""}
                    onChange={(e) => updateOffering(index, "description", e.target.value)}
                    placeholder="Offering description"
                    rows={2}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Gradient</label>
                  <input
                    type="text"
                    value={offering.gradient || ""}
                    onChange={(e) => updateOffering(index, "gradient", e.target.value)}
                    placeholder="from-yellow-500 to-orange-500"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {formData.whatWeOfferType === "whatWeOffer1" && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs text-gray-600">
                        Features ({offering.features?.length || 0})
                      </label>
                      <button
                        type="button"
                        onClick={() => addOfferingFeature(index)}
                        className="text-xs text-blue-600 hover:text-blue-700"
                      >
                        <Plus className="h-3 w-3 inline" /> Add
                      </button>
                    </div>
                    {offering.features?.map((feature, fIndex) => (
                      <div key={fIndex} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => updateOfferingFeature(index, fIndex, e.target.value)}
                          placeholder="Feature text"
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => removeOfferingFeature(index, fIndex)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Services for whatWeOffer2 */}
      {formData.whatWeOfferType === "whatWeOffer2" && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Services ({formData.services?.length || 0})
              </label>
              <button
                type="button"
                onClick={addService}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Service
              </button>
            </div>
            {formData.services?.map((service, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Service {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeService(index)}
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
                        value={service.title || ""}
                        onChange={(e) => updateService(index, "title", e.target.value)}
                        placeholder="Advanced Platform"
                        required
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Category</label>
                      <input
                        type="text"
                        value={service.category || ""}
                        onChange={(e) => updateService(index, "category", e.target.value)}
                        placeholder="Technology"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Description</label>
                    <textarea
                      value={service.description || ""}
                      onChange={(e) => updateService(index, "description", e.target.value)}
                      placeholder="Service description"
                      rows={2}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Gradient</label>
                    <input
                      type="text"
                      value={service.gradient || ""}
                      onChange={(e) => updateService(index, "gradient", e.target.value)}
                      placeholder="from-blue-500 to-cyan-500"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs text-gray-600">
                        Benefits ({service.benefits?.length || 0})
                      </label>
                      <button
                        type="button"
                        onClick={() => addServiceBenefit(index)}
                        className="text-xs text-blue-600 hover:text-blue-700"
                      >
                        <Plus className="h-3 w-3 inline" /> Add
                      </button>
                    </div>
                    {service.benefits?.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={benefit}
                          onChange={(e) => updateServiceBenefit(index, bIndex, e.target.value)}
                          placeholder="Benefit text"
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => removeServiceBenefit(index, bIndex)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">CTA Section</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Title</label>
                <input
                  type="text"
                  value={formData.cta?.title || ""}
                  onChange={(e) => handleChange("cta", {
                    ...formData.cta,
                    title: e.target.value
                  })}
                  placeholder="Ready to Transform Your Business?"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Description</label>
                <textarea
                  value={formData.cta?.description || ""}
                  onChange={(e) => handleChange("cta", {
                    ...formData.cta,
                    description: e.target.value
                  })}
                  placeholder="CTA description"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Button Text</label>
                <input
                  type="text"
                  value={formData.cta?.buttonText || ""}
                  onChange={(e) => handleChange("cta", {
                    ...formData.cta,
                    buttonText: e.target.value
                  })}
                  placeholder="Schedule a Consultation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Features for whatWeOffer3 */}
      {formData.whatWeOfferType === "whatWeOffer3" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Additional Features ({formData.features?.length || 0})
            </label>
            <button
              type="button"
              onClick={addFeature}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Feature
            </button>
          </div>
          {formData.features?.map((feature, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <input
                type="text"
                value={feature}
                onChange={(e) => updateFeature(index, e.target.value)}
                placeholder="Feature text"
                className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* CTA for whatWeOffer3 */}
      {formData.whatWeOfferType === "whatWeOffer3" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">CTA Section</label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Text</label>
              <textarea
                value={formData.cta?.text || ""}
                onChange={(e) => handleChange("cta", {
                  ...formData.cta,
                  text: e.target.value
                })}
                placeholder="CTA text"
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Button Text</label>
              <input
                type="text"
                value={formData.cta?.buttonText || ""}
                onChange={(e) => handleChange("cta", {
                  ...formData.cta,
                  buttonText: e.target.value
                })}
                placeholder="Explore Our Solutions"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      )}

      {/* Packages for whatWeOffer4 */}
      {formData.whatWeOfferType === "whatWeOffer4" && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Packages ({formData.packages?.length || 0})
              </label>
              <button
                type="button"
                onClick={addPackage}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Package
              </button>
            </div>
            {formData.packages?.map((pkg, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Package {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removePackage(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={pkg.name || ""}
                        onChange={(e) => updatePackage(index, "name", e.target.value)}
                        placeholder="Essential"
                        required
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Gradient</label>
                      <input
                        type="text"
                        value={pkg.gradient || ""}
                        onChange={(e) => updatePackage(index, "gradient", e.target.value)}
                        placeholder="from-blue-500 to-cyan-500"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Description</label>
                    <input
                      type="text"
                      value={pkg.description || ""}
                      onChange={(e) => updatePackage(index, "description", e.target.value)}
                      placeholder="Perfect for getting started"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Price Label</label>
                      <input
                        type="text"
                        value={pkg.price || ""}
                        onChange={(e) => updatePackage(index, "price", e.target.value)}
                        placeholder="Starting at"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Price Value</label>
                      <input
                        type="text"
                        value={pkg.priceValue || ""}
                        onChange={(e) => updatePackage(index, "priceValue", e.target.value)}
                        placeholder="$99"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={pkg.popular || false}
                      onChange={(e) => updatePackage(index, "popular", e.target.checked)}
                      className="rounded"
                    />
                    <label className="text-xs text-gray-600">Popular Package</label>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs text-gray-600">
                        Features ({pkg.features?.length || 0})
                      </label>
                      <button
                        type="button"
                        onClick={() => addPackageFeature(index)}
                        className="text-xs text-blue-600 hover:text-blue-700"
                      >
                        <Plus className="h-3 w-3 inline" /> Add
                      </button>
                    </div>
                    {pkg.features?.map((feature, fIndex) => (
                      <div key={fIndex} className="flex gap-2 mb-2">
                        <input
                          type="text"
                          value={feature}
                          onChange={(e) => updatePackageFeature(index, fIndex, e.target.value)}
                          placeholder="Feature text"
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => removePackageFeature(index, fIndex)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Bottom Note</label>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Text</label>
              <textarea
                value={formData.bottomNote?.text || ""}
                onChange={(e) => handleChange("bottomNote", {
                  ...formData.bottomNote,
                  text: e.target.value
                })}
                placeholder="Bottom note text"
                rows={2}
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

