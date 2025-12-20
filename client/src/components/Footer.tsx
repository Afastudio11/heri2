import { Instagram, Facebook, Youtube, Smartphone, MessageCircle, Mail } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';
import logoBlack from '@assets/BLACK_1765868438624.png';

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

        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <a 
            href="https://wa.me/6289630963302" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b858] text-white px-6 py-3 rounded-full font-medium text-sm transition-all"
            data-testid="link-footer-whatsapp"
          >
            <MessageCircle size={18} />
            Hubungi via WhatsApp
          </a>
          
          <a 
            href={`mailto:${CONTACT_INFO.email}`}
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium text-sm transition-all"
            data-testid="link-footer-cta"
          >
            <Mail size={18} />
            Kirim Email
          </a>
        </div>
      </section>

      <div className="bg-gray-50 pt-12 pb-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="col-span-1 md:col-span-2">
              <img src={logoBlack} alt="Skyled Pro" className="h-8 w-auto mb-3" />
              <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
                Skyled Pro Indonesia adalah perusahaan yang bergerak di bidang event organizer, consulting, dan production, dengan fokus menghadirkan solusi terintegrasi yang inovatif dan berdampak. Kami mengorkestrasi ide menjadi pengalaman nyata melalui perencanaan strategis, eksekusi profesional, serta produksi berkualitas tinggi.
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
              <h4 className="font-bold text-gray-900 mb-3 text-sm">Kontak</h4>
              <ul className="space-y-2 text-sm text-gray-500 mb-4">
                <li className="flex items-center gap-2">
                  <Smartphone size={14} />
                  {CONTACT_INFO.phone}
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={14} />
                  {CONTACT_INFO.email}
                </li>
              </ul>
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
