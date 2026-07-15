import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import { openWhatsApp } from '../utils/constants';

const allServices = [
  {
    title: "Laundry by KG",
    description: "Everyday clothes washed, folded and returned fresh. Perfect for your daily wear.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Steam Ironing",
    description: "Crisp, wrinkle-free garments using advanced steam technology.",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Premium Dry Cleaning",
    description: "Specialized care for suits, silks, and delicate fabrics.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Wash & Iron",
    description: "The complete package. Professionally washed and steam ironed.",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Monthly Packages",
    description: "Subscribe and forget. Regular pickups with discounted rates.",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1000&auto=format&fit=crop"
  },

  {
    title: "Shoe Cleaning",
    description: "Deep cleaning and restoration for your favorite sneakers.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Sofa Cleaning",
    description: "Professional dry vacuuming and deep shampooing for couches.",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Curtain Cleaning",
    description: "Expert dust removal and steam cleaning for your drapes.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Carpet Cleaning",
    description: "Deep shampooing and sanitization for carpets and rugs.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function AllServicesPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans">
      {/* Sleek Minimal Header */}
      <section className="relative pt-32 pb-20 bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-primary to-primary pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="h-1 w-16 bg-accent mx-auto mb-6 rounded-full"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight"
          >
            Comprehensive Care
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/80 leading-relaxed"
          >
            A full suite of professional cleaning services tailored for your home and wardrobe.
          </motion.p>
        </div>
      </section>

      {/* Grid Layout Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {allServices.map((service, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 border border-slate-100 flex flex-col h-full"
              >
                {/* Image Header */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content Body */}
                <div className="p-8 flex flex-col flex-grow relative">
                  {/* Decorative Numbering */}
                  <div className="absolute top-0 right-8 -translate-y-1/2 bg-white text-slate-300 font-black text-2xl px-4 py-2 rounded-xl shadow-sm border border-slate-100">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed flex-grow mb-8 text-base">
                    {service.description}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    onClick={openWhatsApp} 
                    className="w-full justify-between items-center border-slate-200 text-slate-700 hover:bg-accent hover:text-slate-900 hover:border-accent hover:shadow-md transition-all duration-300"
                  >
                    <span className="font-semibold">Book Now</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
            Ready for a spotless lifestyle?
          </h2>
          <Button size="lg" onClick={openWhatsApp} className="bg-accent hover:bg-accent/90 text-slate-900 font-bold border-none text-lg px-12 mt-4 shadow-xl shadow-accent/20">
            Schedule Pickup
          </Button>
        </div>
      </section>
    </div>
  );
}
