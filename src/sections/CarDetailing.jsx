import React from 'react';
import { motion } from 'framer-motion';
import { CarFront, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import { openWhatsApp } from '../utils/constants';

export default function CarDetailing() {
  return (
    <section className="py-24 bg-slate-900 relative border-t border-slate-800 overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-800 to-transparent z-0 hidden lg:block" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20 lg:opacity-30 lg:w-1/2 lg:left-1/2 z-0 mix-blend-luminosity" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent lg:w-2/3 z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-slate-200 text-sm font-medium mb-6">
            <CarFront size={16} />
            <span>Premium Doorstep Service</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Luxury Car Detailing <br />
            <span className="text-slate-400">At Your Doorstep.</span>
          </h2>
          
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
            Restore your vehicle's showroom shine without leaving your home. From deep interior cleaning to exterior foam wash and polishing.
          </p>

          <div className="space-y-6 mb-10">
            {[
              { name: "Interior Deep Cleaning", price: "₹599", features: ["Vacuum", "Dashboard Polish", "Odor Removal"] },
              { name: "Exterior Foam Wash", price: "₹599", features: ["Foam Wash", "Tyre Shine", "Glass Cleaning"] },
              { name: "Complete Detailing", price: "₹999", features: ["Interior + Exterior", "Wax Polish", "Engine Bay"] }
            ].map((pkg, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-800/80 border border-slate-700 max-w-xl backdrop-blur-sm"
              >
                <div>
                  <h4 className="font-bold text-lg text-white mb-1">{pkg.name}</h4>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    {pkg.features.map((f, i) => (
                      <span key={i} className="flex items-center gap-1">
                        <Check size={12} className="text-primary" /> {f}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 text-right">
                  <span className="block text-2xl font-black text-white">{pkg.price}</span>
                  <span className="text-[10px] uppercase text-slate-500 tracking-wider">Starting At</span>
                </div>
              </motion.div>
            ))}
          </div>

          <Button size="lg" onClick={openWhatsApp}>
            Book Car Wash
          </Button>
        </div>
      </div>
    </section>
  );
}
