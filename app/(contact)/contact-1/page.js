"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, MessageSquare, User, FileText } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gradient-to-br from-gray-50 via-white to-blue-50/30",
    card: "bg-white",
    text: {
      primary: "text-gray-900",
      secondary: "text-gray-600",
      accent: "text-blue-600"
    },
    borders: {
      default: "border-gray-200",
      focus: "border-blue-500"
    },
    buttons: {
      primary: "bg-gradient-to-r from-blue-600 to-purple-600",
      icon: {
        blue: "bg-blue-100",
        green: "bg-green-100",
        purple: "bg-purple-100"
      }
    },
    gradients: {
      title: "bg-gradient-to-r from-blue-600 to-purple-600"
    }
  },
  
  // Page Header
  page: {
    badge: "Get In Touch",
    title: "Contact Information",
    description: "Have a question or need assistance? We're here to help! Reach out to us through any of the channels below."
  },
  
  // Form Fields (Edit form fields here!)
  form: {
    title: "Send us a Message",
    icon: "MessageSquare",
    fields: {
      firstName: { label: "First Name *", placeholder: "John", icon: "User", required: true },
      lastName: { label: "Last Name *", placeholder: "Doe", icon: "User", required: true },
      subject: { label: "Subject *", placeholder: "Inquiry about...", icon: "FileText", required: true },
      phone: { label: "Phone *", placeholder: "+1 (555) 123-4567", icon: "Phone", required: true },
      message: { label: "Message", placeholder: "Tell us how we can help you...", required: false }
    },
    submitButton: {
      text: "Send Message",
      icon: "Send"
    }
  },
  
  // Contact Information (Edit contact info here!)
  contact: {
    address: {
      title: "Our Address",
      icon: "MapPin",
      iconColor: "blue",
      text: "685 Market Street, La Vega, LA 95820, United States"
    },
    phone: {
      title: "Phone Number",
      icon: "Phone",
      iconColor: "green",
      text: "(+099) 532-786-9843",
      link: "tel:+0995327869843"
    },
    email: {
      title: "Email Address",
      icon: "Mail",
      iconColor: "purple",
      text: "support@example.com",
      link: "mailto:support@example.com"
    }
  }
};

export default function Page() {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    phone: "",
    message: ""
  });
  const { colors, page, form, contact } = pageConfig;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

  const iconMap = {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    User,
    FileText
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const formFields = sectionRef.current.querySelectorAll('.form-field');
    
    formFields.forEach((field, index) => {
      gsap.fromTo(
        field,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          delay: index * 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: field,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });

    const icons = sectionRef.current.querySelectorAll('.contact-icon');
    icons.forEach((icon, index) => {
      gsap.to(icon, {
        y: -10,
        duration: 2,
        delay: index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <main className={`min-h-screen w-full ${colors.background} ${colors.text.primary}`}>
      <motion.section
        ref={sectionRef}
        style={{ opacity, y }}
        className="px-6 py-24 max-w-7xl mx-auto"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring" }}
              className={`inline-block text-sm uppercase tracking-wider ${colors.text.accent} bg-blue-50 px-4 py-2 rounded-full font-semibold mb-4`}
            >
              {page.badge}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className={`text-4xl md:text-6xl font-bold text-slate-800 mb-4 bg-clip-text text-transparent ${colors.gradients.title}`}
            >
              {page.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className={`${colors.text.secondary} text-lg max-w-2xl mx-auto`}
            >
              {page.description}
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`${colors.card} rounded-2xl shadow-xl p-8 md:p-10`}
            >
              <h2 className={`text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2`}>
                {React.createElement(iconMap[form.icon], { className: `w-6 h-6 ${colors.text.accent}` })}
                {form.title}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className={`block text-sm font-semibold text-gray-700 mb-2`}>
                      {form.fields.firstName.label}
                    </label>
                    <div className="relative">
                      {React.createElement(iconMap[form.fields.firstName.icon], { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" })}
                      <input
                        type="text"
                        required={form.fields.firstName.required}
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none transition-colors`}
                        placeholder={form.fields.firstName.placeholder}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className={`block text-sm font-semibold text-gray-700 mb-2`}>
                      {form.fields.lastName.label}
                    </label>
                    <div className="relative">
                      {React.createElement(iconMap[form.fields.lastName.icon], { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" })}
                      <input
                        type="text"
                        required={form.fields.lastName.required}
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none transition-colors`}
                        placeholder={form.fields.lastName.placeholder}
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className={`block text-sm font-semibold text-gray-700 mb-2`}>
                      {form.fields.subject.label}
                    </label>
                    <div className="relative">
                      {React.createElement(iconMap[form.fields.subject.icon], { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" })}
                      <input
                        type="text"
                        required={form.fields.subject.required}
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none transition-colors`}
                        placeholder={form.fields.subject.placeholder}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className={`block text-sm font-semibold text-gray-700 mb-2`}>
                      {form.fields.phone.label}
                    </label>
                    <div className="relative">
                      {React.createElement(iconMap[form.fields.phone.icon], { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" })}
                      <input
                        type="tel"
                        required={form.fields.phone.required}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none transition-colors`}
                        placeholder={form.fields.phone.placeholder}
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="form-field"
                  whileHover={{ scale: 1.02 }}
                >
                  <label className={`block text-sm font-semibold text-gray-700 mb-2`}>
                    {form.fields.message.label}
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full px-4 py-3 border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none transition-colors resize-none`}
                    placeholder={form.fields.message.placeholder}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full ${colors.buttons.primary} text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all`}
                >
                  {React.createElement(iconMap[form.submitButton.icon], { className: "w-5 h-5" })}
                  {form.submitButton.text}
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                className={`${colors.card} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow contact-icon`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 ${colors.buttons.icon[contact.address.iconColor]} rounded-xl flex items-center justify-center mb-4`}>
                  {React.createElement(iconMap[contact.address.icon], { className: "w-8 h-8 text-blue-600" })}
                </div>
                <h3 className={`text-xl font-bold text-slate-800 mb-2`}>{contact.address.title}</h3>
                <p className={`${colors.text.secondary} leading-relaxed`}>
                  {contact.address.text}
                </p>
              </motion.div>

              <motion.div
                className={`${colors.card} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow contact-icon`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 ${colors.buttons.icon[contact.phone.iconColor]} rounded-xl flex items-center justify-center mb-4`}>
                  {React.createElement(iconMap[contact.phone.icon], { className: "w-8 h-8 text-green-600" })}
                </div>
                <h3 className={`text-xl font-bold text-slate-800 mb-2`}>{contact.phone.title}</h3>
                <a href={contact.phone.link} className={`${colors.text.accent} hover:text-blue-700 font-semibold text-lg`}>
                  {contact.phone.text}
                </a>
              </motion.div>

              <motion.div
                className={`${colors.card} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow contact-icon`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 ${colors.buttons.icon[contact.email.iconColor]} rounded-xl flex items-center justify-center mb-4`}>
                  {React.createElement(iconMap[contact.email.icon], { className: "w-8 h-8 text-purple-600" })}
                </div>
                <h3 className={`text-xl font-bold text-slate-800 mb-2`}>{contact.email.title}</h3>
                <a href={contact.email.link} className={`${colors.text.accent} hover:text-blue-700 font-semibold text-lg`}>
                  {contact.email.text}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
