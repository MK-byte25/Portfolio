'use client';

import React from 'react';
import { Space_Grotesk, Geist } from 'next/font/google';
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
import AcidSquares from '@/components/AcidSquares';
import ParticleText from '@/components/ParticleText';
import StrokeText from '@/components/StrokeText';
import TextType from '@/components/TextType';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import { PERSONAL_INFO, PROJECTS, EXPERIENCE, SKILLS } from '@/data/portfolio';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });
const geist = Geist({ subsets: ['latin'] });

export default function SplitDashboard() {
  return (
    <div className="min-h-screen w-full bg-black text-zinc-100 flex flex-col items-center font-sans selection:bg-violet-500/30 relative z-10 pointer-events-none">
      
      {/* Acid Squares Background */}
      <div className="fixed inset-0 w-full h-full z-[-1] pointer-events-auto">
        <AcidSquares 
          key="dark-blue-theme-darker-cyan"
          color1="#000000"
          color2="#0c4a6e"
          color3="#0284c7"
          speed={0.5}
          exposure={2000}
          mouseInteraction={true}
          opacity={1.0}
        />
      </div>

      {/* HERO SECTION */}
      <section className="w-full min-h-[60vh] flex flex-col items-center justify-center relative z-10 pt-20">
        <div className="w-full h-[40vh] flex items-center justify-center px-4">
          <ParticleText 
            text="MAHARSHI KARPATIYA" 
            color="#ffffff" 
            highlightColor="#3b82f6" 
            fontSize="12vw" 
            fontWeight={700}
            fontFamily="Geist"
            particleSize={1.5}
            density={5}
            glow={true}
            className="w-full h-full pointer-events-auto"
          />
        </div>

        <div className="flex flex-col items-center gap-6 -mt-10 sm:-mt-16 relative z-20">
          <div className="flex flex-row items-center justify-center w-full max-w-4xl mx-auto gap-8 mt-6">
            <div className="w-1/2 max-w-[350px]">
              <StrokeText
                text="Software & AI Engineer"
                strokeColor="#10b981"
                fillColor="#a1a1aa"
                fontSize={28}
                strokeWidth={1}
                letterSpacing={2}
                trigger="mount"
                fillMode="wipe"
                className={spaceGrotesk.className}
              />
            </div>
            <span className="text-zinc-600">•</span>
            <div className="w-1/2 max-w-[350px]">
              <StrokeText
                text="Gandhinagar, Gujarat"
                strokeColor="#10b981"
                fillColor="#a1a1aa"
                fontSize={28}
                strokeWidth={1}
                letterSpacing={2}
                trigger="mount"
                fillMode="wipe"
                className={spaceGrotesk.className}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 pointer-events-auto">
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
        </div>
      </section>

      {/* MAIN CONTENT STACK */}
      <main className="w-full max-w-5xl px-6 lg:px-12 flex flex-col items-center mt-8 sm:mt-16 space-y-24 relative z-10 pb-32">
        
        {/* Macbook Scroll Section */}
        <div className="relative w-full flex flex-col items-center justify-center overflow-hidden">
          <MacbookScroll>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="bg-[#000000]/80 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50 relative overflow-hidden w-full h-full rounded-lg flex flex-col font-mono text-xs sm:text-sm text-zinc-300"
            >
              <div className="bg-[#181818] relative overflow-hidden w-full h-full rounded-lg flex flex-col font-sans text-xs text-[#cccccc] shadow-2xl border border-[#333333]">
                {/* Title Bar */}
                <div className="flex items-center justify-between px-3 h-7 shrink-0 bg-[#181818]">
                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <div className="hidden sm:flex gap-4 text-[10px] text-[#cccccc]">
                      <span className="hover:text-white cursor-pointer">File</span>
                      <span className="hover:text-white cursor-pointer">Edit</span>
                      <span className="hover:text-white cursor-pointer">Selection</span>
                      <span className="hover:text-white cursor-pointer">View</span>
                      <span className="hover:text-white cursor-pointer">Go</span>
                      <span className="hover:text-white cursor-pointer">Run</span>
                      <span className="hover:text-white cursor-pointer">Terminal</span>
                      <span className="hover:text-white cursor-pointer">Help</span>
                    </div>
                  </div>
                  <div className="flex gap-2 text-[#cccccc] opacity-70">
                    <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" fill="none"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>
                  </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-1 overflow-hidden">
                  {/* Activity Bar */}
                  <div className="w-10 shrink-0 bg-[#181818] border-r border-[#2b2b2b] flex flex-col justify-between py-2 items-center">
                    <div className="flex flex-col gap-4">
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-white"><rect x="3" y="3" width="13" height="13" rx="1"/><rect x="8" y="8" width="13" height="13" rx="1"/></svg>
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-[#858585]"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-[#858585]"><circle cx="6" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="18" cy="12" r="3"/><path d="M6 9v3a3 3 0 0 0 3 3h6M15 9l3 3-3 3"/></svg>
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-[#858585]"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-[#858585]"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                    </div>
                    <div className="flex flex-col gap-4">
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-[#858585]"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
                      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none" className="text-[#858585]"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="w-36 shrink-0 bg-[#181818] flex flex-col border-r border-[#2b2b2b]">
                    <div className="px-3 py-2 text-[9px] tracking-widest text-[#cccccc] font-sans">EXPLORER</div>
                    <div className="flex flex-col font-mono text-[10px] text-[#cccccc]">
                      <div className="flex items-center gap-1 px-1 py-0.5 font-bold cursor-pointer hover:bg-[#2a2d2e] min-w-0">
                        <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" fill="none" className="shrink-0"><polyline points="6 9 12 15 18 9"/></svg>
                        <span className="truncate">my-resume</span>
                      </div>
                      
                      <div className="flex items-center gap-1 pl-3 py-0.5 cursor-pointer hover:bg-[#2a2d2e] min-w-0">
                        <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" fill="none" className="shrink-0"><polyline points="6 9 12 15 18 9"/></svg>
                        <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" fill="none" className="shrink-0"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                        <span className="truncate">assets</span>
                      </div>
                      
                      <div className="flex items-center gap-1 pl-6 py-0.5 cursor-pointer hover:bg-[#2a2d2e] text-[#cccccc] min-w-0">
                        <span className="text-[#519aba] shrink-0 text-[10px]">🖼</span>
                        <span className="truncate">profile.jpg</span>
                      </div>
                      
                      <div className="flex items-center gap-1 pl-3 py-0.5 cursor-pointer bg-[#37373d] text-white min-w-0">
                        <span className="text-[#858585] shrink-0 text-[10px]">📄</span>
                        <span className="truncate">intro.txt</span>
                      </div>

                      {["education", "skills", "projects", "experience", "leadership", "awards"].map((folder) => (
                        <div key={folder} className="flex items-center gap-1 pl-3 py-0.5 cursor-pointer hover:bg-[#2a2d2e] min-w-0">
                          <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" fill="none" className="shrink-0"><polyline points="9 18 15 12 9 6"/></svg>
                          <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" fill="none" className="shrink-0"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                          <span className="truncate">{folder}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Editor & Terminal Area */}
                  <div className="flex flex-col flex-1 bg-[#1e1e1e] min-w-0 overflow-hidden">
                    {/* Editor Tabs */}
                    <div className="flex bg-[#181818] h-7 shrink-0">
                      <div className="px-3 bg-[#1e1e1e] border-t-[1.5px] border-[#007acc] flex items-center gap-2 border-r border-[#2b2b2b] text-[#cccccc] cursor-pointer min-w-0">
                        <span className="text-[#858585] text-[10px] shrink-0">📄</span>
                        <span className="truncate text-[10px] font-mono">intro.txt</span>
                        <span className="ml-1 hover:bg-[#333333] rounded p-0.5 text-[#858585]">
                          <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        </span>
                      </div>
                      <div className="flex-1 flex justify-end items-center px-2 gap-2">
                        <svg viewBox="0 0 24 24" width="10" height="10" stroke="#cccccc" fill="none"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/></svg>
                        <svg viewBox="0 0 24 24" width="10" height="10" stroke="#cccccc" fill="none"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
                      </div>
                    </div>

                    {/* Editor Content */}
                    <div className="flex-1 px-3 py-2 overflow-hidden flex font-mono text-[10px] leading-relaxed text-[#d4d4d4]">
                      <div className="w-5 shrink-0 text-right pr-2 text-[#858585] select-none text-[10px]">
                        1
                      </div>
                      <div className="flex-1 whitespace-pre-wrap">
                        <TextType
                          text="Hello! I'm Maharshi Karpatiya, a third-year Computer Science student at Pandit Deendayal Energy University, Gandhinagar. I'm passionate about building scalable and user-centric applications, and I enjoy solving real-world problems with code. Currently, I'm focused on strengthening my skills in web development, artificial intelligence, and data structures and algorithms. I'm always eager to learn, collaborate, and take on new challenges."
                          startOnVisible={true}
                          loop={false}
                          typingSpeed={1}
                          showCursor={true}
                          cursorCharacter="|"
                        />
                      </div>
                    </div>

                    {/* Terminal */}
                    <div className="h-24 shrink-0 border-t border-[#2b2b2b] bg-[#1e1e1e] flex flex-col">
                      <div className="flex h-7 items-center justify-between px-3">
                        <div className="flex gap-4 text-[9px] font-sans tracking-wide text-[#858585]">
                          <span className="hover:text-[#cccccc] cursor-pointer hidden sm:block">PROBLEMS</span>
                          <span className="hover:text-[#cccccc] cursor-pointer hidden sm:block">OUTPUT</span>
                          <span className="hover:text-[#cccccc] cursor-pointer hidden md:block">DEBUG CONSOLE</span>
                          <span className="text-[#cccccc] border-b border-[#cccccc] h-7 flex items-center cursor-pointer">TERMINAL</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#858585]">
                          <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" fill="none"><path d="M12 5v14M5 12h14"/></svg>
                          <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" fill="none"><polyline points="6 9 12 15 18 9"/></svg>
                          <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" fill="none"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/></svg>
                          <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" fill="none"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                          <svg viewBox="0 0 24 24" width="10" height="10" stroke="currentColor" strokeWidth="2" fill="none"><path d="M18 6L6 18M6 6l12 12"/></svg>
                        </div>
                      </div>
                      <div className="flex-1 px-3 py-1 font-mono text-[10px] text-[#cccccc] overflow-hidden">
                        <div className="flex items-center gap-2">
                          <span className="text-[#cccccc] truncate">PS C:\Users\Maharshi\my-resume&gt; type intro.txt</span>
                        </div>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="text-[#cccccc]">PS C:\Users\Maharshi\my-resume&gt;</span>
                          <span className="w-1.5 h-3 bg-[#cccccc] animate-pulse"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </MacbookScroll>
        </div>

        {/* Projects Bento Grid */}
        <section className="w-full relative z-10 mt-24">
          <h2 className={`text-4xl font-bold text-white mb-10 flex items-center gap-4 ${geist.className}`}>
            <Code className="text-violet-500" size={36} /> Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group flex flex-col h-full pointer-events-auto bg-zinc-950/60 backdrop-blur-sm border border-white/5 rounded-xl p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-amber-900/20 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className={`text-2xl font-bold text-white group-hover:text-violet-400 transition-colors ${geist.className}`}>
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
                
                <p className={`text-sm text-zinc-400 leading-relaxed mb-8 flex-1 mt-2 ${spaceGrotesk.className}`}>
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
        <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Experience Timeline */}
          <div>
            <h2 className={`text-4xl font-bold text-white mb-10 flex items-center gap-4 ${geist.className}`}>
              <Calendar className="text-violet-500" size={36} /> Experience
            </h2>
            <div className="space-y-10 border-l-2 border-zinc-800/80 ml-3 pl-8 py-2">
              {EXPERIENCE.map((exp, i) => (
                <motion.div 
                  key={exp.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full bg-zinc-950 border-2 border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]"></div>
                  
                  <h3 className={`font-bold text-white text-xl ${geist.className}`}>{exp.role}</h3>
                  <h4 className="text-violet-400 font-bold mt-1 mb-2">{exp.company}</h4>
                  <p className="text-xs text-zinc-500 mb-4 flex items-center gap-2 uppercase tracking-wider font-bold">
                     {exp.date} &bull; {exp.location}
                  </p>
                  <p className={`text-sm text-zinc-400 leading-relaxed ${spaceGrotesk.className}`}>
                    {exp.description[0]}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills Matrix */}
          <div>
            <h2 className={`text-4xl font-bold text-white mb-10 flex items-center gap-4 ${geist.className}`}>
              <Terminal className="text-emerald-500" size={36} /> Tech Stack
            </h2>
            <div className="space-y-6">
              {SKILLS.map((skillGroup, i) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/80 rounded-2xl p-6"
                >
                  <h3 className={`text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4 ${geist.className}`}>
                    {skillGroup.category}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map(skill => (
                      <span 
                        key={skill} 
                        className={`px-4 py-2 bg-zinc-950 border border-zinc-800/80 text-zinc-300 font-medium rounded-xl text-sm hover:border-emerald-500/50 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all cursor-default pointer-events-auto ${spaceGrotesk.className}`}
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
