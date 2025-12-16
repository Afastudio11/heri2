import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { NAV_LINKS } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import logoWhite from '@assets/WHITE_1765868438623.png';
import logoBlack from '@assets/BLACK_1765868438624.png';

const BUSINESS_UNITS = [
  { id: 'events', title: 'Event Organizer', subtitle: 'Skyled Pro Indonesia', link: '/event-organizer' },
  { id: 'consulting', title: 'Consulting', subtitle: 'Skyled Pro Consulting', link: '/consulting' },
  { id: 'production', title: 'Production', subtitle: 'Skyled Production', link: '/production' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBusinessOpen, setIsBusinessOpen] = useState(false);
  const [isMobileBusinessOpen, setIsMobileBusinessOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [pendingHash, setPendingHash] = useState<string | null>(null);
  
  const isHomePage = location === '/';
  const useDarkText = !isHomePage || isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (pendingHash && location === '/') {
      const timer = setTimeout(() => {
        const element = document.getElementById(pendingHash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        setPendingHash(null);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location, pendingHash]);

  const handleNavClick = useCallback((href: string) => {
    setIsOpen(false);
    setIsBusinessOpen(false);
    
    if (href === '/') {
      setLocation('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (href.startsWith('/#')) {
      const hash = href.substring(2);
      if (location === '/') {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        setPendingHash(hash);
        setLocation('/');
      }
    }
  }, [location, setLocation]);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 px-6 ${
        useDarkText 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center gap-4">
          <Link 
            href="/" 
            className="flex-shrink-0 flex items-center cursor-pointer"
            data-testid="link-home-logo"
          >
            <img 
              src={useDarkText ? logoBlack : logoWhite} 
              alt="Skyled Pro" 
              className="h-8 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <button 
                key={item.name} 
                onClick={() => handleNavClick(item.href)}
                className={`font-medium text-sm transition-colors hover:opacity-75 ${
                  useDarkText ? 'text-gray-700' : 'text-white/90'
                }`}
                data-testid={`link-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </button>
            ))}
            
            <div 
              className="relative"
              onMouseEnter={() => setIsBusinessOpen(true)}
              onMouseLeave={() => setIsBusinessOpen(false)}
            >
              <button 
                onClick={() => setIsBusinessOpen(!isBusinessOpen)}
                className={`font-medium text-sm transition-colors hover:opacity-75 flex items-center gap-1 py-2 ${
                  useDarkText ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                Unit Bisnis <ChevronDown size={16} className={`transition-transform ${isBusinessOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isBusinessOpen && (
                <div className="absolute top-full left-0 pt-2 z-50">
                  <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2">
                    {BUSINESS_UNITS.map((unit) => (
                      <Link
                        key={unit.id}
                        href={unit.link}
                        onClick={() => setIsBusinessOpen(false)}
                        className="block px-4 py-3 hover:bg-blue-50 transition-colors cursor-pointer"
                        data-testid={`link-business-unit-${unit.id}`}
                      >
                        <span className="font-semibold text-blue-600">{unit.title}</span>
                        <p className="text-xs text-gray-500 mt-0.5">{unit.subtitle}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="hidden md:flex">
            <button 
              onClick={() => handleNavClick('/#contact')}
              data-testid="link-partner-cta"
            >
              <Button 
                className={`rounded-full font-bold text-sm shadow-lg transition-all ${
                  useDarkText 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-blue-600 hover:bg-blue-50'
                }`}
              >
                Bermitra Dengan Kami
              </Button>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all text-sm font-medium border ${
                useDarkText 
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
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-4 text-base font-semibold text-gray-800 hover:text-blue-600 border-b border-gray-50"
                data-testid={`link-mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </button>
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
                    <Link
                      key={unit.id}
                      href={unit.link}
                      className="block px-3 py-3 text-sm text-gray-600 hover:text-blue-600"
                      onClick={() => setIsOpen(false)}
                      data-testid={`link-mobile-business-unit-${unit.id}`}
                    >
                      <span className="font-semibold text-blue-600">{unit.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={() => handleNavClick('/#contact')}
              className="block w-full mt-4 text-center bg-blue-600 text-white font-semibold px-6 py-4 rounded-xl"
              data-testid="link-mobile-partner-cta"
            >
              Bermitra Dengan Kami
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
