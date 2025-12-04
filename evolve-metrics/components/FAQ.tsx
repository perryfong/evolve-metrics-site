import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }: { question: string, answer: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-slate-800 group-hover:text-brand-accent transition-colors pr-8">{question}</span>
        {isOpen ? <ChevronUp className="text-slate-400 shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
      </button>
      {isOpen && (
        <div className="pb-8 text-slate-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-8">
          <FAQItem 
            question="Why don’t you share case studies or a big client list?"
            answer={
              <>
                <p className="mb-4">
                  I partner directly with a select number of brands and keep a low public profile by design, so I don’t have a typical agency-style website full of logos and case studies.
                </p>
                <p className="mb-4">
                  I also don’t offer case studies because we maintain a strict policy of confidentiality. Most of our partners prefer their strategy to remain private to protect their edge.
                </p>
                <p>
                  We’ve implemented new profit centers that have produced significant lifts for our partners in a short period of time, but that’s not always the case. That’s exactly why we fund 100% of the costs and expenses to remove risk on your end, and only get our return from the new profits we produce for you.
                </p>
              </>
            }
          />
          <FAQItem 
            question="Do you replace our current agency or marketing team?"
            answer="No, absolutely not. We are a 'bolt-on' profit center. We operate completely independently of your core marketing activities. We do not touch your ads, your funnels, or your main product launches. We simply monetize the 'white space' in your audience that is currently being ignored."
          />
          <FAQItem 
            question="What does a test campaign look like?"
            answer="A test campaign is low-risk and low-impact on your operations. We pick one specific segment of your list and one proven partner offer. We run a limited campaign (usually via email/SMS) to validate the response. We fund the copy and setup. If it works, we scale. If it doesn't, you've lost nothing."
          />
          <FAQItem 
            question="What do you need from us to get started?"
            answer="We need a brief conversation to understand your audience size and demographics. If we proceed, we'll need basic data exports (or limited view access) to analyze segments, and your approval on the partner offers we select. We handle the rest."
          />
        </div>
      </div>
    </section>
  );
};