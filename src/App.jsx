import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import MobileBottomBar from './components/layout/MobileBottomBar';
import BookingModal from './components/ui/BookingModal';
import Home from './pages/Home';
import AllServicesPage from './pages/AllServicesPage';
import PricingPage from './pages/PricingPage';

import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from './utils/constants';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary selection:text-white font-sans overflow-x-hidden">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<AllServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
        </Routes>

        <Footer />
        <MobileBottomBar />
        <BookingModal />

        {/* Floating WhatsApp Button (Desktop) */}
        <button 
          onClick={openWhatsApp}
          className="hidden md:flex fixed bottom-8 right-8 bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50 items-center justify-center group"
        >
          <MessageCircle size={28} />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out font-bold px-0 group-hover:px-3 text-sm">
            Chat With Us
          </span>
        </button>
      </div>
    </Router>
  );
}

export default App;
