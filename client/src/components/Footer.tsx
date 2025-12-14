import { ArrowRight, Globe, Instagram, Facebook, Youtube, Smartphone } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="section-footer" className="w-full bg-white">
      <section id="contact" className="max-w-3xl mx-auto px-4 mb-16 pt-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Siap Berkolaborasi?
        </h2>
        <p className="text-gray-500 text-sm mb-8 leading-relaxed max-w-xl mx-auto">
          Baik Anda membutuhkan penyelenggaraan event besar, merancang roadmap keberlanjutan, atau memproduksi merchandise custom, Skyled Pro Indonesia adalah solusi lengkap Anda.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <div className="bg-blue-600 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3">
            <Smartphone size={18} />
            <span className="font-medium text-sm">{CONTACT_INFO.phone}</span>
          </div>
          
          <div className="bg-gray-100 text-gray-700 px-6 py-4 rounded-xl flex items-center justify-center gap-3">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span className="font-medium text-sm">{CONTACT_INFO.email}</span>
          </div>
        </div>

        <a 
          href={`mailto:${CONTACT_INFO.email}`}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium text-sm transition-all"
          data-testid="link-footer-cta"
        >
          Hubungi Kami <ArrowRight size={16} />
        </a>
      </section>

      <div className="bg-gray-50 pt-12 pb-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-xl mb-3">
                <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <Globe size={14} />
                </div>
                Skyled Pro
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Skyled Pro Indonesia adalah perusahaan event organizer dan production terkemuka. Mitra terpercaya Anda dalam menciptakan pengalaman luar biasa.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-gray-500">
                <li><a href="#about" className="hover:text-blue-600">Tentang Kami</a></li>
                <li><a href="#business" className="hover:text-blue-600">Unit Bisnis</a></li>
                <li><a href="#portfolio" className="hover:text-blue-600">Portfolio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Sosial Media</h4>
              <div className="flex gap-3">
                <SocialIcon icon={<Instagram size={16} />} />
                <SocialIcon icon={<Facebook size={16} />} />
                <SocialIcon icon={<Youtube size={16} />} />
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
            <p data-testid="text-copyright">Skyled Pro Indonesia © {currentYear}</p>
            <p>All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
  <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 text-gray-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
    {icon}
  </a>
);
