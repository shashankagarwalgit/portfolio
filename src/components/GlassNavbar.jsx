import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

const GlassNavbar = ({ activeSection, scrollToSection, personalData }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 pb-2 transition-all duration-500">
        <motion.nav
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-6xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500 relative overflow-hidden ${
            scrolled
              ? 'bg-[#06060a]/80 backdrop-blur-3xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)]'
              : 'bg-white/5 backdrop-blur-2xl border border-white/12'
          }`}
        >
          {/* Liquid Top Gloss Sheen Reflection */}
          <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none rounded-t-full" />

          {/* Logo */}
          <div
            onClick={() => scrollToSection('home')}
            className="cursor-pointer flex items-center space-x-2.5 group relative z-10"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-white via-slate-200 to-slate-400 flex items-center justify-center text-slate-950 font-bold text-base shadow-[0_0_15px_rgba(255,255,255,0.5)] group-hover:scale-105 transition-transform duration-300">
              S
            </div>
            <span className="font-bold text-base tracking-tight text-white group-hover:text-slate-300 transition-colors duration-300">
              {personalData.name}<span className="text-slate-400">.</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 bg-white/5 p-1 rounded-full border border-white/10 relative z-10 backdrop-blur-xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-slate-950 font-bold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      className="absolute inset-0 bg-gradient-to-r from-white via-slate-100 to-slate-200 rounded-full border border-white/60 shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </button>
              );
            })}
          </div>

          {/* Right Action CTA */}
          <div className="hidden md:flex items-center space-x-3 relative z-10">
            <button
              onClick={() => scrollToSection('contact')}
              className="glass-button-primary px-5 py-2 text-sm flex items-center space-x-2"
            >
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors relative z-10"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-4 top-24 z-40 p-6 rounded-3xl bg-[#06060a]/95 backdrop-blur-3xl border border-white/20 shadow-[0_30px_70px_rgba(0,0,0,0.95)] md:hidden"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-5 py-3 rounded-2xl text-base font-medium transition-all ${
                    activeSection === link.id
                      ? 'bg-white text-slate-950 font-bold shadow-lg'
                      : 'text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    scrollToSection('contact');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full glass-button-primary py-3 text-center text-sm font-semibold"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GlassNavbar;
