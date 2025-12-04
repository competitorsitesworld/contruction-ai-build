import React, { useState } from 'react';
import { SectionWrapper, SectionHeader } from './UI';

const categories = ['All', 'Residential', 'Commercial', 'Industrial'];

const projects = [
  {
    id: 1,
    title: "Skyline Tower",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    desc: "A 45-story sustainable office complex."
  },
  {
    id: 2,
    title: "The Glass House",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    desc: "Modern minimalist residential villa."
  },
  {
    id: 3,
    title: "West Port Logistics",
    category: "Industrial",
    img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800&auto=format&fit=crop",
    desc: "200,000 sq ft automated warehouse."
  },
  {
    id: 4,
    title: "Urban Loft",
    category: "Residential",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
    desc: "Conversion of old factory to luxury lofts."
  },
  {
    id: 5,
    title: "City Bridge",
    category: "Industrial",
    img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?q=80&w=800&auto=format&fit=crop",
    desc: "Infrastructure reinforcement project."
  },
  {
    id: 6,
    title: "Tech Hub Plaza",
    category: "Commercial",
    img: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
    desc: "Mixed-use retail and co-working space."
  }
];

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <SectionWrapper id="projects" className="bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12">
         <div className="mb-6 md:mb-0">
             <h3 className="font-display font-bold uppercase tracking-widest text-sm mb-3 text-safety-hover">
              Portfolio
            </h3>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-industrial-900">
              Featured Projects
            </h2>
         </div>
         
         {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 text-xs uppercase font-bold tracking-widest border-2 transition-all duration-300 ${
                activeCategory === cat 
                  ? 'bg-industrial-900 text-white border-industrial-900' 
                  : 'bg-transparent text-industrial-900 border-industrial-200 hover:border-industrial-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group relative h-80 overflow-hidden bg-black cursor-pointer">
            <img 
              src={project.img} 
              alt={project.title} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-40 transition-all duration-500 scale-100 group-hover:scale-105"
            />
            {/* Overlay Text */}
            <div className="absolute bottom-0 left-0 w-full p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="inline-block px-2 py-1 bg-safety text-black text-[10px] font-bold uppercase tracking-widest mb-3">
                {project.category}
              </span>
              <h4 className="text-white font-display font-bold text-3xl mb-2">{project.title}</h4>
              <p className="text-zinc-300 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {project.desc}
              </p>
            </div>
            {/* Corner Accent */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-safety opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 text-industrial-900 font-bold uppercase tracking-widest text-sm hover:text-safety transition-colors">
              View Full Archive <span className="text-xl">&rarr;</span>
          </button>
      </div>
    </SectionWrapper>
  );
};