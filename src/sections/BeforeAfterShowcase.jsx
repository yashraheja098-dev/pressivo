import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/ui/SectionHeading';

const showcaseData = [
  {
    title: "Shoe Cleaning",
    image: "/shoes-before-after.webp",
    isPreSplit: true
  },
  {
    title: "Sofa Cleaning",
    image: "/sofa-before-after.webp",
    isPreSplit: true,
    objectFit: "contain"
  },
  {
    title: "Curtain Cleaning",
    image: "/curtain-before-after.webp",
    isPreSplit: true
  },
  {
    title: "Carpet Cleaning",
    image: "/carpet-before-after.webp",
    isPreSplit: true
  }
];

export default function BeforeAfterShowcase() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="See The Difference" 
          subtitle="Real results from our specialized cleaning processes. We restore your items to look brand new."
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {showcaseData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative aspect-[4/5] sm:aspect-square xl:aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] group bg-white hover:shadow-[0_8px_20px_-6px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              {item.isPreSplit ? (
                <div className="w-full h-full bg-white">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-full transform transition-transform duration-700 group-hover:scale-105 ${item.objectFit === 'contain' ? 'object-contain p-2' : 'object-cover'}`}
                  />
                </div>
              ) : (
                <>
                  {/* Dirty Half (Left) */}
                  <div className="absolute inset-y-0 left-0 w-1/2 overflow-hidden border-r-[2px] border-white z-10">
                    <img 
                      src={item.image} 
                      alt={`${item.title} Before`} 
                      className="w-[200%] h-full max-w-none object-cover transform transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "sepia(0.4) brightness(0.65) contrast(0.9) saturate(0.5)" }}
                    />
                    <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                      Before
                    </div>
                  </div>

                  {/* Clean Half (Right) */}
                  <div className="absolute inset-y-0 right-0 w-1/2 overflow-hidden z-0">
                    <img 
                      src={item.image} 
                      alt={`${item.title} After`} 
                      className="w-[200%] h-full max-w-none object-cover -translate-x-1/2 transform transition-transform duration-700 group-hover:scale-105 origin-left"
                    />
                    <div className="absolute top-4 right-4 bg-accent text-primary text-[10px] sm:text-xs font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      After
                    </div>
                  </div>
                </>
              )}

              {/* Title Gradient Overlay */}
              <div className="absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 pointer-events-none" />
              
              <div className="absolute bottom-6 inset-x-0 px-6 z-30 text-center">
                <h3 className="text-white text-xl sm:text-2xl font-bold tracking-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
