import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const Button = React.forwardRef(({ className, variant = 'primary', size = 'default', children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-accent/90 shadow-md hover:shadow-lg hover:shadow-accent/30 font-bold",
    secondary: "bg-white text-slate-700 hover:bg-slate-50 border border-slate-200 shadow-sm",
    outline: "border border-primary text-primary hover:bg-primary/5",
    ghost: "hover:bg-slate-100 text-slate-600",
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
      whileHover={{ scale: 1.02 }}
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
