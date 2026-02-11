
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '../data';

const SkillsSection: React.FC = () => {
  const technicalData = SKILLS.filter(s => s.category === 'Technical').map(s => ({ subject: s.name, A: s.level }));
  const domainData = SKILLS.filter(s => s.category === 'Domain').map(s => ({ subject: s.name, A: s.level }));

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Core Competencies</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">A balanced mix of technical prowess and strategic domain expertise.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 transition-colors">
          <h3 className="text-xl font-bold mb-6 text-center text-blue-600 dark:text-blue-400">Technical Stack</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={technicalData}>
                <PolarGrid stroke="#94a3b8" strokeOpacity={0.2} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Radar name="Level" dataKey="A" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 transition-colors">
          <h3 className="text-xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400">Domain Expertise</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={domainData}>
                <PolarGrid stroke="#94a3b8" strokeOpacity={0.2} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                <Radar name="Level" dataKey="A" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.5} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {SKILLS.filter(s => s.category === 'Soft').map((skill, idx) => (
          <div key={idx} className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-center transition-colors">
            <div className="font-semibold text-slate-800 dark:text-slate-200">{skill.name}</div>
            <div className="mt-2 w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
