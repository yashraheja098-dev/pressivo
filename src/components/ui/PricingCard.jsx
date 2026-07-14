import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';
import { cn } from '../../lib/utils';

export default function PricingCard({ title, price, unit, features, isPopular, image, delay = 0, onBook }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "flex flex-col relative overflow-hidden rounded-2xl transition-all duration-300",
        "bg-white text-slate-900",
        isPopular 
          ? "border-[3px] border-accent shadow-[0_0_30px_rgba(245,180,0,0.25)] scale-105 z-10" 
          : "border border-slate-200 shadow-xl hover:border-primary/30"
      )}
    >
      {isPopular && (
        <div className="absolute top-5 right-[-35px] bg-accent text-primary text-xs font-extrabold px-10 py-1.5 rotate-45 shadow-md z-20 tracking-wider">
          POPULAR
        </div>
      )}
      
      {/* Image Header */}
      {image && (
        <div className="relative h-48 w-full overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 z-10" />
          <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
        </div>
      )}

      <div className="p-8 flex-1 flex flex-col relative z-20">
        <h3 className="text-2xl font-bold mb-2 text-primary">{title}</h3>
        <div className="flex items-baseline mb-6 border-b border-slate-100 pb-6">
          <span className="text-4xl font-extrabold text-primary">{price}</span>
          {unit && <span className="text-slate-500 ml-2 font-medium">{unit}</span>}
        </div>
        <ul className="flex-1 space-y-4 mb-8">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <div className="bg-primary/5 rounded-full p-1 mr-3 mt-0.5 border border-primary/10">
                <Check className="w-4 h-4 text-accent shrink-0" />
              </div>
              <span className="text-slate-600 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <Button 
          variant={isPopular ? 'golden' : 'outline'} 
          className={cn(
            "w-full transition-all duration-300",
            !isPopular && "text-primary border-primary hover:bg-primary/5 hover:border-primary"
          )} 
          onClick={onBook}
        >
          Book Now
        </Button>
      </div>
    </motion.div>
  );
}
