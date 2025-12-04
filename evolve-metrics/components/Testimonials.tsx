
import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "After interviewing several companies, Perry is the man that simplified the process... He not only simplifies, he has many bottom-line recommendations to accelerate the mission and get you past the obstacles you will encounter... I'm totally impressed with your knowledge!!!",
      author: "Dr. Dale Greer DDS",
      role: "Founder, Greer Dentistry"
    },
    {
      quote: "You're a brilliant writer and you have some really creative and great ideas. You're a creative genius! Full credit to you! Very Impressive.",
      author: "Emma Plunkett",
      role: "Gem Bazaar"
    },
    {
      quote: "The copy that you provided, Perry, is fabulous. It's so different and so clever.",
      author: "Stephen Plunkett",
      role: "Gem Bazaar"
    },
    {
      quote: "Pezzz, you're a marketing genius!",
      author: "Reyes",
      role: "Advertize.io"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-12">What Our Partners Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 relative flex flex-col h-full">
              <Quote className="text-slate-200 absolute top-6 left-6 w-10 h-10 -z-0" />
              <div className="relative z-10 flex-grow">
                <p className="text-slate-600 mb-6 italic leading-relaxed">"{t.quote}"</p>
              </div>
              <div className="mt-auto pt-4 border-t border-slate-50 relative z-10">
                <p className="font-bold text-slate-900">{t.author}</p>
                <p className="text-sm text-slate-500 uppercase tracking-wide">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-slate-400 text-sm mt-12 max-w-3xl mx-auto">
          We maintain a strict policy of confidentiality. Most of our partners prefer their strategy to remain private to protect their edge, so we only share specific case studies in private discussions.
        </p>
      </div>
    </section>
  );
};
