
import React from 'react';

interface DeskLampProps {
  isOn: boolean;
  toggle: () => void;
}

const DeskLamp: React.FC<DeskLampProps> = ({ isOn, toggle }) => {
  return (
    <div className="fixed top-0 right-[15%] z-50 pointer-events-none">
      {/* Lamp Head */}
      <div className="relative group pointer-events-auto">
        {/* Cord */}
        <div 
          onClick={toggle}
          className="w-1 bg-stone-500/30 h-64 mx-auto relative cursor-pointer group-hover:h-72 transition-all duration-500 ease-out"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-6 h-6 bg-stone-700 rounded-full border-2 border-stone-800 shadow-xl" />
        </div>
        
        {/* Lamp Base (Top of screen) */}
        <div className="w-32 h-16 bg-stone-800 mx-auto rounded-b-full shadow-2xl relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Light Cone */}
      <div 
        className={`fixed top-0 left-1/2 -translate-x-1/2 w-screen h-screen pointer-events-none transition-all duration-1000 ${
          isOn 
            ? 'opacity-100 bg-[radial-gradient(circle_at_50%_0%,rgba(255,244,214,0.15)_0%,transparent_70%)]' 
            : 'opacity-60 bg-indigo-950/40'
        }`}
      />
    </div>
  );
};

export default DeskLamp;
