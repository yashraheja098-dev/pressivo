import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Truck, WashingMachine, PackageOpen } from 'lucide-react';

const steps = [
  { icon: Calendar, title: "Book Pickup", desc: "Schedule a pickup at your convenience." },
  { icon: Truck, title: "We Collect", desc: "Our executive collects from your doorstep." },
  { icon: WashingMachine, title: "Expert Cleaning", desc: "Professionally cleaned with care & precision." },
  { icon: PackageOpen, title: "Delivered Fresh", desc: "Hygienically packed & delivered on time." },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-[2px] w-12 bg-accent" />
          <h2 className="text-xl sm:text-2xl font-black text-primary tracking-widest uppercase">
            How It Works
          </h2>
          <div className="h-[2px] w-12 bg-accent" />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Dashed Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-12 left-12 right-12 h-[2px] border-t-2 border-dashed border-slate-300 z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-4 relative z-10">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="relative mb-6">
                  {/* Gold Number Circle */}
                  <div className="absolute -top-2 -left-3 w-8 h-8 rounded-full bg-accent text-white font-bold flex items-center justify-center text-sm shadow-md z-20">
                    {idx + 1}
                  </div>
                  
                  {/* Navy Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center relative z-10 shadow-lg group-hover:-translate-y-2 transition-transform duration-300">
                    <step.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-3 text-primary">{step.title}</h4>
                <p className="text-sm text-slate-600 px-4 leading-relaxed max-w-[200px]">{step.desc}</p>
                
                {/* Mobile vertical dashed line */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden h-12 border-l-2 border-dashed border-slate-300 mt-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
