import React from 'react';
import { Navbar, Footer } from './components/Layout';
import { Hero } from './components/Hero';
import { AboutSection, SafetySection, TeamSection } from './components/CompanyInfo';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Process } from './components/Process';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { AIConsultant } from './components/AIConsultant';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <AIConsultant />
        <AboutSection />
        <SafetySection />
        <Portfolio />
        <Process />
        <TeamSection />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;