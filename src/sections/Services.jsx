import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import { Shirt, Droplets, Wind, Sparkles, CalendarSync, CarFront } from 'lucide-react';

const services = [
  {
    title: "Laundry by KG",
    description: "Everyday clothes washed, folded and returned fresh. Perfect for your daily wear.",
    icon: Droplets
  },
  {
    title: "Steam Ironing",
    description: "Crisp, wrinkle-free garments using advanced steam technology for that sharp look.",
    icon: Wind
  },
  {
    title: "Premium Dry Cleaning",
    description: "Specialized care for suits, silks, and delicate fabrics that require expert handling.",
    icon: Sparkles
  },
  {
    title: "Wash & Iron",
    description: "The complete package. Professionally washed and perfectly steam ironed.",
    icon: Shirt
  },
  {
    title: "Monthly Packages",
    description: "Subscribe and forget. Regular pickups with discounted rates for hassle-free laundry.",
    icon: CalendarSync
  },
  {
    title: "Doorstep Car Detailing",
    description: "Premium interior and exterior car cleaning services right at your doorstep.",
    icon: CarFront
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Premium Care For Everything" 
          subtitle="From your daily wear to your luxury vehicle, we provide professional care with unmatched convenience."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
