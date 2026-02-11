
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSection from './components/SkillsSection';
import ProjectGallery from './components/ProjectGallery';
import ExperienceTimeline from './components/ExperienceTimeline';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen relative">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <About />
        <SkillsSection />
        <ProjectGallery />
        <ExperienceTimeline />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;
