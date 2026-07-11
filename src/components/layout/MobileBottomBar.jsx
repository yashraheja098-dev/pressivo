import React from 'react';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { openWhatsApp, PHONE_NUMBER_1 } from '../../utils/constants';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-slate-200 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
      <div className="flex items-center justify-around p-3">
        <a 
          href={`tel:+91${PHONE_NUMBER_1}`}
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors"
        >
          <Phone className="w-5 h-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Call</span>
        </a>
        
        <button 
          onClick={openWhatsApp}
          className="flex flex-col items-center gap-1 text-white relative -top-4 bg-primary p-4 rounded-full border-4 border-slate-50 shadow-lg shadow-primary/30"
        >
          <MessageCircle className="w-6 h-6 fill-white/20" />
          <span className="text-[10px] font-medium uppercase tracking-wider mt-1 text-white">WhatsApp</span>
        </button>

        <button 
          onClick={openWhatsApp}
          className="flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[10px] font-medium uppercase tracking-wider">Book</span>
        </button>
      </div>
    </div>
  );
}
