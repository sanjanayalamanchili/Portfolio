
import React, { useEffect } from 'react';
import { ChevronLeft, ExternalLink, Video, Wand2, MousePointer2 } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const MotionDesignProject: React.FC<Props> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const figmaUrl = "https://www.figma.com/proto/Xy4dOBJaxafVQ1x0zf9Smb/Motion-Design?page-id=0%3A1&node-id=4-1584&t=rNsNTD2nMXHMUoli-1";
  const embedSrc = `https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(figmaUrl)}&scaling=scale-down-width&content-scaling=fixed&ui=false`;

  return (
    <div className="w-full max-w-5xl px-4 pb-32 animate-[fadeIn_0.5s_ease-out]">
       {/* Navigation */}
      <div className="sticky top-24 z-40 mb-12 flex justify-between items-center pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto relative group"
        >
          <div className="absolute inset-0 bg-stone-300 border-2 border-stone-800 rounded-sm skew-x-[-2deg] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all" />
          <div className="relative px-6 py-3 flex items-center gap-2 bg-stone-200 border-2 border-stone-800 skew-x-[-1deg] -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all">
            <ChevronLeft className="w-5 h-5 text-stone-700" />
            <span className="font-hand text-xl font-bold text-stone-800">Back to Gallery</span>
          </div>
        </button>
        
        <a 
          href={figmaUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto relative group"
        >
          <div className="absolute inset-0 bg-purple-800 border-2 border-stone-800 rounded-sm skew-x-[1deg] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all" />
          <div className="relative px-6 py-3 flex items-center gap-2 bg-purple-600 border-2 border-stone-800 skew-x-[1deg] -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all">
            <span className="font-hand text-xl font-bold text-white">View Prototype</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </a>
      </div>

      {/* Hero: Figma Embed */}
      <div className="relative mb-20 -mt-4">
        <div className="p-4 bg-stone-900 border-4 border-stone-800 rounded-[20px] shadow-[10px_15px_0px_rgba(0,0,0,0.1)] rotate-[0.5deg]">
           <div className="aspect-video w-full bg-stone-800 rounded-[16px] overflow-hidden relative">
              <iframe 
                src={embedSrc}
                className="w-full h-full"
                allowFullScreen
                loading="lazy"
                title="Motion Design Prototype"
              />
           </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 sketch-circle bg-purple-100/80 -z-10 animate-pulse border-2 border-stone-800 border-dashed" />
      </div>

      {/* Title & Overview */}
      <div className="flex flex-col md:flex-row gap-12 mb-20">
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">Motion Design Explorations</h1>
          <p className="font-hand text-3xl text-stone-600 leading-relaxed">
            Bringing emotion, clarity, and interactivity to user experiences through thoughtful motion.
          </p>
        </div>
        <div className="w-full md:w-80 shrink-0">
          <div className="sketch-box bg-white p-8 rotate-1 shadow-md">
             <div className="space-y-6">
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Tools</h3>
                  <p className="font-hand text-xl">Figma, Smart Animate, RunwayML</p>
               </div>
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Focus</h3>
                  <p className="font-hand text-xl">Interaction & Storytelling</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
         {/* Goals */}
         <div className="sketch-box bg-white p-8 rotate-[-1deg] hover:rotate-0 transition-transform md:col-span-1">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center border-2 border-stone-800 mb-4">
               <MousePointer2 className="w-6 h-6 text-stone-800" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Goals</h3>
            <ul className="font-hand text-xl text-stone-600 space-y-2 list-disc list-inside">
               <li>Reinforce usability & hierarchy</li>
               <li>Support emotional tone</li>
               <li>Explore generative motion</li>
            </ul>
         </div>
         
         {/* Studies */}
         <div className="sketch-box bg-stone-50 p-8 rotate-[1deg] hover:rotate-0 transition-transform md:col-span-2">
            <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
               <Video className="w-8 h-8 text-purple-600" />
               Featured Studies
            </h3>
            <div className="space-y-6">
               <div className="border-b-2 border-dashed border-stone-200 pb-4">
                  <h4 className="text-xl font-bold">1. Mood Entry Microinteraction</h4>
                  <p className="font-hand text-xl text-stone-600">Created a soft transition using scale + opacity to keep mood logging emotionally light.</p>
               </div>
               <div className="border-b-2 border-dashed border-stone-200 pb-4">
                  <h4 className="text-xl font-bold">2. Conference Timeline Scroll</h4>
                  <p className="font-hand text-xl text-stone-600">Prototyped a horizontal scroll animation using Smart Animate for smooth temporal navigation.</p>
               </div>
               <div>
                  <h4 className="text-xl font-bold">3. Hover-Activated Cards</h4>
                  <p className="font-hand text-xl text-stone-600">Added depth to portfolio previews with playful hover and reveal states.</p>
               </div>
            </div>
         </div>
      </div>

      {/* RunwayML / AI Section */}
      <div className="sketch-box bg-stone-900 text-stone-100 p-12 relative overflow-hidden mb-24">
         <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
               <div className="flex items-center gap-3 mb-4">
                  <Wand2 className="w-8 h-8 text-purple-400" />
                  <h2 className="text-3xl font-bold">Future Explorations</h2>
               </div>
               <p className="font-hand text-2xl opacity-90 leading-relaxed">
                  I'm actively exploring how tools like <span className="text-purple-400 underline decoration-wavy">RunwayML</span> can add lightweight, AI-generated storytelling into design flows — especially for speculative GenAI tools where UX meets media creation.
               </p>
            </div>
            <div className="w-full md:w-1/3 border-2 border-white/20 rounded-lg p-6 bg-white/5 backdrop-blur-sm">
               <h4 className="font-bold text-purple-400 mb-2">Current Stack</h4>
               <ul className="space-y-2 text-sm font-mono">
                  <li>[x] Figma Smart Animate</li>
                  <li>[x] FigJam Flow Planning</li>
                  <li>[ ] RunwayML (In Progress)</li>
               </ul>
            </div>
         </div>
         
         {/* Abstract Background patterns */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 blur-[100px] rounded-full" />
      </div>

    </div>
  );
}

export default MotionDesignProject;
