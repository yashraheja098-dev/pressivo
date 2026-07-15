import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import { Truck, Leaf, ShieldCheck, Clock, Package, Zap } from 'lucide-react';

const reasons = [
  { title: "Doorstep Pickup", icon: Truck, text: "We come to you. Schedule a pickup in 30 seconds." },
  { title: "Eco-Friendly", icon: Leaf, text: "Tough on stains, gentle on the planet and your fabrics." },
  { title: "Quality Checked", icon: ShieldCheck, text: "Rigorous 5-step quality check before delivery." },
  { title: "Fast Turnaround", icon: Clock, text: "Get your fresh clothes back in 24-48 hours." },
  { title: "Luxury Packaging", icon: Package, text: "Delivered crisp, folded, and beautifully packed." },
  { title: "Experienced Team", icon: Zap, text: "Highly trained professionals handling your garments." }
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading 
              title="Why Customers Switch to Pressivo" 
              subtitle="We've completely reimagined the laundry experience. No more lost socks, ruined fabrics, or missed pickups."
              className="text-left"
            />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="flex gap-4"
                >
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-slate-200">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{reason.title}</h4>
                    <p className="text-sm text-slate-600">{reason.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-[600px] rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-xl hidden lg:block"
          >
            <img 
              src="/why choose us.png" 
              alt="Happy customer receiving clothes" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            <div className="absolute bottom-10 left-10 right-10 p-6 bg-white/95 backdrop-blur-md border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-2xl">
              <h3 className="text-2xl font-bold mb-2 text-slate-900">"The best laundry service I've ever used in Gurgaon."</h3>
              <p className="text-primary font-medium">- Rahul Sharma, DLF Phase 5</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
