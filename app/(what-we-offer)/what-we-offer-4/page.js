"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Sparkles, Star } from "lucide-react";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-50 via-white to-indigo-50/30",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      light: "text-gray-500"
    },
    badges: {
      icon: "text-indigo-600",
      text: "text-indigo-600"
    },
    gradients: {
      title: "bg-gradient-to-r from-indigo-600 to-purple-600",
      closing: "bg-gradient-to-r from-indigo-600 to-purple-600"
    },
    rings: {
      popular: "ring-4 ring-purple-500 ring-opacity-50"
    }
  },
  
  // Page Header
  header: {
    badge: {
      text: "Our Offerings",
      icon: "Sparkles"
    },
    title: {
      line1: "Solutions for",
      line2: "Every Stage"
    },
    description: "Choose the package that fits your needs, with the flexibility to grow as you do."
  },
  
  // Packages (Edit packages here!)
  packages: [
    {
      name: "Essential",
      description: "Perfect for getting started",
      price: "Starting at",
      priceValue: "$99",
      features: [
        "Core functionality",
        "Email support",
        "Basic analytics",
        "Standard templates"
      ],
      gradient: "from-blue-500 to-cyan-500",
      popular: false
    },
    {
      name: "Professional",
      description: "For growing businesses",
      price: "Starting at",
      priceValue: "$99",
      features: [
        "All Essential features",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "Dedicated account manager"
      ],
      gradient: "from-purple-500 to-pink-500",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations",
      price: "Custom pricing",
      priceValue: "Custom",
      features: [
        "All Professional features",
        "24/7 phone support",
        "Custom development",
        "SLA guarantees",
        "On-site training",
        "White-glove service"
      ],
      gradient: "from-orange-500 to-red-500",
      popular: false
    }
  ],
  
  // Bottom Note
  bottomNote: {
    text: "All packages include our commitment to excellence, continuous updates, and dedicated support to help you succeed."
  }
};

export default function Page() {
  const { colors, header, packages, bottomNote } = pageConfig;

  const iconMap = {
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Star
  };

  return (
    <main className={`min-h-screen w-full ${colors.background}`}>
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-2 mb-6"
          >
            {(() => {
              const SparklesIcon = iconMap[header.badge.icon];
              return <SparklesIcon className={`w-6 h-6 ${colors.badges.icon}`} />;
            })()}
            <span className={`text-sm uppercase tracking-wider ${colors.badges.text} font-semibold`}>
              {header.badge.text}
            </span>
          </motion.div>
          <h1 className={`text-5xl md:text-7xl font-bold ${colors.text.primary} mb-6`}>
            {header.title.line1}
            <span className={`block bg-clip-text text-transparent ${colors.gradients.title}`}>
              {header.title.line2}
            </span>
          </h1>
          <p className={`text-xl ${colors.text.secondary} max-w-3xl mx-auto leading-relaxed`}>
            {header.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative ${colors.card} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all overflow-hidden ${
                pkg.popular ? colors.rings.popular : ""
              }`}
            >
              {pkg.popular && (
                <div className={`absolute top-0 right-0 bg-gradient-to-r ${pkg.gradient} text-white px-4 py-2 rounded-bl-2xl rounded-tr-3xl text-sm font-semibold flex items-center gap-1`}>
                  <Star className="w-4 h-4 fill-current" />
                  Most Popular
                </div>
              )}

              <div className={`h-2 bg-gradient-to-r ${pkg.gradient} mb-6 rounded-full`} />

              <h3 className={`text-3xl font-bold ${colors.text.primary} mb-2`}>{pkg.name}</h3>
              <p className={`${colors.text.secondary} mb-6`}>{pkg.description}</p>

              <div className="mb-6">
                <div className={`text-sm ${colors.text.light} mb-1`}>{pkg.price}</div>
                <div className={`text-4xl font-bold ${colors.text.primary}`}>
                  {pkg.priceValue}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature, fIndex) => (
                  <motion.li
                    key={fIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + fIndex * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className={`w-5 h-5 text-transparent bg-gradient-to-br ${pkg.gradient} bg-clip-text flex-shrink-0 mt-0.5`} />
                    <span className={colors.text.secondary}>{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full bg-gradient-to-r ${pkg.gradient} text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2`}
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className={`inline-block ${colors.gradients.closing} rounded-2xl p-8 text-white shadow-2xl`}>
            <p className={`text-xl font-light leading-relaxed max-w-3xl`}>
              {bottomNote.text}
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
