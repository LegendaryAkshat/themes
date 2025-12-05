"use client";

import { motion } from "framer-motion";
import { Search, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Brand & Identity
  brand: {
    name: "Headless",
    homeLink: "/headless-home",
    successLink: "/headless-checkout-success"
  },
  
  // Colors & Theme
  colors: {
    background: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600"
    },
    borders: {
      default: "border-gray-200",
      input: "border-gray-300"
    },
    buttons: {
      primary: "bg-gray-900 text-white hover:bg-gray-800",
      focus: "focus:ring-2 focus:ring-gray-900"
    }
  },
  
  // Header Navigation
  header: {
    navigation: [
      { label: "About us", href: "/headless-about" },
      { label: "Spring", href: "/headless-spring" },
      { label: "FAQ", href: "/headless-faq" }
    ],
    actions: {
      search: { enabled: true, link: "/headless-search" },
      cart: { enabled: true, link: "/headless-cart" }
    }
  },
  
  // Page Content
  page: {
    title: "Checkout"
  },
  
  // Form Sections (Edit form fields here!)
  form: {
    shipping: {
      title: "Shipping Information",
      fields: {
        email: { placeholder: "Email" },
        fullName: { placeholder: "Full Name" },
        address: { placeholder: "Address" },
        city: { placeholder: "City" },
        zip: { placeholder: "ZIP Code" }
      }
    },
    payment: {
      title: "Payment Information",
      fields: {
        cardNumber: { placeholder: "Card Number" },
        expiry: { placeholder: "Expiry Date" },
        cvv: { placeholder: "CVV" }
      }
    }
  },
  
  // Order Summary (Edit order summary here!)
  order: {
    subtotal: 10666.72,
    shipping: 50.00,
    total: 10716.72,
    buttonText: "Complete Order"
  }
};

export default function Page() {
  const router = useRouter();
  const { brand, colors, header, page, form, order } = pageConfig;

  return (
    <div className={`min-h-screen ${colors.background}`}>
      <header className={`border-b ${colors.borders.default}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              {header.navigation.map((item, index) => (
                <Link 
                  key={index}
                  href={item.href} 
                  className={`text-sm ${colors.text.secondary} hover:${colors.text.primary} transition-colors`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href={brand.homeLink} className={`text-2xl font-semibold ${colors.text.primary}`}>
              {brand.name}
            </Link>
            <div className="flex items-center gap-4">
              {header.actions.search.enabled && (
                <button 
                  onClick={() => router.push(header.actions.search.link)} 
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <Search className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
              {header.actions.cart.enabled && (
                <button 
                  onClick={() => router.push(header.actions.cart.link)} 
                  className="p-2 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <ShoppingBag className={`w-5 h-5 ${colors.text.secondary}`} />
                </button>
              )}
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className={`text-4xl font-light ${colors.text.primary} mb-8`}>{page.title}</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <section>
              <h2 className={`text-xl font-light ${colors.text.primary} mb-4`}>{form.shipping.title}</h2>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder={form.shipping.fields.email.placeholder}
                  className={`w-full px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                />
                <input
                  type="text"
                  placeholder={form.shipping.fields.fullName.placeholder}
                  className={`w-full px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                />
                <input
                  type="text"
                  placeholder={form.shipping.fields.address.placeholder}
                  className={`w-full px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={form.shipping.fields.city.placeholder}
                    className={`px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                  />
                  <input
                    type="text"
                    placeholder={form.shipping.fields.zip.placeholder}
                    className={`px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                  />
                </div>
              </div>
            </section>

            <section>
              <h2 className={`text-xl font-light ${colors.text.primary} mb-4`}>{form.payment.title}</h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={form.payment.fields.cardNumber.placeholder}
                  className={`w-full px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder={form.payment.fields.expiry.placeholder}
                    className={`px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                  />
                  <input
                    type="text"
                    placeholder={form.payment.fields.cvv.placeholder}
                    className={`px-4 py-3 border ${colors.borders.input} focus:outline-none ${colors.buttons.focus}`}
                  />
                </div>
              </div>
            </section>
          </div>

          <div>
            <div className={`border ${colors.borders.default} p-6 sticky top-4`}>
              <h2 className={`text-xl font-light ${colors.text.primary} mb-4`}>Order Summary</h2>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className={colors.text.secondary}>Subtotal</span>
                  <span>${order.subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className={colors.text.secondary}>Shipping</span>
                  <span>${order.shipping.toFixed(2)}</span>
                </div>
                <div className={`border-t ${colors.borders.default} pt-4`}>
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Link
                href={brand.successLink}
                className={`block w-full ${colors.buttons.primary} py-4 text-center font-medium transition-colors`}
              >
                {order.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
