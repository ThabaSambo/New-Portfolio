
import React from 'react';
import { PERSONAL_INFO } from '../data';

interface NavbarProps {
  onNavigateHome: () => void;
  onNavigateProjects: () => void;
  onNavigateContact: () => void;
  onNavigateSkills: () => void;
  onNavigateExperience: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onNavigateHome, 
  onNavigateProjects, 
  onNavigateContact, 
  onNavigateSkills,
  onNavigateExperience,
  theme,
  onToggleTheme
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={onNavigateHome}>
            <span className="text-xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
              Portfolio
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <button 
                onClick={onNavigateProjects}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-semibold transition-colors"
              >
                Projects
              </button>

              <button 
                onClick={onNavigateSkills}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-semibold transition-colors"
              >
                Skills
              </button>
              
              <button 
                onClick={onNavigateExperience}
                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 text-sm font-semibold transition-colors"
              >
                Experience
              </button>
              
              <div className="h-6 w-px bg-slate-200 dark:bg-slate-800 mx-1"></div>

              {/* Theme Toggle Button */}
              <button
                onClick={onToggleTheme}
                aria-label="Toggle dark mode"
                className="p-2 rounded-xl text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-white transition-all active:scale-90"
              >
                {theme === 'light' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
                )}
              </button>

              <button 
                onClick={onNavigateContact}
                className="text-blue-600 dark:text-blue-400 px-5 py-2 text-sm font-bold border-2 border-blue-600 dark:border-blue-500 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-500 hover:text-white dark:hover:text-white transition-all shadow-sm active:scale-95"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Mobile Placeholder */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-lg"
            >
              {theme === 'light' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              )}
            </button>
            <button 
              onClick={onNavigateSkills}
              className="text-slate-500 dark:text-slate-400 p-2 text-xs font-bold border border-slate-200 dark:border-slate-800 rounded-lg"
            >
              Skills
            </button>
            <button 
              onClick={onNavigateContact}
              className="text-blue-600 dark:text-blue-400 p-2 text-xs font-bold border border-blue-600 dark:border-blue-500 rounded-lg"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
