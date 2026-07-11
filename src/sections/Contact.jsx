import SectionHeading from '../components/ui/SectionHeading';
import { MapPin, Phone, Mail } from 'lucide-react';
import { EMAIL, PHONE_NUMBER_1, PHONE_NUMBER_2, ADDRESS } from '../utils/constants';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white border-y border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Get In Touch" 
          subtitle="Have a special request? Visit our store or contact us directly."
        />

        <div className="mt-16 grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="glass-card bg-white border-slate-200 p-6 flex items-start gap-4">
              <div className="bg-white border border-slate-200 p-3 rounded-full text-accent shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">Visit Us</h4>
                <p className="text-slate-600 leading-relaxed">{ADDRESS}</p>
              </div>
            </div>

            <div className="glass-card bg-white border-slate-200 p-6 flex items-start gap-4">
              <div className="bg-white border border-slate-200 p-3 rounded-full text-accent shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">Call Us</h4>
                <p className="text-slate-600 mb-1">+91 {PHONE_NUMBER_1}</p>
                <p className="text-slate-600">+91 {PHONE_NUMBER_2}</p>
              </div>
            </div>

            <div className="glass-card bg-white border-slate-200 p-6 flex items-start gap-4">
              <div className="bg-white border border-slate-200 p-3 rounded-full text-accent shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold mb-2 text-slate-900">Email Us</h4>
                <p className="text-slate-600">{EMAIL}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto border border-slate-200 shadow-sm relative bg-slate-100">
            {/* Google Map Placeholder without dark mode inversion */}
            <iframe 
              src="https://maps.google.com/maps?q=Suncity%20Avenue%2C%20Sector%20102%2C%20Gurgaon%20122006&t=&z=14&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
