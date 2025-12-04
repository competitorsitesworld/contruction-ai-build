import React from 'react';
import { Button } from './UI';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-industrial-950">
      {/* Background Image with Heavy Overlay for Text Contrast */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
          alt="Modern Construction Site" 
          className="w-full h-full object-cover opacity-60"
        />
        {/* Dark overlay to ensure white text is readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/80 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-4xl opacity-0 animate-[fadeIn_1s_ease-out_forwards]">
          
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-safety text-industrial-950 px-3 py-1 font-bold text-xs uppercase tracking-widest rounded-sm">
              Established 1985
            </span>
            <div className="h-[1px] w-20 bg-white/30"></div>
          </div>
          
          <h1 className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-white leading-[0.9] mb-8 tracking-tight">
            BUILT FOR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-safety to-yellow-200">
              TOMORROW
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-200 mb-12 max-w-2xl font-light leading-relaxed drop-shadow-md">
            We deliver complex industrial, commercial, and residential projects with precision engineering and uncompromising safety standards.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button size="lg" className="border-2 border-safety" onClick={() => document.getElementById('projects')?.scrollIntoView()}>
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white hover:text-industrial-950 hover:border-white" 
              onClick={() => document.getElementById('contact')?.scrollIntoView()}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>

      {/* Modern Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-safety animate-[scrollDown_1.5s_infinite]"></div>
        </div>
      </div>
      
      <style>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};