
import React, { useEffect, useState } from 'react';
import { PERSONAL_INFO } from '../data';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 animate-in fade-in duration-500 transition-colors">
      {/* Header */}
      <div className="bg-slate-50 dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800 py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 font-bold text-xs uppercase tracking-widest mb-8 transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform"><path d="m15 18-6-6 6-6"/></svg>
            Back to Home
          </button>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            Contact <span className="text-blue-600 dark:text-blue-400">Thaba</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            I'm currently open to new roles and projects. Click the button below to reach out directly to my personal email.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Main Direct Email Card */}
          <div className="bg-white dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 shadow-2xl rounded-[3rem] p-10 md:p-12 text-center flex flex-col items-center justify-center transition-colors">
            <div className="w-20 h-20 bg-blue-600 dark:bg-blue-500 rounded-3xl flex items-center justify-center text-white text-3xl mb-8 shadow-xl shadow-blue-200 dark:shadow-blue-900/40 animate-bounce-slow">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">Email Me Directly</h2>
            <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-xs leading-relaxed">
              Open your default mail application to send an inquiry to <span className="font-bold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.email}</span>
            </p>

            <a 
              href={`mailto:${PERSONAL_INFO.email}?subject=Portfolio Inquiry`}
              className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 dark:bg-blue-500 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all active:scale-95 shadow-xl shadow-blue-500/20"
            >
              Send Email Now
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
            </a>

            <div className="mt-8 pt-8 border-t border-slate-50 dark:border-slate-800 w-full flex flex-col gap-4">
              <button 
                onClick={copyEmail}
                className={`text-sm font-bold uppercase tracking-widest transition-colors ${copied ? 'text-green-600 dark:text-green-400' : 'text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400'}`}
              >
                {copied ? '✓ Email Copied to Clipboard' : '📄 Copy Email Address'}
              </button>
            </div>
          </div>

          {/* Alternative Channels */}
          <div className="space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] p-8 border border-slate-100 dark:border-slate-800 transition-colors">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Other Platforms</h3>
              
              <div className="space-y-4">
                <a 
                  href={`https://${PERSONAL_INFO.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-xl flex items-center justify-center group-hover:bg-blue-600 dark:group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">LinkedIn</p>
                    <p className="font-bold text-slate-800 dark:text-slate-200">Professional Profile</p>
                  </div>
                </a>

                <a 
                  href={`tel:${PERSONAL_INFO.phone}`} 
                  className="flex items-center gap-4 p-4 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-500 transition-all group"
                >
                  <div className="w-12 h-12 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-xl flex items-center justify-center group-hover:bg-green-600 dark:group-hover:bg-green-600 group-hover:text-white transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">Phone / WhatsApp</p>
                    <p className="font-bold text-slate-800 dark:text-slate-200">{PERSONAL_INFO.phone}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-slate-800 rounded-[2.5rem] p-8 text-white transition-colors">
              <h3 className="font-bold mb-2">Availability</h3>
              <p className="text-slate-400 dark:text-slate-400 text-sm leading-relaxed">
                Currently available for full-time roles in South Africa or remote positions globally. 
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;
