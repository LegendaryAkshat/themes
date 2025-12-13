"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different footer types and their fields
const FOOTER_TYPE_CONFIG = {
  footer1: {
    label: "Footer 1 - Simple Sections",
    fields: ["sections"],
    description: "Simple footer with sections featuring contact info, links, social links, and app download. Dark background."
  },
  footer2: {
    label: "Footer 2 - With Footer Bottom",
    fields: ["sections", "footer"],
    description: "Similar to Footer 1 but includes footer bottom section with copyright and payment methods."
  },
  footer3: {
    label: "Footer 3 - Comprehensive with Brand",
    fields: ["brand", "contactInfo", "footerSections", "socialLinks", "newsletter", "footer"],
    description: "Comprehensive footer with brand info, contact details, newsletter, and social links. Dark gradient background."
  },
  ecomusFooter: {
    label: "Ecomus Footer - E-commerce Style",
    fields: ["footerLinks", "contact", "socialLinks", "appDownload", "footer"],
    description: "E-commerce style footer with contact info, links, app download, payment methods, and social links."
  }
};

export default function FooterSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(FOOTER_TYPE_CONFIG)[0] || "footer1";
    const initialData = { footerType: firstType };

    if (firstType === "footer1") {
      initialData.sections = [
        {
          title: "Help & Support",
          content: {
            address: "685 Market Street, La Vega, LA 95820, United States",
            phone: { text: "(+099) 532-786-9843", href: "tel:+0995327869843" },
            email: { text: "support@example.com", href: "mailto:support@example.com" }
          },
          socialLinks: [
            { href: "#", enabled: true },
            { href: "#", enabled: true }
          ]
        }
      ];
    } else if (firstType === "footer2") {
      initialData.sections = [
        {
          title: "Help & Support",
          content: {
            address: "685 Market Street, Las Vegas, LA 95820, United States",
            phone: { text: "(+099) 532-786-9843", href: "tel:+0995327869843" },
            email: { text: "support@example.com", href: "mailto:support@example.com" }
          }
        }
      ];
      initialData.footer = {
        copyright: "© 2025. All rights reserved by",
        copyrightLink: { text: "Pimjo", href: "#" },
        paymentText: "We Accept:",
        paymentMethods: [
          { enabled: true },
          { enabled: true }
        ]
      };
    } else if (firstType === "footer3") {
      initialData.brand = {
        name: "BrandName",
        description: "Crafting exceptional experiences."
      };
      initialData.contactInfo = {
        enabled: true,
        items: [
          {
            icon: "MapPin",
            label: "Address",
            value: "123 Design Street, Creative City, CC 12345"
          }
        ]
      };
      initialData.footerSections = [
        {
          title: "Company",
          links: [
            { name: "About Us", href: "#" }
          ]
        }
      ];
      initialData.socialLinks = [
        { icon: "Facebook", href: "#", label: "Facebook" }
      ];
      initialData.newsletter = {
        enabled: true,
        title: "Stay Updated",
        description: "Subscribe to our newsletter.",
        placeholder: "Enter your email",
        buttonText: "Subscribe"
      };
      initialData.footer = {
        copyright: `© ${new Date().getFullYear()} BrandName. All rights reserved.`,
        links: [
          { label: "Privacy", href: "#" }
        ]
      };
    } else if (firstType === "ecomusFooter") {
      initialData.footerLinks = {
        help: [
          { name: "Shipping & Delivery", href: "#" }
        ],
        account: [
          { name: "Login / Register", href: "#" }
        ],
        quickLink: [
          { name: "Privacy Policy", href: "#" }
        ]
      };
      initialData.contact = {
        address: "685 Market Street, Las Vegas, LA 95820, United States.",
        phone: "(+099) 532-786-9843",
        email: "support@example.com"
      };
      initialData.socialLinks = [
        { icon: "Facebook", href: "#", label: "Facebook" }
      ];
      initialData.appDownload = {
        enabled: true,
        description: "Get started in seconds – it's fast, free, and easy!",
        buttons: [
          { text: "Download on the App Store", href: "#" }
        ]
      };
      initialData.footer = {
        copyright: "© 2025. All rights reserved by Pimjo.",
        paymentText: "We Accept:",
        paymentMethods: ["Visa", "PayPal"]
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

    const firstType = Object.keys(FOOTER_TYPE_CONFIG)[0] || "footer1";
    const footerType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { footerType };

    // Load data based on footer type
    const config = content[footerType] || {};
    updatedFormData.sections = config.sections || formData.sections || [];
    updatedFormData.footer = config.footer || formData.footer || {};
    updatedFormData.brand = config.brand || formData.brand || {};
    updatedFormData.contactInfo = config.contactInfo || formData.contactInfo || {};
    updatedFormData.footerSections = config.footerSections || formData.footerSections || [];
    updatedFormData.socialLinks = config.socialLinks || formData.socialLinks || [];
    updatedFormData.newsletter = config.newsletter || formData.newsletter || {};
    updatedFormData.footerLinks = config.footerLinks || formData.footerLinks || {};
    updatedFormData.contact = config.contact || formData.contact || {};
    updatedFormData.appDownload = config.appDownload || formData.appDownload || {};

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

    if (field === "footerType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Sections management for footer1, footer2
  const addSection = () => {
    const currentSections = formData.sections || [];
    const newSection = {
      title: "New Section",
      links: [
        { name: "Link 1", href: "#" }
      ]
    };
    handleChange("sections", [...currentSections, newSection]);
  };

  const removeSection = (index) => {
    const updatedSections = formData.sections.filter((_, i) => i !== index);
    handleChange("sections", updatedSections);
  };

  const updateSection = (index, field, value) => {
    const updatedSections = formData.sections.map((section, i) => 
      i === index ? { ...section, [field]: value } : section
    );
    handleChange("sections", updatedSections);
  };

  const addSectionLink = (sectionIndex) => {
    const updatedSections = formData.sections.map((section, i) => 
      i === sectionIndex 
        ? { ...section, links: [...(section.links || []), { name: "New Link", href: "#" }] }
        : section
    );
    handleChange("sections", updatedSections);
  };

  const removeSectionLink = (sectionIndex, linkIndex) => {
    const updatedSections = formData.sections.map((section, i) => 
      i === sectionIndex 
        ? { ...section, links: section.links.filter((_, lI) => lI !== linkIndex) }
        : section
    );
    handleChange("sections", updatedSections);
  };

  const updateSectionLink = (sectionIndex, linkIndex, field, value) => {
    const updatedSections = formData.sections.map((section, i) => 
      i === sectionIndex 
        ? { ...section, links: section.links.map((link, lI) => lI === linkIndex ? { ...link, [field]: value } : link) }
        : section
    );
    handleChange("sections", updatedSections);
  };

  // Footer sections management for footer3
  const addFooterSection = () => {
    const currentSections = formData.footerSections || [];
    const newSection = {
      title: "New Section",
      links: [
        { name: "Link 1", href: "#" }
      ]
    };
    handleChange("footerSections", [...currentSections, newSection]);
  };

  const removeFooterSection = (index) => {
    const updatedSections = formData.footerSections.filter((_, i) => i !== index);
    handleChange("footerSections", updatedSections);
  };

  const updateFooterSection = (index, field, value) => {
    const updatedSections = formData.footerSections.map((section, i) => 
      i === index ? { ...section, [field]: value } : section
    );
    handleChange("footerSections", updatedSections);
  };

  const addFooterSectionLink = (sectionIndex) => {
    const updatedSections = formData.footerSections.map((section, i) => 
      i === sectionIndex 
        ? { ...section, links: [...(section.links || []), { name: "New Link", href: "#" }] }
        : section
    );
    handleChange("footerSections", updatedSections);
  };

  const removeFooterSectionLink = (sectionIndex, linkIndex) => {
    const updatedSections = formData.footerSections.map((section, i) => 
      i === sectionIndex 
        ? { ...section, links: section.links.filter((_, lI) => lI !== linkIndex) }
        : section
    );
    handleChange("footerSections", updatedSections);
  };

  const updateFooterSectionLink = (sectionIndex, linkIndex, field, value) => {
    const updatedSections = formData.footerSections.map((section, i) => 
      i === sectionIndex 
        ? { ...section, links: section.links.map((link, lI) => lI === linkIndex ? { ...link, [field]: value } : link) }
        : section
    );
    handleChange("footerSections", updatedSections);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (formData.footerType === "footer1" || formData.footerType === "footer2") {
      if (!formData.sections || formData.sections.length === 0) {
        errors.push("At least one section is required");
      }
    } else if (formData.footerType === "footer3") {
      if (!formData.footerSections || formData.footerSections.length === 0) {
        errors.push("At least one footer section is required");
      }
    } else if (formData.footerType === "ecomusFooter") {
      if (!formData.footerLinks || Object.keys(formData.footerLinks).length === 0) {
        errors.push("Footer links are required");
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("FooterSectionForm: No changes detected, skipping save");
      return;
    }

    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { footerType, sections, footer, brand, contactInfo, footerSections, socialLinks, newsletter, footerLinks, contact, appDownload } = formData;

    const footerData = {
      component: "footer",
      type: footerType,
      content: {}
    };

    footerData.content[footerType] = {};

    if (footerType === "footer1" || footerType === "footer2") {
      footerData.content[footerType].sections = sections || [];
    }

    if (footerType === "footer2" || footerType === "footer3" || footerType === "ecomusFooter") {
      if (footer) {
        footerData.content[footerType].footer = footer;
      }
    }

    if (footerType === "footer3") {
      if (brand) footerData.content[footerType].brand = brand;
      if (contactInfo) footerData.content[footerType].contactInfo = contactInfo;
      footerData.content[footerType].footerSections = footerSections || [];
      if (socialLinks) footerData.content[footerType].socialLinks = socialLinks;
      if (newsletter) footerData.content[footerType].newsletter = newsletter;
    }

    if (footerType === "ecomusFooter") {
      if (footerLinks) footerData.content[footerType].footerLinks = footerLinks;
      if (contact) footerData.content[footerType].contact = contact;
      if (socialLinks) footerData.content[footerType].socialLinks = socialLinks;
      if (appDownload) footerData.content[footerType].appDownload = appDownload;
    }

    console.log("Saving footer content:", footerData);

    onSave(footerData);
    setHasChanges(false);
  };

  const currentFooterConfig = FOOTER_TYPE_CONFIG[formData.footerType] || FOOTER_TYPE_CONFIG.footer1;

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
          Footer Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.footerType}
          onChange={(e) => handleChange("footerType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(FOOTER_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentFooterConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Footer Type Info:</p>
            <p className="text-sm text-blue-700">{currentFooterConfig.description}</p>
          </div>
        )}
      </div>

      {/* Sections for footer1, footer2 */}
      {(formData.footerType === "footer1" || formData.footerType === "footer2") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Sections ({formData.sections?.length || 0})
            </label>
            <button
              type="button"
              onClick={addSection}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Section
            </button>
          </div>
          {formData.sections?.map((section, index) => (
            <div key={index} className="mb-3 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Section {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeSection(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Title</label>
                  <input
                    type="text"
                    value={section.title || ""}
                    onChange={(e) => updateSection(index, "title", e.target.value)}
                    placeholder="Help & Support"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {section.links && (
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs text-gray-600">Links</label>
                      <button
                        type="button"
                        onClick={() => addSectionLink(index)}
                        className="text-xs text-blue-600 hover:text-blue-700"
                      >
                        <Plus className="h-3 w-3 inline" /> Add
                      </button>
                    </div>
                    {section.links.map((link, linkIndex) => (
                      <div key={linkIndex} className="mb-2 flex items-center gap-2">
                        <input
                          type="text"
                          value={link.name || ""}
                          onChange={(e) => updateSectionLink(index, linkIndex, "name", e.target.value)}
                          placeholder="Link name"
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          value={link.href || ""}
                          onChange={(e) => updateSectionLink(index, linkIndex, "href", e.target.value)}
                          placeholder="#"
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => removeSectionLink(index, linkIndex)}
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

      {/* Footer Bottom for footer2 */}
      {formData.footerType === "footer2" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Footer Bottom</label>
          <div className="space-y-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Copyright</label>
              <input
                type="text"
                value={formData.footer?.copyright || ""}
                onChange={(e) => handleChange("footer", {
                  ...formData.footer,
                  copyright: e.target.value
                })}
                placeholder="© 2025. All rights reserved by"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Copyright Link Text</label>
                <input
                  type="text"
                  value={formData.footer?.copyrightLink?.text || ""}
                  onChange={(e) => handleChange("footer", {
                    ...formData.footer,
                    copyrightLink: {
                      ...formData.footer?.copyrightLink,
                      text: e.target.value
                    }
                  })}
                  placeholder="Pimjo"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Copyright Link Href</label>
                <input
                  type="text"
                  value={formData.footer?.copyrightLink?.href || ""}
                  onChange={(e) => handleChange("footer", {
                    ...formData.footer,
                    copyrightLink: {
                      ...formData.footer?.copyrightLink,
                      href: e.target.value
                    }
                  })}
                  placeholder="#"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer3 Fields */}
      {formData.footerType === "footer3" && (
        <>
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Brand</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  value={formData.brand?.name || ""}
                  onChange={(e) => handleChange("brand", {
                    ...formData.brand,
                    name: e.target.value
                  })}
                  placeholder="BrandName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Description</label>
                <textarea
                  value={formData.brand?.description || ""}
                  onChange={(e) => handleChange("brand", {
                    ...formData.brand,
                    description: e.target.value
                  })}
                  placeholder="Brand description"
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Footer Sections ({formData.footerSections?.length || 0})
              </label>
              <button
                type="button"
                onClick={addFooterSection}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Section
              </button>
            </div>
            {formData.footerSections?.map((section, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Section {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeFooterSection(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Title</label>
                    <input
                      type="text"
                      value={section.title || ""}
                      onChange={(e) => updateFooterSection(index, "title", e.target.value)}
                      placeholder="Company"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs text-gray-600">Links</label>
                      <button
                        type="button"
                        onClick={() => addFooterSectionLink(index)}
                        className="text-xs text-blue-600 hover:text-blue-700"
                      >
                        <Plus className="h-3 w-3 inline" /> Add
                      </button>
                    </div>
                    {section.links?.map((link, linkIndex) => (
                      <div key={linkIndex} className="mb-2 flex items-center gap-2">
                        <input
                          type="text"
                          value={link.name || ""}
                          onChange={(e) => updateFooterSectionLink(index, linkIndex, "name", e.target.value)}
                          placeholder="Link name"
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                          type="text"
                          value={link.href || ""}
                          onChange={(e) => updateFooterSectionLink(index, linkIndex, "href", e.target.value)}
                          placeholder="#"
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                          type="button"
                          onClick={() => removeFooterSectionLink(index, linkIndex)}
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
            <label className="block text-sm font-medium text-gray-700 mb-3">Newsletter</label>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.newsletter?.enabled || false}
                  onChange={(e) => handleChange("newsletter", {
                    ...formData.newsletter,
                    enabled: e.target.checked
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable Newsletter</label>
              </div>
              {formData.newsletter?.enabled && (
                <>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Title</label>
                    <input
                      type="text"
                      value={formData.newsletter?.title || ""}
                      onChange={(e) => handleChange("newsletter", {
                        ...formData.newsletter,
                        title: e.target.value
                      })}
                      placeholder="Stay Updated"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Description</label>
                    <textarea
                      value={formData.newsletter?.description || ""}
                      onChange={(e) => handleChange("newsletter", {
                        ...formData.newsletter,
                        description: e.target.value
                      })}
                      placeholder="Subscribe to our newsletter"
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Placeholder</label>
                      <input
                        type="text"
                        value={formData.newsletter?.placeholder || ""}
                        onChange={(e) => handleChange("newsletter", {
                          ...formData.newsletter,
                          placeholder: e.target.value
                        })}
                        placeholder="Enter your email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Button Text</label>
                      <input
                        type="text"
                        value={formData.newsletter?.buttonText || ""}
                        onChange={(e) => handleChange("newsletter", {
                          ...formData.newsletter,
                          buttonText: e.target.value
                        })}
                        placeholder="Subscribe"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Footer Bottom</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Copyright</label>
                <input
                  type="text"
                  value={formData.footer?.copyright || ""}
                  onChange={(e) => handleChange("footer", {
                    ...formData.footer,
                    copyright: e.target.value
                  })}
                  placeholder={`© ${new Date().getFullYear()} BrandName. All rights reserved.`}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Ecomus Footer Fields */}
      {formData.footerType === "ecomusFooter" && (
        <>
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Contact Information</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Address</label>
                <textarea
                  value={formData.contact?.address || ""}
                  onChange={(e) => handleChange("contact", {
                    ...formData.contact,
                    address: e.target.value
                  })}
                  placeholder="685 Market Street, Las Vegas, LA 95820, United States."
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Phone</label>
                  <input
                    type="text"
                    value={formData.contact?.phone || ""}
                    onChange={(e) => handleChange("contact", {
                      ...formData.contact,
                      phone: e.target.value
                    })}
                    placeholder="(+099) 532-786-9843"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.contact?.email || ""}
                    onChange={(e) => handleChange("contact", {
                      ...formData.contact,
                      email: e.target.value
                    })}
                    placeholder="support@example.com"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">App Download</label>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={formData.appDownload?.enabled || false}
                  onChange={(e) => handleChange("appDownload", {
                    ...formData.appDownload,
                    enabled: e.target.checked
                  })}
                  className="rounded"
                />
                <label className="text-sm text-gray-700">Enable App Download</label>
              </div>
              {formData.appDownload?.enabled && (
                <>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Description</label>
                    <textarea
                      value={formData.appDownload?.description || ""}
                      onChange={(e) => handleChange("appDownload", {
                        ...formData.appDownload,
                        description: e.target.value
                      })}
                      placeholder="Get started in seconds – it's fast, free, and easy!"
                      rows={2}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Footer Bottom</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Copyright</label>
                <input
                  type="text"
                  value={formData.footer?.copyright || ""}
                  onChange={(e) => handleChange("footer", {
                    ...formData.footer,
                    copyright: e.target.value
                  })}
                  placeholder="© 2025. All rights reserved by Pimjo."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Payment Text</label>
                <input
                  type="text"
                  value={formData.footer?.paymentText || ""}
                  onChange={(e) => handleChange("footer", {
                    ...formData.footer,
                    paymentText: e.target.value
                  })}
                  placeholder="We Accept:"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </>
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

