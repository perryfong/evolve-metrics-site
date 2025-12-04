import React from 'react';
import { ShieldCheck, TrendingUp } from 'lucide-react';

export const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-slate-900">Why Partners Prefer This Model</h2>
          <p className="mt-4 text-slate-600">A structure designed for safety, optionality, and pure upside.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
          
          {/* Column A: What You Don't Do */}
          <div className="bg-slate-50 p-10 md:border-r border-slate-200">
            <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center">
              <ShieldCheck className="mr-3 text-slate-400" />
              What You Don't Have to Do
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs mr-4 shrink-0">✕</span>
                <span className="text-slate-600">No upfront fees, retainers, or monthly bills.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs mr-4 shrink-0">✕</span>
                <span className="text-slate-600">No interference with your existing marketing or agency.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs mr-4 shrink-0">✕</span>
                <span className="text-slate-600">No extra headcount or management burden for you.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs mr-4 shrink-0">✕</span>
                <span className="text-slate-600">No financial risk – we fund the ad spend and costs.</span>
              </li>
            </ul>
          </div>

          {/* Column B: What You Get */}
          <div className="bg-white p-10">
            <h3 className="text-xl font-bold text-brand-accent mb-8 flex items-center">
              <TrendingUp className="mr-3" />
              What You Do Get
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs mr-4 shrink-0">✓</span>
                <span className="text-slate-800 font-medium">Immediate cash flow from previously dormant leads.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs mr-4 shrink-0">✓</span>
                <span className="text-slate-800 font-medium">You get paid first from the generated revenue.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs mr-4 shrink-0">✓</span>
                <span className="text-slate-800 font-medium">Total optionality – start with a small test campaign.</span>
              </li>
              <li className="flex items-start">
                <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs mr-4 shrink-0">✓</span>
                <span className="text-slate-800 font-medium">A silent, bolt-on profit center that works in the background.</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};