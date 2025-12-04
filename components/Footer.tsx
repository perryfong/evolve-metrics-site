
import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-12 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <span className="font-serif text-lg text-slate-300 font-bold block">Evolve Metrics</span>
          <a href="mailto:Support@EvolveMetrics.com" className="text-sm text-slate-500 hover:text-slate-300 transition-colors mt-2 block">Support@EvolveMetrics.com</a>
          <p className="text-xs mt-2">© {new Date().getFullYear()} Evolve Metrics. All rights reserved.</p>
        </div>
        
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};
