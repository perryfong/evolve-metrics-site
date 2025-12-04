import React from 'react';
import { Search, Handshake, Megaphone } from 'lucide-react';

export const Process = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-white" />,
      title: "1. Analyze",
      description: "We review the size and shape of your customer base, identifying dormant segments and non-buyers. We map out the untapped profit potential using behavioral segmentation and purchase propensity modeling.",
      subtext: "We do the heavy lifting on data; you just provide access."
    },
    {
      icon: <Handshake className="w-8 h-8 text-white" />,
      title: "2. Partner",
      description: "We identify high-affinity, non-competing brands your audience is already predisposed to buy from. We negotiate strong commission structures because we bring warm, high-intent traffic.",
      subtext: "Not random affiliate links. Trusted, curated offers."
    },
    {
      icon: <Megaphone className="w-8 h-8 text-white" />,
      title: "3. Promote",
      description: "We fund 100% of the campaigns. We handle copy, creative, tech setup, and logistics. Your team approves concepts, receives payouts, and then shares a portion of the extra profit with us.",
      subtext: "Zero financial risk for you. We only earn when you do."
    }
  ];

  return (
    <section id="process" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">How It Works</h2>
          <p className="text-slate-400">Our proprietary Analyze → Partner → Promote Process</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-slate-800 p-8 rounded-2xl h-full border border-slate-700 transition-transform duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-brand-accent rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-brand-accent/20">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <div className="pt-6 border-t border-slate-700">
                  <p className="text-sm text-slate-400 italic">
                    {step.subtext}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};