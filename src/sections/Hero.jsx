import { motion } from 'framer-motion';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default || CountUpPkg;
import { Star, Truck, WashingMachine, Sparkles, Shirt } from 'lucide-react';
import Button from '../components/ui/Button';
import { openWhatsApp } from '../utils/constants';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Background Gradient & Animated Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-sky-100 via-slate-50 to-slate-50 -z-10" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.03] mix-blend-multiply -z-20" />
      
      {/* Floating Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-1/4 text-sky-200/50 -z-10"
      >
        <WashingMachine size={120} />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -15, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 left-1/4 text-sky-200/50 -z-10"
      >
        <Shirt size={100} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-100 text-primary text-sm font-medium mb-6">
              <Sparkles size={16} />
              <span>Premium Care in Gurgaon</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-slate-900">
              Laundry. Dry Cleaning. Car Detailing. <br/>
              <span className="text-gradient">All From Your Doorstep.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
              Professional laundry care, steam ironing, dry cleaning and doorstep car detailing across Gurgaon. Experience the luxury of convenience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={openWhatsApp} className="w-full sm:w-auto text-lg">
                Book on WhatsApp
              </Button>
              <Button size="lg" variant="secondary" onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth'})} className="w-full sm:w-auto text-lg">
                View Services
              </Button>
            </div>
          </motion.div>

          <div className="relative hidden lg:block h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="absolute top-10 right-10 glass-card bg-white p-6 rounded-2xl w-64 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-sky-50 p-3 rounded-full text-primary">
                  <Star fill="currentColor" size={24} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-800">
                    <CountUp end={4.9} decimals={1} duration={2} />★
                  </h4>
                  <p className="text-xs text-slate-500">Customer Rating</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute top-1/2 -left-10 glass-card bg-white p-6 rounded-2xl w-64 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-sky-50 p-3 rounded-full text-primary">
                  <Shirt size={24} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-800">
                    <CountUp end={25000} separator="," duration={2.5} />+
                  </h4>
                  <p className="text-xs text-slate-500">Garments Cleaned</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-10 right-20 glass-card bg-white p-6 rounded-2xl w-64 shadow-lg"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="bg-sky-50 p-3 rounded-full text-primary">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-slate-800">
                    <CountUp end={5000} separator="," duration={2} />+
                  </h4>
                  <p className="text-xs text-slate-500">Happy Customers</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
