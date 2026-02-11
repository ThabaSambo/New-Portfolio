
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-50 rounded-full blur-3xl opacity-50 -ml-48 -mb-48"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-4">Senior Business Analyst</h2>
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Transforming Data Into <br />
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Actionable Strategies
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed">
          I bridge the gap between business needs and technical solutions through data-driven insights, 
          process optimization, and strategic requirements management.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#projects" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg shadow-lg hover:bg-blue-700 hover:-translate-y-1 transition-all">
            View My Case Studies
          </a>
          <a href="#about" className="px-8 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold text-lg hover:bg-slate-200 hover:-translate-y-1 transition-all">
            More About Me
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-blue-600">5+</div>
            <div className="text-slate-500 text-sm mt-1">Years Experience</div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-blue-600">20+</div>
            <div className="text-slate-500 text-sm mt-1">Projects Delivered</div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-blue-600">$10M+</div>
            <div className="text-slate-500 text-sm mt-1">Value Created</div>
          </div>
          <div className="p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
            <div className="text-3xl font-bold text-blue-600">98%</div>
            <div className="text-slate-500 text-sm mt-1">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
