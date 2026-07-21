import React, { useState } from 'react';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import SendIcon from '@mui/icons-material/Send';
import LanguageIcon from '@mui/icons-material/Language';

const ContactSection = ({ personalData }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-300 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-xl">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 text-gradient-apple">
              Let's Connect
            </h2>
            <p className="text-slate-400 mt-4 text-base">
              Whether you have an engineering inquiry, software project, or professional collaboration — feel free to reach out.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Info & Quick Copy Box */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 liquid-glass-card p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-8">
                Feel free to email me directly or connect through professional networks.
              </p>

              {/* Quick Copy Email Box */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-8 backdrop-blur-xl">
                <p className="text-xs font-semibold text-slate-400 mb-1">Direct Email Address:</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-200 select-all truncate">
                    {personalData.email}
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="ml-2 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-all shrink-0"
                    title="Copy Email"
                  >
                    {copied ? <CheckIcon className="w-4 h-4 text-emerald-400" /> : <ContentCopyIcon className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Connect Online:</p>
                
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <EmailIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Send Direct Email</span>
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <LinkedInIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">LinkedIn Profile</span>
                </a>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <GitHubIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">GitHub Repositories</span>
                </a>

                <a
                  href={personalData.domain}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white transition-all group"
                >
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-white flex items-center justify-center group-hover:scale-105 transition-transform">
                    <LanguageIcon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">Personal Domain (shashankag.co.in)</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form Box */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 liquid-glass-card p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-slate-400 text-sm mb-6">Fill in your details below and I'll get back to you promptly.</p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-white/5 border border-white/20 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-white/10 text-white mx-auto flex items-center justify-center">
                  <CheckIcon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                <p className="text-sm text-slate-300">Thank you for reaching out. I will respond to your message shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-sm backdrop-blur-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-sm backdrop-blur-xl"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Your Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Hello Shashank, I'd like to discuss..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-all text-sm backdrop-blur-xl resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full glass-button-primary py-3.5 text-sm flex items-center justify-center space-x-2 font-semibold"
                >
                  <span>Send Message</span>
                  <SendIcon className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>

        </div>

        {/* Footer info: strictly © 2026 Shashank Agarwal. */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center text-sm font-medium text-slate-400">
          <p>© 2026 Shashank Agarwal.</p>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;
