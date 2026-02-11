
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { PROJECTS } from '../data';

const ProjectGallery: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Case Studies</h2>
            <p className="mt-2 text-slate-600">Selected works demonstrating end-to-end analytical capability.</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">All</button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Strategy</button>
            <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50">Operations</button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
              <div className="h-48 relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-blue-700 text-xs font-bold rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 tracking-widest">Impact Visualization</h4>
                  <div className="h-32 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={project.metrics}>
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10 }} />
                        <Tooltip 
                          cursor={{ fill: 'transparent' }}
                          contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                          {project.metrics.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 0 ? '#94a3b8' : '#2563eb'} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, idx) => (
                    <span key={idx} className="px-2 py-1 bg-slate-100 text-slate-600 text-[10px] font-bold rounded uppercase">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 rounded-2xl">
                  <div className="text-xs font-bold text-blue-700 uppercase mb-1">Key Impact</div>
                  <div className="text-sm text-blue-900 font-medium leading-tight">{project.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
