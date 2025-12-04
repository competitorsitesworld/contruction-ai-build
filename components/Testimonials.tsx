import React from 'react';
import { SectionWrapper, SectionHeader } from './UI';

const testimonials = [
  {
    id: 1,
    quote: "Structure & Form delivered our headquarters three weeks ahead of schedule. Their attention to detail in the planning phase saved us millions in potential overruns.",
    author: "James Peterson",
    role: "CEO, TechFlow Inc."
  },
  {
    id: 2,
    quote: "The safety protocols they have in place are unmatched. As a property developer, peace of mind is what I pay for, and they deliver it in spades.",
    author: "Elena Rodriguez",
    role: "Director, Urban Living"
  },
  {
    id: 3,
    quote: "We utilized their estimation tool before even calling them, and it was surprisingly accurate. The transition to the real team was seamless.",
    author: "Michael Chang",
    role: "Homeowner"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <SectionWrapper id="testimonials" className="bg-industrial-900 text-white">
      <SectionHeader title="Client Feedback" subtitle="Testimonials" centered light />
      
      <div className="grid lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-industrial-950 p-10 border border-white/5 relative hover:border-safety/50 transition-colors duration-300">
            {/* Quote Icon */}
            <div className="text-6xl text-zinc-800 font-serif leading-none mb-6">"</div>
            <p className="text-zinc-300 text-lg mb-8 relative z-10 leading-relaxed font-light">
              {t.quote}
            </p>
            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
              <div className="w-10 h-10 bg-zinc-800 rounded-none flex items-center justify-center text-white font-bold text-lg">
                {t.author.charAt(0)}
              </div>
              <div>
                <h5 className="font-display font-bold text-white uppercase tracking-wide">{t.author}</h5>
                <p className="text-safety text-xs uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};