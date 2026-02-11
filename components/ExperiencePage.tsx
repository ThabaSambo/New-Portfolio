
import React, { useEffect } from 'react';
import { EXPERIENCES } from '../data';

interface ExperiencePageProps {
  onBack: () => void;
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({ onBack }) => {
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
            Professional <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            A comprehensive record of my roles, responsibilities, and key achievements in the field of Systems and Business Analysis.
          </p>
        </div>
      </div>

      {/* Experience List */}
      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-12 before:absolute before:left-0 before:top-4 before:bottom-0 before:w-1 before:bg-slate-100 dark:before:bg-slate-800">
              {/* Timeline Marker */}
              <div className="absolute left-[-10px] top-2 w-6 h-6 bg-white dark:bg-slate-950 border-4 border-blue-600 dark:border-blue-500 rounded-full shadow-sm z-10 transition-colors"></div>
              
              <div className="mb-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                  <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight leading-none">
                    {exp.role}
                  </h2>
                  <span className="inline-block px-4 py-1.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold rounded-full border border-blue-100 dark:border-blue-800 transition-colors">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-400 dark:text-slate-500">
                  {exp.company}
                </h3>
              </div>

              <div className="bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] p-8 shadow-sm hover:shadow-md transition-all">
                <ul className="space-y-4">
                  {exp.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-4 group">
                      <span className="mt-2 text-blue-600 dark:text-blue-400 font-black text-xs opacity-40 dark:opacity-60 group-hover:opacity-100 transition-opacity">0{pIdx + 1}</span>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-[15px] group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">
                        {point}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
