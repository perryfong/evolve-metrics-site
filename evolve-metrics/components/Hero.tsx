
import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative bg-slate-900 text-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-slate-800 opacity-20 -skew-x-12 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 text-white">
              We Pay to Build a New Profit Center on Top of the Business You Already Have.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              We fund and run multi-channel campaigns that recommend carefully selected partner offers to your existing customers and subscribers. You pay nothing upfront. You get paid first from the extra profit. We only earn when you do.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://calendly.com/perryfong/coffee"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-900 bg-white rounded-full hover:bg-slate-100 transition-colors shadow-lg"
              >
                Schedule a Brief Intro Call
              </a>
              <a 
                href="#process" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white border border-slate-600 rounded-full hover:bg-slate-800 transition-colors"
              >
                See How It Works
              </a>
            </div>
            
            <p className="mt-6 text-sm text-slate-400">
              Strictly performance based. No retainers. No upfront fees.
            </p>
          </div>

          <div className="flex-1 w-full max-w-xl">
            {/* VSL YouTube Embed */}
            <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-700">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/CFDDZBzOO0k?rel=0&modestbranding=1" 
                title="Evolve Metrics Briefing" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block text-slate-500">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};
