import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';

export default function BeforeAfter() {
  const [sliderPos, setSliderPos] = useState(50);

  return (
    <section className="py-24 bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="See The Difference" 
          subtitle="Drag the slider to see our premium care in action."
        />

        <div className="max-w-4xl mx-auto mt-12">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-slate-200 shadow-xl select-none bg-slate-100">
            {/* After Image */}
            <img 
              src="/hoodie-after.png" 
              alt="After Premium Laundry" 
              className="absolute inset-0 w-full h-full object-cover scale-[1.35] pointer-events-none"
            />
            
            {/* Before Image */}
            <div 
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
            >
              <img 
                src="/hoodie-before.png" 
                alt="Before Premium Laundry" 
                className="absolute inset-0 w-full h-full object-cover filter brightness-90"
              />
            </div>

            {/* Slider */}
            <input 
              type="range" 
              min="0" 
              max="100" 
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
            />

            {/* Slider Line & Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize pointer-events-none flex items-center justify-center shadow-[0_0_15px_rgba(0,0,0,0.3)]"
              style={{ left: `calc(${sliderPos}% - 2px)` }}
            >
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                <div className="flex gap-0.5">
                  <div className="w-0.5 h-3 bg-white/80 rounded-full" />
                  <div className="w-0.5 h-3 bg-white/80 rounded-full" />
                  <div className="w-0.5 h-3 bg-white/80 rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="absolute top-4 left-4 bg-slate-900/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white z-0 pointer-events-none">
              BEFORE
            </div>
            <div className="absolute top-4 right-4 bg-primary/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-white z-0 pointer-events-none">
              AFTER
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
