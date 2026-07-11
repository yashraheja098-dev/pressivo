import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { MessageSquare, Truck, Sparkles, CheckCircle, PackageOpen } from 'lucide-react';

const steps = [
  { icon: MessageSquare, title: "Book on WhatsApp", desc: "Send us a message to schedule." },
  { icon: Truck, title: "Pickup from Home", desc: "We arrive at your doorstep." },
  { icon: Sparkles, title: "Professional Cleaning", desc: "Expert washing and ironing." },
  { icon: CheckCircle, title: "Quality Check", desc: "5-point inspection process." },
  { icon: PackageOpen, title: "Delivered Fresh", desc: "Crisp and ready to wear." },
];

export default function Process() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="How It Works" 
          subtitle="A seamless process designed for your absolute convenience."
        />

        <div className="relative mt-20 max-w-5xl mx-auto">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform duration-300 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] shadow-sm">
                  <step.icon className="w-8 h-8 text-primary" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm border-2 border-white shadow-sm">
                    {idx + 1}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2 text-slate-900">{step.title}</h4>
                <p className="text-sm text-slate-500 px-2">{step.desc}</p>
                
                {/* Mobile vertical line */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden w-0.5 h-10 bg-slate-200 mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
