import { Instagram, Linkedin } from 'lucide-react';
import { Link } from 'wouter';
import { LogoIcon } from './Navbar';
import { CONTACT_INFO } from '@/lib/constants';

const BUSINESS_UNITS = [
  { id: 'events', title: 'Event Organizer', link: '/event-organizer' },
  { id: 'consulting', title: 'Consulting', link: '/consulting' },
  { id: 'production', title: 'Production', link: '/production' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer data-testid="section-footer">
      <div className="bg-[#1F68F5] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Bergabunglah Bersama Kami
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Jadilah bagian dari mitra kami dan wujudkan visi bisnis Anda bersama Skyled Pro Indonesia.
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-[#1F68F5] font-bold px-8 py-4 rounded-full hover:bg-[#F5F8FF] transition-all shadow-lg"
          >
            Hubungi Kami Sekarang
          </a>
        </div>
      </div>

      <div className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white text-[#1F68F5] rounded-lg">
                  <LogoIcon className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-white">Skyled Pro</span>
                  <span className="text-xs font-medium tracking-widest uppercase text-gray-500">Indonesia</span>
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                Perusahaan holding strategis yang menghadirkan keunggulan dalam Manajemen Event, Konsultasi Strategis, dan Produksi Kreatif.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Divisi Kami</h4>
              <ul className="space-y-2">
                {BUSINESS_UNITS.map((unit) => (
                  <li key={unit.id}>
                    <Link 
                      href={unit.link} 
                      className="text-sm hover:text-white transition-colors"
                      data-testid={`link-footer-${unit.id}`}
                    >
                      {unit.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm">Hubungi Kami</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="hover:text-white transition-colors"
                    data-testid="link-footer-email"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li>
                  <a 
                    href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`} 
                    className="hover:text-white transition-colors"
                    data-testid="link-footer-phone"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </li>
              </ul>
              <div className="flex gap-3 mt-4">
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                  data-testid="link-social-instagram"
                >
                  <Instagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                  aria-label="LinkedIn"
                  data-testid="link-social-linkedin"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
            <p data-testid="text-copyright">
              © {currentYear} Skyled Pro Indonesia. Hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
