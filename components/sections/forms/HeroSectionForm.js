"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different hero types and their fields
const HERO_TYPE_CONFIG = {
  hero1: {
    label: "Hero 1 - Framer Motion with Particles",
    fields: ["slides", "autoplay", "animations"],
    description: "Full-screen hero with Framer Motion animations, particle effects, and GSAP scroll triggers"
  },
  hero2: {
    label: "Hero 2 - White Background with Stats",
    fields: ["content", "stats", "image"],
    description: "Clean white background hero with stats section, gradient buttons, and animated product showcase"
  },
  hero3: {
    label: "Hero 3 - Dark Gradient with Features",
    fields: ["content", "features", "animations"],
    description: "Dark gradient hero with animated orbs, feature badges, and mouse-following parallax effects"
  },
  ecomusHero: {
    label: "Ecomus Hero - Simple Gradient Carousel",
    fields: ["slides", "autoplay", "animations"],
    description: "Simple gradient carousel hero with smooth transitions and minimal design"
  }
};

export default function HeroSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data with all possible fields
  const initializeFormData = () => {
    const firstType = Object.keys(HERO_TYPE_CONFIG)[0] || "hero1";
    const initialData = { heroType: firstType };

    // Initialize based on hero type
    if (firstType === "hero1" || firstType === "ecomusHero") {
      initialData.slides = [
        {
          id: 1,
          badge: firstType === "hero1" ? "Premium design" : undefined,
          title: firstType === "hero1" ? "Apple Watch Ultra" : "Glamorous",
          subtitle: firstType === "ecomusHero" ? "Glam" : undefined,
          description: "Advanced imaging performance with a 200MP AI camera with Enhanced image quality.",
          buttonText: "Shop Now",
          bgGradient: firstType === "hero1" ? "from-gray-900 via-gray-800 to-black" : undefined,
          gradient: firstType === "ecomusHero" ? "from-pink-500 via-purple-500 to-indigo-600" : undefined,
          accentColor: firstType === "hero1" ? "blue" : undefined
        }
      ];
      initialData.autoplay = true;
      initialData.animations = {
        autoSlideInterval: 5000,
        particles: firstType === "hero1" ? { count: 20, enabled: true } : undefined
      };
    } else if (firstType === "hero2") {
      initialData.content = {
        badge: "New Collection 2024",
        title: {
          line1: "Discover Your",
          line2: "Perfect Style"
        },
        description: "Explore our curated collection of premium products designed to elevate your lifestyle.",
        buttons: {
          primary: "Shop Now",
          secondary: "Learn More"
        }
      };
      initialData.stats = [
        { icon: "Users", value: "50K+", label: "Happy Customers" },
        { icon: "Star", value: "4.9", label: "Rating" },
        { icon: "TrendingUp", value: "200+", label: "Products" }
      ];
      initialData.image = {
        placeholder: "📱",
        label: "Premium Product",
        cards: [
          { label: "New Arrival", sublabel: "Just in" },
          { label: "Best Seller", sublabel: "Top rated" }
        ]
      };
    } else if (firstType === "hero3") {
      initialData.content = {
        badge: {
          text: "Limited Time Offer",
          icon: "Sparkles"
        },
        title: {
          line1: "Experience",
          line2: "The Future"
        },
        description: "Transform your everyday with cutting-edge technology and innovative design.",
        buttons: {
          primary: "Shop Now",
          secondary: "Watch Demo"
        }
      };
      initialData.features = [
        "Free Worldwide Shipping",
        "30-Day Return Policy",
        "Secure Payment",
        "24/7 Customer Support"
      ];
      initialData.animations = {
        particles: { count: 20, enabled: true },
        orbs: { enabled: true }
      };
    }

    return initialData;
  };

  const [formData, setFormData] = useState(initializeFormData());
  const [hasChanges, setHasChanges] = useState(false);

  // Initialize form with existing data if editing
  useEffect(() => {
    if (!sectionData) return;

    const firstType = Object.keys(HERO_TYPE_CONFIG)[0] || "hero1";
    const heroType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { heroType };

    // Load data based on hero type
    if (heroType === "hero1" || heroType === "ecomusHero") {
      const config = content[heroType] || {};
      updatedFormData.slides = config.slides || formData.slides || [];
      updatedFormData.autoplay = sectionData.autoplay !== undefined ? sectionData.autoplay : true;
      updatedFormData.animations = config.animations || formData.animations || {
        autoSlideInterval: 5000,
        particles: heroType === "hero1" ? { count: 20, enabled: true } : undefined
      };
    } else if (heroType === "hero2") {
      const config = content[heroType] || {};
      updatedFormData.content = config.content || formData.content || {};
      updatedFormData.stats = config.stats || formData.stats || [];
      updatedFormData.image = config.image || formData.image || {};
    } else if (heroType === "hero3") {
      const config = content[heroType] || {};
      updatedFormData.content = config.content || formData.content || {};
      updatedFormData.features = config.features || formData.features || [];
      updatedFormData.animations = config.animations || formData.animations || {
        particles: { count: 20, enabled: true },
        orbs: { enabled: true }
      };
    }

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

    if (field === "heroType" && onUpdate) {
      onUpdate({ type: value });
      // Reset form data when hero type changes
      setHasChanges(true);
    }
  };

  // Slide management functions for hero1 and ecomusHero
  const addSlide = () => {
    const currentSlides = formData.slides || [];
    const maxId = currentSlides.length > 0 
      ? Math.max(...currentSlides.map(s => s.id || 0))
      : 0;
    
    const isHero1 = formData.heroType === "hero1";
    const newSlide = isHero1 ? {
      id: maxId + 1,
      badge: "Premium design",
      title: "New Product",
      description: "Enter product description here",
      buttonText: "Shop Now",
      bgGradient: "from-gray-900 via-gray-800 to-black",
      accentColor: "blue"
    } : {
      id: maxId + 1,
      title: "New Slide",
      subtitle: "Subtitle",
      description: "Enter slide description here",
      buttonText: "Shop collection",
      gradient: "from-pink-500 via-purple-500 to-indigo-600"
    };
    
    handleChange("slides", [...currentSlides, newSlide]);
  };

  const removeSlide = (id) => {
    if (formData.slides.length > 1) {
      const updatedSlides = formData.slides.filter((slide) => slide.id !== id);
      handleChange("slides", updatedSlides);
    }
  };

  const updateSlide = (id, field, value) => {
    const updatedSlides = formData.slides.map((slide) => 
      slide.id === id ? { ...slide, [field]: value } : slide
    );
    handleChange("slides", updatedSlides);
  };

  // Stats management for hero2
  const addStat = () => {
    const currentStats = formData.stats || [];
    const newStat = { icon: "Users", value: "0", label: "New Stat" };
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

  // Features management for hero3
  const addFeature = () => {
    const currentFeatures = formData.features || [];
    handleChange("features", [...currentFeatures, "New Feature"]);
  };

  const removeFeature = (index) => {
    const updatedFeatures = formData.features.filter((_, i) => i !== index);
    handleChange("features", updatedFeatures);
  };

  const updateFeature = (index, value) => {
    const updatedFeatures = formData.features.map((feature, i) => 
      i === index ? value : feature
    );
    handleChange("features", updatedFeatures);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (formData.heroType === "hero1" || formData.heroType === "ecomusHero") {
      if (!formData.slides || formData.slides.length === 0) {
        errors.push("At least one slide is required");
      } else {
        formData.slides.forEach((slide, index) => {
          if (!slide.title || slide.title.trim() === "") {
            errors.push(`Slide ${index + 1}: Title is required`);
          }
          if (!slide.description || slide.description.trim() === "") {
            errors.push(`Slide ${index + 1}: Description is required`);
          }
          if (!slide.buttonText || slide.buttonText.trim() === "") {
            errors.push(`Slide ${index + 1}: Button text is required`);
          }
        });
      }
    } else if (formData.heroType === "hero2") {
      if (!formData.content?.title?.line1 || formData.content.title.line1.trim() === "") {
        errors.push("Title line 1 is required");
      }
      if (!formData.content?.description || formData.content.description.trim() === "") {
        errors.push("Description is required");
      }
      if (!formData.stats || formData.stats.length === 0) {
        errors.push("At least one stat is required");
      }
    } else if (formData.heroType === "hero3") {
      if (!formData.content?.title?.line1 || formData.content.title.line1.trim() === "") {
        errors.push("Title line 1 is required");
      }
      if (!formData.content?.description || formData.content.description.trim() === "") {
        errors.push("Description is required");
      }
      if (!formData.features || formData.features.length === 0) {
        errors.push("At least one feature is required");
      }
    }
    
    return errors;
  };

  const [validationErrors, setValidationErrors] = useState([]);

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("HeroSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { heroType, slides, autoplay, animations, content, stats, image, features } = formData;

    // Structure data according to heros.js component expectations
    const heroData = {
      component: "hero",
      type: heroType,
      content: {}
    };

    // Add type-specific data to content with proper defaults
    if (heroType === "hero1" || heroType === "ecomusHero") {
      heroData.content[heroType] = {
        slides: slides || [],
        animations: animations || {
          autoSlideInterval: 5000,
          ...(heroType === "hero1" ? { particles: { count: 20, enabled: true } } : {})
        }
      };
      heroData.autoplay = autoplay !== undefined ? autoplay : true;
    } else if (heroType === "hero2") {
      heroData.content[heroType] = {
        content: content || {},
        stats: stats || [],
        image: image || {}
      };
    } else if (heroType === "hero3") {
      heroData.content[heroType] = {
        content: content || {},
        features: features || [],
        animations: animations || {
          particles: { count: 20, enabled: true },
          orbs: { enabled: true }
        }
      };
    }

    console.log("Saving hero content:", heroData);

    onSave(heroData);
    setHasChanges(false);
  };

  const currentHeroConfig = HERO_TYPE_CONFIG[formData.heroType] || HERO_TYPE_CONFIG.hero1;

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

      {/* Hero Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Hero Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.heroType}
          onChange={(e) => handleChange("heroType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(HERO_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentHeroConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Hero Type Info:</p>
            <p className="text-sm text-blue-700">{currentHeroConfig.description}</p>
            {formData.heroType === "hero1" && (
              <div className="mt-2 text-xs text-blue-600 space-y-1">
                <p>• Supports multiple slides with fade transitions</p>
                <p>• Includes particle effects and GSAP animations</p>
                <p>• Full-screen height with centered content</p>
              </div>
            )}
            {formData.heroType === "hero2" && (
              <div className="mt-2 text-xs text-blue-600 space-y-1">
                <p>• Single slide layout with stats section</p>
                <p>• Clean white background design</p>
                <p>• Animated product showcase cards</p>
              </div>
            )}
            {formData.heroType === "hero3" && (
              <div className="mt-2 text-xs text-blue-600 space-y-1">
                <p>• Dark gradient background with animated orbs</p>
                <p>• Feature badges with checkmarks</p>
                <p>• Mouse-following parallax effects</p>
              </div>
            )}
            {formData.heroType === "ecomusHero" && (
              <div className="mt-2 text-xs text-blue-600 space-y-1">
                <p>• Simple gradient carousel</p>
                <p>• Smooth fade transitions</p>
                <p>• Minimal design with navigation controls</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Hero1 and EcomusHero - Slides */}
      {(formData.heroType === "hero1" || formData.heroType === "ecomusHero") && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="block text-sm font-medium text-gray-700">
              Slides ({formData.slides?.length || 0})
            </label>
            <button
              type="button"
              onClick={addSlide}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Slide
            </button>
          </div>
          
          {formData.slides?.map((slide, index) => {
            const slideId = slide.id || index + 1;
            const isHero1 = formData.heroType === "hero1";
            
            return (
              <div key={slideId} className="border rounded-lg p-4 space-y-3 bg-gray-50">
                <div className="flex justify-between items-center">
                  <h4 className="font-medium text-gray-900">Slide {index + 1}</h4>
                  {formData.slides.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSlide(slideId)}
                      className="text-red-600 hover:text-red-700 p-1"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {isHero1 && (
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Badge</label>
                      <input
                        type="text"
                        value={slide.badge || ""}
                        onChange={(e) => updateSlide(slideId, "badge", e.target.value)}
                        placeholder="Premium design"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={slide.title || ""}
                      onChange={(e) => updateSlide(slideId, "title", e.target.value)}
                      placeholder="Product title"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  {!isHero1 && (
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Subtitle</label>
                      <input
                        type="text"
                        value={slide.subtitle || ""}
                        onChange={(e) => updateSlide(slideId, "subtitle", e.target.value)}
                        placeholder="Subtitle"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                      />
                    </div>
                  )}
                  
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Button Text <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={slide.buttonText || ""}
                      onChange={(e) => updateSlide(slideId, "buttonText", e.target.value)}
                      placeholder="Shop Now"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  {isHero1 ? (
                    <>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">
                          Background Gradient
                          <span className="ml-1 text-gray-400" title="Tailwind gradient classes (e.g., from-gray-900 via-gray-800 to-black)">ℹ️</span>
                        </label>
                        <input
                          type="text"
                          value={slide.bgGradient || ""}
                          onChange={(e) => updateSlide(slideId, "bgGradient", e.target.value)}
                          placeholder="from-gray-900 via-gray-800 to-black"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Accent Color</label>
                        <input
                          type="text"
                          value={slide.accentColor || ""}
                          onChange={(e) => updateSlide(slideId, "accentColor", e.target.value)}
                          placeholder="blue"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                        />
                      </div>
                    </>
                  ) : (
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">
                        Gradient
                        <span className="ml-1 text-gray-400" title="Tailwind gradient classes (e.g., from-pink-500 via-purple-500 to-indigo-600)">ℹ️</span>
                      </label>
                      <input
                        type="text"
                        value={slide.gradient || ""}
                        onChange={(e) => updateSlide(slideId, "gradient", e.target.value)}
                        placeholder="from-pink-500 via-purple-500 to-indigo-600"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  )}
                </div>
                
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={slide.description || ""}
                    onChange={(e) => updateSlide(slideId, "description", e.target.value)}
                    placeholder="Product description"
                    rows={3}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Autoplay for hero1 and ecomusHero */}
      {(formData.heroType === "hero1" || formData.heroType === "ecomusHero") && (
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.autoplay || false}
              onChange={(e) => handleChange("autoplay", e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">Enable Autoplay</span>
          </label>
        </div>
      )}

      {/* Animations for hero1, hero3, and ecomusHero */}
      {(formData.heroType === "hero1" || formData.heroType === "hero3" || formData.heroType === "ecomusHero") && (
        <div className="space-y-3 border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700">Animation Settings</label>
          
          {formData.heroType === "hero1" || formData.heroType === "ecomusHero" ? (
            <div>
              <label className="block text-xs text-gray-600 mb-1">Auto Slide Interval (ms)</label>
              <input
                type="number"
                value={formData.animations?.autoSlideInterval || 5000}
                onChange={(e) => handleChange("animations", {
                  ...formData.animations,
                  autoSlideInterval: parseInt(e.target.value) || 5000
                })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
              />
            </div>
          ) : null}
          
          {formData.heroType === "hero1" && (
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.animations?.particles?.enabled || false}
                  onChange={(e) => handleChange("animations", {
                    ...formData.animations,
                    particles: {
                      ...formData.animations?.particles,
                      enabled: e.target.checked,
                      count: formData.animations?.particles?.count || 20
                    }
                  })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Enable Particles</span>
              </label>
              {formData.animations?.particles?.enabled && (
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Particle Count</label>
                  <input
                    type="number"
                    value={formData.animations?.particles?.count || 20}
                    onChange={(e) => handleChange("animations", {
                      ...formData.animations,
                      particles: {
                        ...formData.animations?.particles,
                        count: parseInt(e.target.value) || 20
                      }
                    })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              )}
            </div>
          )}
          
          {formData.heroType === "hero3" && (
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.animations?.orbs?.enabled || false}
                  onChange={(e) => handleChange("animations", {
                    ...formData.animations,
                    orbs: {
                      enabled: e.target.checked
                    }
                  })}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-gray-700">Enable Animated Orbs</span>
              </label>
            </div>
          )}
        </div>
      )}

      {/* Hero2 - Content, Stats, Image */}
      {formData.heroType === "hero2" && (
        <div className="space-y-4">
          {/* Content */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Content</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Badge</label>
                <input
                  type="text"
                  value={formData.content?.badge || ""}
                  onChange={(e) => handleChange("content", {
                    ...formData.content,
                    badge: e.target.value
                  })}
                  placeholder="New Collection 2024"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Title Line 1</label>
                  <input
                    type="text"
                    value={formData.content?.title?.line1 || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      title: {
                        ...formData.content?.title,
                        line1: e.target.value
                      }
                    })}
                    placeholder="Discover Your"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Title Line 2</label>
                  <input
                    type="text"
                    value={formData.content?.title?.line2 || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      title: {
                        ...formData.content?.title,
                        line2: e.target.value
                      }
                    })}
                    placeholder="Perfect Style"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Description</label>
                <textarea
                  value={formData.content?.description || ""}
                  onChange={(e) => handleChange("content", {
                    ...formData.content,
                    description: e.target.value
                  })}
                  placeholder="Product description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Primary Button</label>
                  <input
                    type="text"
                    value={formData.content?.buttons?.primary || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      buttons: {
                        ...formData.content?.buttons,
                        primary: e.target.value
                      }
                    })}
                    placeholder="Shop Now"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Secondary Button</label>
                  <input
                    type="text"
                    value={formData.content?.buttons?.secondary || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      buttons: {
                        ...formData.content?.buttons,
                        secondary: e.target.value
                      }
                    })}
                    placeholder="Learn More"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
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
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Icon</label>
                    <input
                      type="text"
                      value={stat.icon || ""}
                      onChange={(e) => updateStat(index, "icon", e.target.value)}
                      placeholder="Users"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Value</label>
                    <input
                      type="text"
                      value={stat.value || ""}
                      onChange={(e) => updateStat(index, "value", e.target.value)}
                      placeholder="50K+"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Label</label>
                    <input
                      type="text"
                      value={stat.label || ""}
                      onChange={(e) => updateStat(index, "label", e.target.value)}
                      placeholder="Happy Customers"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Image */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Image Settings</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Placeholder</label>
                <input
                  type="text"
                  value={formData.image?.placeholder || ""}
                  onChange={(e) => handleChange("image", {
                    ...formData.image,
                    placeholder: e.target.value
                  })}
                  placeholder="📱"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Label</label>
                <input
                  type="text"
                  value={formData.image?.label || ""}
                  onChange={(e) => handleChange("image", {
                    ...formData.image,
                    label: e.target.value
                  })}
                  placeholder="Premium Product"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero3 - Content, Features */}
      {formData.heroType === "hero3" && (
        <div className="space-y-4">
          {/* Content */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Content</label>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Badge Text</label>
                  <input
                    type="text"
                    value={formData.content?.badge?.text || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      badge: {
                        ...formData.content?.badge,
                        text: e.target.value
                      }
                    })}
                    placeholder="Limited Time Offer"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Badge Icon</label>
                  <input
                    type="text"
                    value={formData.content?.badge?.icon || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      badge: {
                        ...formData.content?.badge,
                        icon: e.target.value
                      }
                    })}
                    placeholder="Sparkles"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Title Line 1</label>
                  <input
                    type="text"
                    value={formData.content?.title?.line1 || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      title: {
                        ...formData.content?.title,
                        line1: e.target.value
                      }
                    })}
                    placeholder="Experience"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Title Line 2</label>
                  <input
                    type="text"
                    value={formData.content?.title?.line2 || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      title: {
                        ...formData.content?.title,
                        line2: e.target.value
                      }
                    })}
                    placeholder="The Future"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Description</label>
                <textarea
                  value={formData.content?.description || ""}
                  onChange={(e) => handleChange("content", {
                    ...formData.content,
                    description: e.target.value
                  })}
                  placeholder="Product description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Primary Button</label>
                  <input
                    type="text"
                    value={formData.content?.buttons?.primary || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      buttons: {
                        ...formData.content?.buttons,
                        primary: e.target.value
                      }
                    })}
                    placeholder="Shop Now"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Secondary Button</label>
                  <input
                    type="text"
                    value={formData.content?.buttons?.secondary || ""}
                    onChange={(e) => handleChange("content", {
                      ...formData.content,
                      buttons: {
                        ...formData.content?.buttons,
                        secondary: e.target.value
                      }
                    })}
                    placeholder="Watch Demo"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Features ({formData.features?.length || 0})
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
              <div key={index} className="mb-2 flex items-center gap-2">
                <input
                  type="text"
                  value={feature}
                  onChange={(e) => updateFeature(index, e.target.value)}
                  placeholder="Feature text"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
                />
                <button
                  type="button"
                  onClick={() => removeFeature(index)}
                  className="text-red-600 hover:text-red-700 p-2"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
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

