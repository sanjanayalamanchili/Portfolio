
import React, { useState } from 'react';

const RoomLighting: React.FC = () => {
  const [isLampOn, setIsLampOn] = useState(true);

  return (
    <div className="fixed top-0 right-12 z-50 flex flex-col items-center">
      {/* Pull Cord for Light */}
      <div 
        onClick={() => setIsLampOn(!isLampOn)}
        className="w-[2px] h-32 bg-stone-400 relative cursor-pointer hover:h-36 transition-all duration-300"
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-stone-600 rounded-full shadow-md" />
      </div>
      
      {/* Light Overlay */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-700 z-40 ${isLampOn ? 'opacity-0' : 'opacity-40 bg-indigo-950'}`} />
      
      {/* Warm Glow when ON */}
      {isLampOn && (
        <div className="fixed top-0 right-0 w-1/2 h-1/2 bg-amber-100/20 blur-[120px] pointer-events-none z-30" />
      )}
    </div>
  );
};

export default RoomLighting;
