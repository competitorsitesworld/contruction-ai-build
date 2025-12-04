import React, { useState, useEffect } from 'react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-industrial-900/95 backdrop-blur-md border-industrial-800 py-4 shadow-xl' : 'bg-transparent border-white/10 py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
             <span className="font-display font-bold text-2xl tracking-tighter uppercase text-white">
               Structure <span className="text-safety group-hover:text-white transition-colors duration-300">/</span> Form
             </span>
          </div>
          
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-white hover:text-safety text-xs uppercase font-bold tracking-[0.15em] transition-colors relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-0.5 after:bg-safety after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none hover:text-safety transition-colors">
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-industrial-900 border-b border-industrial-800 shadow-2xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-6 space-y-2">
           {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-white hover:text-safety block px-4 py-3 text-sm font-bold uppercase tracking-widest border-l-2 border-transparent hover:border-safety bg-white/5 hover:bg-white/10 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 text-white pt-24 pb-12 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-6">
            <h2 className="font-display font-bold text-4xl tracking-tighter">
              Structure <span className="text-safety">/</span> Form
            </h2>
            <p className="text-zinc-500 text-base leading-relaxed max-w-sm">
              Engineering the future with concrete precision and architectural elegance. Since 1985, we have defined the skyline with integrity and innovation.
            </p>
            <div className="flex space-x-4 pt-4">
               {['fb', 'tw', 'in', 'ig'].map((i, idx) => (
                 <a key={idx} href="#" className="w-12 h-12 rounded bg-zinc-900 flex items-center justify-center hover:bg-safety hover:text-black transition-all duration-300 group">
                    <svg className="w-5 h-5 text-zinc-400 group-hover:text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.1-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                 </a>
               ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-display font-bold text-lg mb-8 text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li><a href="#about" className="hover:text-safety transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-safety transition-colors">Leadership</a></li>
              <li><a href="#projects" className="hover:text-safety transition-colors">Careers</a></li>
              <li><a href="#news" className="hover:text-safety transition-colors">News & Media</a></li>
              <li><a href="#contact" className="hover:text-safety transition-colors">Contact</a></li>
            </ul>
          </div>

           {/* Services Column */}
           <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-lg mb-8 text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-4 text-sm text-zinc-500 font-medium">
              <li><a href="#services" className="hover:text-safety transition-colors">General Contracting</a></li>
              <li><a href="#services" className="hover:text-safety transition-colors">Design-Build</a></li>
              <li><a href="#services" className="hover:text-safety transition-colors">Industrial Engineering</a></li>
              <li><a href="#services" className="hover:text-safety transition-colors">Sustainability</a></li>
              <li><a href="#services" className="hover:text-safety transition-colors">Consulting</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-lg mb-8 text-white uppercase tracking-wider">Stay Connected</h4>
            <p className="text-zinc-500 text-sm mb-6 leading-relaxed">Subscribe to our newsletter for the latest industry updates and project showcases.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-zinc-900 border border-zinc-800 p-4 text-sm text-white focus:outline-none focus:border-safety focus:ring-1 focus:ring-safety transition-all rounded-sm placeholder-zinc-600"
              />
              <button className="bg-safety text-black font-display font-bold uppercase text-xs tracking-widest py-4 px-6 hover:bg-white hover:text-black transition-colors duration-300 rounded-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 uppercase tracking-widest font-medium">
          <p>&copy; {new Date().getFullYear()} Structure & Form. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};