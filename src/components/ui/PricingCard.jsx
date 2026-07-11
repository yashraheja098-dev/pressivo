import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Button from './Button';
import { cn } from '../../lib/utils';

export default function PricingCard({ title, price, unit, features, isPopular, delay = 0, onBook }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "glass-card p-8 flex flex-col relative overflow-hidden bg-white",
        isPopular ? "border-primary/50 shadow-lg shadow-primary/10 scale-105 z-10" : "border-slate-200"
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-slate-800">{title}</h3>
      <div className="flex items-baseline mb-6 border-b border-slate-100 pb-6">
        <span className="text-4xl font-extrabold text-slate-900">{price}</span>
        {unit && <span className="text-slate-500 ml-2">{unit}</span>}
      </div>
      <ul className="flex-1 space-y-4 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <Check className="w-5 h-5 text-primary shrink-0 mr-3 mt-0.5" />
            <span className="text-slate-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant={isPopular ? 'primary' : 'secondary'} className="w-full" onClick={onBook}>
        Book Now
      </Button>
    </motion.div>
  );
}
