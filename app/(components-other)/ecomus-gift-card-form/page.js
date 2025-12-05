"use client";

import { motion } from "framer-motion";
import { Gift, ShoppingBag, Star, Heart } from "lucide-react";
import { useState } from "react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-white",
    card: "bg-gradient-to-br from-gray-100 to-gray-200",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      accent: "text-gray-400"
    },
    inputs: {
      border: "border-gray-300",
      focus: "focus:ring-blue-500",
      selected: "border-blue-600 bg-blue-50 text-blue-600",
      unselected: "border-gray-300 text-gray-700"
    },
    buttons: {
      primary: "bg-blue-600 hover:bg-blue-700 text-white",
      wishlist: "bg-pink-500"
    },
    gradients: {
      image: "bg-gradient-to-br from-gray-100 to-gray-200"
    }
  },
  
  // Page Header
  header: {
    title: "Gift Card"
  },
  
  // Gift Card Amounts
  amounts: [25, 50, 100, 200, 500],
  
  // Form Fields
  form: {
    fields: [
      { label: "Recipient Name", type: "text", name: "recipientName", placeholder: "Enter recipient name" },
      { label: "Recipient Email", type: "email", name: "recipientEmail", placeholder: "Enter recipient email" },
      { label: "Message (Optional)", type: "textarea", name: "message", placeholder: "Add a personal message", rows: 3 }
    ],
    submitButton: {
      text: "Add to Cart",
      icon: "ShoppingBag"
    }
  },
  
  // Product Information
  product: {
    rating: 4.8,
    reviews: 128
  }
};

export default function Page() {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [formData, setFormData] = useState({
    amount: pageConfig.amounts[1],
    recipientName: "",
    recipientEmail: "",
    message: ""
  });
  const { colors, header, amounts, form, product } = pageConfig;

  const iconMap = {
    Gift,
    ShoppingBag,
    Star,
    Heart
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className={`aspect-square ${colors.gradients.image} rounded-2xl relative`}>
            <div className="w-full h-full flex items-center justify-center">
              <div className="text-center">
                <Gift className="w-32 h-32 text-gray-400 mx-auto mb-4" />
                <div className={`text-4xl font-bold ${colors.text.primary}`}>${formData.amount}</div>
                <p className={`${colors.text.secondary} mt-2`}>Gift Card</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className={`text-4xl font-bold ${colors.text.primary} mb-4`}>{header.title}</h1>
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${colors.text.secondary}`} />
              ))}
              <span className={colors.text.secondary}>{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="mb-6">
              <label className={`block text-sm font-semibold ${colors.text.primary} mb-3`}>Select Amount</label>
              <div className="flex flex-wrap gap-2">
                {amounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setFormData({ ...formData, amount })}
                    className={`px-6 py-2 rounded-lg border-2 transition-all ${
                      formData.amount === amount
                        ? colors.inputs.selected
                        : colors.inputs.unselected
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <input
                type="number"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: parseInt(e.target.value) || 0 })}
                className={`w-full mt-3 px-4 py-2 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                placeholder="Custom amount"
              />
            </div>

            <div className="space-y-4 mb-6">
              {form.fields.map((field, index) => (
                <div key={index}>
                  <label className={`block text-sm font-semibold ${colors.text.primary} mb-2`}>{field.label}</label>
                  {field.type === "textarea" ? (
                    <textarea
                      value={formData[field.name]}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                      rows={field.rows}
                      className={`w-full px-4 py-3 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                      placeholder={field.placeholder}
                    />
                  ) : (
                    <input
                      type={field.type}
                      value={formData[field.name]}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                      className={`w-full px-4 py-3 border ${colors.inputs.border} rounded-lg focus:outline-none focus:ring-2 ${colors.inputs.focus}`}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 ${colors.buttons.primary} py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2`}
              >
                {(() => {
                  const ShoppingBagIcon = iconMap[form.submitButton.icon];
                  return <ShoppingBagIcon className="w-5 h-5" />;
                })()}
                {form.submitButton.text}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-4 rounded-lg ${isWishlisted ? colors.buttons.wishlist : "bg-gray-100 hover:bg-gray-200"} transition-colors`}
              >
                <Heart className="w-5 h-5" fill={isWishlisted ? "currentColor" : "none"} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
