import React from 'react';
import { SectionWrapper, SectionHeader } from './UI';

const services = [
  {
    title: "General Contracting",
    description: "End-to-end management from ground-breaking to final ribbon-cutting. Precision in every permit and beam.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    title: "Design-Build",
    description: "Unified workflow where design and construction services are contracted by a single entity for maximum efficiency.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    )
  },
  {
    title: "Renovation",
    description: "Transforming existing structures with modern amenities while preserving their structural integrity and history.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    )
  },
  {
    title: "Industrial Engineering",
    description: "Specialized construction for factories, power plants, and warehouses requiring heavy-duty specifications.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Project Management",
    description: "Expert oversight ensuring quality control, budget adherence, and schedule optimization for complex builds.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    )
  },
  {
    title: "Green Building",
    description: "LEED certifications, energy efficiency analysis, and sustainable material sourcing for the future.",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  }
];

export const Services: React.FC = () => {
  return (
    <SectionWrapper id="services" className="bg-industrial-950 border-b border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <div>
           <h3 className="font-display font-bold uppercase tracking-widest text-sm mb-3 text-safety">
            What We Do
          </h3>
          <h2 className="font-display font-bold text-4xl md:text-6xl text-white">
            Our Expertise
          </h2>
        </div>
        <p className="max-w-md text-zinc-400 mt-6 md:mt-0 leading-relaxed text-right md:text-left border-l border-zinc-800 pl-6">
          From residential renovations to large-scale industrial infrastructure, we bring decades of engineering excellence.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-zinc-800 bg-zinc-900/20">
        {services.map((service, index) => (
          <div key={index} className="group p-10 border-b md:border-b-0 md:border-r border-zinc-800 hover:bg-zinc-900 transition-all duration-300 relative overflow-hidden">
             {/* Hover Accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-safety transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            
            <div className="w-16 h-16 bg-zinc-900/50 rounded-none border border-zinc-700 flex items-center justify-center mb-8 text-white group-hover:border-safety group-hover:text-safety transition-colors duration-300">
              {service.icon}
            </div>
            
            <h3 className="font-display font-bold text-2xl mb-4 text-white group-hover:text-white transition-colors uppercase tracking-tight">{service.title}</h3>
            <p className="text-zinc-500 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">{service.description}</p>
            
            <div className="mt-8 flex items-center text-xs font-bold uppercase tracking-widest text-zinc-600 opacity-100 group-hover:text-safety transition-all duration-300">
              Learn More <span className="ml-2 transition-transform group-hover:translate-x-2">&rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};