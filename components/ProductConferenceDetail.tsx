
import React, { useEffect } from 'react';
import { ChevronLeft, ExternalLink, Calendar, Users, Activity, CheckCircle, Search, Layout, Palette, MessageCircle, Globe, Smartphone, MousePointerClick, Lightbulb, Target, Rocket, Share2, List, Monitor } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const ProductConferenceDetail: React.FC<Props> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectUrl = "https://www.apmcneu.com/product-conference-2";

  // Using placeholders that match the described 5 images: Audience, Selfie, Slides, Panel, Networking
  const galleryImages = [
    { src: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800", alt: "Auditorium Audience" },
    { src: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&q=80&w=800", alt: "Event Selfie" },
    { src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=800", alt: "Speaker Presentation" },
    { src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=800", alt: "Panel Discussion" },
    { src: "https://images.unsplash.com/photo-1515169067750-d51a73b05121?auto=format&fit=crop&q=80&w=800", alt: "Networking" }
  ];

  return (
    <div className="w-full max-w-5xl px-4 pb-32 animate-[fadeIn_0.5s_ease-out]">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Navigation */}
      <div className="sticky top-24 z-40 mb-12 flex justify-between items-center pointer-events-none">
        <button 
          onClick={onBack}
          className="pointer-events-auto relative group"
        >
          <div className="absolute inset-0 bg-stone-300 border-2 border-stone-800 rounded-sm skew-x-[-2deg] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all" />
          <div className="relative px-6 py-3 flex items-center gap-2 bg-stone-200 border-2 border-stone-800 skew-x-[-1deg] -translate-y-1 -translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all">
            <ChevronLeft className="w-5 h-5 text-stone-700" />
            <span className="font-hand text-xl font-bold text-stone-800">Back to Events</span>
          </div>
        </button>
        
        <a 
          href={projectUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto relative group"
        >
          <div className="absolute inset-0 bg-orange-800 border-2 border-stone-800 rounded-sm skew-x-[1deg] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all" />
          <div className="relative px-6 py-3 flex items-center gap-2 bg-orange-600 border-2 border-stone-800 skew-x-[1deg] -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all">
            <span className="font-hand text-xl font-bold text-white">Conference Website</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </a>
      </div>

      {/* Hero Section */}
      <div className="relative mb-20 -mt-4">
        <div className="p-4 bg-stone-100 border-4 border-stone-800 rounded-[20px] shadow-[10px_15px_0px_rgba(0,0,0,0.1)] rotate-[0.5deg]">
           {/* Aspect 3/2 better fits the group photo with screen */}
           <div className="aspect-[3/2] w-full bg-stone-200 rounded-[16px] overflow-hidden relative group">
              <img 
                src="product-conference.jpg" 
                alt="APMC Conference 2.0 Group Photo" 
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?auto=format&fit=crop&q=80&w=800"; // Fallback
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                 <h2 className="font-bold text-3xl mb-1">Product Conference 2.0</h2>
                 <p className="font-hand text-xl opacity-90">Aspiring Product Managers Club — Northeastern University</p>
              </div>
           </div>
        </div>
        <div className="absolute -top-6 -right-6 w-24 h-24 sketch-circle bg-orange-100/80 -z-10 animate-pulse border-2 border-stone-800 border-dashed" />
      </div>

      {/* Introduction */}
      <div className="flex flex-col md:flex-row gap-12 mb-20">
        <div className="flex-1">
          <h1 className="text-5xl font-bold mb-4 tracking-tight text-stone-900">Product Journeys, Human Stories</h1>
          <h2 className="text-xl font-bold text-stone-500 mb-6 uppercase tracking-widest">Crafting Today, Enduring Tomorrow</h2>
          <p className="font-hand text-3xl text-stone-600 leading-relaxed">
            I collaborated as a designer for the <strong>official conference brochure</strong>, ensuring the agenda, speaker line-up, and event visuals reflected a cohesive identity and enhanced the attendee experience.
          </p>
          <p className="text-lg text-stone-500 mt-6 leading-relaxed">
             The brochure served as the central guide for participants navigating a packed day of sessions and activities.
          </p>
        </div>
        <div className="w-full md:w-80 shrink-0">
          <div className="sketch-box bg-white p-8 rotate-1 shadow-md border-orange-900/10">
             <div className="space-y-6">
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Role</h3>
                  <p className="font-hand text-xl">Design Lead</p>
               </div>
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Organization</h3>
                  <p className="font-hand text-xl">APMC (Northeastern)</p>
               </div>
               <div>
                  <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Deliverables</h3>
                  <p className="font-hand text-xl">Brochure, Web, Social</p>
               </div>
             </div>
          </div>
        </div>
      </div>

      {/* Problem & Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
        <div className="sketch-box bg-[#FFF7ED] p-8 rotate-[-1deg] relative group hover:rotate-0 transition-transform">
           <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-orange-800">
             <Target className="w-6 h-6" />
             The Challenge
           </h2>
           <p className="font-hand text-2xl text-stone-700 leading-relaxed">
             The conference needed more than just a landing page; it needed a unified brand experience. From the first Instagram announcement to the printed agenda in an attendee's hand, everything had to feel professional and cohesive.
           </p>
        </div>

        <div className="sketch-box bg-[#F0F9FF] p-8 rotate-[1deg] relative group hover:rotate-0 transition-transform">
           <h2 className="text-3xl font-bold mb-4 flex items-center gap-3 text-blue-800">
             <Rocket className="w-6 h-6" />
             Design Goals
           </h2>
           <ul className="space-y-3 font-hand text-xl text-stone-600">
             <li className="flex items-start gap-2">
               <span className="mt-2 w-2 h-2 bg-blue-400 rounded-full" />
               <span>Establish a consistent brand across digital & print.</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-2 w-2 h-2 bg-blue-400 rounded-full" />
               <span>Design a clear, glanceable agenda for busy attendees.</span>
             </li>
             <li className="flex items-start gap-2">
               <span className="mt-2 w-2 h-2 bg-blue-400 rounded-full" />
               <span>Boost registration via high-quality social graphics.</span>
             </li>
           </ul>
        </div>
      </div>

      {/* Process / Deliverables Section */}
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-12">
           <Layout className="w-10 h-10 text-stone-400" />
           <h3 className="text-4xl font-bold">Key Deliverables</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
           <div className="sketch-box p-6 bg-white flex flex-col gap-4">
              <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center border-2 border-stone-800">
                 <List className="w-5 h-5 text-stone-600" />
              </div>
              <h4 className="text-lg font-bold">1. Official Brochure</h4>
              <p className="font-hand text-lg text-stone-600">Designed a clear, color-coded run-of-show and speaker guide to help attendees navigate keynotes and breakouts.</p>
           </div>
           
           <div className="sketch-box p-6 bg-white flex flex-col gap-4">
              <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center border-2 border-stone-800">
                 <Monitor className="w-5 h-5 text-stone-600" />
              </div>
              <h4 className="text-lg font-bold">2. Conference Website</h4>
              <p className="font-hand text-lg text-stone-600">The central hub for speaker bios, ticketing, and event logistics, designed for accessibility and clarity.</p>
           </div>
           
           <div className="sketch-box p-6 bg-white flex flex-col gap-4">
              <div className="w-10 h-10 bg-stone-100 rounded-full flex items-center justify-center border-2 border-stone-800">
                 <Share2 className="w-5 h-5 text-stone-600" />
              </div>
              <h4 className="text-lg font-bold">3. Social Media Suite</h4>
              <p className="font-hand text-lg text-stone-600">Created templates for speaker announcements and countdowns on LinkedIn & Instagram to maintain brand hype.</p>
           </div>
        </div>
      </div>

      {/* Outcome Section */}
      <div className="sketch-box bg-stone-900 text-stone-100 p-12 text-center relative overflow-hidden mb-24">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">Impact</h2>
          <p className="font-hand text-2xl opacity-80 max-w-3xl mx-auto mb-8">
             "A sold-out event connecting over 200+ aspiring PMs with leaders from Google, Amazon, and Microsoft."
          </p>
          <div className="flex flex-wrap justify-center gap-12 mt-8">
             <div className="flex flex-col items-center">
                <Users className="w-8 h-8 text-orange-400 mb-2" />
                <span className="font-bold text-3xl">200+</span>
                <span className="text-xs uppercase tracking-widest opacity-60">Attendees</span>
             </div>
             <div className="flex flex-col items-center">
                <Lightbulb className="w-8 h-8 text-yellow-400 mb-2" />
                <span className="font-bold text-3xl">15+</span>
                <span className="text-xs uppercase tracking-widest opacity-60">Industry Speakers</span>
             </div>
          </div>
        </div>
        
        {/* Abstract Background patterns */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/20 blur-[80px] rounded-full" />
      </div>

      {/* Reflection */}
      <div className="bg-stone-100 p-8 border-l-4 border-stone-400 rounded-r-lg mb-24">
         <h3 className="text-2xl font-bold mb-4">Reflection</h3>
         <p className="font-hand text-2xl text-stone-600 leading-relaxed">
            Designing for a <strong>student-led professional conference</strong> taught me how to balance corporate professionalism with the energy of a university club. It reinforced how vital consistent assets—from the brochure to the Instagram feed—are in building trust.
         </p>
      </div>

      {/* Animated Photo Gallery Loop */}
      <div className="w-full relative overflow-hidden bg-white border-y-4 border-stone-200 py-12">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50" />
          <h3 className="text-center font-bold text-2xl mb-8 uppercase tracking-widest text-stone-400 relative z-10">Event Gallery</h3>
          
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused] relative z-10">
            {/* Duplicating the gallery to ensure seamless loop */}
            {[...galleryImages, ...galleryImages].map((img, index) => (
               <div key={index} className="w-[300px] sm:w-[400px] h-[250px] flex-shrink-0 px-4">
                  <div className="w-full h-full sketch-box p-3 bg-white rotate-1 hover:rotate-0 hover:scale-105 transition-transform duration-300">
                     <div className="w-full h-full bg-stone-100 overflow-hidden relative">
                       <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                       />
                       <div className="absolute inset-0 border-2 border-stone-800/5 pointer-events-none" />
                     </div>
                  </div>
               </div>
            ))}
          </div>
      </div>

    </div>
  );
};

export default ProductConferenceDetail;
