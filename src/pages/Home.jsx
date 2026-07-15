import React from 'react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Pricing from '../sections/Pricing';
import WhyChooseUs from '../sections/WhyChooseUs';
import Process from '../sections/Process';
import BeforeAfterShowcase from '../sections/BeforeAfterShowcase';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import Contact from '../sections/Contact';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Pricing />
      <BeforeAfterShowcase />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </main>
  );
}
