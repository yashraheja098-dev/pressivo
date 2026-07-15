import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Do you provide pickup?",
    a: "Yes, we provide free pickup and delivery across all major sectors in Gurgaon for orders above ₹300."
  },
  {
    q: "How long does laundry take?",
    a: "Our standard turnaround time is 48 hours. For premium steam ironing, we offer next-day delivery."
  },
  {
    q: "Do you clean delicate garments?",
    a: "Absolutely. Our premium dry cleaning service is specifically designed for delicate fabrics, suits, sarees, and designer wear."
  },
  {
    q: "How do I pay?",
    a: "You can pay via UPI, Credit/Debit Card, or Cash on Delivery after you receive your fresh clothes."
  },
  {
    q: "Which areas do you serve?",
    a: "We currently serve all major sectors in Gurgaon including Golf Course Road, DLF Phases 1-5, Sushant Lok, and newer sectors like 102."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know about our services."
        />

        <div className="max-w-3xl mx-auto mt-12 space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border shadow-sm ${openIdx === idx ? 'border-primary shadow-md shadow-primary/10' : 'border-slate-200'}`}
            >
              <button
                onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-semibold text-lg text-slate-900">{faq.q}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-primary' : ''}`} 
                />
              </button>
              
              <AnimatePresence>
                {openIdx === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-slate-600 border-t border-slate-100 pt-4 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
