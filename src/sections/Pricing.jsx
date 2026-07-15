import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const pricingList = [
  { name: "Laundry by KG", price: "₹80/kg" },
  { name: "Wash & Iron", price: "₹110/kg" },
  { name: "Steam Iron", price: "₹10+/piece" },
  { name: "Blanket Dry Clean", price: "₹299" },
  { name: "Sofa Cleaning", price: "₹449 onwards" },
  { name: "Premium Laundry", price: "₹150/kg" },
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        
        {/* Heading Section */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="h-1 w-16 bg-[#D4A017] mx-auto mb-6 rounded-full"
          />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-[#0E1B3A] tracking-tight mb-4"
          >
            Transparent Pricing
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Starting prices for our most popular cleaning services. View our complete price list for all services and detailed pricing.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {pricingList.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="flex justify-between items-center bg-white rounded-[14px] border border-[#ECECEC] p-6 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="font-semibold text-slate-600 group-hover:text-[#0E1B3A] transition-colors">{item.name}</span>
              <span className="font-bold text-[#D4A017] text-lg tracking-wide">{item.price}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center"
        >
          <button 
            onClick={() => navigate('/pricing')}
            className="bg-[#D4A017] hover:bg-[#b58813] text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 mb-8 flex items-center gap-2 group"
          >
            View Complete Price List 
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

        </motion.div>

      </div>
    </section>
  );
}
