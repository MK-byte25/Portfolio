'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MapPin, 
  Briefcase, 
  Calendar, 
  Code, 
  Terminal, 
  ExternalLink 
} from 'lucide-react';
import DioramaCanvas from '@/components/DioramaCanvas';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILLS } from '@/data/portfolio';

export default function SplitDashboard() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col lg:flex-row font-sans selection:bg-violet-500/30">
      
      {/* LEFT COLUMN: Sticky Sidebar */}
      <aside className="w-full lg:w-[400px] xl:w-[450px] lg:h-screen lg:sticky lg:top-0 border-r border-zinc-800/50 bg-zinc-950/50 backdrop-blur-xl flex flex-col p-6 lg:p-8 gap-8 z-20 shadow-2xl">
        
        {/* 3D Diorama Widget */}
        <div className="h-[250px] sm:h-[300px] w-full rounded-2xl overflow-hidden border border-zinc-800/80 shadow-[0_0_30px_rgba(0,0,0,0.5)] relative shrink-0">
          <DioramaCanvas />
        </div>

        {/* Profile Info */}
        <div className="flex flex-col flex-1 justify-between gap-6">
          <div>
            <h1 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-zinc-400 font-medium flex items-center gap-2 mb-2">
              <Briefcase size={16} className="text-violet-400" /> Full Stack Developer
            </p>
            <p className="text-zinc-400 font-medium flex items-center gap-2">
              <MapPin size={16} className="text-emerald-400" /> {PERSONAL_INFO.education.location}
            </p>
            
            {/* Status Badge */}
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-emerald-400 text-sm font-bold tracking-wide uppercase">Available for Hire</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-violet-500/50 hover:text-violet-400 transition-all shadow-sm">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-violet-500/50 hover:text-violet-400 transition-all shadow-sm">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 hover:border-violet-500/50 hover:text-violet-400 transition-all shadow-sm">
              <Mail size={20} />
            </a>
          </div>

          {/* Contact Button */}
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="w-full py-4 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-bold text-center transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-[0.98]"
          >
            Contact Me
          </a>
        </div>
      </aside>

      {/* RIGHT COLUMN: Scrolling Content */}
      <main className="flex-1 min-w-0 overflow-x-hidden p-6 lg:p-12 xl:p-16 space-y-32 bg-zinc-950">
        
        {/* Terminal Hero Section */}
        <section>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="rounded-2xl bg-[#0c0c0e] border border-zinc-800/80 p-6 lg:p-8 shadow-2xl font-mono text-sm sm:text-base overflow-hidden relative"
          >
            {/* Fake macOS window controls */}
            <div className="flex gap-2 mb-6">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
            </div>
            
            {/* Typing Animation Sequence */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.4 } }
              }}
              initial="hidden"
              animate="visible"
              className="space-y-6 text-zinc-300"
            >
              <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                <span className="text-violet-400 font-bold">maharshi@portfolio</span>:<span className="text-blue-400">~</span>$ cat intro.txt
              </motion.div>
              
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="pl-4 border-l-2 border-zinc-800 text-zinc-400 leading-relaxed">
                {PERSONAL_INFO.bio}
              </motion.div>
              
              <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                <span className="text-violet-400 font-bold">maharshi@portfolio</span>:<span className="text-blue-400">~</span>$ ./execute_skills.sh
              </motion.div>
              
              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }} className="text-emerald-400 flex items-center gap-2 font-bold">
                <Terminal size={16} /> 
                Initialization complete. Ready to build.
                <span className="animate-pulse inline-block w-2.5 h-5 bg-emerald-400 ml-1 translate-y-[2px]"></span>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Bento Grid */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
            <Code className="text-violet-500" size={32} /> Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8 }}
                className="group rounded-3xl bg-zinc-900/50 border border-zinc-800/80 p-8 hover:bg-zinc-900 hover:border-violet-500/50 transition-all flex flex-col h-full shadow-lg"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-white transition-colors bg-zinc-950 p-2 rounded-lg border border-zinc-800">
                        <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                    )}
                    {project.live && project.live !== "#" && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-emerald-400 transition-colors bg-zinc-950 p-2 rounded-lg border border-zinc-800">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8 flex-1">
                  {project.description[0]}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map(tech => (
                    <span key={tech} className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-bold text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Experience Section */}
        <section className="grid grid-cols-1 2xl:grid-cols-2 gap-16">
          
          {/* Experience Timeline */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Calendar className="text-violet-500" size={32} /> Experience
            </h2>
            <div className="space-y-10 border-l-2 border-zinc-800/80 ml-3 pl-8 py-2">
              {EXPERIENCE.map((exp, i) => (
                <motion.div 
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  
                  <h3 className="font-bold text-white text-xl">{exp.role}</h3>
                  <h4 className="text-violet-400 font-bold mt-1 mb-2">{exp.company}</h4>
                  <p className="text-xs text-zinc-500 mb-4 flex items-center gap-2 uppercase tracking-wider font-bold">
                     {exp.date} &bull; {exp.location}
                  </p>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {exp.description[0]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-10 flex items-center gap-3">
              <Terminal className="text-emerald-500" size={32} /> Tech Stack
            </h2>
            <div className="space-y-6">
              {SKILLS.map((skillGroup, i) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-900/50 border border-zinc-800/80 rounded-2xl p-6"
                >
                  <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map(skill => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-zinc-950 border border-zinc-800/80 text-zinc-300 font-medium rounded-xl text-sm hover:border-emerald-500/50 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </section>

      </main>
    </div>
  );
}
