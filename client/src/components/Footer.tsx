import { ArrowRight, Globe, Instagram, Facebook, Youtube, Smartphone } from 'lucide-react';
import { Link } from 'wouter';
import { CONTACT_INFO } from '@/lib/constants';

const BUSINESS_UNITS = [
  { id: 'events', title: 'Event Organizer', link: '/event-organizer' },
  { id: 'consulting', title: 'Consulting', link: '/consulting' },
  { id: 'production', title: 'Production', link: '/production' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="section-footer" className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-4 mb-20 pt-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6">
          Siap Berkolaborasi?
        </h2>
        <p className="text-gray-500 mb-10 leading-relaxed max-w-2xl mx-auto">
          Baik Anda membutuhkan penyelenggaraan event besar, merancang roadmap keberlanjutan, atau memproduksi merchandise custom, Skyled Pro Indonesia adalah solusi lengkap Anda.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
          <div className="bg-blue-600 text-white p-8 rounded-2xl flex-1 flex flex-col items-center shadow-lg shadow-blue-600/20">
            <div className="mb-4 w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Smartphone size={24} />
            </div>
            <h4 className="font-bold mb-1">Telepon Kami</h4>
            <p className="text-lg font-mono">{CONTACT_INFO.phone}</p>
          </div>
          
          <div className="bg-gray-50 text-gray-800 p-8 rounded-2xl flex-1 flex flex-col items-center border border-gray-100">
            <div className="mb-4 w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <h4 className="font-bold mb-1">Email Kami</h4>
            <p className="text-sm md:text-base font-mono">{CONTACT_INFO.email}</p>
          </div>
        </div>

        <a 
          href="#contact"
          className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white h-14 px-10 rounded-full font-bold transition-all shadow-xl shadow-blue-600/30"
        >
          Hubungi Kami Sekarang <ArrowRight size={18} />
        </a>
      </div>

      <div className="bg-gray-50 pt-16 pb-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-2xl mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Globe size={16} />
                </div>
                Skyled Pro
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Skyled Pro Indonesia adalah perusahaan event organizer dan production terkemuka. Mitra terpercaya Anda dalam menciptakan pengalaman luar biasa.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Perusahaan</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#about" className="hover:text-blue-600">Tentang Kami</a></li>
                <li><a href="#business" className="hover:text-blue-600">Unit Bisnis</a></li>
                <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-blue-600">Kontak</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-4">Sosial Media</h4>
              <div className="flex gap-4">
                <SocialIcon icon={<Instagram size={18} />} />
                <SocialIcon icon={<Facebook size={18} />} />
                <SocialIcon icon={<Youtube size={18} />} />
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p data-testid="text-copyright">Skyled Pro Indonesia © {currentYear}</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
    {icon}
  </a>
);
