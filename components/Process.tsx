import React from 'react';
import { SectionWrapper, SectionHeader } from './UI';

export const Process: React.FC = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'We meet to discuss your vision, budget, and timeline.' },
    { num: '02', title: 'Planning', desc: 'Architectural designs, permits, and engineering surveys.' },
    { num: '03', title: 'Execution', desc: 'Our teams break ground, adhering to strict safety timelines.' },
    { num: '04', title: 'Handover', desc: 'Final walkthrough and inspection before you take the keys.' },
  ];

  return (
    <SectionWrapper id="process" className="bg-industrial-950 border-t border-b border-white/5 relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]" 
           style={{
               backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
               backgroundSize: '40px 40px'
           }}>
      </div>
      
      <div className="relative z-10">
        <SectionHeader title="How We Build" subtitle="The Process" light />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-16 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 w-full h-[1px] bg-zinc-800 -z-10" />
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="w-16 h-16 bg-industrial-900 border border-zinc-700 text-white group-hover:border-safety group-hover:text-safety transition-colors duration-300 font-display font-bold text-xl flex items-center justify-center mb-8 relative z-10">
                {step.num}
              </div>
              <h4 className="font-display font-bold text-2xl text-white mb-4 uppercase tracking-wide group-hover:text-safety transition-colors">{step.title}</h4>
              <p className="text-zinc-500 leading-relaxed text-sm border-l border-zinc-800 pl-4 group-hover:border-safety transition-colors">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};