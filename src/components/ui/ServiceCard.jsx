import { motion } from 'framer-motion';

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
      <div className="w-full h-48 sm:h-56 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-slate-600 leading-relaxed text-sm flex-grow">{description}</p>
      </div>
    </motion.div>
  );
}
