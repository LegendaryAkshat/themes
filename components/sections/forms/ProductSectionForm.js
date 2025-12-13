"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different product types and their fields
const PRODUCT_TYPE_CONFIG = {
  product1: {
    label: "Product 1 - Featured Products with Badges",
    fields: ["page", "products", "grid"],
    description: "Featured products grid with badges, ratings, prices, and hover effects"
  },
  product2: {
    label: "Product 2 - Best Sellers with Hover Tooltips",
    fields: ["page", "products", "grid"],
    description: "Simple product grid with hover tooltips for quick actions"
  },
  product3: {
    label: "Product 3 - New Arrivals with GSAP Animations",
    fields: ["page", "products", "grid", "animations"],
    description: "Product grid with GSAP 3D animations, badges, and discount labels"
  },
  product4: {
    label: "Product 4 - Best Sellers with Different Styling",
    fields: ["header", "products", "grid"],
    description: "Best sellers grid with yellow badges and discount calculations"
  }
};

export default function ProductSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(PRODUCT_TYPE_CONFIG)[0] || "product1";
    const initialData = { productType: firstType };

    if (firstType === "product1") {
      initialData.page = {
        title: "Featured Products",
        description: "Handpicked selection of our most popular items",
        viewAll: {
          text: "View All",
          link: "#"
        }
      };
      initialData.products = [
        {
          name: "Premium Smart TV 43 Inch",
          id: 1,
          price: "$699",
          oldPrice: "$799",
          rating: 4.7,
          reviews: 234,
          badge: "Featured",
          badgeColor: "blue",
          link: "#"
        }
      ];
    } else if (firstType === "product2") {
      initialData.page = {
        title: "Best Sellers",
        viewAll: {
          text: "View All",
          link: "#"
        }
      };
      initialData.products = [
        {
          name: "Premium Mobile Device Pro",
          id: 1,
          link: "#"
        }
      ];
    } else if (firstType === "product3") {
      initialData.page = {
        badge: {
          text: "Latest Collection",
          icon: "TrendingUp",
          background: "bg-blue-50",
          textColor: "text-blue-600"
        },
        title: "New Arrivals",
        description: "Discover the latest products added to our collection",
        viewAll: {
          text: "View All",
          link: "#"
        }
      };
      initialData.products = [
        {
          name: "Portable Electric Grinder Maker",
          price: "$777",
          oldPrice: "$888",
          id: 1,
          rating: 4.5,
          reviews: 128,
          badge: "New",
          badgeColor: "green",
          discount: 13,
          link: "#"
        }
      ];
      initialData.animations = {
        enabled: true,
        staggerDelay: 0.1,
        scrollTrigger: {
          start: "top 85%",
          end: "top 20%"
        }
      };
    } else if (firstType === "product4") {
      initialData.header = {
        title: "Best Sellers",
        description: "Our most popular products loved by customers worldwide",
        viewAll: {
          text: "View All",
          link: "#"
        }
      };
      initialData.products = [
        {
          name: "All-in-One Desktop M4",
          price: "$555",
          oldPrice: "$333",
          id: 1,
          rating: 4.9,
          reviews: 523,
          badge: "Best Seller",
          badgeColor: "yellow"
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

    const firstType = Object.keys(PRODUCT_TYPE_CONFIG)[0] || "product1";
    const productType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { productType };

    // Load data based on product type
    const config = content[productType] || {};
    updatedFormData.page = config.page || formData.page || {};
    updatedFormData.header = config.header || formData.header || {};
    updatedFormData.products = config.products || formData.products || [];
    updatedFormData.grid = config.grid || formData.grid || {};
    updatedFormData.animations = config.animations || formData.animations || {};

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

    if (field === "productType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Products management
  const addProduct = () => {
    const currentProducts = formData.products || [];
    const newProduct = {
      id: currentProducts.length + 1,
      name: "New Product",
      price: "$0.00",
      link: "#"
    };
    
    // Add type-specific defaults
    if (formData.productType === "product1") {
      newProduct.oldPrice = "$0.00";
      newProduct.rating = 4.0;
      newProduct.reviews = 0;
      newProduct.badge = "";
      newProduct.badgeColor = "blue";
    } else if (formData.productType === "product3") {
      newProduct.oldPrice = "$0.00";
      newProduct.rating = 4.0;
      newProduct.reviews = 0;
      newProduct.badge = "New";
      newProduct.badgeColor = "green";
      newProduct.discount = 0;
    } else if (formData.productType === "product4") {
      newProduct.oldPrice = "$0.00";
      newProduct.rating = 4.0;
      newProduct.reviews = 0;
      newProduct.badge = "Best Seller";
      newProduct.badgeColor = "yellow";
    }
    
    handleChange("products", [...currentProducts, newProduct]);
  };

  const removeProduct = (index) => {
    const updatedProducts = formData.products.filter((_, i) => i !== index);
    handleChange("products", updatedProducts);
  };

  const updateProduct = (index, field, value) => {
    const updatedProducts = formData.products.map((product, i) => 
      i === index ? { ...product, [field]: value } : product
    );
    handleChange("products", updatedProducts);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (formData.productType === "product1" || formData.productType === "product2" || formData.productType === "product3") {
      if (!formData.page?.title || formData.page.title.trim() === "") {
        errors.push("Page title is required");
      }
    } else if (formData.productType === "product4") {
      if (!formData.header?.title || formData.header.title.trim() === "") {
        errors.push("Header title is required");
      }
    }

    if (!formData.products || formData.products.length === 0) {
      errors.push("At least one product is required");
    } else {
      formData.products.forEach((product, index) => {
        if (!product.name || product.name.trim() === "") {
          errors.push(`Product ${index + 1}: Name is required`);
        }
        if (!product.price || product.price.trim() === "") {
          errors.push(`Product ${index + 1}: Price is required`);
        }
      });
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("ProductSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { productType, page, header, products, grid, animations } = formData;

    // Structure data according to products.js component expectations
    const productData = {
      component: "products",
      type: productType,
      content: {}
    };

    // Add type-specific data to content
    if (productType === "product1" || productType === "product2" || productType === "product3") {
      productData.content[productType] = {
        page: page || {},
        products: products || [],
        grid: grid || {}
      };
      if (productType === "product3" && animations) {
        productData.content[productType].animations = animations;
      }
    } else if (productType === "product4") {
      productData.content[productType] = {
        header: header || {},
        products: products || [],
        grid: grid || {}
      };
    }

    console.log("Saving product content:", productData);

    onSave(productData);
    setHasChanges(false);
  };

  const currentProductConfig = PRODUCT_TYPE_CONFIG[formData.productType] || PRODUCT_TYPE_CONFIG.product1;

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

      {/* Product Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Product Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.productType}
          onChange={(e) => handleChange("productType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(PRODUCT_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentProductConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Product Type Info:</p>
            <p className="text-sm text-blue-700">{currentProductConfig.description}</p>
          </div>
        )}
      </div>

      {/* Page/Header Configuration */}
      {(formData.productType === "product1" || formData.productType === "product2" || formData.productType === "product3") && (
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
                placeholder="Featured Products"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Description</label>
              <input
                type="text"
                value={formData.page?.description || ""}
                onChange={(e) => handleChange("page", {
                  ...formData.page,
                  description: e.target.value
                })}
                placeholder="Handpicked selection of our most popular items"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {formData.productType === "product3" && (
              <div className="space-y-3">
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
                      placeholder="Latest Collection"
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
                      placeholder="TrendingUp"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Badge Background</label>
                    <input
                      type="text"
                      value={formData.page?.badge?.background || ""}
                      onChange={(e) => handleChange("page", {
                        ...formData.page,
                        badge: {
                          ...formData.page?.badge,
                          background: e.target.value
                        }
                      })}
                      placeholder="bg-blue-50"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Badge Text Color</label>
                    <input
                      type="text"
                      value={formData.page?.badge?.textColor || ""}
                      onChange={(e) => handleChange("page", {
                        ...formData.page,
                        badge: {
                          ...formData.page?.badge,
                          textColor: e.target.value
                        }
                      })}
                      placeholder="text-blue-600"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">View All Text</label>
                <input
                  type="text"
                  value={formData.page?.viewAll?.text || ""}
                  onChange={(e) => handleChange("page", {
                    ...formData.page,
                    viewAll: {
                      ...formData.page?.viewAll,
                      text: e.target.value
                    }
                  })}
                  placeholder="View All"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">View All Link</label>
                <input
                  type="text"
                  value={formData.page?.viewAll?.link || ""}
                  onChange={(e) => handleChange("page", {
                    ...formData.page,
                    viewAll: {
                      ...formData.page?.viewAll,
                      link: e.target.value
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

      {/* Header Configuration for product4 */}
      {formData.productType === "product4" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Header Configuration</label>
          <div className="space-y-3">
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
                placeholder="Best Sellers"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Description</label>
              <input
                type="text"
                value={formData.header?.description || ""}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  description: e.target.value
                })}
                placeholder="Our most popular products"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">View All Text</label>
                <input
                  type="text"
                  value={formData.header?.viewAll?.text || ""}
                  onChange={(e) => handleChange("header", {
                    ...formData.header,
                    viewAll: {
                      ...formData.header?.viewAll,
                      text: e.target.value
                    }
                  })}
                  placeholder="View All"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">View All Link</label>
                <input
                  type="text"
                  value={formData.header?.viewAll?.link || ""}
                  onChange={(e) => handleChange("header", {
                    ...formData.header,
                    viewAll: {
                      ...formData.header?.viewAll,
                      link: e.target.value
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

      {/* Animations Configuration for product3 */}
      {formData.productType === "product3" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Animations Configuration</label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.animations?.enabled || false}
                onChange={(e) => handleChange("animations", {
                  ...formData.animations,
                  enabled: e.target.checked
                })}
                className="rounded"
              />
              <label className="text-xs text-gray-600">Enable Animations</label>
            </div>
            {formData.animations?.enabled && (
              <>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Stagger Delay</label>
                  <input
                    type="number"
                    value={formData.animations?.staggerDelay || 0.1}
                    onChange={(e) => handleChange("animations", {
                      ...formData.animations,
                      staggerDelay: parseFloat(e.target.value) || 0.1
                    })}
                    step="0.1"
                    min="0"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Scroll Trigger Start</label>
                    <input
                      type="text"
                      value={formData.animations?.scrollTrigger?.start || ""}
                      onChange={(e) => handleChange("animations", {
                        ...formData.animations,
                        scrollTrigger: {
                          ...formData.animations?.scrollTrigger,
                          start: e.target.value
                        }
                      })}
                      placeholder="top 85%"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Scroll Trigger End</label>
                    <input
                      type="text"
                      value={formData.animations?.scrollTrigger?.end || ""}
                      onChange={(e) => handleChange("animations", {
                        ...formData.animations,
                        scrollTrigger: {
                          ...formData.animations?.scrollTrigger,
                          end: e.target.value
                        }
                      })}
                      placeholder="top 20%"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Products */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <div className="flex justify-between items-center mb-3">
          <label className="block text-sm font-medium text-gray-700">
            Products ({formData.products?.length || 0})
          </label>
          <button
            type="button"
            onClick={addProduct}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        </div>
        {formData.products?.map((product, index) => (
          <div key={index} className="mb-3 p-3 border rounded bg-white">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">Product {index + 1}</span>
              <button
                type="button"
                onClick={() => removeProduct(index)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">ID</label>
                  <input
                    type="number"
                    value={product.id || index + 1}
                    onChange={(e) => updateProduct(index, "id", parseInt(e.target.value) || index + 1)}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={product.name || ""}
                    onChange={(e) => updateProduct(index, "name", e.target.value)}
                    placeholder="Product Name"
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Price <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={product.price || ""}
                    onChange={(e) => updateProduct(index, "price", e.target.value)}
                    placeholder="$699"
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {(formData.productType === "product1" || formData.productType === "product3" || formData.productType === "product4") && (
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Old Price</label>
                    <input
                      type="text"
                      value={product.oldPrice || ""}
                      onChange={(e) => updateProduct(index, "oldPrice", e.target.value)}
                      placeholder="$799"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
              </div>
              {(formData.productType === "product1" || formData.productType === "product3" || formData.productType === "product4") && (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Rating</label>
                    <input
                      type="number"
                      value={product.rating || ""}
                      onChange={(e) => updateProduct(index, "rating", parseFloat(e.target.value) || 0)}
                      placeholder="4.7"
                      step="0.1"
                      min="0"
                      max="5"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Reviews</label>
                    <input
                      type="number"
                      value={product.reviews || ""}
                      onChange={(e) => updateProduct(index, "reviews", parseInt(e.target.value) || 0)}
                      placeholder="234"
                      min="0"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              )}
              {(formData.productType === "product1" || formData.productType === "product3" || formData.productType === "product4") && (
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Badge</label>
                    <input
                      type="text"
                      value={product.badge || ""}
                      onChange={(e) => updateProduct(index, "badge", e.target.value)}
                      placeholder="Featured"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Badge Color</label>
                    <select
                      value={product.badgeColor || "blue"}
                      onChange={(e) => updateProduct(index, "badgeColor", e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="blue">Blue</option>
                      <option value="green">Green</option>
                      <option value="red">Red</option>
                      <option value="yellow">Yellow</option>
                      <option value="orange">Orange</option>
                    </select>
                  </div>
                </div>
              )}
              {formData.productType === "product3" && (
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Discount %</label>
                  <input
                    type="number"
                    value={product.discount || 0}
                    onChange={(e) => updateProduct(index, "discount", parseInt(e.target.value) || 0)}
                    placeholder="13"
                    min="0"
                    max="100"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              )}
              <div>
                <label className="block text-xs text-gray-600 mb-1">Link</label>
                <input
                  type="text"
                  value={product.link || ""}
                  onChange={(e) => updateProduct(index, "link", e.target.value)}
                  placeholder="#"
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

