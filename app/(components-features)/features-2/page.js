"use client";

import { motion } from "framer-motion";
import { Shield, Truck, Headphones, Award, Zap, Lock } from "lucide-react";

export default function Page() {
  const features = [
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Bank-level encryption ensures your transactions are always protected",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Express shipping available with real-time tracking for all orders",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock assistance from our dedicated customer care team",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Award,
      title: "Quality Guarantee",
      description: "Rigorous quality control ensures every product meets our high standards",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance for the fastest possible experience",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "Your data is safeguarded with industry-leading privacy practices",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the difference with features designed to elevate your journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl" style={{
                  background: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                  backgroundImage: `linear-gradient(135deg, ${feature.color.split(' ')[1]}, ${feature.color.split(' ')[3]})`
                }} />
                
                <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

