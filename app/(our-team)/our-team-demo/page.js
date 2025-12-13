"use client";

import { useState } from "react";
import OurTeam from "../../../components/sections/modern/Ourteam";

// ============================================
// PAGE CONFIGURATION - Edit everything here!
// ============================================
const pageConfig = {
  // Our Team content configuration - you can override default configs here
  content: {
    // Override ourTeam1 config if needed
    // ourTeam1: { ... },
    // Override ourTeam2 config if needed
    // ourTeam2: { ... },
    // etc.
  }
};

export default function OurTeamDemoPage() {
  const [ourTeamType, setOurTeamType] = useState("ourTeam1");
  const { content } = pageConfig;

  const ourTeamTypes = [
    { value: "ourTeam1", label: "Our Team 1 - Grid with Bio" },
    { value: "ourTeam2", label: "Our Team 2 - Horizontal Cards with Scroll" },
    { value: "ourTeam3", label: "Our Team 3 - Alternating Layout with CTA" },
    { value: "ourTeam4", label: "Our Team 4 - Departments" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Our Team Component Demo</h1>
              <p className="text-sm text-gray-600 mt-1">Select a team type to preview</p>
            </div>
            
            <div className="flex items-center gap-4">
              <label htmlFor="our-team-type" className="text-sm font-medium text-gray-700">
                Our Team Type:
              </label>
              <select
                id="our-team-type"
                value={ourTeamType}
                onChange={(e) => setOurTeamType(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
              >
                {ourTeamTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Component */}
      <div className="pt-20">
        <OurTeam
          component="our-team"
          type={ourTeamType}
          content={content}
        />
      </div>
    </div>
  );
}

