import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const LogoIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M10 20C10 14.4772 14.4772 10 20 10C25.5228 10 30 14.4772 30 20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <path d="M10 20V26C10 28.2091 11.7909 30 14 30H20" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
    <circle cx="20" cy="20" r="4" fill="currentColor"/>
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Business Units', href: '#business' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <div className={`p-2 rounded-lg ${isScrolled ? 'bg-skyled-navy text-white' : 'bg-white text-skyled-navy'}`}>
                <LogoIcon className="w-8 h-8" />
            </div>
            <div className="flex flex-col">
                <span className={`text-xl font-bold tracking-tight leading-none ${isScrolled ? 'text-skyled-navy' : 'text-white'}`}>Skyled Pro</span>
                <span className={`text-xs font-medium tracking-widest uppercase ${isScrolled ? 'text-gray-500' : 'text-white/80'}`}>Indonesia</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className={`font-medium text-sm transition-colors hover:opacity-75 ${isScrolled ? 'text-gray-700' : 'text-white'}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a href="#contact" className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-lg ${isScrolled ? 'bg-skyled-navy text-white hover:bg-blue-900' : 'bg-white text-skyled-navy hover:bg-gray-100'}`}>
              Partner With Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full border-b border-gray-100 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-4 text-base font-bold text-gray-800 hover:text-skyled-blue border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a href="#contact" className="block w-full mt-4 text-center bg-skyled-navy text-white font-bold px-6 py-4 rounded-xl">
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;