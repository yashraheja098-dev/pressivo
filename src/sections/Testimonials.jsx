import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import SectionHeading from '../components/ui/SectionHeading';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Rahul Sharma",
    location: "DLF Phase 5",
    text: "My clothes always come back perfectly cleaned. The premium steam ironing is a game changer for my suits.",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "Priya Singh",
    location: "Sector 56",
    text: "Best laundry service in Gurgaon. The pickup and delivery is always on time, and the app makes booking so easy.",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "Amit Patel",
    location: "Golf Course Road",
    text: "Car detailing exceeded expectations. The guys were professional, brought their own equipment, and the car looks brand new.",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=3"
  },
  {
    name: "Neha Gupta",
    location: "Sushant Lok",
    text: "Switched to their monthly package 3 months ago. It's affordable and completely eliminated my laundry headaches.",
    rating: 5,
    img: "https://i.pravatar.cc/150?u=4"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Loved in Gurgaon" 
          subtitle="Don't just take our word for it. See what our 5000+ happy customers have to say."
        />

        <div className="mt-16 max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            pagination={{ clickable: true, bulletClass: 'swiper-pagination-bullet bg-slate-300', bulletActiveClass: 'swiper-pagination-bullet-active bg-primary' }}
            className="pb-16"
          >
            {reviews.map((review, idx) => (
              <SwiperSlide key={idx}>
                <div className="glass-card bg-white p-8 h-full flex flex-col shadow-sm border-slate-200">
                  <div className="flex items-center gap-1 mb-6 text-primary">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-600 italic mb-8 flex-1 text-lg">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <img src={review.img} alt={review.name} className="w-12 h-12 rounded-full object-cover border-2 border-slate-100" />
                    <div>
                      <h4 className="font-bold text-slate-900">{review.name}</h4>
                      <p className="text-sm text-slate-500">{review.location}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
