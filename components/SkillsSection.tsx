
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '../data';

const SkillsSection: React.FC = () => {
  const technicalData = SKILLS.filter(s => s.category === 'Technical').map(s => ({ subject: s.name, A: s.level }));
  const domainData = SKILLS.filter(s => s.category === 'Domain').map(s => ({ subject: s.name, A: s.level }));

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900">Core Competencies</h2>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto">A balanced mix of technical prowess and strategic domain expertise.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h3 className="text-xl font-bold mb-6 text-center text-blue-600">Technical Stack</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={technicalData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <Radar name="Level" dataKey="A" stroke="#2563eb" fill="#3b82f6" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
          <h3 className="text-xl font-bold mb-6 text-center text-indigo-600">Domain Expertise</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={domainData}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <Radar name="Level" dataKey="A" stroke="#4f46e5" fill="#6366f1" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {SKILLS.filter(s => s.category === 'Soft').map((skill, idx) => (
          <div key={idx} className="p-4 bg-white border border-slate-200 rounded-xl text-center">
            <div className="font-semibold text-slate-800">{skill.name}</div>
            <div className="mt-2 w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full transition-all duration-1000" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
