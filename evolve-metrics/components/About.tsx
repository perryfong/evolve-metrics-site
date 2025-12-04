
import React from 'react';
import { Linkedin, Mail, Facebook } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          <div className="w-48 h-48 shrink-0 relative mx-auto md:mx-0">
            {/* 
              NOTE: Ensure 'perry.png' is located in your public/root directory. 
              The path below assumes the file is serving from the root.
            */}
            <img 
              src="/perry.png" 
              alt="Perry Fong" 
              className="w-full h-full object-cover rounded-full shadow-xl border-4 border-slate-50"
              onError={(e) => {
                // Fallback to initials if image is missing to avoid showing incorrect person
                (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Perry+Fong&background=0f766e&color=fff&size=200";
              }}
            />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-2">Perry Fong</h2>
            <p className="text-brand-accent font-medium mb-6 uppercase tracking-wider text-sm">Campaign Investor & Passive Revenue Consultant</p>
            
            <div className="prose prose-slate text-slate-600 mb-6 leading-relaxed">
              <p className="mb-4">
                I'm just an ordinary guy from Hong Kong with an extraordinary passion for business development and marketing. My journey began in the rigorous academic halls of the <strong>University of Warwick</strong>, where I earned a degree in <strong>MORSE (Mathematics, Operational Research, Statistics, and Economics)</strong>.
              </p>
              <p className="mb-4">
                That mathematical foundation allows me to see marketing differently—not just as creative noise, but as a system of predictable returns. I transitioned from a media buyer to a conversion copywriter, realizing that traffic is useless without the psychology to convert it.
              </p>
              <p>
                Today, I specialize in one thing: <strong>turning existing customer bases into new profit centers.</strong> I work with a small number of partners directly and keep a low public profile by design, focusing entirely on performance rather than agency self-promotion.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a href="https://www.linkedin.com/in/chocolateperryf/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-slate-500 hover:text-[#0077b5] transition-colors">
                <Linkedin size={20} className="mr-2" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
              <a href="https://www.facebook.com/ChocolatePerryF/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-slate-500 hover:text-[#1877F2] transition-colors">
                <Facebook size={20} className="mr-2" />
                <span className="text-sm font-medium">Facebook</span>
              </a>
              <a href="mailto:Perry@EvolveMetrics.com" className="flex items-center justify-center text-slate-500 hover:text-slate-900 transition-colors">
                <Mail size={20} className="mr-2" />
                <span className="text-sm font-medium">Email Me</span>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
