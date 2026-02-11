
import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';

const Hero: React.FC = () => {
  const [isReadMore, setIsReadMore] = useState(false);

  // High-quality professional graduation/corporate placeholder matching the requested image style
  const profileImageUrl = "https://img.freepik.com/free-photo/paper-analysis_1098-15678.jpg?semt=ais_user_personalization&w=740&q=80"; 

  return (
    <section className="bg-white pt-12 pb-20">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 tracking-tight">
          Systems & Business Analyst Portfolio
        </h1>

        {/* Profile Content */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Profile Photo */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="w-72 h-72 bg-slate-100 rounded-full overflow-hidden border-8 border-slate-50 shadow-2xl relative group">
               <img 
                 src={profileImageUrl} 
                 alt={`${PERSONAL_INFO.name} Professional Portrait`}
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>

          {/* Right: Bio & Contact */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Hi, I'm {PERSONAL_INFO.name}
            </h2>

            <button 
              onClick={() => setIsReadMore(!isReadMore)}
              className="flex items-center gap-2 text-amber-600 font-semibold text-sm mb-4 hover:text-amber-700 transition-colors"
            >
              <span className={`transform transition-transform ${isReadMore ? 'rotate-90' : ''}`}>▶</span>
              Read me
            </button>

            <div className="space-y-4 text-slate-700 leading-relaxed text-[15px]">
              <p>
                A specialized <strong className="text-slate-900">{PERSONAL_INFO.role}</strong> with <strong>{PERSONAL_INFO.experience}</strong> of experience. I bridge the critical gap between complex technical systems and strategic business objectives.
              </p>
              
              <div className={`${isReadMore ? 'block' : 'hidden'} animate-in fade-in duration-300`}>
                <p className="mb-4">
                  Expert in translating business requirements into technical system specifications (SRS, BRD) and designing robust architectures through UML and BPMN modeling.
                </p>
                <p>
                  Focused on delivering high-impact software solutions across CRM, ERP, and Fintech domains. Proven track record in managing stakeholders, technical documentation, and steering cross-functional teams toward efficient system integration and digital transformation.
                </p>
              </div>

              {/* Contact List */}
              <div className="pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">📍</span>
                  <span className="text-sm"><strong>Location:</strong> {PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">📞</span>
                  <span className="text-sm"><strong>Phone:</strong> {PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">📧</span>
                  <span className="text-sm"><strong>Email:</strong> {PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400">🔗</span>
                  <span className="text-sm"><strong>LinkedIn:</strong> <a href="#" className="text-blue-600 hover:underline">{PERSONAL_INFO.linkedin}</a></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
