import { motion } from 'framer-motion';

export default function ServiceCard({ title, icon: Icon, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 flex flex-col h-full group bg-white border-slate-200 shadow-sm hover:shadow-md"
    >
      <div className="h-14 w-14 rounded-2xl bg-sky-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-slate-800">{title}</h3>
      {description && <p className="text-slate-600 leading-relaxed text-sm">{description}</p>}
    </motion.div>
  );
}
