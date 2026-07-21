import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const AboutSection = ({ personalData, education, skills }) => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10">
              Overview & Focus
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 text-gradient-apple">
              Nuclear Power Systems & Software Architecture
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Combining chemical engineering and nuclear power plant systems expertise with modern full-stack web software capabilities.
            </p>
          </motion.div>
        </div>

        {/* Tab Selection Controls */}
        <div className="flex justify-center mb-12">
          <div className="flex p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl">
            {[
              { id: 'all', label: 'Overview' },
              { id: 'engineering', label: 'Chemical & Nuclear' },
              { id: 'web', label: 'Web Software' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Card 1: Education & Foundation */}
          {(activeTab === 'all' || activeTab === 'engineering') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`glass-card p-8 flex flex-col justify-between ${
                activeTab === 'all' ? 'md:col-span-6' : 'md:col-span-12'
              }`}
            >
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-lg">
                    <SchoolIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Nuclear & Chemical Engineering</h3>
                    <p className="text-sm text-slate-400 font-medium">NPCIL Executive Trainee & B.Tech Degree</p>
                  </div>
                </div>

                {education.map((edu, idx) => (
                  <div key={idx} className="space-y-4">
                    <h4 className="text-lg font-semibold text-slate-200">{edu.degree}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{edu.description}</p>
                    
                    <div className="pt-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Key Focus Areas:</p>
                      <ul className="space-y-2">
                        {edu.highlights.map((item, i) => (
                          <li key={i} className="flex items-start space-x-2 text-sm text-slate-300">
                            <CheckCircleOutlineIcon className="w-4 h-4 text-white mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chemical Engineering Tech Tags */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {skills.engineering.slice(0, 5).map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* Card 2: Software Development & Digital Products */}
          {(activeTab === 'all' || activeTab === 'web') && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`glass-card p-8 flex flex-col justify-between ${
                activeTab === 'all' ? 'md:col-span-6' : 'md:col-span-12'
              }`}
            >
              <div>
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white shadow-lg">
                    <CodeIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Full Stack Software Development</h3>
                    <p className="text-sm text-slate-400 font-medium">React 19, JavaScript & Web Systems</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-slate-200">Modern Frontend & Web Ecosystems</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Proven experience designing responsive, high-performance web applications using modern JavaScript, React, state management, and modern CSS frameworks.
                  </p>

                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Core Development Strengths:</p>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2 text-sm text-slate-300">
                        <CheckCircleOutlineIcon className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span>Interactive React Application Architecture & State Management</span>
                      </li>
                      <li className="flex items-start space-x-2 text-sm text-slate-300">
                        <CheckCircleOutlineIcon className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span>Apple Glass & Translucent UI System Architecture</span>
                      </li>
                      <li className="flex items-start space-x-2 text-sm text-slate-300">
                        <CheckCircleOutlineIcon className="w-4 h-4 text-white mt-0.5 shrink-0" />
                        <span>REST APIs, Developer Tools & Bio Link Hubs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Web Dev Tech Tags */}
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                {skills.webDevelopment.slice(0, 6).map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
