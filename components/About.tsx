
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/seed/profile/800/800" alt="Alex Profile" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 p-6 bg-white rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
              <blockquote className="text-slate-600 italic">
                "Alex consistently finds the story <br /> hidden within the noise of data."
              </blockquote>
              <p className="text-blue-600 font-semibold mt-2">— Former CTO</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The Analyst Behind the Numbers</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am a Business Analyst with a passion for efficiency. I don't just gather requirements; I interrogate the status quo to find better, faster, and more cost-effective ways of doing business.
              </p>
              <p>
                My background in finance and technology allows me to speak both 'Corporate' and 'Developer', ensuring that high-level business goals are translated into executable technical specs without losing anything in translation.
              </p>
              <p>
                Whether it's optimizing a legacy supply chain workflow or designing a predictive analytics dashboard from scratch, I focus on the outcome: **measurable business value.**
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span> Problem Solver
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-indigo-600 rounded-full"></span> Data Viz Expert
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                <span className="w-2 h-2 bg-green-600 rounded-full"></span> Agile Champion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
