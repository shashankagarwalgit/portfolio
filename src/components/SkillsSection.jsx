import React from 'react';
import { motion } from 'framer-motion';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const SkillsSection = ({ skillsData }) => {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-xl">
              Technical Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 text-gradient-apple">
              Skills & Engineering Matrix
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Dual-domain technical expertise across industrial chemical & nuclear systems and modern software development.
            </p>
          </motion.div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Chemical & Nuclear Engineering Box */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass-card p-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-lg">
                <PrecisionManufacturingIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Chemical & Nuclear Engineering</h3>
                <p className="text-xs text-slate-400 font-medium">NPCIL, Reliance RIL & IOCL Systems</p>
              </div>
            </div>

            <div className="space-y-5">
              {skillsData.engineering.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-white text-xs font-bold">{skill.level}%</span>
                  </div>
                  {/* Liquid Glass Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden backdrop-blur-md">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-white via-slate-200 to-slate-400 shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Web Software Box */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="liquid-glass-card p-8"
          >
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-lg">
                <DeveloperModeIcon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Full Stack Web Development</h3>
                <p className="text-xs text-slate-400 font-medium">React, JavaScript, UI/UX & Cloud</p>
              </div>
            </div>

            <div className="space-y-5">
              {skillsData.webDevelopment.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-slate-200">{skill.name}</span>
                    <span className="text-white text-xs font-bold">{skill.level}%</span>
                  </div>
                  {/* Liquid Glass Progress Bar */}
                  <div className="w-full h-2 rounded-full bg-white/5 border border-white/10 overflow-hidden backdrop-blur-md">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-slate-300 via-white to-slate-200 shadow-[0_0_12px_rgba(255,255,255,0.5)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
