
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import SkillsPage from './components/SkillsPage';
import ExperiencePage from './components/ExperiencePage';
import CompetenciesPage from './components/CompetenciesPage';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'projects-page' | 'contact-page' | 'skills-page' | 'experience-page' | 'competencies-page'>('home');
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved as 'light' | 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  // Handle dark mode class application
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Handle back/forward buttons or hash links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#all-projects') {
        setView('projects-page');
        window.scrollTo(0, 0);
      } else if (hash === '#contact-page') {
        setView('contact-page');
        window.scrollTo(0, 0);
      } else if (hash === '#detailed-skills') {
        setView('skills-page');
        window.scrollTo(0, 0);
      } else if (hash === '#core-competencies') {
        setView('competencies-page');
        window.scrollTo(0, 0);
      } else if (hash === '#detailed-experience') {
        setView('experience-page');
        window.scrollTo(0, 0);
      } else {
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => {
    window.location.hash = '';
    setView('home');
  };

  const navigateToProjects = () => {
    window.location.hash = 'all-projects';
    setView('projects-page');
  };

  const navigateToContact = () => {
    window.location.hash = 'contact-page';
    setView('contact-page');
  };

  const navigateToSkills = () => {
    window.location.hash = 'detailed-skills';
    setView('skills-page');
  };

  const navigateToCompetencies = () => {
    window.location.hash = 'core-competencies';
    setView('competencies-page');
  };

  const navigateToExperience = () => {
    window.location.hash = 'detailed-experience';
    setView('experience-page');
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Navbar 
        onNavigateHome={navigateToHome} 
        onNavigateProjects={navigateToProjects} 
        onNavigateContact={navigateToContact}
        onNavigateSkills={navigateToSkills}
        onNavigateCompetencies={navigateToCompetencies}
        onNavigateExperience={navigateToExperience}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main className="pt-16">
        {view === 'home' && (
          <>
            <Hero />
            <ProjectGallery />
            <SkillsSection />
            <ExperienceTimeline />
            <EducationSection />
            <ContactSection />
          </>
        )}
        {view === 'projects-page' && (
          <ProjectsPage onBack={navigateToHome} />
        )}
        {view === 'contact-page' && (
          <ContactPage onBack={navigateToHome} />
        )}
        {view === 'skills-page' && (
          <SkillsPage onBack={navigateToHome} />
        )}
        {view === 'competencies-page' && (
          <CompetenciesPage onBack={navigateToHome} />
        )}
        {view === 'experience-page' && (
          <ExperiencePage onBack={navigateToHome} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
