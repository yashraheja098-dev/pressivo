import React from 'react';
import { useNavigate } from 'react-router-dom';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';
import Button from '../components/ui/Button';

const services = [
  {
    title: "Laundry by KG",
    description: "Fresh, folded, everyday wear.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Standard Steam Ironing",
    description: "Crisp, wrinkle-free steam ironing.",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Premium Dry Cleaning",
    description: "Expert care for delicate fabrics.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
  },

  {
    title: "Shoe Cleaning",
    description: "Deep cleaning for shoes & sneakers.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Sofa Cleaning",
    description: "Professional sofa dry vacuuming.",
    image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Curtain Cleaning",
    description: "Expert curtain dust & steam cleaning.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="pt-12 pb-16 relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Premium Care For Everything" 
          subtitle="From your daily wear to your home furnishings, we provide professional care with unmatched convenience."
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
