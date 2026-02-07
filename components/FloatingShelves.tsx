
import React from 'react';
import { NAV_ITEMS } from '../constants.tsx';

const FloatingShelves: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 mt-16 w-full max-w-[240px] shelf-3d">
      {NAV_ITEMS.map((item, index) => (
        <div key={item.label} className="group relative">
          <div className="flex flex-col pl-4 relative z-10">
            <span className="text-[10px] uppercase tracking-[0.4em] text-stone-400 mb-1">Vol. 0{index + 1}</span>
            <a 
              href={item.href} 
              className="text-xl font-light hover:text-stone-900 transition-all duration-500 translate-x-0 group-hover:translate-x-2"
            >
              {item.label}
            </a>
          </div>
          
          {/* Physical Shelf Object */}
          <div className="absolute -bottom-4 left-0 w-full">
            {/* Top Surface */}
            <div className="h-[6px] w-full bg-[#D6C4A3] shadow-sm relative z-0">
               {/* Front Edge */}
               <div className="absolute bottom-0 left-0 w-full h-[4px] bg-[#B5A17A] translate-y-full" />
            </div>
            {/* Ambient Shadow on wall below shelf */}
            <div className="h-8 w-full bg-black/5 blur-md translate-y-2 opacity-50" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingShelves;
