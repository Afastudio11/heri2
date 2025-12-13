import { Phone, Mail, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white" data-testid="section-contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-skyled-navy mb-8">Ready to Collaborate?</h2>
        <p className="text-xl text-gray-500 mb-12">
          Whether you need to organize a mega-event, design a sustainability roadmap, or produce custom merchandise, Skyled Pro Indonesia is your one-stop solution.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 bg-skyled-navy text-white rounded-[32px] flex flex-col items-center justify-center">
            <Phone size={40} className="mb-4 text-skyled-light" />
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-lg opacity-80" data-testid="text-phone-1">{CONTACT_INFO.phone1}</p>
            <p className="text-lg opacity-80" data-testid="text-phone-2">{CONTACT_INFO.phone2}</p>
          </div>
          <div className="p-8 bg-slate-100 text-skyled-navy rounded-[32px] flex flex-col items-center justify-center border border-gray-200">
            <Mail size={40} className="mb-4 text-skyled-blue" />
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-lg text-gray-600" data-testid="text-email-1">{CONTACT_INFO.email}</p>
            <p className="text-lg text-gray-600" data-testid="text-email-2">{CONTACT_INFO.email2}</p>
          </div>
        </div>

        <a href={`mailto:${CONTACT_INFO.email}`} data-testid="link-get-in-touch">
          <Button 
            size="lg"
            className="inline-flex items-center gap-3 bg-skyled-accent text-white px-10 py-6 rounded-full font-bold text-lg shadow-xl transition-all"
          >
            Get In Touch <ExternalLink size={20} />
          </Button>
        </a>
      </div>
    </section>
  );
}
