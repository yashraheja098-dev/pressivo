import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { EMAIL, PHONE_NUMBER_1, PHONE_NUMBER_2, ADDRESS } from '../../utils/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-20 pb-24 md:pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-black tracking-tighter text-white">
                PRESS<span className="text-accent">IVO</span>
              </span>
            </a>
            <p className="text-slate-300 text-sm leading-relaxed max-w-xs">
              Premium laundry, steam ironing, dry cleaning and doorstep car detailing across Gurgaon.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-accent transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-accent transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-accent transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Pricing', 'Why Us', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-slate-300 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {['Dry Cleaning', 'Steam Ironing', 'Laundry by KG', 'Shoe Cleaning'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-slate-300 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>{ADDRESS}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <span>+91 {PHONE_NUMBER_1}<br/>+91 {PHONE_NUMBER_2}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-300">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <span>{EMAIL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Pressivo. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
