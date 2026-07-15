import { motion } from 'framer-motion';
import CountUpPkg from 'react-countup';
const CountUp = CountUpPkg.default || CountUpPkg;
import { Truck, MessageCircle, Star, Shirt, Users, MapPin, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';
import { openWhatsApp } from '../utils/constants';

export default function Hero() {
  const stats = [
    {
      icon: (
        <div className="bg-white rounded-full p-1.5 flex items-center justify-center">
          <span className="font-black text-primary text-xl leading-none w-6 h-6 flex items-center justify-center">G</span>
        </div>
      ),
      value: "4.9",
      suffix: " ★★★★★",
      label: "Google Rating",
      isCount: true
    },
    { icon: <Shirt size={28} />, value: "25000", suffix: "+", label: "Garments Cleaned", isCount: true },
    { icon: <Users size={28} />, value: "5000", suffix: "+", label: "Happy Families", isCount: true },
    { icon: <MapPin size={28} />, value: "Serving", suffix: "", label: "Entire Gurgaon", isCount: false },
    { icon: <ShieldCheck size={28} />, value: "100%", suffix: "", label: "Quality Guarantee", isCount: false },
  ];

  return (
    <section className="relative pt-20 pb-10 overflow-hidden bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Hero Content */}
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-0">
          
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-bold text-sm mb-6 shadow-sm border border-accent/20">
              <Star size={16} className="fill-accent text-accent" />
              <span>Gurgaon's #1 Premium Laundry Service</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-primary tracking-tight">
              Premium Dry Cleaning & <br className="hidden sm:block" />
              Laundry <span className="text-accent">Delivered to</span> <br className="hidden sm:block" />
              <span className="text-accent">Your Doorstep.</span>
            </h1>
            

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={openWhatsApp} className="bg-accent hover:bg-accent/90 text-white flex items-center justify-center gap-2">
                <Truck size={20} />
                Book Free Pickup
              </Button>
              <Button size="lg" variant="outline" onClick={openWhatsApp} className="border-2 border-slate-200 hover:border-slate-300 text-slate-800 bg-white flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                WhatsApp Us
              </Button>
            </div>

            {/* Feature Mini Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
              <div className="bg-white border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-xl p-3 flex items-center gap-3 transition-transform hover:-translate-y-1">
                <div className="bg-slate-50 p-2 rounded-lg text-accent">
                  <ShieldCheck size={20} />
                </div>
                <span className="text-sm font-bold text-slate-800 leading-tight">Premium<br/>Quality</span>
              </div>
              <div className="bg-white border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-xl p-3 flex items-center gap-3 transition-transform hover:-translate-y-1">
                <div className="bg-slate-50 p-2 rounded-lg text-accent">
                  <Sparkles size={20} />
                </div>
                <span className="text-sm font-bold text-slate-800 leading-tight">Hygienic<br/>Cleaning</span>
              </div>
              <div className="bg-white border border-slate-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] rounded-xl p-3 flex items-center gap-3 transition-transform hover:-translate-y-1">
                <div className="bg-slate-50 p-2 rounded-lg text-accent">
                  <Clock size={20} />
                </div>
                <span className="text-sm font-bold text-slate-800 leading-tight">On-time<br/>Delivery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] [mask-image:linear-gradient(to_left,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_left,black_85%,transparent_100%)]">
              <img 
                src="/hero-person.jpg" 
                alt="Delivery Executive holding laundry bag" 
                className="w-full h-full object-cover object-top"
              />
            </div>
          </motion.div>

        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="bg-primary rounded-2xl md:rounded-full py-6 px-4 md:px-8 shadow-2xl relative z-20 -mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 divide-y divide-white/10 md:divide-y-0 md:divide-x">
            {stats.map((stat, idx) => (
              <div key={idx} className={`flex items-center justify-center gap-4 ${idx !== 0 ? 'pt-4 md:pt-0' : ''}`}>
                <div className="text-white shrink-0">
                  {stat.icon}
                </div>
                <div className="text-white">
                  <div className="font-bold text-lg leading-tight flex items-center gap-1">
                    {stat.isCount ? (
                      <CountUp end={parseFloat(stat.value)} decimals={stat.value.includes('.') ? 1 : 0} duration={2.5} separator="," />
                    ) : (
                      <span>{stat.value}</span>
                    )}
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-xs text-white/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
