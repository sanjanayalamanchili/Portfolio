
import React, { useState, useEffect } from 'react';
import { PROJECTS, NAV_ITEMS, CONFERENCES } from './constants.tsx';
import RoamingCat from './components/RoamingCat.tsx';
import MentalHealthProject from './components/MentalHealthProject.tsx';
import MotionDesignProject from './components/MotionDesignProject.tsx';
import TiffinTribeProject from './components/TiffinTribeProject.tsx';
import ChildAdoptionProject from './components/ChildAdoptionProject.tsx';
import ProductConferenceDetail from './components/ProductConferenceDetail.tsx';
import { 
  Github,
  Linkedin,
  ArrowUpRight,
  MapPin,
  Calendar,
  ChevronLeft,
  Zap,
  Star,
  ExternalLink,
  Eye,
  Home,
  Heart
} from 'lucide-react';

const CatIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 120 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
       {/* Body */}
       <path 
         d="M25 60 C25 30 40 30 60 30 C80 30 90 45 90 60 C90 80 35 80 25 60 Z" 
         fill="white" 
       />
       {/* Tail */}
       <path d="M20 55 C10 50 5 20 25 15" />
       
       {/* Legs */}
       <path d="M35 70 L35 90" />
       <path d="M50 70 L50 90" />
       <path d="M70 75 L70 95" />
       <path d="M85 75 L85 95" />
       
       {/* Head */}
       <g transform="translate(85, 40)">
          <path d="M-8 -10 L-12 -25 L2 -12" fill="white" />
          <path d="M8 -10 L12 -25 L-2 -12" fill="white" />
          <circle r="16" fill="white" />
          
          <circle cx="-6" cy="-2" r="2" fill="currentColor" stroke="none" />
          <circle cx="6" cy="-2" r="2" fill="currentColor" stroke="none" />
          <path d="M-2 4 L2 4 L0 7 Z" fill="currentColor" stroke="none" />
          
          <path d="M12 2 L22 0" />
          <path d="M12 6 L22 8" />
          <path d="M-12 2 L-22 0" />
          <path d="M-12 6 L-22 8" />
       </g>
    </g>
  </svg>
);

const PieceOfYouCard = () => (
  <div className="w-full h-full bg-[#Fdfbf7] relative overflow-hidden flex flex-col items-center justify-center group-hover:bg-[#faf8f4] transition-colors">
    {/* Background Pattern */}
    <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#d1d1d1_1px,transparent_1px)] [background-size:16px_16px]" />

    {/* Top Row Blobs */}
    <div className="absolute -top-8 left-0 w-full flex justify-around px-2 z-10">
       <div className="w-20 h-20 bg-[#D4E6B5] rounded-full border-2 border-stone-800 flex items-end justify-center pb-3 translate-y-2 rotate-12 shadow-sm">
         <span className="font-hand font-bold text-2xl text-stone-800">^ ^</span>
       </div>
       <div className="w-24 h-24 bg-[#FFDF80] rounded-full border-2 border-stone-800 flex items-end justify-center pb-5 -translate-y-4 shadow-sm">
          <span className="font-hand font-bold text-2xl text-stone-800 -rotate-6">T ^ T</span>
       </div>
       <div className="w-20 h-20 bg-[#FFB5B5] rounded-full border-2 border-stone-800 flex items-end justify-center pb-4 translate-y-1 -rotate-3 shadow-sm">
          <span className="font-hand font-bold text-2xl text-stone-800">&gt; &lt;</span>
       </div>
    </div>

    {/* Center */}
    <div className="relative z-20 flex flex-col items-center mt-2 group-hover:scale-110 transition-transform duration-500">
       <div className="flex justify-center -space-x-3 mb-4">
          {/* Green Puzzle Piece */}
          <div className="w-12 h-12 border-2 border-stone-800 rounded-lg bg-[#D4E6B5] rotate-[-12deg] z-10 flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"></div>
          {/* Red Puzzle Piece */}
          <div className="w-12 h-12 border-2 border-stone-800 rounded-lg bg-[#FFB5B5] rotate-[8deg] z-20 -mt-2 flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"></div>
          {/* Blue Puzzle Piece */}
          <div className="w-12 h-12 border-2 border-stone-800 rounded-lg bg-[#AECBEB] rotate-[-4deg] z-10 flex items-center justify-center shadow-[2px_2px_0px_rgba(0,0,0,0.1)]"></div>
       </div>
       <h2 className="font-hand text-4xl font-bold text-stone-800 tracking-wider rotate-[-2deg]">PIECE OF YOU</h2>
    </div>

    {/* Bottom Row Blobs */}
    <div className="absolute -bottom-10 left-0 w-full flex justify-around px-2 z-10">
       <div className="w-24 h-24 bg-[#FFCCBC] rounded-full border-2 border-stone-800 flex items-start justify-center pt-6 translate-y-2 rotate-6 shadow-sm">
          <span className="font-hand font-bold text-2xl text-stone-800">- 3 -</span>
       </div>
       <div className="w-20 h-20 bg-[#C8C6FA] rounded-full border-2 border-stone-800 flex items-start justify-center pt-4 -translate-y-2 -rotate-12 shadow-sm">
          <span className="font-hand font-bold text-2xl text-stone-800">o . o</span>
       </div>
       <div className="w-22 h-22 bg-[#FFF59D] rounded-full border-2 border-stone-800 flex items-start justify-center pt-5 translate-y-4 rotate-3 shadow-sm">
          <span className="font-hand font-bold text-2xl text-stone-800">@ _ @</span>
       </div>
    </div>
  </div>
);

const MotionDesignCard = () => {
  const [flavor, setFlavor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlavor(prev => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const config = [
    { bg: "#C8B237", text: "LEMON", canColor: "#F5E050" },
    { bg: "#E57373", text: "BERRY", canColor: "#FFCDD2" },
    { bg: "#D35F5F", text: "APPLE", canColor: "#EF9A9A" }
  ];

  const current = config[flavor];

  return (
    <div 
      className="w-full h-full relative overflow-hidden flex flex-col items-center justify-center transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: current.bg }}
    >
      {/* Animated Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 scale-150">
         <h1 key={flavor} className="text-8xl font-black text-white tracking-tighter animate-[fadeIn_0.5s_ease-out]">
           {current.text}
         </h1>
      </div>

      {/* The Animated Can */}
      <div className="relative z-10 w-24 h-40 bg-white rounded-[20px] shadow-2xl flex flex-col items-center overflow-hidden border-2 border-black/10 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3">
         {/* Can Top */}
         <div className="w-full h-4 bg-gray-300 border-b border-gray-400" />
         {/* Can Body */}
         <div 
           className="w-full flex-1 transition-colors duration-700 flex items-center justify-center p-2"
           style={{ backgroundColor: current.canColor }}
         >
           {/* Label */}
           <div className="w-full h-24 bg-white/90 rounded-lg border border-black/5 flex flex-col items-center justify-center p-1 relative overflow-hidden">
              <div className="w-8 h-8 rounded-full bg-stone-800 mb-1 flex items-center justify-center text-white text-[8px] z-10">:)</div>
              <span className="font-hand font-bold text-xs text-stone-800 z-10 relative">{current.text}</span>
              <div className="w-12 h-[1px] bg-stone-300 my-1 z-10" />
              <div className="text-[6px] text-stone-500 text-center leading-tight z-10">PROBIOTIC<br/>SPARKLING TEA</div>
           </div>
         </div>
         {/* Can Bottom */}
         <div className="w-full h-2 bg-gray-400" />
      </div>

      {/* Floating Fruit Elements */}
      <div className="absolute inset-0 pointer-events-none">
         <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-4 border-white/40 opacity-50 animate-[bounce_2s_infinite]" />
         <div className="absolute bottom-12 left-8 w-8 h-8 bg-white/20 rounded-full blur-sm" />
      </div>
    </div>
  );
};

const TiffinTribeCard = () => (
  <div className="w-full h-full bg-[#FDF5E6] relative overflow-hidden flex flex-col items-center justify-center group-hover:bg-[#FFF8E7] transition-colors">
    {/* Corner Decorations - Abstract Food Shapes */}
    <div className="absolute top-[-25px] left-[-25px] w-28 h-28 rounded-full bg-orange-100/50 border-2 border-stone-800/20" />
    <div className="absolute top-[-15px] right-[-35px] w-24 h-24 rounded-full bg-green-100/50 border-2 border-stone-800/20" />
    <div className="absolute bottom-[-35px] left-[0px] w-32 h-32 rounded-full bg-yellow-100/50 border-2 border-stone-800/20" />
    <div className="absolute bottom-[-25px] right-[-25px] w-28 h-28 rounded-full bg-red-100/50 border-2 border-stone-800/20" />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center p-4 group-hover:scale-105 transition-transform duration-500">
       {/* Logo Symbol - Stylized 'F' / Tiffin Box */}
       <div className="w-20 h-20 mb-3 relative">
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-12 h-16 border-4 border-[#C0392B] rounded-sm flex flex-col">
                <div className="flex-1 border-b-2 border-[#C0392B]" />
                <div className="flex-1" />
             </div>
             {/* Handle */}
             <div className="absolute top-0 w-8 h-4 border-t-4 border-l-4 border-r-4 border-[#C0392B] rounded-t-md -translate-y-full" />
             {/* 'F' shape overlay logic or simple geometric representation */}
             <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-10 bg-[#C0392B] opacity-20" />
          </div>
       </div>
       
       <h2 className="font-serif text-3xl font-bold text-[#C0392B] tracking-wide mb-2 leading-none">
         THE <br/>TIFFIN TRIBE
       </h2>
       <div className="w-12 h-[2px] bg-[#C0392B] mb-2" />
       <p className="font-hand text-stone-600 text-sm font-bold leading-tight max-w-[180px]">
         Your Tiffin: A taste of Nostalgia, Delivered to Your Door.
       </p>
    </div>
  </div>
);

const NetflixCard = () => (
  <div className="w-full h-full bg-[#E50914] relative overflow-hidden flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500">
    {/* Dark vignette */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 opacity-60" />

    {/* Noise/Texture */}
    <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

    {/* Content */}
    <div className="relative z-10 text-center transform -rotate-1 group-hover:rotate-0 transition-transform">
      <h2 className="text-5xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-xl font-sans">
        PROTO<br/>THON
      </h2>
      <h3 className="text-3xl font-black text-white leading-[0.9] tracking-tighter drop-shadow-md mt-1 font-sans">
        AND CHILL
      </h3>
      
      {/* Decorative Accessibility Elements */}
      <div className="mt-4 flex justify-center gap-2 opacity-90 items-center">
         <Eye className="w-5 h-5 text-white" />
         <div className="h-1 w-8 bg-white/40 rounded-full" />
         <div className="h-1 w-2 bg-white rounded-full" />
      </div>
    </div>
    
    {/* Bottom text */}
    <div className="absolute bottom-4 left-4 right-4 text-center">
       <p className="text-[8px] text-white/80 font-bold tracking-widest uppercase">
         "Full color, no matter the vision."
       </p>
    </div>
  </div>
);

const FamilyForgeCard = () => (
  <div className="w-full h-full bg-[#FAEBE4] relative overflow-hidden flex flex-col items-center justify-center group-hover:bg-[#FCE3D6] transition-colors">
     {/* Abstract House Background */}
     <div className="absolute inset-0 flex items-end justify-center opacity-30">
        <div className="w-64 h-64 bg-white rounded-t-full" />
     </div>

     {/* Floating Clouds */}
     <div className="absolute top-4 left-4 w-12 h-6 bg-white rounded-full opacity-60 animate-[pulse_4s_infinite]" />
     <div className="absolute top-12 right-8 w-16 h-8 bg-white rounded-full opacity-50 animate-[pulse_5s_infinite]" />

     {/* Content */}
     <div className="relative z-10 flex flex-col items-center group-hover:-translate-y-2 transition-transform duration-500">
        {/* Hand-drawn style House Icon */}
        <div className="w-24 h-24 relative mb-4">
           {/* Roof */}
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[40px] border-r-[40px] border-b-[40px] border-l-transparent border-r-transparent border-b-[#D66D45]" />
           {/* Body */}
           <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-14 bg-[#D66D45] flex items-center justify-center">
              <Heart className="w-8 h-8 text-white fill-white animate-pulse" />
           </div>
        </div>

        <h2 className="font-serif text-3xl font-bold text-stone-800 tracking-tight">Family Forge</h2>
        <div className="w-8 h-1 bg-[#D66D45] my-2 rounded-full" />
        <p className="font-hand text-lg text-[#D66D45]">Child Adoption App</p>
     </div>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const profileImageUrl = "San.JPG";

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('http')) return;
    e.preventDefault();
    setCurrentPage(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleProjectClick = (project: typeof PROJECTS[0]) => {
    if (project.id === 1) {
      setCurrentPage('project-mental-health');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (project.id === 2) {
      setCurrentPage('project-motion-design');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (project.id === 3) {
      setCurrentPage('project-tiffin-tribe');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (project.id === 4) {
      // Direct link for Project 4 (Netflix)
      if (project.link) window.open(project.link, '_blank');
    } else if (project.id === 5) {
      setCurrentPage('project-family-forge');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (project.link) {
      window.open(project.link, '_blank');
    }
  };

  const handleConferenceClick = (conference: typeof CONFERENCES[0]) => {
    if (conference.id === 1) {
      setCurrentPage('conference-product-conference');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const renderHome = () => (
    <div className={`flex flex-col items-center min-h-[65vh] justify-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div id="intro" className="max-w-5xl w-full relative flex flex-col md:flex-row gap-12 items-center md:items-start px-4">
        <div className="relative shrink-0">
          <div className="sketch-box p-3 bg-white rotate-[-3deg] hover:rotate-0 transition-transform duration-500 shadow-lg relative z-10 group">
            <div className="aspect-[3/4] w-56 md:w-72 overflow-hidden sketch-box border-none bg-stone-100">
              <img 
                src={profileImageUrl} 
                alt="Sanjana" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                // Removed onError fallback to ensure the local file San.JPG is prioritized. 
                // Please ensure "San.JPG" is uploaded to your project root.
              />
            </div>
            <div className="mt-3 text-center">
              <span className="font-hand text-2xl text-stone-500">sanjana</span>
            </div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-8 bg-stone-200/40 border border-stone-300/20 rotate-1 shadow-sm pointer-events-none" />
          </div>
          <div className="absolute -top-8 -left-8 w-full h-full sketch-circle border-dashed border-stone-300 -z-10 opacity-60 animate-[spin_30s_linear_infinite]" />
        </div>

        <div className="sketch-box p-10 rotate-[1deg] hover:rotate-0 transition-all duration-500 relative bg-white flex-1 max-w-xl self-center">
          <div className="absolute -top-6 -right-6 w-16 h-16 flex items-center justify-center bg-blue-50 sketch-circle rotate-[-12deg] shadow-sm group cursor-pointer hover:bg-yellow-100 transition-colors">
            <Zap className="w-8 h-8 text-blue-600 group-hover:text-yellow-600 transition-colors" />
          </div>
          <h1 className="text-5xl font-bold mb-6 tracking-tight">I'm Sanjana.</h1>
          <p className="font-hand text-3xl text-stone-700 leading-tight mb-8">
            Product Designer creating clear, user-centered experiences through thoughtful design and product thinking.
          </p>
          <p className="text-stone-500 text-lg leading-relaxed mb-8">
            I merge complex architecture with intuitive aesthetics. Currently building tools that make information feel natural.
          </p>
          <div className="flex flex-wrap gap-6 items-center">
            <button 
              onClick={() => setCurrentPage('portfolio')} 
              className="sketch-box px-8 py-3 text-base bg-stone-900 text-white hover:bg-blue-600 hover:scale-105 transition-all font-bold active:scale-95 shadow-lg"
            >
              Explore Portfolio
            </button>
            <div className="flex items-center gap-2 font-hand text-2xl text-stone-400">
              <MapPin className="w-5 h-5 text-red-400" />
              Boston
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPortfolio = () => (
    <div className={`w-full max-w-7xl px-4 flex flex-col items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="mb-20 text-center max-w-3xl relative">
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-50 sketch-circle -z-10 opacity-50" />
        <h1 className="text-7xl font-bold tracking-tighter mb-6">Selected Projects</h1>
        <p className="font-hand text-4xl text-stone-500 leading-tight">
          A visual record of my work in <span className="text-blue-600 underline decoration-wavy decoration-1 underline-offset-8">systems</span>, <span className="text-blue-600 underline decoration-wavy decoration-1 underline-offset-8">interfaces</span>, and <span className="text-blue-600 underline decoration-wavy decoration-1 underline-offset-8">narratives</span>.
        </p>
      </div>
      
      {/* Changed to Flexbox for perfect centering of the bottom row (2 items) */}
      <div id="portfolio-grid" className="flex flex-wrap justify-center gap-12 items-start relative pb-24 w-full">
         {PROJECTS.map((project, idx) => (
           <div 
             key={project.id} 
             onClick={() => handleProjectClick(project)}
             className="sketch-box p-4 group cursor-pointer bg-white hover:-translate-y-3 hover:scale-[1.03] active:scale-95 transition-all duration-500 relative w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2.5rem)]"
             style={{ transform: `rotate(${(idx % 2 === 0 ? 1 : -1) * (0.5 + Math.random())}deg)` }}
           >
              <div className="aspect-square overflow-hidden sketch-box border-none mb-6 bg-stone-50 relative">
                 {project.id === 1 ? (
                    <PieceOfYouCard />
                 ) : project.id === 2 ? (
                    <MotionDesignCard />
                 ) : project.id === 3 ? (
                    <TiffinTribeCard />
                 ) : project.id === 4 ? (
                    <NetflixCard />
                 ) : project.id === 5 ? (
                    <FamilyForgeCard />
                 ) : (
                    <>
                      <img 
                        src={project.imageUrl} 
                        alt={project.title} 
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                      />
                      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                    </>
                 )}
              </div>
              
              <div className="flex justify-between items-start mb-2">
                 <div className="flex-1 pr-4">
                   <p className="text-[10px] uppercase font-bold text-stone-400 tracking-widest mb-2 border-l-2 border-stone-200 pl-2">{project.category}</p>
                   <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300">{project.title}</h3>
                 </div>
                 <div className="sketch-circle w-12 h-12 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-45 transition-all duration-500 flex-shrink-0 shadow-sm">
                   <ArrowUpRight className="w-6 h-6" />
                 </div>
              </div>
              
              <div className="overflow-hidden h-0 group-hover:h-auto transition-all duration-500 ease-in-out">
                <p className="text-stone-500 mt-4 font-hand text-2xl leading-tight opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  {project.description}
                </p>
                <div className="mt-6 pt-4 border-t border-dashed border-stone-200 flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study <ExternalLink className="w-3 h-3" />
                </div>
              </div>
              
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-stone-100/60 border border-stone-200/20 rotate-[-1deg] opacity-0 group-hover:opacity-100 transition-opacity shadow-sm pointer-events-none" />
           </div>
         ))}
      </div>

      <div className="w-full h-1 bg-stone-200 sketch-box border-none opacity-20 mb-24" />
    </div>
  );

  const renderConferences = () => (
    <div className={`w-full max-w-6xl mt-8 pb-20 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
        <div className="flex items-center gap-6">
          <button 
            onClick={() => setCurrentPage('home')}
            className="sketch-box p-4 hover:bg-stone-100 hover:scale-110 active:scale-90 transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <h1 className="text-6xl font-bold tracking-tight">Speaking & Events</h1>
        </div>
        <div className="sketch-box bg-white px-6 py-2 font-hand text-2xl rotate-2">
          Boston & Beyond — 2025
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {CONFERENCES.map((conf, idx) => (
          <div 
            key={conf.id}
            onClick={() => handleConferenceClick(conf)}
            className={`sketch-box p-8 bg-white relative group transition-all duration-500 shadow-lg hover:shadow-2xl ${
              conf.id === 1 ? 'cursor-pointer hover:-translate-y-2' : 'hover:-rotate-1'
            }`}
            style={{ transform: `rotate(${(idx % 2 === 0 ? -1.5 : 1.5)}deg)` }}
          >
            <div className="aspect-[16/9] overflow-hidden sketch-box border-none mb-8 relative">
              <img 
                src={conf.imageUrl} 
                alt={conf.title} 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                onError={(e) => {
                  if (conf.id === 1) e.currentTarget.src = "https://images.unsplash.com/photo-1540575861501-7ad05823c9f5?auto=format&fit=crop&q=80&w=800";
                }}
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            <div className="space-y-6">
              <div className="border-b-2 border-dashed border-stone-200 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-4xl font-bold text-stone-900 group-hover:text-blue-600 transition-colors">{conf.title}</h2>
                  {conf.description.toLowerCase().includes('taught') && (
                    <div className="flex items-center gap-1 bg-blue-600 text-white px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-tighter animate-pulse">
                      <Star className="w-3 h-3 fill-current" />
                      Instructor
                    </div>
                  )}
                  {conf.id === 1 && (
                    <div className="flex items-center gap-1 bg-red-600 text-white px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-tighter">
                      <Eye className="w-3 h-3 fill-current" />
                      Case Study
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2 text-stone-500 font-bold uppercase tracking-widest text-[10px]">
                    <MapPin className="w-3 h-3 text-blue-500" />
                    {conf.location}
                  </div>
                  <span className="font-hand text-3xl text-blue-600 transform group-hover:scale-110 transition-transform">{conf.date}</span>
                </div>
              </div>
              
              <p className="text-2xl text-stone-600 leading-tight font-hand">
                {conf.description}
              </p>
            </div>
            
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-white sketch-circle border-stone-200 border-2 flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform shadow-sm">
              <Calendar className="w-8 h-8 text-stone-300 group-hover:text-blue-600 transition-colors" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-32 p-16 sketch-box bg-stone-900 text-white text-center relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(37,99,235,0.3),transparent)]" />
        <h3 className="text-5xl font-bold mb-6 relative z-10">Let's build something together.</h3>
        <p className="font-hand text-3xl mb-12 opacity-80 relative z-10">I’m available for design workshops, guest lectures, and panel discussions.</p>
        <a 
          href="mailto:hello@sanjanay.design" 
          className="relative z-10 inline-block sketch-box bg-white text-stone-900 px-12 py-5 font-bold hover:bg-blue-600 hover:text-white hover:scale-110 transition-all active:scale-95 shadow-xl"
        >
          Get in Touch
        </a>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 border-8 border-dashed border-white/5 sketch-circle rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
      </div>
    </div>
  );

  return (
    <div className="studio-bg min-h-screen flex flex-col relative overflow-hidden">
      <RoamingCat />
      
      <header className="fixed top-8 left-8 right-8 flex justify-between items-center z-50">
         <div 
           className="flex items-center gap-4 group cursor-pointer"
           onClick={() => setCurrentPage('home')}
         >
           <div className="w-14 h-14 flex items-center justify-center sketch-box rotate-[-8deg] group-hover:rotate-0 bg-white overflow-hidden p-1 transition-all shadow-md">
             <CatIcon className="w-10 h-10 text-stone-800" />
           </div>
           <div className="flex flex-col">
             <span className="text-3xl font-bold leading-none tracking-tight font-hand group-hover:text-blue-600 transition-colors">Sanss</span>
             <div className="w-full h-[3px] bg-stone-300 mt-1 sketch-box border-none opacity-40" />
           </div>
         </div>
         
         <nav className="flex gap-8 px-8 py-4 sketch-box rounded-full rotate-[0.5deg] bg-white/95 backdrop-blur-md shadow-xl border-stone-200">
           {NAV_ITEMS.map((item) => (
             <a 
               key={item.label} 
               href={item.href} 
               onClick={(e) => handleNavClick(item.href, e)}
               target={item.href.startsWith('http') ? '_blank' : undefined}
               rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
               className={`text-sm font-bold transition-all relative px-1 hover:scale-110 active:scale-90 ${
                 currentPage === item.href ? 'text-blue-600 scale-105' : 'text-stone-800 hover:text-blue-600'
               }`}
             >
               {item.label}
               {currentPage === item.href && (
                 <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-400 opacity-60 sketch-box border-none" />
               )}
             </a>
           ))}
         </nav>
      </header>

      <main className="flex-1 w-full pt-40 px-6 pb-40 relative flex flex-col items-center overflow-y-auto custom-scrollbar scroll-smooth">
        <div className="w-full flex flex-col items-center">
          {currentPage === 'home' && renderHome()}
          {currentPage === 'portfolio' && renderPortfolio()}
          {currentPage === 'conferences' && renderConferences()}
          {currentPage === 'project-mental-health' && (
            <MentalHealthProject onBack={() => setCurrentPage('portfolio')} />
          )}
          {currentPage === 'project-motion-design' && (
            <MotionDesignProject onBack={() => setCurrentPage('portfolio')} />
          )}
          {currentPage === 'project-tiffin-tribe' && (
            <TiffinTribeProject onBack={() => setCurrentPage('portfolio')} />
          )}
          {currentPage === 'project-family-forge' && (
            <ChildAdoptionProject onBack={() => setCurrentPage('portfolio')} />
          )}
          {currentPage === 'conference-product-conference' && (
            <ProductConferenceDetail onBack={() => setCurrentPage('conferences')} />
          )}
        </div>
      </main>

      <footer className="fixed bottom-8 left-8 right-8 flex justify-between items-end z-[100] pointer-events-none">
        <div className="flex items-center gap-6 pointer-events-auto">
          <div className="sketch-box bg-white p-4 flex gap-8 shadow-xl hover:-translate-y-2 transition-transform">
             <a href="https://www.linkedin.com/in/sanjana-yalamanchili/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-all hover:scale-125"><Linkedin className="w-6 h-6" /></a>
             <a href="https://github.com/sanjanayalamanchili" target="_blank" rel="noopener noreferrer" className="hover:text-stone-400 transition-all hover:scale-125"><Github className="w-6 h-6" /></a>
          </div>
        </div>

        <div className="text-right pointer-events-auto hidden lg:block">
           <div className="sketch-box bg-white p-6 rotate-[3deg] hover:rotate-0 transition-all shadow-2xl border-stone-100">
              <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-stone-400 mb-2">Available for projects</p>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-ping absolute opacity-75" />
                <div className="w-3 h-3 bg-green-500 rounded-full relative" />
                <p className="text-lg font-bold">Designer @ Google</p>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
