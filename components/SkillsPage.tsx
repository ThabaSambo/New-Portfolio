
import React, { useEffect } from 'react';

interface SkillsPageProps {
  onBack: () => void;
}

const SkillsPage: React.FC<SkillsPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skillCategories = [
    {
      title: "Business Analysis",
      icon: "📊",
      skills: [
        "Requirements Gathering & Documentation",
        "Business Process Modelling (BPMN, Flowcharts)",
        "Stakeholder Analysis & Management",
        "Gap Analysis",
        "Use Case Development",
        "Functional & Non-Functional Requirements",
        "Change Management Support"
      ]
    },
    {
      title: "Systems Analysis & Technical Skills",
      icon: "💻",
      skills: [
        "System Analysis & Design",
        "SQL (Basic to Intermediate)",
        "Data Analysis & Reporting",
        "Power BI & Excel (Advanced)",
        "System Testing & UAT Support",
        "System Integration Support",
        "API & System Interfaces (Basic Understanding)"
      ]
    },
    {
      title: "Data & Reporting",
      icon: "📈",
      skills: [
        "Dashboard Development",
        "KPI Monitoring",
        "Data Validation & Quality Assurance",
        "Financial & Operational Reporting"
      ]
    },
    {
      title: "Documentation & Tools",
      icon: "📝",
      skills: [
        "BRD, FRD, and SRS Documentation",
        "User Stories & Acceptance Criteria",
        "MS Visio / Lucidchart",
        "Jira / Confluence (Basic)",
        "MS Office Suite"
      ]
    },
    {
      title: "Communication & Collaboration",
      icon: "🤝",
      skills: [
        "Stakeholder Communication",
        "Workshop & Meeting Facilitation",
        "Presentation Skills",
        "Cross-Functional Team Collaboration"
      ]
    },
    {
      title: "Problem-Solving & Delivery",
      icon: "🛠️",
      skills: [
        "Root Cause Analysis",
        "Process Improvement",
        "Agile & Waterfall Methodologies",
        "Risk & Impact Analysis",
        "Solution Evaluation"
      ]
    },
    {
      title: "Governance & Compliance",
      icon: "⚖️",
      skills: [
        "Data Privacy Awareness",
        "Regulatory Compliance (Finance & Banking)",
        "Audit Support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 animate-in fade-in duration-500 transition-colors">
      {/* Header Section */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xs uppercase tracking-widest mb-8 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </button>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Comprehensive <span className="text-blue-600 dark:text-blue-400">Expertise</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            A detailed breakdown of my professional toolkit across Business Analysis, Systems Design, and Data Governance.
          </p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-blue-50/50 dark:hover:shadow-blue-900/10 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-2xl shadow-inner transition-colors">
                  {cat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">{cat.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-start gap-3 group">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-blue-400 dark:bg-blue-500 group-hover:bg-blue-600 dark:group-hover:bg-blue-400 transition-colors"></span>
                    <span className="text-[15px] text-slate-600 dark:text-slate-400 leading-snug group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
