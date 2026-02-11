
import React, { useEffect } from 'react';

interface CompetenciesPageProps {
  onBack: () => void;
}

const CompetenciesPage: React.FC<CompetenciesPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const competencyGroups = [
    {
      title: "Business Analysis",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
      ),
      items: [
        "Requirements Elicitation & Documentation",
        "Functional & Non-Functional Requirements",
        "Business Process Modeling (BPMN, Flowcharts)",
        "Stakeholder Analysis & Management",
        "Use Cases & User Stories",
        "BRD, FRD, SRS & FRS Development",
        "Gap Analysis & Impact Assessment",
        "UAT Support & Validation"
      ]
    },
    {
      title: "Systems Analysis",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600"><rect width="16" height="12" x="4" y="4" rx="2"/><path d="M12 16v4"/><path d="M8 20h8"/></svg>
      ),
      items: [
        "System Requirements Analysis",
        "System Architecture & Design Support",
        "API & Systems Integration",
        "Database & Data Flow Analysis",
        "UML Diagrams (Use Case, Sequence, Activity)",
        "Technical Documentation",
        "System Testing & Troubleshooting",
        "Application Lifecycle Management"
      ]
    },
    {
      title: "Data & Reporting",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="M12 20v-6"/><path d="M6 20V10"/><path d="M18 20V4"/></svg>
      ),
      items: [
        "Data Analysis & Interpretation",
        "SQL (Basic–Intermediate)",
        "Excel (Advanced)",
        "Power BI / BI Tools",
        "KPI & Performance Reporting"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-600"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"/></svg>
      ),
      items: [
        "Jira, Confluence, Trello",
        "MS Visio, Lucidchart, Draw.io",
        "Microsoft Office Suite",
        "Postman (API Testing)",
        "Git (Basic)"
      ]
    },
    {
      title: "Professional & Soft Skills",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-600"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
      ),
      items: [
        "Analytical & Critical Thinking",
        "Problem Solving",
        "Communication & Presentation",
        "Stakeholder Engagement",
        "Time & Project Management",
        "Team Collaboration",
        "Attention to Detail",
        "Adaptability & Continuous Learning"
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
            Core <span className="text-blue-600 dark:text-blue-400">Competencies</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Detailed professional breakdown of my capabilities in Systems and Business Analysis, ensuring end-to-end solution delivery.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {competencyGroups.map((group, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-2xl flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  {group.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {group.title}
                </h3>
              </div>
              
              <ul className="space-y-4 flex-grow">
                {group.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start gap-3 group/item">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-500 shrink-0"></div>
                    <span className="text-[14px] text-slate-600 dark:text-slate-400 leading-snug group-hover/item:text-slate-900 dark:group-hover/item:text-slate-200 transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Call to Action Summary */}
        <div className="mt-16 p-10 bg-slate-900 rounded-[3rem] text-center text-white relative overflow-hidden transition-colors">
           <div className="absolute top-0 right-0 p-10 opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
           </div>
           <h3 className="text-2xl font-bold mb-4">Strategic Value Add</h3>
           <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
             "My goal is to simplify complex systems through structured analysis, bridging the gap between stakeholder vision and technical reality."
           </p>
        </div>
      </div>
    </div>
  );
};

export default CompetenciesPage;
