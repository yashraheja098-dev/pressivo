import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ui/ServiceCard';

const services = [
  {
    title: "Laundry by KG",
    description: "Everyday clothes washed, folded and returned fresh. Perfect for your daily wear.",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Steam Ironing",
    description: "Crisp, wrinkle-free garments using advanced steam technology for that sharp look.",
    image: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Premium Dry Cleaning",
    description: "Specialized care for suits, silks, and delicate fabrics that require expert handling.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Wash & Iron",
    description: "The complete package. Professionally washed and perfectly steam ironed.",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Monthly Packages",
    description: "Subscribe and forget. Regular pickups with discounted rates for hassle-free laundry.",
    image: "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Doorstep Car Detailing",
    description: "Premium interior and exterior car cleaning services right at your doorstep.",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Premium Care For Everything" 
          subtitle="From your daily wear to your luxury vehicle, we provide professional care with unmatched convenience."
        />
        
        <div className="mt-16 pb-12">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1.2}
            centeredSlides={false}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active bg-accent',
            }}
            breakpoints={{
              640: { slidesPerView: 2.2, spaceBetween: 20 },
              1024: { slidesPerView: 3.5, spaceBetween: 30 },
              1280: { slidesPerView: 4, spaceBetween: 30 },
            }}
            className="services-swiper !pb-16"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index} className="h-auto">
                <ServiceCard 
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  delay={0}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
