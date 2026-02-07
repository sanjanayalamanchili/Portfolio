
import React from 'react';
import { Project } from '../types.ts';

const VinylRecord: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="vinyl-sleeve group relative bg-stone-900 aspect-square p-1 shadow-2xl overflow-hidden">
      {/* Sleeve Image */}
      <div className="relative w-full h-full bg-stone-800 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000"
        />
        
        {/* Sleeve Texture Overlays */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/10" />
        <div className="absolute inset-0 border border-white/10 pointer-events-none" />
        
        {/* Center Hole Cutout visual */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 rounded-full blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        
        {/* Info label on sleeve */}
        <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md p-3 border border-white/10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
           <p className="font-serif text-white text-lg leading-none">{project.title}</p>
           <p className="text-[9px] uppercase tracking-widest text-white/60 mt-1">{project.category}</p>
        </div>
      </div>
      
      {/* Outer Sleeve "Edge" shadow */}
      <div className="absolute inset-y-0 left-0 w-1 bg-black/40" />
    </div>
  );
};

export default VinylRecord;
