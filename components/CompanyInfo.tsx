import React from 'react';
import { SectionWrapper, SectionHeader } from './UI';

export const AboutSection: React.FC = () => (
  <SectionWrapper id="about" className="bg-white">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-industrial-900 z-0"></div>
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop" alt="Construction worker" className="w-full h-80 object-cover mt-12 grayscale hover:grayscale-0 transition-all duration-700" />
          <img src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?q=80&w=800&auto=format&fit=crop" alt="Blueprints" className="w-full h-80 object-cover grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-safety z-0"></div>
      </div>
      <div>
        <SectionHeader title="Building Trust Since 1985" subtitle="Who We Are" />
        <p className="text-xl md:text-2xl font-light text-industrial-900 mb-8 leading-relaxed">
          We bridge the gap between <span className="font-bold underline decoration-safety underline-offset-4">vision</span> and <span className="font-bold underline decoration-safety underline-offset-4">reality</span>.
        </p>
        <p className="text-industrial-600 mb-8 leading-relaxed max-w-lg">
          Structure & Form began with a simple mission. For over three decades, we have been the silent force behind some of the city's most iconic skylines and comfortable homes. We believe a building is more than concrete and steel; it is a space for life to happen.
        </p>
        
        <div className="grid grid-cols-2 gap-8 border-t border-industrial-200 pt-8">
          <div>
            <h4 className="font-display font-bold text-5xl text-industrial-900 mb-2">350+</h4>
            <p className="text-industrial-500 text-xs font-bold uppercase tracking-widest">Projects Completed</p>
          </div>
          <div>
            <h4 className="font-display font-bold text-5xl text-industrial-900 mb-2">100%</h4>
            <p className="text-industrial-500 text-xs font-bold uppercase tracking-widest">Safety Record</p>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
);

export const SafetySection: React.FC = () => (
  <div className="bg-safety py-20 relative overflow-hidden">
    {/* Decorative industrial stripes */}
    <div className="absolute inset-0 opacity-10" 
         style={{backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, transparent 10px, transparent 20px)'}}></div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
             <div className="h-1 w-12 bg-black"></div>
             <span className="font-bold uppercase tracking-widest text-xs">Zero Compromise</span>
          </div>
          <h3 className="font-display font-bold text-4xl md:text-5xl text-black mb-4 uppercase tracking-tight">
            Safety is our #1 Priority
          </h3>
          <p className="text-black/80 text-lg md:text-xl font-medium max-w-2xl leading-relaxed">
            We adhere to the strictest OSHA regulations and implement proprietary safety protocols to ensure every worker goes home safe, every day.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-6 shrink-0">
            <div className="bg-black text-white p-6 min-w-[160px] text-center border-4 border-black hover:bg-transparent hover:text-black transition-colors duration-300">
                <span className="block font-display font-bold text-3xl mb-1">ISO</span>
                <span className="text-xs uppercase font-bold tracking-widest">45001 Certified</span>
            </div>
            <div className="bg-transparent text-black p-6 min-w-[160px] text-center border-4 border-black">
                <span className="block font-display font-bold text-3xl mb-1">OSHA</span>
                <span className="text-xs uppercase font-bold tracking-widest">Compliant</span>
            </div>
        </div>
      </div>
    </div>
  </div>
);

export const TeamSection: React.FC = () => {
    const team = [
        { name: "Robert Fox", role: "Chief Engineer", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop" },
        { name: "Sarah Jenkins", role: "Lead Architect", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" },
        { name: "Michael Chen", role: "Site Manager", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop" },
        { name: "Emily Davis", role: "Sustainability Expert", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop" },
    ];

    return (
        <SectionWrapper id="team" className="bg-industrial-950 border-t border-white/5">
            <SectionHeader title="Meet The Experts" subtitle="Leadership" centered light />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-zinc-800">
                {team.map((member, idx) => (
                    <div key={idx} className="group relative overflow-hidden border-r border-b border-zinc-800 bg-zinc-900/10">
                        <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                             <img src={member.img} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20">
                            <h4 className="text-white font-display font-bold text-2xl uppercase tracking-tight">{member.name}</h4>
                            <p className="text-safety text-xs font-bold uppercase tracking-widest mt-1">{member.role}</p>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};