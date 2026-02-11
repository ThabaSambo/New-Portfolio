
import React from 'react';
import { PROJECTS } from '../data';

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex justify-between items-start mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4">Core Projects</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              A collection of systems analysis and technical implementations focused on operational efficiency and business value.
            </p>
          </div>
          
          <div className="hidden sm:flex items-center gap-4 text-slate-400 mt-2">
             <div className="w-10 h-10 bg-slate-50 dark:bg-slate-900 rounded-xl flex items-center justify-center border border-slate-100 dark:border-slate-800 transition-colors">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M2 12h20"/></svg>
             </div>
          </div>
        </div>

        {/* Project Grid - Text-focused cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group flex flex-col p-8 rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-xl hover:shadow-blue-50 dark:hover:shadow-blue-900/10 transition-all duration-300">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-[0.2em] px-2 py-1 bg-blue-50 dark:bg-blue-900/30 rounded-md">
                  {project.category}
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-3 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tools.slice(0, 4).map((tool, i) => (
                  <span key={i} className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded-full bg-white dark:bg-slate-950 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
