
import React from 'react';
import { EDUCATION, CERTIFICATIONS } from '../data';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Education & Qualifications</h2>
          <div className="w-12 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Academic Background */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
              Academic Background
            </h3>
            {EDUCATION.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all">
                <h4 className="font-bold text-slate-900 dark:text-white mb-1">{edu.degree}</h4>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">{edu.institution}</p>
              </div>
            ))}
          </div>

          {/* Licenses & Certifications */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 flex items-center gap-3 mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              Certifications & Licenses
            </h3>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert, index) => (
                <div key={index} className="flex items-center gap-4 bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                  <div className="w-10 h-10 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  </div>
                  <span className="font-bold text-slate-800 dark:text-slate-100">{cert}</span>
                </div>
              ))}
            </div>
            
            <div className="p-6 bg-blue-600 rounded-3xl text-white shadow-xl shadow-blue-500/20 mt-10">
              <p className="text-sm font-medium leading-relaxed">
                Committed to lifelong learning and staying updated with the latest trends in Systems Analysis and Information Technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
