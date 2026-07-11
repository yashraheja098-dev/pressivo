import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';
import PricingCard from '../components/ui/PricingCard';
import { openWhatsApp } from '../utils/constants';

const categories = ["Laundry", "Monthly Packages", "Car Detailing"];

const pricingData = {
  "Laundry": [
    { title: "Standard Steam Iron", price: "₹10", unit: "/ Piece", features: ["Crisp finish", "Next day delivery", "Hanger packing"], isPopular: false },
    { title: "Premium Steam Iron", price: "₹25", unit: "/ Piece", features: ["Perfect for suits/sarees", "Special fabric care", "Premium packaging"], isPopular: false },
    { title: "Wash & Fold", price: "₹80", unit: "/ KG", features: ["Premium detergents", "Softener included", "Neatly folded"], isPopular: false },
    { title: "Wash & Iron", price: "₹110", unit: "/ KG", features: ["Washing & Steam Ironing", "Stain inspection", "Free pickup & delivery"], isPopular: true },
    { title: "Premium Laundry", price: "₹150", unit: "/ KG", features: ["Individual washing", "Fabric specific care", "Luxury packaging"], isPopular: false },
    { title: "Dry Cleaning", price: "₹199", unit: "Starting", features: ["Stain removal", "Delicate fabric handling", "Individual crisp packaging"], isPopular: false },
  ],
  "Monthly Packages": [
    { title: "Wash & Fold 30KG", price: "₹1800", unit: "/ Month", features: ["30 KG limit", "4 Pickups per month", "Premium detergents", "Rollover not allowed"], isPopular: false },
    { title: "Wash & Iron 30KG", price: "₹2300", unit: "/ Month", features: ["30 KG limit", "4 Pickups per month", "Steam ironing included", "Priority support"], isPopular: true },
  ],
  "Car Detailing": [
    { title: "Exterior Package", price: "₹599", unit: "Starting", features: ["Foam wash", "Tyre polish", "Glass cleaning"], isPopular: false },
    { title: "Interior Package", price: "₹599", unit: "Starting", features: ["Deep vacuuming", "Dashboard polish", "Seat dry cleaning"], isPopular: false },
    { title: "Complete Package", price: "₹999", unit: "Starting", features: ["Interior + Exterior", "Wax polish", "Odor removal", "Engine bay cleaning"], isPopular: true },
  ]
};

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("Laundry");

  return (
    <section id="pricing" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Transparent Pricing" 
          subtitle="Premium quality doesn't have to break the bank. Choose the service that fits your needs."
        />

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 shadow-sm'
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
