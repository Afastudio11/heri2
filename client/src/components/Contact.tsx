import { MessageCircle, Mail } from 'lucide-react';
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
          <a href="https://wa.me/6287883184796" target="_blank" rel="noopener noreferrer" className="p-8 bg-[#25D366] text-white rounded-[32px] flex flex-col items-center justify-center hover:bg-[#20b858] transition-colors cursor-pointer">
            <MessageCircle size={40} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-lg opacity-90">Klik untuk chat langsung</p>
          </a>
          <a href="mailto:contact@skyledpro.com" className="p-8 bg-[#1F68F5] text-white rounded-[32px] flex flex-col items-center justify-center hover:bg-[#1a5ad4] transition-colors cursor-pointer">
            <Mail size={40} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-lg opacity-90">Klik untuk kirim email</p>
          </a>
        </div>
      </div>
    </section>
  );
}
