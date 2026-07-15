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
      whileHover={{ y: -4 }}
      className="bg-white border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] rounded-2xl flex flex-col h-full group overflow-hidden transition-all duration-300"
    >
      <div className="w-full h-40 sm:h-48 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <h3 className="text-lg sm:text-xl font-bold mb-2 text-primary leading-tight group-hover:text-accent transition-colors">{title}</h3>
        <p className="text-slate-500 leading-relaxed text-sm flex-grow mb-5">{description}</p>
        <Button variant="outline" size="sm" onClick={openWhatsApp} className="w-full mt-auto">
          Book Now
        </Button>
      </div>
    </motion.div>
  );
}
