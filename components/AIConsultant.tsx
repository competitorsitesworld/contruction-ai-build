import React, { useState } from 'react';
import { SectionWrapper, SectionHeader, Button } from './UI';
import { getConstructionAdvice } from '../services/geminiService';
import { AdviceStatus } from '../types';

// Icons
const RobotIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

export const AIConsultant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [advice, setAdvice] = useState('');
  const [status, setStatus] = useState<AdviceStatus>(AdviceStatus.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setStatus(AdviceStatus.LOADING);
    setAdvice('');

    try {
      const result = await getConstructionAdvice(query);
      setAdvice(result);
      setStatus(AdviceStatus.SUCCESS);
    } catch (error) {
      setAdvice("We are currently experiencing high traffic on our consultant network. Please try again later or call our office directly.");
      setStatus(AdviceStatus.ERROR);
    }
  };

  return (
    <SectionWrapper id="consultant" dark className="relative overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-industrial-800 opacity-50 blur-3xl pointer-events-none" />
      
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">
        <div>
          <SectionHeader 
            title="AI Project Estimator" 
            subtitle="Instant Expert Insights" 
            light 
          />
          <p className="text-industrial-300 text-lg mb-8 leading-relaxed">
            Thinking about a new project? Describe your vision to our AI-powered preliminary consultant. 
            Get instant feedback on potential phases, materials, and safety considerations before you even pick up the phone.
          </p>
          
          <div className="bg-industrial-800 p-6 rounded-lg border border-industrial-700">
            <h4 className="text-white font-display font-bold text-xl mb-4 flex items-center gap-2">
              <span className="text-safety"><RobotIcon /></span>
              How it works
            </h4>
            <ul className="space-y-3 text-industrial-300">
              <li className="flex gap-3">
                <span className="text-safety font-bold">01.</span>
                <span>Describe your project (e.g., "I want to add a sunroom to my house")</span>
              </li>
              <li className="flex gap-3">
                <span className="text-safety font-bold">02.</span>
                <span>Our AI analyzes standard construction practices.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-safety font-bold">03.</span>
                <span>Receive a preliminary roadmap and material suggestions instantly.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-2xl text-industrial-900">
          <form onSubmit={handleSubmit} className="mb-6">
            <label htmlFor="ai-query" className="block font-display font-bold uppercase text-sm mb-2 text-industrial-600">
              Describe your project
            </label>
            <textarea
              id="ai-query"
              rows={4}
              className="w-full bg-industrial-50 border-2 border-industrial-200 rounded-lg p-4 focus:border-safety focus:ring-0 transition-colors resize-none mb-4"
              placeholder="E.g., Renovate a 500sqft kitchen with marble countertops..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button 
              type="submit" 
              className="w-full" 
              disabled={status === AdviceStatus.LOADING}
            >
              {status === AdviceStatus.LOADING ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Analyzing Request...
                </span>
              ) : 'Get Expert Insight'}
            </Button>
          </form>

          {(status === AdviceStatus.SUCCESS || status === AdviceStatus.ERROR) && (
            <div className={`p-6 rounded-lg ${status === AdviceStatus.ERROR ? 'bg-red-50 text-red-800' : 'bg-industrial-50 border-l-4 border-safety'}`}>
              <h5 className="font-display font-bold text-lg mb-2">
                {status === AdviceStatus.ERROR ? 'Error' : 'Consultant Response:'}
              </h5>
              <div className="prose prose-sm max-w-none text-industrial-700 whitespace-pre-wrap">
                {advice}
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};