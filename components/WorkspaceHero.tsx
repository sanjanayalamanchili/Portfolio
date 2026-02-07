
import React from 'react';

const WorkspaceHero: React.FC = () => {
  return (
    <div className="relative pt-12 pr-12">
      <div className="max-w-md">
        <h1 className="font-serif text-7xl leading-tight mb-8">
          Curating spaces <br /> 
          <span className="italic">for digital expression.</span>
        </h1>
        <p className="text-stone-500 font-light leading-relaxed max-w-sm mb-12">
          Independent creative director and designer building thoughtful brand identities and digital experiences that feel human.
        </p>
        
        {/* Desk "Lamp" - Minimalist toggle or focal point */}
        <div className="mt-24 p-6 bg-[#E8E2D6] rounded-sm inline-flex items-center gap-4 border border-[#D6C4A3] relative">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
            <div className="w-6 h-6 bg-yellow-400 rounded-full blur-[4px] opacity-60 animate-pulse" />
          </div>
          <div>
            <span className="block text-xs uppercase tracking-wider text-stone-500 font-medium">Status</span>
            <span className="text-sm font-light">Open for new collaborations — 2024</span>
          </div>
          {/* Desktop Surface visual */}
          <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#B5A17A]" />
        </div>
      </div>
    </div>
  );
};

export default WorkspaceHero;
