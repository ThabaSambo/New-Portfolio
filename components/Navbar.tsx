
import React from 'react';
import { PERSONAL_INFO } from '../data';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-extrabold text-slate-800 tracking-tight">
              Portfolio
            </span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-6">
              <a href="#projects" className="text-slate-500 hover:text-slate-900 px-3 py-2 text-sm font-semibold transition-colors">Projects</a>
              <a href="#skills" className="text-slate-500 hover:text-slate-900 px-3 py-2 text-sm font-semibold transition-colors">Skills</a>
              <a href="#experience" className="text-slate-500 hover:text-slate-900 px-3 py-2 text-sm font-semibold transition-colors">Experience</a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-blue-600 px-3 py-2 text-sm font-bold border-2 border-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition-all">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
