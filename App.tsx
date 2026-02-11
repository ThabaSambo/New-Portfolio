
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGallery from './components/ProjectGallery';
import SkillsSection from './components/SkillsSection';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <ProjectGallery />
        <SkillsSection />
        <ExperienceTimeline />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
