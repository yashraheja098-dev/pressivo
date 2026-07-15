import React from 'react';
import { motion } from 'framer-motion';
import { openWhatsApp } from '../utils/constants';
import Button from '../components/ui/Button';

const pricingCategories = [
  {
    category: "Laundry & Ironing",
    description: "Everyday care for your daily wardrobe.",
    items: [
      { name: "Wash & Fold", price: "₹80 / KG", note: "Everyday wear, neatly folded" },
      { name: "Wash & Iron", price: "₹110 / KG", note: "Washed & professionally ironed" },
      { name: "Premium Laundry", price: "₹150 / KG", note: "Individual care & premium packing" },
      { name: "Standard Steam Iron", price: "₹10 / Piece", note: "Crisp, wrinkle-free finish" },
      { name: "Premium Steam Iron", price: "₹25 / Piece", note: "Special care for delicate fabrics" },
    ]
  },
  {
    category: "Dry Cleaning",
    description: "Expert stain removal and preservation for valuable garments.",
    items: [
      { name: "Shirts / Tops", price: "₹99 / Piece", note: "Stain removal included" },
      { name: "Trousers / Jeans", price: "₹120 / Piece", note: "Perfect crease" },
      { name: "Suit (2 Piece)", price: "₹349 / Set", note: "Jacket & Trousers" },
      { name: "Saree / Heavy Dress", price: "₹399 / Piece", note: "Starting price based on work" },
      { name: "Blanket / Quilt", price: "₹299 / Piece", note: "Deep sanitized wash" },
    ]
  },
  {
    category: "Home & Specialty",
    description: "Deep cleaning services brought right to your doorstep.",
    items: [
      { name: "Premium Shoe Cleaning", price: "₹299 / Pair", note: "Complete restoration" },
      { name: "Sofa Cleaning", price: "₹449 / Seat", note: "Dry vacuuming & shampoo" },
      { name: "Carpet Cleaning", price: "₹40 / Sq.Ft", note: "Deep extraction cleaning" },
      { name: "Curtain Cleaning", price: "₹199 / Panel", note: "Steam & fabric conditioning" },
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="bg-slate-50 min-h-screen font-sans pb-24">
      {/* Header Section */}
      <section className="relative pt-32 pb-20 bg-[#0E1B3A] text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-[#0E1B3A] to-[#0E1B3A] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="h-1 w-16 bg-[#D4A017] mx-auto mb-6 rounded-full"
          />
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
          >
            Complete Price List
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/80 leading-relaxed"
          >
            Transparent, upfront pricing for all our premium cleaning services. No hidden fees, just pristine results.
          </motion.p>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 max-w-5xl">
        <div className="flex flex-col gap-12">
          {pricingCategories.map((category, catIndex) => (
            <motion.div 
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100"
            >
              {/* Category Header */}
              <div className="bg-slate-100 px-6 py-6 sm:px-8 border-b border-slate-200">
                <h2 className="text-2xl font-black text-[#0E1B3A]">{category.category}</h2>
                <p className="text-slate-500 mt-1">{category.description}</p>
              </div>

              {/* Items List */}
              <div className="divide-y divide-slate-100">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="px-6 py-5 sm:px-8 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-slate-50 transition-colors">
                    <div className="mb-2 sm:mb-0">
                      <h3 className="text-lg font-bold text-slate-800">{item.name}</h3>
                      {item.note && <p className="text-sm text-slate-500">{item.note}</p>}
                    </div>
                    <div className="text-left sm:text-right">
                      <span className="inline-block text-xl font-black text-[#D4A017]">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 mb-8 italic">
            * Minimum order value may apply for free pickup & delivery. Prices are subject to change based on exact garment inspection.
          </p>
          <Button size="lg" onClick={openWhatsApp} className="bg-[#0E1B3A] hover:bg-[#1a2d5c] text-white px-10 py-4 text-lg font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            Book A Pickup Now
          </Button>
        </div>
      </section>
    </div>
  );
}
