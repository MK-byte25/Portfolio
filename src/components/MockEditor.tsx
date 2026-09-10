import React from 'react';
import TextType from './TextType';

export default function MockEditor() {
  const codeText = [
    "class MaharshiKarpatiya(SoftwareEngineer, AIEngineer):\n\tdef __init__(self):\n\t\tsuper().__init__()\n\t\tself.location = 'Gandhinagar, Gujarat'\n\t\tself.education = 'CS Undergrad @ PDEU'\n\t\tself.tech_stack = ['Next.js', 'React', 'Python', 'PyTorch']\n\t\tself.cgpa = 8.81\n\n\tdef execute_daily_routine(self):\n\t\twhile True:\n\t\t\tself.code()\n\t\t\tself.train_models()\n\t\t\tself.debug() # (mostly this)\n\n# Compiling profile...\n# Status: Ready."
  ];

  return (
    <div className="bg-[#0d1117] w-full h-full p-4 font-mono text-sm sm:text-base overflow-hidden text-amber-400">
      {/* Fake macOS window controls & title */}
      <div className="flex items-center mb-6">
        <div className="flex gap-2">
          <div className="w-3.5 h-3.5 rounded-full bg-red-500/80"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80"></div>
          <div className="w-3.5 h-3.5 rounded-full bg-green-500/80"></div>
        </div>
        <div className="mx-auto text-zinc-500 text-xs font-sans tracking-wide">maharshi_profile.py</div>
      </div>
      
      {/* Code Editor Area */}
      <div className="whitespace-pre-wrap leading-relaxed">
        <TextType 
          text={codeText}
          typingSpeed={10}
          loop={false}
          startOnVisible={true}
        />
      </div>
    </div>
  );
}
