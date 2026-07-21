import React from 'react';
import { motion } from 'framer-motion';
import WorkIcon from '@mui/icons-material/Work';
import CodeIcon from '@mui/icons-material/Code';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ExperienceSection = ({ experienceData }) => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-xl">
              Career Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 text-gradient-apple">
              Engineering Experience
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Hands-on practical experience in Nuclear Power Systems (NPCIL), Gas Cracking Operations (Reliance Industries Ltd.), Petroleum Refining (IOCL), and Software Architecture.
            </p>
          </motion.div>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-white/12 ml-4 md:ml-32 space-y-12">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative pl-8 md:pl-12 group"
            >
              {/* Floating Timeline Icon Dot */}
              <div className="absolute -left-[19px] top-1.5 w-10 h-10 rounded-full bg-[#060609] border-2 border-white flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.4)] group-hover:scale-110 transition-transform duration-300">
                {exp.icon === 'Work' ? <WorkIcon className="w-4 h-4" /> : <CodeIcon className="w-4 h-4" />}
              </div>

              {/* Date / Period Pill (Desktop Left Offset) */}
              <div className="hidden md:block absolute -left-36 top-2 text-right w-28">
                <span className="text-xs font-bold text-slate-200 block">{exp.period}</span>
                <span className="text-[11px] text-slate-400 font-medium block">{exp.type}</span>
              </div>

              {/* Main Liquid Glass Experience Card */}
              <div className="liquid-glass-card p-6 sm:p-8">
                
                {/* Mobile Date Header */}
                <div className="md:hidden flex items-center space-x-2 text-xs font-medium text-slate-300 mb-3">
                  <CalendarTodayIcon className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                  <span className="text-slate-500">•</span>
                  <span>{exp.type}</span>
                </div>

                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 pb-4 border-b border-white/10 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-slate-200 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-slate-300 mt-1 font-medium">
                      <BusinessIcon className="w-4 h-4 text-slate-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1.5 text-xs text-slate-300 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 w-fit">
                    <LocationOnIcon className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Key Points */}
                <div className="space-y-2 mb-6">
                  {exp.keyPoints.map((point, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300 hover:border-white/30 hover:text-white transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
