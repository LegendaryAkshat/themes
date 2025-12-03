"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, Phone, MapPin, Send, MessageSquare, User, FileText, Clock } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

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

    // Pulse animation for contact cards
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
    <main className="min-h-screen w-full bg-black text-white">
      <motion.section
        ref={sectionRef}
        style={{ opacity, y }}
        className="px-6 py-24 max-w-7xl mx-auto relative"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="relative z-10">
          {/* Header */}
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
              Contact
            </motion.h1>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 md:p-10"
            >
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <MessageSquare className="w-6 h-6 text-blue-400" />
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      First Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-colors"
                        placeholder="John"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Last Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-colors"
                        placeholder="Doe"
                      />
                    </div>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Subject *
                    </label>
                    <div className="relative">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-colors"
                        placeholder="Inquiry about..."
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="form-field"
                    whileHover={{ scale: 1.02 }}
                  >
                    <label className="block text-sm font-semibold text-gray-300 mb-2">
                      Phone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </motion.div>
                </div>

                <motion.div
                  className="form-field"
                  whileHover={{ scale: 1.02 }}
                >
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border-2 border-white/20 rounded-lg focus:border-blue-400 focus:outline-none text-white placeholder-gray-400 transition-colors resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.div
                className="contact-card bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Our Address</h3>
                <p className="text-gray-300 leading-relaxed">
                  685 Market Street, Las Vegas, LA 95820, United States
                </p>
              </motion.div>

              <motion.div
                className="contact-card bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone Number</h3>
                <a href="tel:+0995327869843" className="text-blue-400 hover:text-blue-300 font-semibold text-lg">
                  (+099) 532-786-9843
                </a>
              </motion.div>

              <motion.div
                className="contact-card bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Address</h3>
                <a href="mailto:support@example.com" className="text-blue-400 hover:text-blue-300 font-semibold text-lg">
                  support@example.com
                </a>
              </motion.div>

              <motion.div
                className="contact-card bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-8 hover:bg-white/15 transition-all"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Clock className="w-8 h-8 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
                <p className="text-gray-300 leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM<br />
                  Saturday: 10:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}





