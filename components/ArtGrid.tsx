
import React from 'react';
import { PROJECTS } from '../constants.tsx';
import { Project } from '../types.ts';

const ArtFrame: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="group relative perspective-1000">
      <div className="relative bg-white p-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-stone-100 transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] cursor-pointer">
        <div className="aspect-[4/5] overflow-hidden bg-stone-50">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
        <div className="mt-4 text-center">
          <h3 className="font-serif text-lg leading-tight">{project.title}</h3>
          <p className="text-[10px] uppercase tracking-widest text-stone-400 mt-1">{project.category}</p>
        </div>
        
        {/* Subtle Frame Lighting */}
        <div className="absolute inset-0 border-t border-white/40 pointer-events-none" />
        <div className="absolute inset-0 border-b border-black/5 pointer-events-none" />
      </div>
      
      {/* Shadow on wall */}
      <div className="absolute -inset-2 bg-black/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </div>
  );
};

const ArtGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 p-8 md:p-16">
      {PROJECTS.map((project) => (
        <ArtFrame key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ArtGrid;
