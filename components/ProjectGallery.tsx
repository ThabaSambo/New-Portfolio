
import React from 'react';
import { PROJECTS } from '../data';

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header with Utility Icons */}
        <div className="flex justify-between items-start mb-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-4">Featured Projects</h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Highlights of key projects where I improved systems, streamlined workflows, and delivered business value through smart, user-focused solutions.
            </p>
          </div>
          
          <div className="flex items-center gap-4 text-slate-400 mt-2">
             <button className="hover:text-blue-600 p-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
             </button>
             <button className="hover:text-blue-600 p-1">
               <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM21 21l-4.35-4.35"/></svg>
             </button>
             <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9h12M6 15h12"/></svg>
             </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="bg-slate-50 rounded-2xl overflow-hidden aspect-[4/3] mb-4 border border-slate-100 group-hover:shadow-md transition-shadow flex items-center justify-center p-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3">
                {project.category}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
