
import React from 'react';
import { Calendar, ArrowRight, Mail, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-900 opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-white">
          Is there untapped profit sitting in your list?
        </h2>
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light">
          If you’d like to explore whether this model makes sense for your brand, the best next step is a short call. No pressure, no deck – just a discussion.
        </p>

        <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-slate-700 max-w-2xl mx-auto">
          <div className="flex flex-col gap-6">
            <a 
              href="https://calendly.com/perryfong/coffee" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group flex items-center justify-center px-8 py-5 text-lg font-semibold text-slate-900 bg-white rounded-lg hover:bg-brand-accent hover:text-white transition-all duration-300 shadow-xl"
            >
              <Calendar className="mr-3" size={24} />
              Schedule a Brief Intro Call
              <ArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all" size={20} />
            </a>
            
            <div className="flex items-center justify-center gap-4 my-2">
              <div className="h-px bg-slate-700 w-full"></div>
              <span className="text-slate-500 text-sm whitespace-nowrap">OR REACH OUT DIRECTLY</span>
              <div className="h-px bg-slate-700 w-full"></div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-slate-300">
               <a href="tel:+447447276291" className="flex items-center hover:text-white transition-colors cursor-pointer group">
                 <Phone size={18} className="mr-2 text-brand-accent group-hover:text-white transition-colors" />
                 (+44) 7447 276 291
               </a>
               <span className="hidden md:inline text-slate-700">•</span>
               <a href="mailto:Perry@EvolveMetrics.com" className="flex items-center hover:text-white transition-colors group">
                 <Mail size={18} className="mr-2 text-brand-accent group-hover:text-white transition-colors" />
                 Perry@EvolveMetrics.com
               </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
