import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './Button';
import { sendBookingToWhatsApp } from '../../utils/constants';

export default function BookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: ''
  });

  useEffect(() => {
    const handleOpen = (e) => {
      if (e.detail?.message && typeof e.detail.message === 'string') {
        setMessage(e.detail.message);
      } else {
        setMessage("");
      }
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    window.addEventListener('open-booking-modal', handleOpen);
    return () => window.removeEventListener('open-booking-modal', handleOpen);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
    setTimeout(() => {
      setFormData({ name: '', mobile: '', address: '' });
      setMessage("");
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendBookingToWhatsApp(formData.name, formData.mobile, formData.address, message);
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100]"
          />
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden pointer-events-auto"
            >
              <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">Book Service</h3>
                  <p className="text-slate-600 text-sm mt-1">Please fill in your details to continue on WhatsApp.</p>
                </div>
                <button 
                  onClick={handleClose}
                  className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="mobile" className="block text-sm font-medium text-slate-700 mb-1">Mobile Number</label>
                  <input
                    type="tel"
                    id="mobile"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '').slice(0,10) })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="9876543210"
                  />
                </div>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Pickup Address</label>
                  <textarea
                    id="address"
                    required
                    rows={3}
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                    placeholder="House No, Society, Sector, City..."
                  />
                </div>
                
                <div className="pt-4">
                  <Button type="submit" className="w-full h-12 text-lg shadow-lg shadow-primary/20">
                    Continue to WhatsApp
                  </Button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
