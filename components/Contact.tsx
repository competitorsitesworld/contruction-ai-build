import React from 'react';
import { SectionWrapper, SectionHeader, Button } from './UI';

export const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" className="bg-white">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
        
        {/* Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <SectionHeader title="Start Your Project" subtitle="Contact Us" />
          <p className="text-xl text-zinc-500 mb-12 leading-relaxed font-light">
            Ready to bring your vision to life? Our team of engineers and architects is standing by to discuss your next big project.
          </p>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 border-2 border-industrial-900 flex items-center justify-center rounded-none group-hover:bg-industrial-900 group-hover:text-white transition-colors duration-300 shrink-0">
                 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <div>
                <h4 className="font-display font-bold text-xl text-industrial-900 uppercase tracking-tight">Headquarters</h4>
                <p className="text-zinc-500 mt-2 text-lg">123 Steel Girder Ave,<br />Metropolis, NY 10012</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 border-2 border-industrial-900 flex items-center justify-center rounded-none group-hover:bg-industrial-900 group-hover:text-white transition-colors duration-300 shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
               <div>
                <h4 className="font-display font-bold text-xl text-industrial-900 uppercase tracking-tight">Phone</h4>
                <p className="text-zinc-500 mt-2 text-lg">+1 (555) 123-4567</p>
                <p className="text-zinc-400 text-sm mt-1 uppercase font-bold tracking-widest">Mon-Fri 8am-6pm</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-16 h-16 border-2 border-industrial-900 flex items-center justify-center rounded-none group-hover:bg-industrial-900 group-hover:text-white transition-colors duration-300 shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
               <div>
                <h4 className="font-display font-bold text-xl text-industrial-900 uppercase tracking-tight">Email</h4>
                <p className="text-zinc-500 mt-2 text-lg">build@structureandform.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7 bg-zinc-50 p-8 lg:p-12 border border-zinc-200 shadow-xl relative">
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-t-safety border-l-[80px] border-l-transparent"></div>
          
          <form className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-industrial-900">First Name</label>
                <input type="text" className="w-full bg-white border-2 border-zinc-200 p-4 text-zinc-900 focus:outline-none focus:border-industrial-900 transition-all placeholder-zinc-300 rounded-none font-medium" />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-bold uppercase tracking-widest text-industrial-900">Last Name</label>
                <input type="text" className="w-full bg-white border-2 border-zinc-200 p-4 text-zinc-900 focus:outline-none focus:border-industrial-900 transition-all placeholder-zinc-300 rounded-none font-medium" />
              </div>
            </div>
            
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-industrial-900">Email Address</label>
              <input type="email" className="w-full bg-white border-2 border-zinc-200 p-4 text-zinc-900 focus:outline-none focus:border-industrial-900 transition-all placeholder-zinc-300 rounded-none font-medium" />
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-industrial-900">Project Type</label>
              <select className="w-full bg-white border-2 border-zinc-200 p-4 text-zinc-900 focus:outline-none focus:border-industrial-900 transition-all appearance-none rounded-none font-medium">
                <option>Commercial Construction</option>
                <option>Residential Renovation</option>
                <option>Industrial Engineering</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-industrial-900">Message</label>
              <textarea rows={4} className="w-full bg-white border-2 border-zinc-200 p-4 text-zinc-900 focus:outline-none focus:border-industrial-900 transition-all resize-none rounded-none placeholder-zinc-300 font-medium"></textarea>
            </div>
            
            <Button className="w-full py-5 text-sm tracking-[0.2em] bg-industrial-900 text-white hover:bg-safety hover:text-black">Send Inquiry</Button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};