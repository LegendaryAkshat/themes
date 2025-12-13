"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different shop types and their fields
const SHOP_TYPE_CONFIG = {
  shop1: {
    label: "Shop 1 - Default with Toggleable Filters",
    fields: ["header", "products", "filters", "grid"],
    description: "Default shop layout with toggleable filters sidebar, grid/list view toggle"
  },
  shop2: {
    label: "Shop 2 - Left Sidebar",
    fields: ["header", "products", "filters", "grid"],
    description: "Shop with filters always visible on the left sidebar"
  },
  shop3: {
    label: "Shop 3 - Right Sidebar",
    fields: ["header", "products", "filters", "grid"],
    description: "Shop with filters always visible on the right sidebar"
  },
  shop4: {
    label: "Shop 4 - Fullwidth",
    fields: ["header", "products", "filters", "grid"],
    description: "Fullwidth shop layout with more products per row"
  },
  shop5: {
    label: "Shop 5 - Sub Collection",
    fields: ["header", "collections", "products", "grid"],
    description: "Shop with collections grid and products below"
  },
  shop6: {
    label: "Shop 6 - Collections List",
    fields: ["header", "collections", "grid"],
    description: "Collections list only, no products"
  },
  shop7: {
    label: "Shop 7 - Filter Hidden",
    fields: ["header", "products", "filters", "grid"],
    description: "Shop with filters hidden by default, can be shown"
  },
  shop8: {
    label: "Shop 8 - Shop the Look",
    fields: ["header", "looks"],
    description: "Fashion 'shop the look' layout with looks and items"
  }
};

export default function ShopSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(SHOP_TYPE_CONFIG)[0] || "shop1";
    const initialData = { shopType: firstType };

    if (firstType === "shop1" || firstType === "shop2" || firstType === "shop3" || firstType === "shop4" || firstType === "shop7") {
      initialData.header = {
        title: "Shop",
        description: "Browse our collection"
      };
      initialData.products = [
        { id: 1, name: "Product 1", price: "29.99", originalPrice: "39.99", rating: "4.5" }
      ];
      initialData.filters = {
        priceRanges: ["$0 - $50", "$50 - $100", "$100+"],
        categories: ["Clothing", "Accessories", "Shoes"],
        brands: ["Brand A", "Brand B"],
        ratings: [5, 4, 3]
      };
    } else if (firstType === "shop5") {
      initialData.header = {
        title: "Shop - Sub Collection"
      };
      initialData.collections = [
        { name: "Men's Collection", count: 45, link: "#" }
      ];
      initialData.products = [
        { id: 1, name: "Product 1", price: "29.99", rating: "4.5" }
      ];
    } else if (firstType === "shop6") {
      initialData.header = {
        title: "Collections List"
      };
      initialData.collections = [
        { name: "Men's Fashion", count: 45, image: "👔", link: "#" }
      ];
    } else if (firstType === "shop8") {
      initialData.header = {
        title: "Shop the look",
        description: "Inspire and let yourself be inspired"
      };
      initialData.looks = [
        {
          id: 1,
          items: [
            { name: "Jersey thong body", price: 112.00, link: "#" }
          ],
          image: "👗"
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

    const firstType = Object.keys(SHOP_TYPE_CONFIG)[0] || "shop1";
    const shopType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { shopType };

    // Load data based on shop type
    const config = content[shopType] || {};
    updatedFormData.header = config.header || formData.header || {};
    updatedFormData.products = config.products || formData.products || [];
    updatedFormData.filters = config.filters || formData.filters || {};
    updatedFormData.collections = config.collections || formData.collections || [];
    updatedFormData.looks = config.looks || formData.looks || [];
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

    if (field === "shopType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Products management
  const addProduct = () => {
    const currentProducts = formData.products || [];
    const newProduct = {
      id: currentProducts.length + 1,
      name: "New Product",
      price: "0.00",
      rating: "4.0"
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

  // Collections management
  const addCollection = () => {
    const currentCollections = formData.collections || [];
    const newCollection = formData.shopType === "shop6"
      ? { name: "New Collection", count: 0, image: "📦", link: "#" }
      : { name: "New Collection", count: 0, link: "#" };
    handleChange("collections", [...currentCollections, newCollection]);
  };

  const removeCollection = (index) => {
    const updatedCollections = formData.collections.filter((_, i) => i !== index);
    handleChange("collections", updatedCollections);
  };

  const updateCollection = (index, field, value) => {
    const updatedCollections = formData.collections.map((collection, i) => 
      i === index ? { ...collection, [field]: value } : collection
    );
    handleChange("collections", updatedCollections);
  };

  // Looks management for shop8
  const addLook = () => {
    const currentLooks = formData.looks || [];
    const newLook = {
      id: currentLooks.length + 1,
      items: [
        { name: "New Item", price: 0, link: "#" }
      ],
      image: "👕"
    };
    handleChange("looks", [...currentLooks, newLook]);
  };

  const removeLook = (index) => {
    const updatedLooks = formData.looks.filter((_, i) => i !== index);
    handleChange("looks", updatedLooks);
  };

  const updateLook = (index, field, value) => {
    const updatedLooks = formData.looks.map((look, i) => 
      i === index ? { ...look, [field]: value } : look
    );
    handleChange("looks", updatedLooks);
  };

  // Look items management
  const addLookItem = (lookIndex) => {
    const updatedLooks = formData.looks.map((look, i) => 
      i === lookIndex
        ? { ...look, items: [...(look.items || []), { name: "New Item", price: 0, link: "#" }] }
        : look
    );
    handleChange("looks", updatedLooks);
  };

  const removeLookItem = (lookIndex, itemIndex) => {
    const updatedLooks = formData.looks.map((look, i) => 
      i === lookIndex
        ? { ...look, items: look.items.filter((_, idx) => idx !== itemIndex) }
        : look
    );
    handleChange("looks", updatedLooks);
  };

  const updateLookItem = (lookIndex, itemIndex, field, value) => {
    const updatedLooks = formData.looks.map((look, i) => 
      i === lookIndex
        ? {
            ...look,
            items: look.items.map((item, idx) => 
              idx === itemIndex ? { ...item, [field]: value } : item
            )
          }
        : look
    );
    handleChange("looks", updatedLooks);
  };

  // Filter options management
  const addFilterOption = (filterType) => {
    const currentFilters = formData.filters || {};
    const currentOptions = currentFilters[filterType] || [];
    handleChange("filters", {
      ...currentFilters,
      [filterType]: [...currentOptions, filterType === "ratings" ? 5 : "New Option"]
    });
  };

  const removeFilterOption = (filterType, index) => {
    const currentFilters = formData.filters || {};
    const updatedOptions = currentFilters[filterType].filter((_, i) => i !== index);
    handleChange("filters", {
      ...currentFilters,
      [filterType]: updatedOptions
    });
  };

  const updateFilterOption = (filterType, index, value) => {
    const currentFilters = formData.filters || {};
    const updatedOptions = currentFilters[filterType].map((option, i) => 
      i === index ? value : option
    );
    handleChange("filters", {
      ...currentFilters,
      [filterType]: updatedOptions
    });
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.header?.title || formData.header.title.trim() === "") {
      errors.push("Header title is required");
    }

    if (formData.shopType === "shop1" || formData.shopType === "shop2" || formData.shopType === "shop3" || formData.shopType === "shop4" || formData.shopType === "shop7") {
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
    } else if (formData.shopType === "shop5") {
      if (!formData.collections || formData.collections.length === 0) {
        errors.push("At least one collection is required");
      }
      if (!formData.products || formData.products.length === 0) {
        errors.push("At least one product is required");
      }
    } else if (formData.shopType === "shop6") {
      if (!formData.collections || formData.collections.length === 0) {
        errors.push("At least one collection is required");
      }
    } else if (formData.shopType === "shop8") {
      if (!formData.looks || formData.looks.length === 0) {
        errors.push("At least one look is required");
      } else {
        formData.looks.forEach((look, index) => {
          if (!look.items || look.items.length === 0) {
            errors.push(`Look ${index + 1}: At least one item is required`);
          }
        });
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("ShopSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { shopType, header, products, filters, collections, looks, grid } = formData;

    // Structure data according to shop.js component expectations
    const shopData = {
      component: "shop",
      type: shopType,
      content: {}
    };

    // Add type-specific data to content
    if (shopType === "shop1" || shopType === "shop2" || shopType === "shop3" || shopType === "shop4" || shopType === "shop7") {
      shopData.content[shopType] = {
        header: header || {},
        products: products || [],
        filters: filters || {},
        grid: grid || {}
      };
    } else if (shopType === "shop5") {
      shopData.content[shopType] = {
        header: header || {},
        collections: collections || [],
        products: products || [],
        grid: grid || {}
      };
    } else if (shopType === "shop6") {
      shopData.content[shopType] = {
        header: header || {},
        collections: collections || [],
        grid: grid || {}
      };
    } else if (shopType === "shop8") {
      shopData.content[shopType] = {
        header: header || {},
        looks: looks || []
      };
    }

    console.log("Saving shop content:", shopData);

    onSave(shopData);
    setHasChanges(false);
  };

  const currentShopConfig = SHOP_TYPE_CONFIG[formData.shopType] || SHOP_TYPE_CONFIG.shop1;

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

      {/* Shop Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Shop Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.shopType}
          onChange={(e) => handleChange("shopType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(SHOP_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentShopConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Shop Type Info:</p>
            <p className="text-sm text-blue-700">{currentShopConfig.description}</p>
          </div>
        )}
      </div>

      {/* Header Configuration */}
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
              placeholder="Shop"
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
              placeholder="Browse our collection"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Products for shop1-4, shop7 */}
      {(formData.shopType === "shop1" || formData.shopType === "shop2" || formData.shopType === "shop3" || formData.shopType === "shop4" || formData.shopType === "shop7" || formData.shopType === "shop5") && (
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
                    placeholder="29.99"
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Original Price</label>
                  <input
                    type="text"
                    value={product.originalPrice || ""}
                    onChange={(e) => updateProduct(index, "originalPrice", e.target.value)}
                    placeholder="39.99"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Rating</label>
                  <input
                    type="text"
                    value={product.rating || ""}
                    onChange={(e) => updateProduct(index, "rating", e.target.value)}
                    placeholder="4.5"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Filters for shop1-4, shop7 */}
      {(formData.shopType === "shop1" || formData.shopType === "shop2" || formData.shopType === "shop3" || formData.shopType === "shop4" || formData.shopType === "shop7") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Filters</label>
          
          {/* Price Ranges */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs text-gray-600">Price Ranges</label>
              <button
                type="button"
                onClick={() => addFilterOption("priceRanges")}
                className="text-blue-600 hover:text-blue-700 text-xs"
              >
                <Plus className="h-3 w-3 inline" /> Add
              </button>
            </div>
            {formData.filters?.priceRanges?.map((range, index) => (
              <div key={index} className="flex items-center gap-2 mb-1">
                <input
                  type="text"
                  value={range}
                  onChange={(e) => updateFilterOption("priceRanges", index, e.target.value)}
                  placeholder="$0 - $50"
                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeFilterOption("priceRanges", index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs text-gray-600">Categories</label>
              <button
                type="button"
                onClick={() => addFilterOption("categories")}
                className="text-blue-600 hover:text-blue-700 text-xs"
              >
                <Plus className="h-3 w-3 inline" /> Add
              </button>
            </div>
            {formData.filters?.categories?.map((category, index) => (
              <div key={index} className="flex items-center gap-2 mb-1">
                <input
                  type="text"
                  value={category}
                  onChange={(e) => updateFilterOption("categories", index, e.target.value)}
                  placeholder="Clothing"
                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeFilterOption("categories", index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>

          {/* Brands */}
          {(formData.shopType === "shop1" || formData.shopType === "shop2" || formData.shopType === "shop3") && (
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs text-gray-600">Brands</label>
                <button
                  type="button"
                  onClick={() => addFilterOption("brands")}
                  className="text-blue-600 hover:text-blue-700 text-xs"
                >
                  <Plus className="h-3 w-3 inline" /> Add
                </button>
              </div>
              {formData.filters?.brands?.map((brand, index) => (
                <div key={index} className="flex items-center gap-2 mb-1">
                  <input
                    type="text"
                    value={brand}
                    onChange={(e) => updateFilterOption("brands", index, e.target.value)}
                    placeholder="Brand A"
                    className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => removeFilterOption("brands", index)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-3 w-3" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Ratings */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs text-gray-600">Ratings</label>
              <button
                type="button"
                onClick={() => addFilterOption("ratings")}
                className="text-blue-600 hover:text-blue-700 text-xs"
              >
                <Plus className="h-3 w-3 inline" /> Add
              </button>
            </div>
            {formData.filters?.ratings?.map((rating, index) => (
              <div key={index} className="flex items-center gap-2 mb-1">
                <input
                  type="number"
                  value={rating}
                  onChange={(e) => updateFilterOption("ratings", index, parseInt(e.target.value) || 5)}
                  placeholder="5"
                  min="1"
                  max="5"
                  className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => removeFilterOption("ratings", index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Collections for shop5, shop6 */}
      {(formData.shopType === "shop5" || formData.shopType === "shop6") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Collections ({formData.collections?.length || 0})
            </label>
            <button
              type="button"
              onClick={addCollection}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Collection
            </button>
          </div>
          {formData.collections?.map((collection, index) => (
            <div key={index} className="mb-3 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Collection {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeCollection(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className={`grid ${formData.shopType === "shop6" ? "grid-cols-4" : "grid-cols-3"} gap-2`}>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={collection.name || ""}
                    onChange={(e) => updateCollection(index, "name", e.target.value)}
                    placeholder="Collection Name"
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Count</label>
                  <input
                    type="number"
                    value={collection.count || 0}
                    onChange={(e) => updateCollection(index, "count", parseInt(e.target.value) || 0)}
                    placeholder="0"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {formData.shopType === "shop6" && (
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Image</label>
                    <input
                      type="text"
                      value={collection.image || ""}
                      onChange={(e) => updateCollection(index, "image", e.target.value)}
                      placeholder="👔"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Link</label>
                  <input
                    type="text"
                    value={collection.link || ""}
                    onChange={(e) => updateCollection(index, "link", e.target.value)}
                    placeholder="#"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Looks for shop8 */}
      {formData.shopType === "shop8" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Looks ({formData.looks?.length || 0})
            </label>
            <button
              type="button"
              onClick={addLook}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Look
            </button>
          </div>
          {formData.looks?.map((look, lookIndex) => (
            <div key={lookIndex} className="mb-4 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">Look {lookIndex + 1}</span>
                <button
                  type="button"
                  onClick={() => removeLook(lookIndex)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Image</label>
                  <input
                    type="text"
                    value={look.image || ""}
                    onChange={(e) => updateLook(lookIndex, "image", e.target.value)}
                    placeholder="👗"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">ID</label>
                  <input
                    type="number"
                    value={look.id || lookIndex + 1}
                    onChange={(e) => updateLook(lookIndex, "id", parseInt(e.target.value) || lookIndex + 1)}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs text-gray-600">Items ({look.items?.length || 0})</label>
                  <button
                    type="button"
                    onClick={() => addLookItem(lookIndex)}
                    className="text-blue-600 hover:text-blue-700 text-xs"
                  >
                    <Plus className="h-3 w-3 inline" /> Add Item
                  </button>
                </div>
                {look.items?.map((item, itemIndex) => (
                  <div key={itemIndex} className="mb-2 p-2 border rounded bg-gray-50">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium">Item {itemIndex + 1}</span>
                      <button
                        type="button"
                        onClick={() => removeLookItem(lookIndex, itemIndex)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Name</label>
                        <input
                          type="text"
                          value={item.name || ""}
                          onChange={(e) => updateLookItem(lookIndex, itemIndex, "name", e.target.value)}
                          placeholder="Item Name"
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Price</label>
                        <input
                          type="number"
                          value={item.price || 0}
                          onChange={(e) => updateLookItem(lookIndex, itemIndex, "price", parseFloat(e.target.value) || 0)}
                          placeholder="0"
                          step="0.01"
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-600 mb-1">Link</label>
                        <input
                          type="text"
                          value={item.link || ""}
                          onChange={(e) => updateLookItem(lookIndex, itemIndex, "link", e.target.value)}
                          placeholder="#"
                          className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
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

