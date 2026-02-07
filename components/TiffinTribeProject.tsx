
import React, { useEffect } from 'react';
import { ChevronLeft, ExternalLink, Users, Utensils, CheckCircle, Search, Layout, MousePointerClick, Heart, Coffee } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const TiffinTribeProject: React.FC<Props> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const figmaUrl = "https://www.figma.com/proto/TNuZ3MD728UmVSJmmU4mAq/THE-TIFFIN-TRIBE?page-id=0%3A1&node-id=18-19&starting-point-node-id=6%3A21&t=Uocdf0XtVfUwDLyY-1";
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
          <div className="absolute inset-0 bg-[#D35400] border-2 border-stone-800 rounded-sm skew-x-[1deg] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all" />
          <div className="relative px-6 py-3 flex items-center gap-2 bg-[#E67E22] border-2 border-stone-800 skew-x-[1deg] -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all">
            <span className="font-hand text-xl font-bold text-white">View Prototype</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </a>
      </div>

      {/* Hero: Figma Embed */}
      <div className="relative mb-20 -mt-4">
        <div className="p-4 bg-stone-900 border-4 border-stone-800 rounded-[20px] shadow-[10px_15px_0px_rgba(0,0,0,0.1)] rotate-[-0.5deg]">
           <div className="aspect-[9/16] md:aspect-video w-full bg-stone-800 rounded-[16px] overflow-hidden relative">
              <iframe 
                src={embedSrc}
                className="w-full h-full bg-[#FDF5E6]"
                allowFullScreen
                loading="lazy"
                title="Tiffin Tribe Prototype"
              />
           </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -bottom-6 -left-6 w-24 h-24 sketch-circle bg-orange-100/80 -z-10 animate-pulse border-2 border-stone-800 border-dashed" />
      </div>

      {/* Title & Overview */}
      <div className="flex flex-col md:flex-row gap-12 mb-20">
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-6 tracking-tight text-[#D35400]">The Tiffin Tribe</h1>
          <p className="font-hand text-3xl text-stone-600 leading-relaxed">
            Simplifying healthy meal subscriptions with clearer flows, better content, and responsive mobile-first thinking.
          </p>
        </div>
        <div className="w-full md:w-80 shrink-0">
          <div className="sketch-box bg-white p-8 rotate-1 shadow-md border-orange-900/10">
             <div className="space-y-6">
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Role</h3>
                  <p className="font-hand text-xl">Interaction Design & Research</p>
               </div>
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Team</h3>
                  <p className="font-hand text-xl">Group Project (3 Members)</p>
               </div>
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Timeline</h3>
                  <p className="font-hand text-xl">4 Weeks</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Problem & UX Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <div className="sketch-box bg-[#FEF3C7] p-8 rotate-[-1deg] relative group hover:rotate-0 transition-transform">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-orange-800">
            <Search className="w-6 h-6" />
            The Problem
          </h2>
          <p className="font-hand text-2xl text-stone-700 leading-relaxed">
            Meal subscription apps often overwhelm users with too many options, confusing flows, or unclear policies about skipping deliveries. Users needed a way to quickly understand their choices and trust the checkout process.
          </p>
        </div>

        <div className="sketch-box bg-[#E0F2F1] p-8 rotate-[1deg] relative group hover:rotate-0 transition-transform">
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-teal-800">
            <Heart className="w-6 h-6" />
            UX Goals
          </h2>
          <ul className="font-hand text-2xl text-stone-700 leading-relaxed list-disc list-inside space-y-2">
            <li>Reduce steps in the ordering + checkout flow.</li>
            <li>Give users more control over their subscriptions.</li>
            <li>Add visual feedback for key actions (skip, pause, confirm).</li>
          </ul>
        </div>
      </div>

      {/* Process Section */}
      <div className="mb-32">
        <h3 className="text-4xl font-bold mb-12 text-center">Design Process</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="sketch-box p-6 bg-white flex flex-col gap-4">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center border-2 border-stone-800">
              <Layout className="w-6 h-6 text-stone-600" />
            </div>
            <h4 className="text-xl font-bold">Wireframing</h4>
            <p className="font-hand text-lg text-stone-600">Mapped core flows in FigJam: meal browsing, subscription controls, and checkout confirmation.</p>
          </div>

          <div className="sketch-box p-6 bg-white flex flex-col gap-4">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center border-2 border-stone-800">
              <MousePointerClick className="w-6 h-6 text-stone-600" />
            </div>
            <h4 className="text-xl font-bold">Usability Testing</h4>
            <p className="font-hand text-lg text-stone-600">Tested early prototypes with 3 users. Improvements led to a 40% faster checkout flow.</p>
          </div>

          <div className="sketch-box p-6 bg-white flex flex-col gap-4">
            <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center border-2 border-stone-800">
              <Utensils className="w-6 h-6 text-stone-600" />
            </div>
            <h4 className="text-xl font-bold">Visual Design</h4>
            <p className="font-hand text-lg text-stone-600">Used soft greens and neutrals to suggest health & trust. Designed reusable components.</p>
          </div>
        </div>
      </div>

      {/* Research & Role */}
      <div className="sketch-box bg-white p-10 mb-24 relative overflow-hidden">
         <div className="absolute top-0 left-0 w-2 h-full bg-[#D35400]" />
         <h3 className="text-3xl font-bold mb-6">User Research & My Role</h3>
         <p className="font-hand text-2xl text-stone-600 leading-relaxed mb-6">
            I collaborated with two teammates, with my primary focus on <strong>interaction design</strong>, <strong>information architecture</strong>, and <strong>usability testing</strong>.
         </p>
         <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 bg-stone-100 rounded-full border border-stone-200 text-sm font-bold uppercase tracking-wider text-stone-500">5 User Interviews</div>
            <div className="px-4 py-2 bg-stone-100 rounded-full border border-stone-200 text-sm font-bold uppercase tracking-wider text-stone-500">Survey Analysis</div>
            <div className="px-4 py-2 bg-stone-100 rounded-full border border-stone-200 text-sm font-bold uppercase tracking-wider text-stone-500">Competitive Audit</div>
         </div>
      </div>

      {/* Outcome */}
      <div className="sketch-box bg-stone-900 text-stone-100 p-12 text-center relative overflow-hidden mb-24">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Outcomes & Reflections</h2>
          <p className="font-hand text-2xl opacity-80 max-w-3xl mx-auto mb-8">
            "This project taught me how to design collaboratively and synthesize research quickly without writing a single line of code."
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-12 mt-8">
             <div className="flex flex-col items-center">
               <CheckCircle className="w-12 h-12 text-green-400 mb-4" />
               <p className="font-hand text-2xl">Reduced checkout steps 7 → 4</p>
             </div>
             <div className="flex flex-col items-center">
               <Coffee className="w-12 h-12 text-orange-400 mb-4" />
               <p className="font-hand text-2xl">Improved Visual Hierarchy</p>
             </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default TiffinTribeProject;
