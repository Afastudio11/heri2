import { Instagram, Linkedin, MapPin } from 'lucide-react';
import { Link } from 'wouter';
import { LogoIcon } from './Navbar';
import { CONTACT_INFO, BUSINESS_UNITS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-gray-400 py-16" data-testid="section-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white text-skyled-navy rounded-lg">
                <LogoIcon className="w-8 h-8" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight leading-none text-white">Skyled Pro</span>
                <span className="text-xs font-medium tracking-widest uppercase text-gray-500">Indonesia</span>
              </div>
            </div>
            <p className="text-gray-500 leading-relaxed mb-6 max-w-md">
              Perusahaan holding strategis yang menghadirkan keunggulan dalam Manajemen Event, Konsultasi Strategis, dan Produksi Kreatif.
            </p>
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={16} />
              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Divisi Kami</h4>
            <ul className="space-y-3">
              {BUSINESS_UNITS.map((unit) => (
                <li key={unit.id}>
                  <Link 
                    href={unit.link} 
                    className="hover:text-white transition-colors"
                    data-testid={`link-footer-${unit.id}`}
                  >
                    {unit.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Hubungi Kami</h4>
            <ul className="space-y-3">
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
            <div className="flex gap-4 mt-6">
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg transition-colors hover-elevate"
                aria-label="Instagram"
                data-testid="link-social-instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="p-2 bg-white/10 rounded-lg transition-colors hover-elevate"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          <p data-testid="text-copyright">
            {currentYear} Skyled Pro Indonesia. Hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
