"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, MessageSquare, User, FileText, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-black",
    card: "bg-white/10 backdrop-blur-sm",
    text: {
      primary: "text-white",
      secondary: "text-gray-300",
      accent: "text-blue-400"
    },
    borders: {
      default: "border-white/20",
      focus: "border-blue-400"
    },
    buttons: {
      primary: "bg-gradient-to-r from-blue-500 to-purple-500",
      icon: {
        blue: "bg-blue-500/20",
        green: "bg-green-500/20",
        purple: "bg-purple-500/20",
        orange: "bg-orange-500/20"
      }
    }
  },
  
  // Page Header
  page: {
    title: "Contact"
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
      text: "685 Market Street, Las Vegas, LA 95820, United States"
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
    },
    hours: {
      title: "Business Hours",
      icon: "Clock",
      iconColor: "orange",
      text: "Monday - Friday: 9:00 AM - 6:00 PM\nSaturday: 10:00 AM - 4:00 PM\nSunday: Closed"
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
    FileText,
    Clock
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const formFields = sectionRef.current.querySelectorAll('.form-field');
    
    formFields.forEach((field, index) => {
      gsap.fromTo(
        field,
        { opacity: 0, x: index % 2 === 0 ? -30 : 30, scale: 0.95 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.7,
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

    const cards = sectionRef.current.querySelectorAll('.contact-card');
    cards.forEach((card, index) => {
      gsap.to(card, {
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
        className="px-6 py-24 max-w-7xl mx-auto relative"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6"
            >
              {page.title}
            </motion.h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`${colors.card} rounded-2xl border ${colors.borders.default} p-8 md:p-10`}
            >
              <h2 className={`text-2xl font-bold text-white mb-6 flex items-center gap-2`}>
                {React.createElement(iconMap[form.icon], { className: `w-6 h-6 ${colors.text.accent}` })}
                {form.title}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className={`block text-sm font-semibold text-gray-300 mb-2`}>
                      {form.fields.firstName.label}
                    </label>
                    <div className="relative">
                      {React.createElement(iconMap[form.fields.firstName.icon], { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" })}
                      <input
                        type="text"
                        required={form.fields.firstName.required}
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 ${colors.card} border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none text-white placeholder-gray-400 transition-colors`}
                        placeholder={form.fields.firstName.placeholder}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className={`block text-sm font-semibold text-gray-300 mb-2`}>
                      {form.fields.lastName.label}
                    </label>
                    <div className="relative">
                      {React.createElement(iconMap[form.fields.lastName.icon], { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" })}
                      <input
                        type="text"
                        required={form.fields.lastName.required}
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 ${colors.card} border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none text-white placeholder-gray-400 transition-colors`}
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
                    <label className={`block text-sm font-semibold text-gray-300 mb-2`}>
                      {form.fields.subject.label}
                    </label>
                    <div className="relative">
                      {React.createElement(iconMap[form.fields.subject.icon], { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" })}
                      <input
                        type="text"
                        required={form.fields.subject.required}
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 ${colors.card} border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none text-white placeholder-gray-400 transition-colors`}
                        placeholder={form.fields.subject.placeholder}
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className={`block text-sm font-semibold text-gray-300 mb-2`}>
                      {form.fields.phone.label}
                    </label>
                    <div className="relative">
                      {React.createElement(iconMap[form.fields.phone.icon], { className: "absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" })}
                      <input
                        type="tel"
                        required={form.fields.phone.required}
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className={`w-full pl-10 pr-4 py-3 ${colors.card} border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none text-white placeholder-gray-400 transition-colors`}
                        placeholder={form.fields.phone.placeholder}
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="form-field"
                  whileHover={{ scale: 1.02 }}
                >
                  <label className={`block text-sm font-semibold text-gray-300 mb-2`}>
                    {form.fields.message.label}
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className={`w-full px-4 py-3 ${colors.card} border-2 ${colors.borders.default} rounded-lg focus:${colors.borders.focus} focus:outline-none text-white placeholder-gray-400 transition-colors resize-none`}
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
                className={`contact-card ${colors.card} rounded-2xl border ${colors.borders.default} p-8 hover:bg-white/15 transition-all`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 ${colors.buttons.icon[contact.address.iconColor]} rounded-xl flex items-center justify-center mb-4`}>
                  {React.createElement(iconMap[contact.address.icon], { className: "w-8 h-8 text-blue-400" })}
                </div>
                <h3 className={`text-xl font-bold text-white mb-2`}>{contact.address.title}</h3>
                <p className={`${colors.text.secondary} leading-relaxed`}>
                  {contact.address.text}
                </p>
              </motion.div>

              <motion.div
                className={`contact-card ${colors.card} rounded-2xl border ${colors.borders.default} p-8 hover:bg-white/15 transition-all`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 ${colors.buttons.icon[contact.phone.iconColor]} rounded-xl flex items-center justify-center mb-4`}>
                  {React.createElement(iconMap[contact.phone.icon], { className: "w-8 h-8 text-green-400" })}
                </div>
                <h3 className={`text-xl font-bold text-white mb-2`}>{contact.phone.title}</h3>
                <a href={contact.phone.link} className={`${colors.text.accent} hover:text-blue-300 font-semibold text-lg`}>
                  {contact.phone.text}
                </a>
              </motion.div>

              <motion.div
                className={`contact-card ${colors.card} rounded-2xl border ${colors.borders.default} p-8 hover:bg-white/15 transition-all`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 ${colors.buttons.icon[contact.email.iconColor]} rounded-xl flex items-center justify-center mb-4`}>
                  {React.createElement(iconMap[contact.email.icon], { className: "w-8 h-8 text-purple-400" })}
                </div>
                <h3 className={`text-xl font-bold text-white mb-2`}>{contact.email.title}</h3>
                <a href={contact.email.link} className={`${colors.text.accent} hover:text-blue-300 font-semibold text-lg`}>
                  {contact.email.text}
                </a>
              </motion.div>

              <motion.div
                className={`contact-card ${colors.card} rounded-2xl border ${colors.borders.default} p-8 hover:bg-white/15 transition-all`}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 ${colors.buttons.icon[contact.hours.iconColor]} rounded-xl flex items-center justify-center mb-4`}>
                  {React.createElement(iconMap[contact.hours.icon], { className: "w-8 h-8 text-orange-400" })}
                </div>
                <h3 className={`text-xl font-bold text-white mb-2`}>{contact.hours.title}</h3>
                <p className={`${colors.text.secondary} leading-relaxed whitespace-pre-line`}>
                  {contact.hours.text}
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
