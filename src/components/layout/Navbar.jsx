import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Truck } from 'lucide-react';
import Button from '../ui/Button';
import { openWhatsApp, PHONE_NUMBER_1 } from '../../utils/constants';
import { cn } from '../../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'Services', href: '#services', hasDropdown: true },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About Us', href: '#why-us' },

    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm' : 'bg-white py-4 border-b border-slate-100'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0">
            <a href="#" className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-primary leading-none">
                PRESS<span className="text-accent">IVO</span>
              </span>
              <span className="text-[0.55rem] font-bold text-slate-500 tracking-widest mt-1">
                PREMIUM DRY CLEANING & LAUNDRY
              </span>
            </a>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-bold transition-colors flex items-center gap-1 relative py-2",
                  link.active ? "text-accent" : "text-slate-800 hover:text-accent"
                )}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown size={14} className="mt-0.5" />}
                {link.active && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" />
                )}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a href={`tel:${PHONE_NUMBER_1}`} className="flex items-center gap-2 text-slate-800 hover:text-accent font-bold text-sm transition-colors">
              <Phone size={16} />
              <span>{PHONE_NUMBER_1.replace(/(\d{5})(\d{5})/, "$1 $2")}</span>
            </a>
            <Button onClick={openWhatsApp} size="sm" className="bg-accent hover:bg-accent/90 text-white flex items-center gap-2">
              <Truck size={16} />
              Book Free Pickup
            </Button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-slate-200 overflow-hidden shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-4 text-base font-bold rounded-lg transition-colors",
                    link.active ? "text-accent bg-slate-50" : "text-slate-800 hover:text-accent hover:bg-slate-50"
                  )}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3 flex flex-col gap-4">
                <a href={`tel:${PHONE_NUMBER_1}`} className="flex items-center justify-center gap-2 text-slate-800 font-bold text-lg">
                  <Phone size={20} />
                  <span>{PHONE_NUMBER_1.replace(/(\d{5})(\d{5})/, "$1 $2")}</span>
                </a>
                <Button onClick={openWhatsApp} className="w-full bg-accent hover:bg-accent/90 text-white flex items-center justify-center gap-2">
                  <Truck size={20} />
                  Book Free Pickup
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
