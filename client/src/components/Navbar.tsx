import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'wouter';
import { NAV_LINKS, BUSINESS_UNITS } from '@/lib/constants';
import { Button } from '@/components/ui/button';

export const LogoIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M10 20V26C10 28.2091 11.7909 30 14 30H20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="4" fill="currentColor"/>
  </svg>
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
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-4' 
          : 'bg-transparent py-6'
      }`}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4">
          <a 
            href="#home" 
            className="flex-shrink-0 flex items-center gap-3 cursor-pointer"
            data-testid="link-home-logo"
          >
            <div className={`p-2 rounded-lg transition-colors ${
              isScrolled ? 'bg-skyled-navy text-white' : 'bg-white text-skyled-navy'
            }`}>
              <LogoIcon className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl font-bold tracking-tight leading-none transition-colors ${
                isScrolled ? 'text-skyled-navy' : 'text-white'
              }`}>
                Skyled Pro
              </span>
              <span className={`text-xs font-medium tracking-widest uppercase transition-colors ${
                isScrolled ? 'text-gray-500' : 'text-white/80'
              }`}>
                Indonesia
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`font-medium text-sm transition-colors hover:opacity-75 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
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
                  isScrolled ? 'text-gray-700' : 'text-white'
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
                        className="block px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer"
                        data-testid={`link-business-unit-${unit.id}`}
                      >
                        <span className={`font-semibold ${unit.textColor}`}>{unit.title}</span>
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
                    ? 'bg-skyled-navy text-white hover:bg-blue-900' 
                    : 'bg-white text-skyled-navy hover:bg-gray-100'
                }`}
              >
                Bermitra Dengan Kami
              </Button>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)} 
              className={isScrolled ? 'text-gray-800' : 'text-white'}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-4 text-base font-bold text-gray-800 hover:text-skyled-blue border-b border-gray-50"
                onClick={() => setIsOpen(false)}
                data-testid={`link-mobile-nav-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {item.name}
              </a>
            ))}
            
            <div className="border-b border-gray-50">
              <button
                className="w-full flex items-center justify-between px-3 py-4 text-base font-bold text-gray-800"
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
                      className="block px-3 py-3 text-sm text-gray-600 hover:text-skyled-blue"
                      onClick={() => setIsOpen(false)}
                      data-testid={`link-mobile-business-unit-${unit.id}`}
                    >
                      <span className={`font-semibold ${unit.textColor}`}>{unit.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="#contact" 
              className="block w-full mt-4 text-center bg-skyled-navy text-white font-bold px-6 py-4 rounded-xl"
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
