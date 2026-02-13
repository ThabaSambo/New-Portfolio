
import React from 'react';
import { PERSONAL_INFO } from '../data';

const Hero: React.FC = () => {
  // EDIT THIS LINE: Replace the URL below with your own image link or a Base64 string
  const profileImageUrl = "https://media.licdn.com/dms/image/v2/D4D03AQEBvo1HSfnZfg/profile-displayphoto-shrink_400_400/B4DZQ8KBfMGgAg-/0/1736176051596?e=1772668800&v=beta&t=9JIR0ZffXf9HOaq2Yh53gKiaYMO391QowDcQ76jppiI"; 

  return (
    <section className="bg-white dark:bg-slate-950 pt-12 pb-20 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        {/* Main Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-12 tracking-tight">
          {PERSONAL_INFO.name} Systems & Business Analyst Portfolio
        </h1>

        {/* Profile Content */}
        <div className="flex flex-col md:flex-row gap-12 items-start">
          {/* Left: Profile Photo */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="w-72 h-72 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden border-8 border-slate-50 dark:border-slate-900 shadow-2xl relative group transition-colors">
               <img 
                 src={profileImageUrl} 
                 alt={`${PERSONAL_INFO.name} Professional Portrait`}
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                 onError={(e) => {
                   // Fallback if image fails to load
                   (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Thaba+Sambo&background=0D8ABC&color=fff&size=512";
                 }}
               />
               <div className="absolute inset-0 bg-slate-900/10 dark:bg-transparent group-hover:bg-transparent transition-colors"></div>
            </div>
          </div>

          {/* Right: Bio & Contact */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Hi, I'm {PERSONAL_INFO.name.split(' ')[0]}
            </h2>

            <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed text-[15px]">
              <p className="text-xl text-slate-800 dark:text-slate-100 font-semibold leading-snug">
                I am a results-driven <strong className="text-blue-600 dark:text-blue-400">{PERSONAL_INFO.role}</strong> with over <strong>{PERSONAL_INFO.experience}</strong> of experience bridging the gap between complex technical systems and strategic business goals.
              </p>
              
              <div className="space-y-4">
                <p>
                  I specialize in developing clear and precise <strong>Functional Requirements Specifications (FRS)</strong> and translating business needs into detailed technical documentation such as <strong>SRS and BRD</strong>. Using <strong>UML and BPMN modeling</strong>, I design robust, scalable system architectures that turn ideas into practical solutions.
                </p>
                <p>
                  My expertise spans high-impact industries including <strong>CRM, ERP, and Fintech</strong>, where I consistently deliver solutions that drive efficiency and innovation. I thrive in collaborative environments—working closely with stakeholders, developers, and leadership teams to ensure seamless system integration and successful digital transformation.
                </p>
              </div>

              {/* Contact List */}
              <div className="pt-6 space-y-3 border-t border-slate-100 dark:border-slate-800 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-5 text-center">📍</span>
                  <span className="text-sm"><strong>Location:</strong> {PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-5 text-center">📞</span>
                  <span className="text-sm"><strong>Phone:</strong> {PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-5 text-center">📧</span>
                  <span className="text-sm"><strong>Email:</strong> <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{PERSONAL_INFO.email}</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-5 text-center">🔗</span>
                  <span className="text-sm"><strong>LinkedIn:</strong> <a href={`https://${PERSONAL_INFO.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{PERSONAL_INFO.linkedin}</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-slate-400 w-5 text-center">💻</span>
                  <span className="text-sm"><strong>GitHub:</strong> <a href={`https://${PERSONAL_INFO.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{PERSONAL_INFO.github}</a></span>
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
