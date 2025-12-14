import { Phone, Mail, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white" data-testid="section-contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-skyled-navy mb-8">Siap Berkolaborasi?</h2>
        <p className="text-xl text-gray-500 mb-12">
          Baik Anda membutuhkan penyelenggaraan event besar, merancang roadmap keberlanjutan, atau memproduksi merchandise custom, Skyled Pro Indonesia adalah solusi lengkap Anda.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="p-8 bg-skyled-navy text-white rounded-[32px] flex flex-col items-center justify-center">
            <Phone size={40} className="mb-4 text-skyled-light" />
            <h3 className="text-xl font-bold mb-2">Telepon Kami</h3>
            <p className="text-lg opacity-80" data-testid="text-phone">{CONTACT_INFO.phone}</p>
          </div>
          <div className="p-8 bg-slate-100 text-skyled-navy rounded-[32px] flex flex-col items-center justify-center border border-gray-200">
            <Mail size={40} className="mb-4 text-skyled-blue" />
            <h3 className="text-xl font-bold mb-2">Email Kami</h3>
            <p className="text-lg text-gray-600" data-testid="text-email">{CONTACT_INFO.email}</p>
          </div>
        </div>

        <a href={`mailto:${CONTACT_INFO.email}`} data-testid="link-get-in-touch">
          <Button 
            size="lg"
            className="inline-flex items-center gap-3 bg-skyled-accent text-white px-10 py-6 rounded-full font-bold text-lg shadow-xl transition-all"
          >
            Hubungi Kami <ExternalLink size={20} />
          </Button>
        </a>
      </div>
    </section>
  );
}
