import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Truck, WashingMachine, PackageOpen, Shirt, Users, MapPin, ShieldCheck } from 'lucide-react';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default || CountUpPkg;
const steps = [
  { icon: Calendar, title: "Book Pickup", desc: "Schedule a pickup at your convenience." },
  { icon: Truck, title: "We Collect", desc: "Our executive collects from your doorstep." },
  { icon: WashingMachine, title: "Expert Cleaning", desc: "Professionally cleaned with care & precision." },
  { icon: PackageOpen, title: "Delivered Fresh", desc: "Hygienically packed & delivered on time." },
];

export default function Process() {
  const stats = [
    {
      icon: (
        <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
          <span className="font-black text-primary text-xl leading-none w-6 h-6 flex items-center justify-center">G</span>
        </div>
      ),
      value: "4.9",
      suffix: " ★★★★★",
      label: "Google Rating",
      isCount: true
    },
    { icon: <Shirt size={28} />, value: "25000", suffix: "+", label: "Garments Cleaned", isCount: true },
    { icon: <Users size={28} />, value: "5000", suffix: "+", label: "Happy Families", isCount: true },
    { icon: <MapPin size={28} />, value: "Serving", suffix: "", label: "Entire Gurgaon", isCount: false },
    { icon: <ShieldCheck size={28} />, value: "100%", suffix: "", label: "Quality Guarantee", isCount: false },
  ];

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

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-primary rounded-2xl md:rounded-full py-6 px-4 md:px-8 shadow-2xl mt-24 relative z-20"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y divide-white/10 md:divide-y-0 md:divide-x">
            {stats.map((stat, idx) => (
              <div key={idx} className={`flex items-center justify-center gap-4 ${idx !== 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className="text-white shrink-0">
                  {stat.icon}
                </div>
                <div className="text-white">
                  <div className="font-bold text-lg leading-tight flex items-center gap-1">
                    {stat.isCount ? (
                      <CountUp end={parseFloat(stat.value)} decimals={stat.value.includes('.') ? 1 : 0} duration={2.5} separator="," />
                    ) : (
                      <span>{stat.value}</span>
                    )}
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
