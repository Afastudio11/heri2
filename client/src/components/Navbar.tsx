import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Link } from 'wouter';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

const BUSINESS_UNITS = [
  { id: 'events', title: 'Event Organizer', subtitle: 'Skyled Pro Indonesia', link: '/event-organizer' },
  { id: 'consulting', title: 'Consulting', subtitle: 'Skyled Pro Consulting', link: '/consulting' },
  { id: 'production', title: 'Production', subtitle: 'Skyled Production', link: '/production' }
];

export const LogoIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <Globe className={className} />
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 px-6 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-4">
          <a 
            href="#home" 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            data-testid="link-home-logo"
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center border transition-colors ${
              isScrolled 
                ? 'bg-blue-600 text-white border-blue-600' 
                : 'bg-white/20 backdrop-blur-md text-white border-white/30'
            }`}>
              <Globe size={16} />
            </div>
            <span className={`font-bold text-xl tracking-tight transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Skyled Pro <span className="font-light opacity-80 text-sm">INDONESIA</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`font-medium text-sm transition-colors hover:opacity-75 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </a>
            ))}
            
            <div 
              className="relative"
              onMouseEnter={() => setIsBusinessOpen(true)}
              onMouseLeave={() => setIsBusinessOpen(false)}
            >
              <button 
                onClick={() => setIsBusinessOpen(!isBusinessOpen)}
                className={`font-medium text-sm transition-colors hover:opacity-75 flex items-center gap-1 py-2 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                Unit Bisnis <ChevronDown size={16} className={`transition-transform ${isBusinessOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isBusinessOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    {BUSINESS_UNITS.map((unit) => (
                      <a
                        key={unit.id}
                        href={unit.link}
                        onClick={() => setIsBusinessOpen(false)}
                        className="block px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer"
                        data-testid={`link-business-unit-${unit.id}`}
                      >
                        <span className="font-semibold text-blue-600">{unit.title}</span>
                        <p className="text-xs text-gray-500 mt-0.5">{unit.subtitle}</p>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex">
            <a 
              href="#contact"
              data-testid="link-partner-cta"
            >
              <Button 
                className={`rounded-full font-bold text-sm shadow-lg transition-all ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Bermitra Dengan Kami
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium border ${
                isScrolled 
                  ? 'text-gray-800 bg-gray-100 border-gray-200' 
                  : 'bg-black/20 hover:bg-black/30 backdrop-blur-md text-white border-white/10'
              }`}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute w-full left-0 border-b border-gray-100 shadow-xl mt-4 rounded-b-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-4 text-base font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-50"
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </a>
            ))}
            
            <div className="border-b border-gray-50">
              <button
                className="w-full flex items-center justify-between px-3 py-4 text-base font-semibold text-gray-800"
                onClick={() => setIsMobileBusinessOpen(!isMobileBusinessOpen)}
              >
                Unit Bisnis
                <ChevronDown size={20} className={`transition-transform ${isMobileBusinessOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileBusinessOpen && (
                <div className="pl-6 pb-2 space-y-1">
                  {BUSINESS_UNITS.map((unit) => (
                    <a
                      key={unit.id}
                      href={unit.link}
                      className="block px-3 py-3 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                      data-testid={`link-mobile-business-unit-${unit.id}`}
                    >
                      <span className="font-semibold text-blue-600">{unit.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="#contact" 
              className="block w-full mt-4 text-center bg-blue-600 text-white font-semibold px-6 py-4 rounded-xl"
              onClick={() => setIsOpen(false)}
              data-testid="link-mobile-partner-cta"
            >
              Bermitra Dengan Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
