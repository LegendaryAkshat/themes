"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different brand types and their fields
const BRAND_TYPE_CONFIG = {
  brand1: {
    label: "Brand 1 - Single Brand Page with Products",
    fields: ["brand", "pageBrand", "breadcrumbs", "products", "grid"],
    description: "Single brand detail page with breadcrumbs, brand description, and product grid"
  },
  brand2: {
    label: "Brand 2 - Brands Grid",
    fields: ["header", "brands", "grid"],
    description: "Grid layout showing multiple brands with logos"
  },
  brand3: {
    label: "Brand 3 - Brands Grid with Product Count",
    fields: ["header", "brands", "grid"],
    description: "Grid layout with product count and hover effects"
  }
};

export default function BrandSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(BRAND_TYPE_CONFIG)[0] || "brand1";
    const initialData = { brandType: firstType };

    if (firstType === "brand1") {
      initialData.brand = {
        name: "Planted",
        homeLink: "/"
      };
      initialData.pageBrand = {
        name: "Rustic Roots",
        description: "Handcrafted planters and accessories for the modern home."
      };
      initialData.breadcrumbs = [
        { label: "Home", href: "/", isActive: false },
        { label: "Brands", href: "#", isActive: false },
        { label: "Rustic Roots", href: "#", isActive: true }
      ];
      initialData.products = [
        { name: "Product 1", price: "$55.00", image: "🪴", link: "#" }
      ];
    } else if (firstType === "brand2" || firstType === "brand3") {
      initialData.header = {
        title: "Our Brands"
      };
      initialData.brands = [
        { id: 1, name: "Brand 1", logo: "BRAND" }
      ];
      if (firstType === "brand3") {
        initialData.brands[0].products = 25;
      }
    }

    return initialData;
  };

  const [formData, setFormData] = useState(initializeFormData());
  const [hasChanges, setHasChanges] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  // Initialize form with existing data if editing
  useEffect(() => {
    if (!sectionData) return;

    const firstType = Object.keys(BRAND_TYPE_CONFIG)[0] || "brand1";
    const brandType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { brandType };

    // Load data based on brand type
    const config = content[brandType] || {};
    updatedFormData.brand = config.brand || formData.brand || {};
    updatedFormData.pageBrand = config.pageBrand || formData.pageBrand || {};
    updatedFormData.breadcrumbs = config.breadcrumbs || formData.breadcrumbs || [];
    updatedFormData.products = config.products || formData.products || [];
    updatedFormData.brands = config.brands || formData.brands || [];
    updatedFormData.header = config.header || formData.header || {};
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

    if (field === "brandType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Products management for brand1
  const addProduct = () => {
    const currentProducts = formData.products || [];
    const newProduct = {
      name: "New Product",
      price: "$0.00",
      image: "📦",
      link: "#"
    };
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

  // Brands management for brand2, brand3
  const addBrand = () => {
    const currentBrands = formData.brands || [];
    const newBrand = {
      id: currentBrands.length + 1,
      name: "New Brand",
      logo: "BRAND"
    };
    if (formData.brandType === "brand3") {
      newBrand.products = 0;
    }
    handleChange("brands", [...currentBrands, newBrand]);
  };

  const removeBrand = (index) => {
    const updatedBrands = formData.brands.filter((_, i) => i !== index);
    handleChange("brands", updatedBrands);
  };

  const updateBrand = (index, field, value) => {
    const updatedBrands = formData.brands.map((brand, i) => 
      i === index ? { ...brand, [field]: value } : brand
    );
    handleChange("brands", updatedBrands);
  };

  // Breadcrumbs management for brand1
  const addBreadcrumb = () => {
    const currentBreadcrumbs = formData.breadcrumbs || [];
    const newBreadcrumb = {
      label: "New Breadcrumb",
      href: "#",
      isActive: false
    };
    handleChange("breadcrumbs", [...currentBreadcrumbs, newBreadcrumb]);
  };

  const removeBreadcrumb = (index) => {
    const updatedBreadcrumbs = formData.breadcrumbs.filter((_, i) => i !== index);
    handleChange("breadcrumbs", updatedBreadcrumbs);
  };

  const updateBreadcrumb = (index, field, value) => {
    const updatedBreadcrumbs = formData.breadcrumbs.map((crumb, i) => 
      i === index ? { ...crumb, [field]: value } : crumb
    );
    handleChange("breadcrumbs", updatedBreadcrumbs);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (formData.brandType === "brand1") {
      if (!formData.pageBrand?.name || formData.pageBrand.name.trim() === "") {
        errors.push("Brand name is required");
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
    } else if (formData.brandType === "brand2" || formData.brandType === "brand3") {
      if (!formData.header?.title || formData.header.title.trim() === "") {
        errors.push("Header title is required");
      }
      if (!formData.brands || formData.brands.length === 0) {
        errors.push("At least one brand is required");
      } else {
        formData.brands.forEach((brand, index) => {
          if (!brand.name || brand.name.trim() === "") {
            errors.push(`Brand ${index + 1}: Name is required`);
          }
        });
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("BrandSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { brandType, brand, pageBrand, breadcrumbs, products, brands, header, grid } = formData;

    // Structure data according to brands.js component expectations
    const brandData = {
      component: "brands",
      type: brandType,
      content: {}
    };

    // Add type-specific data to content
    if (brandType === "brand1") {
      brandData.content[brandType] = {
        brand: brand || {},
        pageBrand: pageBrand || {},
        breadcrumbs: breadcrumbs || [],
        products: products || [],
        grid: grid || {}
      };
    } else if (brandType === "brand2" || brandType === "brand3") {
      brandData.content[brandType] = {
        header: header || {},
        brands: brands || [],
        grid: grid || {}
      };
    }

    console.log("Saving brand content:", brandData);

    onSave(brandData);
    setHasChanges(false);
  };

  const currentBrandConfig = BRAND_TYPE_CONFIG[formData.brandType] || BRAND_TYPE_CONFIG.brand1;

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

      {/* Brand Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Brand Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.brandType}
          onChange={(e) => handleChange("brandType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(BRAND_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentBrandConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Brand Type Info:</p>
            <p className="text-sm text-blue-700">{currentBrandConfig.description}</p>
          </div>
        )}
      </div>

      {/* Brand1 - Brand & Page Brand */}
      {formData.brandType === "brand1" && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Site Brand</label>
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
                  placeholder="Planted"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Home Link</label>
                <input
                  type="text"
                  value={formData.brand?.homeLink || ""}
                  onChange={(e) => handleChange("brand", {
                    ...formData.brand,
                    homeLink: e.target.value
                  })}
                  placeholder="/"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Page Brand</label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.pageBrand?.name || ""}
                  onChange={(e) => handleChange("pageBrand", {
                    ...formData.pageBrand,
                    name: e.target.value
                  })}
                  placeholder="Rustic Roots"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Description</label>
                <textarea
                  value={formData.pageBrand?.description || ""}
                  onChange={(e) => handleChange("pageBrand", {
                    ...formData.pageBrand,
                    description: e.target.value
                  })}
                  placeholder="Brand description"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Breadcrumbs ({formData.breadcrumbs?.length || 0})
              </label>
              <button
                type="button"
                onClick={addBreadcrumb}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Breadcrumb
              </button>
            </div>
            {formData.breadcrumbs?.map((crumb, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Breadcrumb {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeBreadcrumb(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Label</label>
                    <input
                      type="text"
                      value={crumb.label || ""}
                      onChange={(e) => updateBreadcrumb(index, "label", e.target.value)}
                      placeholder="Home"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Link</label>
                    <input
                      type="text"
                      value={crumb.href || ""}
                      onChange={(e) => updateBreadcrumb(index, "href", e.target.value)}
                      placeholder="/"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="flex items-end">
                    <label className="flex items-center gap-2 text-xs text-gray-600">
                      <input
                        type="checkbox"
                        checked={crumb.isActive || false}
                        onChange={(e) => updateBreadcrumb(index, "isActive", e.target.checked)}
                        className="rounded"
                      />
                      Active
                    </label>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
                <div className="grid grid-cols-2 gap-2">
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
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Price <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={product.price || ""}
                      onChange={(e) => updateProduct(index, "price", e.target.value)}
                      placeholder="$55.00"
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Image</label>
                    <input
                      type="text"
                      value={product.image || ""}
                      onChange={(e) => updateProduct(index, "image", e.target.value)}
                      placeholder="🪴"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
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
        </div>
      )}

      {/* Brand2 & Brand3 - Header & Brands */}
      {(formData.brandType === "brand2" || formData.brandType === "brand3") && (
        <div className="space-y-4">
          <div className="border rounded-lg p-4 bg-gray-50">
            <label className="block text-sm font-medium text-gray-700 mb-3">Header Configuration</label>
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
                placeholder="Our Brands"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="border rounded-lg p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-3">
              <label className="block text-sm font-medium text-gray-700">
                Brands ({formData.brands?.length || 0})
              </label>
              <button
                type="button"
                onClick={addBrand}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                <Plus className="h-4 w-4" />
                Add Brand
              </button>
            </div>
            {formData.brands?.map((brand, index) => (
              <div key={index} className="mb-3 p-3 border rounded bg-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">Brand {index + 1}</span>
                  <button
                    type="button"
                    onClick={() => removeBrand(index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className={`grid ${formData.brandType === "brand3" ? "grid-cols-4" : "grid-cols-3"} gap-2`}>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">ID</label>
                    <input
                      type="number"
                      value={brand.id || index + 1}
                      onChange={(e) => updateBrand(index, "id", parseInt(e.target.value) || index + 1)}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={brand.name || ""}
                      onChange={(e) => updateBrand(index, "name", e.target.value)}
                      placeholder="Brand Name"
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Logo</label>
                    <input
                      type="text"
                      value={brand.logo || ""}
                      onChange={(e) => updateBrand(index, "logo", e.target.value)}
                      placeholder="BRAND"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {formData.brandType === "brand3" && (
                    <div>
                      <label className="block text-xs text-gray-600 mb-1">Products</label>
                      <input
                        type="number"
                        value={brand.products || 0}
                        onChange={(e) => updateBrand(index, "products", parseInt(e.target.value) || 0)}
                        placeholder="0"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  )}
                </div>
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

