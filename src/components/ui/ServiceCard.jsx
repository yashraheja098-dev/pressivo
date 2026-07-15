import { motion } from 'framer-motion';
import Button from './Button';
import { openWhatsApp } from '../../utils/constants';
export default function ServiceCard({ title, image, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="glass-card flex flex-col h-full group bg-white border-slate-200 shadow-sm hover:shadow-md overflow-hidden rounded-2xl"
    >
      <div className="w-full h-32 sm:h-40 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h3 className="text-base sm:text-lg font-bold mb-2 text-primary leading-tight">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-xs flex-grow mb-3">{description}</p>
        <Button variant="outline" size="sm" onClick={openWhatsApp} className="w-full mt-auto text-xs h-8">
          Book Now
        </Button>
      </div>
    </motion.div>
  );
}
