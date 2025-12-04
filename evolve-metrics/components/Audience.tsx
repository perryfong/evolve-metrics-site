import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export const Audience = () => {
  return (
    <section id="audience" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Who We Work With</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We partner with established brands that already have a steady flow of customers and subscribers, and want to unlock more profit from their audience without hiring another agency or scaling ad spend.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Ideal Profile */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <span className="bg-green-100 text-green-700 p-2 rounded-full mr-3">
                <CheckCircle2 size={20} />
              </span>
              Ideal Partners
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-slate-700"><strong>DTC / E-commerce Brands</strong> with physical products and repeat buyers.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-slate-700"><strong>High-Ticket Service Providers</strong> (B2B or B2C) with an established client base.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-slate-700"><strong>Info Product / Education Companies</strong>, coaches, and consultants.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-slate-400 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-slate-700">Typically generating <strong>$2M – $15M+ annual revenue</strong>.</span>
              </li>
            </ul>
          </div>

          {/* Not For */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 opacity-90">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <span className="bg-slate-100 text-slate-500 p-2 rounded-full mr-3">
                <XCircle size={20} />
              </span>
              Who This Is Not For
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-slate-500">Pre-revenue startups or brand new businesses.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-slate-500">Businesses with no email list or very few past customers.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-slate-500">Brands seeking a typical agency retainer relationship.</span>
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mt-2 mr-3 shrink-0"></span>
                <span className="text-slate-500">Micromanagers who need to control every pixel of a campaign.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};