"use client";

import { useState, useEffect } from "react";
import { Save, Plus, Trash2 } from "lucide-react";

// Configuration for different our team types and their fields
const OUR_TEAM_TYPE_CONFIG = {
  ourTeam1: {
    label: "Our Team 1 - Grid with Bio",
    fields: ["header", "team"],
    description: "Grid layout with team members featuring name, role, bio, image initials, gradient, and social links. Light background."
  },
  ourTeam2: {
    label: "Our Team 2 - Horizontal Cards with Scroll",
    fields: ["header", "team", "statement"],
    description: "Horizontal cards with name, role, expertise, and social links. Dark gradient background with scroll animations."
  },
  ourTeam3: {
    label: "Our Team 3 - Alternating Layout with CTA",
    fields: ["header", "team", "cta"],
    description: "Alternating left/right layout with large avatars, bio, and social links. Includes CTA section. White background."
  },
  ourTeam4: {
    label: "Our Team 4 - Departments",
    fields: ["header", "departments", "statement"],
    description: "Team organized by departments. Each department has members with name, role, image initials, and social links. Light background."
  }
};

export default function OurTeamSectionForm({ sectionData, onUpdate, onSave }) {
  // Initialize form data
  const initializeFormData = () => {
    const firstType = Object.keys(OUR_TEAM_TYPE_CONFIG)[0] || "ourTeam1";
    const initialData = { ourTeamType: firstType };

    if (firstType === "ourTeam1") {
      initialData.header = {
        badge: "Meet the Team",
        title: "Our",
        titleAccent: "Leadership Team",
        description: "The talented individuals driving our vision forward."
      };
      initialData.team = [
        {
          name: "Sarah Chen",
          role: "Chief Executive Officer",
          bio: "Visionary leader with 15+ years of experience.",
          image: "SC",
          gradient: "from-blue-500 to-cyan-500",
          social: { linkedin: "#", twitter: "#" }
        }
      ];
    } else if (firstType === "ourTeam2") {
      initialData.header = {
        badge: {
          text: "Our Experts",
          icon: "Sparkles"
        },
        title: {
          line1: "The People Behind",
          line2: "The Innovation"
        },
        description: "Meet the talented individuals driving our success."
      };
      initialData.team = [
        {
          name: "Alexandra Park",
          role: "Product Lead",
          expertise: "Product Strategy & Innovation",
          image: "AP",
          gradient: "from-cyan-500 to-blue-500",
          social: {
            linkedin: "#",
            email: "#"
          }
        }
      ];
      initialData.statement = {
        text: "We're a diverse team united by passion and innovation."
      };
    } else if (firstType === "ourTeam3") {
      initialData.header = {
        badge: "Our Team",
        title: {
          line1: "Meet the",
          line2: "Dream Team"
        },
        description: "Talented individuals working together."
      };
      initialData.team = [
        {
          name: "Sophie Chen",
          role: "CEO & Co-Founder",
          bio: "Serial entrepreneur with a passion for building products.",
          image: "SC",
          gradient: "from-indigo-500 to-purple-500",
          social: { linkedin: "#", twitter: "#" }
        }
      ];
      initialData.cta = {
        text: "Want to join our team? We're always looking for exceptional talent.",
        buttonText: "See Open Roles",
        enabled: true
      };
    } else if (firstType === "ourTeam4") {
      initialData.header = {
        badge: {
          text: "Our People",
          icon: "Sparkles"
        },
        title: {
          line1: "The Team",
          line2: "Behind Success"
        },
        description: "Organized by department, meet the talented individuals."
      };
      initialData.departments = [
        {
          name: "Leadership",
          members: [
            { name: "Jennifer Adams", role: "CEO", image: "JA", gradient: "from-blue-500 to-cyan-500" }
          ]
        }
      ];
      initialData.statement = {
        text: "Together, we're building something meaningful."
      };
    }

    return initialData;
  };

  const [formData, setFormData] = useState(initializeFormData());
  const [hasChanges, setHasChanges] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);

  // Initialize form with existing data if editing
  useEffect(() => {
    if (!sectionData) return;

    const firstType = Object.keys(OUR_TEAM_TYPE_CONFIG)[0] || "ourTeam1";
    const ourTeamType = sectionData.type && sectionData.type.trim() !== "" 
      ? sectionData.type 
      : firstType;

    const content = sectionData.content?.content || sectionData.content || {};

    const updatedFormData = { ourTeamType };

    // Load data based on our team type
    const config = content[ourTeamType] || {};
    updatedFormData.header = config.header || formData.header || {};
    updatedFormData.team = config.team || formData.team || [];
    updatedFormData.departments = config.departments || formData.departments || [];
    updatedFormData.statement = config.statement || formData.statement || {};
    updatedFormData.cta = config.cta || formData.cta || {};

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

    if (field === "ourTeamType" && onUpdate) {
      onUpdate({ type: value });
    }
  };

  // Team management for ourTeam1, ourTeam2, ourTeam3
  const addTeamMember = () => {
    const currentTeam = formData.team || [];
    let newMember;
    
    if (formData.ourTeamType === "ourTeam1") {
      newMember = {
        name: "New Member",
        role: "Role",
        bio: "Member bio",
        image: "NM",
        gradient: "from-blue-500 to-cyan-500",
        social: { linkedin: "#", twitter: "#" }
      };
    } else if (formData.ourTeamType === "ourTeam2") {
      newMember = {
        name: "New Member",
        role: "Role",
        expertise: "Expertise area",
        image: "NM",
        gradient: "from-cyan-500 to-blue-500",
        social: {
          linkedin: "#",
          email: "#"
        }
      };
    } else if (formData.ourTeamType === "ourTeam3") {
      newMember = {
        name: "New Member",
        role: "Role",
        bio: "Member bio",
        image: "NM",
        gradient: "from-indigo-500 to-purple-500",
        social: { linkedin: "#", twitter: "#" }
      };
    }
    
    if (newMember) {
      handleChange("team", [...currentTeam, newMember]);
    }
  };

  const removeTeamMember = (index) => {
    const updatedTeam = formData.team.filter((_, i) => i !== index);
    handleChange("team", updatedTeam);
  };

  const updateTeamMember = (index, field, value) => {
    const updatedTeam = formData.team.map((member, i) => 
      i === index ? { ...member, [field]: value } : member
    );
    handleChange("team", updatedTeam);
  };

  const updateTeamMemberSocial = (index, socialField, value) => {
    const updatedTeam = formData.team.map((member, i) => 
      i === index 
        ? { ...member, social: { ...member.social, [socialField]: value } }
        : member
    );
    handleChange("team", updatedTeam);
  };

  // Departments management for ourTeam4
  const addDepartment = () => {
    const currentDepartments = formData.departments || [];
    const newDepartment = {
      name: "New Department",
      members: [
        { name: "New Member", role: "Role", image: "NM", gradient: "from-blue-500 to-cyan-500" }
      ]
    };
    handleChange("departments", [...currentDepartments, newDepartment]);
  };

  const removeDepartment = (index) => {
    const updatedDepartments = formData.departments.filter((_, i) => i !== index);
    handleChange("departments", updatedDepartments);
  };

  const updateDepartment = (index, field, value) => {
    const updatedDepartments = formData.departments.map((dept, i) => 
      i === index ? { ...dept, [field]: value } : dept
    );
    handleChange("departments", updatedDepartments);
  };

  const addDepartmentMember = (departmentIndex) => {
    const updatedDepartments = formData.departments.map((dept, i) => 
      i === departmentIndex 
        ? { ...dept, members: [...(dept.members || []), { name: "New Member", role: "Role", image: "NM", gradient: "from-blue-500 to-cyan-500" }] }
        : dept
    );
    handleChange("departments", updatedDepartments);
  };

  const removeDepartmentMember = (departmentIndex, memberIndex) => {
    const updatedDepartments = formData.departments.map((dept, i) => 
      i === departmentIndex 
        ? { ...dept, members: dept.members.filter((_, mI) => mI !== memberIndex) }
        : dept
    );
    handleChange("departments", updatedDepartments);
  };

  const updateDepartmentMember = (departmentIndex, memberIndex, field, value) => {
    const updatedDepartments = formData.departments.map((dept, i) => 
      i === departmentIndex 
        ? { ...dept, members: dept.members.map((member, mI) => mI === memberIndex ? { ...member, [field]: value } : member) }
        : dept
    );
    handleChange("departments", updatedDepartments);
  };

  const updateDepartmentMemberSocial = (departmentIndex, memberIndex, socialField, value) => {
    const updatedDepartments = formData.departments.map((dept, i) => 
      i === departmentIndex 
        ? { ...dept, members: dept.members.map((member, mI) => 
            mI === memberIndex 
              ? { ...member, social: { ...member.social, [socialField]: value } }
              : member
          ) }
        : dept
    );
    handleChange("departments", updatedDepartments);
  };

  // Validation function
  const validateForm = () => {
    const errors = [];
    
    if (!formData.header?.title || (typeof formData.header.title === 'string' && formData.header.title.trim() === "") || (typeof formData.header.title === 'object' && (!formData.header.title.line1 || formData.header.title.line1.trim() === ""))) {
      errors.push("Header title is required");
    }

    if (formData.ourTeamType === "ourTeam1" || formData.ourTeamType === "ourTeam2" || formData.ourTeamType === "ourTeam3") {
      if (!formData.team || formData.team.length === 0) {
        errors.push("At least one team member is required");
      } else {
        formData.team.forEach((member, index) => {
          if (!member.name || member.name.trim() === "") {
            errors.push(`Team member ${index + 1}: Name is required`);
          }
          if (!member.role || member.role.trim() === "") {
            errors.push(`Team member ${index + 1}: Role is required`);
          }
        });
      }
    } else if (formData.ourTeamType === "ourTeam4") {
      if (!formData.departments || formData.departments.length === 0) {
        errors.push("At least one department is required");
      } else {
        formData.departments.forEach((dept, deptIndex) => {
          if (!dept.name || dept.name.trim() === "") {
            errors.push(`Department ${deptIndex + 1}: Name is required`);
          }
          if (!dept.members || dept.members.length === 0) {
            errors.push(`Department ${deptIndex + 1}: At least one member is required`);
          } else {
            dept.members.forEach((member, memberIndex) => {
              if (!member.name || member.name.trim() === "") {
                errors.push(`Department ${deptIndex + 1}, Member ${memberIndex + 1}: Name is required`);
              }
            });
          }
        });
      }
    }
    
    return errors;
  };

  const handleSave = () => {
    if (!onSave) return;
    
    if (!hasChanges) {
      console.log("OurTeamSectionForm: No changes detected, skipping save");
      return;
    }

    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }
    
    setValidationErrors([]);

    const { ourTeamType, header, team, departments, statement, cta } = formData;

    // Structure data according to our-team.js component expectations
    const ourTeamData = {
      component: "our-team",
      type: ourTeamType,
      content: {}
    };

    // Add type-specific data to content
    ourTeamData.content[ourTeamType] = {
      header: header || {}
    };

    if (ourTeamType === "ourTeam1" || ourTeamType === "ourTeam2" || ourTeamType === "ourTeam3") {
      ourTeamData.content[ourTeamType].team = team || [];
    }

    if (ourTeamType === "ourTeam2" || ourTeamType === "ourTeam4") {
      if (statement) {
        ourTeamData.content[ourTeamType].statement = statement;
      }
    }

    if (ourTeamType === "ourTeam3") {
      if (cta) {
        ourTeamData.content[ourTeamType].cta = cta;
      }
    }

    if (ourTeamType === "ourTeam4") {
      ourTeamData.content[ourTeamType].departments = departments || [];
    }

    console.log("Saving our team content:", ourTeamData);

    onSave(ourTeamData);
    setHasChanges(false);
  };

  const currentOurTeamConfig = OUR_TEAM_TYPE_CONFIG[formData.ourTeamType] || OUR_TEAM_TYPE_CONFIG.ourTeam1;

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

      {/* Our Team Type Selector */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Our Team Type <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.ourTeamType}
          onChange={(e) => handleChange("ourTeamType", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {Object.entries(OUR_TEAM_TYPE_CONFIG).map(([key, config]) => (
            <option key={key} value={key}>
              {config.label}
            </option>
          ))}
        </select>
        {currentOurTeamConfig.description && (
          <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">ℹ️ Our Team Type Info:</p>
            <p className="text-sm text-blue-700">{currentOurTeamConfig.description}</p>
          </div>
        )}
      </div>

      {/* Header Configuration */}
      <div className="border rounded-lg p-4 bg-gray-50">
        <label className="block text-sm font-medium text-gray-700 mb-3">Header Configuration</label>
        <div className="space-y-3">
          {(formData.ourTeamType === "ourTeam2" || formData.ourTeamType === "ourTeam4") && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">Badge Text</label>
                <input
                  type="text"
                  value={formData.header?.badge?.text || ""}
                  onChange={(e) => handleChange("header", {
                    ...formData.header,
                    badge: {
                      ...formData.header?.badge,
                      text: e.target.value
                    }
                  })}
                  placeholder="Our Experts"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Badge Icon</label>
                <input
                  type="text"
                  value={formData.header?.badge?.icon || ""}
                  onChange={(e) => handleChange("header", {
                    ...formData.header,
                    badge: {
                      ...formData.header?.badge,
                      icon: e.target.value
                    }
                  })}
                  placeholder="Sparkles"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
          {(formData.ourTeamType === "ourTeam1" || formData.ourTeamType === "ourTeam3") && (
            <div>
              <label className="block text-xs text-gray-600 mb-1">Badge</label>
              <input
                type="text"
                value={formData.header?.badge || ""}
                onChange={(e) => handleChange("header", {
                  ...formData.header,
                  badge: e.target.value
                })}
                placeholder="Meet the Team"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          {formData.ourTeamType === "ourTeam1" && (
            <div className="grid grid-cols-2 gap-3">
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
                  placeholder="Our"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Title Accent</label>
                <input
                  type="text"
                  value={formData.header?.titleAccent || ""}
                  onChange={(e) => handleChange("header", {
                    ...formData.header,
                    titleAccent: e.target.value
                  })}
                  placeholder="Leadership Team"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
          {(formData.ourTeamType === "ourTeam2" || formData.ourTeamType === "ourTeam3" || formData.ourTeamType === "ourTeam4") && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-600 mb-1">
                  Title Line 1 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.header?.title?.line1 || ""}
                  onChange={(e) => handleChange("header", {
                    ...formData.header,
                    title: {
                      ...formData.header?.title,
                      line1: e.target.value
                    }
                  })}
                  placeholder="The People Behind"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-600 mb-1">Title Line 2</label>
                <input
                  type="text"
                  value={formData.header?.title?.line2 || ""}
                  onChange={(e) => handleChange("header", {
                    ...formData.header,
                    title: {
                      ...formData.header?.title,
                      line2: e.target.value
                    }
                  })}
                  placeholder="The Innovation"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          )}
          <div>
            <label className="block text-xs text-gray-600 mb-1">Description</label>
            <textarea
              value={formData.header?.description || ""}
              onChange={(e) => handleChange("header", {
                ...formData.header,
                description: e.target.value
              })}
              placeholder="Description text"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      </div>

      {/* Team Members for ourTeam1, ourTeam2, ourTeam3 */}
      {(formData.ourTeamType === "ourTeam1" || formData.ourTeamType === "ourTeam2" || formData.ourTeamType === "ourTeam3") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Team Members ({formData.team?.length || 0})
            </label>
            <button
              type="button"
              onClick={addTeamMember}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Member
            </button>
          </div>
          {formData.team?.map((member, index) => (
            <div key={index} className="mb-3 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium">Member {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeTeamMember(index)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={member.name || ""}
                      onChange={(e) => updateTeamMember(index, "name", e.target.value)}
                      placeholder="Sarah Chen"
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">
                      Role <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={member.role || ""}
                      onChange={(e) => updateTeamMember(index, "role", e.target.value)}
                      placeholder="Chief Executive Officer"
                      required
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                {(formData.ourTeamType === "ourTeam1" || formData.ourTeamType === "ourTeam3") && (
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Bio</label>
                    <textarea
                      value={member.bio || ""}
                      onChange={(e) => updateTeamMember(index, "bio", e.target.value)}
                      placeholder="Member bio"
                      rows={2}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
                {formData.ourTeamType === "ourTeam2" && (
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Expertise</label>
                    <input
                      type="text"
                      value={member.expertise || ""}
                      onChange={(e) => updateTeamMember(index, "expertise", e.target.value)}
                      placeholder="Product Strategy & Innovation"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Image (Initials)</label>
                    <input
                      type="text"
                      value={member.image || ""}
                      onChange={(e) => updateTeamMember(index, "image", e.target.value)}
                      placeholder="SC"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1">Gradient</label>
                    <input
                      type="text"
                      value={member.gradient || ""}
                      onChange={(e) => updateTeamMember(index, "gradient", e.target.value)}
                      placeholder="from-blue-500 to-cyan-500"
                      className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Social Links</label>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">LinkedIn</label>
                      <input
                        type="text"
                        value={member.social?.linkedin || ""}
                        onChange={(e) => updateTeamMemberSocial(index, "linkedin", e.target.value)}
                        placeholder="#"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Twitter</label>
                      <input
                        type="text"
                        value={member.social?.twitter || ""}
                        onChange={(e) => updateTeamMemberSocial(index, "twitter", e.target.value)}
                        placeholder="#"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">GitHub</label>
                      <input
                        type="text"
                        value={member.social?.github || ""}
                        onChange={(e) => updateTeamMemberSocial(index, "github", e.target.value)}
                        placeholder="#"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Email</label>
                      <input
                        type="text"
                        value={member.social?.email || ""}
                        onChange={(e) => updateTeamMemberSocial(index, "email", e.target.value)}
                        placeholder="#"
                        className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Departments for ourTeam4 */}
      {formData.ourTeamType === "ourTeam4" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-medium text-gray-700">
              Departments ({formData.departments?.length || 0})
            </label>
            <button
              type="button"
              onClick={addDepartment}
              className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              <Plus className="h-4 w-4" />
              Add Department
            </button>
          </div>
          {formData.departments?.map((dept, deptIndex) => (
            <div key={deptIndex} className="mb-4 p-3 border rounded bg-white">
              <div className="flex justify-between items-center mb-3">
                <span className="text-sm font-medium">Department {deptIndex + 1}</span>
                <button
                  type="button"
                  onClick={() => removeDepartment(deptIndex)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">
                    Department Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={dept.name || ""}
                    onChange={(e) => updateDepartment(deptIndex, "name", e.target.value)}
                    placeholder="Leadership"
                    required
                    className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-xs text-gray-600">
                      Members ({dept.members?.length || 0})
                    </label>
                    <button
                      type="button"
                      onClick={() => addDepartmentMember(deptIndex)}
                      className="text-xs text-blue-600 hover:text-blue-700"
                    >
                      <Plus className="h-3 w-3 inline" /> Add
                    </button>
                  </div>
                  {dept.members?.map((member, memberIndex) => (
                    <div key={memberIndex} className="mb-2 p-2 border rounded bg-gray-50">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium">Member {memberIndex + 1}</span>
                        <button
                          type="button"
                          onClick={() => removeDepartmentMember(deptIndex, memberIndex)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            value={member.name || ""}
                            onChange={(e) => updateDepartmentMember(deptIndex, memberIndex, "name", e.target.value)}
                            placeholder="Jennifer Adams"
                            required
                            className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Role</label>
                          <input
                            type="text"
                            value={member.role || ""}
                            onChange={(e) => updateDepartmentMember(deptIndex, memberIndex, "role", e.target.value)}
                            placeholder="CEO"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Image (Initials)</label>
                          <input
                            type="text"
                            value={member.image || ""}
                            onChange={(e) => updateDepartmentMember(deptIndex, memberIndex, "image", e.target.value)}
                            placeholder="JA"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Gradient</label>
                          <input
                            type="text"
                            value={member.gradient || ""}
                            onChange={(e) => updateDepartmentMember(deptIndex, memberIndex, "gradient", e.target.value)}
                            placeholder="from-blue-500 to-cyan-500"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div className="mt-2 grid grid-cols-2 gap-2">
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">LinkedIn</label>
                          <input
                            type="text"
                            value={member.social?.linkedin || ""}
                            onChange={(e) => updateDepartmentMemberSocial(deptIndex, memberIndex, "linkedin", e.target.value)}
                            placeholder="#"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <label className="block text-xs text-gray-500 mb-1">Email</label>
                          <input
                            type="text"
                            value={member.social?.email || ""}
                            onChange={(e) => updateDepartmentMemberSocial(deptIndex, memberIndex, "email", e.target.value)}
                            placeholder="#"
                            className="w-full px-2 py-1 border border-gray-300 rounded text-xs focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Statement for ourTeam2, ourTeam4 */}
      {(formData.ourTeamType === "ourTeam2" || formData.ourTeamType === "ourTeam4") && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">Statement</label>
          <div>
            <label className="block text-xs text-gray-600 mb-1">Text</label>
            <textarea
              value={formData.statement?.text || ""}
              onChange={(e) => handleChange("statement", {
                ...formData.statement,
                text: e.target.value
              })}
              placeholder="Statement text"
              rows={2}
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      )}

      {/* CTA for ourTeam3 */}
      {formData.ourTeamType === "ourTeam3" && (
        <div className="border rounded-lg p-4 bg-gray-50">
          <label className="block text-sm font-medium text-gray-700 mb-3">CTA Section</label>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.cta?.enabled || false}
                onChange={(e) => handleChange("cta", {
                  ...formData.cta,
                  enabled: e.target.checked
                })}
                className="rounded"
              />
              <label className="text-sm text-gray-700">Enable CTA</label>
            </div>
            {formData.cta?.enabled && (
              <>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Text</label>
                  <textarea
                    value={formData.cta?.text || ""}
                    onChange={(e) => handleChange("cta", {
                      ...formData.cta,
                      text: e.target.value
                    })}
                    placeholder="CTA text"
                    rows={2}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Button Text</label>
                  <input
                    type="text"
                    value={formData.cta?.buttonText || ""}
                    onChange={(e) => handleChange("cta", {
                      ...formData.cta,
                      buttonText: e.target.value
                    })}
                    placeholder="See Open Roles"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </>
            )}
          </div>
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

