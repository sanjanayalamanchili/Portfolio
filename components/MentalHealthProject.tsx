
import React, { useEffect } from 'react';
import { ChevronLeft, ArrowRight, Heart, Shield, Users, Activity, ExternalLink, Sparkles, Smartphone, Palette, Smile, Frown, Meh, Sun, CloudRain, Zap, Search, Bell, Menu, Battery, Wifi, Signal, CheckSquare, Calendar, User } from 'lucide-react';

interface Props {
  onBack: () => void;
}

const MentalHealthProject: React.FC<Props> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full max-w-5xl px-4 pb-32 animate-[fadeIn_0.5s_ease-out]">
      {/* Navigation Buttons */}
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
          href="https://www.figma.com/proto/5M7isbk783DeBJ1q0Qnb27/Mental-Health-assignment?page-id=0%3A1&node-id=8-3864&t=bWcKSqCg6mDCJhQa-1" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto relative group"
        >
          <div className="absolute inset-0 bg-blue-800 border-2 border-stone-800 rounded-sm skew-x-[1deg] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] group-hover:translate-y-1 group-hover:shadow-[2px_2px_0px_rgba(0,0,0,0.2)] transition-all" />
          <div className="relative px-6 py-3 flex items-center gap-2 bg-blue-600 border-2 border-stone-800 skew-x-[1deg] -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all">
            <span className="font-hand text-xl font-bold text-white">View Prototype</span>
            <ExternalLink className="w-4 h-4 text-white" />
          </div>
        </a>
      </div>

      {/* Hero Section - CSS App Mockup */}
      <div className="relative mb-24 -mt-4">
        {/* The Frame */}
        <div className="p-8 bg-white border-4 border-stone-800 rounded-[40px] shadow-[10px_15px_0px_rgba(0,0,0,0.1)] rotate-[-1deg] relative z-10 hover:rotate-0 transition-transform duration-700 flex justify-center items-center overflow-hidden">
           
           {/* Abstract shapes behind phone */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl -z-10" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />

           {/* Phone Mockup Container */}
           <div className="relative w-[320px] md:w-[360px] h-[720px] bg-white rounded-[40px] border-[8px] border-stone-900 shadow-2xl overflow-hidden flex flex-col font-sans">
              
              {/* Status Bar */}
              <div className="h-12 bg-white flex justify-between items-center px-6 text-xs font-bold text-stone-900 z-20">
                 <span>8:30</span>
                 <div className="w-24 h-6 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-3" /> {/* Notch */}
                 <div className="flex gap-1">
                   <Signal className="w-3 h-3" />
                   <Wifi className="w-3 h-3" />
                   <Battery className="w-3 h-3" />
                 </div>
              </div>

              {/* App Content Scrollable */}
              <div className="flex-1 overflow-y-auto bg-[#FDF8F6] custom-scrollbar px-6 pt-2 pb-20 relative">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                     <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center border border-stone-300">
                        <Menu className="w-4 h-4 text-stone-600" />
                     </div>
                     <div className="flex gap-2">
                        <div className="bg-white rounded-full px-3 py-1 flex items-center gap-2 text-xs text-stone-400 shadow-sm border border-stone-100">
                           <Search className="w-3 h-3" />
                           Search...
                        </div>
                        <div className="bg-yellow-400 rounded-full px-3 py-1 text-[10px] font-bold text-stone-900 flex items-center shadow-sm">
                           Chat with AI
                        </div>
                        <div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center border border-stone-300">
                           <User className="w-4 h-4 text-stone-600" />
                        </div>
                     </div>
                  </div>

                  {/* Greeting */}
                  <div className="mb-6">
                     <h2 className="text-xl font-serif text-stone-800">Hello San,</h2>
                     <p className="text-xs text-stone-500">How are you feeling today?</p>
                  </div>

                  {/* Daily Mood Log */}
                  <div className="mb-6">
                     <h3 className="text-sm font-bold text-stone-800 mb-3">Daily Mood Log</h3>
                     <div className="flex justify-between px-2">
                        {/* Moods */}
                        <div className="flex flex-col items-center gap-1 group cursor-pointer">
                           <div className="w-10 h-10 rounded-full bg-[#A3D9A5] flex items-center justify-center border border-stone-200 shadow-sm group-hover:scale-110 transition-transform">
                              <Smile className="w-6 h-6 text-stone-800" />
                           </div>
                        </div>
                        <div className="flex flex-col items-center gap-1 group cursor-pointer">
                           <div className="w-10 h-10 rounded-full bg-[#FFE59E] flex items-center justify-center border border-stone-200 shadow-sm group-hover:scale-110 transition-transform">
                              <Sun className="w-6 h-6 text-stone-800" />
                           </div>
                        </div>
                        <div className="flex flex-col items-center gap-1 group cursor-pointer">
                           <div className="w-10 h-10 rounded-full bg-[#D7C0AE] flex items-center justify-center border border-stone-200 shadow-sm group-hover:scale-110 transition-transform">
                              <Meh className="w-6 h-6 text-stone-800" />
                           </div>
                        </div>
                        <div className="flex flex-col items-center gap-1 group cursor-pointer">
                           <div className="w-10 h-10 rounded-full bg-[#FFAD87] flex items-center justify-center border border-stone-200 shadow-sm group-hover:scale-110 transition-transform">
                              <Frown className="w-6 h-6 text-stone-800" />
                           </div>
                        </div>
                        <div className="flex flex-col items-center gap-1 group cursor-pointer">
                           <div className="w-10 h-10 rounded-full bg-[#CBAACB] flex items-center justify-center border border-stone-200 shadow-sm group-hover:scale-110 transition-transform">
                              <CloudRain className="w-6 h-6 text-stone-800" />
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Therapist Card */}
                  <div className="bg-[#EEE0DA] rounded-3xl p-5 mb-6 relative overflow-hidden shadow-sm">
                     <div className="relative z-10 w-2/3">
                        <h3 className="text-lg font-bold text-stone-800 leading-tight mb-3">Feel Like Talking to a Therapist?</h3>
                        <button className="bg-[#D7C0AE] text-stone-800 text-[10px] font-bold px-4 py-2 rounded-full border border-stone-800/10 hover:bg-white transition-colors">
                           Schedule a Session
                        </button>
                     </div>
                     {/* Illustration Placeholder */}
                     <div className="absolute -right-4 top-4 w-32 h-32">
                        <Users className="w-full h-full text-stone-800 opacity-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                           <Heart className="w-12 h-12 text-[#9B7E6B] fill-[#9B7E6B]" />
                        </div>
                     </div>
                  </div>

                  {/* Tasks Section */}
                  <div className="mb-6 flex gap-4">
                     <div className="flex-1">
                        <h3 className="text-sm font-bold text-stone-800 mb-3">Your Tasks</h3>
                        <div className="space-y-3">
                           <div className="flex items-center gap-3 group cursor-pointer">
                              <div className="w-5 h-5 border-2 border-stone-800 rounded flex items-center justify-center group-hover:bg-stone-800 transition-colors">
                                 <div className="w-3 h-3 bg-transparent group-hover:bg-white" />
                              </div>
                              <span className="text-xs text-stone-600 group-hover:line-through transition-all">Call with therapist</span>
                           </div>
                           <div className="flex items-center gap-3 group cursor-pointer">
                              <div className="w-5 h-5 border-2 border-stone-800 rounded flex items-center justify-center group-hover:bg-stone-800 transition-colors">
                                 <div className="w-3 h-3 bg-transparent group-hover:bg-white" />
                              </div>
                              <span className="text-xs text-stone-600 group-hover:line-through transition-all">Journaling</span>
                           </div>
                           <div className="flex items-center gap-3 group cursor-pointer">
                              <div className="w-5 h-5 border-2 border-stone-800 rounded flex items-center justify-center group-hover:bg-stone-800 transition-colors">
                                 <div className="w-3 h-3 bg-transparent group-hover:bg-white" />
                              </div>
                              <span className="text-xs text-stone-600 group-hover:line-through transition-all">Weekly exercises</span>
                           </div>
                        </div>
                     </div>
                     {/* Sketchy Illustration area */}
                     <div className="w-24 flex items-center justify-center">
                        <Sparkles className="w-16 h-16 text-stone-300" />
                     </div>
                  </div>

                  {/* Upcoming Appointments */}
                  <div className="bg-[#E8E4E1] rounded-3xl p-5 mb-6">
                     <h3 className="text-lg font-bold text-stone-800 mb-2">Upcoming Appointments</h3>
                     <div className="flex items-center gap-2 text-stone-600 text-xs">
                        <Calendar className="w-4 h-4" />
                        <span>Next Appointment Tomorrow 3pm</span>
                     </div>
                  </div>

              </div>

              {/* Bottom Nav */}
              <div className="h-16 bg-white border-t border-stone-100 flex justify-around items-center px-2 z-20">
                 <div className="p-2 text-stone-800"><Smile className="w-6 h-6" /></div>
                 <div className="p-2 text-stone-300 hover:text-stone-600"><Search className="w-6 h-6" /></div>
                 <div className="p-2 text-stone-300 hover:text-stone-600"><Calendar className="w-6 h-6" /></div>
                 <div className="p-2 text-stone-300 hover:text-stone-600"><User className="w-6 h-6" /></div>
              </div>
              
              {/* Home Indicator */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black rounded-full z-30" />

              {/* Screen Glare */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 to-transparent pointer-events-none z-40" />
           </div>

           {/* Decorative partial phones to imply carousel */}
           <div className="absolute right-[-140px] top-1/2 -translate-y-1/2 w-[280px] h-[640px] bg-stone-50 rounded-[30px] border-4 border-stone-200 opacity-50 blur-[1px] -z-10" />
           <div className="absolute left-[-140px] top-1/2 -translate-y-1/2 w-[280px] h-[640px] bg-stone-50 rounded-[30px] border-4 border-stone-200 opacity-50 blur-[1px] -z-10" />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -top-8 -right-8 w-32 h-32 sketch-circle bg-yellow-100/80 -z-10 animate-pulse border-2 border-stone-800 border-dashed" />
        <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-dashed border-stone-300 rounded-[40px] -z-10 rotate-[1deg]" />
      </div>

      {/* Title & Metadata */}
      <div className="flex flex-col md:flex-row gap-12 mb-20">
        <div className="flex-1">
          <h1 className="text-6xl font-bold mb-6 tracking-tight">Piece of You</h1>
          <p className="font-hand text-3xl text-stone-600 leading-relaxed">
            A calming mental wellness app designed to encourage reflection, emotional regulation, and daily journaling.
          </p>
        </div>
        <div className="w-full md:w-80 shrink-0">
          <div className="sketch-box bg-white p-8 rotate-1 shadow-md">
            <div className="space-y-6">
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Role</h3>
                <p className="font-hand text-xl">UX Designer (Solo)</p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Timeline</h3>
                <p className="font-hand text-xl">4 Weeks</p>
              </div>
              <div>
                <h3 className="text-[10px] uppercase tracking-widest text-stone-400 font-bold mb-1">Tools</h3>
                <p className="font-hand text-xl">Figma, FigJam, Maze</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* The Context - Sticky Note Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
        <div className="sketch-box bg-yellow-50 p-8 rotate-[-1deg] relative group hover:rotate-0 transition-transform">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/50 -rotate-1 shadow-sm" />
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Shield className="w-6 h-6 text-orange-500" />
            The Problem
          </h2>
          <p className="font-hand text-2xl text-stone-700 leading-relaxed">
            Many existing journaling apps feel overwhelming — either too clinical or too "trendy." Users wanted a calming, private, and emotionally intuitive space to track their mental state without pressure or judgment.
          </p>
        </div>

        <div className="sketch-box bg-blue-50 p-8 rotate-[1deg] relative group hover:rotate-0 transition-transform">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-blue-200/50 rotate-1 shadow-sm" />
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
            <Heart className="w-6 h-6 text-blue-500" />
            UX Goals
          </h2>
          <p className="font-hand text-2xl text-stone-700 leading-relaxed">
            Design a low-friction journaling experience. Provide visual mood tracking that doesn’t feel cold. Keep interactions short, sweet, and safe.
          </p>
        </div>
      </div>

      {/* Process / Research */}
      <div className="mb-32 relative">
        <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-stone-200 border-l-2 border-dashed border-stone-300" />
        
        {/* Step 1: Research */}
        <div className="relative pl-16 mb-16">
          <div className="absolute left-4 top-2 w-8 h-8 sketch-circle bg-white border-2 border-stone-800 flex items-center justify-center font-bold">1</div>
          <h3 className="text-4xl font-bold mb-6">Research & Insights</h3>
          <p className="text-xl text-stone-600 mb-8 max-w-2xl leading-relaxed">
            Interviewed 5 users (ages 18–30) who journal occasionally. The key takeaway: users want emotional privacy and visual simplicity over complex analytics.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Users, label: "Privacy First", text: "Emotional privacy > social sharing." },
              { icon: Activity, label: "Simplicity", text: "Mood visuals > cold analytics." },
              { icon: Sparkles, label: "Guidance", text: "Prompts help on tough days." }
            ].map((item, i) => (
              <div key={i} className="sketch-box p-6 bg-white flex flex-col items-center text-center gap-3">
                <item.icon className="w-8 h-8 text-stone-400" />
                <span className="font-bold">{item.label}</span>
                <span className="font-hand text-lg text-stone-500">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step 2: Design Process */}
        <div className="relative pl-16">
           <div className="absolute left-4 top-2 w-8 h-8 sketch-circle bg-white border-2 border-stone-800 flex items-center justify-center font-bold">2</div>
           <h3 className="text-4xl font-bold mb-6">Design Process</h3>
           
           <div className="space-y-12">
             <div className="flex flex-col md:flex-row gap-8 items-start">
               <div className="flex-1">
                 <div className="flex items-center gap-3 mb-3">
                   <Smartphone className="w-6 h-6 text-blue-500" />
                   <h4 className="text-2xl font-bold">Wireframes & IA</h4>
                 </div>
                 <p className="text-lg text-stone-600 leading-relaxed font-hand text-xl">
                   Prioritized a 3-tap entry flow: <br/>Open App → Select Mood → Write.
                 </p>
               </div>
               <div className="flex-1">
                 <div className="flex items-center gap-3 mb-3">
                   <Palette className="w-6 h-6 text-purple-500" />
                   <h4 className="text-2xl font-bold">High-Fidelity UI</h4>
                 </div>
                 <p className="text-lg text-stone-600 leading-relaxed font-hand text-xl">
                   Calming pastels, soft shadows, and WCAG 2.1 accessible colors.
                 </p>
               </div>
             </div>

             <div className="sketch-box p-3 bg-white rotate-[1deg] shadow-lg mt-8 hover:scale-[1.02] transition-transform duration-300">
                <div className="aspect-[2/1] overflow-hidden relative group">
                  <a 
                    href="https://www.figma.com/proto/5M7isbk783DeBJ1q0Qnb27/Mental-Health-assignment?page-id=0%3A1&node-id=8-3864&t=bWcKSqCg6mDCJhQa-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full cursor-pointer"
                  >
                    <div className="w-full h-full bg-[#fcfbf9] relative flex flex-col items-center justify-center border-4 border-transparent group-hover:border-blue-100 transition-colors">
                       {/* Background Texture */}
                       <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" />

                       {/* Top "Blobs" */}
                       <div className="absolute top-[-20px] left-0 w-full flex justify-around opacity-90">
                          <div className="w-20 h-20 bg-green-200/80 rounded-full flex items-center justify-center translate-y-2 shadow-sm border-2 border-stone-800"><Smile className="text-stone-800 w-10 h-10" strokeWidth={2.5} /></div>
                          <div className="w-20 h-20 bg-yellow-200/80 rounded-full flex items-center justify-center -translate-y-4 shadow-sm border-2 border-stone-800"><Sun className="text-stone-800 w-10 h-10" strokeWidth={2.5} /></div>
                          <div className="w-20 h-20 bg-pink-200/80 rounded-full flex items-center justify-center translate-y-1 shadow-sm border-2 border-stone-800"><Heart className="text-stone-800 w-10 h-10" strokeWidth={2.5} /></div>
                          <div className="w-20 h-20 bg-blue-200/80 rounded-full flex items-center justify-center -translate-y-2 shadow-sm border-2 border-stone-800"><CloudRain className="text-stone-800 w-10 h-10" strokeWidth={2.5} /></div>
                       </div>

                       {/* Center Content */}
                       <div className="text-center z-10 transform group-hover:scale-105 transition-transform duration-500 mt-4">
                           <div className="flex justify-center -space-x-4 mb-4 opacity-100">
                               <div className="w-12 h-12 border-2 border-stone-800 rounded-[10px] bg-white flex items-center justify-center rotate-[-12deg] shadow-md z-10 text-xl font-hand font-bold text-green-500">P</div>
                               <div className="w-12 h-12 border-2 border-stone-800 rounded-[10px] bg-white flex items-center justify-center rotate-[12deg] shadow-md z-20 text-xl font-hand font-bold text-pink-500">O</div>
                               <div className="w-12 h-12 border-2 border-stone-800 rounded-[10px] bg-white flex items-center justify-center rotate-[-5deg] shadow-md z-10 text-xl font-hand font-bold text-blue-500">Y</div>
                           </div>
                           <h2 className="font-hand text-6xl font-bold mb-2 tracking-wide text-stone-900 drop-shadow-sm">PIECE OF YOU</h2>
                           <div className="inline-flex items-center gap-2 bg-stone-900 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest mt-4 group-hover:bg-blue-600 transition-colors shadow-lg">
                             View Interactive Prototype <ExternalLink className="w-4 h-4" />
                           </div>
                       </div>

                       {/* Bottom "Blobs" */}
                       <div className="absolute bottom-[-30px] left-0 w-full flex justify-around opacity-90">
                          <div className="w-24 h-24 bg-purple-200/80 rounded-full flex items-center justify-center translate-y-6 shadow-sm border-2 border-stone-800"><Zap className="text-stone-800 w-10 h-10" strokeWidth={2.5} /></div>
                          <div className="w-20 h-20 bg-stone-200/80 rounded-full flex items-center justify-center -translate-y-2 shadow-sm border-2 border-stone-800"><Meh className="text-stone-800 w-10 h-10" strokeWidth={2.5} /></div>
                          <div className="w-28 h-28 bg-orange-200/80 rounded-full flex items-center justify-center translate-y-8 shadow-sm border-2 border-stone-800"><Frown className="text-stone-800 w-10 h-10" strokeWidth={2.5} /></div>
                       </div>
                    </div>
                  </a>
                </div>
             </div>
           </div>
        </div>
      </div>

      {/* Outcome Section */}
      <div className="sketch-box bg-stone-900 text-stone-100 p-12 text-center relative overflow-hidden mb-24">
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-6">The Impact</h2>
          <p className="text-2xl font-hand opacity-80 max-w-3xl mx-auto mb-8">
            "It felt safe and unlike other tracking tools." — Usability Participant
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-12">
             <div>
               <span className="block text-5xl font-bold text-blue-400 mb-1">40%</span>
               <span className="text-xs uppercase tracking-widest opacity-60">Faster Entry Time</span>
             </div>
             <div>
               <span className="block text-5xl font-bold text-green-400 mb-1">3/4</span>
               <span className="text-xs uppercase tracking-widest opacity-60">Users felt "Safe"</span>
             </div>
          </div>
        </div>
        
        {/* Abstract Background patterns */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 blur-[80px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-600/20 blur-[80px] rounded-full" />
      </div>

      {/* Next Steps */}
      <div className="mb-24 px-8 py-8 border-2 border-dashed border-stone-300 bg-stone-50 rounded-lg">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <ArrowRight className="w-5 h-5" />
          Next Steps
        </h3>
        <ul className="list-disc list-inside font-hand text-2xl space-y-2 text-stone-600">
          <li>Expand into personalized journaling prompts powered by GenAI.</li>
          <li>Introduce streak-based motivation features without pressure.</li>
          <li>Conduct long-term retention testing with a broader user pool.</li>
        </ul>
      </div>

      {/* Next Project Teaser */}
      <div className="flex justify-end">
        <button onClick={onBack} className="flex items-center gap-4 group opacity-60 hover:opacity-100 transition-opacity">
           <div className="text-right">
             <span className="block text-xs uppercase tracking-widest font-bold text-stone-400">Next Project</span>
             <span className="font-hand text-2xl">Google Maps Design</span>
           </div>
           <div className="w-12 h-12 sketch-circle border-2 border-stone-300 flex items-center justify-center group-hover:bg-stone-900 group-hover:text-white transition-colors">
             <ArrowRight className="w-5 h-5" />
           </div>
        </button>
      </div>

    </div>
  );
};

export default MentalHealthProject;
