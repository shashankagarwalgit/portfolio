import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { portfolioData } from './data/portfolioData';
import LiquidBackground from './components/LiquidBackground';
import GlassNavbar from './components/GlassNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
      const scrollY = window.scrollY;

      if (scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 150;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollY >= offsetTop && scrollY < offsetBottom) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-[#030305] text-slate-100 selection:bg-white/20 selection:text-white overflow-x-hidden">
      {/* Apple Titanium / Silver Liquid Ambient Background */}
      <LiquidBackground />

      {/* Floating macOS Dock Style Glass Navigation */}
      <GlassNavbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        personalData={portfolioData.personal}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        <HeroSection
          personalData={portfolioData.personal}
          stats={portfolioData.stats}
          scrollToSection={scrollToSection}
        />

        <AboutSection
          personalData={portfolioData.personal}
          education={portfolioData.education}
          skills={portfolioData.skills}
        />

        <ExperienceSection
          experienceData={portfolioData.experience}
        />

        <SkillsSection
          skillsData={portfolioData.skills}
        />

        <ContactSection
          personalData={portfolioData.personal}
        />
      </main>

      {/* Floating Scroll Back to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-2xl text-white flex items-center justify-center shadow-[0_10px_25px_rgba(0,0,0,0.7)] hover:scale-110 transition-all"
          aria-label="Scroll to Top"
        >
          <KeyboardArrowUpIcon />
        </motion.button>
      )}
    </div>
  );
};

export default App;
