
import React from 'react';
import { PERSONAL_INFO } from '../data';

const ContactSection: React.FC = () => {
  const navigateToContact = () => {
    window.location.hash = 'contact-page';
  };

  const contactMethods = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      ),
      label: 'Location',
      value: PERSONAL_INFO.location,
      link: null,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      ),
      label: 'Phone',
      value: PERSONAL_INFO.phone,
      link: `tel:${PERSONAL_INFO.phone.replace(/\s/g, '')}`,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      ),
      label: 'Email',
      value: PERSONAL_INFO.email,
      link: null, // Lead them to the page instead
      onClick: navigateToContact
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
      ),
      label: 'LinkedIn',
      value: PERSONAL_INFO.linkedin,
      link: `https://${PERSONAL_INFO.linkedin}`,
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
      ),
      label: 'GitHub',
      value: PERSONAL_INFO.github,
      link: `https://${PERSONAL_INFO.github}`,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Contact Information</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto italic">
            "Bridging communication between systems and people."
          </p>
          <p className="text-slate-500 dark:text-slate-500 mt-2 text-sm">
            Reach out via any of the platforms below to discuss potential collaborations or roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactMethods.map((method, idx) => (
            <div 
              key={idx} 
              className="glass-card bg-white dark:bg-slate-900 p-6 rounded-2xl border border-white dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              onClick={method.onClick}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  {method.icon}
                </div>
                <div className="flex-1 overflow-hidden">
                  <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                    {method.label}
                  </h4>
                  {method.link ? (
                    <a 
                      href={method.link} 
                      target={method.link.startsWith('http') ? "_blank" : undefined}
                      rel={method.link.startsWith('http') ? "noopener noreferrer" : undefined}
                      className="text-slate-800 dark:text-slate-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors block truncate"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-slate-800 dark:text-slate-200 font-semibold truncate">
                      {method.value}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white dark:bg-slate-900 p-10 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-slate-800 text-center relative overflow-hidden transition-colors">
          <div className="absolute top-0 right-0 p-4 opacity-5 dark:opacity-10 text-slate-900 dark:text-white">
             <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Direct Inquiry</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md mx-auto">I respond to all professional emails within 24 hours. Looking forward to hearing from you!</p>
          <button 
            onClick={navigateToContact}
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-10 py-4 rounded-2xl font-bold hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-300 dark:hover:shadow-blue-900 transition-all active:scale-95"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            Go to Contact Form
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
