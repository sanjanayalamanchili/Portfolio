
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, CONFERENCES } from '../constants.tsx';
import { Send, X, MessageCircle, Fish } from 'lucide-react';

type CatState = 'idle' | 'walking' | 'sleeping' | 'stalking' | 'eating';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const RoamingCat: React.FC = () => {
  const [position, setPosition] = useState({ x: 50, y: 90 }); // Percentages
  const [facingRight, setFacingRight] = useState(true);
  const [state, setState] = useState<CatState>('sleeping');
  const [target, setTarget] = useState({ x: 50, y: 90 });
  const [transitionDuration, setTransitionDuration] = useState(3000);
  
  // Interaction State
  const [isLured, setIsLured] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Meow! I'm Sketch. Ask me anything about Sanjana's work." }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Refs to track "AI" state without re-rendering constantly
  const mousePos = useRef({ x: 0, y: 0 });
  const lastMouseMoveTime = useRef(Date.now());
  const catRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isChatOpen]);

  // 1. Track Mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      lastMouseMoveTime.current = Date.now();
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // 2. The "Brain" Loop (Movement)
  useEffect(() => {
    const brainInterval = setInterval(() => {
      // If chatting or being lured, pause random brain activity
      if (isChatOpen || isLured) {
        if (state !== 'idle' && state !== 'eating' && !isLured) setState('idle');
        return; 
      }

      const now = Date.now();
      const timeSinceMouse = now - lastMouseMoveTime.current;
      const isMouseActive = timeSinceMouse < 2000;

      // Decide what to do
      if (isMouseActive && Math.random() > 0.3) {
        // Stalk mode: Move towards mouse
        const xPercent = (mousePos.current.x / window.innerWidth) * 100;
        const yPercent = (mousePos.current.y / window.innerHeight) * 100;
        
        // Don't sit exactly ON the mouse, sit nearby
        const offsetX = (Math.random() - 0.5) * 10;
        const offsetY = (Math.random() - 0.5) * 10;
        
        moveTo(xPercent + offsetX, yPercent + offsetY, 'stalking');
      } else {
        // Bored mode: Wander or Sleep
        const randomChoice = Math.random();
        
        if (randomChoice < 0.4) {
          // Sleep for a bit
          setState('sleeping');
        } else {
          // Wander to random spot
          const newX = Math.random() * 90 + 5; // Keep within 5-95%
          const newY = Math.random() * 90 + 5;
          moveTo(newX, newY, 'walking');
        }
      }
    }, 4000); // Think every 4 seconds

    return () => clearInterval(brainInterval);
  }, [isChatOpen, state, isLured]);

  const moveTo = (x: number, y: number, mode: CatState) => {
    setFacingRight(x > position.x);
    setTarget({ x, y });
    setState(mode);
    
    // After movement duration, switch to idle/sit
    setTimeout(() => {
      setPosition({ x, y });
      if (mode !== 'sleeping') setState('idle');
    }, 3000); // Match CSS transition duration
  };

  const toggleChat = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isChatOpen) {
      // Close chat and resume normal cat life
      setIsChatOpen(false);
      setState('idle');
    } else {
      // START LURE ANIMATION
      setIsLured(true);
      setTransitionDuration(1500); // Run faster to the treat
      
      const treatX = 85; // Bottom Right area
      const treatY = 88;
      
      // Face the treat
      setFacingRight(treatX > position.x);
      setTarget({ x: treatX, y: treatY });
      setState('stalking'); // Running animation
      
      // When arrived at treat
      setTimeout(() => {
        setIsLured(false);
        setIsChatOpen(true);
        setState('eating'); // Briefly eat or sit
        setTransitionDuration(3000); // Reset speed
        setPosition({ x: treatX, y: treatY }); // Update internal pos
        
        // Switch to idle after a moment of "arriving"
        setTimeout(() => setState('idle'), 500);
      }, 1500);
    }
  };

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMsg = inputText.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInputText("");
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const projectContext = PROJECTS.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n');
      const confContext = CONFERENCES.map(c => `- ${c.title} in ${c.location} (${c.date}): ${c.description}`).join('\n');
      
      const systemInstruction = `
        You are 'Sketch', a portfolio assistant cat living on Sanjana's website. 
        You are witty, slightly lazy, and speak with occasional cat puns (but don't overdo it).
        Your goal is to help visitors learn about Sanjana.
        
        About Sanjana:
        - Product Designer creating clear, user-centered experiences through thoughtful design
        - Based in Boston
        - Merges complex architecture with intuitive aesthetics.
        
        Her Projects:
        ${projectContext}
        
        Her Speaking & Events:
        ${confContext}
        
        Keep your answers concise (under 40 words usually). If someone asks to see a project, tell them to click on the cards.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: systemInstruction,
        }
      });

      const aiText = response.text || "Purr... something went wrong. Try again?";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error("AI Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Hiss! My connection is fuzzy. (Check API Key)" }]);
    } finally {
      setIsLoading(false);
    }
  };

  const isMoving = state === 'walking' || state === 'stalking' || isLured;

  return (
    <>
      {/* The Treat (Visual Lure) */}
      <div 
        className={`fixed z-[45] pointer-events-none transition-all duration-500 ease-out ${isLured ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ left: '85%', top: '88%' }}
      >
        <div className="animate-bounce">
          <Fish className="w-8 h-8 text-blue-400 fill-blue-100" />
        </div>
        <div className="w-8 h-2 bg-black/10 blur-sm rounded-full mt-1" />
      </div>

      {/* The Cat */}
      <div 
        ref={catRef}
        className="fixed z-[999] ease-in-out"
        style={{ 
          left: `${target.x}%`, 
          top: `${target.y}%`,
          transform: `translate(-50%, -100%)`, 
          transitionDuration: `${transitionDuration}ms`,
          transitionProperty: 'left, top'
        }}
      >
        {/* Container for flipping the cat graphic */}
        <div style={{ transform: `scaleX(${facingRight ? 1 : -1}) scale(0.8)` }}>
          <div className="relative group cursor-pointer" onClick={toggleChat}>
            
            {/* Status Icons */}
            {!isChatOpen && !isLured && (
              <>
                <div className={`absolute -top-14 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${state === 'sleeping' ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="font-hand text-2xl font-bold text-stone-400">Zzz...</span>
                </div>
                <div className={`absolute -top-14 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${state === 'stalking' ? 'opacity-100' : 'opacity-0'}`}>
                  <span className="font-hand text-2xl font-bold text-stone-400">?</span>
                </div>
                <div className="absolute -right-8 top-0 opacity-0 group-hover:opacity-100 transition-opacity">
                   <MessageCircle className="w-6 h-6 text-blue-500 fill-blue-50 animate-bounce" />
                </div>
              </>
            )}

            {/* NEW CAT SVG - More detailed and cat-like */}
            <svg viewBox="0 0 120 100" className="w-24 h-24 drop-shadow-sm overflow-visible">
                {/* Tail - Wags when idle */}
                <path 
                  d="M20 55 C10 50 5 20 25 15" 
                  stroke="#2a2a2a" strokeWidth="3" strokeLinecap="round" fill="none"
                  className={`origin-[20px_55px] transition-transform duration-1000 ${state === 'idle' || state === 'eating' ? 'animate-[pulse_3s_ease-in-out_infinite]' : ''}`}
                />
                
                {/* Back Legs */}
                <path d="M35 70 L35 90" stroke="#2a2a2a" strokeWidth="3" strokeLinecap="round" className={isMoving ? 'animate-bounce' : ''} style={{ animationDuration: '0.4s' }} />
                <path d="M50 70 L50 90" stroke="#2a2a2a" strokeWidth="3" strokeLinecap="round" className={isMoving ? 'animate-bounce' : ''} style={{ animationDuration: '0.4s', animationDelay: '0.2s' }} />

                {/* Body */}
                <path 
                  d="M25 60 C25 30 40 30 60 30 C80 30 90 45 90 60 C90 80 35 80 25 60 Z" 
                  fill="white" stroke="#2a2a2a" strokeWidth="3" 
                />

                {/* Front Legs */}
                <path d="M70 75 L70 95" stroke="#2a2a2a" strokeWidth="3" strokeLinecap="round" className={isMoving ? 'animate-bounce' : ''} style={{ animationDuration: '0.4s' }} />
                <path d="M85 75 L85 95" stroke="#2a2a2a" strokeWidth="3" strokeLinecap="round" className={isMoving ? 'animate-bounce' : ''} style={{ animationDuration: '0.4s', animationDelay: '0.2s' }} />

                {/* Head Group */}
                <g transform={state === 'sleeping' ? "translate(85, 55) rotate(15)" : "translate(85, 40)"} className="transition-all duration-500">
                    {/* Ears */}
                    <path d="M-8 -10 L-12 -25 L2 -12" fill="white" stroke="#2a2a2a" strokeWidth="3" strokeLinejoin="round" />
                    <path d="M8 -10 L12 -25 L-2 -12" fill="white" stroke="#2a2a2a" strokeWidth="3" strokeLinejoin="round" />
                    
                    {/* Head Shape */}
                    <circle r="16" fill="white" stroke="#2a2a2a" strokeWidth="3" />
                    
                    {/* Face Features */}
                    {state === 'sleeping' ? (
                       <g opacity="0.6">
                         <path d="M-8 -2 Q-4 2 0 -2" stroke="#2a2a2a" strokeWidth="2" fill="none" />
                         <path d="M2 -2 Q6 2 10 -2" stroke="#2a2a2a" strokeWidth="2" fill="none" />
                       </g>
                    ) : (
                       <g>
                         <circle cx="-6" cy="-2" r="2" fill="#2a2a2a" />
                         <circle cx="6" cy="-2" r="2" fill="#2a2a2a" />
                         <path d="M-2 4 L2 4 L0 7 Z" fill="#2a2a2a" /> {/* Nose */}
                         {/* Mouth */}
                         {state === 'eating' && (
                            <path d="M-2 8 Q0 10 2 8" stroke="#2a2a2a" strokeWidth="1.5" fill="none" />
                         )}
                       </g>
                    )}
                    
                    {/* Whiskers */}
                    <path d="M12 2 L22 0" stroke="#2a2a2a" strokeWidth="1.5" />
                    <path d="M12 6 L22 8" stroke="#2a2a2a" strokeWidth="1.5" />
                    <path d="M-12 2 L-22 0" stroke="#2a2a2a" strokeWidth="1.5" />
                    <path d="M-12 6 L-22 8" stroke="#2a2a2a" strokeWidth="1.5" />
                </g>
            </svg>

            {/* Shadow */}
            <div className="absolute bottom-1 left-4 w-16 h-2 bg-black/10 blur-[2px] rounded-full" />
          </div>
        </div>

        {/* Chat Bubble Interface */}
        {isChatOpen && (
          <div 
            className="absolute bottom-[110%] right-[-20px] w-80 sm:w-96 bg-white sketch-box p-0 flex flex-col overflow-hidden shadow-2xl cursor-default origin-bottom-right animate-[popIn_0.3s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-stone-100 p-3 border-b-2 border-stone-200 border-dashed flex justify-between items-center">
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                 <span className="font-hand font-bold text-lg">Chat with Sketch</span>
               </div>
               <button onClick={() => setIsChatOpen(false)} className="hover:text-red-500 transition-colors">
                 <X className="w-5 h-5" />
               </button>
            </div>

            {/* Messages Area */}
            <div className="h-64 overflow-y-auto p-4 flex flex-col gap-3 custom-scrollbar bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 text-sm font-hand text-lg leading-tight rounded-xl border-2 border-stone-800 ${
                      msg.role === 'user' 
                        ? 'bg-blue-50 rounded-br-none' 
                        : 'bg-white rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="bg-stone-100 p-3 rounded-xl rounded-bl-none border-2 border-stone-200 flex gap-1">
                     <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce" />
                     <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-75" />
                     <div className="w-2 h-2 bg-stone-400 rounded-full animate-bounce delay-150" />
                   </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t-2 border-stone-200 flex gap-2">
              <input 
                type="text" 
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Ask me something..."
                className="flex-1 font-hand text-xl bg-transparent border-b-2 border-stone-300 focus:border-blue-500 outline-none px-2 pb-1 placeholder:text-stone-300"
                autoFocus
              />
              <button 
                type="submit" 
                disabled={isLoading || !inputText.trim()}
                className="p-2 hover:bg-stone-100 rounded-full transition-colors disabled:opacity-50"
              >
                <Send className="w-5 h-5 text-stone-700" />
              </button>
            </form>

            {/* Speech Bubble Triangle */}
            <div className="absolute -bottom-3 right-12 w-6 h-6 bg-white border-b-2 border-r-2 border-stone-800 rotate-45" />
          </div>
        )}
      </div>
    </>
  );
};

export default RoamingCat;
