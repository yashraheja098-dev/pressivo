import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function SectionHeading({ title, subtitle, className, dark = false }) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn("text-3xl md:text-5xl font-bold mb-4 tracking-tight", dark ? "text-white" : "text-slate-900")}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn("text-lg max-w-2xl mx-auto", dark ? "text-slate-300" : "text-slate-600")}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
