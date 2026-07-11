import Button from '../components/ui/Button';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/constants';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-primary/5 -z-20" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582735689369-4fe89b711461?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-multiply -z-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent -z-10" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight text-slate-900">
          Ready to experience premium laundry?
        </h2>
        <p className="text-xl text-slate-600 mb-10">
          Book your pickup in under 30 seconds.
        </p>
        
        <Button size="lg" onClick={openWhatsApp} className="gap-2 text-lg px-8 h-16 shadow-lg shadow-primary/20">
          <MessageCircle />
          Chat on WhatsApp
        </Button>
      </div>
    </section>
  );
}
