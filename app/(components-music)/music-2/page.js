"use client";

import { motion } from "framer-motion";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Colors & Theme
  colors: {
    background: "bg-gray-50",
    card: "bg-gradient-to-br from-blue-600 to-purple-600",
    text: {
      primary: "text-white",
      secondary: "text-blue-100"
    },
    badges: {
      background: "bg-yellow-400",
      text: "text-black"
    },
    buttons: {
      primary: "bg-white text-blue-600 hover:bg-blue-50"
    },
    timers: {
      background: "bg-white bg-opacity-20",
      text: {
        value: "text-white",
        label: "text-blue-100"
      }
    }
  },
  
  // Content (Edit content here!)
  content: {
    badge: "Don't Miss!!",
    title: "Enhance Your Music Experience",
    description: "Premium Mobile Device Pro Max",
    buttonText: "Check it Out!",
    countdown: {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00"
    }
  }
};

export default function Page() {
  const { colors, content } = pageConfig;

  return (
    <main className={`min-h-screen w-full ${colors.background} text-gray-900`}>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="px-6 py-16 max-w-6xl mx-auto"
      >
        <div className={`${colors.card} rounded-2xl shadow-2xl overflow-hidden relative`}>
          <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center relative z-10">
            <div className="space-y-6 text-white">
              <div className={`inline-block ${colors.badges.background} ${colors.badges.text} px-4 py-1 rounded-full text-sm font-semibold`}>
                {content.badge}
              </div>
              <h2 className={`text-4xl md:text-5xl font-bold`}>
                {content.title}
              </h2>
              <p className={`text-lg ${colors.text.secondary}`}>
                {content.description}
              </p>
              
              <div className="flex gap-4">
                <div className={`${colors.timers.background} rounded-lg p-4 text-center`}>
                  <div className={`text-3xl font-bold ${colors.timers.text.value}`}>{content.countdown.days}</div>
                  <div className={`text-sm ${colors.timers.text.label}`}>Days</div>
                </div>
                <div className={`${colors.timers.background} rounded-lg p-4 text-center`}>
                  <div className={`text-3xl font-bold ${colors.timers.text.value}`}>{content.countdown.hours}</div>
                  <div className={`text-sm ${colors.timers.text.label}`}>Hours</div>
                </div>
                <div className={`${colors.timers.background} rounded-lg p-4 text-center`}>
                  <div className={`text-3xl font-bold ${colors.timers.text.value}`}>{content.countdown.minutes}</div>
                  <div className={`text-sm ${colors.timers.text.label}`}>Minutes</div>
                </div>
                <div className={`${colors.timers.background} rounded-lg p-4 text-center`}>
                  <div className={`text-3xl font-bold ${colors.timers.text.value}`}>{content.countdown.seconds}</div>
                  <div className={`text-sm ${colors.timers.text.label}`}>Seconds</div>
                </div>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${colors.buttons.primary} px-8 py-3 rounded-lg font-semibold transition-colors`}
              >
                {content.buttonText}
              </motion.button>
            </div>
            
            <div className="relative flex items-center justify-center">
              <div className="w-full h-80 bg-white bg-opacity-20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <div className="w-64 h-64 bg-white bg-opacity-30 rounded-full"></div>
              </div>
            </div>
          </div>
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full -ml-32 -mb-32"></div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
