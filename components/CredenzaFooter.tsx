
import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Info } from 'lucide-react';

const CredenzaFooter: React.FC = () => {
  return (
    <div className="bg-[#C1A583] border-t-4 border-[#A68966] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
      {/* Desk Top / Wood Grain Effect */}
      <div className="absolute inset-x-0 top-0 h-2 bg-black/10" />
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-3 items-end gap-12 px-12 pb-10 pt-16 text-stone-800">
        
        {/* Left Side: Status / Info */}
        <div className="flex flex-col gap-6">
           <div className="space-y-1">
             <span className="text-[10px] uppercase tracking-widest text-stone-100/60 block">Project Status</span>
             <p className="text-stone-100 text-sm font-light">Collaborations open for Q3 2024</p>
           </div>
           <div className="flex gap-4">
             <button className="p-3 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-stone-100">
               <Info className="w-4 h-4" />
             </button>
             <div className="flex-1 h-[2px] bg-white/20 self-center" />
           </div>
        </div>

        {/* Center: Record Player (Immersive Audio UI) */}
        <div className="flex flex-col items-center group">
          <div className="relative w-40 h-40 mb-6 flex items-center justify-center">
            {/* Platter Shadow */}
            <div className="absolute inset-0 bg-black/20 rounded-full blur-xl translate-y-4" />
            {/* The Record */}
            <div className="relative w-full h-full bg-stone-900 rounded-full flex items-center justify-center shadow-xl ring-[12px] ring-stone-900/10 border-4 border-stone-800 animate-[spin_12s_linear_infinite]">
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center">
                 <div className="w-2 h-2 bg-stone-900 rounded-full" />
              </div>
            </div>
            {/* Tone Arm Visual */}
            <div className="absolute -top-4 -right-4 w-20 h-2 bg-stone-300 rounded-full rotate-45 origin-left shadow-md z-10" />
          </div>
          <div className="text-center text-stone-100">
            <p className="text-[10px] uppercase tracking-[0.3em] opacity-60">Currently Spinning</p>
            <p className="font-serif text-2xl mt-1">Lush Life — John Coltrane</p>
            <div className="flex gap-8 mt-6 items-center justify-center opacity-80 hover:opacity-100 transition-opacity">
              <SkipBack className="w-4 h-4 cursor-pointer" />
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-stone-800 cursor-pointer hover:scale-105 transition-transform shadow-lg">
                <Play className="w-5 h-5 ml-1" fill="currentColor" />
              </div>
              <SkipForward className="w-4 h-4 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Right Side: Connectivity */}
        <div className="flex flex-col items-end gap-6 text-stone-100">
           <div className="text-right space-y-4">
             <a href="#" className="block text-sm font-light hover:underline decoration-white/30 underline-offset-8">Instagram</a>
             <a href="#" className="block text-sm font-light hover:underline decoration-white/30 underline-offset-8">Read.cv</a>
             <a href="#" className="block text-sm font-light hover:underline decoration-white/30 underline-offset-8">hello@atelier.studio</a>
           </div>
           <div className="flex items-center gap-3 opacity-60">
             <Volume2 className="w-4 h-4" />
             <div className="w-32 h-[1px] bg-white/20 relative overflow-hidden">
               <div className="absolute inset-y-0 left-0 w-2/3 bg-white" />
             </div>
           </div>
        </div>
      </div>
      
      {/* Furniture Legs / Base */}
      <div className="h-8 w-full bg-[#8E7456] flex justify-between px-20">
        <div className="w-4 h-full bg-[#755D42] skew-x-[-15deg]" />
        <div className="w-4 h-full bg-[#755D42] skew-x-[15deg]" />
      </div>
    </div>
  );
};

export default CredenzaFooter;
