
import React from 'react';
import { EXPERIENCES } from '../data';

const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-16">Career Journey</h2>
        <div className="space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <div key={idx} className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-slate-200">
              <div className="absolute left-[-5px] top-1 w-[11px] h-[11px] bg-blue-600 rounded-full border-2 border-white"></div>
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{exp.role}</h3>
                  <p className="text-blue-600 font-medium">{exp.company}</p>
                </div>
                <div className="text-slate-400 text-sm font-medium mt-1 md:mt-0">{exp.period}</div>
              </div>
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex gap-3 text-slate-600 text-sm">
                    <span className="text-blue-500 mt-1.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
