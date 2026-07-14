import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import PricingCard from '../components/ui/PricingCard';
import { openWhatsApp } from '../utils/constants';

const categories = ["Laundry", "Monthly Packages", "Car Detailing", "Specialty Cleaning"];

const pricingData = {
  "Laundry": [
    { title: "Standard Steam Iron", price: "₹10", unit: "/ Piece", features: ["Crisp finish", "Next day delivery", "Hanger packing"], isPopular: false, image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=600" },
    { title: "Premium Steam Iron", price: "₹25", unit: "/ Piece", features: ["Perfect for suits/sarees", "Special fabric care", "Premium packaging"], isPopular: false, image: "https://images.unsplash.com/photo-1626497764746-6dc36546b388?auto=format&fit=crop&q=80&w=600" },
    { title: "Wash & Fold", price: "₹80", unit: "/ KG", features: ["Premium detergents", "Softener included", "Neatly folded"], isPopular: false, image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=600" },
    { title: "Wash & Iron", price: "₹110", unit: "/ KG", features: ["Washing & Steam Ironing", "Stain inspection", "Free pickup & delivery"], isPopular: true, image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=600" },
    { title: "Premium Laundry", price: "₹150", unit: "/ KG", features: ["Individual washing", "Fabric specific care", "Luxury packaging"], isPopular: false, image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=600" },
    { title: "Dry Cleaning", price: "₹199", unit: "Starting", features: ["Stain removal", "Delicate fabric handling", "Individual crisp packaging"], isPopular: false, image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=600" },
  ],
  "Monthly Packages": [
    { title: "Wash & Fold 30KG", price: "₹1800", unit: "/ Month", features: ["30 KG limit", "4 Pickups per month", "Premium detergents", "Rollover not allowed"], isPopular: false, image: "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&q=80&w=600" },
    { title: "Wash & Iron 30KG", price: "₹2300", unit: "/ Month", features: ["30 KG limit", "4 Pickups per month", "Steam ironing included", "Priority support"], isPopular: true, image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=600" },
  ],
  "Car Detailing": [
    { title: "Exterior Package", price: "₹599", unit: "Starting", features: ["Foam wash", "Tyre polish", "Glass cleaning"], isPopular: false, image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80&w=600" },
    { title: "Interior Package", price: "₹599", unit: "Starting", features: ["Deep vacuuming", "Dashboard polish", "Seat dry cleaning"], isPopular: false, image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600" },
    { title: "Complete Package", price: "₹999", unit: "Starting", features: ["Interior + Exterior", "Wax polish", "Odor removal", "Engine bay cleaning"], isPopular: true, image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=600" },
  ],
  "Specialty Cleaning": [
    { title: "Shoe Cleaning", price: "₹299", unit: "Starting", features: ["Deep stain removal", "Odor treatment", "Fabric restoration"], isPopular: true, image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600" },
    { title: "Sofa Cleaning", price: "₹499", unit: "/ Seat", features: ["Dry vacuuming", "Deep shampooing", "Spot treatment"], isPopular: false, image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?auto=format&fit=crop&q=80&w=600" },
    { title: "Curtain Cleaning", price: "₹199", unit: "/ Panel", features: ["Dust removal", "Steam cleaning", "Fabric conditioning"], isPopular: false, image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600" },
  ]
};

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("Laundry");

  return (
    <section id="pricing" className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-900/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading 
          title="Transparent Pricing" 
          subtitle="Premium quality doesn't have to break the bank. Choose the service that fits your needs."
          dark={false}
        />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-accent shadow-md border border-accent/50' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-primary shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center max-w-6xl mx-auto"
        >
          {pricingData[activeCategory].map((plan, idx) => (
            <PricingCard 
              key={idx}
              {...plan}
              delay={idx * 0.1}
              onBook={openWhatsApp}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
