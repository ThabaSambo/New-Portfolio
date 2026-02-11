
import React, { useEffect } from 'react';
import { PROJECTS } from '../data';

interface ProjectsPageProps {
  onBack: () => void;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 animate-in fade-in duration-500 transition-colors">
      {/* Header Section */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xs uppercase tracking-widest mb-8 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </button>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Detailed <span className="text-blue-600 dark:text-blue-400">Case Studies</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            A comprehensive deep-dive into the systems I've analyzed, built, and documented. Focusing on logic, data flow, and strategic impact.
          </p>
        </div>
      </div>

      {/* Projects List - Full Width Case Studies */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-20">
          {PROJECTS.map((project) => (
            <div key={project.id} className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest rounded-lg mb-4">
                    {project.category}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
                    {project.title}
                  </h2>
                </div>
                
                {/* Metrics Box */}
                <div className="flex gap-4">
                  {project.metrics.map((metric, i) => (
                    <div key={i} className="text-right">
                      <div className="text-2xl font-black text-blue-600 dark:text-blue-400">{metric.value}%</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter leading-none">{metric.name}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-slate-50 dark:border-slate-800 pt-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Technical Overview</h4>
                    <p className="text-[15px] leading-relaxed text-slate-600 dark:text-slate-400">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-2">Business Impact</h4>
                    <p className="text-[15px] leading-relaxed text-slate-800 dark:text-slate-200 font-medium italic">
                      {project.impact}
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-3">System Architecture & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="p-6 bg-blue-50/50 dark:bg-blue-900/20 rounded-2xl border border-blue-100 dark:border-blue-800">
                     <p className="text-[13px] text-blue-700 dark:text-blue-300 leading-relaxed font-medium">
                       Designed to ensure scalability and high data integrity within the {project.category.toLowerCase()} framework.
                     </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
