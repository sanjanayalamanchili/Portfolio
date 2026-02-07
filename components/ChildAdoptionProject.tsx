
import React, { useEffect } from 'react';
import { ChevronLeft, ExternalLink, Heart, Home, Users, Search, BookOpen, ShieldCheck, Check, Edit3, MessageCircle, Layout } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const ChildAdoptionProject: React.FC<Props> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const figmaUrl = "https://www.figma.com/proto/6UcPG304F25oQMJxD8Fhyb/Child-adoption-app?page-id=0%3A1&node-id=1-66&starting-point-node-id=1%3A6&t=QR8h1FjEecqoibUX-1";
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
          <div className="absolute inset-0 bg-[#E88D67] border-2 border-stone-800 rounded-sm skew-x-[1deg] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all" />
          <div className="relative px-6 py-3 flex items-center gap-2 bg-[#F3A683] border-2 border-stone-800 skew-x-[1deg] -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all">
            <span className="font-hand text-xl font-bold text-stone-900">View Prototype</span>
            <ExternalLink className="w-4 h-4 text-stone-900" />
          </div>
        </a>
      </div>

      {/* Hero: Figma Embed */}
      <div className="relative mb-20 -mt-4">
        <div className="p-4 bg-stone-100 border-4 border-stone-800 rounded-[20px] shadow-[10px_15px_0px_rgba(0,0,0,0.1)] rotate-[0.5deg]">
           <div className="aspect-[9/16] md:aspect-video w-full bg-stone-200 rounded-[16px] overflow-hidden relative">
              <iframe 
                src={embedSrc}
                className="w-full h-full bg-[#FFF5EE]"
                allowFullScreen
                loading="lazy"
                title="Family Forge Prototype"
              />
           </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-6 -right-6 w-24 h-24 sketch-circle bg-[#F3A683]/50 -z-10 animate-pulse border-2 border-stone-800 border-dashed" />
      </div>

      {/* Title & Overview */}
      <div className="flex flex-col md:flex-row gap-12 mb-20">
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-6 tracking-tight text-[#D66D45]">Family Forge</h1>
          <h2 className="text-2xl font-bold text-stone-500 mb-4 uppercase tracking-widest">Child Adoption App</h2>
          <p className="font-hand text-3xl text-stone-600 leading-relaxed">
            Simplifying the adoption process to reduce emotional overwhelm and support parents through clear, empathetic design.
          </p>
        </div>
        <div className="w-full md:w-80 shrink-0">
          <div className="sketch-box bg-white p-8 rotate-1 shadow-md border-[#E88D67]/20">
             <div className="space-y-6">
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Role</h3>
                  <p className="font-hand text-xl">UX Designer (Solo)</p>
               </div>
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Focus</h3>
                  <p className="font-hand text-xl">Accessibility & Emotion</p>
               </div>
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Tools</h3>
                  <p className="font-hand text-xl">Figma, Research</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Problem & Research */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="sketch-box bg-[#FEF0EA] p-8 rotate-[-1deg] relative group hover:rotate-0 transition-transform">
           <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-[#D66D45]">
             <ShieldCheck className="w-6 h-6" />
             The Problem
           </h2>
           <p className="font-hand text-2xl text-stone-700 leading-relaxed">
             Adoption is emotionally difficult and logistically complex. Existing platforms are often cluttered, full of dense legal jargon, and lack human-centered design, leaving parents feeling overwhelmed.
           </p>
        </div>

        <div className="sketch-box bg-[#EBF5FB] p-8 rotate-[1deg] relative group hover:rotate-0 transition-transform">
           <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-blue-600">
             <Search className="w-6 h-6" />
             Research Highlights
           </h2>
           <ul className="space-y-3 font-hand text-xl text-stone-600">
             <li className="flex items-start gap-2">
               <span className="mt-1 w-2 h-2 bg-blue-400 rounded-full" />
               <span>Analyzed 3 major adoption platforms.</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-1 w-2 h-2 bg-blue-400 rounded-full" />
               <span>Key Pain Point: Poor mobile usability & cold tone.</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-1 w-2 h-2 bg-blue-400 rounded-full" />
               <span>User Goal: Step-by-step clarity before commitment.</span>
             </li>
           </ul>
        </div>
      </div>

      {/* Design Process */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-12">
           <Edit3 className="w-10 h-10 text-stone-400" />
           <h3 className="text-4xl font-bold">Design Process</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="sketch-box p-6 bg-white flex flex-col gap-4">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center border-2 border-stone-800">
                 <Layout className="w-6 h-6 text-stone-600" />
              </div>
              <h4 className="text-xl font-bold">Wireframes & IA</h4>
              <p className="font-hand text-lg text-stone-600">Mapped 3 key flows: Explore Info, Browse Profiles, Express Interest. Grouped content into digestible blocks.</p>
           </div>
           
           <div className="sketch-box p-6 bg-white flex flex-col gap-4">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center border-2 border-stone-800">
                 <Heart className="w-6 h-6 text-stone-600" />
              </div>
              <h4 className="text-xl font-bold">Visual Design</h4>
              <p className="font-hand text-lg text-stone-600">Soft colors and round corners for warmth. Welcoming illustrations to break up dense legal info.</p>
           </div>
           
           <div className="sketch-box p-6 bg-white flex flex-col gap-4">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center border-2 border-stone-800">
                 <Users className="w-6 h-6 text-stone-600" />
              </div>
              <h4 className="text-xl font-bold">Emotional UX</h4>
              <p className="font-hand text-lg text-stone-600">Prioritized inviting, non-pressuring CTA language to support users through anxiety.</p>
           </div>
        </div>
      </div>

      {/* Outcome Section */}
      <div className="sketch-box bg-stone-900 text-stone-100 p-12 text-center relative overflow-hidden mb-24">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">The Outcome</h2>
          <p className="font-hand text-2xl opacity-80 max-w-3xl mx-auto mb-8">
            "A clear, emotionally supportive interface that simplifies a 5-step education process into a linear, manageable flow."
          </p>
          <div className="flex justify-center gap-8 mt-4">
             <div className="flex items-center gap-2">
                <Check className="w-6 h-6 text-green-400" />
                <span className="font-bold">Transparent Process</span>
             </div>
             <div className="flex items-center gap-2">
                <Check className="w-6 h-6 text-green-400" />
                <span className="font-bold">Empathetic Tone</span>
             </div>
          </div>
        </div>
        
        {/* Abstract Background patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#E88D67]/20 blur-[80px] rounded-full" />
      </div>

      {/* Next Steps */}
      <div className="bg-stone-100 p-8 border-l-4 border-[#E88D67] rounded-r-lg">
         <h3 className="text-2xl font-bold mb-4">Future Iterations</h3>
         <ul className="space-y-2 font-hand text-xl text-stone-600">
           <li className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-stone-400" />
              Explore AI-powered Q&A for instant legal support.
           </li>
           <li className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-stone-400" />
              Add multi-language support and offline resources.
           </li>
         </ul>
      </div>

    </div>
  );
};

export default ChildAdoptionProject;
