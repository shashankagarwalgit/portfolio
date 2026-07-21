import React from 'react';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShieldIcon from '@mui/icons-material/Shield';

const HeroSection = ({ personalData, stats, scrollToSection }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col space-y-6"
          >
            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm <span className="text-gradient-apple">{personalData.name}</span>
              </h1>
              <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-slate-300">
                {personalData.title}
              </h2>
            </div>

            {/* Summary Bio */}
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
              {personalData.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollToSection('experience')}
                className="glass-button-primary px-7 py-3.5 text-base flex items-center space-x-2 group"
              >
                <span>View Experience</span>
                <ArrowForwardIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="glass-button-secondary px-7 py-3.5 text-base"
              >
                Contact Me
              </button>

              {/* Social Links */}
              <div className="flex items-center space-x-2 ml-auto sm:ml-0 pt-2 sm:pt-0">
                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
                >
                  <GitHubIcon />
                </a>
                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/15 flex items-center justify-center text-slate-300 hover:text-white transition-all hover:scale-105"
                >
                  <LinkedInIcon />
                </a>
              </div>
            </div>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.1 }}
                  className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl flex flex-col justify-center"
                >
                  <span className="text-xl sm:text-2xl font-bold text-white text-gradient-silver">
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-slate-200 mt-0.5">
                    {stat.label}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {stat.sub}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Hero Avatar Apple Glass Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group">
              {/* Subtle silver backdrop ambient glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-white/20 via-slate-400/10 to-slate-200/20 opacity-30 blur-2xl group-hover:opacity-50 transition duration-700" />
              
              {/* Apple Glass Frame Container */}
              <div className="relative p-3 rounded-3xl bg-white/5 backdrop-blur-3xl border border-white/15 shadow-[0_30px_70px_rgba(0,0,0,0.8)] overflow-hidden">
                <img
                  src="https://cdn.shashankag.workers.dev/0:/profile.jpg"
                  alt={personalData.name}
                  className="w-72 h-80 sm:w-80 sm:h-96 object-cover rounded-2xl filter saturate-[1.05] contrast-[1.02] transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://cdn.shashankag.co.in/0:/profile.jpg";
                  }}
                />

                {/* Glass Badge Floating Over Avatar */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#090a0f]/85 backdrop-blur-2xl border border-white/20 shadow-2xl flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white">
                      <ShieldIcon />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">NPCIL Trainee</p>
                      <p className="text-[11px] text-slate-400">Scientific Officer Grade 'C'</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
