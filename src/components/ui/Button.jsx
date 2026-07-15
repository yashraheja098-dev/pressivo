import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-[#b58813] shadow-lg hover:shadow-xl hover:shadow-accent/30 font-bold border-none",
    secondary: "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm hover:shadow-md",
    outline: "border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-slate-300 shadow-sm",
    ghost: "hover:bg-slate-100 text-slate-600",
    golden: "bg-accent text-primary hover:bg-[#b58813] shadow-lg hover:shadow-xl hover:shadow-accent/30 font-bold",
  };
  
  const sizes = {
    default: "h-12 px-6 py-2",
    sm: "h-10 px-4 text-sm",
    lg: "h-14 px-8 text-lg",
    icon: "h-12 w-12",
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
});
Button.displayName = "Button";

export default Button;
