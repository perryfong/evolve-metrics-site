import React from 'react';
import { Mail, MessageSquare, Truck, Smartphone } from 'lucide-react';

export const Offer = () => {
  return (
    <section id="offer" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-brand-accent font-semibold tracking-wider text-sm uppercase mb-2 block">Our Core Offer</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6">
              What We Actually Do
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Your customers are already spending money on products and services you don't sell, from companies you don't own.
              </p>
              <p>
                We identify these <strong>complementary, non-competing offers</strong> and set up profit-sharing partnerships with those brands. We then orchestrate multi-channel campaigns to your existing audience on your behalf.
              </p>
              <p className="font-medium text-slate-900 border-l-4 border-brand-accent pl-4">
                You don't build new products. You don't add operational complexity. You simply collect your share of every sale we generate, and we take our return from the new profit we've created for you.
              </p>
            </div>
          </div>

          <div className="relative">
            {/* Visual representation of channels */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 z-10 relative">
              <h3 className="text-xl font-bold text-slate-900 mb-6">The Multi-Channel Engine</h3>
              <p className="text-slate-600 mb-8 text-sm">
                We fund and execute campaigns across the channels your customers actually pay attention to, ensuring no disruption to your main brand activities:
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Mail className="text-slate-600 mr-3" size={24} />
                  <span className="font-medium text-slate-800">Email Marketing</span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Smartphone className="text-slate-600 mr-3" size={24} />
                  <span className="font-medium text-slate-800">SMS / Text</span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <Truck className="text-slate-600 mr-3" size={24} />
                  <span className="font-medium text-slate-800">Direct Mail</span>
                </div>
                <div className="flex items-center p-4 bg-slate-50 rounded-lg border border-slate-100">
                  <MessageSquare className="text-slate-600 mr-3" size={24} />
                  <span className="font-medium text-slate-800">Ringless VM</span>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-100 text-center">
                <p className="text-sm font-semibold text-brand-accent">
                  We Fund 100% of Ad Spend & Execution Costs
                </p>
              </div>
            </div>
            
            {/* Decorative background shape */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-slate-200 rounded-2xl -z-10"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};