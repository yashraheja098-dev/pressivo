import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';

const services = [
  {
    title: "Laundry by KG",
    description: "Fresh, folded, everyday wear.",
    image: "/clean clothes.webp"
  },
  {
    title: "Premium Drycleaning",
    description: "Expert care for delicate fabrics.",
    image: "/dry cleaning.webp"
  },
  {
    title: "Steam Ironing",
    description: "Crisp, wrinkle-free steam ironing.",
    image: "/steam ironing.webp"
  },
  {
    title: "Curtain Drycleaning",
    description: "Expert curtain dust & steam cleaning.",
    image: "/curtain cleaning.webp"
  },
  {
    title: "Sofa Drycleaning",
    description: "Professional sofa dry vacuuming.",
    image: "/sofa cleaning.webp"
  },
  {
    title: "Carpet Cleaning",
    description: "Deep extraction carpet cleaning.",
    image: "/carpet cleaning.webp"
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="pt-12 pb-16 relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Premium Fabric Care for Your Wardrobe & Home." 
          subtitle="Expert Dry Cleaning, Laundry & Home Cleaning Services with Free Doorstep Pickup & Delivery Across Gurgaon"
        />
        
        <div className="mt-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {services.map((service, index) => (
              <div key={index} className="h-auto">
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button size="lg" onClick={() => navigate('/services')} className="px-10">
              View All Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
