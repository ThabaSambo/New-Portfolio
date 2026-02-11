
import React from 'react';
import { PERSONAL_INFO } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-xl font-bold text-white mb-4 block">
              Portfolio
            </span>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
              Bridging the gap between business needs and technical systems with data-driven analysis and strategic architecture.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-slate-500">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm font-medium">
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-widest text-slate-500">Connect</h4>
            <div className="flex gap-4">
              <a href={`https://www.${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-xs font-medium">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Systems & Business Analyst Portfolio.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
