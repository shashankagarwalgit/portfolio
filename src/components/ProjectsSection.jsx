import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import StarIcon from '@mui/icons-material/Star';

const ProjectsSection = ({ projectsData, personalData }) => {
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Web Platform', 'Developer Tool', 'Portfolio App'];

  const filteredProjects = filterCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === filterCategory);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/10 px-4 py-1.5 rounded-full border border-cyan-400/20">
              Featured Innovations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 text-gradient-apple">
              Web Applications & Open Source
            </h2>
            <p className="text-slate-300 mt-4 text-base">
              A curated selection of live, production-grade applications built for speed, performance, and user engagement.
            </p>
          </motion.div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                filterCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] border border-cyan-400/40'
                  : 'bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-7 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Background ambient glow on hover */}
                <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-cyan-500/20 blur-3xl group-hover:bg-sky-400/30 transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Card Header: Featured Star & Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-300">
                      {project.category}
                    </span>
                    {project.featured && (
                      <span className="flex items-center space-x-1 text-xs font-semibold text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                        <StarIcon className="w-3.5 h-3.5" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Project Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-semibold text-sky-400 mt-1 mb-3">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/10">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-slate-300 border border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Buttons */}
                  <div className="flex items-center space-x-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button-primary px-4 py-2 text-xs flex-1 flex items-center justify-center space-x-2"
                    >
                      <span>Visit Live Site</span>
                      <LaunchIcon className="w-3.5 h-3.5" />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all shrink-0"
                      aria-label="GitHub Repository"
                    >
                      <GitHubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;
