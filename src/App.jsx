import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileBottomBar from './components/layout/MobileBottomBar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Pricing from './sections/Pricing';
import WhyChooseUs from './sections/WhyChooseUs';
import Process from './sections/Process';
import CarDetailing from './sections/CarDetailing';
import BeforeAfter from './sections/BeforeAfter';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import CTA from './sections/CTA';
import BookingModal from './components/ui/BookingModal';

import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from './utils/constants';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary selection:text-white font-sans overflow-x-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <Pricing />
        <CarDetailing />
        <BeforeAfter />
        <Testimonials />
        <FAQ />
        <Contact />
        <CTA />
      </main>

      <Footer />
      <MobileBottomBar />
      <BookingModal />

      {/* Floating WhatsApp Button (Desktop) */}
      <button 
        onClick={openWhatsApp}
        className="hidden md:flex fixed bottom-8 right-8 bg-primary hover:bg-sky-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(14,165,233,0.4)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)] hover:scale-110 transition-all duration-300 z-50 items-center justify-center group"
      >
        <MessageCircle size={28} />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold px-0 group-hover:px-3 text-sm">
          Chat With Us
        </span>
      </button>
    </div>
  );
}

export default App;
