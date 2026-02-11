
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              InsightPro
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">About</a>
              <a href="#skills" className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Skills</a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
              <a href="#experience" className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">Experience</a>
              <a href="mailto:alex@insightpro.com" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-md">Hire Me</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
